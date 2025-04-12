// boolean adalah type data primitif
let completed = true;
let active = new Boolean(false);

active.primitiveValue = active.valueOf();
console.log(active.primitiveValue);

completed.name = "primitive";
console.log(completed.name);
console.log(typeof completed);
console.log(typeof active);

console.log(completed instanceof Boolean);
console.log(active instanceof Boolean);

let falseObj = new Boolean(false);
console.log(falseObj);
console.log(falseObj.valueOf());
//if (falseObj.valueOf()) {
if (falseObj) {
  console.log("INi ternyata jalan");
}

let false2 = true;
if (false2) {
  console.log("Ini kondisi primitif");
}

// Tambahan kode baru tanpa menghapus kode lama
let isBooleanPrimitive = (value) => typeof value === "boolean"; // Menambahkan fungsi untuk memeriksa apakah nilai adalah boolean primitif
console.log(isBooleanPrimitive(completed)); // true
console.log(isBooleanPrimitive(active)); // false

let booleanTest = new Boolean(true);
booleanTest.newProperty = "Hello World"; // Menambahkan properti baru untuk objek boolean
console.log(booleanTest.newProperty);