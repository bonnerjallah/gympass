import dotenv from 'dotenv';
dotenv.config();
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import connectDB from './config/db';
import router from './routes/router';

const PORT = process.env.PORT || 3001
const STAFF_FRONTEND_URL = process.env.STAFF_FRONTEND_URL || 'http://localhost:3000'
const TRAINER_FRONTEND_URL = process.env.TRAINER_FRONTEND_URL || 'http://localhost:3000'
const MEMBER_FRONTEND_URL = process.env.MEMBER_FRONTEND_URL || 'http://localhost:3000'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

const coorsOptions = {
    origin: [STAFF_FRONTEND_URL, TRAINER_FRONTEND_URL, MEMBER_FRONTEND_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}

app.use(cors(coorsOptions))

app.use('/api', router)


app.get('/', (req, res) => {
    res.send('Gympass Server is running')
})

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`)
    await connectDB()
})