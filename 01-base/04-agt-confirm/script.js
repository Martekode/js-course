/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function main(name,age,location) {
 
    prompt('what is your name');
    prompt('what is your age');
    prompt('what is your location');

    
    
    
    let confirmation = prompt('is this data correct? (confirm or not-confirmed)', name + ', ' + age + ', '+ location);
    if (confirmation === 'confirm'){
        alert('confirmed');
    }
    else{
        main();
    };
    // your code here
})();
