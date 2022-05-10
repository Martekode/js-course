/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var place = document.getElementById('target');
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    for (let i = 0; i <= 10; i++){
      var rows = tbl.insertRow();
      var cell = rows.insertCell();
      console.log(rows);
    }
    console.log(rows);
    // your code here
    place.appendChild(tbl);
})();
