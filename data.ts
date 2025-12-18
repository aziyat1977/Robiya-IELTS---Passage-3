import { ModuleData, TestData } from './types';

// Consistent Teacher Avatar URL (Professional Female)
const TEACHER_AVATAR_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop";

const vol1TestData: TestData = {
  timerSeconds: 3600,
  passages: [
    {
      id: "p1",
      title: "The Attention Economy",
      content: "<p>In the digital age, attention has become a scarce commodity. Tech companies compete aggressively for user engagement, often employing psychological tactics to maximize time spent on their platforms. This phenomenon, known as the 'attention economy', treats human attention as a tradable asset.</p><p>Critics argue that this commodification leads to the degradation of deep reading and sustained focus. The constant barrage of notifications and algorithmic feeds creates a state of continuous partial attention.</p>",
      questions: [
        {
          id: 1,
          type: "MCQ",
          text: "What is the 'attention economy'?",
          options: ["A system where attention is bought and sold", "A method of focusing deeply", "A digital currency", "A type of economic recession"],
          correctAnswer: "A system where attention is bought and sold",
          explanation: { en: "The text describes it as treating human attention as a 'tradable asset'.", ru: "В тексте это описывается как отношение к человеческому вниманию как к «торгуемому активу».", uz: "Matnda bu inson e'tiboriga 'sotiladigan aktiv' sifatida qarash deb ta'riflangan." }
        },
        {
          id: 2,
          type: "TFNG",
          text: "Tech companies use psychological tactics to reduce screen time.",
          correctAnswer: "FALSE",
          explanation: { en: "The text says they use tactics to 'maximize time spent'.", ru: "В тексте говорится, что они используют тактику, чтобы «максимизировать проведенное время».", uz: "Matnda ular 'sarflangan vaqtni maksimal darajada oshirish' uchun taktikalardan foydalanishlari aytilgan." }
        }
      ]
    }
  ]
};

