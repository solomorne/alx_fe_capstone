function ErrorMessage({ message }) {
  return (
    <div className="mb-6 p-4 bg-red-500 bg-opacity-20 border-l-4 border-red-400 rounded-lg">
      <p className="text-red-200 flex items-center gap-2">
        <span className="text-2xl">⚠️</span>
        {message}
      </p>
    </div>
  )
}

export default ErrorMessage
