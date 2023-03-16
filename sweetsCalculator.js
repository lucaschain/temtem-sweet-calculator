import { buildSweetCategories } from "./sweets.js";
import { INPUT } from "./input.js";
import { print } from "./print.js";

function findSmallestCombination(N, coinValues) {
  if (N === 0) {
    return [];
  }

  const queue = [{ combination: [], sum: 0 }];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    for (const coin of coinValues) {
      const newSum = current.sum + coin.value;
      const newCombination = [...current.combination, coin];

      if (newSum === N) {
        return newCombination;
      }

      const key = newSum + ":" + newCombination.join(",");
      if (!visited.has(key)) {
        visited.add(key);
        queue.push({ combination: newCombination, sum: newSum });
      }
    }
  }

  return null;
}

function countByType(total, sweets) {
  const result = { ...total };
  for (const sweet of sweets) {
    const currentCategory = result[sweet.type] || {};
    const current = currentCategory[sweet.name] || 0;
    result[sweet.type] = {
      ...currentCategory,
      [sweet.name]: current + 1,
    };
  }
  return result;
}

let total = {};
for (const attribute in INPUT) {
  const N = INPUT[attribute];
  const sweets = buildSweetCategories(attribute);
  const smallestCombination = findSmallestCombination(N, sweets);
  total = countByType(total, smallestCombination);
}

print(total);
