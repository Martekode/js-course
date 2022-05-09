/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
  
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let vone = document.getElementById('op-one').valueAsNumber;
        let vtwo = document.getElementById('op-two').valueAsNumber;
        let answer = vone + vtwo;
       console.log(answer);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let vone = document.getElementById('op-one').valueAsNumber;
        let vtwo = document.getElementById('op-two').valueAsNumber;
        let answer = vone - vtwo;
       console.log(answer);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let vone = document.getElementById('op-one').valueAsNumber;
        let vtwo = document.getElementById('op-two').valueAsNumber;
        let answer = vone * vtwo;
       console.log(answer);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let vone = document.getElementById('op-one').valueAsNumber;
        let vtwo = document.getElementById('op-two').valueAsNumber;
        let answer = vone / vtwo;
       console.log(answer);
    });
})();
