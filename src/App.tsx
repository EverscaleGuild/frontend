import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { ProviderRpcClient } from 'everscale-inpage-provider'
function App() {
  const [isProvider, setIsProvider] = useState<null | boolean>(null)
  useEffect(() => {
    const checkProvider = async () => {
      try {
        const ever = new ProviderRpcClient();
        setIsProvider(await ever.hasProvider());
      } catch {
        setIsProvider(false);
      }
    }
    checkProvider()
  }, [])

  if (isProvider === null) {
    return <p>loading</p>
  }

  if (isProvider === false) {
    return <p>no</p>
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
