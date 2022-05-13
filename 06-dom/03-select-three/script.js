/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
 let lel = document.getElementsByClassName("target");

 for(i=0;i<lel.length;i++){
     document.getElementsByClassName("target")[i].innerText= "owned";
 }
    // your code here

})();
