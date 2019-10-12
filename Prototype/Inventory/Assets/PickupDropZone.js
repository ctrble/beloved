#pragma strict
/*

*/

var instance : PickupDropZone; //this script is a type
var pickupDropScript : PickupDrop; //so the PickupDrop script can be called from this script
private var inPickupDropZone : boolean = false; //is the player in PickupDropZone

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
	pickupDropScript = GetComponent(PickupDrop); //to find another script within this object and cache it as a variable
	useBasketScript = GameObject.Find ("Basket").GetComponent(UseBasket); //to find another script within a different object and cache it as a variable
	useBottleScript = GameObject.Find ("Bottle").GetComponent(UseBottle); //to find another script within a different object and cache it as a variable
	useCheeseScript = GameObject.Find ("Cheese").GetComponent(UseCheese); //to find another script within a different object and cache it as a variable
	useKnifeScript = GameObject.Find ("Knife").GetComponent(UseKnife); //to find another script within a different object and cache it as a variable
	usePlateScript = GameObject.Find ("Plate").GetComponent(UsePlate); //to find another script within a different object and cache it as a variable
	useRingScript = GameObject.Find ("Ring").GetComponent(UseRing); //to find another script within a different object and cache it as a variable

}

function Update () {
	if (inPickupDropZone == true && Input.GetMouseButtonDown (0)) { //left clicking in the pickup zone
		pickupDropScript.PickupOrDropLeft (); //run function to decide if picking up or dropping
	}

	if (inPickupDropZone == true && Input.GetMouseButtonDown (1)) { //right clicking in the pickup zone
		pickupDropScript.PickupOrDropRight (); //run function to decide if picking up or dropping
	}
	
}

function OnTriggerEnter (myTrigger : Collider) { //checking if in pickup zone
	inPickupDropZone = true; //sets inPickupZone to be a true variable
	pickupDropScript.Enabled (); //to allow picking up of items
	useBasketScript.Disabled (); //to disallow use of item
	useBottleScript.Disabled (); //to disallow use of item
	useCheeseScript.Disabled (); //to disallow use of item
	useKnifeScript.Disabled (); //to disallow use of item
	usePlateScript.Disabled (); //to disallow use of item
	useRingScript.Disabled (); //to disallow use of item
	Debug.Log ("You can now pickup items");

}

function OnTriggerExit (myTrigger : Collider) { //checking if outside pickup zone
	inPickupDropZone = false; //sets inPickupZone to be a false variable
		if(useBasketScript.isHeld == true) {
			useBasketScript.Enabled (); //should find if isHeld is true, and enable only the held item
			Debug.Log ("You can use the basket");
		}
		if(useBottleScript.isHeld == true) {
			useBottleScript.Enabled (); //should find if isHeld is true, and enable only the held item
			Debug.Log ("You can use the bottle");
		}
		if(useCheeseScript.isHeld == true) {
			useCheeseScript.Enabled (); //should find if isHeld is true, and enable only the held item
			Debug.Log ("You can use the cheese");
		}
		if(useKnifeScript.isHeld == true) {
			useKnifeScript.Enabled (); //should find if isHeld is true, and enable only the held item
			Debug.Log ("You can use the knife");
		}
		if(usePlateScript.isHeld == true) {
			usePlateScript.Enabled (); //should find if isHeld is true, and enable only the held item
			Debug.Log ("You can use the plate");
		}
		if(useRingScript.isHeld == true) {
			useRingScript.Enabled (); //should find if isHeld is true, and enable only the held item
			Debug.Log ("You can use the ring");
		}
	pickupDropScript.Disabled (); //to allow use of items
	
}	