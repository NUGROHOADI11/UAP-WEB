function hitung() {
    var kode = parseInt(document.getElementById("kode").value);
    var banyak = parseInt(document.getElementById("banyak").value);

    var total = hargaId(kode);
    var harga = total * banyak;
    alert("Total harga: " + harga);

    bayar = prompt("Masukkan uang: ");
    kembali = parseInt(bayar) - harga;

    if (bayar > harga) {
        alert("Kembalian: " + kembali);
    } else if (bayar < harga) {
        alert("Kurang woyy");
    } else {
        alert("Pas Banget");
    }
}

function hargaId(kode_barang) {
    if (kode_barang == 1) {
        return 10000;
    } else if (kode_barang == 2) {
        return 20000;
    } else if (kode_barang == 3) {
        return 30000;
    }
}
