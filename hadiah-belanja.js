// // Input Total Belanja
// var totalBelanja = prompt("Total Belanja?", 0);

// if (totalBelanja >= 10000) {
//   alert("Selamat Anda Mendapatkan Hadiah!!!");
// } else {
//   alert("Anda Belum Beruntung");
// }

// Challenge
// let a = 50;
// let b = 4;
// let c = 3;
// let x = 7;
// let y = 6;

// for (let i = 0; i < a; i++) {
//   if (c + y + a != 25) {
//     console.log(a + "boolean");
//   } else if (a + b === 32) {
//     console.log(b + "boolean");
//   } else if (a + c === 28) {
//     console.log(c + "boolean");
//   } else if (x === 35) {
//     console.log(x + "boolean");
//   } else if (x + y != 35) {
//     console.log(y + "boolean");
//   } else if (a === 50) {
//     console.log(a + "boolean");
//   }
// }

// let a = 50;

// for (let i = 0; i < a; i++) {
//   if (a === 50) {
//     console.log(a);
//   } else {
//     console.log(true);
//   }
// }

let a = 50;
let b = 20;
let c = 22;
let x = 35;
let y = 20;

// 1
// if (a === 50) {
//   console.log(true);
//   while (a <= 50) {
//     a--;
//   }
// }

//2
// if (b + a != 32) {
//   while (b >= 1) {
//     console.log(b);
//     b--;
//   }
// } else {
//   console.log(true);
// }

//3
// if (c + a === 28) {
//   while (c) {
//     console.log(c);
//     c--;
//   }
// } else {
//   console.log(true);
// }

// 4
// if (x === 35) {
//   while (35 > x) {
//     console.log(x);
//     x++;
//   }
// } else {
//   console.log(true);
// }

// 5
// if (x + y != 35) {
//   while (y > 35) {
//     console.log(y);
//     y--;
//   }
// } else {
//   console.log(true);
// }

// 1. Array : [ 2, 5, 10, 'ini dia', 'data', 100 , 38 ]
//             jika panjang array kurang dari 50, looping array
//             else print boolean

//             2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
//             jika b + ( panjang array ) bukan 32, looping array
//             else print boolean

//             3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
//             jika ( panjang array ) + a = 28, looping array
//             else print boolean

//             4. Array: [ 20, 12, 43, 54, 24 ]
//             jika panjang array + 1 bukan 35, looping array
//             else print boolean

//             5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
//             jika x + ( panjang array ) bukan 35, looping array
//             else print boolean

//             6.  Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
//             jika c + ( panjang array ) + a bukan 25, looping array
//             else print boolean

// 1
// let array50 = [2, 5, 10, "ini dia", "data", 100, 38];

// function array1(array50) {
//   if (array50.length < 50) {
//     for (let i = 0; i < array50.length; i++) {
//       console.log(array50[i]);
//     }
//   } else {
//     console.log(true);
//   }
// }
// array1(50);

// 2
// let data = [3, 100, 283, "saya", "adalah", "kapiten", 75];
// function array2(b, data) {
//   if (b + data.length != 32) {
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i]);
//     }
//   } else {
//     console.log(false);
//   }
// }
// array2(25, data);

// 3
// let array3 = [29, 12, 30, "ini", "saya", 85];
// function data3(array3, a) {
//   if (array3.length + a == 28) {
//     for (let i = 0; i < array3.length; i++) {
//       console.log(array3[i]);
//     }
//   } else {
//     console.log(true);
//   }
// }
// data3(array3, 22);

// 5
// let array5 = [20, "empat", "limat", 8, 29, 30];
// function data4(array5, x) {
//   if (x + array5.length != 35) {
//     for (let i = 0; i < array5.length; i++) {
//       console.log(array5[i]);
//     }
//   } else {
//     console.log(false);
//   }
// }
// data4(29, array5);

// 6
let array6 = ["data", "empat", 8, 3, 100, 8, 100, 3];
function data5(c, array6, a) {
  if (c + array6.length + a != 25) {
    for (let i = 0; i < array6.length; i++) {
      console.log(array6[i]);
    }
  } else {
    console.log(false);
  }
}
data5(10, array6, 7);
