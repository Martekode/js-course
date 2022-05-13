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
    let spans = [];
    for (i=0;i<spltTxt.length;i++){
        let span = document.createElement('span')
        span.innerText = spltTxt[i];
        spans.push(span);
        text.appendChild(span);
    }
    let start =0;
    const fontSizes = ["20px","24px","28px","30px","28px","24px"]
    function mkwave(start){
        for(i=0;i<spans.length;i++){
            spans[i].style.fontSize = fontSizes[(i+start)%fontSizes.length];
            console.log(spans[i])
        }
    }
    setInterval(() => {
        mkwave(start)
        start++;
    }, 100);
    
})();
