/*
  Il calendario mediocre
  Scrivi un programma che dato:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)
  Stampi il calendario di un mese.

  Esempio:
    Input: numero giorni = 31, giorno settimana = 0
    Output: Lun 1
            Mar 2
            Mer 3
            Gio 4
            Ven 5
            Sab 6
            Dom 7
            Lun 8
            Mar 9
            Mer 10
            Gio 11
            Ven 12
            Sab 13
            Dom 14
            Lun 15
            Mar 16
            Mer 17
            Gio 18
            Ven 19
            Sab 20
            Dom 21
            Lun 22
            Mar 23
            Mer 24
            Gio 25
            Ven 26
            Sab 27
            Dom 28
            Lun 29
            Mar 30
            Mer 31


  Variante:
  Piuttosto che avere in input il numero dei giorni del mese passa direttamente il mese e calcola tu da quanti giorni è formato.

  http://www.imparareaprogrammare.it
*/

let dayMapping = {
  0: "Lunedì",
  1: "Martedì",
  2: "Mercoledì",
  3: "Giovedì",
  4: "Venerdì",
  5: "Sabato",
  6: "Domenica",
}

let monthMapping = {
  gennaio: 31,
  febbraio: 28,
  marzo: 31,
  aprile: 30,
  maggio: 31,
  giugno: 30,
  luglio: 31,
  agosto: 31,
  settembre: 30,
  ottobre: 31,
  novembre: 30,
  dicembre: 31,
}


let daysInMonth = monthMapping.Agosto;
let currentDay = 4;

for (let i = 1; i <= daysInMonth; i++) {;
  let day = dayMapping[currentDay]
  // console.log(day);


  if (currentDay < 7) {
    currentDay++;
  }
  if (currentDay >= 7) {
    currentDay = 0;
  }

  console.log(i + " " + day)
}