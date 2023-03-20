let bensinHabis = true,
    hujan = true,
    laper = true,
    statusOli = "kering",
    weekend = true;
// if (bensinHabis && hujan && laper) {
if (bensinHabis && hujan && laper) {
    if (hujan) {
        if (laper) {
            console.log("gak ngantor");
        }
    } else {
        console.log("jalan kaki");
    }
} else {
    console.log("gas ngantor");
}
