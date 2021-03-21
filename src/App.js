import './App.css';
import web3 from './plugins/web3';
import lottery from './lottery';
import { useEffect, useState } from 'react';

const App = () => {
  const [manager, setManager] = useState();
  useEffect(() => {
    const initManger = async () => {
      const initialManager = await lottery.methods.manager().call();
      setManager(initialManager);
    }
    initManger();
  }, []);

  return (
    <div>
      <h2>Lottery Contract</h2>
      <p>This contract is managed by { manager }</p>
    </div>
  );
}

export default App;
