import * as f from "./funzioni.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

let scelta = "";

while (scelta !== "0") {
  console.log("1 Crea nuova lista");
  console.log("2 Mostra lista");
  console.log("3 Aggiungi elemento");
  console.log("4 Elimina elemento");
  console.log("5 Ricerca elemento");
  console.log("6 Ordina lista");
  console.log("0 Esci");

  scelta = prompt("Scegli: ");

  switch (scelta) {
    case "1":
      f.crealista();
      break;
    case "2":
      f.mostralista();
      break;
    case "3":
      f.aggiungilista();
      break;
    case "4":
      f.eliminalista();
      break;
    case "5":
      f.ricercalista();
      break;
    case "6":
      f.ordinalista();
      break;
    case "0":
      break;
    default:
      console.log("Scelta sbagliata");
  }
}