<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <h2><?php echo get_the_title() ?></h2>
<?php endwhile; endif; ?>