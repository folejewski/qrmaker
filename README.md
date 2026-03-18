# QR Code Generator

A simple command-line tool to generate QR codes from URLs.

## Requirements

- Node.js
- npm

## Installation

```bash
npm install
```

## Usage

```bash
node index.js
```

You will be prompted to enter:
- A URL to encode
- An output filename (default: `qrmaker`)
- An output format: `png`, `svg`, `pdf`, or `eps` (default is `png`)

The QR code will be saved in the current directory.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer) - interactive CLI prompts
- [qr-image](https://www.npmjs.com/package/qr-image) - QR code generation