static var instance : LongRange;

var enemyAIScript : EnemyAI; //so the EnemyAI script can be called from this script

function Awake () {
	instance = this; //this script is a variable
	//instance.enabled = true; //this script is turned on by default
	
}

function Start () {
	enemyAIScript = GameObject.Find ("Capsule").GetComponent(EnemyAI); //to find another script within a different object and cache it as a variable

}

function Update () {

}

function OnTriggerEnter (collision : Collider) {
	if (collision.CompareTag ("Player")) {
		enemyAIScript.withinLongRange = true; //the player is within long range
		Debug.Log ("Is within long range");
	}
	
}

function OnTriggerExit (collision : Collider) {
	if (collision.CompareTag ("Player")) {
		enemyAIScript.withinLongRange = false; //the player is outside long range
		Debug.Log ("Is outside long range");
	}
	
}

