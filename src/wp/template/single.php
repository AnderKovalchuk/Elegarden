<?php get_header(); ?> 

<main class="blog__main">
<?php
    while ( have_posts() ) :
        the_post();
        ?>

        <section class="section section--big section--header">
            <div class="container container--nav-padding article">
                <div class="content">
                    <div class="content__iner">
                        <div class="title title__iner content__title">
                            <?php if( has_excerpt() ) : ?>
                                <div class="title__sub-title">
                                    <p><?php the_excerpt(); ?></p>
                                </div>
                            <?php endif; ?>
                            <h2 class="title--like-h3">
                                <?php the_title(); ?>
                            </h2>
                        </div>
                        <div class="article__info">
                            <p> <?php the_date(); ?> </p>
                            <p>2023 просмотра</p>
                        </div>
                        <div class="article__content">
                            <?php the_content(); ?>
                            <div class="article__link">
                                <div class="angle-link"><a href="/blog.html"><span>Читать “Похожие публикации”</span><i class="angle-line angle-line--left"></i></a></div>
                                <div class="angle-link"><a href="/blog.html"><span>Читать “Лучшие публикации”</span><i class="angle-line angle-line--left"></i></a></div>
                            </div>
                        </div>
                        <div class="comments">
                            <div class="comments__header">
                                <h5 class="comments__title">Комментарии к статьи:</h5>
                                <div class="comments__share">
                                    <p>Поделиться: </p><a href="#">VK</a><a href="#">FACEBOOK</a><a href="#">TELEGRAM</a>
                                </div>
                            </div>
                            <div class="comments__inet">
                                <div class="comments__row">
                                    <div class="comments__details">
                                        <p class="comments__person">Маргарита</p>
                                        <p class="comments__date">4 апреля</p>
                                    </div>
                                    <div class="comments__text">
                                        <p>Давно мечтаю о таком газоне. </p>
                                        <p>Изучила инструкции по уходу, не сложные - так что весной будет и у нас такой.</p>
                                    </div>
                                </div>
                                <div class="comments__row">
                                    <div class="comments__details">
                                        <p class="comments__person">Александра</p>
                                        <p>4 апреля</p>
                                    </div>
                                    <div class="comments__text">
                                        <p>Давно мечтаю о таком газоне. </p>
                                        <p>Да, это действительно не легкая задача создать такую красоту на своем участке, наверно лучше все-таки прибегнуть у услугам опытных мастеров своего дела. А ведь и правда не зная основных законов ландшафтного дизайна сложно получить идеальный результат!</p>
                                    </div>
                                </div>
                            </div>
                            <div class="comments__header">
                                <h5 class="comments__title">Оставить комментарий</h5>
                            </div>
                            <form class="comments__form">
                                <div class="comments__row">
                                    <input id="name" type="text" name="name" placeholder="Введите имя">
                                    <textarea id="message" name="message" rows="1" placeholder="Введите комментарий"></textarea>
                                </div>
                                <input type="submit" value="Отправить">
                            </form>
                        </div>
                    </div>
                </div>
            </div><a class="section__nav-iner" href="#"><span class="section__nav-number">01</span><i class="angle-line angle-line--bottom"></i></a>
        </section>


        <?php
        get_template_part( 'template-parts/post/content', get_post_format() );

        // If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) :
            comments_template();
        endif;

        // the_post_navigation(
        //     array(
        //         'prev_text' => '<span class="screen-reader-text">' . __( 'Previous Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Previous', 'twentyseventeen' ) . '</span> <span class="nav-title"><span class="nav-title-icon-wrapper">' . twentyseventeen_get_svg( array( 'icon' => 'arrow-left' ) ) . '</span>%title</span>',
        //         'next_text' => '<span class="screen-reader-text">' . __( 'Next Post', 'twentyseventeen' ) . '</span><span aria-hidden="true" class="nav-subtitle">' . __( 'Next', 'twentyseventeen' ) . '</span> <span class="nav-title">%title<span class="nav-title-icon-wrapper">' . twentyseventeen_get_svg( array( 'icon' => 'arrow-right' ) ) . '</span></span>',
        //     )
        // );

    endwhile; // End the loop.
    ?>
</main>

<?php get_footer(); ?>
