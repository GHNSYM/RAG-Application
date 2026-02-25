import React, { useState } from 'react';
import { MdDelete, MdHistory, MdClear } from 'react-icons/md';
import './Sidebar.css';

function Sidebar({ history, selectedHistory, onSelectHistory, onClearHistory, onDeleteEntry }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-title">
          <MdHistory className="sidebar-icon" />
          History
        </h3>
        <button 
          className="sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      {!isCollapsed && (
        <>
          <div className="sidebar-content">
            {history.length === 0 ? (
              <div className="empty-state">
                <p>No history yet</p>
                <span>Start asking questions to build history</span>
              </div>
            ) : (
              <div className="history-list">
                {history.map((entry) => (
                  <div
                    key={entry.id}
                    className={`history-item ${selectedHistory?.id === entry.id ? 'active' : ''}`}
                    onClick={() => onSelectHistory(entry)}
                  >
                    <div className="history-item-content">
                      <p className="history-query">{entry.query}</p>
                      <span className="history-time">{entry.timestamp}</span>
                    </div>
                    <button
                      className="delete-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteEntry(entry.id);
                      }}
                      title="Delete"
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {history.length > 0 && (
            <button className="clear-history-btn" onClick={onClearHistory}>
              <MdClear /> Clear All
            </button>
          )}
        </>
      )}
    </aside>
  );
}

export default Sidebar;
