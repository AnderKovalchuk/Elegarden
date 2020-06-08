<?php
    /**
        * Главная страница (index.php)
        * @package elegarden
    */
?>

<?php get_header('white'); ?> 

<main class="home-page__main">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <section class="section section--full-height section--bg-image section--stretched-content home-header" style="background-image: url('<?php echo the_post_thumbnail_url('full'); ?>')">
            <div class="container home-header__iner">
                <div class="title title__iner undefined">
                    <h2 class="title--like-h1">ELEGARDEN</h2>
                    <div class="title__sub-title">
                        <p>Создадим красивый и функциональный сад за 60 дней</p>
                    </div>
                </div>
                <div class="home-header__add-text">
                    <p>Измените ландшафтный дизайн вокруг себя — подчеркните индивидуальность</p>
                </div>
                <div class="home-header__left-text">
                    <p>5 лет на страже красоты и функциональности садов</p>
                </div>
            </div><a class="section__nav-iner" href="#"><span class="section__nav-number">01</span><i class="angle-line angle-line--bottom"></i></a>
        </section>
        
        <?php echo the_content(); ?>

        <?php eleg_generate_portfolio(); ?>
    <?php endwhile; endif; ?>
</main>


<?php get_footer(); ?>