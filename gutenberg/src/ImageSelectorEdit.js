// import { compose } from '@wordpress/compose';
// import { withSelect } from '@wordpress/data';
// import { Component } from '@wordpress/element';

// import { 
//     Button,
//     Spinner,
// } from '@wordpress/components';

// class ImageSelectorEdit extends Component {
//     render(){
//         const onUpdateImage = ( image ) => {
// 			setAttributes( {
// 				bgImageId: image.id,
// 			} );
// 		};

// 		const onRemoveImage = () => {
// 			setAttributes( {
// 				bgImageId: undefined,
// 			} );
//         };
        
        
//         <MediaUploadCheck fallback="dsyfbk">
//         <MediaUpload
//             title='Background image'
//             onSelect={ onUpdateImage }
//             allowedTypes='image'
//             value={ bgImageId }
//             render={ ( { open } ) => (
//                 <Button
//                     className={ ! bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
//                     onClick={ open }>
//                     { !! bgImageId && <Spinner /> }
//                     { 'Загрузить изображение' }
//                 </Button>
//             ) }
//         />
//         </MediaUploadCheck>
//         { !! bgImageId &&
//             <MediaUploadCheck>
//                 <Button onClick={ onRemoveImage } isLink isDestructive>
//                     Удалить изображение
//                 </Button>
//             </MediaUploadCheck>
//         }
//     }
// }

// export default compose(
// 	withSelect( ( select, props ) => {
// 		const { getMedia } = select( 'core' );
// 		const { bgImageId } = props.attributes;

// 		return {
// 			bgImage: bgImageId ? getMedia( bgImageId ) : null,
// 		};
// 	} ),
// )( ImageSelectorEdit );