( function( blocks, element, blockEditor, editor ) {
    let el = element.createElement;
    let InnerBlocks = blockEditor.InnerBlocks;
    let BlockControls = blockEditor.BlockControls;
    let AlignmentToolbar = editor.AlignmentToolbar;

    blocks.registerBlockType( 'gutenberg-custom-block/content', {
        title: 'Секция контента', 					
        description: 'section description', 
        category: 'layout', 				
        keywords: 'section', 				
        icon: 'smiley',
        attributes: {
            title: {type: 'string'},
        },
        

        edit: function( props ) {
            return [
                el(
                    BlockControls,
                    { key: 'controls' },
                    el(
                        AlignmentToolbar,
                        {
                            //value: alignment,
                            //onChange: onChangeAlignment,
                        }
                    )
                ),
                el(
                    'section',
                    { className: props.className},
                    el( 'h5', null, 'Заголовок блока'),
                    el( 'input', { type: "text", value: props.attributes.title} ),
                    el( 'h5', null, 'Блок контента'),
                    el( InnerBlocks )
                )
            ];
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
    window.wp.editor,
) );