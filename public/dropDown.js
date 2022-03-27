function myFunction() {
   let d= document.getElementById("myDropdown")
    d.classList.toggle("show")
    let bnt = document.getElementById("btnDrop")
    bnt.onclick = function() {
       d.classList.remove("show")
    }
}
