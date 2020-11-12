//Kintamųjų inicijavimas

/*  1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
        a. Po kiekvieno jų inicijavimo, išvesti į console*/

const a = 5;
console.log(a);
const b = 10
console.log(b);
const c = 4.5;
console.log(c);

/*  2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
        a. Po kiekvieno jų inicijavimo, išvesti į console*/

const name = 'Jezy';
console.log(name);
const surname = 'Kozlovski';
console.log(surname);
const github = 'Gurar';
console.log(github);

/*  3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
        a. Po kiekvieno jų inicijavimo, išvesti į console*/

const numbers = [1,4.5,6,100,-3];
console.log(numbers);
const luckyNumbers = [13, 6, 9, 666, 7];
console.log(luckyNumbers);
const points = [5, 8, 7, 9, 10];
console.log(points);

/*  4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
        a. Po kiekvieno jų inicijavimo, išvesti į console*/

const citys = ['Vilnius', 'Kaunas', 'Panevezys', 'Siauliai', 'Klaipeda'];
console.log(citys);
const fruits = ['apple', 'pineapple', 'banana', 'orange', 'strawberry'];
console.log(fruits);
const names = ['Tomas', 'Povilas', 'Anna', 'Jonas', 'Antanas'];
console.log(names);

//Veiksmai su kintamaisiais

/*  1. Susumuoti visus skaičiaus tipo kintamuosius
        a. Rezultatą išvesti į console*/
const sum = a + b + c;
console.log(sum);

/*  2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
        a. Rezultatą išvesti į console
*/
const text = `${name} ${surname} ${github}`;
console.log(text);

/*  3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
        a. 1-2+3-4+5
        b. Rezultatą išvesti į console
*/
const sum2 = numbers[0] - numbers[1] + numbers[2] - numbers[3] + numbers[4];
const sum3 = luckyNumbers[0] - luckyNumbers[1] + luckyNumbers[2] - luckyNumbers[3] + luckyNumbers[4];
const sum4 = points[0] - points[1] + points[2] - points[3] + points[3];
console.log(sum2);
console.log(sum3);
console.log(sum4);

/*  4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/


let text2 = '';
text2 = text2 + citys[0];
text2 = text2 + ', ' + citys[1];
text2 = text2 + ', ' + citys[2];
text2 = text2 + ', ' + citys[3];
text2 = text2 + ', ' + citys[4];

const text3 = `${fruits[4]}, ${fruits[3]}, ${fruits[2]}, ${fruits[1]}, ${fruits[0]}`;
const text4 = `${names[4]}, ${names[3]}, ${names[2]}, ${names[1]}, ${names[0]}`;
console.log(text2);
console.log(text3);
console.log(text4);










