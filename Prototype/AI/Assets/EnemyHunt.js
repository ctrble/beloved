static var instance : EnemyHunt; 

var target : Transform; //set to the player
var enemy : Transform; //set to a monster
var moveSpeed : float = 5.0; //how fast the monster is

function Awake () {
	instance = this; //this script is a variable
	instance.enabled = false; //this script is turned off by default
	
}

function Start () {
	Disabled ();

}

function Update () {
	Hunt ();
	
}

function Enabled () {
	this.enabled = true; //to enable the use of this script

}

function Disabled () {
	this.enabled = false; //to disable the use of this script

}

function Hunt () {
	enemy.transform.LookAt(target); //face the player
	enemy.transform.position = Vector3.Lerp (enemy.position, target.position, Time.deltaTime * moveSpeed); //move towards the player
	Debug.Log ("The monster is hunting");
	
}