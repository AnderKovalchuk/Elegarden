<?php get_header('white'); ?> 

<main class="blog__main">
    <?php the_post(); ?>

    <?php if( ! $headerImage = get_the_post_thumbnail_url(get_the_ID(), 'full') ) :
        $headerImage = get_template_directory_uri() . '/img/header_picture_stub.jpg';
    endif; ?>

    <section class="section section--full-height section--bg-image undefined" style="background-image: url('<?php echo $headerImage; ?>')">
        <div class="container project-header__iner">
            <div class="title title__iner undefined">
                <h2 class="title--like-h3"><?php the_title(); ?></h2>
                <div class="title__sub-title">
                    <p><?php the_excerpt(); ?></p>
                </div>
            </div>
            <?php echo eleg_get_post_nav_iner( $post,
                get_next_post_link('%link', '<i class="angle-line angle-line--right angle-line--light"></i>'),
                get_previous_post_link('%link', '<i class="angle-line angle-line--left angle-line--light"></i>') ); ?>
        </div>
        <a class="section__nav-iner" href="#"><span class="section__nav-number">01</span><i class="angle-line angle-line--bottom"></i></a>
    </section>
    <?php the_content(); ?>
</main>

<?php get_footer(); ?>