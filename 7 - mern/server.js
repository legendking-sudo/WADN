import mongoose from 'mongoose';
import {app} from './app.js';

const DB = 'mongodb://localhost:27017/wadl'
mongoose
    .connect(DB)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Error connecting Database',err));


const PORT = 5500
const server = app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
})