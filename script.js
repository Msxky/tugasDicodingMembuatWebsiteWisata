const menuBtn = document.querySelector("#menuBtn")
  const navbar = document.querySelector("nav");
  
  menuBtn.onclick = () => {
    menuBtn.classList.toggle("bx-x")
    navbar.classList.toggle("active");
  }
  