#pragma strict
/*

*/

static var instance : UseCheese; //so this script can be called from other scripts
var pickupDropScript : PickupDrop; //so the PickupDrop script can be called from this script
var isHeld : boolean = false;

function Awake () {
instance = this; //call from other scripts using UseBottle.instance.[Function Name]();

}

function Start () {
	this.enabled = false; //this script is turned off by default
	pickupDropScript = GameObject.Find ("Pickup Zone").GetComponent(PickupDrop); //to find another script within a different object and cache it as a variable

}

function Update () {
	renderer.material.color = Color.red; //DEBUG : does this whole script do anything?
	if(Input.GetButton ("LeftClick")){ //input left click, should find a way to avoid affecting other held items, if it even acts weird
		if(pickupDropScript.cheese.IsChildOf(pickupDropScript.leftHand)){ //is it in the left hand?
		renderer.material.color = Color.blue; //DEBUG : does this whole script do anything?
		}
	}
	if(Input.GetButton ("RightClick")){ //input left click, should find a way to avoid affecting other held items, if it even acts weird
		if(pickupDropScript.cheese.IsChildOf(pickupDropScript.rightHand)){ //is it in the right hand?
		renderer.material.color = Color.blue; //DEBUG : does this whole script do anything?
		}
	}
	
}

function Enabled () {
	this.enabled = true; //to enable the use of this script

}

function Disabled () {
	this.enabled = false; //to disable the use of this script

}

function OnTriggerEnter (myTrigger : Collider) { //checking if in range of item
	Debug.Log ("You are closest to the cheese");
	pickupDropScript.closestItem = pickupDropScript.cheese; //talk to PickupDrop and set a variable to be this item

}

function IsHeld () {
	isHeld = true; //holding this item
	Debug.Log ("You're holding cheese");

}

function IsDropped () {
	isHeld = false; //not holding this item
	Debug.Log ("You dropped cheese");

}
