
import React, { useState, useMemo, useEffect } from 'react';
import { WORDS, CATEGORIES } from '../data';
import { Word, CategoryType } from '../types';
import TTSButton from '../components/TTSButton';

const VocabularyView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedWordId, setSelectedWordId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'group' | 'category' | 'strengthen'>('group');
  const [activeGroup, setActiveGroup] = useState(1);
  const [activeCategory, setActiveCategory] = useState<CategoryType>(CATEGORIES[0]);
  const [showDefinition, setShowDefinition] = useState(false);
  
  const [strengthenedIds, setStrengthenedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('strengthenedIds');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('strengthenedIds', JSON.stringify(strengthenedIds));
  }, [strengthenedIds]);

  const groups = useMemo(() => Array.from(new Set(WORDS.map(w => w.group))).sort((a, b) => a - b), []);
  
  const filteredWords = useMemo(() => {
    if (activeTab === 'group') return WORDS.filter(w => w.group === activeGroup);
    if (activeTab === 'category') return WORDS.filter(w => w.categories.includes(activeCategory));
    return WORDS.filter(w => strengthenedIds.includes(w.id));
  }, [activeTab, activeGroup, activeCategory, strengthenedIds]);

  const selectedWord = useMemo(() => 
    WORDS.find(w => w.id === selectedWordId) || null, 
  [selectedWordId]);

  const toggleStrengthen = (id: string) => {
    setStrengthenedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const navigateWord = (direction: 'prev' | 'next') => {
    if (!selectedWordId) return;
    const currentIndex = filteredWords.findIndex(w => w.id === selectedWordId);
    let nextId = null;
    if (direction === 'prev' && currentIndex > 0) {
      nextId = filteredWords[currentIndex - 1].id;
    } else if (direction === 'next' && currentIndex < filteredWords.length - 1) {
      nextId = filteredWords[currentIndex + 1].id;
    }
    if (nextId) {
      setSelectedWordId(nextId);
      setShowDefinition(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen bg-slate-50">
      <header className="bg-white border-b px-4 py-3 flex items-center shrink-0">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full mr-4 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h2 className="text-xl font-bold">单词学习</h2>
      </header>

      <div className="bg-white border-b flex shrink-0 overflow-x-auto scrollbar-hide">
        <button onClick={() => setActiveTab('group')} className={`px-6 py-4 font-semibold text-sm transition-all border-b-2 ${activeTab === 'group' ? 'border-green-600 text-green-600' : 'border-transparent text-slate-500'}`}>按 Group 学习</button>
        <button onClick={() => setActiveTab('category')} className={`px-6 py-4 font-semibold text-sm transition-all border-b-2 ${activeTab === 'category' ? 'border-green-600 text-green-600' : 'border-transparent text-slate-500'}`}>按分类学习</button>
        <button onClick={() => setActiveTab('strengthen')} className={`px-6 py-4 font-semibold text-sm transition-all border-b-2 ${activeTab === 'strengthen' ? 'border-orange-500 text-orange-500' : 'border-transparent text-slate-500'}`}>📌 加强记忆单词集</button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {activeTab !== 'strengthen' && (
          <div className="w-24 md:w-48 bg-slate-50 border-r overflow-y-auto p-2">
            {activeTab === 'group' ? groups.map(g => (
              <button key={g} onClick={() => setActiveGroup(g)} className={`w-full text-left px-4 py-3 mb-2 rounded-xl text-sm font-medium transition-all ${activeGroup === g ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white text-slate-600'}`}>Group {g}</button>
            )) : CATEGORIES.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)} className={`w-full text-left px-4 py-3 mb-2 rounded-xl text-xs md:text-sm font-medium transition-all ${activeCategory === c ? 'bg-green-600 text-white shadow-lg' : 'hover:bg-white text-slate-600'}`}>{c}</button>
            ))}
          </div>
        )}

        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            {filteredWords.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-slate-400">
                <div className="bg-slate-100 p-6 rounded-full mb-4">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <p className="text-lg">暂无单词，快去添加吧</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredWords.map(word => (
                  <div key={word.id} onClick={() => { setSelectedWordId(word.id); setShowDefinition(false); }} className="bg-white p-5 rounded-3xl border border-slate-100 hover:border-green-300 shadow-sm cursor-pointer transition-all flex items-center justify-between group">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <h4 className="text-xl font-bold text-slate-800">{word.word}</h4>
                        <span className="text-xs font-bold text-green-600 px-2 py-0.5 bg-green-50 rounded lowercase">{word.pos}</span>
                      </div>
                      <p className="text-slate-500 line-clamp-1">{word.translation}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={(e) => { e.stopPropagation(); toggleStrengthen(word.id); }} className={`p-2 rounded-full transition-colors ${strengthenedIds.includes(word.id) ? 'text-orange-500 bg-orange-50' : 'text-slate-300 hover:bg-slate-50'}`}>
                        <svg className="w-5 h-5" fill={strengthenedIds.includes(word.id) ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                      </button>
                      <TTSButton text={word.word} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedWord && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-8 md:p-10 overflow-y-auto flex-1">
              <div className="flex justify-between items-start mb-8">
                <button onClick={() => toggleStrengthen(selectedWord.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs transition-all ${strengthenedIds.includes(selectedWord.id) ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {strengthenedIds.includes(selectedWord.id) ? '⭐ 已加入加强' : '⭐ 加入加强记忆'}
                </button>
                <button onClick={() => setSelectedWordId(null)} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-5xl font-black text-slate-800 mb-4 tracking-tight">{selectedWord.word}</h3>
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-lg text-slate-400 font-mono">{selectedWord.phonetic}</span>
                  <span className="text-xs font-bold bg-green-50 px-3 py-1 rounded-full text-green-600 lowercase">{selectedWord.pos}</span>
                </div>
                <TTSButton text={selectedWord.word} size="lg" className="mx-auto scale-125 shadow-lg shadow-green-100" />
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Meaning</h5>
                    <button onClick={() => setShowDefinition(!showDefinition)} className="text-[10px] font-black uppercase tracking-widest text-green-600 px-2 py-1 bg-green-50 rounded hover:bg-green-100 transition-colors">
                      {showDefinition ? '隐藏英文释义' : '显示英文释义'}
                    </button>
                  </div>
                  {showDefinition && (
                    <p className="text-base text-slate-600 italic mb-3 leading-relaxed animate-in fade-in slide-in-from-top-2">"{selectedWord.definition}"</p>
                  )}
                  <p className="text-xl font-bold text-slate-900 leading-tight">{selectedWord.translation}</p>
                </div>
                <div>
                  <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Example Sentences</h5>
                  <div className="space-y-4">
                    {selectedWord.examples.map((ex, i) => (
                      <div key={i} className="bg-green-50/50 border border-green-100 p-5 rounded-2xl flex gap-3">
                        <div className="flex-1">
                          <p className="text-base text-slate-700 mb-1 leading-snug font-medium">{ex.en}</p>
                          <p className="text-xs text-slate-400 leading-tight">{ex.cn}</p>
                        </div>
                        <TTSButton text={ex.en} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-50 border-t flex items-center justify-between shrink-0">
              <button onClick={() => navigateWord('prev')} disabled={filteredWords.findIndex(w => w.id === selectedWordId) === 0} className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-slate-600 bg-white shadow-sm disabled:opacity-30 transition-all hover:bg-slate-100 border border-slate-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg> Previous
              </button>
              <button onClick={() => navigateWord('next')} disabled={filteredWords.findIndex(w => w.id === selectedWordId) === filteredWords.length - 1} className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-green-600 shadow-lg shadow-green-100 disabled:opacity-30 transition-all hover:bg-green-700">
                Next <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VocabularyView;
