// function sayHello() { alert("Hello World") }

// var pi=3.14;
// var person="are you GOD";
// var answer="Yes I am!";
// document.write(pi+"<br>");
// document.write(person+"<br>");
// document.write(answer+"<br>");

// function myFunction()
// {
//     var carname="Welcome";
//     document.getElementById("demo").innerHTML=carname;
// }

// var num = 10;
// console.log(num);
// console.log(typeof (num));
// num = false;
// console.log(num);
// console.log(typeof (num));
// num = "Pranav";
// console.log(num);
// console.log(typeof (num));
// var num = null;
// console.log(num);
// console.log(typeof (num));
// var num = undefined;
// console.log(num);
// console.log(typeof (num));

// var year = 2024;
// var companyname="Google"
// var numberArray=[1,2,3];
// var sayhello = function () {
//     alert('hello world!');
// }
// console.log(year);
// console.log(companyname);
// console.log(numberArray);
// console.log(sayhello);

// var person = {
//     firstname: "John",
//     lastname: "Doe",
//     id: 5566,
//     getinfo: function () {
//         return this.firstname + " " + this.lastname;
//     }
// };
// document.getElementById("demo").innerHTML = person.getinfo();

// var person={
//     name:'Ramesh',
//     age:30,
//     isMarried:true,
//     address:{
//         street:'vinay nagar',
//         flatNo:201 
//     }
// };
// console.log(person);

// var person2=new Object();
// person2.name='Pranav';
// person2.age=20;
// person2.isMarried=true;
// person2.address={};
// person2['address']['flatNo']="nagar road";
// person2.address="nagar road";

// console.log(person['name']);
// document.write(person['name']);
// document.write("<br>");
// console.log(person.name);
// document.write(person.address.name)
// console.log(person2);

// function myFunction(){
//     var carName='honda'
//     document.getElementById('demo1'.innerHTML=typeof carName)
// }

// var locales={
//     europe:function(){
//         var myFriend="Monique";
//         var france=function(){
//             var paris=function(){
//                 console.log(myFriend);
//             };
//             paris();
//         };
//         france();
//     }
// };
// locales.europe();

// function show(){
//     var a='a is local outer variable';
//     document.write(a+"<br>");
//     function disk(){
//         var b='b is a local inner varible';
//         document.write(b+"<>");
//     }disk();
// }show();

// var myVar="global";
// function check(){
//     var myVar="local";
//     document.write(myVar)
// }

// var a=10;
// function functionA(){
//     console.log("Start function A");
//     function functionB(){
//         console.log("In function B");
//     }   
//     functionB();
//     console.log("Leaving fuctionA");
// }
// functionA();
// console.log("Global Context");

// var Name='John';
// function first(){
//     var a ='Hello';
//     second();
//     var x=a+Name;
//     console.log(x);
// }
// function second(){
//     var b ='Hii';
//     third();
//     var x=b+Name;
//     console.log(x);
// }
// function first(){
//     var c ='Hey';
//     var x=c+Name;
//     console.log(x);
// }
// first();

// var a=5;
// function add(){
//     var b=45;
//     console.log(a+b);
//     function mul(){
//         var c=48;
//         console.log(b*c);
//     }
//     mul();
// }
// add();

// var age=20;
// if(age>18){
//     document.write("<b> You are eligible to cast the vote");
// }
// console.log("Eligible ");

// var grade='A';
// document.write("Entering switch block <br/>");
// switch(grade){
//     case 'A':document.write("Good job <br/>");
//     break;
//     case 'B':document.write("Preety Good <br/>");
//     break;
//     case 'A':document.write("Passed <br/>");
//     break;
//     case 'A':document.write("Not so good <br/>");
//     break;
//     case 'A':document.write("Failed <br/>");
//     break;
//     default: 
//     document.write("Unknown grade");
// }
// document.write("Exiting switch block");

// var i;
// for(i=0;i<3;i=i+1){
//     console.log(i);
// }

// var count;
// document.write("Starting loop" + "<br/>");
// for(count=0;count<10;count++){
//     document.write("current count : "+count);
//     document.write("<br/>");
// }
// document.write("Looped stopped!");

// for(i=0;i<100;i++){
//     if(i%2==0){
//         console.log(i+"is an even number");
//     }
//     else{
//         console.log(i+"is an odd num");
//     }
// }

// var Array=['A','B','C'];
// for(var i=0;i<Array.length;i++){
//     console.log("The member of my array in index" +i+ "is" + Array[i]);
// }


// var count =0;
// document.write("Starting loop");
// while(count<10){
//     document.write("Current count: "+count+"<br/>")
// }

function myFunction(){
    alert("Hello World!");
}

