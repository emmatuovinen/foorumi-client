import Axios from "axios";

var apiBaseUrl = 'tähän api url';

var dummytasot = [
  {
    kayttajataso_id: 0,
    nimi: "admin"
  },
  {
    kayttajataso_id: 1,
    nimi: "kayttaja"
  }
];

var dummykayttajat = [
  {
    kayttaja_id: 0,
    kayttajataso: dummytasot[0],
    email: "pekka@asekauppias.fi",
    nimimerkki: "Pekka",
    kuvaus: "Olen Pekka. Intohimoinen aseharrastaja ja lasten ystävä.",
    aktiivisuus: Date.now()
  },
  {
    kayttaja_id: 1,
    kayttajataso: dummytasot[1],
    email: "piia@martat.fi",
    nimimerkki: "Piia",
    kuvaus: "Olen Piia. Olen pasifisti ja käsitöiden ystävä.",
    aktiivisuus: Date.now()
  }
];

export function HaeAlueet(callback) {
  let data = [
    {
      alue_id: 0,
      otsikko: "käsityöt ja aseet",
      kuvaus: "täällä tehdään käsitöitä ja aseita",
      rajoitettu: false,
      lankoja: 5,
      viestejä: 50,
      lukemattomia: true
    },
    {
      alue_id: 1,
      otsikko: "lapset ja aseet",
      kuvaus: "täällä lapset tekevät aseita",
      rajoitettu: true,
      lankoja: 5,
      viestejä: 50,
      lukemattomia: false
    }
  ];
  callback(data);
}

export function HaeLangatAlueelta(alue_id, callback) {
  let data = [
    {
      lanka_id: 0,
      kayttaja: dummykayttajat[0],
      aika: Date.now(),
      otsikko: "Ampumaradalle?",
      lukittu: false,
      kiinnitetty: true,
      vastauksia: 2
    },
    {
      lanka_id: 1,
      kayttaja: dummykayttajat[1],
      aika: Date.now(),
      otsikko: "Nypläämään?",
      lukittu: true,
      kiinnitetty: false,
      vastauksia: 3
    }
  ];
  callback(data);
}

export function HaeViestitLangalta(lanka_id, callback) {
  let data = [
    {
      viesti_id: 0,
      otsikko: "Ampumaradalle?",
      viesti: "Seuraa ampumaradalle. Lapsiparkki löytyy.",
      aika: Date.now(),
      kayttaja: dummykayttajat[0]
    },
    {
      viesti_id: 1,
      otsikko: "Re:Ampumaradalle?",
      viesti: "Tuun laittaa sukkapuikot piippuun.",
      aika: Date.now(),
      kayttaja: dummykayttajat[1]
    }
  ];
  callback(data);
}

export function Kirjaudu(tiedot, callback) {
    // token-logiikka puuttuu
    var kirjautumistieto={
        "nimimerkki":tiedot.nimimerkki,
        "salasana":tiedot.salasana
        }
    console.log(kirjautumistieto);
    if (tiedot.nimimerkki == "testi" && tiedot.salasana == "testi") {
        callback(dummykayttajat[0]);
    } 
    else {
        callback(false);
    }
    // Axios.post(apiBaseUrl+'kirjautuminen', kirjautumistieto)
    // .then(function (response) {
    //     if(response.data.code == 200) {
    //         console.log("Kirjautuminen onnistui");
    //     } 
    //     else if(response.data.code == 204) {
    //         console.log("Salasana ja käyttäjätunnus eivät täsmää");
    //     }
    //     else {
    //         console.log("Käyttäjää ei löydy");
    //     }
    // })
}

export default function() {}
