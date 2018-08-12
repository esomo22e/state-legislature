/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	'use strict';

	window.onResize = function (width) {
		console.log(width);
	};

	window.enterView = function (msg) {
		console.log('enter-view');
	};

/***/ })
/******/ ]);

var colorArray = [ "#000", "#DB6950", "#a0a0a0" ];

var chart = d3waffle()
			.icon("&#9679;")
			.colorscale(d3.scaleOrdinal().range(colorArray));

	// var data = [
	//   { "name": "White", "value": 135},
	//   { "name": "Black", "value": 5},
	//   { "name": "Asian", "value": 5},
	// 	{"name": "Hispanic", "value": 8},
	// 	{"name": "Vacant", "value": 7}
	// ];

	var data = [
	  { "name": "White", "value": 137},
	  { "name": "People of Color", "value": 16},
		{"name": "Vacant", "value": 7}
	];


	d3.select("#state-leg")
	  .datum(data)
		.call(chart);



		// var data2 = [
		// 	{ "name": "White", "value": 36},
		// 	{ "name": "Black", "value": 0},
		// 	{ "name": "Asian", "value": 1},
		// 	{"name": "Hispanic", "value": 1},
		// 	{"name": "Vacant", "value": 2}
		// ];

		var data2 = [
			{ "name": "White", "value": 36},
			{ "name": "People of Color", "value": 2},
			{"name": "Vacant", "value": 2}
		];

		d3.select("#state-senate")
			.datum(data2)
			.call(chart);
