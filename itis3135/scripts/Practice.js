var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	function displayCappuccino() {
		let cappuccinoMsg = "$3.45 - Delicious Cappuccino. Delicious Cappuccino!";
		var order = document.getElementById("order");
		order.innerHTML += "<p>" + cappuccinoMsg + "</p>";
	}
	function displayEspresso() {
		let espressoMsg = "$1.95 - Espresso - Delicious espresso. Wanna try it?"
		var order = document.getElementById("order");
		order.innerHTML += "<p>" + espressoMsg + "</p>";
	}

	// for click event add item to order and update total
	function addToOrder() {
		var espressoPrice = 1.95;
		var cappuccinoPrice = 3.45;
		var total = 0;


	}
	// display order and total

	
		
}; // end onload