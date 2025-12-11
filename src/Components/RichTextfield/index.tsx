import { MenuButtonBold, MenuButtonBulletedList, MenuButtonItalic, MenuButtonOrderedList, MenuControlsContainer, MenuDivider, MenuSelectHeading, RichTextEditor, RichTextEditorRef } from 'mui-tiptap';
import { useEffect, useRef } from 'react';

import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'

const RichTextfield: React.FC<{
    value: string,
    onChange: (value: string) => void, error?: boolean;
}> = ({ value, onChange, error }) => {
    const rteRef = useRef<RichTextEditorRef>(null);
    useEffect(() => {
        const editor = rteRef.current?.editor;
        if (editor && !editor.isDestroyed) {
            const currentContent = editor.getHTML();
            if (currentContent !== value) {
                editor.commands.setContent(value || '');
            }
        }
    }, [value]);

    return <RichTextEditor
        ref={rteRef}
        data-testid='description'
        sx={{
            border: `.09em solid ${error ? '#d32f2f' : '#e0e0e0'}`,
            borderRadius: 4,
            overflow: 'hidden',
            '&:hover': { borderColor: '#c9c9c9', },
            '& .MuiTiptap-FieldContainer-notchedOutline': {
                border: 0,
                // borderColor: '#c9c9c9',
            },
            '& .ProseMirror': {
                padding: '16px',
                minHeight: '150px',
                fontSize: '14px',
            },
        }}
        extensions={[Bold, Italic, Heading,
            BulletList, OrderedList, ListItem,
            Paragraph, Text, Document]}
        content={value}
        onUpdate={({ editor }) => {
            onChange(editor.getHTML());
        }}
        renderControls={() => (
            <MenuControlsContainer>
                <MenuSelectHeading />
                <MenuDivider />
                <MenuButtonBold />
                <MenuButtonItalic />
                <MenuDivider />
                <MenuButtonBulletedList />
                <MenuButtonOrderedList />
            </MenuControlsContainer>
        )}
    />

}

export default RichTextfield;
