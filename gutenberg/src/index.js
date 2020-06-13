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
    InspectorControls ,
    InnerBlocks,
} from '@wordpress/block-editor';


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
    category: 'elegarden',
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
        let navNumberEl = <a className="section__nav-iner" href="#"><span className="section__nav-number">00</span><i className="angle-line angle-line--bottom"></i></a>;
        sectionClass += ' ' + props.attributes.size;
        sectionClass += props.attributes.isStretchedContent ? ' section--stretched-content' : '';
        sectionClass += props.attributes.isHeaderContent ? ' section--header' : '';

        if(props.attributes.bgImage){
            sectionClass += ' section--bg-image'
            imageStyle= {
                backgroundImage: ` url('${ props.attributes.bgImage }') `,
            };
            navNumberEl = <a className="section__nav-iner" href="#"><span className="section__nav-number">00</span><i className="angle-line angle-line--bottom"></i></a>;
        }

        return(
            <section 
                className={ sectionClass }
                style= {imageStyle}
            >
                <InnerBlocks.Content />
            { navNumberEl }
            </section>
        )
    }
} );

registerBlockType( 'elegarden-block/container-bloks-number', {
    title: 'Цифровой блок контента - Elegarden',
    description: 'Горизонтальный блок для размещения контента на странице',
    icon: 'excerpt-view',
    category: 'elegarden',
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

registerBlockType( 'elegarden-block/container-bloks-title', {
    title: 'Блок контента с заголовком - Elegarden',
    description: 'Горизонтальный блок для размещения контента на странице',
    icon: 'excerpt-view',
    category: 'elegarden',
    attributes: {
        title: {
            type: 'string',
            default: 'Заголовок',
        },
        titlePosition: {
            type: 'string',
            default: 'top',
        },
        size: {
            type: 'string',
            default: 'container--nav-padding',
        },
    },
    edit: ( props ) => {
        const {
            attributes: {
                size,
                title,
                titlePosition,
            },
        } = props;

        const onChangeTitle = ( newTitle ) => {
            props.setAttributes( { title: newTitle } );
        };
        const onChangeTitlePosition = ( newPosition ) => {
            props.setAttributes( { titlePosition: newPosition } );
        };
        const onChangeSize = ( newSize ) => {
            console.log(newSize + ' ::: ' + size);
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
                            <PanelRow>
                                <SelectControl
                                    label="Позиция заголовка"
                                    value={ titlePosition }
                                    options={ [
                                        { label: 'Слева', value: 'left' },
                                        { label: 'Сверху', value: 'top' },
                                    ] }
                                    onChange={ onChangeTitlePosition }
                                />
                            </PanelRow>
                        </PanelBody>
                    </InspectorControls>
                }


                <h4>Контентейнер с заголовком</h4>
                <TextControl
                    name= "title"
                    label= "Заголовок блока"
                    value= { title }
                    onChange={ onChangeTitle }
                />
                <hr />
                <h5>Основной контент</h5>
                <InnerBlocks />
            </section>
        );
    },

    save: ( props ) => {
        let containerClass = 'container ' + props.attributes.size;

        return(
            <div className= { containerClass }>
                <div className="content">
                    { props.attributes.titlePosition == 'left' &&
                        <div className="content__title content__title--left">
							<div className="title title__iner">
								<h2 className="title--like-h3">
                                    { props.attributes.title }
                                </h2>
							</div>
						</div>
                    }
                    <div className="content__iner">
                        { props.attributes.titlePosition == 'top' &&
                            <div className="title title__iner content__title">
                                <h2 className="title--like-h3">
                                    { props.attributes.title }
                                </h2>
                            </div>
                        }
                        <InnerBlocks.Content />
					</div>
                </div>
            </div>
        )
    }
} );

registerBlockType( 'elegarden-block/container-bloks-chronology', {
    title: 'Секция с хронологией - Elegarden',
    description: 'Секция для вывода хронологического списка ',
    icon: 'editor-insertmore',
    category: 'elegarden',
    attributes: {
        title: {
            type: 'string',
            default: 'Этапы работы',
        },
        type: {
            type: 'string',
            default: 'light',
        },
    },
    edit: ( props ) => {
        const {
            attributes: {
                type,
                title,
            },
        } = props;

        const onChangeTitle = ( newTitle ) => {
            props.setAttributes( { title: newTitle } );
        };
        const onChangeTitleType = ( newType ) => {
            props.setAttributes( { type: newType } );
        };
        
        return(
            <section style={ blockStyle }>
                {
                    <InspectorControls>
                        <PanelBody title="Настройки внешнего вида" initialOpen={ true }>
                            <PanelRow>
                                <SelectControl
                                    label="Цвет"
                                    value={ type }
                                    options={ [
                                        { label: 'Белый', value: 'white' },
                                        { label: 'Серый', value: 'light' },
                                    ] }
                                    onChange={ onChangeTitleType }
                                />
                            </PanelRow>
                        </PanelBody>
                    </InspectorControls>
                }


                <h4>Секция с хронологией</h4>
                <TextControl
                    name= "title"
                    label= "Заголовок блока"
                    value= { title }
                    onChange={ onChangeTitle }
                />
                <hr />
                <h5>Элементы хронологии</h5>
                <InnerBlocks 
                    allowedBlocks = {['elegarden-block/container-bloks-chronology-item']}
                    
                />
            </section>
        );
    },

    save: ( props ) => {
        let sectionClass = props.attributes.type == 'light' ? 'section section--bg-light' : 'section';
        let chronologyClass = props.attributes.type == 'light' ? 'content chronology' : 'content chronology chronology--light'
        return(
            <section className= { sectionClass }>
                <div className="container container--nav-padding">
                    <div className= { chronologyClass }>
                        <div className="content__iner">
                            <div className="title title__iner title__iner--center">
                                <h2 className="title--like-h3">
                                    { props.attributes.title }
                                </h2>
                            </div>
                            <div className="chronology__iner">
                                <InnerBlocks.Content />
                                <div class="line"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="section__nav-iner" href="#">
                    <span className="section__nav-number">00</span>
                    <i className="angle-line angle-line--bottom"></i>
                </a>
            </section>
        )
    }
} );

registerBlockType( 'elegarden-block/container-bloks-chronology-item', {
    title: 'Элемент хронологии - Elegarden',
    description: 'Элемент для блока вывода хронологического списка ',
    icon: 'excerpt-view',
    category: 'elegarden',
    attributes: {
        title: {
            type: 'string',
            default: '00',
        },
    },
    edit: ( props ) => {
        const {
            attributes: {
                title,
            },
        } = props;
        const onChangeTitle = ( newTitle ) => {
            props.setAttributes( { title: newTitle } );
        };

        return(
            <div style={ blockStyle }>
                <h5> Элемент хроноголии </h5>
                <TextControl
                    name= "title"
                    label= "Заголовок блока"
                    value= { title }
                    onChange={ onChangeTitle }
                />
                <hr />
                <h6> Информация в блоке </h6>
                <InnerBlocks />
            </div>
        );
    },

    save: ( props ) => {
        return(
            <div className="chronology__item">
                <div className="line"></div>
                <div className="chronology__content">
                    <h3>{ props.attributes.title }</h3>
                    <div className="chronology__text">
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        );
    }
} );

registerBlockType( 'elegarden-block/bloks-title', {
    title: 'Заголовок - Elegarden',
    description: 'Горизонтальный блок для размещения контента на странице',
    icon: 'excerpt-view',
    category: 'elegarden',
    attributes: {
        title: {
            type: 'string',
            default: 'Заголовок',
        },
        tag: {
            type: 'string',
            default: 'h2'
        }, 
        size: {
            type: 'string',
            default: 'title',
        },
    },
    edit: ( props ) => {
        const {
            attributes: {
                size,
                title,
                tag,
            },
        } = props;

        const onChangeTitle = ( newTitle ) => {
            props.setAttributes( { title: newTitle } );
        };
        const onChangeTag = ( newTag ) => {
            props.setAttributes( { tag: newTag } );
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
                                    label="Оформление"
                                    value={ size }
                                    options={ [
                                        { label: 'Огромный', value: 'title--like-h1' },
                                        { label: 'Большой', value: 'title--like-h3' },
                                        { label: 'Стандартный', value: 'title' },
                                    ] }
                                    onChange={ onChangeSize }
                                />
                            </PanelRow>
                            <PanelRow>
                                <SelectControl
                                    label="Тег для заголовка"
                                    value={ tag }
                                    options={ [
                                        { label: 'H1', value: 'h1' },
                                        { label: 'H2', value: 'h2' },
                                        { label: 'H3', value: 'h3' },
                                    ] }
                                    onChange={ onChangeTag }
                                />
                            </PanelRow>
                        </PanelBody>
                    </InspectorControls>
                }

                <TextControl
                    name= "title"
                    label= "Заголовок"
                    value= { title }
                    onChange={ onChangeTitle }
                />
            </section>
        );
    },

    save: ( props ) => {
        let titleClass = props.attributes.size;
        if(titleClass == 'title')
            titleClass = '';

        return(
            <div className="title">
                { props.attributes.tag == 'h1' &&
                    <h1 className= {titleClass}>
                        { props.attributes.title }
                    </h1>
                }
            </div>
        )
    }
} );