const url = 'http://localhost:3000/gsb/visiteur/' ;   
const url = 'http://localhost:3000/gsb/visiteur/' ;   
const url2 = 'http://localhost:3000/gsb/rapport/';
const list = document.querySelector('#liste');


// var formRapport = new FormData(); // Actuellement vide
// formRapport.append(nom, nom.value);
// formRapport.append(date, date.value);

//Créer un visiteur
const envoyer = document.querySelector('#envoyer');
const inputVisiteur = document.querySelector(".chercherVisiteur");
const submit = document.querySelector("#submit");
const nom = document.querySelector("#nom");
const date = document.querySelector("#date");
submit.addEventListener('click', (Event)=>{
    Event.preventDefault();
    fetch('http://localhost:3000/gsb/visiteur/', {
  method: 'POST',
  body: JSON.stringify({
    
    nom: nom.value,
    dateEmbauche: date.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
})

// // Creer un RAPPORT

// const inputRapport = document.querySelector(".CreerRapport");
// const submit2 = document.querySelector("#submit2");
// const idRapport = document.querySelector("#idRapport");
// const motif = document.querySelector("#motifRapport");
// const bian = document.querySelector("#bilanRapport");
// const dateRapport = document.querySelector("#dateRapport");
// submit2.addEventListener('click', (Event)=>{
//     Event.preventDefault();
//     fetch('http://localhost:3000/gsb/rapport/', {
//   method: 'POST',
//   body: JSON.stringify({ 
    
//     // rapportNum: id.value,
//     date: dateRapport.value,
//     bian: bilan.value,
//     motif: motif.value 
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// })

const pointeurDivVisiteur = document.querySelector('.listeVisiteur');
const pointeurDivRapport = document.querySelector('.listeRapport');
// Afficher tous les visiteurs
fetch(url)
.then(response =>response.json())
.then((datas)=>{
    datas.forEach(data => {
        console.log(data);
        pointeurDivVisiteur.insertAdjacentHTML('beforeend', 
        `<ul>
            <li>Visiteur n° ${data.id}</li>
            <li>Embauché le ${data.dateEmbauche}</li>
            <li>Nom : ${data.nom}</li>
        </ul>`);
        
    });
});
// afficher tout les rapports 
fetch(url2)
.then(response =>response.json())
.then((datas)=>{
    datas.forEach(data => {
pointeurDivRapport.insertAdjacentHTML('beforeend', 
`<ul>
    <li>Rapport n° ${data.id}</li>
    <li>date : ${data.date}</li>
    <li>bilan:  ${data.bilan}</li>
    <li>Motif:  ${data.motif}</li>
</ul>`);
});
});

// modifier visiteur
const nommodif = document.querySelector("#nommodif");
const datemodif = document.querySelector("#datemodif");
const submit2 = document.querySelector("#submit2");
function updateVisiteur () {
fetch('http://localhost:3000/gsb/visiteur/', {
  method: 'PUT',
  body: JSON.stringify({
    nom: nommodif.value,
    dateEmbauche: datemodif.value
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

};
submit2.addEventListener ('click', (e) => {
    e.preventDefault();
    updateVisiteur();
});

// effacer visiteur
function deleteVisiteur() {
fetch('http://localhost:3000/gsb/visiteur/3', {
  method: 'DELETE',
});
} 

// city.addEventListener('change', (event) => {
//   list.innerHTML='';
//   fetchMeteo(city.value);
// })


