function changeContent(){
    document.getElementById("p1").innerText="hello welcome all";
    document.getElementById("p1").style.color="green"
    document.getElementById('p1').style.fontSize="30px"
}
function getContent(){
    let uname=document.getElementById("username").value
    alert(uname)
}
function getcolors(){
    alert (document.getElementById("colors").value)
    let colot=document.getElementById("colors").value
    document.getElementById("color").value=colot

    
}