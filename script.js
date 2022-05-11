
window.addEventListener('DOMContentLoaded', function() {

    const elementContainer = document.getElementById('container');
    const elementSwtich = document.getElementById("switch");
    const elementFont = document.getElementById("font");
    const elementKeyboard = elementContainer.querySelector('#keyboard');
    const elementInputgroup = elementContainer.querySelector("#input-group");

    elementSwtich.addEventListener("change", (event) => {
        document.documentElement.setAttribute(
            "theme",
            event.target.checked ? "dark-mode" : ""
        );
    })
    
    elementFont.addEventListener("change", (event) => {
        document.body.style.fontFamily = event.target.value;
        console.log(event.target.value);
    })

    elementKeyboard.addEventListener('mousedown', function(e) {
        console.log(e.target);
       e.target.closest("div.key")?.classList.add("active"); 
    });
    
    document.addEventListener('mouseup', function() {
        elementKeyboard.querySelector(".active")?.classList.remove('active');
    })

    document.addEventListener('keydown', (e) => {
        console.log(e.code);

        // console.log(e.key, /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(e.key));
        //elementInputgroup.classList.toggle("error",/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(e.key));
        elementKeyboard.querySelector(`[data-code=${e.code}]`)?.classList.add('active');
    });

    document.addEventListener('keyup',(e)  => {
        console.log("keyup");
        elementKeyboard.querySelector(`[data-code=${e.code}]`)?.classList.remove('active');

    })

});

