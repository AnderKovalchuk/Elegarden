<?php

function eleg_generate_portfolio(){
    $output = '';

    $posts = get_posts( array(
        'numberposts' => 5,
        'post_type'   => 'project',
        'orderby'     => 'date',
        'order'       => 'DESC',
        'suppress_filters' => true, // подавление работы фильтров изменения SQL запроса
    ) ); ?>

    <section class="section section--bg-light section--stretched-content undefined">
        <div class="portfolio__iner slider">
            <div class="portfolio__categories-iner">
                <?php get_template_part( 'template-parts/categories' ); ?>
            </div>
            <div class="portfolio__title-iner slider__title-iner">
                <?php for($index = 0; $index < count($posts); $index++) : ?>
                <div class="slider__title <?php if($index == 0) echo 'active'; ?> " >
                    <p class="portfolio__sub-title">
                        <?php echo implode(wp_get_post_terms($posts[$index]->ID, 'projects', array('fields' => 'names'))); ?>
                    </p>
                    <div class="portfolio__title"> 
                        <p class="portfolio__title-num"><?php echo '0' . ($index + 1); ?></p>
                        <h3> <?php echo $posts[$index]->post_title; ?> </h3>
                    </div>
                </div>
                <?php endfor; ?> 
            </div>
            <div class="portfolio__description slider__description-iner">
                <?php for($index = 0; $index < count($posts); $index++) : ?>
                    <div class="slider__description <?php if($index == 0) echo 'active'; ?> ">
                        <?php if( $el_size = implode( get_post_meta($posts[$index]->ID, 'Площадь:')) ) : ?>
                            <p>Площадь: <span><?php echo $el_size; ?> </span></p>
                        <?php endif;
                        if( $el_city = implode( get_post_meta($posts[$index]->ID, 'Город:')) ) : ?>
                            <p>Город: <span><?php echo $el_city; ?> </span></p>
                        <?php endif; ?>
                        <div class="angle-link">
                            <a href=" <?php echo get_post_permalink($posts[$index]->ID); ?> ">
                                <span>Смотреть проект </span>
                                <i class="angle-line angle-line--left"></i>
                            </a>
                        </div>
                    </div>
                <?php endfor; ?> 
            </div>
            <div class="portfolio__nav-iner">
                <div class="progress slider__progress">
                    <p class="progress__num">00</p>
                    <div class="progress__bar"><i></i></div>
                    <p class="progress__num">00</p>
                </div>
                <div class="angle-nav slider__nav">
                    <a href="#"><i class="angle-line angle-line--right"></i></a>
                    <span>00 / 00</span>
                    <a href="#"><i class="angle-line angle-line--left"></i></a>
                </div>
            </div>
            <div class="portfolio__image slider__items-iner">
                <div class="slider__items">
                    <?php for( $index = 0; $index < count($posts); $index++ ) : ?>
                        <?php if( ! $image = get_the_post_thumbnail_url( $posts[$index]->ID, 'full') ) :
                            $image = get_template_directory_uri() . '/img/header_picture_stub.jpg';
                        endif; ?>

                        <figure class="img--with-fill">
                            <img src=" <?php echo $image ?> " alt="" >
                        </figure>
                    <?php endfor; ?> 
                </div>
            </div>
        </div><a class="section__nav-iner" href="#"><span class="section__nav-number">03</span><i class="angle-line angle-line--bottom"></i></a>
    </section>
<?php

}