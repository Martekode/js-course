/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */


// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    var image = document.getElementsByTagName("img")[0];
    const b = image.getAttribute("src");
    var a = image.getAttribute("data-hover");
    //console.log(image);
    // your code here
    image.onmouseover = function(){
        //console.log('lukt');
        //console.log(a);
        image.setAttribute('src', a);
        //console.log(image);
    }
    image.onmouseout = function (){
        //console.log(b);
        image.setAttribute("src", b);
        //console.log(image);
    }
})();
