# STRATA - VCT (Strategic Valorant AI)

# Table of Contents
- Overview
- Features
- Tech Stack
- Setup and Installation
- Usage
- Project Structure
- Contribution Guidelines
- License

# Overview
This is the frontend application for Strata-VCT. It leverages React and Vite for a fast and modern development experience. Authentication is managed via Clerk, while Material UI (MUI) provides ready-to-use, stylish components. The app communicates with a backend API using Axios for efficient data handling.

# Features
- Authentication with Clerk (Sign in, Sign up, and session management)
- Responsive UI with MUI
- API calls using Axios for backend communication
- Fast build and hot-reload with Vite
- Seamless User Experience with integrated auth and data handling

# Tech Stack
- React – UI framework
- Vite – Fast dev server and build tool
- Clerk – Authentication as a service
- MUI – Component library for design consistency
- Axios – HTTP client for API communication

# Setup and Installation

Prerequisites
Node.js (v16+)
npm or yarn

# Installation Steps

- Clone the repository
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies
```
```
npm install
# or
yarn install
```
# Set up environment variables
- Create a .env file in the project root with the following:
```
VITE_CLERK_FRONTEND_API=<your-clerk-frontend-api-key>
VITE_BACKEND_API_URL=http://localhost:3000
```
# Run the development server
```
npm run dev
# or
yarn dev
The app will be available at http://localhost:5173.
```
# Usage
1.Authentication
Users can sign in or sign up using Clerk’s pre-built authentication flows.

2.API Integration
Axios is used to handle API calls. Example usage in the code:
```
axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/login`, { email, password })
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
Styling with MUI
```
Example of using MUI components:
```
import { Button } from '@mui/material';
<Button variant="contained">Click Me</Button>;
```
# Project Structure
```
/src
│── assets/        # Static files (e.g., icons, images)
│── components/    # Reusable React components
│── pages/         # Route components (e.g., Login, Dashboard)
│── hooks/         # Custom React hooks
│── services/      # API service functions (e.g., axios instances)
│── App.tsx        # Main application entry point
│── main.tsx       # React root rendering
```
# Contribution Guidelines
Fork the repository
Create a feature branch:
```
git checkout -b feature-branch-name
```
Commit your changes:
```
git commit -m "Add feature"
```
Push the branch:
```
git push origin feature-branch-name
```
Create a pull request

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
