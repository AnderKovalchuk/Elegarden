<div class="categories">
    <h4 class="categories__title">Категории :</h4>
    <?php
    $taxonomies = get_taxonomies( array(
        'name' => 'projects'
    ), 'objects');
    $category = get_terms(array(
        'taxonomy' => 'projects'
    ));?>
    
    <ul>
    <?php foreach( $category as $item ) : ?>
        <li>
            <a href="<?php echo get_term_link($item); ?>">
                <?php echo $item->name; ?>
            </a>
        </li>
    <?php endforeach; ?>
    </ul>
</div>