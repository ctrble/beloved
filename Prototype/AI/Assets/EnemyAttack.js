static var instance : EnemyAttack; 

function Awake () {
	instance = this; //this script is a variable
	instance.enabled = false; //this script is turned off by default
	
}

function Start () {
	Disabled ();
	
}

function Update () {
	Attack ();
	
}

function Enabled () {
	this.enabled = true; //to enable the use of this script

}

function Disabled () {
	this.enabled = false; //to disable the use of this script

}

function Attack () {
    Destroy (gameObject.Find("Cube"));
	Debug.Log ("The monster killed you!");

}