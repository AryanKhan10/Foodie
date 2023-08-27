
    const ham = document.querySelector(".ham");
    const manu = document.querySelector("#nav-bar");
    const search = document.querySelector("#left");
    const navBar = document.querySelector("#nav-list");
    console.log(manu);
    ham.addEventListener("click", () => {
        ham.classList.toggle("change");                 //to convert 3 lines manu to cross(whose code is in css)
        manu.classList.toggle("active");             //to display the manu list
        search.classList.toggle("active");            //to display the search section
        navBar.classList.toggle("active");



    });
