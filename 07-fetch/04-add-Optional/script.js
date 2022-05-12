/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.querySelector('form').addEventListener("submit",function(e){
        e.preventDefault();
        var a = document.getElementById('hero-name').value;
        var b = document.getElementById('hero-alter-ego').value;
        var c = document.getElementById('hero-powers').value;
        var data = {name: a,alterEgo: b,abilities:[c]};


        postData(data);

        

    })
    async function postData(data){
        console.log(JSON.stringify(data));
        await fetch('http://localhost:3000/heroes/', {
            method: 'POST',
            body: JSON.stringify(data),
            
        })
        console.log(JSON.stringify(data));
    }   
    // your code here
})();
