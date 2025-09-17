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
