const express = require('express');
const sequelize = require('./databaseConfig/database');
const User = require('./models/user');
const authRoutes = require('./routes/authenticationRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3306;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authenticationRoute);

//generating jwt key
const crypto = require('crypto');
const JWT_SECRET = crypto.randomBytes(64).toString('hex');
console.log(JWT_SECRET);


// Sync models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced.');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => console.error('Error syncing database:', error));
