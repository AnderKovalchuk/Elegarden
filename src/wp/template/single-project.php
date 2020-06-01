<?php get_header('white'); ?> 

<main class="blog__main">
    <?php the_post(); ?>
    <section class="section section--full-height section--bg-image undefined" style="background-image: url('<?php echo the_post_thumbnail_url('full'); ?>')">
        <div class="container project-header__iner">
            <div class="title title__iner undefined">
                <h1 class="title--like-h1"><?php the_title(); ?></h1>
                <div class="title__sub-title">
                    <p><?php echo get_the_excerpt(); ?></p>
                </div>
            </div>
            <div class="project-header__nav-iner">
                <div class="progress progress--light">
                    <p class="progress__num">01</p>
                    <div class="progress__bar"></div>
                    <p class="progress__num">03</p>
                </div>
                <div class="angle-nav"><a href="#"><i class="angle-line angle-line--right angle-line--light"></i></a><span>01 / 06</span><a href="#"><i class="angle-line angle-line--left angle-line--light"></i></a></div>
            </div>
        </div><a class="section__nav-iner" href="#"><span class="section__nav-number">01</span><i class="angle-line angle-line--bottom"></i></a>
    </section>
</main>
<?php
echo $post->ID;
$cur_terms = get_the_terms($post->ID, 'projects');
echo var_dump($cur_terms);
if( is_array( $cur_terms ) ){
	foreach( $cur_terms as $cur_term ){
		echo '<a href="'. get_term_link( $cur_term->term_id, $cur_term->taxonomy ) .'">'. $cur_term->name .'</a>,';
	}
}
?>
<p> ---------------- </p>
<?php
$taxonomies = get_taxonomies();
echo '<p>'. var_dump( $taxonomies ). '</p>';

foreach( $taxonomies as $taxonomy ) {
	echo '<p>'. var_dump( $taxonomy ). '</p>';
}
?>

<?php get_footer(); ?>