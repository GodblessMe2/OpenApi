import styles from './styles.module.css';
import chatGPTLogo from './assets/vecteezy_chatgpt-logo-chat-gpt-icon-on-white-background_21059827.jpg';
import { useState } from 'react';

function App() {
  const [queryDescription, setQueryDescription] = useState('');
  const [generatedQuery, setGeneratedQuery] = useState('');

  const submitQuery = async (e) => {
    e.preventDefault();

    const outputQuery = await generateQuery();
    setGeneratedQuery(outputQuery);
  };

  const generateQuery = async () => {
    const response = await fetch('http://localhost:3045/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ queryDescription: queryDescription }),
    });

    console.log(response);
    const data = await response.json();
    return data.response;
  };

  return (
    <main className={styles.main}>
      <img src={chatGPTLogo} alt='' className={styles.icon} />
      <h3>Generate a OpenAI</h3>

      <form onSubmit={submitQuery}>
        <input
          type='text'
          name='query-description'
          placeholder='Ask me Anything'
          onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type='submit' value='Generate Answer' />
      </form>
      <div className={styles.container}>
        <p>{generatedQuery}</p>
      </div>
    </main>
  );
}

export default App;
