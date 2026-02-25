import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [history, setHistory] = useState([]);
  const [selectedHistory, setSelectedHistory] = useState(null);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('ragHistory');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to load history:', e);
      }
    }
  }, []);

  // Save history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('ragHistory', JSON.stringify(history));
  }, [history]);

  const addToHistory = (text, query, response) => {
    const newEntry = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      text: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
      query: query,
      response: response,
      fullText: text
    };
    setHistory([newEntry, ...history]);
  };

  const clearHistory = () => {
    setHistory([]);
    setSelectedHistory(null);
  };

  const deleteHistoryEntry = (id) => {
    const filtered = history.filter(entry => entry.id !== id);
    setHistory(filtered);
    if (selectedHistory?.id === id) {
      setSelectedHistory(null);
    }
  };

  return (
    <div className="app-container">
      <Sidebar 
        history={history}
        selectedHistory={selectedHistory}
        onSelectHistory={setSelectedHistory}
        onClearHistory={clearHistory}
        onDeleteEntry={deleteHistoryEntry}
      />
      <MainContent 
        onAddHistory={addToHistory}
        selectedHistory={selectedHistory}
      />
    </div>
  );
}

export default App;
