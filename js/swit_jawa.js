//inisialisasi opsi
let game = prompt("pilih : gajah, semut, orang");

//setting random value for comp

let comp = Math.random();
console.log(comp);

if (comp < 0.3) {
  comp = "semut";
  //   console.log(semut);
} else if (comp > 0.3 && comp < 0.7) {
  comp = "orang";
  //   console.log(comp);
} else {
  comp = "gajah";
  //   console.log(gajah);
}

if (game == comp) {
  console.log("SERI");
} else if (game == "gajah") {
  if (comp == "semut") {
    console.log("KALAH");
  } else if (game == "gajah") {
    if (comp == "orang") {
      console.log("MENANG");
    }
  }
} else if (game == "orang") {
  if (comp == "gajah") {
    console.log("KALAH");
  } else if (game == "orang") {
    if (comp == "semut") {
      console.log("MENANG");
    }
  }
} else if (game == "semut") {
  if (comp == "gajah") {
    console.log("MENANG");
  } else if (game == "semut") {
    if (comp == "orang") {
      console.log("KALAH");
    }
  }
} else {
  console.log("ANDA BUKAN ORANG JAWA");
}
