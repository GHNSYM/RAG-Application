# Drishtee RAG App - Frontend

A modern React frontend for the Drishtee RAG (Retrieval Augmented Generation) Application with beautifulUI inspired by VS Code.

## 🎨 Features

- **Clean, Modern Interface** - Light mode with cool VS Code-inspired colors
- **Single Page Application** - Intuitive document and query input interface
- **History Management** - Local storage-based history with collapsible sidebar
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Real-time Querying** - Submit documents and queries for RAG processing
- **Beautiful Typography** - Uses Fira Code font for a professional look
- **Gradient Accents** - Blue and cyan gradient buttons with smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (optional):
```
REACT_APP_BACKEND_URL=http://localhost:5000
```

### Running the Application

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   ├── MainContent.js  # Main form and response area
│   │   ├── MainContent.css
│   │   ├── Sidebar.js      # History sidebar
│   │   └── Sidebar.css
│   ├── App.js              # Main App component
│   ├── App.css
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json
└── README.md
```

## 🎯 Usage

1. **Input Document**: Paste or type your document text in the "Document Text" field
2. **Enter Query**: Type your question or query in the "Your Query" field
3. **Submit**: Click the "Query" button to process
4. **View Response**: The response will appear below the form
5. **History**: View previous queries in the left sidebar, click to reload them

## 🔧 Customization

### Colors
Edit the CSS custom properties in `src/index.css`:
```css
:root {
  --accent-blue: #0066bf;
  --accent-cyan: #0094f6;
  /* ... other colors ... */
}
```

### Font
The app uses "Fira Code" imported from Google Fonts. Change this in `src/index.css`

### Backend API
Update the backend URL in `src/components/MainContent.js`:
```javascript
const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
```

## 🔌 Backend Integration

The frontend expects a backend API endpoint:

**POST** `/api/query`

Request body:
```json
{
  "text": "document text",
  "query": "user query"
}
```

Response:
```json
{
  "response": "answer from RAG model"
}
```

## 📦 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (irreversible)

## 🎨 Color Palette

- **Primary Background**: #f5f5f5
- **Secondary Background**: #ffffff
- **Accent Blue**: #0066bf
- **Accent Cyan**: #0094f6
- **Text Primary**: #333333
- **Text Secondary**: #666666

## 📱 Responsive Design

The application is fully responsive and includes:
- Desktop layout with collapsible sidebar
- Tablet-friendly interface
- Mobile-optimized single column layout

## 🔒 Data Storage

All query history is stored in browser's localStorage under the key `ragHistory`. This means:
- History persists across browser sessions
- History is only stored locally (not transmitted to server)
- Clearing browser data will delete history

## 🚀 Future Enhancements

As mentioned, the following can be implemented:
- **Detailed Loading States** - Show step-by-step processing (extracting text → chunking → embedding)
- **Advanced Response Formatting** - Format and highlight response text
- **User Settings** - Theme switching, font size adjustment
- **Authentication** - User login and account management

## 📝 License

This project is part of the Drishtee RAG Application

## 🤝 Contributing

To add features or suggest improvements, please contact the development team.

---

Built with ❤️ for the Drishtee RAG Application
