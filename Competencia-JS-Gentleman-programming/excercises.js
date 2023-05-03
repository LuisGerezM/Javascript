// 1-Dado un array de números, escribir una función que encuentre el número más grande.
// 2-Dado un array de números, escribir una función que encuentre el número más pequeño.
// 3-Dado un array de números, escribir una función que calcule la suma de todos los elementos.
// 4-Dado un array de números, escribir una función que calcule el promedio de todos los elementos.
// 5-Dado un string, escribir una función que invierta el orden de las palabras en el string.
// 6-Dado un string, escribir una función que encuentre la palabra más larga en el string.
// 7-Dado un string y un número n, escribir una función que trunque el string a n caracteres y agregue "..." al final.
// 8-Dado un array de números, escribir una función que elimine todos los números duplicados y devuelva el array resultante sin duplicados.
// 9-Dado un array de números y un número objetivo, escribir una función que encuentre dos números en el array que sumen el número objetivo.

// 1
const searchMax = (array) => Math.max(...array);
console.log(searchMax([2, 6, 7, 1]));

// 2
const searchMin = (array) => Math.min(...array);
console.log(searchMin([2, 6, 7, 1]));

// 3
const sumItemsArray = (array) => array.reduce((sum, nextNum) => sum + nextNum, 0);
console.log(sumItemsArray([2, 6, 7, 1]));

// 4
const promItemsArray = (array) => array.reduce((sum, nextNum) => sum + nextNum, 0) / array.length;
console.log(promItemsArray([2, 6, 7, 1]));

// 5
const revertWord = (string) => string.split("").reverse().join("");
console.log(revertWord("gentlemanP"));

// 6
const searchLongestWord = (string) => string.split(" ").reduce((longestWord, word) => (word.length > longestWord.length ? word : longestWord), "");
console.log(searchLongestWord("gentlemanP se llama Alan y es argentino"));

// 7
const truncString = (string, n) => (string.length <= n ? string : `${string.slice(0, n)}...`);
console.log(truncString("gentlemanP se llama Alan y es argentino", 27));

// 8
const removeDuplicates = (array) => [...new Set(array)];
console.log(removeDuplicates([2, 6, 7, 1, 2, 1, 3, 2, 1]));

// 9
const findTarget = (array, target) => {
  const [num, ...rest] = array;
  const complemento = target - num;
  if (rest.includes(complemento)) {
    return [complemento, num];
  }
  return rest.length > 1 ? findTarget(rest, target) : console.log("Upsss!!! no hay números complementarios...");
};
console.log(findTarget([6, 1, 4, 5], 9));
console.log(findTarget([6, 1, 10, 15, 12, 15], 9));
