/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').onclick = function ageCalc(){
       let bday= new Date(document.getElementById('dob-year').value, document.getElementById('dob-month').value,document.getElementById('dob-day').value);
       let bdayday= bday.getDate();
       let bdaymonth= bday.getMonth();
       let bdayyear= bday.getFullYear();

      // let today = new Date();
       

       let today = new Date();
       let todayday= today.getDate();
       let todaymonth= today.getMonth();
       let todayyear= today.getFullYear();

       let age = 0;
       if (todaymonth > bdaymonth){
            age = todayyear - bdayyear;
            
       }
       else if (todaymonth == bdaymonth){
           if (todayday > bdayday){
               age = todayyear-bdayyear;
           }
           else if (todayday == bdayday){
               age= todayyear-bdayyear;
           }
           else{
               age= todayyear - bdayyear -1;
           }
       }
       else{
           age = todayyear - bdayyear -1;
       }
       if (todayday == bdayday || todaymonth == bdaymonth){
        alert('congratulations it is your birthday. you are'+age+' years old');
       }
       else{
        alert('you are'+age+' years old!');
       }
       
      // let age = 0;
       //if 
       
       
        
    }
    // your code here

})();
