<?php 
add_theme_support( 'post-thumbnails', array( 'page', 'project', 'post' ) );  

function eleg_style() {
	wp_enqueue_style(
        'elegardneb-template-style',
        get_template_directory_uri() . '/css/main.css?v1' );
}

function eleg_script() {
    wp_enqueue_script( 
        'elegardneb-template-script', 
		get_template_directory_uri() . '/js/main.js?v1', '1', true );
}

add_action( 'wp_print_styles', 'eleg_style' );
add_action( 'wp_enqueue_scripts', 'eleg_script' );

add_action( 'after_setup_theme', 'theme_register_nav_menu' );
function theme_register_nav_menu() {
	register_nav_menu('eleg-main-menu', 'Главное меню');
}

function register_post_types(){
	register_post_type( 'project', [
		'label'  => 'Наши  проекты',
		'labels' => [
			'name'               => 'Наши  проекты',
			'singular_name'      => 'Проект',
			'add_new'            => 'Добавить проект',
			'add_new_item'       => 'Добавление проекта',
			'edit_item'          => 'Редактирование проекта',
			'new_item'           => 'Добавить',
			'view_item'          => 'Просмотреть',
			'search_items'       => 'Поиск по проектах',
			'not_found'          => 'Не найдено',
			'not_found_in_trash' => 'Не найдено в корзине',
			'menu_name'          => 'Наши  проекты',
		],
		'description'         => '',
		'public'              => true,
        'show_in_menu'        => true,
        'menu_position'       => '2-3',
        'menu_icon'           => 'dashicons-images-alt',
		'show_in_rest'        => true,
		'rest_base'           => null, 
		'hierarchical'        => false,
		'supports'            => [ 'title', 'editor', 'thumbnail', 'excerpt', 'page-attributes' ], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => ['projects'],
		'has_archive'         => true,
		'rewrite'             => true,
		'query_var'           => true,
		'publicly_queryable'  => true,
		'permalink_epmask' 	  => 'EP_ALL'
	] );
	register_post_type( 'service', [
		'label'  => 'Наши услуги',
		'labels' => [
			'name'               => 'Наши услуги',
			'singular_name'      => 'Услуга',
			'add_new'            => 'Добавить услугу',
			'add_new_item'       => 'Добавление услуги',
			'edit_item'          => 'Редактирование услуги',
			'new_item'           => 'Добавить',
			'view_item'          => 'Просмотреть',
			'search_items'       => 'Поиск по услугах',
			'not_found'          => 'Не найдено',
			'not_found_in_trash' => 'Не найдено в корзине',
			'menu_name'          => 'Наши услуги',
		],
		'description'         => '',
		'public'              => true,
        'show_in_menu'        => true,
        'menu_position'       => '2-3',
        'menu_icon'           => 'dashicons-admin-generic',
		'show_in_rest'        => true,
		'rest_base'           => null, 
		'hierarchical'        => false,
		'supports'            => [ 'title', 'editor', 'thumbnail', 'excerpt', 'page-attributes' ], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => null,
		'has_archive'         => true,
		'rewrite'             => true,
		'query_var'           => true,
		'publicly_queryable'  => true,
	] );
}
add_action( 'init', 'register_post_types' );


add_action( 'init', 'create_taxonomy' );
function create_taxonomy(){
	register_taxonomy( 'projects', [ 'project' ], [ 
		'label'                 => 'Типы проектов', 
		'labels'                => [
			'name'              => 'Тыпы проектов',
			'singular_name'     => 'Тип проекта',
			'search_items'      => 'Поиск по типах проектов',
			'all_items'         => 'Все типы проектов',
			'view_item '        => 'Просмотреть',
			'edit_item'         => 'Редактировать',
			'update_item'       => 'Обновить',
			'add_new_item'      => 'Добавить',
			'new_item_name'     => 'Добавить',
			'menu_name'         => 'Типы проектов',
		],
		'description'           => '',
		'public'                => true,
		'hierarchical'          => false,
		'rewrite'               => array( 'slug' => 'projects' ),
		'sort'				    => true,
		'query_var'             => false, // название параметра запроса
		'capabilities'          => array(),
		'meta_box_cb'           => 'post_categories_meta_box', // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
		'show_admin_column'     => false, 
		'show_in_rest'          => true,
		'rest_base'             => null
	] );
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
class eleg_walker_nav_menu extends Walker_Nav_Menu {

	// add classes to ul sub-menus
	function start_lvl( &$output, $depth = 0, $args = NULL ) {
		// depth dependent classes
		$indent = ( $depth > 0  ? str_repeat( "\t", $depth ) : '' ); // code indent
		$display_depth = ( $depth + 1); // because it counts the first submenu as 0
		$classes = array(
			'sub-menu',
			( $display_depth % 2  ? 'menu-odd' : 'menu-even' ),
			( $display_depth >=2 ? 'sub-sub-menu' : '' ),
			'menu-depth-' . $display_depth
			);
		$class_names = implode( ' ', $classes );

		// build html
		$output .= "\n" . $indent . '<ul class="' . $class_names . '">' . "\n";
	}

	// add main/sub classes to li's and links
	function start_el( &$output, $item, $depth = 0, $args = NULL, $id = 0 ) {
		global $wp_query;
		$indent = ( $depth > 0 ? str_repeat( "\t", $depth ) : '' ); // code indent
		$class_names = "";
		// depth dependent classes
		$depth_classes = array(
			( $depth == 0 ? 'main-menu-item' : 'sub-menu-item' ),
			( $depth >=2 ? 'sub-sub-menu-item' : '' ),
			( $depth % 2 ? 'menu-item-odd' : 'menu-item-even' ),
			'menu-item-depth-' . $depth
		);
        $depth_class_names = 'main-menu__menu-item ' . esc_attr( implode( ' ', $depth_classes ) );
        $depth_class_names .= $item->current ? ' active' : '';

		// passed classes
		$classes = empty( $item->classes ) ? array() : (array) $item->classes;
		//$class_names = esc_attr( implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) ) );

		// build html
		$output .= $indent . '<li id="nav-menu-item-'. $item->ID . '" class="' . $depth_class_names . ' ' . $class_names . '">';

		// link attributes
		$attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
		$attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
		$attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
		$attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
		$attributes .= ' class="menu-link ' . ( $depth > 0 ? 'sub-menu-link' : 'main-menu-link' ) . '"';

		$item_output = sprintf( '%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
			$args->before,
			$attributes,
			$args->link_before,
			apply_filters( 'the_title', $item->title, $item->ID ),
			$args->link_after,
			$args->after
		);

		// build html
		$output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
	}
}