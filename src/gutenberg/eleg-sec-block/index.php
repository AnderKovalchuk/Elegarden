<?php
/**
 * Plugin Name: Elegarden - Блоки для шаблона
 * Author: Ander Kovalchuk
 * Version: 1.0.0
 */
  
function eleg_sec_init() {
    wp_enqueue_script(
        'elegarden-section-block-script',
		plugins_url( 'eleg-sec-block.js?v17', __FILE__ ),
		array( 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components' )
    );
}
add_action( 'enqueue_block_editor_assets', 'eleg_sec_init' );

// function eleg_sec_init() {
// 	wp_enqueue_script(
// 		'elegarden-section-block',
// 		plugin_dir_url(__FILE__) . 'eleg-sec-block.js',
// 		array('wp-blocks','wp-editor'),
// 		true
// 	);
// }
   
// add_action('enqueue_block_editor_assets', 'eleg_sec_init');



// function gutenberg_examples_01_register_block() {
 
//     // automatically load dependencies and version
//     // $asset_file = include( plugin_dir_path( __FILE__ ) . 'index.php');
 
//     wp_register_script(
//         'gutenberg-examples-01-esnext',
//         plugins_url( 'eleg-sec-block.js', __FILE__ ),
//         // $asset_file['dependencies'],
//         // $asset_file['version']
//     );
 
//     register_block_type( 'gutenberg-examples/example-01-basic-esnext', array(
//         'editor_script' => 'gutenberg-examples-01-esnext',
//     ) );
 
// }
// add_action( 'init', 'gutenberg_examples_01_register_block' );