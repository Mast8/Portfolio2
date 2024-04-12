(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    
    

    })();


//store and change color theme
document.querySelector(".theme-btn").addEventListener("click", () => {
    
    mode = localStorage.getItem("mode");
    console.log(mode);
    mode === "dark" ? light() : dark();

});

const light = () => {
    document.body.classList.add("light-mode");
    localStorage.setItem("mode", "light");
};

const dark = () => {
    document.body.classList.remove("light-mode");
    localStorage.setItem("mode", "dark");
};

let mode = localStorage.getItem("mode");
    if (mode === "dark") 
        dark();
    else 
        light(); 




