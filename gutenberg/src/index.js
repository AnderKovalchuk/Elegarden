import { registerBlockType } from '@wordpress/blocks';
import { 
    SelectControl, 
    DropdownMenu, 
    Toolbar, 
    Panel, PanelBody, PanelRow,
    ToggleControl,
    FormFileUpload,
} from '@wordpress/components';
import {
    RichText,
    AlignmentToolbar,
    InspectorControls ,
} from '@wordpress/block-editor';
import {
    arrowLeft,
    arrowRight,
    arrowUp,
    arrowDown,
    more,
} from '@wordpress/icons';

registerBlockType( 'elegarden-block/section-bloks', {
    title: 'Секция контента - Elegarden',
    description: 'Горизонтальный блок для размещения контента на странице',
    icon: 'dashicons-excerpt-view',
    category: 'common',
    attributes: {
        size: {
            type: 'string',
            default: 'section--big',
        },
        isStretchedContent: {
            type: 'boolean',
            default: 'true',
        }
    },
    edit: ( {setAttributes, size, isStretchedContent} ) => {
        const onChangeSize = ( newSize ) => {
            setAttributes( { size: newSize } );
            console.log(size);
        };
        const onChangeStretchedContent = ( statys ) => {
            props.setAttributes( { isStretchedContent: statys } );
            console.log(isStretchedContent)
        };
        return(
            <section>
                {
                    <InspectorControls>
                        <PanelBody title="Настройки" initialOpen={ true }>
                            <PanelRow>
                                <SelectControl
                                    label="Размер"
                                    value={ size }
                                    options={ [
                                        { label: 'Во всю высоту', value: 'section--full-height' },
                                        { label: 'Большая', value: 'section--big' },
                                        { label: 'Средний', value: 'section--medium' },
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
                            <PanelRow>

                            <FormFileUpload
                                accept="image/*"
                                onChange={ () => console.log('new image') } 
                            >
                                Upload
                            </FormFileUpload>

                            </PanelRow>
                        </PanelBody>
                        <Toolbar>
                            <DropdownMenu 
                                label = "Размер"
                                icon = "dashicons-align-center"
                                controls ={ [
                                    {
                                        title: 'Во всю высоту',
                                        icon: arrowUp,
                                        onClick: () => onChangeSize('section--full-height'),
                                    },
                                    {
                                        title: 'Большая',
                                        icon: arrowUp,
                                        onClick: () => onChangeSize( 'section--big' ),
                                    },
                                ] }
                            />
                        </Toolbar>
                    </InspectorControls>
                }
                <h5> Заголовок блока </h5>
                <SelectControl
                    label="Size"
                    //value={ size }
                    options={ [
                        { label: 'Big', value: '100%' },
                        { label: 'Medium', value: '50%' },
                        { label: 'Small', value: '25%' },
                    ] }
                />
            </section>
        );
    },
    save: () => <div>Hola, mundo!</div>
} );