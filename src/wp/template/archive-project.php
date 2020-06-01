<?php get_header(); ?> 

<main class="services__main">
    <section class="section section--bg-light section--header">
        <div class="container container--nav-padding undefined">
            <div class="title title__iner projects__title">
                <h2 class="title--like-h2"><?php the_title(); ?></h2>
            </div>
            <div class="grid__iner">
                <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
                    <div class="grid__item">
                        <a href="<?php the_permalink(); ?>">
                            <figure class="grid__img">
                                <img src="<?php echo the_post_thumbnail_url('full'); ?>" alt="<?php the_title(); ?>"/>
                            </figure>
                            <h3 class="grid__title">
                                <?php the_title(); ?>
                            </h3>
							<div class="angle-link angle-link--light">
								<p>
                                    <span>Подробнее</span><i class="angle-line angle-line--left"></i>
							    </p>
                            </div>
                        </a>
                    </div>
                <?php endwhile; endif; ?>
            </div>
        </div>
    </div>
</section>

<?php get_footer(); ?>