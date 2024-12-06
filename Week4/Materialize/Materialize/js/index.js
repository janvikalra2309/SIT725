const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());  // Ensure cross-origin requests are allowed
app.use(bodyParser.json());  // Parses JSON request bodies

// MongoDB connection URI
const dbURI = 'mongodb+srv://janvi-test:janvi1234@cluster0.zz74o.mongodb.net/formData?retryWrites=true&w=majority';  // MongoDB Atlas URI
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000 // Increase timeout to 30 seconds
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Database connection error:', err));

// Define the schema for form data
const formSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  interest: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

// Create a model for the collection
const FormData = mongoose.model('FormData', formSchema);

// Route to handle form submission
app.post('/submit', async (req, res) => {
  try {
    // Create a new form entry using the data sent from the client
    const formData = new FormData(req.body);  // Get the body data (form data)

    // Save the data into MongoDB
    await formData.save();
    
    // Send success response
    res.status(200).json({ message: 'Data saved successfully!' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ message: 'Error saving data: ' + error.message });
  }
});

// Start the server
const port = process.env.PORT || 5001;  // Use port 5001 or any available port
app.listen(port, () => console.log(`Server running on port ${port}`));
