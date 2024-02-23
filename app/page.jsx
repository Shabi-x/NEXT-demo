'use client'

import Todo from '@/components/Todo'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Home() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  })
  const [TodoData, setTodoData] = useState([])
  const fetchTodo = async () => {
    try {
      const res = await axios.get('/api')
      if (res.data && res.data.todos) {
        setTodoData(res.data.todos)
      } else {
        setTodoData([])
        toast.error('No todos found or an error occurred.')
      }
    } catch (error) {
      // 处理请求错误
      toast.error('Error fetching todos.')
      console.error('Request failed:', error)
    }
  }

  const deleteTodo = async (id) => {
    const res = await axios.delete('/api', {
      params: {
        mongoId: id,
      },
    })
    toast.success(res.data.msg)
    fetchTodo()
  }

  const completeTodo = async (id) => {
    const res = await axios.put('/api', {
      params: {
        mongoId: id,
      },
    })
    toast.success(res.data.msg)
    fetchTodo()
  }
  useEffect(() => {
    fetchTodo()
  }, [])
  const onChangeHandler = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData((form) => ({
      ...form,
      [name]: value,
    }))
  }
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api', formData)
      toast.success(response.data.msg)
      setFormData({
        title: '',
        description: '',
      })
      await fetchTodo()
    } catch (error) {
      toast.error('Error!!')
    }
  }
  return (
    <>
      <ToastContainer />
      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          value={formData.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          value={formData.description}
          onChange={onChangeHandler}
          name="description"
          placeholder="Enter the description"
          className="px-3 py-2 border-2 w-full"></textarea>
        <button type="submit" className="bg-orange-600 py-3 px-11 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right">
          <thead className="text-xs uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {TodoData.map((item, index) => {
              return (
                <Todo
                  key={index}
                  id={index}
                  title={item.title}
                  description={item.description}
                  completed={item.completed}
                  mongoId={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
