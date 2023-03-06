export function future_values(Data1, Data2) {
  const neededValues = 3;
  const rise = Data2 - Data1;
  let results = [];
  results.push(Data1, Data2);
  for (let i = 0; i < neededValues; i++) {
    let test = results[1 + i] + rise;
    results.push(test);
  }
  return results;
}

