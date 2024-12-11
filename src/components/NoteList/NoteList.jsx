import { FaPlus } from 'react-icons/fa'
import { SearchBar } from './SearchBar'
import { FolderList } from './FolderList'
import { NoteItem } from './NoteItem'

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
  onDeleteNote,
  onAddFolder
}) => {
  const filteredNotes = notes.filter(note => 
    note.folder === selectedFolder &&
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-64 border-r h-screen p-4">
      <SearchBar 
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />

      <FolderList
        folders={folders}
        selectedFolder={selectedFolder}
        onFolderSelect={onFolderSelect}
        onAddFolder={onAddFolder}
      />

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
            <NoteItem
              key={note.id}
              note={note}
              isSelected={selectedNote?.id === note.id}
              onSelect={onNoteSelect}
              onDelete={onDeleteNote}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NoteList