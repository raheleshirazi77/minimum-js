
/*
#neme: **rahele shirazi**
#name project:***minimum-js***
#use language programmer: **html**,**js**
#methode use coding:***for***, ***if***
*/

// start


let sum = [1, 2, 3, 190, 48, 76, 44, 9]; // sakht array sum baraye be dast avardan kochak tarin adad.
let min = sum[0]; // tarif yek motaghayer baraye baresi adad
for (let i = 0; i < sum.length; i++) { // ba estefade az for and halghe yeki yeki adad ro migirim.
    if (sum[i] < min) {  // hala baresi mikonim bbinim kodom adad kochak ast.
        min = sum[i]; // agar true bode value ro dar sum variz konad
    }
}
document.write('minimum number: ' ,min); // dar akhar value be dast omade ra namayesh dahad

// va tamaaaam tammmammmmm