window.addEventListener("load",init);

function init(){
	if(typeof(Storage)!=="undefined"){

	display();

	var button=document.getElementById("button");
	button.addEventListener("click",save);
	}

	else{
	//old bowser
	}
}

function save(){
	var shape = document.querySelector('input[name="doughnut-shape"]:checked').value;
  var glaze = document.querySelector('input[name="doughnut-glaze"]:checked').value;
  var topping = document.querySelector('input[name="doughnut-topping"]:checked').value;
  var reply = document.getElementById('reply').value;

	localStorage.setItem("shapeType",shape);
	localStorage.setItem("glazeType",glaze);
  localStorage.setItem("toppingType",topping);
  localStorage.setItem("custReply",reply);


	display();

}

function display(){
	var theShape = localStorage.getItem("shapeType");
  var theGlaze = localStorage.getItem("glazeType");
  var theTopping = localStorage.getItem("toppingType");
  var theReply = localStorage.getItem("custReply");

	if(theShape==undefined){
		document.getElementById("useroutput").innerHTML="";
	}
	else{ document.getElementById("useroutput").innerHTML="OUTPUT  <hr /><br /><br />The Shape: "
    +theShape+"<br /><br />  The Glaze: "
    +theGlaze+"<br /><br />  The Topping: "
    +theTopping+"<br /><br />  The Reply: "
    +theReply;
	}

}
