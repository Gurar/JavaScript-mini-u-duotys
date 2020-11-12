const kiek = 5;

for(let i = 0; i <= kiek; i++) {
    console.log('laba ryta');
}

const valanda = 3;
const maxValandu = 12;

for(let val = valanda; val <= maxValandu; val++) {
    console.log(val);
}

/*
Duotas miestu sarasa. Isvardinti kiekviena aplankyta miestai.
*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Utena'];
const count = miestai.length;
console.log(count);


for(let i = 0; i < count; i++) {
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestoPavadinimas}.`);
}

console.log("------------");
/*
Isvaerdinti saraso narius is galo
*/

for(let i = count - 1; i >= 0; i--) {
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestoPavadinimas}.`);
}

console.clear();

const text ='dodekahedronas';

console.log(text.length);

const tekstas = 'abcdef';
const kiekis = tekstas.length;
let rezultatas = '';

for(let i = 0; i < kiekis; i++) {
    if(i % 2 !== 0) {
      rezultatas +=tekstas[i];
    }
}

console.log(rezultatas);



