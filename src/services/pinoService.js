import pino from 'pino'
import path from 'path'

const logger = pino({
  browser: {
    asObject: true
  },
  level: 'debug',
  prettyPrint: {
    // Adds the filename property to the message
    messageFormat: '{filename}: {msg}',

    // need to ignore 'filename' otherwise it appears beneath each log
    ignore: 'pid,hostname,filename', 
  },
}).child({ filename: path.basename(__filename) })

export default logger