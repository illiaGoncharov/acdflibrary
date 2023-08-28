import React from "react";
import { Route, Routes, useLocation } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';
import i18n from '../../locales/i18n'; // Импорт вашей настройки i18n

import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';

import styles from './App.module.css';

import { Home, About, EventsPage, Media, EventPage } from './../../pages/index';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();
    
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <AppHeader />
      <main className={styles.main}>
        <ScrollToTop />
        <Routes>
          <Route path="/acdflibrary/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/media" element={<Media />} />
          <Route path="/event/:eventId" element={<EventPage />} />
        </Routes>
      </main>
      <AppFooter />
    </I18nextProvider>
  )
}

export default App;
