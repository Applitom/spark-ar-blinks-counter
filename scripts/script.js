/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const FaceGestures = require('FaceGestures');
const FaceTracking = require('FaceTracking');

const face = FaceTracking.face(0);

const blinks_counter_text_node = Scene.root.find('blink_counter_text');

let blinks = 0;

FaceGestures.onBlink(face).subscribe(function() {
	blinks = blinks + 1
	blinks_counter_text_node.text = blinks.toString()
});

