
import React, { useState } from 'react';
import { AppRoute } from './types';
import HomeView from './views/HomeView';
import VocabularyView from './views/VocabularyView';
import DictationView from './views/DictationView';
import ReadingView from './views/ReadingView';

const App: React.FC = () => {
  const [route, setRoute] = useState<AppRoute>(AppRoute.HOME);

  const renderContent = () => {
    switch (route) {
      case AppRoute.HOME:
        return <HomeView onNavigate={setRoute} />;
      case AppRoute.VOCABULARY:
        return <VocabularyView onBack={() => setRoute(AppRoute.HOME)} />;
      case AppRoute.DICTATION:
        return <DictationView onBack={() => setRoute(AppRoute.HOME)} />;
      case AppRoute.READING:
        return <ReadingView onBack={() => setRoute(AppRoute.HOME)} />;
      default:
        return <HomeView onNavigate={setRoute} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
};

export default App;
