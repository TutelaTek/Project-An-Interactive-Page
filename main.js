
var messageArray = [];
function hamburger(){
  document.getElementById("popup-t").innerHTML = "Hamburger";
  document.getElementById("popup-message").innerHTML = "Angus beef, lettuce, tomato, onions, pickles, mayo";
  popup.classList.add('active')
  popup-back.classList.add('active')
}

function salad(){
  document.getElementById("popup-t").innerHTML = "Salad";
  document.getElementById("popup-message").innerHTML = "lettuce, tomato, cucumber, olives, salad dressing";
  popup.classList.add('active')
  popup-back.classList.add('active')
}
function pancakes(){
  document.getElementById("popup-t").innerHTML = "Pancakes";
  document.getElementById("popup-message").innerHTML = "three butter milk pancakes, maple syrup, blue berries";
  popup.classList.add('active')
  popup-back.classList.add('active')
}
function waffles(){
  document.getElementById("popup-t").innerHTML = "Waffles";
  document.getElementById("popup-message").innerHTML = "Three belgian waffles, maple syrup, banana slices, strawberry slices";
  popup.classList.add('active')
  popup-back.classList.add('active')
}
function ribs(){
  document.getElementById("popup-t").innerHTML = "Ribs";
  document.getElementById("popup-message").innerHTML = "five pound classic cut ribs, wild west barbaque sauce, onions";
  popup.classList.add('active')
  popup-back.classList.add('active')
}
function sandwitch(){
  document.getElementById("popup-t").innerHTML = "Chicken Sandwitch";
  document.getElementById("popup-message").innerHTML = "batterd chicken, lettuce, tomato, pickles, toasted bun";
  popup.classList.add('active')
  popup-back.classList.add('active')
}
function hashbrowns(){
  document.getElementById("popup-t").innerHTML = "Hashbrowns";
  document.getElementById("popup-message").innerHTML = "Fresh shredded potatoes, pepper, salt, cayenne pepper";
  popup.classList.add('active')
  popup-back.classList.add('active')
}
function steak(){
  document.getElementById("popup-t").innerHTML = "Steak";
  document.getElementById("popup-message").innerHTML = "Grilled angus beef, wild west barbaque sauce, onions";
  popup.classList.add('active')
  popup-back.classList.add('active')
}

function closebutton(){
  popup.classList.remove('active')
  popup-back.classList.remove('active')

}

class  contactMessage {

  constructor(fname, lname, email, phone, message ) {
    this.fname = fname;
    this.lname = lname;
    this.email =  email;
    this.phone = phone;
    this.message = message;
  }

}
function submitMessage(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  if(fname==""||lname==""||email==""||phone==""||message==""){
    alert("fill in all fields");
  }else {
  userMessage = new contactMessage(fname, lname, email, phone, message);
  messageArray.push(userMessage);
  console.log(messageArray);
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

}
