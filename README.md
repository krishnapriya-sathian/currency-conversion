# Currency Conversion API

## Overview

This project is a simple TypeScript Express.js application that provides currency conversion using a third-party exchange rate API.

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository.
2. Install dependencies: `npm install`

### Usage

1. Set up environment variables:

   - Create a `.env` file.
   - Add the following variables:
     ```
     PORT=3000
     API_KEY=your_exchange_rate_api_key
     API_BASE_URL=https://v6.exchangerate-api.com/v6/
     ```

2. Run the application: `npm start`

### API Endpoint

- **GET /convert**
  - Parameters:
    - `from` (Currency code to convert from)
    - `to` (Currency code to convert to)
    - `amount` (Amount to convert)
  - Example: `http://localhost:3000/convert?from=USD&to=EUR&amount=100`
