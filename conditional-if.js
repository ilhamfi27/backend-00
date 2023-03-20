let bensinHabis = true,
    hujan = true,
    laper = true,
    statusOli = "kering",
    weekend = true;
if (bensinHabis) {

    if (statusOli == "kering") {
        console.log("ke bengkel tambah oli");
    } else if (statusOli == "kotor") {
        console.log("ke bengkel ganti oli");
    } else {
        console.log("pergi ke pom bensin");
    }

} else if (hujan) {

    if (weekend) {
        console.log("selimutan");
    } else {
        console.log("pake jas hujan");
    }
    
} else if (laper) {
    console.log("cari makan");
} else {
    console.log("lanjut ngantor");
}
