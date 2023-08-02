var place_order_title = document.querySelector("#title");
var add_to_checkout = document.querySelector("#checkout");
var menu = document.querySelector('#menu');
var reset = document.querySelector('#reset');
var nameOfSite = document.querySelector('#name');
var login_btn = document.querySelector('#login-btn');
var SignUp_btn = document.querySelector('#Signup-btn');
var checked = document.querySelector('#checked');
var checkedItems = document.querySelector("#checkedItems");
var total_sum = document.querySelector('#total');
var opening_phrase = document.querySelector('#opening_phrase');



nameOfSite.innerHTML = "<h3>Food Finder</h3>";
opening_phrase.innerHTML = "<h1>Order Tasty & Fresh Food</h1>";
login_btn.innerHTML = 'Login';
SignUp_btn.innerHTML = 'SignUp';
place_order_title.innerHTML = "Place Your Order";
add_to_checkout.innerHTML = "Add to Checkout";
total_sum.innerHTML = "Total Price: ";
reset.innerHTML = "Reset";


var total_selected_cost = 0;
var total_ordered = 0;


var food_list = [
    { name: "Doro Wat", price: 80.00 },
    { name: "Kitfo", price: 70.00 },
    { name: "Tibs", price: 60.00 },
    { name: "Shiro", price: 50.00 },
    { name: "Misir Wat", price: 40.00 },
    { name: "Gomen", price: 45.00 },
    { name: "Ful", price: 30.00 },
    { name: "Kik Alicha", price: 35.00 },
    { name: "Dulet", price: 100.00 }
  ]

for(var i = 0; i < food_list.length ; i++){
    var new_option = document.createElement("option");
    new_option.value = food_list[i].price;
    new_option.innerHTML = food_list[i].name;
    menu.appendChild(new_option);
}


add_to_checkout.addEventListener('click', function(){
  var selectedItem = document.querySelector("#menu option:checked");
  
  if (total_ordered == 5){
    alert("Reached Ordering Limit!!");
  }

  if (Number(selectedItem.value) !== 0 && total_ordered < 5){
    var new_choice = document.createElement('li');
    new_choice.classList.add("li");
    new_choice.classList.add();
    new_choice.innerHTML = selectedItem.text + " " + Number(selectedItem.value).toFixed(2);
    total_selected_cost += Number(selectedItem.value);
    total_sum.innerHTML = "Total Price: " + Number(total_selected_cost).toFixed(2);
    checkedItems.appendChild(new_choice);
    total_ordered++;
  }
  checked.innerHTML = "";
  menu.selectedIndex = 0;
});

menu.addEventListener('change', function(){
  var selectedItem = document.querySelector("#menu option:checked");
  if (Number(selectedItem.value) !== 0){
    checked.innerHTML = 'Selected: ' + selectedItem.text + " _  Price: " + Number(selectedItem.value).toFixed(2);
  }
  else{
    checked.innerHTML = "";
    menu.selectedIndex = 0;
  }
})

reset.addEventListener("click", function(){
  total_selected_cost = 0;
  total_ordered = 0;
  total_sum.innerHTML = "Total Price: ";
  checkedItems.innerHTML = "";
  checked.innerHTML = "";
  menu.selectedIndex = 0;

});