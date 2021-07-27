const mobileMenuBtn = document.getElementById("mobileMenuToggle");
console.log(mobileMenuBtn);

mobileMenuBtn.addEventListener('click', () => {
    const mobileMenu = document.getElementById("mobile-menu");
    console.log(mobileMenu);

    if (mobileMenu.classList.contains("show")) {
        mobileMenu.classList.remove("show");
        mobileMenu.classList.add("hide");
    } else {
        mobileMenu.classList.remove("hide");
        mobileMenu.classList.add("show");
    }
})