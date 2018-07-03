document.addEventListener("scroll", () => {
    let header = document.querySelector("#header");
    let logo = document.querySelector("#logo");

    if(pageYOffset > 66) {
        header.style.display = "none";
        logo.style.height = "50px"
    } else {
        header.style.display = "block";
        logo.style.height = "100px";
    }
});