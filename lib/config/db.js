import mongoose from 'mongoose'


export const ConnectDB = async () => {
  await mongoose.connect('mongodb+srv://shabi-x:NJUPTlsj0618@cluster0.bliq43r.mongodb.net/todoApp')
  console.log('DB connected')
}