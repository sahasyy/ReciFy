let listElement1 = document.getElementById("1")
let listElement2 =  document.getElementById("2")
let listElement3 =  document.getElementById("3")
let listElementCur = 2
let listElementPrev = 2
listElement1.addEventListener("click",function(){
    listElementCur = 1
    if(listElementCur!=listElementPrev){
        listRemoveEffect()
        listElement1.classList.add("active")
        listElementPrev = listElementCur
    }

})
listElement2.addEventListener("click",function(){
    listElementCur = 2
    if(listElementCur!=listElementPrev){
        listRemoveEffect()
        listElement2.classList.add("active")
        listElementPrev = listElementCur
    }

})
listElement3.addEventListener("click",function(){
    listElementCur = 3
    if(listElementCur!=listElementPrev){
        listRemoveEffect()
        listElement3.classList.add("active")
        listElementPrev = listElementCur
    }

})

function listRemoveEffect(){
    if(listElementPrev==1){
        listElement1.classList.remove("active")
    }
    else if(listElementPrev==2){
        listElement2.classList.remove("active")
    }
    else{
        listElement3.classList.remove("active")
    }
}
function navigateToFindRecipesPage() {
    window.location.href = "find_recipes.html";
}


document.getElementById("3").addEventListener("click", navigateToFindRecipesPage);
function navigateToFindRecipesPage() {
    window.location.href = "find_recipes.html";
}

function navigateToHomePage() {
    window.location.href = "index.html";
}

document.getElementById("1").addEventListener("click", navigateToHomePage);
document.getElementById("2").addEventListener("click", navigateToHomePage);
document.getElementById("3").addEventListener("click", navigateToFindRecipesPage);



