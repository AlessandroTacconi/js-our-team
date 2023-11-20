'use strict';

/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
*/

const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
  },
];

console.log(team[0]);
console.log(team[1]);
console.log(team[2]);
console.log(team[3]);
console.log(team[4]);
console.log(team[5]);

let myTeam = document.getElementById('team');

for (let i = 0; i < team.length; i++) {
  const membroTeam = team[i];

  // HTML
  const container = document.createElement('div');
  const img = document.createElement('img');
  const nome = document.createElement('h2');
  const ruolo = document.createElement('div');

  // foto nel DOM
  img.src = `img/${membroTeam.foto}`;

  // testo DOM
  nome.innerHTML = membroTeam.nome;
  ruolo.innerHTML = `Ruolo: ${membroTeam.ruolo}`;

  // appendChild
  container.appendChild(img);
  container.appendChild(nome);
  container.appendChild(ruolo);

  // appendChild all'HTML già esistente
  myTeam.appendChild(container);

  // aggiungo elementi per il CSS
  container.classList.add('sfondo');
  img.classList.add('immagine');
}

img / wayne - barnett - founder - ceo.jpg;
