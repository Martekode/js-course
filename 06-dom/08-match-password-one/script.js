/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
 document.getElementById('run').addEventListener('click', function(){
     let a = document.getElementById('pass-one').value;
     let b = document.getElementById('pass-two').value;
     var bordera = document.getElementById('pass-one');
     var borderb = document.getElementById('pass-two');    
     //console.log(a);
     //console.log(b);

     if(a==b){
        bordera.style.borderColor = 'green';
        borderb.style.borderColor = 'green';
     }
     else{
         bordera.style.borderColor = 'red';
         borderb.style.borderColor = 'red';
     }
 })
    // your code here

})();
