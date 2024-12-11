import { FaSearch } from 'react-icons/fa'

export const SearchBar = ({ searchQuery, onSearchChange }) => (
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
)