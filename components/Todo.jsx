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
    <tr>
      <td className="px-6 py-4">{id + 1}</td>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{completed ? 'Done' : 'Pending'}</td>
      <td className="px-6 py-4 flex gap-1">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="py-2 px-4 bg-red-500 text-white">
          Delete
        </button>
        <button
          onClick={() => completeTodo(mongoId)}
          className="py-2 px-4 bg-green-500 text-white">
          Done
        </button>
      </td>
    </tr>
  )
}

export default Todo
