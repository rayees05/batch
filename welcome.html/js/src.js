let title="addition"
function add(x,y){
    console.log(title)
    
    var sum=x-y
    console.log("sum=",sum)
    return sum;
}
let result=add(1,2)
console.log(result)
add()
let i=100
function outer(){
  let i=10
    console.log("inside outer function i=",i)
}
outer()
    console.log("after function call i=",i )

    function greetings(msg){
      return "hay all "+ msg;
    }
    console.log(greetings("good morning") )
    let message= greetings("good evening")
    console.log(message)


