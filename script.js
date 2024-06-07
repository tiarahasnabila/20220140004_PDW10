function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.getElementById("peminatan").value;
    var alamat = document.getElementById("alamat").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;

    alert(
        "Nama : " + name +
        "\nNIM : " + nim +
        "\nPeminatan : " + peminatan +
        "\nAlamat : " + alamat +
        "\nAngkatan : " + angkatan +
        "\nTanggal : " + tanggal
    );

    document.getElementById("result").innerHTML =
        "<p>Nama: " + name + "</p>" +
        "<p>NIM: " + nim + "</p>" +
        "<p>Peminatan: " + peminatan + "</p>" +
        "<p>Alamat: " + alamat + "</p>" +
        "<p>Angkatan: " + angkatan + "</p>" +
        "<p>Tanggal: " + tanggal + "</p>";

    return false;
}
