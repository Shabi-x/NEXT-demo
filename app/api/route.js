import { ConnectDB } from "@/lib/config/db"
import TodoModel from "@/lib/models/TodoModel"
import { NextResponse } from "next/server"

const LoadDB = async () => {
  await ConnectDB()
}

LoadDB()
//查
export async function GET (request) {
  const todos = await TodoModel.find({})
  return NextResponse.json({ todos: todos })
}
//增
export async function POST (request) {
  const { title, description } = await request.json()

  await TodoModel.create({
    title,
    description,
  })
  return NextResponse.json({ msg: 'Todo Created' })
}
//删
export async function DELETE (request) {
  const mongoId = await request.nextUrl.searchParams.get('mongoId')
  await TodoModel.findByIdAndDelete(mongoId)
  return NextResponse.json({ msg: 'Todo Deleted!' })
}

//改
export async function PUT (request) {
  const mongoId = await request.nextUrl.searchParams.get('mongoId')
  await TodoModel.findByIdAndUpdate(mongoId, {
    $set: {
      isCompleted: true
    }
  })
  return NextResponse.json({ msg: 'Todo Done!' })
}