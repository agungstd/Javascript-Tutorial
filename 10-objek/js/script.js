// Javascript Objek
let kosong = {};
console.log(kosong);

let personal = {
  namaDepan: "Pojok",
  namaAkhir: "Code",
};

console.log(personal);
console.log(personal.namaDepan);
console.log(personal.namaAkhir);

console.log(personal["namaDepan"]);
console.log(personal["namaAkhir"]);

let alamat = {
  "nomor rumah": 1234,
  jalan: "Flamboyan no 44",
  propinsi: "DKI",
};

console.log(alamat["nomor rumah"]);

// Validasi akses properti sebelum digunakan
if ("nomor rumah" in alamat) {
  console.log(alamat["nomor rumah"]);
} else {
  console.log("Properti 'nomor rumah' tidak ditemukan");
}

personal.namaDepan = "Percobaan";
personal.age = 24;
console.log(personal);

delete personal.age;
console.log(personal);

// Cek properti objek dengan validasi
console.log("namaDepan" in personal ? "Properti tersedia" : "Properti tidak ditemukan");
console.log("age" in personal ? "Properti tersedia" : "Properti tidak ditemukan");