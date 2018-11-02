import Axios from "axios";
AsetaHeaderi();

function AsetaHeaderi() {
  if (typeof localStorage.jwt !== undefined) {
    Axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.jwt;
  }
}

export function HaeAlueet(callback) {
  Axios.get("/api/alueet").then(response => {
    localStorage.jwt = response.data.jwt;
    callback(response.data.data);
  });
}

export function HaeLangatAlueelta(alue_id, callback) {
  Axios.get("/api/alueet/" + alue_id).then(response => {
    localStorage.jwt = response.data.jwt;
    callback(response.data.data);
  });
  // viittaus callbackiin data.alue(yksittäinen objekti) tai data.langat(array)
}

export function HaeViestitLangalta(lanka_id, callback) {
  Axios.get("/api/langat/" + lanka_id).then(response => {
    localStorage.jwt = response.data.jwt;
    callback(response.data.data);
  });
}

export function Kirjaudu(tiedot, callback) {
  var kirjautumistieto = {
    usr: tiedot.nimimerkki,
    pwd: tiedot.salasana
  };
  console.log(kirjautumistieto);

  Axios.post("/api/login", kirjautumistieto)
    .then(response => {
      console.log(response);
      if (response.status === 200) {
        //kirjautuminen onnistui
        localStorage.jwt = response.data.jwt;
        AsetaHeaderi();
        localStorage.jwt = response.data.jwt;
        callback(response.data.data);
      }
    })
    .catch(error => {
      setTimeout(e => {
        callback(false);
      }, 1000);
      // callback(false);
    });
}

export function UudelleenKirjaudu(callback){
  Axios.get("/api/login").then(response => callback(response.data.data));
}

export function KirjauduUlos(callback){
  Axios.get("/api/logout").then(response => callback(response.data.data)).catch(error => callback(error.data));
}

export function LisaaKayttaja(kayttaja, callback) {
  var uusiKayttaja = {
    nimimerkki: kayttaja.nimimerkki,
    email: kayttaja.email,
    pwd: kayttaja.salasana
  };
  console.log(uusiKayttaja);
  Axios.post("/api/register", uusiKayttaja).then(response => {
    console.log(response);
  });
}

export function LuoAlue(alue, callback) {
  Axios.post("/api/alueet", alue).then(response => {
    console.dir(response);
    localStorage.jwt = response.data.jwt;
    callback(response.status === 201);
  });
}

export function HaeKayttajatasot(callback) {
  Axios.get("/api/kayttajatasot/").then(response => {
    localStorage.jwt = response.data.jwt;
    callback(response.data.data);
  });
}

export function LisääViesti(viesti, callback) {
  Axios.post("/api/viestit", viesti).then(response => {
    console.dir(response);
    localStorage.jwt = response.data.jwt;
    callback(response.status === 201);
  });
}

export function LisääLanka(lanka, alue_id, callback) {
  Axios.post("/api/langat", { otsikko: lanka.otsikko, alue_id: alue_id }).then(
    response => {
      console.dir(response);
      //localStorage.jwt=response.data.jwt;
      callback(response.status === 201);
    }
  );
}

export function AikaKuvaus(min) {
  if(min === null || typeof min === undefined){
    return "";
  }
  if (min < 1) {
    return "Juuri nyt";
  }
  if (min < 60) {
    return min + " minuuttia";
  }
  if (min === 60) {
    return "1 tunti";
  }
  if (min > 60) {
    let teksti =
      Math.floor(min / 60) + " tunti" + (Math.floor(min / 60) > 1 ? "a" : "");
    if (min % 60 !== 0) {
      teksti += " ja " + (min % 60) + " minuuttia";
    }
    return teksti;
  }
}

export default function() {}
