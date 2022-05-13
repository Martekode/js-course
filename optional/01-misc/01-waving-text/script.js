/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
 const a = document.getElementById('target').innerHTML;
    //console.log(a)
    function mkarray(string){
        return string.split('');
    }
    let b = mkarray(a);
    //console.log(b);
    function mkwave(wave){
        for(i=0,z=10;i<wave.length;i++,z++){
            //console.log(wave[i]);
          return wave[i].style.fontSize = `${z}px`;
        }
    }
    
    mkwave(b);

})();
