# Data Dryft - Sci-Fi 3D Portfolio

An immersive, futuristic portfolio website built with **React**, **Three.js**, and **TailwindCSS**. It features a holographic 3D brain visualization, particle systems, and a cyberpunk-inspired UI.

![Preview](https://via.placeholder.com/800x400?text=Data+Dryft+Preview)

## 🚀 Tech Stack
-   **Core**: React, Vite
-   **3D Engine**: Three.js, @react-three/fiber, @react-three/drei
-   **Styling**: TailwindCSS
-   **Animations**: Framer Motion, Maath (Procedural generation)
-   **Assets**: GLTF Model Loading

## ✨ Features
-   **Interactive 3D Brain**: A high-density point cloud visualization that tracks mouse movement (imported .glb model).
-   **Neural Particles**: Floating background particle system simulating a neural network.
-   **Post-Processing**: Cinematic Bloom, Noise, and Vignette effects.
-   **Holographic UI**: Glassmorphism design with "Data Dryft" Orange & Blue branding.
-   **Responsive**: Fully optimized for different screen sizes.

## 🛠️ Setup & Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/porweb.git
    cd porweb
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🌍 Deployment (GitHub Pages)

This project is configured for easy deployment to GitHub Pages.

1.  **Update `package.json`**:
    Change the `"homepage"` field to your own URL:
    ```json
    "homepage": "https://<your-username>.github.io/porweb"
    ```

2.  **Deploy**:
    ```bash
    npm run deploy
    ```
    This will build the project and push it to a `gh-pages` branch.

## ⚖️ License & Attribution
This project uses a 3D model licensed under CC-BY-4.0:
-   **"human-brain"** by [Yash_Dandavate](https://sketchfab.com/Yash_Dandavate).
