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
                        <?php if ( comments_open() || get_comments_number() ) :
                            comments_template();
                        endif; ?>
                    </div>
                </div>
            </div><a class="section__nav-iner" href="#"><span class="section__nav-number">01</span><i class="angle-line angle-line--bottom"></i></a>
        </section>
        <div class="article__folow">
            <div class="container container--nav-padding undefined">
                <p>Подпишитесь, чтобы получать новости прямо в ваш почтовый ящик</p>
                <form class="article__form">
                    <input id="name1" type="text" name="name1" placeholder="Введите имя">
                    <textarea id="message1" name="message1" rows="1" placeholder="Введите E-mail"></textarea>
                    <input type="submit" value="Подписаться">
                </form>
            </div>
        </div>
        

        <?php
    endwhile; ?>
</main>

<?php get_footer(); ?>
