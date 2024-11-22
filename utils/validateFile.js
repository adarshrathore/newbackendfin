
const isValidFile = (file_b64) => {
  if (!file_b64) {
      return { valid: false, mimeType: null, size: null };
  }

  try {
      const fileBuffer = Buffer.from(file_b64, 'base64');
      const size = (fileBuffer.length / 1024).toFixed(2); // Size in KB
      const mimeType = getMimeType(fileBuffer);

      return { valid: true, mimeType, size };
  } catch (error) {
      return { valid: false, mimeType: null, size: null };
  }
};

const getMimeType = (buffer) => {
  return "image/png"; 
};

module.exports = { isValidFile };
