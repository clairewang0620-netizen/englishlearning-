
export type PlaybackSpeed = 'normal' | 'slow';

let currentSpeechState: { [key: string]: number } = {};

/**
 * Finds a high-quality female American voice if available.
 */
const getBestVoice = () => {
  const voices = window.speechSynthesis.getVoices();
  // Prefer Google US English or premium system voices
  return voices.find(v => v.lang === 'en-US' && v.name.includes('Google')) || 
         voices.find(v => v.lang === 'en-US') || 
         voices[0];
};

export const speak = (text: string, onEnd?: () => void) => {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.voice = getBestVoice();

  const stateKey = text;
  const count = currentSpeechState[stateKey] || 0;
  
  // High quality speed settings: 1.0 for normal, 0.55 for slow
  // Slow rate is adjusted to be clear but not robotic
  if (count % 2 === 0) {
    utterance.rate = 0.9; // Slightly slower than 1.0 for clarity
    utterance.pitch = 1.0;
  } else {
    utterance.rate = 0.55;
    utterance.pitch = 0.95;
  }

  currentSpeechState[stateKey] = count + 1;
  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
};

export const speakFixed = (text: string, speed: 'slow' | 'normal' | 'fast', onEnd?: () => void) => {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.voice = getBestVoice();
  
  if (speed === 'slow') utterance.rate = 0.6;
  else if (speed === 'fast') utterance.rate = 1.2;
  else utterance.rate = 0.9;

  if (onEnd) utterance.onend = onEnd;
  window.speechSynthesis.speak(utterance);
};
