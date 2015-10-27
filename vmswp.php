<?php

/*
Plugin Name: Visitor Motivation Survey
Plugin URI: https://github.com/spellerberg/vms
Description: Includes the VMS code in a WordPress site
Version: 0.1
Author: Spellerberg Associates
Author URI: http://spellerbergassociates.com/vms
*/

// Enqueue Scripts

add_action('wp_enqueue_scripts', 'vms_enqueue_scripts');

function vms_enqueue_scripts() {

	$version = "0.1";

	if(!wp_script_is('jquery')) wp_enqueue_script("jquery");

	$cookiejs = plugins_url( '/lib/js.cookie.js' , __FILE__ );
	wp_register_script('cookiejs',$cookiejs, false, $version);
	wp_enqueue_script( 'cookiejs',array('jquery'));

	$vmsjs = plugins_url( '/src/vms.js' , __FILE__ );	
	wp_register_script('vmsjs',$vmsjs, false, $version);
	wp_enqueue_script( 'vmsjs',array('jquery','cookiejs'));

	$vmscss = plugins_url( '/src/vms.css' , __FILE__ );	
	wp_register_style('vmscss',$vmscss, false, $version);
	wp_enqueue_style( 'vmscss');

}

// Include Markup

add_filter( 'wp_footer' , 'vms_addhtml' );

function vms_addhtml() {

	include( plugin_dir_path( __FILE__ ) . 'src/vms.html');

}
