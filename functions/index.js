const functions = require('firebase-functions');
const express = require('express');

// Initialize the Express app
const app = express();

// Connect to MongoDB
const dbURI = process.env.MONGODB_URI;
mongoose.connect(dbURI, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a Mongoose schema for your data
const FlareCatsGangSchema = new mongoose.Schema({}, { collection: 'flarecatsgang' }); // Adjust the collection name if necessary
const FlareCuteCatsSchema = new mongoose.Schema({}, { collection: 'flarecutecats' });

const FlareCatsGang = mongoose.model('FlareCatsGang', FlareCatsGangSchema);
const FlareCuteCats = mongoose.model('FlareCuteCats', FlareCuteCatsSchema);

// Endpoint to get JSON data for FlareCatsGang by ID
app.get('/metadata/flarecatsgang/:id', async (req, res) => {
    const id = req.params.id; // Get the ID from the request parameters

    try {
        const data = await FlareCatsGang.findById(id).exec(); // Fetch data from MongoDB
        if (!data) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.json(data); // Send the data in the response
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve data from database' });
    }
});

// Endpoint to get images for FlareCatsGang by ID
app.get('/image/flarecatsgang/:id', async (req, res) => {
    const id = req.params.id; // Get the filename from the request parameters
    
    // Assuming the image URL is stored in the MongoDB document,
    // adjust according to your data structure
    try {
        const data = await FlareCatsGang.findById(id).exec();
        if (!data || !data.imageUrl) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.sendFile(data.imageUrl); // Serve the image
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve image from database' });
    }
});

// Endpoint to get JSON data for FlareCuteCats by ID
app.get('/metadata/flarecutecats/:id', async (req, res) => {
    const id = req.params.id; // Get the ID from the request parameters
    
    try {
        const data = await FlareCuteCats.findById(id).exec(); // Fetch data from MongoDB
        if (!data) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.json(data); // Send the data in the response
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to retrieve data from database' });
    }
});

// Expose the Express app as a Cloud Function
exports.api = functions.https.onRequest(app);
