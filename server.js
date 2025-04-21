// const express = require('express');
// const app = express();
// const cors = require('cors')
// require('dotenv').config();

// app.use(cors());
// app.use(express.json());
// app.use('/api', deviceRoutes);

// const PORT = 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', authRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
