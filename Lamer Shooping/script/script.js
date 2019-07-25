console.log('Here')
if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready);
}else{
	ready();
}

function ready(){
	/*var changeClass = document.getElementsByClassName(".disble-block2");
	console.log(changeClass.classList);
	changeClass.classList.remove("disble-block2");
	changeClass.classList.add("enable-block2");	
	//document.getElementsByClassName("shop-item-button").disabled = true;
	//console.log(disbleElement);*/
}

var src1;
var btn;
function addToCart(imageSrc)
{
	src1 = document.getElementById(imageSrc).getAttribute('src');
	alert(src1);
	var a = document.createElement('IMG');
	a.setAttribute("src", src1);
	a.setAttribute("height", "100");
	a.setAttribute("width", "70");
	alert(a);
	//var remBtn = document.createElement('Button');
	//remBtn.setAttribute("class",btn-remove);
	//remBtn.setAttribute("type",button);
	document.getElementById("added-Items").appendChild(a);
	btn = document.createElement("BUTTON");
	btn.setAttribute("class","btn-remove");
	btn.setAttribute("onclick","removeCart()");
	btn.innerHTML = "Remove";
	document.getElementById("added-Items").appendChild(btn);
		/*document.getElementById("block3").setAttribute("class", "enable-block3");
		alert(document.getElementById("block3").html());
	
		document.getElementById("block2").setAttribute("class", "enable-block2");
		alert(document.getElementById("block2").html());*/
		
	enableDiv();
		
}

function enableDiv()
{
	let element = document.querySelector(".disble-block2,.disble-block3");
    //element.classList.remove(".disble-block2");
	if(element.classList.contains("disble-block2"))
  {
  	element.classList.remove("disble-block2");
  }else if(element.classList.contains("disble-block3"))
  {
  	element.classList.remove("disble-block3");
  }
}
	

function removeCart()
{
var removeCartItem = document.getElementsByClassName('btn-remove');
console.log(removeCartItem);
for(var i=0;i<removeCartItem.length;i++)
{
	var button = removeCartItem[i];
	button.addEventListener('click',function(event){
		console.log('clicked');
		var buttonClicked = event.target;
		buttonClicked.parentElement.remove();
});
}
}




/*function addToCartClicked(event)
{
var button = event.target;
var shopItem = button.parentElement;
var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
console.log(title,imageSrc);
addItemToCart(imageSrc);
}



function addItemToCart(imageSrc)
{
var cartRow = document.createElement('div');
var cartItems = document.getElementsByClassName('cart-items')[0];
var cartRowContents ='<div class="added-items cart-column"> <img class="cart-item-image" src="${imageSrc}" width="80" height="100"/> <button class=" btn btn-remove" type="button">REMOVE</button>     </div>'

cartRow.innerHTML = cartRowContents;
cartItems.append(cartRow);
cartRow.document.getElementsByClassName('btn-remove')[0].addEventListener('click',removeCartItem);

}*/


