console.log('dsdlfkldsf 22');

wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'fancy-quote',
    label: 'Fancy Quote',
} );

( function( blocks, editor, element ) {
	var el = element.createElement;
	var RichText = editor.RichText;
	var AlignmentToolbar = editor.AlignmentToolbar;
	var BlockControls = editor.BlockControls;
	var InspectorControls = editor.InspectorControls;
 
    var blockStyle = {
        backgroundColor: '#900',
        color: '#fff',
        padding: '20px',
    };
 
    blocks.registerBlockType( 'elegarden-block/section-bloks', {
		title: 'Секция контента - Elegarden',
		description: 'Горизонтальный блок для размещения контента на странице',
		icon: 'dashicons-excerpt-view',
		category: 'common',
		attributes: {
            title: {
                type: 'array',
                source: 'children',
                selector: 'p',
			},
			alignment: {
                type: 'string',
                default: 'none',
            },
        },
        edit: function( props ) {
			var title = props.attributes.title;
			var alignment = props.attributes.alignment;

            function onChangeContent( newContent ) {
                props.setAttributes( { title: newContent } );
			}
			function onChangeAlignment( newAlignment ) {
                props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
            }
 
            return [el(
				InspectorControls,
				{ key: 'controls' },
				el(
					AlignmentToolbar,
					{
						value: alignment,
						onChange: onChangeAlignment,
					}
				)
			),
			el(
                RichText,
                {
                    tagName: 'p',
                    className: props.className,
                    onChange: onChangeContent,
                    value: title,
                }
            )];
        },
 
        save: function( props ) {
            return el( RichText.Content, {
                tagName: 'p', value: props.attributes.title,
            } );
        },
    } );
}(
    window.wp.blocks,
    window.wp.editor,
    window.wp.element
) );


// // ( function( blocks, element ) {
// //     var el = element.createElement;
 
// //     var blockStyle = {
// //         backgroundColor: '#900',
// //         color: '#fff',
// //         padding: '20px',
// //     };
 
// //     blocks.registerBlockType( 'gutenberg-examples/example-01-basic', {
// //         title: 'Example: Basic',
// //         icon: 'universal-access-alt',
// //         category: 'layout',
// //         example: {},
// //         edit: function() {
// //             return el(
// //                 'p',
// //                 { style: blockStyle },
// //                 'Hello World, step 1 (from the editor).'
// //             );
// //         },
// //         save: function() {
// //             return el(
// //                 'p',
// //                 { style: blockStyle },
// //                 'Hello World, step 1 (from the frontend).'
// //             );
// //         },
// //     } );
// // }(
// //     window.wp.blocks,
// //     window.wp.element
// // ) );

// ( function( blocks, element ) {
//     var el = element.createElement;
// 	blocks.registerBlockType('elegarden-block/section-bloks', {
// 		title: 'Секция контента - Elegarden',
// 		description: 'Горизонтальный блок для размещения контента на странице 2',
// 		icon: 'smiley',
// 		category: 'common',
// 		attributes: {
// 			content: {type: 'string'},
// 			color: {type: 'string'}
// 		},
	
// 		edit: function() {
//             return el(
//                 'p',
//                 { style: blockStyle },
//                 'Hello World, step 1 (from the editor).'
//             );
//         },
//         save: function() {
//             return el(
//                 'p',
//                 { style: blockStyle },
//                 'Hello World, step 1 (from the frontend).'
//             );
//         },
// 	});
// }(
//     window.wp.blocks,
//     window.wp.element
// ) );

// // wp.blocks.registerBlockType('elegarden-block/content-bloks', {
// //     title: 'Контент - Elegarden',
// //     description: 'Горизонтальный блок для размещения контента на странице',
// // 	icon: 'smiley',
// // 	category: 'common',
// // 	attributes: {
// // 		content: {type: 'string'},
// // 		color: {type: 'string'}
// // 	},
  
// // // Это настраивает, как будут работать поля содержимого и цвета, и устанавливает необходимые элементы
  
// // 	edit: function(props) {
// // 		function updateContent(event) {
// // 			props.setAttributes({content: event.target.value})
// // 		}
// // 		function updateColor(value) {
// // 			props.setAttributes({color: value.hex})
// // 		}
// // 		return React.createElement(
// // 			"div",
// // 			null,
// // 			React.createElement(
// // 				"h5",
// // 				null,
// // 				"Заголовок блока"
// // 			),
// // 			React.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent }),
// // 			React.createElement(
// // 				"h5",
// // 				null,
// // 				"Конткнт блока"
// // 			),
// // 			React.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor })
// // 		);
// // 	},
// // 	save: function(props) {
// // 		return wp.element.createElement(
// // 			"h3",
// // 			{ style: { border: "3px solid " + props.attributes.color } },
// // 			props.attributes.content
// // 		);
// // 	}
// // })