/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const d = new Date();
    let hour = d.getHours();

    if(hour<=16.5){
        document.getElementById("target").innerHTML = "hello";
    }
    else{
        document.getElementById("target").innerHTML = "good evening";
    }
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here

})();
