#pragma strict

private var myLight : Light;

function Start ()
{
    myLight = GetComponent(Light);
}


	function OnTriggerEnter (myTrigger : Collider)
	{
		if(myTrigger.gameObject.CompareTag("Player"))
		{
			myLight.enabled = !myLight.enabled; //toggle the light
		}
	}
	
	function OnTriggerExit (myTrigger : Collider)
	{
		if(myTrigger.gameObject.CompareTag("Player"))
		{
			myLight.enabled = !myLight.enabled; //toggle the light
		}
	}
