export default function getCurrencySymbol(currency: string | undefined): string {
  switch (currency) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    case 'GBP':
      return '£';
    case 'SAR':
      return '﷼';
    case 'INR':
      return '₹';
    default:
      return '$';
  }
}