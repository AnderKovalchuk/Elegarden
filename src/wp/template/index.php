<?php
    /**
        * Главная страница (index.php)
        * @package elegarden
    */
?>

<?php get_header(); ?> 

<main class="blog__main">
    <section class="section section--big section--header">
        <div class="container container--nav-padding undefined">
            <div class="content content--always--full">
                <div class="content__iner">
                    <div class="title title__iner content__title">
                        <h1 class="title--like-h2">НАШ БЛОГ</h1>
                    </div>
                    <div class="blog__iner">
                        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

                            <div class="blog__item"><a href="<?php the_permalink(); ?>">
                                <figure>
                                    <img src="<?php the_post_thumbnail_url('full'); ?>" alt="<?php the_title(); ?>"/>
                                </figure>
                                <div class="blog__label">
                                    <p><?php the_date(); ?></p>
                                    <h3> <?php the_title(); ?> </h3>
                                </div></a>
                            </div>
                        <?php endwhile; endif; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>