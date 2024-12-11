import { useState } from 'react'
import Editor from './components/Editor/Editor'
import NoteList from './components/NoteList/NoteList'
import { useLocalStorage } from './hooks/useLocalStorage'
import { createNote } from './utils/noteStorage'

function App() {
  const [notes, setNotes] = useLocalStorage('notes', [])
  const [folders, setFolders] = useLocalStorage('folders', ['Personal', 'Work', 'Ideas'])
  const [selectedFolder, setSelectedFolder] = useState(folders[0] || 'Personal')
  const [selectedNote, setSelectedNote] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const createNewNote = () => {
    const newNote = createNote(selectedFolder)
    setNotes([...notes, newNote])
    setSelectedNote(newNote)
  }

  const saveNote = (updatedNote) => {
    const newNotes = notes.map(note => 
      note.id === updatedNote.id ? updatedNote : note
    )
    setNotes(newNotes)
    setSelectedNote(updatedNote)
  }

  const deleteNote = (noteId) => {
    setNotes(notes.filter(note => note.id !== noteId))
    if (selectedNote?.id === noteId) {
      setSelectedNote(null)
    }
  }

  const addFolder = (folderName) => {
    if (!folders.includes(folderName)) {
      setFolders([...folders, folderName])
    }
  }

  const handleFolderSelect = (folderName) => {
    setSelectedFolder(prevFolder => prevFolder === folderName ? null : folderName)
  }

  return (
    <div className="flex h-screen">
      <NoteList
        notes={notes}
        folders={folders}
        selectedFolder={selectedFolder}
        selectedNote={selectedNote}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onFolderSelect={handleFolderSelect}
        onNoteSelect={setSelectedNote}
        onNewNote={createNewNote}
        onDeleteNote={deleteNote}
        onAddFolder={addFolder}
      />
      
      {selectedNote ? (
        <div className="flex-1 p-4">
          <Editor
            content={selectedNote.content}
            selectedNote={selectedNote}
            onSave={saveNote}
          />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a note or create a new one
        </div>
      )}
    </div>
  )
}

export default App