const vol1: ModuleData = {
  id: "read_vol_1",
  title: "IELTS Academic Vol. 1",
  subtitle: "Ancient Civilizations, Attention Economy & Climate Crisis",
  description: "Full mock test with pre-teaching vocabulary and grammar focus.",
  vocabSection: [
    {
      word: "Rampart",
      avatarUrl: TEACHER_AVATAR_URL,
      definition: {
        en: "A defensive wall of a castle or walled city.",
        ru: "Крепостной вал или защитная стена замка/города.",
        uz: "Qal'a yoki devor bilan o'ralgan shaharning mudofaa devori."
      },
      speakingQuestions: [
        "Describe a historical place you have visited that had walls or ramparts.",
        "Do you think modern cities need defensive structures like ramparts?",
        "How do historical ramparts contribute to tourism in a country?",
        "What kind of protection do modern buildings rely on instead of ramparts?",
        "If you could design a castle, would you include a rampart? Why?"
      ],
      quiz: [
        {
          question: "The soldiers stood on the ____ to watch for approaching enemies.",
          options: ["rampart", "threshold", "ditch", "spire"],
          correct: "rampart"
        },
        {
          question: "The ancient city was surrounded by a massive stone ____.",
          options: ["moat", "rampart", "market", "garden"],
          correct: "rampart"
        }
      ],
      wordFormation: [
         { root: "RAMPART", correct: "ramparts", sentence: "The soldiers patrolled the ____ all night." }
      ]
    },
    {
      word: "Inhospitable",
      avatarUrl: TEACHER_AVATAR_URL,
      definition: {
        en: "(of an environment) harsh and difficult to live in.",
        ru: "(о среде) суровый и непригодный для жизни.",
        uz: "(muhit haqida) yashash uchun qiyin va noqulay."
      },
      speakingQuestions: [
        "What is the most inhospitable place you can imagine visiting?",
        "How have humans adapted to live in inhospitable climates?",
        "Do you prefer hot or cold climates? Which is more inhospitable?",
        "Should humans try to colonize inhospitable planets like Mars?",
        "Describe a time you felt a social situation was inhospitable or unwelcoming."
      ],
      quiz: [
        {
          question: "The desert is an ____ place for humans without modern technology.",
          options: ["inhospitable", "resilient", "nuanced", "welcoming"],
          correct: "inhospitable"
        },
        {
          question: "Due to the extreme cold, the Antarctic is largely ____.",
          options: ["crowded", "inhospitable", "agricultural", "urban"],
          correct: "inhospitable"
        }
      ],
      wordFormation: [
         { root: "HOSPITALITY", correct: "inhospitable", sentence: "The frozen tundra is an ____ environment." },
         { root: "HOSPITABLE", correct: "inhospitable", sentence: "Mars is currently ____ to human life." }
      ]
    },
    {
      word: "Extinguish",
      avatarUrl: TEACHER_AVATAR_URL,
      definition: {
        en: "To cause to cease to exist; to wipe out completely.",
        ru: "Уничтожить; полностью истребить; погасить.",
        uz: "Mavjudligini yo'qotmoq; butunlay yo'q qilmoq; o'chirmoq."
      },
      speakingQuestions: [
        "How do firefighters extinguish dangerous fires?",
        "What steps can we take to ensure endangered species are not extinguished?",
        "Have you ever had a dream or ambition that was extinguished? What happened?",
        "Do you think technology will eventually extinguish traditional reading habits?",
        "Is it important to extinguish campfires completely before leaving a campsite?"
      ],
      quiz: [
        {
          question: "The hope of finding survivors was ____ after a week of searching.",
          options: ["extinguished", "cascading", "proliferated", "ignited"],
          correct: "extinguished"
        },
        {
          question: "Firefighters worked through the night to ____ the blaze.",
          options: ["extinguish", "fuel", "observe", "construct"],
          correct: "extinguish"
        }
      ],
      wordFormation: [
         { root: "EXTINGUISH", correct: "extinguisher", sentence: "Grab the fire ____ quickly!" },
         { root: "EXTINCT", correct: "extinguished", sentence: "The flames were finally ____." }
      ]
    },
    {
      word: "Commodification",
      avatarUrl: TEACHER_AVATAR_URL,
      definition: {
        en: "Treating something (like attention) as a product to be bought and sold.",
        ru: "Превращение чего-либо (например, внимания) в товар для купли-продажи.",
        uz: "Biror narsaga (masalan, e'tiborga) sotiladigan va sotib olinadigan tovar sifatida qarash."
      },
      speakingQuestions: [
        "What is your opinion on the commodification of personal data?",
        "Do you think the commodification of art ruins its artistic value?",
        "How has the commodification of education changed how students learn?",
        "Is it ethical to allow the commodification of natural resources like water?",
        "Discuss how social media leads to the commodification of human attention."
      ],
      quiz: [
        {
          question: "The ____ of personal data is a major concern in the digital age.",
          options: ["commodification", "mitigation", "resilience", "celebration"],
          correct: "commodification"
        },
        {
          question: "Critics argue that the ____ of healthcare puts profits before patients.",
          options: ["healing", "commodification", "research", "structure"],
          correct: "commodification"
        }
      ],
      wordFormation: [
         { root: "COMMODITY", correct: "commodification", sentence: "The ____ of water is a controversial topic." },
         { root: "COMMODIFY", correct: "commodified", sentence: "Art has become increasingly ____." }
      ]
    },
    {
      word: "Irreversible",
      avatarUrl: TEACHER_AVATAR_URL,
      definition: {
        en: "Not possible to undo or alter.",
        ru: "Необратимый; невозможно изменить или отменить.",
        uz: "Ortga qaytarib bo'lmaydigan; o'zgartirib bo'lmaydigan."
      },
      speakingQuestions: [
        "What are some irreversible effects of climate change?",
        "Have you ever made a decision that was irreversible?",
        "Do you think plastic surgery should be irreversible?",
        "How should society deal with irreversible damage to the environment?",
        "Is growing up an irreversible process that we should embrace?"
      ],
      quiz: [
        {
          question: "Scientists warn that climate change may soon reach an ____ point.",
          options: ["irreversible", "inhospitable", "sovereign", "temporary"],
          correct: "irreversible"
        },
        {
          question: "Once the contract is signed, the decision is ____.",
          options: ["flexible", "irreversible", "negotiable", "unknown"],
          correct: "irreversible"
        }
      ],
      wordFormation: [
         { root: "REVERSE", correct: "irreversible", sentence: "The damage to the lungs is ____." },
         { root: "REVERSE", correct: "reversal", sentence: "We saw a sudden ____ of fortune." }
      ]
    }
  ],
  grammarSection: {
    topic: "Nominalization",
    content: {
      en: "Nominalization transforms actions (verbs) and descriptions (adjectives) into concepts (nouns). This creates the 'Academic Tone' required for high IELTS scores.",
      ru: "Номинализация преобразует действия (глаголы) и описания (прилагательные) в понятия (существительные). Это создает «академический тон», необходимый для высоких баллов IELTS.",
      uz: "Nominalizatsiya harakatlarni (fe'llarni) va tavsiflarni (sifatlarni) tushunchalarga (otlarga) aylantiradi. Bu IELTS'da yuqori ball olish uchun talab qilinadigan 'Akademik ohang'ni yaratadi."
    },
    visuals: [
      {
        title: "Verb to Noun Transformation",
        steps: [
          { text: "The population GREW rapidly.", highlightIndices: [2], annotation: "Active Verb" },
          { text: "The rapid GROWTH of the population...", highlightIndices: [2], annotation: "Abstract Noun" }
        ]
      },
      {
        title: "Adjective to Noun Transformation",
        steps: [
          { text: "The chemical is DANGEROUS.", highlightIndices: [3], annotation: "Adjective" },
          { text: "The DANGER of the chemical...", highlightIndices: [1], annotation: "Abstract Noun" }
        ]
      }
    ],
    examples: [
      {
        original: "The population grew rapidly in the 19th century.",
        nominalized: "The rapid <strong>growth</strong> of the population in the 19th century caused overcrowding.",
        explanation: {
          en: "Action 'grew' becomes Concept 'growth'.",
          ru: "Действие 'grew' (росло) становится понятием 'growth' (рост).",
          uz: "'Grew' (o'sdi) harakati 'growth' (o'sish) tushunchasiga aylanadi."
        }
      },
      {
        original: "The chemicals reacted violently when mixed.",
        nominalized: "The violent <strong>reaction</strong> of the chemicals surprised the scientists.",
        explanation: {
          en: "Action 'reacted' becomes Concept 'reaction'.",
          ru: "Действие 'reacted' (реагировали) становится понятием 'reaction' (реакция).",
          uz: "'Reacted' (reaksiyaga kirishdi) harakati 'reaction' (reaksiya) tushunchasiga aylanadi."
        }
      },
      {
        original: "It is difficult to solve this complex problem.",
        nominalized: "The <strong>difficulty</strong> of solving this complex problem cannot be overstated.",
        explanation: {
          en: "Description 'difficult' becomes Concept 'difficulty'.",
          ru: "Описание 'difficult' (трудный) становится понятием 'difficulty' (трудность).",
          uz: "'Difficult' (qiyin) tavsifi 'difficulty' (qiyinchilik) tushunchasiga aylanadi."
        }
      }
    ],
    quiz: [
      {
        question: "",
        correct: "growth",
        original: "The population grew rapidly.",
        transform: "The rapid ____ of the population caused problems.",
        answer: "growth"
      },
      {
        question: "",
        correct: "reaction",
        original: "The chemical reacted violently.",
        transform: "The violent ____ of the chemical shocked the scientists.",
        answer: "reaction"
      },
      {
        question: "",
        correct: "analysis",
        original: "We must analyse the data.",
        transform: "Careful ____ of the data is required.",
        answer: "analysis"
      },
      {
        question: "",
        correct: "consumption",
        original: "Alcohol is consumed excessively.",
        transform: "Excessive ____ of alcohol is a major health risk.",
        answer: "consumption"
      },
      {
        question: "",
        correct: "evolution",
        original: "The species evolved gradually over millions of years.",
        transform: "The gradual ____ of the species took millions of years.",
        answer: "evolution"
      },
      {
        question: "",
        correct: "participation",
        original: "Students participated actively in the lesson.",
        transform: "Active ____ by students is encouraged.",
        answer: "participation"
      },
      {
        question: "",
        correct: "reduction",
        original: "We need to reduce waste.",
        transform: "The ____ of waste is essential.",
        answer: "reduction"
      },
      {
        question: "",
        correct: "emphasis",
        original: "The author emphasized the main point.",
        transform: "The author put ____ on the main point.",
        answer: "emphasis"
      }
    ],
    practiceTests: [
        {
            id: 1,
            title: "Test 1: Nominalization Basics",
            questions: [
                { id: 1, question: "The company expanded rapidly. -> The rapid ____ of the company.", options: ["expand", "expansion", "expanding", "expands"], correct: "expansion", explanation: "Verb 'expand' becomes noun 'expansion'." },
                { id: 2, question: "They decided to leave. -> Their ____ to leave.", options: ["decide", "decision", "decisive", "decided"], correct: "decision", explanation: "Verb 'decide' becomes noun 'decision'." },
                { id: 3, question: "The machine vibrates excessively. -> The excessive ____ of the machine.", options: ["vibrate", "vibrating", "vibration", "vibrant"], correct: "vibration", explanation: "Verb 'vibrate' becomes noun 'vibration'." },
                { id: 4, question: "We must reduce pollution. -> The ____ of pollution is necessary.", options: ["reduce", "reduction", "reducing", "reduced"], correct: "reduction", explanation: "Verb 'reduce' becomes noun 'reduction'." },
                { id: 5, question: "He analyzes the data well. -> His ____ of the data is good.", options: ["analyze", "analytic", "analysis", "analyst"], correct: "analysis", explanation: "Verb 'analyze' becomes noun 'analysis'." },
                { id: 6, question: "The bacteria grew quickly. -> The quick ____ of the bacteria.", options: ["grew", "grow", "growth", "growing"], correct: "growth", explanation: "Verb 'grow' becomes noun 'growth'." },
                { id: 7, question: "It is important to solve this. -> The ____ of this is important.", options: ["solve", "solution", "solving", "solved"], correct: "solution", explanation: "Verb 'solve' becomes noun 'solution'." },
                { id: 8, question: "They argued loudly. -> Their loud ____.", options: ["argue", "argument", "arguing", "argued"], correct: "argument", explanation: "Verb 'argue' becomes noun 'argument'." },
                { id: 9, question: "She performed brilliantly. -> Her brilliant ____.", options: ["perform", "performance", "performing", "performed"], correct: "performance", explanation: "Verb 'perform' becomes noun 'performance'." },
                { id: 10, question: "The bomb exploded. -> The ____ of the bomb.", options: ["explode", "explosive", "explosion", "exploding"], correct: "explosion", explanation: "Verb 'explode' becomes noun 'explosion'." },
                { id: 11, question: "We discussed the issue. -> Our ____ of the issue.", options: ["discuss", "discussion", "discussing", "discussed"], correct: "discussion", explanation: "Verb 'discuss' becomes noun 'discussion'." },
                { id: 12, question: "He behaves badly. -> His bad ____.", options: ["behave", "behavior", "behaving", "behaved"], correct: "behavior", explanation: "Verb 'behave' becomes noun 'behavior'." },
                { id: 13, question: "The sun shines brightly. -> The ____ of the sun.", options: ["shine", "shining", "brightness", "bright"], correct: "brightness", explanation: "Adjective 'bright' becomes noun 'brightness'." },
                { id: 14, question: "It is silent in the library. -> The ____ in the library.", options: ["silent", "silence", "silently", "silencing"], correct: "silence", explanation: "Adjective 'silent' becomes noun 'silence'." },
                { id: 15, question: "She is anxious about the test. -> Her ____ about the test.", options: ["anxious", "anxiety", "anxiously", "anxiousness"], correct: "anxiety", explanation: "Adjective 'anxious' becomes noun 'anxiety'." }
            ]
        },
        {
            id: 2,
            title: "Test 2: Reading Context - Hattusa",
            questions: [
                { id: 1, question: "The city was situated in an inhospitable location. -> The ____ of the city was puzzling.", options: ["situate", "situation", "location", "locating"], correct: "location", explanation: "Referring to where it is situated (noun)." },
                { id: 2, question: "The empire collapsed suddenly. -> The sudden ____ of the empire.", options: ["collapse", "collapsed", "collapsing", "collapsible"], correct: "collapse", explanation: "Verb 'collapse' can be the same noun 'collapse'." },
                { id: 3, question: "Archaeologists discovered the tablets. -> The ____ of the tablets.", options: ["discover", "discovery", "discovering", "discovered"], correct: "discovery", explanation: "Verb 'discover' becomes noun 'discovery'." },
                { id: 4, question: "They corresponded diplomatically. -> Their diplomatic ____.", options: ["correspond", "correspondence", "corresponding", "corresponded"], correct: "correspondence", explanation: "Verb 'correspond' becomes noun 'correspondence'." },
                { id: 5, question: "The region is dry. -> The ____ of the region.", options: ["dry", "dryness", "drying", "dried"], correct: "dryness", explanation: "Adjective 'dry' becomes noun 'dryness'." },
                { id: 6, question: "They adapted to the climate. -> Their ____ to the climate.", options: ["adapt", "adaptation", "adapting", "adapted"], correct: "adaptation", explanation: "Verb 'adapt' becomes noun 'adaptation'." },
                { id: 7, question: "The population starved. -> The population faced ____.", options: ["starve", "starvation", "starving", "starved"], correct: "starvation", explanation: "Verb 'starve' becomes noun 'starvation'." },
                { id: 8, question: "The king died violently. -> The violent ____ of the king.", options: ["die", "death", "dying", "dead"], correct: "death", explanation: "Verb 'die' becomes noun 'death'." },
                { id: 9, question: "They planned carefully. -> Their careful ____.", options: ["plan", "planning", "planned", "planner"], correct: "planning", explanation: "Verb 'plan' becomes noun 'planning'." },
                { id: 10, question: "The walls were visible. -> The ____ of the walls.", options: ["visible", "visibility", "visibly", "vision"], correct: "visibility", explanation: "Adjective 'visible' becomes noun 'visibility'." },
                { id: 11, question: "The river flooded the valley. -> The ____ of the valley.", options: ["flood", "flooding", "flooded", "floods"], correct: "flooding", explanation: "Verb 'flood' becomes noun 'flooding'." },
                { id: 12, question: "They treated the prisoners well. -> The good ____ of the prisoners.", options: ["treat", "treatment", "treating", "treated"], correct: "treatment", explanation: "Verb 'treat' becomes noun 'treatment'." },
                { id: 13, question: "The civilization vanished. -> The ____ of the civilization.", options: ["vanish", "vanishing", "vanished", "vanisher"], correct: "vanishing", explanation: "Verb 'vanish' becomes noun 'vanishing' (gerund/noun)." },
                { id: 14, question: "The text was translated. -> The ____ of the text.", options: ["translate", "translation", "translating", "translated"], correct: "translation", explanation: "Verb 'translate' becomes noun 'translation'." },
                { id: 15, question: "The empire was stable. -> The ____ of the empire.", options: ["stable", "stability", "stably", "stabilize"], correct: "stability", explanation: "Adjective 'stable' becomes noun 'stability'." }
            ]
        },
        { id: 3, title: "Test 3: Attention Economy", questions: [{ id: 1, question: "Advertisers capture attention. -> The ____ of attention.", options: ["capture", "capturing", "captured", "captures"], correct: "capture", explanation: "Verb 'capture' as noun." }] },
        { id: 4, title: "Test 4: Climate Crisis", questions: [{ id: 1, question: "The earth is warming. -> Global ____.", options: ["warm", "warming", "warmth", "warms"], correct: "warming", explanation: "Verb 'warm' becomes noun 'warming'." }] },
        { id: 5, title: "Test 5: Advanced Nominalization", questions: [{ id: 1, question: "It is complex. -> The ____ of it.", options: ["complex", "complexity", "complexly", "complexion"], correct: "complexity", explanation: "Adjective 'complex' becomes noun 'complexity'." }] }
    ]
  },
  testData: vol1TestData
};

