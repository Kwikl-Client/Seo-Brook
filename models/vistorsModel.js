import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({
  date: { type: String, unique: true },  // Store date as string in "YYYY-MM-DD" format
  count: { type: Number, default: 0 },   // Visitor count
  likes: { type: Number, default: 0 },   // Likes count
});

const Visitor = mongoose.model('Visitor', visitorSchema);

export default Visitor;
