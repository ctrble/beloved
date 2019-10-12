static var instance : ShortRange;

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
		enemyAIScript.withinShortRange = true; //the player is within short range
		enemyAIScript.withinMediumRange = false; //the player is no longer within medium range
		Debug.Log ("Is within short range");
	}
	
}

function OnTriggerExit (collision : Collider) {
	if (collision.CompareTag ("Player")) {
		enemyAIScript.withinShortRange = false; //the player is outside short range
		enemyAIScript.withinMediumRange = true; //the player is now in medium range
		Debug.Log ("Is outside short range");
	}

}

