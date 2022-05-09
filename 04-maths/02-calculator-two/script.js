/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var performOperation = function(operation) {
        // perform the operation
        var x = document.getElementById("op-one").valueAsNumber;
        var y = document.getElementById("op-two").valueAsNumber;
        
        switch(operation){
            case "addition":
                
                answer =x +y;
                console.log(answer);
                break;

            case "substraction":
               
                answer =x -y;
                console.log(answer);
                break;

            case "multiplication":
                
                answer =x *y;
                console.log(answer);
                break;

            case "division":
              
                answer =x /y;
                console.log(answer);
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
