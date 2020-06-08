<?php
add_action( 'init', 'eleg_register_post_types' );
add_action( 'init', 'eleg_create_taxonomy' );

function eleg_register_post_types(){
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
		'supports'            => [ 'title', 'editor', 'thumbnail', 'excerpt', 'page-attributes', 'custom-fields' ], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
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
		'supports'            => ['title', 'editor', 'thumbnail', 'excerpt', 'page-attributes' ], // 'title','editor','author','thumbnail','excerpt','trackbacks','custom-fields','comments','revisions','page-attributes','post-formats'
		'taxonomies'          => [],
		'has_archive'         => true,
		'rewrite'             => true,
		'query_var'           => true,
		'publicly_queryable'  => true,
		'permalink_epmask' 	  => 'EP_ALL'
	] );
}

function eleg_create_taxonomy(){
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