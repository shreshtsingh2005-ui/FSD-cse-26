function addParagraph(){
    const para=document.createElement("p");
    para.innerText=" this is new paragraph";
    para.style.color="red";
    const parent=document.getElementById("bg");
    parent.appendChild(para);
}
function removeParagraph(){
    const parent=document.getElementById("bg");
    const child=document.querySelector("p");
    parent.removeChild(child);
}
function removeallParagraph(){
    const parent=document.getElementById("bg");
    const child=document.querySelector("p");
    for(i of child){
    parent.removeChild(i);
    }
}