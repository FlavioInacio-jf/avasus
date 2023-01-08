export function displayQuantity(number: number) {
  return new Intl.NumberFormat('pt-BR').format(number || 0);
}
