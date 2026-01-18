
import React, { useState, useEffect, useRef } from 'react';
import { WORDS } from '../data';
import { Word } from '../types';
import { speak } from '../utils/speech';
import TTSButton from '../components/TTSButton';

const DictationView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [activeGroup, setActiveGroup] = useState<number | null>(null);
  const [showMistakes, setShowMistakes] = useState(false);
  const [mistakeIds, setMistakeIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('mistakeIds');
    return saved ? JSON.parse(saved) : [];
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentWords = showMistakes 
    ? WORDS.filter(w => mistakeIds.includes(w.id))
    : (activeGroup ? WORDS.filter(w => w.group === activeGroup) : []);

  const groups = Array.from(new Set(WORDS.map(w => w.group))).sort((a, b) => a - b);

  useEffect(() => {
    localStorage.setItem('mistakeIds', JSON.stringify(mistakeIds));
  }, [mistakeIds]);

  const resetSession = () => {
    setCurrentIndex(0);
    setUserInput('');
    setFeedback(null);
    setCompleted(false);
    setShowHint(false);
  };

  const handleNextWord = () => {
    if (currentIndex < currentWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setUserInput('');
      setFeedback(null);
      setShowHint(false);
    } else {
      setCompleted(true);
    }
  };

  const checkAnswer = () => {
    if (!currentWords[currentIndex] || feedback !== null) return;
    const currentWord = currentWords[currentIndex];
    if (userInput.trim().toLowerCase() === currentWord.word.toLowerCase()) {
      setFeedback('correct');
      setTimeout(handleNextWord, 1500);
    } else {
      setFeedback('wrong');
      if (!mistakeIds.includes(currentWord.id)) {
        setMistakeIds(prev => [...prev, currentWord.id]);
      }
    }
  };

  const NavigationBar = () => (
    <header className="bg-white border-b px-4 py-4 flex items-center justify-between shrink-0 shadow-sm">
      <button onClick={() => { setActiveGroup(null); setShowMistakes(false); }} className="flex items-center text-slate-600 hover:text-green-600 font-bold transition-colors">
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
        返回听写目录
      </button>
      {(activeGroup || showMistakes) && !completed && (
        <div className="text-sm font-bold bg-green-50 px-4 py-1.5 rounded-full text-green-600">
          {currentIndex + 1} / {currentWords.length}
        </div>
      )}
    </header>
  );

  if (!activeGroup && !showMistakes) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex items-center mb-10">
          <button onClick={onBack} className="p-2 hover:bg-white rounded-full mr-4 shadow-sm border border-slate-100 transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <h2 className="text-3xl font-black text-slate-800">单词听写</h2>
        </div>

        <div className="bg-green-600 rounded-[2.5rem] p-10 mb-12 text-white shadow-2xl shadow-green-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black mb-3">📌 错题集训练</h3>
            <p className="opacity-90 text-lg">针对拼写错误的单词进行地毯式强化复习。</p>
          </div>
          <button onClick={() => { setShowMistakes(true); resetSession(); }} disabled={mistakeIds.length === 0} className={`px-10 py-5 rounded-2xl font-black text-lg transition-all ${mistakeIds.length > 0 ? 'bg-white text-green-600 hover:scale-105 shadow-xl' : 'bg-white/20 text-white/50 cursor-not-allowed'}`}>
            进入错题集 ({mistakeIds.length})
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {groups.map(g => (
            <button key={g} onClick={() => { setActiveGroup(g); resetSession(); }} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-green-300 transition-all text-center group">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all transform group-hover:rotate-3">
                <span className="text-2xl font-black">{g}</span>
              </div>
              <span className="font-bold text-slate-800 text-lg">Group {g}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="flex flex-col h-screen bg-slate-50">
        <NavigationBar />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 text-center max-w-lg w-full">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-4xl font-black mb-4">Bravo! 👏</h2>
            <p className="text-slate-500 text-lg mb-10">你已经完成了本次听写训练！</p>
            <button onClick={() => { setActiveGroup(null); setShowMistakes(false); }} className="w-full bg-green-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-100">返回听写目录</button>
          </div>
        </div>
      </div>
    );
  }

  const currentWord = currentWords[currentIndex];

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      <NavigationBar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 relative overflow-hidden flex flex-col items-center">
          {feedback === 'correct' && (
            <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center z-10 animate-in fade-in">
               <div className="text-green-600 text-5xl font-black animate-bounce">Bravo 👏</div>
            </div>
          )}
          
          <div className="w-full text-center flex flex-col items-center mb-8">
            <button 
              onClick={() => speak(currentWord.word)}
              className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-100 hover:scale-105 active:scale-95 transition-all mb-4 shrink-0"
            >
              <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </button>

            <button 
              onClick={() => setShowHint(!showHint)}
              className={`text-[11px] font-bold transition-all px-3 py-1 rounded-full border mb-4 uppercase tracking-wider ${showHint ? 'bg-green-600 text-white border-green-600' : 'bg-white text-slate-300 border-slate-100 hover:text-slate-500'}`}
            >
              {showHint ? '隐藏中文提示' : '中文提示'}
            </button>

            {showHint && (
              <div className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100 animate-in fade-in zoom-in-95 w-full max-w-sm mb-4">
                <p className="text-xl font-bold text-slate-700">{currentWord.translation}</p>
              </div>
            )}
          </div>

          <div className="w-full space-y-6">
            <div className="relative">
              <input 
                autoFocus
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                className={`w-full text-center text-4xl font-black py-4 border-b-4 outline-none transition-all ${feedback === 'wrong' ? 'border-red-500 text-red-500 bg-red-50' : 'border-slate-100 focus:border-green-500 text-slate-800'}`}
                placeholder=""
                autoComplete="off"
                disabled={feedback !== null}
              />
            </div>

            {feedback === 'wrong' && (
              <div className="text-center animate-in zoom-in bg-red-50 p-4 rounded-2xl">
                <p className="text-red-500 font-black text-2xl mb-0.5">{currentWord.word}</p>
                <p className="text-slate-400 font-bold text-xs">{currentWord.translation}</p>
              </div>
            )}

            <div className="flex flex-col items-center gap-4 relative">
              <button 
                onClick={checkAnswer} 
                disabled={feedback !== null}
                className="w-48 py-4 rounded-2xl font-black text-white bg-green-600 hover:bg-green-700 shadow-lg shadow-green-100 transition-all disabled:opacity-50"
              >
                Submit
              </button>

              <button 
                onClick={handleNextWord}
                className="absolute -right-4 bottom-0 p-4 text-slate-400 hover:text-green-600 hover:scale-110 transition-all"
                title="Next Word"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DictationView;
