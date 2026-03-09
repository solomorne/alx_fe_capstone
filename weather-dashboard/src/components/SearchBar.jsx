import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(inputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name..."
          className="flex-1 px-4 py-3 rounded-lg border-2 border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-md text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:border-white focus:border-opacity-50 transition-all duration-200"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
