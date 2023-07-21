function cofee(){
    document.getElementById("item2").classList.remove("active1")
    document.getElementById("item3").classList.remove("active1")
    document.getElementById("item4").classList.remove("active1")
    document.getElementById("item1").classList.add("active1")
}
function tea(){
    document.getElementById("item1").classList.remove("active1")
    document.getElementById("item2").classList.remove("active1")
    document.getElementById("item4").classList.remove("active1")
    document.getElementById("item2").classList.add("active1")
}
function colddrink(){
    document.getElementById("item1").classList.remove("active1")
    document.getElementById("item2").classList.remove("active1")
    document.getElementById("item4").classList.remove("active1")
    document.getElementById("item3").classList.add("active1")
}
function fastfood(){
    document.getElementById("item1").classList.remove("active1")
    document.getElementById("item2").classList.remove("active1")
    document.getElementById("item3").classList.remove("active1")
    document.getElementById("item4").classList.add("active1")
}
function allitem(){
    document.getElementById("item1").classList.add("active1")
    document.getElementById("item2").classList.add("active1")
    document.getElementById("item3").classList.add("active1")
    document.getElementById("item4").classList.add("active1")
}