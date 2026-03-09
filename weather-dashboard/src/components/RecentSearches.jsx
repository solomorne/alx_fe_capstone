function RecentSearches({ searches, onSearch }) {
  return (
    <div className="mt-8">
      <h3 className="text-white text-lg font-semibold mb-4">Recent Searches</h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((search) => (
          <button
            key={search}
            onClick={() => onSearch(search)}
            className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full text-white font-medium transition-all duration-200 text-sm"
          >
            {search}
          </button>
        ))}
      </div>
    </div>
  )
}

export default RecentSearches
