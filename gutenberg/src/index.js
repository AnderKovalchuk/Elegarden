import { registerBlockType } from '@wordpress/blocks';
import { 
    SelectControl, 
    DropdownMenu, 
    Toolbar, 
    Panel, PanelBody, PanelRow,
    ToggleControl,
    FormFileUpload,
    Button,
    Spinner,
    ResponsiveWrapper,
    TextControl,
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
const blockStyle2 = {
    padding: '20px',
    border: '1px solid rgba(66,88,99,.8)',
};


registerBlockType( 'elegarden-block/section-bloks', {
    title: 'Секция контента - Elegarden',
    description: 'Горизонтальный блок для размещения контента на странице',
    icon: 'editor-insertmore',
    category: 'common',
    attributes: {
        size: {
            type: 'string',
            default: 'section',
        },
        isStretchedContent: {
            type: 'boolean',
            default: false,
        },
        isHeaderContent: {
            type: 'boolean',
            default: false,
        },
        bgImage: {
            type: 'string',
        }
    },

    edit: ( props ) => {
        const {
            attributes: {
                size,
                isStretchedContent,
                bgImage,
                isHeaderContent,
            },
        } = props;

        const onChangeSize = ( newSize ) => {
            props.setAttributes( { size: newSize } );
        };
        const onChangeStretchedContent = ( statys ) => {
            props.setAttributes( { isStretchedContent: statys } );
        };
        const onChangeHeaderContent = ( statys ) => {
            props.setAttributes( { isHeaderContent: statys } );
        };
        const onUpdateImage = ( image ) => {
            props.setAttributes( { bgImage: image.url } );
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
                                    checked = { isStretchedContent }
                                    onChange={ onChangeStretchedContent }
                                />
                            </PanelRow>
                            <PanelRow>
                                <ToggleControl
                                    label="Секция в шапке сайта"
                                    checked = { isHeaderContent }
                                    onChange={ onChangeHeaderContent }
                                />
                            </PanelRow>
                        </PanelBody>
                        <PanelBody title="Фоновое изображение" initialOpen={ false }>
                            <PanelRow> 
                                <MediaUploadCheck fallback="dsyfbk">
                                <MediaUpload
                                    title='Background image'
                                    onSelect={ onUpdateImage }
                                    allowedTypes='image'
                                    value={ bgImage }
                                    render={ ( { open } ) => (
                                        <Button
                                            className={ !! bgImage ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                                            onClick={ open }>
                                            { ! bgImage && ('Загрузить изображение') }
                                            { bgImage && 
                                                <ResponsiveWrapper
                                                    naturalWidth= "300px"
                                                    naturalHeight = "300px"
                                                >
                                                    <img src={ bgImage } width="100%" />
                                                </ResponsiveWrapper>}
                                        </Button>
                                    ) }
                                />
                                </MediaUploadCheck>
                                { !! bgImage &&
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
        sectionClass += props.attributes.isHeaderContent ? ' section--header' : '';

        if(props.attributes.bgImage){
            sectionClass += ' section--bg-image'
            imageStyle= {
                backgroundImage: ` url('${ props.attributes.bgImage }') `,
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

registerBlockType( 'elegarden-block/container-bloks-number', {
    title: 'Блок контента - Elegarden',
    description: 'Горизонтальный блок для размещения контента на странице',
    icon: 'excerpt-view',
    category: 'common',
    attributes: {
        number: {
            type: 'string',
            default: '5',
        },
        rightText: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
        size: {
            type: 'string',
            default: 'container--nav-padding',
        },
    },
    edit: ( props ) => {
        const {
            attributes: {
                number,
                rightText,
                size,
            },
        } = props;

        const onChangeNumber = ( newNumber ) => {
            props.setAttributes( { number: newNumber } );
        };
        const onChangeText = ( newText ) => {
            props.setAttributes( { rightText: newText } );
        };
        const onChangeSize = ( newSize ) => {
            props.setAttributes( { size: newSize } );
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
                                        { label: 'Во всю шырину', value: 'container' },
                                        { label: 'Отступ слева', value: 'container--nav-padding' },
                                        { label: 'Отступ слева и справа', value: 'container--nav-wrap-padding' },
                                        { label: 'Двойной отступ', value: 'container--x2-padding' },
                                    ] }
                                    onChange={ onChangeSize }
                                />
                            </PanelRow>
                        </PanelBody>
                    </InspectorControls>
                }


                <h4>Контентейнер с числом</h4>
                <TextControl
                    name= "number"
                    label= "Число"
                    value= { number }
                    onChange={ onChangeNumber }
                />
                <RichText
                    tagName= "p"
                    name= "rightText"
                    value= { rightText }
                    placeholder= "Текст возле числа"
                    onChange={ onChangeText }
                    formattingControls={ [ 'bold', 'italic' ] }
                />
                <hr />
                <h5>Левая часть контента</h5>
                <InnerBlocks />
            </section>
        );
    },

    save: ( props ) => {
        let containerClass = 'container' + ' ' + props.attributes.size;

        return(
            <div className= { containerClass }>
                <div className="content content--mob-wrap">
                    <div className="content__addition-block number">
                        <h5 className="number__title">
                            { props.attributes.number }
                        </h5>
                        <div className="content__iner">
                        <RichText.Content tagName="p" value={ props.attributes.rightText } />
                        </div>
                    </div>
                    <div className="content__iner">
                        <InnerBlocks.Content />
					</div>
                </div>
            </div>
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