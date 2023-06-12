import server from './app'
import PORT from './config'

server.listen(PORT, () => {
  console.log('SERVER IS RUNNING!')
})
