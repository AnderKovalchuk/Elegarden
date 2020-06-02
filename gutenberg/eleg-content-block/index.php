<?php
/**
    * Plugin Name: Elegarden - Блоки контента
    * Author: Ander Kovalchuk
    * Version: 1.0.0
*/

function elegConentBlock() {
	wp_enqueue_script(
		'eleg-content-block',
		plugin_dir_url(__FILE__) . 'eleg-content-block.js',
		array('wp-blocks','wp-editor', 'wp-plugins', 'wp-edit-post', 'wp-element'),
		true
	);
}
   
add_action('enqueue_block_editor_assets', 'elegConentBlock');