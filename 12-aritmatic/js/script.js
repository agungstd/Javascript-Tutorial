// Operasi Matematika: Tambah (+), Kurang (-), Bagi (/), Kali (*)
let sum = 10 + 20;
console.log(`Hasil penjumlahan: ${sum}`);

let price = 9.99, diskon = 1.5;
console.log(`Harga setelah diskon: ${price - diskon}`);

let x = "10", y = "20";
console.log(`Gabungan string x + y: ${x + y}`);

let hasil = 10 + "20";
console.log(`Gabungan angka dan string: ${hasil}`);

console.log(`Hasil pengurangan: ${30 - 10}`);
console.log(`Hasil perkalian: ${30 * 10}`);
console.log(`Perkalian dengan string angka: ${"30" * 10}`);
console.log(`Pembagian dengan string angka: ${"30" / 10}`);
console.log(`Hasil pembagian: ${30 / 10}`);

let energy = {
  valueOf() {
    return 100;
  },
};

let energyNow = energy - 10;
console.log(`Energy + 100: ${energy + 100}`);
console.log(`Energy * 10: ${energy * 10}`);
console.log(`Energy / 5: ${energy / 5}`);

let energy2 = {
  toString() {
    return "100"; // Perubahan kecil agar perilaku lebih eksplisit
  },
};

energyNow = energy2 - 10;
console.log(`Energy2 + 100: ${energy2 + 100}`);
console.log(`Energy2 * 10: ${energy2 * 10}`);
console.log(`Energy2 / 5: ${energy2 / 5}`);