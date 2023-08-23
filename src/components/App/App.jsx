import { Route, Routes } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../locales/i18n'; // Импорт вашей настройки i18n

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import NotFound from '../NotFound/NotFound';

import styles from './App.module.css';

import { Home, About, Events, Media } from './../../pages/index';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
          <AppHeader />
          <main className={styles.main}>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/media" element={<Media />} />
              <Route component={NotFound} />
            </Routes>
          </main>
          <AppFooter />
    </I18nextProvider>
  )
}

export default App;
