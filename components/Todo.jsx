import React from 'react'

const Todo = () => {
  return (
    <tr>
      <td className="px-6 py-4">1</td>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Learn next js</td>
      <td className="px-6 py-4">Pending</td>
      <td className="px-6 py-4 flex gap-1">
        <button className="py-2 px-4 bg-red-500 text-white">Delete</button>
        <button className="py-2 px-4 bg-green-500 text-white">Done</button>
      </td>
    </tr>
  )
}

export default Todo
