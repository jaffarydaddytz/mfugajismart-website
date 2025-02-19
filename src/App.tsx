import React from 'react';
import { useTranslation } from 'react-i18next';



function App() {
  const { t }: { t: (key: string) => string } = useTranslation();
  
  return (
    <div >
      <h1>{t('greeting')}</h1>

    </div>
  );
}

export default App;
