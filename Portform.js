
let intro = document.querySelector('.intro');
/* logo1 */
let logo1 = document.querySelector('.logo-header');
let logoSpan1 = document.querySelectorAll('.logo1');

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        logoSpan1.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 200)
        });

        setTimeout(()=>{
            logoSpan1.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 500)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)

    })
})

/* logo2 */
let logo2 = document.querySelector('.logo-header');
let logoSpan2 = document.querySelectorAll('.logo2');

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        logoSpan2.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 450)
        });

        setTimeout(()=>{
            logoSpan2.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 500)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)

    })
})



/* logo3 */
let logo3 = document.querySelector('.logo-header');
let logoSpan3 = document.querySelectorAll('.logo3');

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(()=>{

        logoSpan3.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan3.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 500)
            })
        },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2300)

    })
})

//color

document.getElementById("themecolor").addEventListener("input", function () {
    document.getElementById("colorName").textContent = this.value; // Updates color code
});


//Need Help

document.addEventListener("DOMContentLoaded", function () {
    var btnHelp = document.getElementById("btnHelp");
    var helpTitle = document.getElementById("helpTitle");
    var helpBody = document.getElementById("helpBody");
    var heading = document.getElementById("heading");
    var description = document.getElementById("description");

    var isVisible = false; // Track visibility

    // Initially hide elements
    helpTitle.style.width = "0px";
    helpBody.style.height = "0px";
    helpBody.style.display = "none";

    btnHelp.onclick = function () {
        isVisible ? hideHelp() : showHelp();
    };

    function showHelp() {
        helpBody.style.display = "block"; 

        setTimeout(() => {
            helpTitle.style.width = "270px"; 
            helpBody.style.height = "270px"; 
        }, 10);

        setTimeout(() => {
            heading.style.display = "block";
            heading.style.animation = "fadein-right 0.3s";
        }, 200);

        setTimeout(() => {
            description.style.display = "block";
            description.style.animation = "fadein-bottom 0.3s";
        }, 400);

        isVisible = true;
    }

    function hideHelp() {
        description.style.animation = "fadeout-bottom 0.6s";
        heading.style.animation = "fadeout-right 0.6s";

        setTimeout(() => {
            description.style.display = "none";
            heading.style.display = "none";
        }, 500);

        setTimeout(() => {
            helpBody.style.height = "0"; 
            helpTitle.style.width = "0"; 
        }, 500);

        setTimeout(() => {
            helpBody.style.display = "none"; 
        }, 700);

        isVisible = false;
    }
});
