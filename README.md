# PrimeWealth

[![Website](https://img.shields.io/badge/website-primemarkets.com-blue)](https://primemarkets.com/)
[![License](https://img.shields.io/badge/license-ISC-green)](LICENSE)

PrimeWealth is a comprehensive forex brokerage platform engineered for retail traders, providing access to over 500 diverse trading instruments including major and exotic currency pairs, commodities, indices, stocks, and cryptocurrencies. Built with modern web technologies, the platform delivers exceptional performance, security, and user experience.

## Table of Contents

- [Overview](#overview)
- [Platform Features](#platform-features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Security](#security)
- [Legal & Compliance](#legal--compliance)
- [Support](#support)

## Overview

PrimeWealth offers institutional-grade trading infrastructure with retail-focused accessibility. The platform combines decades of industry expertise with cutting-edge technology to deliver:

- **Precision**: Razor-sharp spreads starting from 0.0 pips
- **Protection**: Segregated accounts, negative balance protection, and Tier-1 liquidity access
- **Performance**: Lightning-fast STP execution on the industry-leading MT5 platform

## Platform Features

### Trading Capabilities

- **500+ Trading Instruments**: Comprehensive access to forex pairs, indices, stocks, commodities, and cryptocurrencies
- **Multiple Account Types**: Flexible account structures tailored to various trading styles
- **High Leverage**: Up to 1:500 leverage ratios
- **Competitive Spreads**: Starting from 0.0 pips on Raw Spread accounts
- **MT5 Integration**: Full support for MetaTrader 5 platform with Expert Advisors, Copy Trading, and PAMM accounts

### Account Types

| Account Type | Spread | Leverage | Commission | Minimum Deposit |
|-------------|--------|----------|------------|-----------------|
| **Raw Spread** | From 0.0 pips | 1:500 | $8 per side | $50 |
| **ECN** (Most Popular) | From 0.2 pips | 1:500 | $8 per side | $50 |
| **Commission Free** | From 0.9 pips | 1:500 | $0 | $50 |

### Core Benefits

- **Proven Expertise**: Years of industry leadership with optimized trading conditions
- **Fund Security**: Segregated accounts and comprehensive protection mechanisms
- **Dynamic Ecosystem**: Support for news trading, scalping, hedging, and automated trading strategies
- **Seamless Funding**: Instant deposits with multiple secure payment methods
- **Personalized Environment**: Flexible account configurations matching individual trading objectives
- **24/5 Support**: Dedicated customer service team available during market hours

## Technology Stack

### Frontend Technologies

- **PHP 7.4+**: Server-side rendering and dynamic content generation
- **Bootstrap 5.1**: Responsive, mobile-first UI framework
- **Mobirise/Precision Theme**: Professional website builder framework
- **HTML5/CSS3**: Modern web standards and semantic markup
- **JavaScript**: Client-side interactivity and dynamic content

### Backend Technologies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Minimal and flexible web application framework
- **MongoDB**: NoSQL database for scalable data storage
- **Mongoose**: Elegant MongoDB object modeling for Node.js

### Deployment Infrastructure

- **Vercel**: Serverless deployment platform with automatic scaling
- **Firebase Functions**: Cloud functions for serverless backend operations (optional)
- **Firebase App Hosting**: Static and dynamic content hosting (optional)

## Architecture

### Project Structure

```
primewealth/
├── assets/                      # Static assets and resources
│   ├── bootstrap/              # Bootstrap framework files
│   ├── theme/                  # Custom theme styles and scripts
│   ├── images/                 # Image assets and media files
│   └── web/                    # Web-specific assets
├── functions/                   # Firebase Cloud Functions
│   ├── index.js               # Cloud function implementations
│   └── package.json           # Function dependencies
├── index.php                    # Main landing page (PHP)
├── index.html                   # Static HTML version
├── support.php                  # Support and contact page
├── TnC.php                      # Terms and Conditions
├── cookiespolicy.php            # Cookie and privacy policy
├── riskwarning.php              # Risk disclosure statement
├── amlpolicy.php                 # AML/CTF policy documentation
├── header.php                   # Reusable header component
├── footer.php                   # Reusable footer component
├── navbar.php                   # Navigation component
├── index.js                     # Express.js server application
├── package.json                 # Node.js project dependencies
├── vercel.json                  # Vercel deployment configuration
├── firebase.json                # Firebase project configuration
└── apphosting.yaml              # Firebase App Hosting configuration
```

### System Architecture

The application follows a hybrid architecture pattern:

1. **Frontend Layer**: PHP-based server-side rendering with Bootstrap for responsive UI
2. **API Layer**: Express.js RESTful API for backend services
3. **Data Layer**: MongoDB for persistent data storage
4. **Deployment Layer**: Multi-platform support (Vercel/Firebase)

## Installation

### Prerequisites

Ensure the following software is installed on your development environment:

- **Node.js** v14.0.0 or higher
- **PHP** v7.4.0 or higher (for local PHP development)
- **MongoDB Atlas** account or local MongoDB instance v4.4 or higher
- **npm** v6.0.0 or higher (or **yarn** v1.22.0 or higher)
- **Git** for version control

### Step-by-Step Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/primewealth.git
   cd primewealth
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install
   ```

3. **Install Firebase Functions dependencies** (if utilizing Firebase deployment)
   ```bash
   cd functions
   npm install
   cd ..
   ```

4. **Configure environment variables**
   
   Create a `.env` file in the project root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
   NODE_ENV=development
   ```
   
   **Important**: Replace `<username>`, `<password>`, `<cluster>`, and `<database>` with your actual MongoDB Atlas credentials. Never commit the `.env` file to version control.

5. **Configure MongoDB connection**
   
   Update the MongoDB connection string in `index.js`:
   ```javascript
   mongoose.connect(process.env.MONGODB_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
   })
   .then(() => console.log('MongoDB connected successfully'))
   .catch(err => console.error('MongoDB connection error:', err));
   ```

## Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port number | `5000` | No |
| `MONGODB_URI` | MongoDB connection string | - | Yes |
| `NODE_ENV` | Environment mode (`development`/`production`) | `development` | No |

### Deployment Configuration

#### Vercel Configuration (`vercel.json`)
Routes all incoming requests to the Express.js server application (`index.js`).

#### Firebase Configuration (`firebase.json`)
Configures Firebase Functions and hosting services for cloud deployment.

## Development

### Local Development Server

#### PHP Development Server
```bash
php -S localhost:8000
```
Access the application at `http://localhost:8000`

#### Node.js API Server
```bash
# Production mode
npm start

# Development mode with auto-reload
npm run dev
```
API server accessible at `http://localhost:5000`

### Development Workflow

1. Start the PHP development server for frontend development
2. Start the Node.js API server for backend API development
3. Ensure MongoDB connection is established
4. Make code changes and test locally before deployment

## Deployment

### Vercel Deployment

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Configure environment variables**
   - Navigate to Vercel project dashboard
   - Add environment variables under Settings → Environment Variables
   - Redeploy if necessary

### Firebase Deployment

1. **Install Firebase CLI globally**
   ```bash
   npm install -g firebase-tools
   ```

2. **Authenticate with Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase project** (if not already initialized)
   ```bash
   firebase init
   ```

4. **Deploy to Firebase**
   ```bash
   firebase deploy
   ```

## API Documentation

### Base URL
```
http://localhost:5000 (development)
https://your-domain.com (production)
```

### Endpoints

#### Metadata Endpoints

**Get Metadata by ID**
```
GET /metadata/flarecatsgang/:id
GET /metadata/flarecutecats/:id
```

**Response**: JSON object containing metadata for the specified ID

#### Image Endpoints

**Get Image by ID**
```
GET /image/flarecatsgang/:id
```

**Response**: Image file or JSON error response

### Error Responses

All endpoints return standard HTTP status codes:
- `200 OK`: Successful request
- `404 Not Found`: Resource not found
- `500 Internal Server Error`: Server error

## Security

### Security Best Practices

- **Never commit sensitive credentials** to version control systems
- **Utilize environment variables** for all database connections and API keys
- **Regularly update dependencies** to incorporate security patches
- **Implement proper authentication** and authorization mechanisms
- **Review and update security policies** on a regular basis
- **Enable HTTPS** for all production deployments
- **Implement rate limiting** for API endpoints
- **Regular security audits** of codebase and dependencies

### Security Considerations

- Database credentials must be stored securely using environment variables
- API endpoints should implement proper authentication and validation
- Input sanitization and validation required for all user inputs
- Regular dependency updates to address known vulnerabilities

## Legal & Compliance

### Company Information

**Company Name**: PrimeWealth FX, LTD  
**Company Registration Number**: 2025-00361  
**Registered Address**: Fortgate Offshore Investment and Legal Services Ltd. Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia

### Restricted Territories

Services provided by PrimeWealth are not available to residents or citizens of the following jurisdictions:

- United States of America
- Canada
- North Korea (Democratic People's Republic of Korea)
- United Kingdom
- Syria

### Regulatory Compliance

PrimeWealth operates in compliance with applicable regulations and maintains comprehensive policies including:

- Terms & Conditions
- Cookies & Privacy Policy
- Risk Disclosure Statement
- Anti-Money Laundering (AML) / Counter-Terrorism Financing (CTF) Policy

### Risk Warning

**Important**: Trading leveraged products such as Forex and CFDs involves substantial risk of loss and may not be suitable for all investors. These products carry a significant degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investment objectives, financial situation, and level of experience before trading. If necessary, seek independent financial advice.

Past performance is not indicative of future results. Only trade with capital you can afford to lose.

## Support

### Contact Information

- **Support Email**: support@primemarkets.com
- **Website**: [https://primemarkets.com/](https://primemarkets.com/)
- **Trading Platform**: [https://my.primemarkets.com/](https://my.primemarkets.com/)

### Documentation

- [Terms & Conditions](TnC.php)
- [Cookies & Privacy Policy](cookiespolicy.php)
- [Risk Disclosure](riskwarning.php)
- [AML/CTF Policy](amlpolicy.php)

### Support Hours

Customer support is available 24 hours a day, 5 days a week (24/5) during market trading hours.

## License

Copyright © 2025 PrimeWealth FX Ltd. All Rights Reserved.

This project is proprietary software. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited without express written permission from PrimeWealth FX Ltd.

## Contributing

This is a proprietary project maintained by PrimeWealth FX Ltd. For inquiries regarding contributions, partnerships, or collaboration opportunities, please contact support@primemarkets.com.

---

**Disclaimer**: This documentation is provided for informational purposes only. Trading forex and CFDs involves substantial risk of loss and is not suitable for all investors. Past performance is not indicative of future results. Please read the full Risk Disclosure statement before engaging in any trading activities.
