import PromptSync from "prompt-sync"
const prompt=PromptSync()

let listaSpesa=[];

export const crealista=()=>{
    console.log("La lista ora è vuota, aggiungi un elemento");
    const elemento=prompt("Scrivi un elemento da aggiungere: ");
    listaSpesa.push(elemento);
};
export const mostralista=()=>{
    if (listaSpesa.length === 0) {
    console.log("Lista vuota");
    }
    else{
        console.log("Lista della spesa:");
        for (let i=0; i<listaSpesa.length; i++) {
        console.log(listaSpesa[i]+", ");
        }
    }
};
export const eliminalista=()=>{
    const elemento=prompt("Scrivi un elemento da eliminare: ");
  for (let i=0; i<listaSpesa.length; i++) {
    if (listaSpesa[i]==elemento) {
      listaSpesa.splice(i, 1);
      console.log("Elemento eliminato.");
    }
  }
};
export const aggiungilista=()=>{
    const elemento = prompt("Scrivi un elemento da aggiungere: ");
    listaSpesa.push(elemento);
};
export const ricercalista=()=>{
    const cerca=prompt("Scrivi cosa vuoi cercare: ");
    let trovato=false;
    for(let i=0; i<listaSpesa.length; i++){
        if (listaSpesa[i].includes(cerca)) {
        console.log("L'elemento " +cerca +" è nella lista della spesa");
        trovato=true;
        }
     }
        if(trovato==false) {
        console.log("L'elemento non è nella lista della spesa");
       }
};
export const ordinalista=()=>{
  listaSpesa.sort();
  console.log("Lista ordinata in ordine alfabetico");
};