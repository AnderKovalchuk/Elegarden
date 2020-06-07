<?php get_header(); ?> 

<main class="services__main">
    <section class="section section--bg-light section--header">
        <div class="container container--nav-padding undefined">
            <div class="title title__iner projects__title">
                <h2 class="title--like-h2">Наши проекты</h2>
            </div>
            <?php get_template_part( 'template-parts/content', 'grid' ); ?>
        </div>
    </section>
</main>

<?php get_footer(); ?>