const vol2TestData: TestData = {
  timerSeconds: 3600,
  passages: [
    {
      id: "p1_v2",
      title: "Monarch Butterfly Migration",
      content: "<p>The monarch butterfly is known for its incredible migration from Canada and the US to Mexico. However, the exact mechanism they use to navigate has been a mystery. Recent research suggests that a specific gene allows them to use the sun's position to orient themselves.</p><p>Unfortunately, the monarch population has declined precipitously. Illegal logging in Mexico and the loss of milkweed plants in the US have contributed to this decline.</p>",
      questions: [
        {
          id: 1,
          type: "TFNG",
          text: "Monarch butterflies migrate to Mexico every winter.",
          correctAnswer: "TRUE",
          explanation: { en: "The text states they migrate 'from Canada and the US to Mexico'.", ru: "В тексте говорится, что они мигрируют 'из Канады и США в Мексику'.", uz: "Matnda ular 'Kanada va AQShdan Meksikaga' ko'chib o'tishlari aytilgan." }
        },
        {
          id: 2,
          type: "GAP_FILL",
          text: "The monarch population has fallen ____ due to habitat loss.",
          limit: "ONE_WORD",
          correctAnswer: "precipitously",
          explanation: { en: "The text says the population has 'declined precipitously'.", ru: "В тексте говорится, что популяция 'стремительно сократилась'.", uz: "Matnda aholi soni 'keskin kamaygani' aytilgan." }
        }
      ]
    }
  ]
};

