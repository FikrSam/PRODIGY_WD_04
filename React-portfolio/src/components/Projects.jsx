import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="work-grid">
        <a href="GITHUB_LINK" className="project-card">
          <div className="card-header">
            <span>PRODIGY_01 // 2026</span>
            <span>HTML / CSS / JS</span>
          </div>
          <h3 className="project-title">Landing<br />Interface</h3>
          <div className="card-footer">
            <span className="source-text">VIEW_SOURCE</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>

        <a href="GITHUB_LINK" className="project-card">
          <div className="card-header">
            <span>PRODIGY_02 // 2026</span>
            <span>VANILLA_JS</span>
          </div>
          <h3 className="project-title">Stop<br />Watch</h3>
          <div className="card-footer">
            <span className="source-text">VIEW_SOURCE</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>

        <a href="GITHUB_LINK" className="project-card">
          <div className="card-header">
            <span>PRODIGY_03 // 2026</span>
            <span>JS_LOGIC / AI</span>
          </div>
          <h3 className="project-title">AI<br />Tic-Tac-Toe</h3>
          <div className="card-footer">
            <span className="source-text">VIEW_SOURCE</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
