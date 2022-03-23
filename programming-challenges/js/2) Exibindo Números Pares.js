/** 2° Desafio **
 * - Crie um programa que leia um número e mostre os números pares 
 * até esse número, inclusive ele mesmo.
 * 
 * Entrada:
 * - Você receberá 1 valor inteiro N, onde N > 0.
 * 
 * Saída:
 * - Exiba todos os números pares até o valor de entrada, sendo um 
 * em cada linha. 
*/

var N = parseInt(gets()); // entrada

var par = 2;

while (par <= N) {
  console.log(par); // saída
  par += 2;
}