/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
 const myInputfield = document.getElementById('pass-one');
 var text = document.getElementById('pass-one').value;
//console.log(text);
myInputfield.maxLength = 10;
 myInputfield.addEventListener('input',()=>{
    text = document.getElementById('pass-one').value;
    //console.log(text.length);
    document.getElementById('counter').innerHTML= text.length + '/10';
     /*if (text.length> myInputfield.maxLength){
         text.length - 1;
     }*/
 })
    // your code here

})();
