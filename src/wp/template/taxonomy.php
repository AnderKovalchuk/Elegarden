<?php get_header(); ?> 
<main class="services__main">
    <section class="section section--bg-light section--header">
        <div class="container">
            <div class="projects__iner">
                <div class="title title__iner projects__title">
                    <h2 class="title--like-h3"><?php single_term_title(); ?></h2>
                </div>
                <div class="projects__navigation">
                    <?php get_template_part( 'template-parts/categories' ); ?>
                </div>
                <div class="projects__info-col">
                    <?php get_template_part( 'template-parts/content', 'grid' ); ?>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>