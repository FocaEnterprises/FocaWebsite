import mongoose from 'mongoose';

const ProjectsSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tags',
    require: false,
  }],
}, {
  timestamps: true,
});

export default mongoose.models.Projects || mongoose.model('Projects', ProjectsSchema);
