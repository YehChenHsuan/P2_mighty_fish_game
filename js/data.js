/**
 * ALICE ESL Phonics P2 - 大魚吃小魚英文冒險題庫 (data.js)
 * 課本學習範圍：Page 04 - 09
 * 主題：Daily Activities, Beginning Sounds & Short Vowels
 */

window.BOOK_ID = "P2";
const FISH_QUESTIONS = [
  {
    "id": "fish-qa-1",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 09",
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
    "theme": "Daily Activities, Beginning Sounds & Short Vowels"
  },
  {
    "id": "fish-qa-2",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 09",
    "questionEn": "Do you take the bus to school?",
    "questionZh": "你搭公車去上學嗎？",
    "speechText": "Do you take the bus to school?",
    "options": [
      "Yes, I do.",
      "No, I don't.",
      "Yes, I can."
    ],
    "correct": "Yes, I do.",
    "audioFallback": "P2_flashcards_audios/P2_bus.mp3",
    "theme": "Daily Activities, Beginning Sounds & Short Vowels"
  },
  {
    "id": "fish-qa-3",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 09",
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
    "theme": "Daily Activities, Beginning Sounds & Short Vowels"
  },
  {
    "id": "fish-qa-4",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 09",
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
    "theme": "Daily Activities, Beginning Sounds & Short Vowels"
  },
  {
    "id": "fish-qa-5",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 09",
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
    "theme": "Daily Activities, Beginning Sounds & Short Vowels"
  },
  {
    "id": "fish-qa-6",
    "type": "QA",
    "source": "ALICE ESL Phonics P2 Page 04 - 09",
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
    "theme": "Daily Activities, Beginning Sounds & Short Vowels"
  }
];

if (typeof window !== "undefined") {
  window.FISH_QUESTIONS = FISH_QUESTIONS;
}
