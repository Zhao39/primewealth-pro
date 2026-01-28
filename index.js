const express = require('express');
const mongoose = require('mongoose'); // Import mongoose
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS
// Configure allowed origins from environment variable
const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',') 
    : (process.env.NODE_ENV === 'production' ? [] : ['http://localhost:3000', 'http://localhost:8000']);

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.length === 0 || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI environment variable is not set');
    process.exit(1);
}

mongoose.connect(MONGODB_URI, {
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

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});