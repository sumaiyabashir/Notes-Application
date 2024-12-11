import { FaFolder, FaSearch, FaPlus, FaTrash } from 'react-icons/fa'

const NoteList = ({ 
  notes, 
  folders, 
  selectedFolder,
  selectedNote,
  searchQuery,
  onSearchChange,
  onFolderSelect,
  onNoteSelect,
  onNewNote,
  onDeleteNote
}) => {
  const filteredNotes = notes.filter(note => 
    note.folder === selectedFolder &&
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-64 border-r h-screen p-4">
      <div className="mb-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search notes..."
            className="bg-transparent outline-none w-full"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-semibold mb-2">Folders</h2>
        <ul>
          {folders.map(folder => (
            <li
              key={folder}
              className={`flex items-center p-2 cursor-pointer rounded ${
                selectedFolder === folder ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
              onClick={() => onFolderSelect(folder)}
            >
              <FaFolder className="mr-2 text-gray-600" />
              {folder}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold">Notes</h2>
          <button
            onClick={onNewNote}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <FaPlus />
          </button>
        </div>
        <ul>
          {filteredNotes.map(note => (
            <li
              key={note.id}
              className={`flex justify-between items-center p-2 cursor-pointer rounded ${
                selectedNote?.id === note.id ? 'bg-blue-100' : 'hover:bg-gray-100'
              }`}
            >
              <span
                className="flex-1"
                onClick={() => onNoteSelect(note)}
              >
                {note.title || 'Untitled'}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onDeleteNote(note.id)
                }}
                className="p-1 hover:text-red-500"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}