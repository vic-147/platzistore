import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
import 'styles/global.css';

export default function App({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header>{/* - aqui van los script de Google Analytics  */}</Header>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
