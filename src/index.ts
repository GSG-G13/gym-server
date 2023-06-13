import server from './app'
import { PORT, DB_URL } from './config'
import mongoose from 'mongoose'

server.listen(PORT, async ()=>{
  console.log('SERVER IS RUNNING!')

  await mongoose.connect(DB_URL)
})