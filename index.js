import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import morgan from 'morgan';
import { fileURLToPath } from 'url'
import path from 'path';

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, '/public')))

app.set('port', process.env.PORT)

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'))
})