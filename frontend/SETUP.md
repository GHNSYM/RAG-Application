# Frontend Setup Guide

## Quick Setup Instructions

### Step 1: Install Dependencies
```bash
cd frontend
npm install
```

This will install all required packages:
- react & react-dom (core React libraries)
- react-icons (icon library)
- react-scripts (build tools)
- axios (for HTTP requests)

### Step 2: Configure Backend URL (Optional)
If your backend is running on a different URL, create a `.env` file:

```bash
cp .env.example .env
```

Then edit `.env` and update the backend URL:
```
REACT_APP_BACKEND_URL=http://your-backend-url:port
```

### Step 3: Start Development Server
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

---

## Project Features

### ✨ UI/UX
- **Light Mode**: Clean, readable interface with VS Code-inspired colors
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Gradient buttons with hover effects
- **Custom Fonts**: Fira Code monospace font for coding feel

### 📝 Core Functionality
- **Document Input**: Paste or type your document
- **Query Input**: Ask questions about your document
- **API Integration**: Communicates with your RAG backend
- **Response Display**: Shows RAG model responses

### 💾 History Management
- **Local Storage**: All queries saved to browser localStorage
- **Collapsible Sidebar**: View and manage query history
- **Quick Access**: Click any history item to reload it
- **Delete Options**: Remove individual items or clear all history

---

## Component Architecture

### App.js
- Main component that manages state
- Handles history in localStorage
- Coordinates between Sidebar and MainContent

### MainContent.js
- Hero section with "Drishtee RAG App" title
- Document and query input forms
- Response display area
- API communication with backend

### Sidebar.js
- History list display
- Empty state handling
- Delete and clear functionality
- Collapsible UI for mobile

---

## Color Scheme (VS Code Light Theme Inspired)

```
Primary Colors:
- Background: #f5f5f5
- Surface: #ffffff
- Accent Blue: #0066bf
- Accent Cyan: #0094f6

Text Colors:
- Primary: #333333
- Secondary: #666666
- Tertiary: #999999
```

---

## Backend Integration

Your backend API should handle:

```
POST /api/query
{
  "text": "document content",
  "query": "user question"
}

Response:
{
  "response": "answer text"
}
```

---

## Troubleshooting

### Port 3000 is already in use
```bash
npm start -- --port 3001
```

### Backend connection error
- Verify your backend is running
- Check the `REACT_APP_BACKEND_URL` in your `.env` file
- Make sure CORS is enabled on your backend

### History not persisting
- Check browser's localStorage is not disabled
- Try clearing browser cache and reload

---

## Next Steps for Enhancement

1. **Detailed Loading States**
   - Show progress: "Extracting text → Chunking → Embedding → Querying"
   - Display real-time backend logs

2. **Response Enhancement**
   - Format and highlight response text
   - Show confidence scores
   - Display source documents used

3. **User Experience**
   - Dark mode toggle
   - Font size adjustment
   - Export history as JSON/PDF

4. **Backend Features**
   - User authentication
   - File upload support
   - Multiple document handling

---

Happy coding! 🚀
