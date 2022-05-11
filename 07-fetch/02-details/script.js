/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {
         let a = document.getElementById('hero-id').value;7
         let b = document.getElementById('target');
         let c = document.getElementById('tpl-hero').content;
         var d = document.importNode(c,true);
         fetch('http://localhost:3000/heroes/'+a).then(res => res.json()).then(data => b.appendChild(c)).catch();
         console.log(c);
        
    })
    // your code here
})();
