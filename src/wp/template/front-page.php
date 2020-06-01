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
        <section class="section section--home-section">
            <div class="container container--nav-wrap-padding undefined">
                <div class="content content--mob-wrap">
                    <div class="content__addition-block number">
                        <h5 class="number__title">5</h5>
                        <div class="content__iner">
                            <p>Лет на страже красоты и функциональности садов</p>
                        </div>
                    </div>
                    <div class="content__iner">
                        <p class="content__accent-strong"><strong> Elegarden выполняет работы по ландшафтному дизайну, ландшафтному проектированию, ландшафтному строительству, благоустройству, озеленению, уходу за садом, обслуживаю сада </strong></p>
                        <p>Ландшафтная компания Elegarden создана для того, чтобы идея Вашего сада стала реальностью. Идею сада и озеленения создают заранее, до наступления весеннего тепла - обсуждают детали, формируют пожелания, наблюдать за тем, как мечта о саде обретает чёткие очертания.</p>
                        <div class="angle-link"><a href="/who-are-we.html"><span>Узнать больше о нас </span><i class="angle-line angle-line--left"></i></a></div>
                    </div>
                </div>
            </div><a class="section__nav-iner" href="#"><span class="section__nav-number">02</span><i class="angle-line angle-line--bottom"></i></a>
        </section>
        <!-- <section class="section section--bg-light section--stretched-content undefined">
            <div class="portfolio__iner">
                <div class="portfolio__categories-iner">
                    <div class="categories">
                        <h4 class="categories__title">Категории:</h4>
                        <ul>
                            <li class="active"><a href="#">ЧАСТНЫЕ САДЫ</a></li>
                            <li><a href="#">ОБЩЕСТВЕННЫЕ ПРОСТРАНСТВА</a></li>
                        </ul>
                    </div>
                </div>
                <div class="portfolio__title-iner">
                    <p class="portfolio__sub-title">Частный сад</p>
                    <div class="portfolio__title"> 
                        <p class="portfolio__title-num">01</p>
                        <h3>Мурманск</h3>
                    </div>
                </div>
                <div class="portfolio__description">
                    <p>Площадь: <span>16 соток</span></p>
                    <p>Город: <span>Москвовская область</span></p>
                    <div class="angle-link"><a href="/project.html"><span>Смотреть проект </span><i class="angle-line angle-line--left"></i></a></div>
                </div>
                <div class="portfolio__nav-iner">
                    <div class="progress">
                        <p class="progress__num">01</p>
                        <div class="progress__bar"></div>
                        <p class="progress__num">06</p>
                    </div>
                    <div class="angle-nav"><a href="#"><i class="angle-line angle-line--right"></i></a><span>01 / 06</span><a href="#"><i class="angle-line angle-line--left"></i></a></div>
                </div>
                <div class="portfolio__image">
                    <figure><img src="img/portfolio_img_1.jpg" alt=""></figure>
                </div>
            </div><a class="section__nav-iner" href="#"><span class="section__nav-number">03</span><i class="angle-line angle-line--bottom"></i></a>
        </section> -->
    <?php endwhile; endif; ?>
</main>


<?php get_footer(); ?>