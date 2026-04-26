# Inventro

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black)](https://firebase.google.com/)

**Inventro** is a premium, full-stack inventory management solution designed for modern warehouses and retail operations. It combines high-end aesthetics with powerful barcode scanning capabilities to eliminate manual entry errors and provide real-time visibility into stock operations.

##  Features

- **Dynamic Dashboard**: Real-time visualization of stock levels, low-stock alerts, and recent transaction activities.
- **Product Catalog**: Full CRUD operations for managing products with detailed categorization and pricing.
- **Smart Scanning**: Seamlessly process stock-in and stock-out operations using any barcode or QR code scanner.
- **Transaction History**: Comprehensive logs of every movement within your inventory for full auditability.
- **Profile Management**: Customizable manager profiles with industry-specific settings.
- **Enterprise Security**: Secure authentication powered by Firebase, with backend token verification.
- **Premium UI/UX**: A modern, responsive interface built with glassmorphism, vibrant gradients, and smooth Framer Motion animations.

## Tech Stack

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS (Vanilla CSS for custom components)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Auth**: Firebase Authentication

### Backend
- **Environment**: Node.js
- **Framework**: Express.js
- **Database**: Lowdb (JSON-based local storage)
- **Security**: Firebase Admin SDK for JWT verification

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mutthuram03/Inventro.git
   cd Inventro
   ```

2. **Run the setup script**:
   This will install dependencies for both the frontend and backend.
   ```bash
   npm run setup
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the `frontend/` directory with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   ...
   ```

4. **Service Account Key**:
   For backend token verification, place your Firebase `serviceAccountKey.json` in the `backend/` directory. 
   *(Note: The app will run in a development bypass mode if this file is missing).*

### Running the Application

To start both the frontend and backend concurrently:
```bash
npm run dev
```

The application will be available at:
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

## Project Structure

```text
Inventro/
├── backend/            # Express.js API
│   ├── data/           # Database storage logic
│   ├── middleware/     # Auth & validation middleware
│   ├── routes/         # API endpoints (Products, Scan, Logs)
│   └── index.js        # Server entry point
├── frontend/           # React Application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # Auth & state context
│   │   ├── pages/      # View components
│   │   └── services/   # API communication
│   └── tailwind.config.js
├── db.json             # Root JSON database file
└── package.json        # Main project configuration
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

Built by [Mutthuram](https://github.com/Mutthuram03)
