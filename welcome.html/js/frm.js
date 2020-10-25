function validate(){
    var name=document.getElementById("name")
    var number=document.getElementById("number")
    if(name.value==""){
      alert("name feild is empty")
      name.focus()
      return false
    }
    if( number.value==""){
        alert("number feild is empty")
        number.focus()
        return false
    }
    if(number.value.length!=10 || isNaN(number.value)){
      alert("incorrect mobile number")
      number.focus()
      return false
    }
    

}