/**
 * ALICE ESL Phonics P2 - Mighty Fish 3D 海底探險題庫資料
 * 課本學習範圍：Page 04 - 10
 * 主題：Daily Activities, Beginning Sounds & Short Vowels
 */

const P2_FISH_QUESTIONS = [
  {
    "id": "fish-qa-1",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 10",
    "questionEn": "Can you brush your teeth?",
    "questionZh": "你會刷牙嗎？",
    "speechText": "Can you brush your teeth?",
    "options": [
      "Yes, I can.",
      "No, I can't.",
      "Yes, I sleep."
    ],
    "correct": "Yes, I can.",
    "audioFallback": "P2_flashcards_audios/P2_brush.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-2",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 10",
    "questionEn": "Can Josh wake up at six?",
    "questionZh": "Josh 六點能起床嗎？",
    "speechText": "Can Josh wake up at six?",
    "options": [
      "Yes, he can.",
      "No, he can't.",
      "Yes, he fly."
    ],
    "correct": "Yes, he can.",
    "audioFallback": "P2_flashcards_audios/P2_bed.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-3",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 10",
    "questionEn": "Which word begins with Bb?",
    "questionZh": "哪一個單字是 Bb 開頭？",
    "speechText": "Which word begins with Bb?",
    "options": [
      "bed",
      "top",
      "milk"
    ],
    "correct": "bed",
    "audioFallback": "P2_flashcards_audios/P2_bed.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-4",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 10",
    "questionEn": "Which word begins with Tt?",
    "questionZh": "哪一個單字是 Tt 開頭？",
    "speechText": "Which word begins with Tt?",
    "options": [
      "teeth",
      "man",
      "walk"
    ],
    "correct": "teeth",
    "audioFallback": "P2_flashcards_audios/P2_teeth.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-5",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 10",
    "questionEn": "Which word has short vowel a?",
    "questionZh": "哪一個單字有短母音 a？",
    "speechText": "Which word has short vowel a?",
    "options": [
      "apple",
      "egg",
      "sun"
    ],
    "correct": "apple",
    "audioFallback": "P2_flashcards_audios/P2_apple.mp3",
    "voiceType": "speech"
  },
  {
    "id": "fish-qa-6",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 10",
    "questionEn": "Which word has short vowel u?",
    "questionZh": "哪一個單字有短母音 u？",
    "speechText": "Which word has short vowel u?",
    "options": [
      "duck",
      "dog",
      "bed"
    ],
    "correct": "duck",
    "audioFallback": "P2_flashcards_audios/P2_duck.mp3",
    "voiceType": "speech"
  }
];

if (typeof window !== "undefined") {
  window.P1_FISH_QUESTIONS = P2_FISH_QUESTIONS;
  window.P2_FISH_QUESTIONS = P2_FISH_QUESTIONS;
  window.P1_QUESTIONS_DATA = P2_FISH_QUESTIONS;
  window.P2_QUESTIONS_DATA = P2_FISH_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_FISH_QUESTIONS: P2_FISH_QUESTIONS,
    P2_FISH_QUESTIONS,
    P1_QUESTIONS_DATA: P2_FISH_QUESTIONS
  };
}