const vol2: ModuleData = {
    id: "read_vol_2",
    title: "IELTS Academic Vol. 2",
    subtitle: "Monarch Migration, The Bilingual Brain & Sleep Mechanics",
    description: "Advanced vocabulary for neuroscience and nature.",
    vocabSection: [
      {
        word: "Hone",
        avatarUrl: TEACHER_AVATAR_URL,
        definition: {
          en: "To sharpen or refine (a skill or object) over a period of time.",
          ru: "Оттачивать или совершенствовать (навык или предмет) в течение определенного периода времени.",
          uz: "Vaqt o'tishi bilan (ko'nikma yoki narsani) charxlamoq yoki takomillashtirmoq."
        },
        speakingQuestions: [
          "What skills are you trying to hone right now?",
          "How can a musician hone their craft?",
          "Is it better to hone one skill or learn many?",
          "Does competition help athletes hone their abilities?",
          "Describe a time you honed a specific talent."
        ],
        quiz: [
           {
              question: "Over years of practice, she ____ her skills to perfection.",
              options: ["honed", "rusted", "forgot", "broke"],
              correct: "honed"
           }
        ],
        wordFormation: [
            { root: "HONE", correct: "honing", sentence: "He spent years ____ his craft." }
        ]
      },
      {
        word: "Precipitously",
        avatarUrl: TEACHER_AVATAR_URL,
        definition: {
          en: "Very steeply; (of a decline) sudden and dramatic.",
          ru: "Очень круто; (о снижении) внезапно и драматично.",
          uz: "Juda tik; (pasayish haqida) to'satdan va keskin."
        },
        speakingQuestions: [
           "Why might a company's stock price drop precipitously?",
           "Have you ever seen the temperature drop precipitously?",
           "Describe a mountain path that rises precipitously.",
           "What happens if a population falls precipitously?",
           "Is it dangerous to drive down a precipitously steep hill?"
        ],
        quiz: [
           {
              question: "The company's profits dropped ____ after the scandal.",
              options: ["precipitously", "slowly", "gently", "upward"],
              correct: "precipitously"
           }
        ],
        wordFormation: [
            { root: "PRECIPITOUS", correct: "precipitously", sentence: "The road dropped ____ into the valley." },
            { root: "PRECIPICE", correct: "precipitous", sentence: "It was a ____ drop." }
        ]
      },
      {
        word: "Expenditure",
        avatarUrl: TEACHER_AVATAR_URL,
        definition: {
          en: "The action of spending funds or using energy.",
          ru: "Расходование средств или использование энергии.",
          uz: "Mablag' sarflash yoki energiya ishlatish harakati."
        },
        speakingQuestions: [
           "What is your biggest monthly expenditure?",
           "How can governments reduce public expenditure?",
           "Does exercise require a high energy expenditure?",
           "Is expenditure on education a good investment?",
           "How do you track your daily expenditures?"
        ],
        quiz: [
           {
              question: "Athletes must manage their energy ____ during a marathon.",
              options: ["expenditure", "income", "sleep", "diet"],
              correct: "expenditure"
           }
        ],
        wordFormation: [
            { root: "EXPEND", correct: "expenditure", sentence: "The government needs to cut ____." },
            { root: "EXPENSE", correct: "expensive", sentence: "It is too ____." }
        ]
      },
      {
        word: "Respiration",
        avatarUrl: TEACHER_AVATAR_URL,
        definition: {
          en: "The action of breathing.",
          ru: "Дыхание.",
          uz: "Nafas olish jarayoni."
        },
        speakingQuestions: [
           "Why is deep respiration important for relaxation?",
           "How does exercise affect your respiration rate?",
           "Do plants undergo respiration?",
           "What happens to respiration at high altitudes?",
           "How do fish differ in respiration compared to humans?"
        ],
        quiz: [
           {
              question: "The doctor checked the patient's ____ rate.",
              options: ["respiration", "financial", "reading", "walking"],
              correct: "respiration"
           }
        ],
        wordFormation: [
            { root: "RESPIRE", correct: "respiration", sentence: "Artificial ____ was administered." },
            { root: "RESPIRE", correct: "respiratory", sentence: "It is a ____ disease." }
        ]
      },
      {
        word: "Invertebrate",
        avatarUrl: TEACHER_AVATAR_URL,
        definition: {
           en: "An animal lacking a backbone (e.g., insects, spiders).",
           ru: "Беспозвоночное животное (например, насекомые, пауки).",
           uz: "Umurtqasiz hayvon (masalan, hasharotlar, o'rgimchaklar)."
        },
        speakingQuestions: [
           "Name a common invertebrate found in gardens.",
           "Are you afraid of any invertebrates like spiders?",
           "Why are invertebrates important to the ecosystem?",
           "Do you enjoy eating invertebrates like shrimp or crab?",
           "How do invertebrates protect themselves without bones?"
        ],
        quiz: [
           {
              question: "The butterfly is a type of ____, meaning it has no spine.",
              options: ["invertebrate", "mammal", "bird", "fish"],
              correct: "invertebrate"
           }
        ],
        wordFormation: [
            { root: "VERTEBRATE", correct: "invertebrate", sentence: "A jellyfish is an ____." },
            { root: "VERTEBRA", correct: "vertebrates", sentence: "Humans are ____." }
        ]
      },
      {
        word: "Cognitive",
        avatarUrl: TEACHER_AVATAR_URL,
        definition: {
           en: "Relating to the mental action or process of acquiring knowledge and understanding.",
           ru: "Относящийся к познанию, мышлению и приобретению знаний.",
           uz: "Bilim va tushunchani egallashning aqliy jarayoniga oid."
        },
        speakingQuestions: [
           "How do puzzles help cognitive development?",
           "Does sleep affect your cognitive abilities?",
           "What activities boost cognitive function in the elderly?",
           "Is cognitive ability determined by genetics?",
           "How does technology impact our cognitive skills?"
        ],
        quiz: [
           {
              question: "Mental processes like thinking and remembering are ____ functions.",
              options: ["cognitive", "physical", "emotional", "social"],
              correct: "cognitive"
           }
        ],
        wordFormation: [
            { root: "COGNITION", correct: "cognitive", sentence: "The test measures ____ ability." },
            { root: "RECOGNIZE", correct: "recognition", sentence: "Facial ____ technology." }
        ]
      },
      {
         word: "Dementia",
         avatarUrl: TEACHER_AVATAR_URL,
         definition: {
            en: "A chronic or persistent disorder of the mental processes caused by brain disease or injury.",
            ru: "Слабоумие; хроническое расстройство психических процессов.",
            uz: "Aqliy jarayonlarning surunkali buzilishi; aql zaifligi."
         },
         speakingQuestions: [
            "How can society support people with dementia?",
            "What are the early signs of dementia?",
            "Can a healthy lifestyle prevent dementia?",
            "Is memory loss always a sign of dementia?",
            "How does dementia affect families?"
         ],
         quiz: [
            {
               question: "A decline in mental ability severe enough to interfere with daily life is called ____.",
               options: ["dementia", "flu", "tiredness", "hunger"],
               correct: "dementia"
            }
         ],
         wordFormation: [
             { root: "MENTAL", correct: "dementia", sentence: "The patient suffers from ____." }
         ]
      },
      {
         word: "Onset",
         avatarUrl: TEACHER_AVATAR_URL,
         definition: {
            en: "The beginning of something, especially something unpleasant.",
            ru: "Начало (обычно чего-то неприятного, например, болезни).",
            uz: "Boshlanish (ayniqsa, yoqimsiz narsaning)."
         },
         speakingQuestions: [
            "What signals the onset of winter in your country?",
            "How can you delay the onset of fatigue during exercise?",
            "Did the onset of the internet change the world?",
            "What do you do at the onset of a headache?",
            "Is the onset of old age something to fear?"
         ],
         quiz: [
            {
               question: "The ____ of the disease was marked by a high fever.",
               options: ["onset", "end", "middle", "cure"],
               correct: "onset"
            }
         ],
         wordFormation: [
             { root: "SET", correct: "onset", sentence: "The sudden ____ of rain ruined the picnic." }
         ]
      },
      {
         word: "Inhibition",
         avatarUrl: TEACHER_AVATAR_URL,
         definition: {
            en: "The ability to suppress or restrain an impulse or automatic response.",
            ru: "Торможение; способность подавлять импульс или реакцию.",
            uz: "To'xtatib turish; impuls yoki avtomatik javobni bostirish qobiliyati."
         },
         speakingQuestions: [
            "Do you have any inhibitions about public speaking?",
            "Does alcohol lower a person's inhibitions?",
            "Is inhibition important for social behavior?",
            "How do children learn inhibition and self-control?",
            "Can too much inhibition stop you from having fun?"
         ],
         quiz: [
            {
               question: "The ability to stop yourself from doing something automatic is called ____.",
               options: ["inhibition", "action", "freedom", "speed"],
               correct: "inhibition"
            }
         ],
         wordFormation: [
             { root: "INHIBIT", correct: "inhibition", sentence: "Social ____ prevented him from dancing." },
             { root: "INHIBIT", correct: "uninhibited", sentence: "She laughed in an ____ way." }
         ]
      },
      {
         word: "Consolidate",
         avatarUrl: TEACHER_AVATAR_URL,
         definition: {
            en: "To make stronger or more solid; in memory, to stabilize a memory trace.",
            ru: "Укреплять; объединять; закреплять (память).",
            uz: "Mustahkamlamoq; birlashtirmoq; (xotirani) barqarorlashtirmoq."
         },
         speakingQuestions: [
            "How do you consolidate what you learn in class?",
            "Why do companies consolidate their debts?",
            "Does sleep help consolidate memories?",
            "How can a leader consolidate their power?",
            "Is it better to consolidate steps in a process?"
         ],
         quiz: [
            {
               question: "To ____ a memory means to stabilize it in the brain.",
               options: ["consolidate", "forget", "erase", "ignore"],
               correct: "consolidate"
            }
         ],
         wordFormation: [
             { root: "SOLID", correct: "consolidate", sentence: "We must ____ our position." },
             { root: "CONSOLIDATE", correct: "consolidation", sentence: "Memory ____ occurs during sleep." }
         ]
      }
    ],
    grammarSection: {
      topic: "Participle Clauses",
      content: {
        en: "Participle clauses enable writers to pack more information into a single sentence by reducing relative clauses. They are a hallmark of advanced academic writing.",
        ru: "Причастные обороты позволяют авторам упаковать больше информации в одно предложение, сокращая относительные придаточные предложения. Это признак продвинутого академического письма.",
        uz: "Sifatdosh oborotlari yozuvchilarga nisbiy gaplarni qisqartirish orqali bitta gapga ko'proq ma'lumot joylashtirish imkonini beradi. Ular ilg'or akademik yozuvning belgisidir."
      },
      visuals: [
        {
          title: "Active Participle Clause",
          steps: [
            { text: "The study WHICH FOUND new evidence...", highlightIndices: [2, 3], annotation: "Relative Clause" },
            { text: "The study FINDING new evidence...", highlightIndices: [2], annotation: "Present Participle" }
          ]
        },
        {
          title: "Passive Participle Clause",
          steps: [
            { text: "The gene WHICH WAS FOUND in monarchs...", highlightIndices: [2, 3, 4], annotation: "Relative Clause" },
            { text: "The gene FOUND in monarchs...", highlightIndices: [2], annotation: "Past Participle" }
          ]
        }
      ],
      examples: [
        {
            original: "Learning or experiencing new things activates neurons which are vital for memory.",
            nominalized: "Learning or experiencing new things activates neurons <strong>vital</strong> for memory.",
            explanation: {
                en: "Reduced 'which are vital' to just 'vital' (adjective phrase) or participle.",
                ru: "Сокращено 'which are vital' до просто 'vital' (фраза прилагательного) или причастия.",
                uz: "'Which are vital' qisqartirilib, shunchaki 'vital' (sifat so'z birikmasi) yoki sifatdosh shakliga keltirildi."
            }
        },
        {
            original: "The researchers, who had implanted electrodes, could observe activity.",
            nominalized: "The researchers, <strong>having implanted</strong> electrodes, could observe activity.",
            explanation: {
                en: "Active Perfect Participle replaces 'who had implanted'.",
                ru: "Активное совершенное причастие заменяет 'who had implanted'.",
                uz: "Faol tugallangan sifatdosh 'who had implanted' o'rnini bosadi."
            }
        },
        {
             original: "Because they wanted to test the theory, they designed an experiment.",
             nominalized: "<strong>Wanting</strong> to test the theory, they designed an experiment.",
             explanation: {
                 en: "'Wanting' replaces 'Because they wanted'.",
                 ru: "'Wanting' заменяет 'Because they wanted'.",
                 uz: "'Wanting' so'zi 'Because they wanted' o'rnini bosadi."
             }
        }
      ],
      quiz: [
        {
            question: "",
            correct: "released",
            original: "The study, which was released on Wednesday...",
            transform: "The study, ____ on Wednesday...",
            answer: "released"
        },
        {
            question: "",
            correct: "working",
            original: "The scientists who were working in the lab...",
            transform: "The scientists ____ in the lab...",
            answer: "working"
        },
        {
            question: "",
            correct: "Wanting",
            original: "Because they wanted to test the theory...",
            transform: "____ to test the theory...",
            answer: "Wanting"
        },
        {
            question: "",
            correct: "responsible",
            original: "The gene that is responsible for the color...",
            transform: "The gene ____ for the color...",
            answer: "responsible"
        },
        {
            question: "",
            correct: "built",
            original: "The city, which is built into the rock...",
            transform: "The city, ____ into the rock...",
            answer: "built"
        },
        {
            question: "",
            correct: "Having finished",
            original: "After they had finished the report...",
            transform: "____ the report...",
            answer: "Having finished"
        }
      ],
      practiceTests: [
        {
            id: 1,
            title: "Test 1: Participle Clause Basics",
            questions: [
                { id: 1, question: "The man ____ (sit) next to me is my brother.", options: ["sit", "sat", "sitting", "sits"], correct: "sitting", explanation: "Active participle replacing 'who is sitting'." },
                { id: 2, question: "____ (exhaust) by the work, he fell asleep.", options: ["Exhaust", "Exhausting", "Exhausted", "Exhausts"], correct: "Exhausted", explanation: "Passive participle replacing 'Because he was exhausted'." },
                { id: 3, question: "____ (see) the accident, I called the police.", options: ["Seeing", "Saw", "Seen", "Sees"], correct: "Seeing", explanation: "Active participle replacing 'Because I saw'." },
                { id: 4, question: "The book ____ (write) by him is famous.", options: ["writing", "write", "written", "wrote"], correct: "written", explanation: "Passive participle replacing 'which was written'." },
                { id: 5, question: "____ (not want) to hurt her feelings, he lied.", options: ["Not wanting", "Not wanted", "No want", "Not wants"], correct: "Not wanting", explanation: "Negative active participle." },
                { id: 6, question: "The city ____ (locate) in the mountains is beautiful.", options: ["locate", "locating", "located", "locates"], correct: "located", explanation: "Passive participle replacing 'which is located'." },
                { id: 7, question: "____ (have) finished his homework, he went out.", options: ["Have", "Having", "Had", "Has"], correct: "Having", explanation: "Perfect participle replacing 'After he had'." },
                { id: 8, question: "The train ____ (arrive) at platform 5 is the 10:30.", options: ["arrive", "arrived", "arriving", "arrives"], correct: "arriving", explanation: "Active participle replacing 'which is arriving'." },
                { id: 9, question: "____ (shock) by the news, she cried.", options: ["Shocking", "Shocked", "Shock", "Shocks"], correct: "Shocked", explanation: "Passive participle replacing 'Because she was shocked'." },
                { id: 10, question: "The girl ____ (wear) the red dress is my sister.", options: ["wore", "worn", "wearing", "wears"], correct: "wearing", explanation: "Active participle replacing 'who is wearing'." },
                { id: 11, question: "____ (know) the answer, he raised his hand.", options: ["Knowing", "Known", "Knew", "Knows"], correct: "Knowing", explanation: "Active participle replacing 'Because he knew'." },
                { id: 12, question: "The money ____ (steal) from the bank was never found.", options: ["steal", "stealing", "stolen", "stole"], correct: "stolen", explanation: "Passive participle replacing 'which was stolen'." },
                { id: 13, question: "____ (look) after carefully, the plant will grow.", options: ["Looking", "Looked", "Looks", "Look"], correct: "Looked", explanation: "Passive participle replacing 'If it is looked after'." },
                { id: 14, question: "The questions ____ (discuss) in the meeting were difficult.", options: ["discussing", "discuss", "discussed", "discusses"], correct: "discussed", explanation: "Passive participle replacing 'which were discussed'." },
                { id: 15, question: "____ (be) a doctor, he knew what to do.", options: ["Is", "Been", "Being", "Be"], correct: "Being", explanation: "Participle 'Being' replacing 'Because he was'." }
            ]
        },
        {
            id: 2,
            title: "Test 2: Reading Context - Monarchs",
            questions: [
                { id: 1, question: "The butterfly, ____ (travel) from Mexico, arrived in Canada.", options: ["travel", "travelled", "traveling", "travels"], correct: "traveling", explanation: "Active participle describing the butterfly." },
                { id: 2, question: "The study ____ (release) by the university is important.", options: ["releasing", "release", "released", "releases"], correct: "released", explanation: "Passive participle replacing 'which was released'." },
                { id: 3, question: "____ (hone) by natural selection, the butterfly flies efficiently.", options: ["Honing", "Honed", "Hones", "Hone"], correct: "Honed", explanation: "Passive participle replacing 'Because it was honed'." },
                { id: 4, question: "The gene ____ (find) in the monarchs is unique.", options: ["finding", "find", "found", "finds"], correct: "found", explanation: "Passive participle replacing 'which was found'." },
                { id: 5, question: "____ (compare) the genomes, researchers found a link.", options: ["Compared", "Comparing", "Compares", "Compare"], correct: "Comparing", explanation: "Active participle replacing 'When they compared'." }
            ]
        }
    ]
  },
  testData: vol2TestData
};

export const readingModules: Record<string, ModuleData> = { vol1, vol2 };
