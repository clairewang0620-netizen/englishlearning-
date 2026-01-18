
import React, { useState, useRef, useMemo, useEffect } from 'react';
import { ARTICLES } from '../data';
import { Article, ArticleParagraph } from '../types';
import { speakFixed } from '../utils/speech';
import TTSButton from '../components/TTSButton';

const ReadingView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('全部');
  const [speed, setSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');
  const [showTranslation, setShowTranslation] = useState<{ [key: string]: boolean }>({});
  const [recordingId, setRecordingId] = useState<string | null>(null);
  // Storage structure: { [articleId]: { [paragraphId]: audioUrl } }
  const [articleRecordings, setArticleRecordings] = useState<{ [articleId: string]: { [paraId: string]: string } }>({});
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const categories = useMemo(() => ['全部', ...Array.from(new Set(ARTICLES.map(a => a.category)))], []);
  const filteredArticles = useMemo(() => activeCategory === '全部' ? ARTICLES : ARTICLES.filter(a => a.category === activeCategory), [activeCategory]);

  const startRecording = async (paraId: string) => {
    if (recordingId || !selectedArticle) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const chunks: Blob[] = [];
      
      mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        const artId = selectedArticle.id;
        setArticleRecordings(prev => ({
          ...prev,
          [artId]: {
            ...(prev[artId] || {}),
            [paraId]: url
          }
        }));
        setRecordingId(null);
      };

      setRecordingId(paraId);
      mediaRecorder.start();
    } catch (err) {
      alert("请允许麦克风访问权限以进行跟读练习。");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
    }
  };

  const playRecorded = (paraId: string) => {
    if (!selectedArticle) return;
    const url = articleRecordings[selectedArticle.id]?.[paraId];
    if (url) {
      const audio = new Audio(url);
      audio.play();
    }
  };

  if (!selectedArticle) {
    return (
      <div className="max-w-5xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="flex items-center">
            <button onClick={onBack} className="p-2 hover:bg-white rounded-full mr-4 shadow-sm border border-slate-100 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </button>
            <h2 className="text-4xl font-black text-slate-800">精选外刊</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCategory(c)} className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeCategory === c ? 'bg-green-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-100 hover:bg-slate-50'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <div key={article.id} onClick={() => setSelectedArticle(article)} className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all cursor-pointer group flex flex-col h-full">
              <div className="h-48 w-full relative overflow-hidden">
                <img src={article.image || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800'} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white bg-green-600 px-3 py-1.5 rounded-full shadow-lg">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-slate-800 group-hover:text-green-600 transition-colors leading-tight mb-4">{article.title}</h3>
                </div>
                <div className="flex items-center justify-between text-slate-400 text-sm font-bold mt-6 pt-6 border-t border-slate-50">
                   <span className="flex items-center"><svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>{article.paragraphs.length} 段内容</span>
                   <span className="text-green-600 flex items-center gap-1">开始阅读 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      <header className="bg-white border-b px-4 py-4 flex items-center justify-between shrink-0 shadow-sm z-10">
        <div className="flex items-center">
          <button onClick={() => setSelectedArticle(null)} className="p-2 hover:bg-slate-100 rounded-full mr-4 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <h2 className="text-xl font-black truncate max-w-[200px] md:max-w-md">{selectedArticle.title}</h2>
        </div>
        
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200">
          {(['slow', 'normal', 'fast'] as const).map(s => (
            <button key={s} onClick={() => setSpeed(s)} className={`px-4 py-1.5 rounded-xl text-xs font-black transition-all ${speed === s ? 'bg-white text-green-600 shadow-md' : 'text-slate-400'}`}>
              {s === 'slow' ? '慢速' : s === 'normal' ? '正常' : '快速'}
            </button>
          ))}
        </div>
      </header>

      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto py-16 px-6 md:px-12 space-y-16">
          <h1 className="text-4xl font-black text-slate-800 leading-tight mb-4">{selectedArticle.title}</h1>
          <div className="h-1 w-20 bg-green-500 rounded-full mb-12"></div>
          
          {selectedArticle.paragraphs.map((p) => {
            const hasRecording = articleRecordings[selectedArticle.id]?.[p.id];
            const isRecordingThis = recordingId === p.id;

            return (
              <div key={p.id} className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 border-b border-slate-50 pb-12 items-start">
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl text-slate-800 leading-[1.8] font-serif font-medium tracking-tight">
                    {p.en}
                  </p>
                  {showTranslation[p.id] && (
                    <p className="text-lg text-slate-500 leading-relaxed bg-slate-50 p-6 rounded-2xl mt-4 animate-in fade-in slide-in-from-top-2 border border-slate-100">
                      {p.cn}
                    </p>
                  )}
                  
                  {/* Shadowing Feedback Area */}
                  {(hasRecording || isRecordingThis) && (
                    <div className="flex items-center gap-4 p-4 bg-green-50/30 border border-green-100 rounded-2xl animate-in zoom-in">
                      {isRecordingThis ? (
                        <div className="flex items-center gap-3 text-red-600 font-bold text-sm">
                          <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
                          正在录音...
                          <button onClick={stopRecording} className="px-3 py-1 bg-red-600 text-white rounded-lg text-xs hover:bg-red-700 transition-colors">
                            ⏹ 停止并保存
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => playRecorded(p.id)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-green-600 text-xs font-black uppercase tracking-widest border border-green-200 hover:bg-green-50 transition-colors"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            播放我的录音
                          </button>
                          <button 
                            onClick={() => startRecording(p.id)}
                            className="text-[10px] font-black uppercase text-slate-400 hover:text-green-600 underline"
                          >
                            🔁 重新录制
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Vertical Toolbar */}
                <div className="flex lg:flex-col items-center gap-3 bg-slate-50/50 p-2 rounded-2xl border border-slate-100">
                  <button 
                    onClick={() => speakFixed(p.en, speed)} 
                    title="发音"
                    className="p-2 rounded-xl bg-white text-green-600 shadow-sm border border-slate-200 hover:text-green-700 hover:bg-green-50 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                  </button>
                  <button 
                    onClick={() => setShowTranslation(prev => ({ ...prev, [p.id]: !prev[p.id] }))} 
                    title="翻译"
                    className={`p-2 rounded-xl border transition-all ${showTranslation[p.id] ? 'bg-green-600 text-white border-green-600' : 'bg-white text-slate-400 border-slate-200 hover:text-green-600'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
                  </button>
                  <button 
                    onClick={() => startRecording(p.id)} 
                    title="跟读"
                    className={`p-2 rounded-xl border transition-all ${recordingId === p.id ? 'bg-red-500 text-white border-red-500' : 'bg-white text-slate-400 border-slate-200 hover:text-green-600'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  </button>
                </div>
              </div>
            );
          })}

          <div className="mt-24 pt-16 border-t border-slate-100">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-10 flex items-center">
              <span className="w-8 h-px bg-slate-200 mr-4"></span>
              Core Vocabulary
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedArticle.keywords.map((k, i) => (
                <div key={i} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-green-300 transition-all">
                  <div>
                    <p className="font-black text-slate-800 text-lg leading-tight">{k.en}</p>
                    <p className="text-slate-400 text-sm font-medium">{k.cn}</p>
                  </div>
                  <TTSButton text={k.en} size="sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingView;
