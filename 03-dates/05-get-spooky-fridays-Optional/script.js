/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').onclick = function ageCalc(){
        let year = document.getElementById('year').value;
        let d = new Date();
        let month;
        let months = [];
        var  namemonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        for(month = 0;month<=12;month++){
          d.setFullYear(year, month , 13);
            if (d.getDay() ==4){
               months.push(namemonths[d.getMonth()]);
                
            } 

        }
        alert('here are the months with a friday the 13th: '+months);
        console.log(months);
        
        
    }
      
    // your code here

})();
