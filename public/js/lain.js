// let textBox = document.getElementById("text-box");

// textBox.innerHTML = "I am the ultimate lifeform";
// textBox.style.backgroundColor = "green";
// textBox.style.padding = "20px";
// textBox.setAttribute("style", "color: white; font-weight: bold; background-color: green; padding:20px;");

// let btn = document.getElementById("btn")

// function reset() {
//   alert("You just reset your form");
// }

// let container = document.getElementById("container");

// container.setAttribute("style", 
// "background-color:green; padding: 20px; color: white")

// const newContainer = document.createElement("newContainer");
// // 
// const div = document.createElement("div");
// div.classList.add("newClass");

// div.textContent = "Still come back to Alpha House"

// container.appendChild(div)
// // container.appendChild(newContainer);


// const container2 = document.querySelector("#container2");

// const element2 = document.createElement("div");

// element2.classList.add("class2");
// element2.textContent = "Do not use the .innerHTML javascript to add text";

// element2.innerHTML = "<p>Hey I'm red</p>";
// element2.querySelector("p").style.color = "red";

// const h3Element = document.createElement("h3");

// h3Element.textContent = "I.m blue";

// // element2.innerHTML = ;
// element2.appendChild(h3Element);

// const div3 = document.createElement("div");
// div3.setAttribute = "style"

// const div2 = document.createElement("div");
// div2.setAtrribute = "style", "border: 1px solid black; background-color: pink; ";

// div2.innerHTML = "<h1>I'm in div fortunately</h1>";
// div2.innerHTML = "<p>ME TOO!</p>";




// const p = document.querySelector("p");
// p.style.color = "red"

// container2.appendChild(element2);


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// container2.appendChild(div2);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
