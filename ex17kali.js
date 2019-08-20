function kaliTerusRekursif(angka) {
    var str = String(angka);
    if (str.length === 1) {
        return angka;
    } else {
        return kaliTerusRekursif(
            Number(str[0]) * Number(kaliTerusRekursif(str.slice(1)))
        );
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
