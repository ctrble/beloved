var moveToLeftHand : Transform; //variable for left hand
var moveToRightHand : Transform; //variable for right hand
var pickupDistance = 5; //variable for pickup distance
var item : Transform; //variable for the item
private var holdingLeft = false; //variable for holding left set false
private var holdingRight = false; //variable for holding right set false


function Update (){

//FOR LEFT HAND
if(Input.GetButton ("LeftClick")){ //input left click
	if(Vector3.Distance(transform.position, item.position) < pickupDistance){ //checks pickup distance
		holdingLeft = !holdingLeft; //variable for holding set true
		}
	}

if(holdingLeft == true){ //if holding left is true
	item.parent = moveToLeftHand; //parent item to left hand
	item.transform.position = moveToLeftHand.transform.position; //set position to left hand
	item.transform.rotation = moveToLeftHand.transform.rotation; //set rotation to left hand
	}

	else{ //if holding left is false
		moveToLeftHand.transform.DetachChildren();//drop item
	}
	
/*
 
//FOR RIGHT HAND
if(Input.GetButton ("RightClick")){ //input right click
	if(Vector3.Distance(transform.position, item.position) < pickupDistance){ //checks pickup distance
		holdingRight = !holdingRight; //variable for holding set true
		}
	}

if(holdingRight == true){ //if holding right is true
	item.parent = moveToRightHand; //parent item to right hand
	item.transform.position = moveToRightHand.transform.position; //set position to right hand
	item.transform.rotation = moveToRightHand.transform.rotation; //set rotation to right hand
	}

	else{ //if holding right is false
		moveToRightHand.transform.DetachChildren();//drop item
	}

*/

}