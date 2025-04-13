export function isValid(isbn: string): boolean {
  if (!/^\d{13}$/.test(isbn)) {
    return false;
  }

  const digits = isbn.split('').map(Number);

  const sum = digits
      .slice(0, 12)
      .reduce((acc, digit, idx) => acc + digit * (idx % 2 === 0 ? 1 : 3), 0);

  const checkDigit = (10 - (sum % 10)) % 10;

  return digits[12] === checkDigit;
}
