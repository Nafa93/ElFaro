document.addEventListener("scroll", () => {
    let header = document.querySelector("#header");
    let logo = document.querySelector("#logo");

    if(pageYOffset > 66) {
        header.style.display = "none";
        logo.style.witdh = null;
        logo.style.height = "40px";
    }
    else {
        header.style.display = "block";
        logo.style.height = null;
        logo.style.width = "100%";
    }
});