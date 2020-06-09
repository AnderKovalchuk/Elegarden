<?php
if ( post_password_required() ) {
	return;
}
?>
<div class="comments">
    <div class="comments__header">
        <h5 class="comments__title">Комментарии к статьи:</h5>
        <div class="comments__share">
            <!-- <p>Поделиться: </p><a href="#">VK</a><a href="#">FACEBOOK</a><a href="#">TELEGRAM</a> -->
        </div>
    </div>
    <div class="comments__inet">
        <?php
            wp_list_comments(
                array(
                    'avatar_size' => 100,
                    'short_ping'  => true,
                    'callback'    => 'elegarden_comment'
                )
            );
        ?>
    </div>
    <div>
        <?php
        the_comments_pagination(
            array(
                'prev_text' => '<div class="angle-link"><a href="/blog.html"><i class="angle-line angle-line--right"></i><span>Предыдущие комментарии </span></a></div>',
                'next_text' => ' <div class="angle-link"><a href="/blog.html"><span>Следующие  комментарии </span><i class="angle-line angle-line--left"></i></a></div>',
            )
        );
        ?>
    </div>
    <div class="comments">
        <?php comment_form( ); ?>
    </div>
</div>