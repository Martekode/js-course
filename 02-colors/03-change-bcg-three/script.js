/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').onclick = function randomColor(){
        
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            const hexLength = 6;
            for (var i = 0; i < hexLength; i++ ) {
                color += letters[Math.floor(Math.random() * letters.length)];
            }
            
            document.body.style.backgroundColor = color;
       
       
        
     // your code here
     }
    // your code here

})();
