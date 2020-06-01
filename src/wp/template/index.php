<?php
    /**
        * Главная страница (index.php)
        * @package elegarden
    */
?>

<?php get_header(); ?> 

<main class="page__main">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <section class="section section--big section--header">
			<div class="container container--nav-padding article">
				<div class="content">
					<div class="content__iner">
                        <div class="title title__iner content__title">
                            <!-- <div class="title__sub-title">
                                <p>Садовый промах: как не допустить смертельной схватки цветов у себя на даче</p>
                            </div> -->
                            <h2 class="title--like-h3"><?php the_title(); ?></h2>
                        </div>
                        <!-- <div class="article__info">
                            <p>29 февраля</p>
                            <p>2023 просмотра</p>
                        </div> -->
                        <div class="article__content">
                            <?php echo the_content(); ?>
                    </div>
                </div>
            </div>
        </section>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>