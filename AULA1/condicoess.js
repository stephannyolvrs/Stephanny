
let dinheiroMenino = 60
let morangos = 20;
let laranjas = 5;
let abacate = 15;
let melancias = 30;
let maracuja = 15;

let compras = morangos+ laranjas+ abacate+ melancias + maracuja;

let limiteCompas= 60;

if(compras > dinheiroMenino){
console.log('O valor da compra excedeu o dinheiro que o menino tinha');
console.log('O valor da compra foi de:', compras);
}else if(compras >= limiteCompas){
    console.log('A compra excedeu o limite, e o menino apanhou');
    console.log('O valor da compra foi de:', compras);
}else {
console.log('Parabéns, o valor não excedeu');
console.log('O valor da compra foi de:', compras);}