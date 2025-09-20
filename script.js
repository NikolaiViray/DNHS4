const buttons = document.querySelectorAll('.resource-btn');


function toggleResourceDisplay(resource) {
  console.log(typeof(resource));

  buttons.forEach(btn => {
    const btnResource = document.querySelector('.' + btn.id);
    btnResource.style.display = "none"
  });
   
  if (resource.style.display === "none" || resource.style.display === "") {
    resource.style.display = "block"; 
  } else {
    resource.style.display = "none";
  }
}


buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const resource = document.querySelector('.' + btn.id);
    toggleResourceDisplay(resource);
  });
});

const menu = document.getElementById('nav-menu-btn')
const links = document.querySelector('.links')
const menuBtn = document.getElementById('menu-btn')

menu.addEventListener('click', () => {
  if(links.style.display === "none" || links.style.display === ""){
    menuBtn.src = "img/logo/X--Streamline-Tabler.png"
    menuBtn.style.width = "50px"
    links.style.display = "flex"
  } else if(links.style.display === "flex"){
    menuBtn.src = "img/logo/hamburger-button-computer-icons-menu-bar-line-8c68d41d5c8222dbe1ec162bdbcf7462.png"
    menuBtn.style.width = "60px"   
    links.style.display = "none"
  }
})