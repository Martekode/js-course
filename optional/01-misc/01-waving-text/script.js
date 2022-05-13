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
 /*const a = document.getElementById('target');
 let target = document.getElementById('target');
    console.log(a)
    let b = a.innerHTML.split("").map(letter => {
        console.log(letter);
        let span = document.createElement('span');
        span.innerText = letter;
    })
    .join("");
    console.log(b);
    //het werkt tot hier, alles hierna doet niets
    
    
    function mkwaves(wave){
     for(i=0,z=10;i<wave.length;i++,z+=2){
        console.log(wave[i]);
        return wave[i].style.fontSize = `${i+z}px`;
        
     }
    }
    let d = document.getElementsByTagName('span');
    console.log(d);
    mkwaves(document.getElementsByTagName('span'));*/


    const text = document.getElementById('target');
    const strTxt = text.textContent;
    const spltTxt = strTxt.split("");
    text.textContent = "";
    console.log(spltTxt);

    for (i=0,z=10;i<spltTxt.length;i++,z++){
        text.innerHTML += "<span>"+ spltTxt[i]+"</span>";
        let span = text.querySelectorAll('span')[i];
        span.style.fontSize = `${i+z}px`
    }

    
})();
