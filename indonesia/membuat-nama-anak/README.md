# Membuat Nama Anak
Sebagai orang tua yang akan memiliki anak, Anda harus membuat nama anak yang menarik.

Dalam kasus ini Anda akan diberi beberapa karakter yang harus mewakili nama anak Anda. Buatlah fungsi untuk menentukan apakah Anda dapat membuat nama anak menggunakan karakter yang sudah diberikan. 

Jika Anda dapat membuat nama anak menggunakan karakter yang sudah diberikan, maka fungsi akan mengembalikan `true`. Jika tidak, maka fungsi akan mengembalikan `false`.

Anda hanya dapat membuat nama anak jika karakternya masih tersedia.
Misalnya, jika Anda diberi `characters = "abcabc"` dan `name = "aabbccc"` Anda tidak dapat membuat nama anak karena Anda kehilangan satu `c`.

### Input
```js
const characters = "Aaeanp Sj say"
const name = "Asep Sanjaya"
```

### Output
```js
true
```

## Instructions
1. Anda harus melengkapi fungsi `generateChildrenName` pada file `generateChildrenName.js`
2. Fungsi harus mengembalikan `true` jika nama anak dapat dibuat dengan karakter yang sudah diberikan dan `false` jika tidak.
3. Jalankan program dengan mengetik `node run`