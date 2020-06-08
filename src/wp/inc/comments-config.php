<?php function elegarden_comment( $comment, $args, $depth ) { ?>
        <div class="comments__row">
            <div class="comments__details">
                <p class="comments__person"><?php echo comment_author(); ?></p>
                <p class="comments__date"><?php echo get_comment_date(); ?></p>
            </div>
            <div class="comments__text">
                <?php comment_text(); ?>
            </div>
        </div>
    
<?php } ?>

<?php 
    add_filter( 'comment_form_fields', 'elegarden_reorder_comment_fields' );
    add_filter( 'comment_form_default_fields', 'elegarden_form_default_fields' );
    add_filter( 'comment_form_defaults','elegarden_form_config' );
    
    function elegarden_reorder_comment_fields( $fields ){
        $new_fields = array();
        $myorder = array('author', 'comment');
        foreach( $myorder as $key ){
            $new_fields[ $key ] = $fields[ $key ];
            unset( $fields[ $key ] );
        }
        return $new_fields;
    }
    function elegarden_form_default_fields( $fields ) {
        
        unset( $fields['url'] );
        unset( $fields['email'] );
        $fields['author'] = '<div class="comments__row"> <input id="author" name="author" type="text" placeholder="Введите имя" >';
        return $fields;
    
    }  
    function elegarden_form_config($default) {
        $default['comment_notes_before'] 	= '';
        $default['class_form'] 				= 'comments__form';
        $default['title_reply_before']		= '<div class="comments__header"><h5 class="comments__title">';
        $default['title_reply']				= 'Оставить комментарий';
        $default['title_reply_after']		= '</h5> </div>';
        $default['comment_field']			= '<textarea id="comment" name="comment" rows="1" aria-required="true" placeholder="Введите комментарий"></textarea></div>';
        $default['submit_button']			= '<input name="%1$s" type="submit" id="%2$s" value="%4$s" />';
        $default['label_submit']			= 'Отправить';
        $default['submit_field']			= '%2$s %1$s';
        return $default;
    } 