static var instance : EnemyWander;

/// <summary>
/// Creates wandering behaviour for a CharacterController.
/// </summary>
@script RequireComponent(CharacterController)
 
var speed : float = 5;
var directionChangeInterval : float = 1;
var maxHeadingChange : float = 30;

var heading : float = 0;
var targetRotation : Vector3;
 
function Awake () {
	instance = this; //this script is a variable
	instance.enabled = false; //this script is turned off by default
	
}

function Start () {
	transform.eulerAngles = Vector3 (0, Random.Range(0,360), 0);  // Set random initial rotation and look in a random direction at start of frame.
	NewHeadingRoutine (); //StartCoroutine
	
}

function Update () {
	var controller : CharacterController = GetComponent (CharacterController);

    transform.eulerAngles = Vector3.Slerp (transform.eulerAngles, targetRotation, Time.deltaTime * directionChangeInterval);
    var forward = transform.TransformDirection (Vector3.forward);
    controller.SimpleMove (forward * speed);
    
}

function Enabled () {
	this.enabled = true; //to enable the use of this script

}

function Disabled () {
	this.enabled = false; //to disable the use of this script

}

/// <summary>
/// Repeatedly calculates a new direction to move towards.
/// Use this instead of MonoBehaviour.InvokeRepeating so that the interval can be changed at runtime.
/// </summary>
while (true) {
	NewHeadingRoutine ();
	yield WaitForSeconds (directionChangeInterval);
	
}

/// <summary>
/// Calculates a new direction to move towards.
/// </summary>
function NewHeadingRoutine () {
    var floor = Mathf.Clamp (heading - maxHeadingChange, 0, 360);
    var ceil  = Mathf.Clamp (heading + maxHeadingChange, 0, 360);
    heading = Random.Range (floor, ceil);
    targetRotation = new Vector3 (0, heading, 0);
}