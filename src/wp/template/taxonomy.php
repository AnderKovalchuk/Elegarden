<?php get_header(); ?> 

<main class="services__main">
    <section class="section section--bg-light section--header">
        <div class="container container--nav-padding undefined">
            <div class="title title__iner projects__title">
                <h2 class="title--like-h2"><?php single_term_title(); ?></h2>
            </div>
            <div class="grid__iner">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                    <?php the_title(); ?>
                <?php endwhile; endif; ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>