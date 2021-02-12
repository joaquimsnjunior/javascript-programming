// Looping Infinite of Math Operations //

// Disclaimer: In case you do insert another value, with exception of the real numbers (R), the answer will be "NaN". 

do{ 
 var number = Number.parseFloat(prompt("Insert a real number (R): "));
 console.log(`The number entered is: ${number} \n The number predecessor of the number entered is: ${number-1} \n The number successor of the number entered is: ${number+1} \n The double of the number entered is: ${number*2} \n The triple of the number entered is: ${number*3} \n The square of number entered is: ${number**2} \n The square root is: ${Math.sqrt(number)}\n The cubic root is: ${Math.pow(number, 1/3)} \n The exponentiation of the same number is: ${Math.pow(number, number)}`)
}while(number != -Infinity);
