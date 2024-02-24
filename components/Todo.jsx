import React from 'react'

const Todo = ({
  id,
  title,
  description,
  mongoId,
  completed,
  deleteTodo,
  completeTodo,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-white-800 dark:border-gray-300">
      <td className="px-6 py-4">{id + 1}</td>
      <td className={`px-6 py-4 ${completed ? 'line-through' : ''}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${completed ? 'line-through' : ''}`}>
        {description}
      </td>
      <td className="px-6 py-4">{completed ? 'Done' : 'Pending'}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="py-2 px-4 bg-red-500 text-white">
          Delete
        </button>
        {!completed ? (
          <button
            onClick={() => completeTodo(mongoId)}
            className="py-2 px-4 bg-green-500 text-white">
            Done
          </button>
        ) : (
          ''
        )}
      </td>
    </tr>
  )
}

export default Todo
