let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vQJK6J4e_aFE_9dKkw_FwGku7hsf8B8tT7vGo34MTRiL5aSLQjzV7iyprIqzveUqW13HJNyfbja1jTV/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  //your code here
  let component = document.createElement("div")
  component.classList.add("nostalgia")

  let desc = document.createElement("p")
  desc.textContent = row.desc
  desc.classList.add("desc")

  let image = document.createElement("img")
  image.src = "images/" + row.image;
  image.classList.add("image")

  component.addEventListener("click", function(){
    window.open(row.page)
  })

  component.append(desc)
  component.append(image)
  main.append(component)
}
