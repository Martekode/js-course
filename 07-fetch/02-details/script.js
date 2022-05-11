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
         let a = document.getElementById('hero-id').value;
         let b = document.getElementById('target');
         let c = document.getElementById('tpl-hero');
         let clone = c.content.cloneNode(true);
        fetch('http://localhost:3000/heroes/'+a).then(res => res.json()).then(data => {
            let name = clone.querySelector('.name');
            let ego = clone.querySelector('.alter-ego');
            let power = clone.querySelector('.powers');
            name.innerText = data.name;
            ego.innerText = data.alterEgo;
            power.innerText = data.abilities;
            
            b.appendChild(clone);
        });
        
         
         
        
    })
    // your code here
})();
