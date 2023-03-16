export function print(total) {
  for (const category in total) {
    console.log(`Category: ${category}`);
    for (const sweet in total[category]) {
      console.log(`  -> ${sweet}: ${total[category][sweet]}`);
    }
    console.log("");
  }
}
