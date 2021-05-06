import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose.connect('mongodb+srv://interview_db:rockstar123@cluster0.9koh3.mongodb.net/interview_db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log(`MongoDB is connected Successfully`);
}).catch((error) => {
  console.log(error.message);
});