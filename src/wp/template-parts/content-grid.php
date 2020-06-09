<div class="grid__iner">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        
        <?php if( $gridImg = get_the_post_thumbnail_url(get_the_ID(), 'full') ) :
            $gridClass = "grid__item";
        else:
            $gridClass = "grid__item grid__item--dark";
        endif; ?>
        
        <div class="<?php echo $gridClass; ?>">
            <a href="<?php the_permalink(); ?>">
                <?php if( $gridImg ) : ?>
                    <figure class="grid__img">
                        <img src="<?php echo $gridImg; ?>" alt="<?php the_title(); ?>" />
                    </figure>
                <?php endif; ?>
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