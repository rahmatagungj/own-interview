# Sepeda Gandeng
Sepeda gandeng adalah sepeda yang dioperasikan oleh dua orang: orang `A` dan orang `B`. Kedua orang mengayuh sepeda, tetapi orang yang mengayuh lebih cepat menentukan kecepatan sepeda. Jadi jika orang `A` mengayuh dengan kecepatan `5`, dan orang `B` mengayuh dengan kecepatan `4`, sepeda gandeng bergerak dengan kecepatan `5` (yaitu, `gandengSpeed ​​= max(kecepatanA, kecepatanB)`).

Anda diberikan dua daftar bilangan bulat positif: satu yang berisi kecepatan pengendara yang mengenakan kemeja merah dan satu yang berisi kecepatan pengendara yang mengenakan kemeja biru. Setiap pengendara diwakili oleh satu bilangan bulat positif, yang merupakan kecepatan mereka mengayuh sepeda gandeng. 

Kedua daftar tersebut memiliki panjang yang sama, artinya jumlah pengendara kaos merah sama banyaknya dengan jumlah pembalap kaos biru. Tujuan Anda adalah untuk memasangkan setiap pengendara yang mengenakan kemeja merah dengan pengendara yang mengenakan kemeja biru untuk mengoperasikan sepeda gandeng.

Tulis fungsi yang mengembalikan kecepatan total maksimum yang mungkin atau kecepatan total minimum yang mungkin dari semua sepeda gandeng yang dikendarai berdasarkan parameter input, `fastest`. Jika `fastest = true`, fungsi Anda harus mengembalikan kecepatan total maksimum yang mungkin; jika tidak, itu harus mengembalikan kecepatan total minimum.

"Kecepatan total" didefinisikan sebagai jumlah kecepatan semua sepeda gandeng yang dikendarai. Misalnya, jika ada 4 pengendara (2 pengendara kaos merah dan 2 pengendara kaos biru) yang memiliki kecepatan `1, 3, 4, 5`, dan jika dipasangkan pada sepeda gandeng sebagai berikut:`[1, 4], [5, 3]`, maka kecepatan total sepeda gandeng adalah `4 + 5 = 9`.

### Input
```js
redShirtSpeeds= [5, 5, 3, 9, 2]
blueShirtSpeeds= [3, 6, 7, 2, 1] 
fastest= true
```

### Output
```js
32
```

## Instructions
1. Anda harus melengkapi fungsi `tandemBicycle` pada file `tandemBicycle.js`
2. Fungsi harus mengembalikan kecepatan total maksimum atau kecepatan total minimum, sesuai dengan parameter `tercepat` yang diberikan.
3. Jalankan program dan test menggunakan perintah`node run`