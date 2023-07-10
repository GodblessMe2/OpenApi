import styles from './styles.module.css';
import chatGPTLogo from './assets/vecteezy_chatgpt-logo-chat-gpt-icon-on-white-background_21059827.jpg';
import { useState } from 'react';

function App() {
  const [queryDescription, setQueryDescription] = useState('');

  const submitQuery = (e) => {
    e.preventDefault();
    console.log('form submitted:', queryDescription);
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
    </main>
  );
}

export default App;
