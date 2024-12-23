import { createClient } from '@libsql/client';
import { parse, addMonths, addYears, differenceInDays } from 'date-fns';
import { Resend } from 'resend';



export interface Env {
	TURSO_DATABASE_URL?: string;
	TURSO_DATABASE_AUTH_TOKEN?: string;
	RESEND_KEY?: string;
}



export default {
	async scheduled(event, env, ctx): Promise<void> {
		if (!env.TURSO_DATABASE_URL || !env.TURSO_DATABASE_AUTH_TOKEN) {
			console.log("Database URL or Auth Token is missing.");
			return;
		}

		const db = createClient({
			url: env.TURSO_DATABASE_URL,
			authToken: env.TURSO_DATABASE_AUTH_TOKEN,
		});

		try {
			const allSubscriptions = await db.execute(`
        SELECT 
          subscriptions.*,
          users.email AS user_email,
          users.name AS user_name
        FROM subscriptions
        INNER JOIN users ON subscriptions.user_id = users.id
      `);

			const today = new Date();

			for (const sub of allSubscriptions.rows) {
				const parsedStartDate = parse(sub.start_date as string, 'dd/MM/yyyy', new Date());
				const renewalDate =
					sub.subscription_type === 'Monthly'
						? addMonths(parsedStartDate, 1)
						: sub.subscription_type === 'Yearly'
							? addYears(parsedStartDate, 1)
							: null;

				if (!renewalDate) continue;

				const daysUntilRenewal = differenceInDays(renewalDate, today);

				const lastReminded = sub.last_reminded
					? parse(sub.last_reminded as string, 'yyyy-MM-dd', new Date())
					: null;

				const isEmailAlreadySent =
					lastReminded &&
					differenceInDays(today, lastReminded) <= daysUntilRenewal;

				if (isEmailAlreadySent) {
					console.log(`Email already sent to ${sub.user_email} for subscription "${sub.title} at ${sub.last_reminded} `)
				}

				if (daysUntilRenewal <= 2 && daysUntilRenewal > 0 && !isEmailAlreadySent) {
					console.log(
						`Sending email to ${sub.user_email} for subscription "${sub.title}"`
					);

					await sendEmail(sub.title as string, daysUntilRenewal, env);
					await db.execute({
						sql: 'UPDATE subscriptions SET last_reminded = ? WHERE id = ?',
						args: [today.toISOString().split('T')[0], sub.id],
					});

					console.log(event.scheduledTime)
					console.log(ctx);
				}
			}
		} catch (error) {
			console.error("Error processing subscriptions:", error);
		}
	},
} satisfies ExportedHandler<Env>;



async function sendEmail(title: string, number: number, env: Env) {
	if (!env.RESEND_KEY) {
		return console.log("Resend key is missing.");
	}
	const resend = new Resend(env.RESEND_KEY);
	const { error } = await resend.emails.send({
		from: 'Subscription Manager <onboarding@resend.dev>',
		to: ['freako1498@gmail.com'],
		subject: `Subscription ${title} due soon.`,
		html: `
			<p> Dear User, </p>
			<p> Your ${title} - Subscription is due for renewal in ${number} days. </p>
		`,
	});
	if (error) {
		return console.error({ error });
	}
}