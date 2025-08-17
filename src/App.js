import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [advisory, setAdvisory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
  const response = await fetch('http://localhost:5001/advisory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });
      const data = await response.json();
      setAdvisory(data.advisory || 'No advisory received.');
    } catch (err) {
      setError('Error fetching advisory.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Sampoorna Krishi</h1>
      <p>Empowering Indian farmers with AI-powered financial tools, government schemes, and agricultural advisories.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask for an advisory..."
        />
        <button type="submit" disabled={loading}>Get Advisory</button>
      </form>
      {loading && <p>Loading...</p>}
      {advisory && <div><strong>Advisory:</strong> <p>{advisory}</p></div>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
