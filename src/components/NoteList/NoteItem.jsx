import { FaTrash } from 'react-icons/fa'

export const NoteItem = ({ note, isSelected, onSelect, onDelete }) => (
  <li
    className={`flex justify-between items-center p-2 cursor-pointer rounded ${
      isSelected ? 'bg-blue-100' : 'hover:bg-gray-100'
    }`}
  >
    <span
      className="flex-1"
      onClick={() => onSelect(note)}
    >
      {note.title || 'Untitled'}
    </span>
    <button
      onClick={(e) => {
        e.stopPropagation()
        onDelete(note.id)
      }}
      className="p-1 hover:text-red-500"
    >
      <FaTrash />
    </button>
  </li>
)