window.addEventListener("load", () => {

    console.log("we loaded");

    const expandButton1 = document.getElementById("proj1-slide-button");
    expandButton1.addEventListener("click", () => {
        const slideMe = document.getElementById("proj1-slide-container");
        slideDown(expandButton1, slideMe);
        //slidedown function
    })
    
    const expandButton2 = document.getElementById("proj2-slide-button");
    expandButton2.addEventListener("click", () => {
        const slideMe = document.getElementById("proj2-slide-container");
        slideDown(expandButton2, slideMe);
    })

    function slideDown(expandButton, thisElement) {
        console.log("togglin'");
        //let slideDiv = document.querySelector(thisElement);
        if (thisElement.classList.contains("slide-up")) {
            thisElement.classList.remove("slide-up");
            thisElement.classList.add("slide-down");
            expandButton.innerText = "hide screenshots";

        } else {
            //remove slide down and add slide up
            thisElement.classList.remove("slide-down");
            thisElement.classList.add("slide-up");

            //css animation lags a bit, so I don't want to change the button
            // text until it's finished, about 500 ms
            setTimeout(function() {
                expandButton.innerText = "show screenshots";
            }, 500)
        }
    }
})