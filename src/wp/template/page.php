<?php
    /**
        * Главная страница (index.php)
        * @package elegarden
    */
?>

<?php get_header(); ?> 

<main class="page__main">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <?php echo the_content(); ?>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>