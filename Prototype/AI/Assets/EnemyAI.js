static var instance : EnemyAI;

var withinShortRange : boolean = false; //how far away is the monster
var withinMediumRange : boolean = false; //how far away is the monster
var withinLongRange : boolean = false; //how far away is the monster

var enemyAttackScript : EnemyAttack; //so the EnemyAttack script can be called from this script
var enemyHuntScript : EnemyHunt; //so the EnemyHunt script can be called from this script
var enemyWanderScript : EnemyWander; //so the EnemyWander script can be called from this script

function Awake () {
	instance = this; //this script is a variable
	//this.enabled = true; //this script is turned on by default

}

function Start () {
	enemyAttackScript = GetComponent(EnemyAttack); //to find another script within this object and cache it as a variable
	enemyHuntScript = GetComponent(EnemyHunt); //to find another script within this object and cache it as a variable
	enemyWanderScript = GetComponent(EnemyWander); //to find another script within this object and cache it as a variable

}

function Update () {
	if (withinLongRange == false) {
		if (withinMediumRange == false) {
			if (withinShortRange == false) {
				Idle ();
				enemyWanderScript.Disabled ();
				enemyHuntScript.Disabled ();
				enemyAttackScript.Disabled ();
			}
		}
	}
	if (withinLongRange == true) {
		if (withinMediumRange == false) {
			if (withinShortRange == false) {
				enemyWanderScript.Enabled ();
				enemyHuntScript.Disabled ();
				enemyAttackScript.Disabled ();
			}
		}
	}
	if (withinLongRange == false) {
		if (withinMediumRange == true) {
			if (withinShortRange == false) {
				enemyWanderScript.Disabled ();
				enemyHuntScript.Enabled ();
				enemyAttackScript.Disabled ();
			}
		}
	}
	if (withinLongRange == false) {
		if (withinMediumRange == false) {
			if (withinShortRange == true) {
				enemyWanderScript.Disabled ();
				enemyHuntScript.Disabled ();
				enemyAttackScript.Enabled ();
			}
		}
	}

}

function Idle () {
	return;	
	
}