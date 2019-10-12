#pragma strict
/*

*/

var instance : PickupDrop; //this script is a type
var holdingLeft : boolean = false; //variable for holding left set false
var holdingRight : boolean = false; //variable for holding right set false
var pickupDistance : float = 1; //variable for pickup distance
var closestItem : Transform; //to find which item to pick up

var player : Transform; //variable for the player
var leftHand : Transform; //variable for left hand
var rightHand : Transform; //variable for right hand

var basket : Transform; //an item
var bottle : Transform; //an item
var cheese : Transform; //an item
var knife : Transform; //an item
var plate : Transform; //an item
var ring : Transform; //an item

var useBasketScript : UseBasket; //so the UseBasket script can be called from this script
var useBottleScript : UseBottle; //so the UseBottle script can be called from this script
var useCheeseScript : UseCheese; //so the UseCheese script can be called from this script
var useKnifeScript : UseKnife; //so the UseKnife script can be called from this script
var usePlateScript : UsePlate; //so the UsePlate script can be called from this script
var useRingScript : UseRing; //so the UseRing script can be called from this script


function Awake () {
	instance = this; //this script is a variable

}

function Start () {
	useBasketScript = GameObject.Find ("Basket").GetComponent(UseBasket); //to find another script within a different object and cache it as a variable
	useBottleScript = GameObject.Find ("Bottle").GetComponent(UseBottle); //to find another script within a different object and cache it as a variable
	useCheeseScript = GameObject.Find ("Cheese").GetComponent(UseCheese); //to find another script within a different object and cache it as a variable
	useKnifeScript = GameObject.Find ("Knife").GetComponent(UseKnife); //to find another script within a different object and cache it as a variable
	usePlateScript = GameObject.Find ("Plate").GetComponent(UsePlate); //to find another script within a different object and cache it as a variable
	useRingScript = GameObject.Find ("Ring").GetComponent(UseRing); //to find another script within a different object and cache it as a variable

}

function Enabled () {
	this.enabled = true; //to enable the use of this script

}

function Disabled () {
	this.enabled = false; //to disable the use of this script

}

function PickupOrDropLeft () {
	if (Vector3.Distance(player.transform.position, closestItem.transform.position) < pickupDistance) { //is the item close enough
		if(holdingLeft == false) { //can pickup if the hand is empty
			PickupLeft (); //run Pickup function
		}
		else { //can drop if hand is full
			DropLeft (); //run Drop function
		}
	}
	else {
		Debug.Log ("You are too far away");
	}
	
}

function PickupOrDropRight () {
	if (Vector3.Distance(player.transform.position, closestItem.transform.position) < pickupDistance) { //is the item close enough
		if (holdingRight == false) { //can pickup if the hand is empty
			PickupRight (); //run Pickup function
		}
		else { //can drop if hand is full
			DropRight (); //run Drop function
		}
	}
	else {
		Debug.Log ("You are too far away");
	}
	
}

function PickupLeft () {
	closestItem.parent = leftHand; //parent item to left hand
	closestItem.transform.position = leftHand.transform.position; //set position to left hand
	closestItem.transform.rotation = leftHand.transform.rotation; //set rotation to left hand
	holdingLeft = true; //variable for holding set true; hand is full

	//enables only currently held items
	if(basket.IsChildOf(player)){
		useBasketScript.IsHeld();
	}
	if(bottle.IsChildOf(player)){
		useBottleScript.IsHeld();
	}
	if(cheese.IsChildOf(player)){
		useCheeseScript.IsHeld();
	}
	if(knife.IsChildOf(player)){
		useKnifeScript.IsHeld();
	}
	if(plate.IsChildOf(player)){
		usePlateScript.IsHeld();
	}
	if(ring.IsChildOf(player)){
		useRingScript.IsHeld();
	}
	
}

function PickupRight () {
	closestItem.parent = rightHand; //parent item to left hand
	closestItem.transform.position = rightHand.transform.position; //set position to left hand
	closestItem.transform.rotation = rightHand.transform.rotation; //set rotation to left hand
	holdingRight = true; //variable for holding set true; hand is full

	//enables only currently held items
	if(basket.IsChildOf(player)){
		useBasketScript.IsHeld();
	}
	if(bottle.IsChildOf(player)){
		useBottleScript.IsHeld();
	}
	if(cheese.IsChildOf(player)){
		useCheeseScript.IsHeld();
	}
	if(knife.IsChildOf(player)){
		useKnifeScript.IsHeld();
	}
	if(plate.IsChildOf(player)){
		usePlateScript.IsHeld();
	}
	if(ring.IsChildOf(player)){
		useRingScript.IsHeld();
	}
	
}

function DropLeft () {
	leftHand.transform.DetachChildren(); //drop held item
	holdingLeft = false; //variable for holding set false; hand is empty
	
	//disables dropped items
	if(basket.IsChildOf(player)){
		useBasketScript.IsDropped();
	}
	if(bottle.IsChildOf(player)){
		useBottleScript.IsDropped();
	}
	if(cheese.IsChildOf(player)){
		useCheeseScript.IsDropped();
	}
	if(knife.IsChildOf(player)){
		useKnifeScript.IsDropped();
	}
	if(plate.IsChildOf(player)){
		usePlateScript.IsDropped();
	}
	if(ring.IsChildOf(player)){
		useRingScript.IsDropped();
	}
		
}

function DropRight () {
	rightHand.transform.DetachChildren(); //drop held item
	holdingRight = false; //variable for holding set false; hand is empty
	
	//disables dropped items
	if(basket.IsChildOf(player)){
		useBasketScript.IsDropped();
	}
	if(bottle.IsChildOf(player)){
		useBottleScript.IsDropped();
	}
	if(cheese.IsChildOf(player)){
		useCheeseScript.IsDropped();
	}
	if(knife.IsChildOf(player)){
		useKnifeScript.IsDropped();
	}
	if(plate.IsChildOf(player)){
		usePlateScript.IsDropped();
	}
	if(ring.IsChildOf(player)){
		useRingScript.IsDropped();
	}
	
}