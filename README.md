# RayChat-RealTime

RayChat-RealTime is a real-time chat application built using Vite, TypeScript, and React. It enables instant messaging with a smooth user experience and optimized performance.

## Features

- **Real-time messaging** using WebSockets.
- **Optimized performance** with Vite.
- **TypeScript support** for better code maintainability.
- **Modern UI** built with React.
- **Scalability and modularity** for future enhancements.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (latest LTS recommended)
- [Yarn](https://yarnpkg.com/) or npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/raychat-realtime.git
   cd raychat-realtime
   ```
2. Install dependencies:
   ```sh
   yarn install
   # or
   npm install
   ```

### Running the Development Server

To start the development server, run:

```sh
yarn dev
# or
npm run dev
```

This will start the Vite development server, and the application will be available at `http://localhost:5173` (default port).

### Building for Production

To build the project for production, run:

```sh
yarn build
# or
npm run build
```

The built files will be available in the `dist` folder.

### Running in Production

To preview the production build locally:

```sh
yarn preview
# or
npm run preview
```

## Project Structure

```
raychat-realtime/src/
│── assets/              # Static assets
│── components/          # Reusable UI components
│── pages/               # Application pages
│── types/               # Type definitions
│── App.css              # Component styles
│── App.tsx              # Main application component
│── global.css           # Global styles
│── main.tsx             # Entry point
│── socket.ts            # WebSocket service
│── vite-env.d.ts        # Environment type definitions
```

## Technologies Used

- **Vite** - Fast build tool
- **React** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **WebSockets** - Real-time communication
- Tailwind CSS - Styling framework
- socket.io Client
