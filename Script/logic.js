
    const ham = document.querySelector(".ham");
    const manu = document.querySelector("#nav-bar");
    const search = document.querySelector("#left");
    const navBar = document.querySelector("#nav-list");
    console.log(manu);
    ham.addEventListener("click", () => {
        ham.classList.toggle("change");               
        manu.classList.toggle("active");            
        search.classList.toggle("active");            
        navBar.classList.toggle("active");



    });
