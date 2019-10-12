#pragma strict
/*

*/

var instance : UseItem; //this script is a type

function Awake () {
	instance = this; //this script is a variable

}

function Start () {
	this.enabled = false; //this script is turned off by default

}

function Update () {
	renderer.material.color = Color.red; //DEBUG : does this whole script do anything?
	if (Input.GetButton ("LeftClick")) { //input left click, should find a way to avoid affecting other held items, if it even acts weird
		renderer.material.color = Color.blue; //DEBUG : does this whole script do anything?
	}

}

function Enabled () {
	this.enabled = true; //to enable the use of this script

}

function Disabled () {
	this.enabled = false; //to disable the use of this script

}
