let nilai = "C";

switch (nilai) {
    case "A+":
        console.log("Sangat Baik");
        break;
    case "A":
        console.log("Terbaik");
        break;
    case "B+":
    case "B":
    case "C+":
    case "C":
        console.log("Cukup");
        break;
    case "D":
        console.log("Kurang");
        break;
    default:
        console.log("NGULANG");
        break;
}
