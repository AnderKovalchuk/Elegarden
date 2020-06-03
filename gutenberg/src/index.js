import { registerBlockType } from '@wordpress/blocks';
import { 
    SelectControl, 
    DropdownMenu, 
    Toolbar, 
    Panel, PanelBody, PanelRow,
    ToggleControl,
    FormFileUpload,
    Button,
} from '@wordpress/components';
import {
    RichText,
    AlignmentToolbar,
    InspectorControls ,
    InnerBlocks,
} from '@wordpress/block-editor';
import {
    arrowLeft,
    arrowRight,
    arrowUp,
    arrowDown,
    more,
} from '@wordpress/icons';
import{
    withSelect
} from '@wordpress/data'


import {  MediaUpload, MediaUploadCheck } from '@wordpress/editor';

const blockStyle = {
    padding: '20px',
    border: '1px solid rgba(66,88,99,.4)',
    background: 'rgba(139,139,150,.1)',
};


registerBlockType( 'elegarden-block/section-bloks', {
    title: 'Секция контента - Elegarden',
    description: 'Горизонтальный блок для размещения контента на странице',
    icon: 'dashicons-excerpt-view',
    category: 'common',
    attributes: {
        size: {
            type: 'string',
            default: 'section',
        },
        isStretchedContent: {
            type: 'boolean',
            default: 'false',
        },
        bgImageId: {
            type: 'number',
        }
    },

    edit: ( props ) => {
        const {
            attributes: {
                size,
                isStretchedContent,
                bgImageId,
            },
        } = props;
        console.log(props);

        const onChangeSize = ( newSize ) => {
            props.setAttributes( { size: newSize } );
            console.log(size);
        };
        const onChangeStretchedContent = ( statys ) => {
            props.setAttributes( { isStretchedContent: statys } );
            console.log(isStretchedContent)
        };
        const onUpdateImage = ( image ) => {
            console.log(image.id);
            props.setAttributes( { bgImageId: image.id } );
        };
        const onRemoveImage = () => {
            props.setAttributes( {
                bgImageId: undefined,
            } );
        };

        

        return(
            <section style={ blockStyle }>
                {
                    <InspectorControls>
                        <PanelBody title="Настройки размера" initialOpen={ true }>
                            <PanelRow>
                                <SelectControl
                                    label="Размер"
                                    value={ size }
                                    options={ [
                                        { label: 'Во всю высоту', value: 'section--full-height' },
                                        { label: 'Большой', value: 'section--big' },
                                        { label: 'Средний', value: 'section--medium' },
                                        { label: 'Обычный', value: 'section' },
                                    ] }
                                    onChange={ onChangeSize }
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Убрать отступы"
                                    // help={ hasFixedBackground ? 'Has fixed background.' : 'No fixed background.' }
                                    checked = { isStretchedContent }
                                    onChange={ onChangeStretchedContent }
                                />
                            </PanelRow>
                        </PanelBody>
                        <PanelBody title="Фоновое изображение" initialOpen={ false }>
                            <PanelRow>
                                <FormFileUpload
                                    accept="image/*"
                                    onChange={ (image) => console.log(image) }
                                    children="false" 
                                >
                                    <Button isSecondary >
                                        Загрузить изображение
                                    </Button>
                                    </FormFileUpload>
                                </PanelRow>
                            <PanelRow> 
                                <MediaUploadCheck fallback="dsyfbk">
                                <MediaUpload
                                    title='Background image'
                                    onSelect={ onUpdateImage }
                                    allowedTypes='image'
                                    value={ bgImageId }
                                    render={ ( { open } ) => (
                                        <Button
                                            className={ ! bgImageId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                            onClick={ open }>
                                            { 'Загрузить изображение' }
                                        </Button>
                                    ) }
                                />
                                </MediaUploadCheck>
                                { !! bgImageId &&
                                <MediaUploadCheck>
                                    <Button onClick={ onRemoveImage } isLink isDestructive>
                                        Удалить изображение
                                    </Button>
                                </MediaUploadCheck>
                                }
                            </PanelRow>
                        </PanelBody>
                    </InspectorControls>
                }

                <InnerBlocks />
                
            </section>
        );
    },
    save: ( props ) => {
        let imageStyle= {};
        let sectionClass = 'section';
        sectionClass += ' ' + props.attributes.size;
        sectionClass += props.attributes.isStretchedContent ? ' section--stretched-content' : '';

        if(props.attributes.bgImageId){
            sectionClass += ' section--bg-image'
            imageStyle= {
                backgroundImage: 'sdj',
            };
        }
        return(
            <section 
                className={ sectionClass }
                style= {imageStyle}
            >
                <InnerBlocks.Content />
            </section>
        )
    }
} );


// class ImageSelectorEdit extends Component {
//     render() {
//         const { attributes, setAttributes } = this.props;
//         const { bgImageId } = attributes;
//         const instructions = <p>To edit the background image, you need permission to upload media.', 'image-selector-example</p>;

//         const onUpdateImage = ( image ) => {
//             setAttributes( {
//                 bgImageId: image.id,
//             } );
//         };

//         return (
//             <Fragment>
//                 <InspectorControls>
//                     <PanelBody
//                         title='Background settings'
//                         initialOpen={ true }
//                     >
//                         <div className="wp-block-image-selector-example-image">
//                             <MediaUploadCheck fallback={ instructions }>
//                                 <MediaUpload
//                                     title='Background image'
//                                     onSelect={ onUpdateImage }
//                                     allowedTypes={ ALLOWED_MEDIA_TYPES }
//                                     value={ bgImageId }
//                                     render={ ( { open } ) => (
//                                         <Button
//                                             className={ 'editor-post-featured-image__toggle' }
//                                             onClick={ open }>
//                                             { 'Set background image' }
//                                         </Button>
//                                     ) }
//                                 />
//                             </MediaUploadCheck>
//                         </div>
//                     </PanelBody>
//                 </InspectorControls>
//                 <div>
//                     <InnerBlocks />
//                 </div>
//             </Fragment>
//         );
//     }
// }