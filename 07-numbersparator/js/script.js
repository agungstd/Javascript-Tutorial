// number separator
let buget = 100000000000;
console.log(buget);
buget = 100_000_000_000;
console.log(buget);

let amount = 120_201_123.05;
console.log(amount);

let expence = 123_450;
console.log(expence);

let fee = 12_345_00; // memperbaiki let fee agar menggunakan separator yang valid
console.log(fee);

let salary = 0.000_001;
console.log(salary);

let max = 9_121_121_242_233_232_232_443n;
console.log(max);

let nibbiner = 0b1011_0101;
console.log(nibbiner);

let val = 0o1234_5670; // tetap tidak error
console.log(val);

let message = 0xd0_e0_f0;
console.log(message);

let c = 0o51;
console.log(c);

let e = parseInt("111", 2); // tetap valid
console.log(e);

let f = 0b111; // tetap valid
console.log(f);

// Tambahan kode baru tanpa menghapus yang sudah ada sebelumnya
let hexValue = 0x1a_2b_3c; // contoh format hex dengan separator
console.log(hexValue);

let binaryValue = 0b1111_0000; // contoh format binary dengan separator
console.log(binaryValue);

let octalValue = 0o777_666; // contoh format oktal dengan separator
console.log(octalValue);