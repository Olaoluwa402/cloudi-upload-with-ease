# Cloudinary File Upload Utility for Node.js

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D%2012-brightgreen.svg)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/cloudinary-upload-util.svg)](https://www.npmjs.com/package/cloudinary-upload-util)

A Node.js utility for easy file uploads to [Cloudinary](https://cloudinary.com/). Simplify the process of uploading images and videos with two convenient functions: `uploadToCloudinary` and `uploadSingleOrMultiImagesToCloudinary`.

## Installation

```bash
npm install cloudi-upload-with-ease
```

## Usage

### Import the utility functions

```bash
const {
  uploadToCloudinary,
  uploadSingleOrMultiImagesToCloudinary,
} = require('cloudi-upload-with-ease');
```

## Configuration

### Before using the utility functions, make sure to configure Cloudinary with your credentials.

```bash
const config = {
  cloudinary_cloud_name: 'your_cloud_name',
  cloudinary_api_key: 'your_api_key',
  cloudinary_api_secret: 'your_api_secret',
};
```

## Upload a Single File

```bash
const file = '/path/to/your/file.jpg'; // Provide the path to your file
const type = 'image'; // Specify the type: 'image', 'video', 'raw', 'auto', etc.

uploadToCloudinary(file, type, config)
  .then((response) => {
    console.log('File uploaded successfully:', response);
  })
  .catch((error) => {
    console.error('Error uploading file:', error);
  });
```

## Upload Single or Multiple Files

```bash
const files = [
  { path: '/path/to/image1.jpg' },
  { path: '/path/to/image2.jpg' },
  // ... add more files as needed
];

const type = 'image'; // Specify the type: 'image', 'video', 'raw', 'auto', etc.

uploadSingleOrMultiImagesToCloudinary(files, type, config)
  .then((response) => {
    console.log('Files uploaded successfully:', response);
  })
  .catch((error) => {
    console.error('Error uploading files:', error);
  });

```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

Cloudinary - Cloud-based image and video management service.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

## Author

This package is authored by [Olaoluwa Daniel IBUKUN](https://github.com/Olaoluwa402).
