let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {
  
  if (num > project.length) {
    slideIndex = 1;
  }
  
  if (num < 1) {
    slideIndex = project.length;
  }

  for (let i = 0; i < project.length; i++) {
    project[i].style.display = "none";
  }
  project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
  showProject((slideIndex += num));
}

function navigateTo(url) {
  window.open(url, "https://github.com/2200031907/PRODIGY_WD_03.git"); // Open in a new tab
}
function navigateTo(url) {
  window.open(url, "https://www.linkedin.com/in/vamsi2005/"); // Open in a new tab
}
