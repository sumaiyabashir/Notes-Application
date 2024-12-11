import { useState } from 'react'
import { FaFolder, FaPlus } from 'react-icons/fa'

export const FolderList = ({ folders, selectedFolder, onFolderSelect, onAddFolder }) => {
  const [isAdding, setIsAdding] = useState(false)
  const [newFolderName, setNewFolderName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newFolderName.trim()) {
      onAddFolder(newFolderName.trim())
      setNewFolderName('')
      setIsAdding(false)
    }
  }

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">Folders</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FaPlus />
        </button>
      </div>
      
      {isAdding && (
        <form onSubmit={handleSubmit} className="mb-2">
          <input
            type="text"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
            placeholder="New folder name"
            className="w-full p-2 border rounded"
            autoFocus
            onBlur={() => {
              if (!newFolderName.trim()) {
                setIsAdding(false)
              }
            }}
          />
        </form>
      )}

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
  )
}