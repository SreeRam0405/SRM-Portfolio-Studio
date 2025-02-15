
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


