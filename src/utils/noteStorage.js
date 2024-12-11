export const loadNotes = () => {
  const savedNotes = localStorage.getItem('notes')
  return savedNotes ? JSON.parse(savedNotes) : []
}

export const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

export const loadFolders = () => {
  const savedFolders = localStorage.getItem('folders')
  return savedFolders ? JSON.parse(savedFolders) : ['Personal', 'Work', 'Ideas']
}

export const saveFolders = (folders) => {
  localStorage.setItem('folders', JSON.stringify(folders))
}

export const createNote = (folder) => ({
  id: Date.now(),
  title: 'Untitled',
  content: '',
  folder,
  createdAt: new Date().toISOString()
})