function hideProjects() {
    var x = document.getElementById("project-container");
    if (x.classList.contains("hide")) {
        x.classList.remove("hide");
      } else {
        x.classList.add("hide");
      }

    var y = document.getElementById("container");
    var z = document.getElementById("divider-line");
    var a = document.getElementById("divider-title")
    
    // a.textContent = "WHO ARE WE";
    y.style.backgroundColor = "black";
    // y.style.color = "white";
    y.style.animation = "mymove 5s 1";
    // z.style.backgroundColor = "white";

};

// document.getElementById("showreel-frame").onplay = function(){

//     document.getElementById("header-container"){

//     }

// };
