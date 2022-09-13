// console.log("David is a gentle man")
// console.log("Taiwo is a smart man")
// console.log("Kenny is a brilliant lady")

function myname(name){
    console.log("My name is " + name + " and I am gentle")
}

myname("David")
myname("Kenny")
myname("Taiwo")

// create a function with a function keyword. then u chose a prefered name for it and open a parentheses with curly brackets 
// inside the function, you can have all ur logics 
function bottle(){
    var num1 = 34;
    var num2 = 22;

    var result = num1 + num2;
    console.log(result)
}

bottle()
// the bottle is not dynamic
// the values of the numbers are static

// lets practice another logic 
// it wont use the num1 and num2 
// let me explain this 

// did u understand it?

// I can use this function to add any two numbers 

// 1 You must call the function before it will work. 
// 2. funtions can have parameters. the parameters will be used in the function block
function newaddtion(num1, num2){
    var result = num1 + num2
    console.log(result)
}
newaddtion(45, 67)

newaddtion(700, 245)

newaddtion(900, 2)