import server from './app'
import { PORT, DB_URL } from './config'
import mongoose from 'mongoose'

mongoose.connect(DB_URL)
  .then(() => server.listen(PORT, () => { console.log('SERVER IS RUNNING!') }))
  .catch(err => { console.log(err) })
