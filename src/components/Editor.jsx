import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import SimpleImage from '@editorjs/simple-image';

function EditorComponent(props) {
    const editorRef = useRef(null);

    useEffect(() => {
        const editorInstance = new EditorJS({
            holder: `editorjs-container-${props.id}`,
            readOnly:props.onSave===undefined && true,
            tools: {
                header: Header,
                list: List,
                image: SimpleImage,
            },
            data: {
                blocks: props.initialContent?.blocks || [
                    {
                        type: 'header',
                        data: {
                            text: `Blog ${props.id}`,
                            level: 1,
                        },
                    },
                    {
                        type: 'paragraph',
                        data: {
                            text: 'Start typing here...',
                        },
                    },
                ],
                version: '2.15.0',
            },
        });

        editorRef.current = editorInstance;

        return () => {
            if (editorRef.current) {
                editorRef.current.destroy();
                editorRef.current = null;
            }
        };
    }, [props.id, props.initialContent]);

    const handleSave = async () => {
        if (editorRef.current) {
            try {
                const savedData = await editorRef.current.save();
                console.log(savedData)
                props.onSave(props.id, savedData);
            } catch (error) {
                console.error('Error saving data:', error);
            }
        }
    };
    
    const handleDelete = () => {
        if (editorRef.current) {
            props.onDelete(props.id);
        }
    };
    

    return (
        <div>
            <div id={`editorjs-container-${props.id}`} />
            {props.onSave!==undefined 
            ?( 
                <>
                    <button className="btn btn-primary" onClick={handleSave}>Save</button>
                    <button className="btn btn-primary" onClick={handleDelete}>Delete</button>
                </>
            
            ):(
                <div></div>
            )
        }
            
        </div>
    );
}

export default EditorComponent;

