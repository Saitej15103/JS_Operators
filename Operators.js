// 1.Voting Eligibility
var a = +prompt("Enter your age: ")
if(a>=18){
    alert("You are eligible to vote")
}
else{
    alert("You are not able to vote, you must be above 17 years old")
}

// 2.Marriage Eligibility
var G = prompt("Gender:(male or female)").toLowerCase()
var Age = prompt("Mention Your age: ")

if(G == "male" && Age>=21){
    alert("You are eligible to marriage")
}
else if(G == "female" && Age>=18) {
    alert("Yor are eligible to marriage")
}
else{
    alert("You are not eligible to marriage.")
}

// 3.Driving License Eligibility
D = +prompt("Enter your age: ")
if(D>=18){
    alert("You are eligible to apply for a driving license.")
}
else{
    alert("You are not eligible to apply for a driving license.")

}

// 4.Exam Eligibility
E = +prompt("Enter your attendance Percentage")
if(E>=75){
    alert("You are eligible to appear for an exam")
}
else{
    alert("You are not eligible to appear for an exam")
}

// 5.Senior Citizen Discount Eligibility
let SeniorCitizen = +prompt("Enter your age: ")
if(SeniorCitizen>=60){
    alert("You qualified for the discount")
}
else{
    alert("You are not qualified for the discount")
}