export function countTools(categories) {
  let total = 0;

  categories.forEach(cat => {
    total += cat.items.length;
  });

  return total;
}