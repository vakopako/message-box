import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './containers/App';

const ReactApp = () => {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

document.addEventListener('DOMContentLoaded', function () {
  const rootNode = document.getElementById('root');

  ReactDOM.createRoot(rootNode).render(<ReactApp />);
});
