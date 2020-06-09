<!DOCTYPE html>
<html lang="ru">
	<head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>css/main.css?v6">
		<link rel="apple-touch-icon" sizes="76x76" href="<?php echo get_template_directory_uri() ?>/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="<?php echo get_template_directory_uri() ?>/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="<?php echo get_template_directory_uri() ?>/favicon-16x16.png">
		<link rel="manifest" href="<?php echo get_template_directory_uri() ?>/site.webmanifest">
		<link rel="mask-icon" href="<?php echo get_template_directory_uri() ?>/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="msapplication-TileColor" content="#00aba9">
        <meta name="theme-color" content="#ffffff">
        
        <?php wp_head(); ?>
	</head>
	<body class="blog-page">
		<header class="header">
			<div class="container">
				<div class="header__top">
					<div class="header__menu-button"><a class="menu-button menu-button__iner menu-button--light" href="#">
							<div class="menu-button__menu-line"></div><span class="menu-button__text">Menu</span></a>
					</div>
					<div class="header__logo header__logo--light">
						<a href="/">
							<figure>
								<img src="<?php echo get_template_directory_uri() ?>/img/logo_light.png" alt="Logo Elegarden"/>
							</figure>
						</a>
					</div>
					<div class="header__logo header__logo--dark">
						<a href="/">
							<figure>
								<img src="<?php echo get_template_directory_uri() ?>/img/logo_dark.png" alt="Logo Elegarden"/>
							</figure>
						</a>
					</div>
					<div class="header__contact">
						<p>+7 (922) 246 66 55</p>
					</div>
				</div>
			</div>
			<div class="main-menu">
				<div class="container main-menu__iner">
					<div class="header__top">
						<div class="header__logo header__logo--light">
							<a href="/">
								<figure>
									<img src="<?php echo get_template_directory_uri() ?>/img/logo_light.png" alt="Logo Elegarden"/>
								</figure>
							</a>
						</div>
						<div class="header__logo header__logo--dark">
							<a href="/">
								<figure>
									<img src="<?php echo get_template_directory_uri() ?>/img/logo_dark.png" alt="Logo Elegarden"/>
								</figure>
							</a>
						</div>
						<div class="header__contact">
							<p>+7 (922) 246 66 55</p>
						</div>
                    </div>
                    <?php
                        wp_nav_menu( [
                            'theme_location'  => 'eleg-main-menu',
                            'container'       => false, 
                            'menu_class'      => 'main-menu__menu-items', 
                            'echo'            => true,
                            'fallback_cb'     => 'wp_page_menu',
                            'before'          => '',
                            'after'           => '',
                            'link_before'     => '',
                            'link_after'      => '',
                            'items_wrap'      => '<ul id="%1$s" class="%2$s"><li  class="main-menu__menu-item">%3$s</li></ul>',
                            'depth'           => 0,
                            'walker'          => new eleg_walker_nav_menu,
                        ] );
                    ?>
					<div class="main-menu__mail"> 
						<p>mail@elegarden.ru</p>
					</div>
					<div class="main-menu__address">
						<p>г. Москва ул. Нахимовский проспект, д.24</p>
					</div>
				</div>
			</div>
        </header>
        <div class="page-scroll page-scroll__iner page-scroll--dark">
			<ul class="page-scroll__nav"></ul>
			<div class="page-scroll__screen-jump"><span class="page-scroll__screen-number">01</span><i class="angle-line angle-line--bottom"></i>
			</div>
		</div>