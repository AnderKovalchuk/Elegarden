( function( blocks, element, blockEditor ) {
    let el = element.createElement;
    let InnerBlocks = blockEditor.InnerBlocks;

    blocks.registerBlockType( 'eleg-sec-block/section', {
        title: 'Секция для контента', 					
        description: 'section description', 
        category: 'layout', 				
        keywords: 'section', 				
        icon: 'dashicons-excerpt-view',
  
        edit: function( props ) {
          return el(
            'section',
            { className: props.className},
            el( InnerBlocks )
          );
        },
  
      save: function( props ) {
        return el(
          'section',
          { className: props.className },
          el( InnerBlocks.Content )
        );
      },
    } );
  
  } (
    window.wp.blocks,
    window.wp.element,
    window.wp.blockEditor,
  ) );