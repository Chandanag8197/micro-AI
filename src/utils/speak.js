// src/utils/speak.js

// Speak the given text with optional volume
export const speak = (text, volume = 1) => {
  if (!('speechSynthesis' in window)) {
    console.warn('Text-to-Speech not supported in this browser.');
    return;
  }

  // Stop any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.pitch = 1;
  utterance.rate = 1;
  utterance.volume = Math.min(Math.max(volume, 0), 1); // Clamp volume between 0 and 1

  // Use a default voice if available
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    // Optionally prefer English voices
    const englishVoices = voices.filter(v => v.lang.startsWith('en'));
    utterance.voice = englishVoices[0] || voices[0];
  }

  window.speechSynthesis.speak(utterance);
};

// Stop any speech immediately
export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};
