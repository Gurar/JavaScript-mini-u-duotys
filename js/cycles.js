// const kiek = 5;

// for(let i = 0; i <= kiek; i++) {
//     console.log('laba ryta');
// }

// const valanda = 3;
// const maxValandu = 12;

// for(let val = valanda; val <= maxValandu; val++) {
//     console.log(val);
// }

// /*
// Duotas miestu sarasa. Isvardinti kiekviena aplankyta miestai.
// */

// const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Utena'];
// const count = miestai.length;
// console.log(count);


// for(let i = 0; i < count; i++) {
//     const miestoPavadinimas = miestai[i];
//     console.log(`Aplankiau: ${miestoPavadinimas}.`);
// }

// console.log("------------");
// /*
// Isvaerdinti saraso narius is galo
// */

// for(let i = count - 1; i >= 0; i--) {
//     const miestoPavadinimas = miestai[i];
//     console.log(`Aplankiau: ${miestoPavadinimas}.`);
// }

// console.clear();

// const text ='dodekahedronas';

// console.log(text.length);

// const tekstas = 'abcdef';
// const kiekis = tekstas.length;
// const step = 2;
// let rezultatas = ''; 

// for(let i = 0; i < kiekis; i =i+step) {
//     rezultatas +=tekstas[i];
// }

// console.log(rezultatas);

// rezultatas = '';

// for(let i = kiekis - step; i >= 0; i = i - step) {
//     rezultatas += tekstas[i];
// }

// console.log(rezultatas);

// let number = 0;
// let rezult = 0;

// for(let i = 0; i <= number; i++) {
//     rezult += i;
// }

// console.log(rezult);

// number = 4;
// rezult = 0;

// for(let i = 0; i <= number; i++) {
//     rezult += i;
// }

// console.log(rezult);

// number = 100;
// rezult = 0;

// for(let i = 0; i <= number; i++) {
//     rezult += i;
// }

// console.log(rezult);

// number = 815;
// let startValue = 574;
// rezult = 0;

// for(let i = startValue; i <= number; i++) {
//     rezult += i;
// }

// console.log(rezult);

// number = -50;
// startValue = -50;
// rezult = 0;

// for(let i = startValue; i <= number; i++) {
//     rezult += i;
// }

// console.log(rezult);

// number = -30;
// startValue = -70;
// rezult = 0;

// for(let i = startValue; i <= number; i++) {
//     rezult += i;
// }

// console.log(rezult);

// number = 11;
// startValue = 0;
// let divided3 = 0;
// let divided5 = 0;
// let divided7 = 0;

// for(let i = startValue; i <= number; i++) {
//     if(i % 3 === 0) {
//         divided3 = divided3 + 1;
//     }
//     if(i % 5 === 0) {
//         divided5 = divided5 + 1;
//     }
//     if(i % 7 === 0) {
//         divided7 = divided7 + 1;
//     }
// }

// let result1 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 3 yra ${divided3} vienetai.`;
// let result2 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 5 yra ${divided5} vienetai.`;
// let result3 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 7 yra ${divided7} vienetai.`;

// console.log(`${result1}\n${result2}\n${result3}`);

// console.log('--------------------');

// number = 31;
// startValue = 8;
// divided3 = 0;
// divided5 = 0;
// divided7 = 0;

// for(let i = startValue; i <= number; i++) {
//     if(i % 3 === 0) {
//         divided3 = divided3 + 1;
//     }
//     if(i % 5 === 0) {
//         divided5 = divided5 + 1;
//     }
//     if(i % 7 === 0) {
//         divided7 = divided7 + 1;
//     }
// }

// result1 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 3 yra ${divided3} vienetai.`;
// result2 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 5 yra ${divided5} vienetai.`;
// result3 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 7 yra ${divided7} vienetai.`;

// console.log(`${result1}\n${result2}\n${result3}`);

// console.log('--------------------');

// number = 18;
// startValue = -18;
// divided3 = 0;
// divided5 = 0;
// divided7 = 0;

// for(let i = startValue; i <= number; i++) {
//     if(i % 3 === 0) {
//         divided3 = divided3 + 1;
//     }
//     if(i % 5 === 0) {
//         divided5 = divided5 + 1;
//     }
//     if(i % 7 === 0) {
//         divided7 = divided7 + 1;
//     }
// }

// result1 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 3 yra ${divided3} vienetai.`;
// result2 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 5 yra ${divided5} vienetai.`;
// result3 = `Skaičių intervale tarp ${startValue} ir ${number}, besidalijančių be liekanos iš 7 yra ${divided7} vienetai.`;

// console.log(`${result1}\n${result2}\n${result3}`);

// console.log('--------------------');

function dividedNumber(minInterval, maxInterval) {
    let divided3 = 0, divided5 = 0, divided7 = 0;
    for(let i = minInterval; i <= maxInterval; i++) {
        if(i % 3 === 0) divided3 = divided3 + 1;
        
        if(i % 5 === 0) divided5 = divided5 + 1;

        if(i % 7 === 0) divided7 = divided7 + 1;
    }
    
    return `
    Skaičių intervale tarp ${minInterval} ir ${maxInterval}, besidalijančių be liekanos iš 3 yra ${divided3} vienetai.
    Skaičių intervale tarp ${minInterval} ir ${maxInterval}, besidalijančių be liekanos iš 5 yra ${divided5} vienetai.
    Skaičių intervale tarp ${minInterval} ir ${maxInterval}, besidalijančių be liekanos iš 7 yra ${divided7} vienetai.
    `
}

console.log(`${dividedNumber(0, 11)}${dividedNumber(8, 31)}${dividedNumber(-18, 18)}`);






