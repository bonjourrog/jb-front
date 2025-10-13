import StarterKit from '@tiptap/starter-kit'
import { MenuButtonBold, MenuButtonBulletedList, MenuButtonItalic, MenuButtonOrderedList, MenuButtonStrikethrough, MenuButtonUnderline, MenuControlsContainer, MenuDivider, MenuSelectHeading, RichTextEditor, RichTextEditorRef } from 'mui-tiptap';
import Underline from '@tiptap/extension-underline';
import { useEffect, useRef } from 'react';

const RichTextfield: React.FC<{
    value: string,
    onChange: (value: string) => void, error?: boolean;
}> = ({ value, onChange, error }) => {
    console.log(value);
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
        extensions={[StarterKit, Underline]}
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
                <MenuButtonUnderline />
                <MenuButtonStrikethrough />
                <MenuDivider />
                <MenuButtonBulletedList />
                <MenuButtonOrderedList />
            </MenuControlsContainer>
        )}
    />

}

export default RichTextfield;
