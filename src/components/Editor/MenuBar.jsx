import { 
  FaBold, FaItalic, FaUnderline, FaStrikethrough, 
  FaListUl, FaListOl, FaLink 
} from 'react-icons/fa'

const EditorButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={isActive ? 'text-blue-500' : ''}
  >
    {children}
  </button>
)

export const MenuBar = ({ editor }) => {
  if (!editor) return null

  const addLink = () => {
    const url = window.prompt('Enter URL')
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }

  return (
    <div className="flex gap-2 mb-2 p-2 border-b">
      <EditorButton
        isActive={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <FaBold />
      </EditorButton>
      <EditorButton
        isActive={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <FaItalic />
      </EditorButton>
      <EditorButton
        isActive={editor.isActive('underline')}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <FaUnderline />
      </EditorButton>
      <EditorButton
        isActive={editor.isActive('strike')}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <FaStrikethrough />
      </EditorButton>
      <EditorButton
        isActive={editor.isActive('bulletList')}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <FaListUl />
      </EditorButton>
      <EditorButton
        isActive={editor.isActive('orderedList')}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <FaListOl />
      </EditorButton>
      <EditorButton
        isActive={editor.isActive('link')}
        onClick={addLink}
      >
        <FaLink />
      </EditorButton>
    </div>
  )
}