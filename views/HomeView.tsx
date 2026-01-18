
import React from 'react';
import { AppRoute } from '../types';

interface HomeViewProps {
  onNavigate: (route: AppRoute) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-bold font-serif mb-4 text-slate-800 tracking-tight">
          LingoMaster <span className="text-blue-600">Pro</span>
        </h1>
        <p className="text-lg text-slate-500">Elevate your English skills with structured learning and AI power.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button 
          onClick={() => onNavigate(AppRoute.VOCABULARY)}
          className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all text-left"
        >
          <div className="bg-blue-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">单词学习</h3>
          <p className="text-slate-500 text-sm">按组或分类科学记忆词汇，深度掌握用法。</p>
        </button>

        <button 
          onClick={() => onNavigate(AppRoute.DICTATION)}
          className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all text-left"
        >
          <div className="bg-emerald-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">单词听写</h3>
          <p className="text-slate-500 text-sm">通过发音训练拼写，打造肌肉记忆。</p>
        </button>

        <button 
          onClick={() => onNavigate(AppRoute.READING)}
          className="group relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all text-left"
        >
          <div className="bg-indigo-500 w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">精选外刊</h3>
          <p className="text-slate-500 text-sm">深度阅读原汁原味英语，掌握地道表达。</p>
        </button>
      </div>

      <div className="mt-20 text-center text-slate-400 text-xs uppercase tracking-widest font-semibold">
        Trusted by 10,000+ Students Worldwide
      </div>
    </div>
  );
};

export default HomeView;
