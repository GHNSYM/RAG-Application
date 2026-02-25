import React, { useState, useEffect } from 'react';
import { MdSend, MdClear } from 'react-icons/md';
import './MainContent.css';

function MainContent({ onAddHistory, selectedHistory }) {
  const [text, setText] = useState('');
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Load selected history
  useEffect(() => {
    if (selectedHistory) {
      setText(selectedHistory.fullText);
      setQuery(selectedHistory.query);
      setResponse(selectedHistory.response || 'Response from history');
    }
  }, [selectedHistory]);

  const handleClear = () => {
    setText('');
    setQuery('');
    setResponse('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!text.trim() || !query.trim()) {
      setError('Please enter both text and query');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      // TODO: Replace with your backend API endpoint
      const backendURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
      
      const res = await fetch(`${backendURL}/api/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          query: query,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to get response from backend');
      }

      const data = await res.json();
      setResponse(data.response || data.result);
      
      // Add to history
      onAddHistory(text, query, data.response || data.result);
    } catch (err) {
      setError(err.message || 'An error occurred. Make sure your backend is running.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-content">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Drishtee RAG App</h1>
          <p className="hero-subtitle">Retrieval Augmented Generation</p>
        </div>
      </header>

      <div className="form-section">
        <form onSubmit={handleSubmit} className="query-form">
          <div className="form-group">
            <label htmlFor="text" className="form-label">
              Document Text
            </label>
            <textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your document or text here..."
              className="text-input"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="query" className="form-label">
              Your Query
            </label>
            <input
              type="text"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask a question about the document..."
              className="query-input"
              disabled={loading}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="button-group">
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="loader"></span>
                  Processing...
                </>
              ) : (
                <>
                  <MdSend /> Query
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="clear-btn"
              disabled={loading}
            >
              <MdClear /> Clear
            </button>
          </div>
        </form>

        {response && (
          <div className="response-section">
            <h3 className="response-title">Response</h3>
            <div className="response-content">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainContent;
