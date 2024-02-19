# LapTech: Algerian Laptop Marketplace

![LapTech Logo](./screenshots/logo.svg)

LapTech is an e-commerce platform dedicated to the Algerian market, specializing in buying and selling laptops. This project incorporates cutting-edge technologies, including an AI model, to enhance the user experience by providing accurate price estimates based on laptop specifications.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)

## Features

- **E-commerce Platform:** LapTech facilitates the buying and selling of laptops within the Algerian market.
- **AI Price Estimation:** Utilizes an AI model to estimate laptop prices based on user-entered specifications.
- **User Authentication:** Secure user authentication using Node.js and Express.
- **CRUD Operations:** Allows basic CRUD operations for managing laptop listings.

## Technologies Used

- **Frontend:** React, Vite
- **Backend:** Node.js, Express, Django
- **Database:** MongoDB
- **AI Model:** Integrated with Django backend
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js and npm
- Python and Django
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/KamelTouati/LapTech
cd laptech
```

2. Install dependencies:

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Install Django dependencies for the AI model
cd prediction_model
pip install -r requirements.txt
```

3. Set up environment variables:

   - Create a `.env` file in the `frontend` and `backend` directories, and configure the required environment variables.

4. Start the development server:

```bash
# Start frontend development server
cd frontend
npm run dev

# Start backend development server
cd ../backend
npm start
```

Visit `http://localhost:5172` to access the LapTech application.

## Project Structure

- **`frontend/`**: Contains the React and Vite frontend application.
- **`backend/`**: Includes the Node.js and Express backend for user authentication and CRUD operations.
- **`prediction_model/`**: Django backend for the AI model to estimate laptop prices.

## Screenshots

![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-2024-02-20-00_14_21.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-products-2024-02-20-00_14_38.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-products-2024-02-20-00_14_53.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-products-cart-2024-02-20-00_17_21.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-products-details-65c20b7fe232ee468183e7d3-2024-02-20-00_15_06.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-products-favorite-products-2024-02-20-00_17_00.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-products-predict-product-price-2024-02-20-00_14_28.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-products-sell-2024-02-20-00_16_46.png)
![alt text](https://github.com/KamelTouati/Laptech-Final-Version/blob/main/screenshots/screencapture-localhost-5173-profile-65c165e6cf5b46bc98ff9c89-2024-02-20-00_17_34.png)
