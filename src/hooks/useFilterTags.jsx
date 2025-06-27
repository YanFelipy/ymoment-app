

export const useFilterTags = () => {

  function countTags (array, palavra) {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === palavra) {
      contador++;
    }
  }
  return contador;
}


        function findRepeatedValues(arr) {
  // Check if arr is an array before proceeding
  if (!Array.isArray(arr)) {

    return []; // Return an empty array or handle the error appropriately
  }

  const counts = new Map();
  const repeatedValues = [];

  for (const item of arr) {
    counts.set(item, (counts.get(item) || 0) + 1);
  }

  for (const [key, value] of counts.entries()) {
    if (value > 1) {
      repeatedValues.push(key);
    }
  }

  return repeatedValues;
}
return {findRepeatedValues, countTags }
}