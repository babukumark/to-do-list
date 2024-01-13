let n=null;

let inputbox= document.querySelector("#input");
let submitebtn=document.getElementById("btn");
let box=document.getElementById("box2")

submitebtn.addEventListener("click",submite)

function submite()
{
    if(n==null)
    {
    var div1=document.createElement("div")
    div1.setAttribute("id","div1")


    var line=document.createElement("li")
    line.setAttribute("id","line")
    line.innerText=inputbox.value

    var edittext=document.createElement("button")
    edittext.id="edit"
    edittext.innerText="edit"

    edittext.addEventListener("click",function(){
        editFunction(this);
    })

    var delite=document.createElement("button")
    delite.id="del"
    delite.innerText="delete"
    inputbox.value=" "

    delite.addEventListener("click",deliteFunction)

    function deliteFunction()
    {
        delite.parentElement.remove()
    }
    box.append(div1)
div1.append(line)
div1.append(edittext)
div1.append(delite)
}
else{
    editNew()
}
  


function editFunction(a)
{
    n=a.parentElement.childNodes;
    inputbox.value=n[0].innerText;
}

function editNew()
{
    n[0].innerText=inputbox.value
    inputbox.value=" "
    n=null
}


}



let clear=document.getElementById("clear")
clear.addEventListener("click",clearall)

function clearall(){
    clear.parentElement.remove()
    box.append(clear)


}

// clrbtn.addEventListener('click',function{
//     input.value="";
// })
























// let num=([1,2,3,4]);
// function getfirstvalue(arr){
//     return num;
   
// }

// console.log(getfirstvalue(0));