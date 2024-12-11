import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Editor = ({ content, selectedNote, onSave }) => {
  const [title, setTitle] = useState(selectedNote?.title || '')
  const [noteContent, setNoteContent] = useState(content || '')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    setTitle(selectedNote?.title || '')
    setNoteContent(content || '')
    setIsEditing(false)
  }, [selectedNote, content])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleContentChange = (e) => {
    setNoteContent(e.target.value)
  }

  const handleSave = () => {
    onSave({
      ...selectedNote,
      title,
      content: noteContent
    })
    setIsEditing(false)
  }

  return (
    <div className="border rounded-lg overflow-hidden flex flex-col h-full bg-gray-900 text-white">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Note title"
            className="w-full p-4 text-2xl font-bold border-b focus:outline-none bg-gray-800 text-white placeholder-gray-500"
          />
          <textarea
            value={noteContent}
            onChange={handleContentChange}
            placeholder="Start writing your note..."
            className="w-full p-4 flex-1 resize-none focus:outline-none bg-gray-800 text-white placeholder-gray-500"
            style={{ minHeight: '300px' }}
          />
          <button
            onClick={handleSave}
            className="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Note
          </button>
        </>
      ) : (
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{title || 'Untitled'}</h2>
          <p className="mb-4">{noteContent || 'No content available.'}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Note
          </button>
        </div>
      )}
    </div>
  )
}

Editor.propTypes = {
  content: PropTypes.string,
  selectedNote: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
}

export default Editor