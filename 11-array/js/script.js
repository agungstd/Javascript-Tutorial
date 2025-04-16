// JavaScript Array
let score = new Array();
console.log(score);

score = new Array(10, 20, 30);
console.log(score);

score = new Array("Red");
console.log(score);

score = Array(40, 50);
console.log(score);

let colors = ["red", "green", "blue"];
console.log(colors);

colors = [];
console.log(colors);

let provinces = ["DKI Jakarta", "West Java", "Central Java"];
console.log(provinces[0]);
console.log(provinces[1]);
console.log(provinces[2]);

provinces[1] = "West Papua";
console.log(provinces);

console.log(`Number of elements in the array: ${provinces.length}`);

provinces.push("East Java");
console.log(provinces);

provinces.unshift("West Kalimantan");
console.log(provinces);

const lastValue = provinces.pop();
console.log(`Element removed from the end of the array: ${lastValue}`);
console.log(provinces);

const firstValue = provinces.shift();
console.log(`Element removed from the beginning of the array: ${firstValue}`);
console.log(provinces);

let idx = provinces.indexOf("DKI Jakarta");
console.log(`Index of 'DKI Jakarta': ${idx}`);

console.log(`Is 'provinces' an array? ${Array.isArray(provinces)}`);

// Function to remove an element by its value
function removeElementByValue(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

provinces = removeElementByValue(provinces, "West Papua");
console.log(`Array after removing 'West Papua': ${provinces}`);

// Function to filter provinces based on a search keyword
function filterProvinces(arr, keyword) {
  return arr.filter((province) => province.includes(keyword));
}

let filteredProvinces = filterProvinces(provinces, "Java");
console.log(`Filtered provinces containing 'Java': ${filteredProvinces}`);