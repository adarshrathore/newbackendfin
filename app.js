const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { isValidFile } = require('./utils/validateFile');
const { processData } = require('./utils/helpers');

const app = express();
const upload = multer();
const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());

// POST /bfhl
app.post('/bfhl', upload.none(), (req, res) => {
  try {
      const { data, file_b64 } = req.body;

      // Validate input
      if (!data || !Array.isArray(data)) {
          return res.status(400).json({ is_success: false, message: 'Invalid input data' });
      }

      const { numbers, alphabets, highestLowercase, isPrimeFound } = processData(data);

      const { valid, mimeType, size } = isValidFile(file_b64);

      res.status(200).json({
          is_success: true,
          user_id: "john_doe_17091999",
          email: "john@xyz.com",
          roll_number: "ABCD123",
          numbers,
          alphabets,
          highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
          is_prime_found: isPrimeFound,
          file_valid: valid,
          file_mime_type: mimeType,
          file_size_kb: size,
      });
  } catch (error) {
      res.status(500).json({ is_success: false, message: error.message });
  }
});

// GET /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const PORT = process.env.PORT || 7010;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
