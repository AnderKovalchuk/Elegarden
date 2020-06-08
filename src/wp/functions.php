<?php 
add_theme_support( 'post-thumbnails', array( 'page', 'project', 'service', 'post' ) );

require get_template_directory() . '/inc/create-structure.php';
require get_template_directory() . '/inc/generate-portfolio.php';


function eleg_style() {
	wp_enqueue_style(
        'elegardneb-template-style',
        get_template_directory_uri() . '/css/main.css?v3' );
}

function eleg_script() {
    wp_enqueue_script( 
        'elegardneb-template-script', 
		get_template_directory_uri() . '/js/main.js?v3', '1', true );
}

add_action( 'wp_print_styles', 'eleg_style' );
add_action( 'wp_enqueue_scripts', 'eleg_script' );

add_action( 'after_setup_theme', 'theme_register_nav_menu' );
function theme_register_nav_menu() {
	register_nav_menu('eleg-main-menu', 'Главное меню');
}



function eleg_get_post_nav_iner( $post, $postLinkNext, $postLinkPrevious){

	$posts = get_posts( array(
		'post_type' => $post->post_type
	) );
	$postCount = count( $posts );
	if( $postCount < 10){
		$postCount = '0' . $postCount;
	}
	$postCurrent = 0;

	for($index = 0; $index < $postCount; $index++){
		if ( $posts[$index]->ID == $post->ID ){
			$postCurrent = $index + 1;
			break;
		}
	}
	if(!$postLinkNext)
		$postLinkNext = '<a> <i class="angle-line angle-line--right angle-line--light angle-line--inactive"></i> </a>';
	if(!$postLinkPrevious)
		$postLinkPrevious = '<a> <i class="angle-line angle-line--left angle-line--light angle-line--inactive"></i> </a>';

	$output  = '<div class="project-header__nav-iner">';
	$output .= '<div class="progress progress--light">';
	$output .= '<p class="progress__num"> 01 </p>';
	$output .= '<div class="progress__bar"> <i style="width: ' . $postCurrent / $postCount  * 100 . '%"></i></div>';
	$output .= '<p class="progress__num">' . $postCount . '</p>';
	$output .= '</div><div class="angle-nav">';
    $output .= $postLinkNext;
    $output .= '<span> 0' .  $postCurrent . ' / ' . $postCount . ' </span>';
	$output .= $postLinkPrevious;
	$output .= '</div> </div> ';


	return $output;
}



require get_template_directory() . '/inc/comments-config.php';
require get_template_directory() . '/inc/menu-walker.php';
