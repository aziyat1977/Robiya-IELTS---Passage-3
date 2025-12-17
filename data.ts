import { ModuleData } from './types';

// Consistent Teacher Avatar URL (Professional Female)
const TEACHER_AVATAR_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop";

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
    ]
  },
  testData: {
    timerSeconds: 3600,
    passages: [
      {
        id: "p1",
        title: "Passage 1: The Ancient Empire That Civilization Forgot",
        content: "<p class='mb-4'>At its height, the ancient city of Hattusa must have been awe-inspiring. Built into a steep hillside in what is today central Turkey, the city was ringed by tall brick walls and home to vast temple complexes and an imposing stone rampart visible from miles away. Today, however, the hillside is home to a mystery. No pillars or high walls mark the ruins of the palace and temples that once stood—just stone foundations half-covered by dry grass. The mud-brick walls have crumbled over the centuries, and floods have eroded the original hillside, sending buildings full of clay tablets cascading down the slopes.</p><p class='mb-4'>These are the remains of the Hittite Empire, a civilization that, around 1200 B.C., rivaled ancient Egypt and Babylon. For at least 450 years, the Hittites controlled much of modern-day Turkey and beyond, from the Black Sea to the Mediterranean. They built sophisticated cities, authored massive archives of cuneiform tablets, and their kings benefited from trade routes that reached far beyond their homeland. Their armies even penetrated deep into Mesopotamia, and their tangle with Egypt’s Pharaoh Ramses II at the Battle of Kadesh resulted in the world’s first recorded peace treaty.</p><p class='mb-4'>Yet, around 1180 B.C., the Hittites vanished with few parallels in history. The Egyptians and Assyrians remained part of historical memory, but the Hittites were extinguished completely. Scholars didn't even register their existence until 3,000 years later, when carvings at ancient Egyptian temples and diplomatic correspondence discovered on clay tablets set off an international hunt for the location of their capital. Digs in the early 1900s finally unearthed a trove of clay cuneiform tablets confirming suspicions that Hattusa was the lost Hittite capital.</p><p class='mb-4'>One question that has long puzzled archaeologists is why the Hittites situated their capital in such an inhospitable location. Hattusa sits in a land of extremes, with scorching summers and frigid winters. Freshwater springs are abundant in the rocky mountains nearby, but the region's few plains are bone-dry most of the year. Recent close readings of Hittite texts, combined with environmental data, show that droughts gripped the region every few decades, pushing populations to the brink of starvation. Despite this, the Hittites built a complex society. Andreas Schachner, of the German Archaeological Institute, suggests their resilience was due to a combination of adaptation and planning. They managed to squeeze more out of the land than anyone before, herding tens of thousands of sheep and goats to provide a reliable food source when crops failed.</p><p class='mb-4'>The empire’s collapse remains a subject of debate. Theories range from political unrest to climate change. Schachner argues there was likely no single reason, but rather a 'perfect storm' of factors. Raiders known as the Kaska were a constant threat from the north. Natural disasters, including powerful earthquakes, regularly rocked the heartland. By about 1250 B.C., palace infighting and royal assassinations grew rampant. Finally, a severe and prolonged drought may have been the breaking point, leading to the abandonment of the capital. Unlike other cities that were sacked and burned, Hattusa appears to have been emptied out slowly, its valuable items taken by the departing rulers, leaving only the heavy stone monuments behind.</p>",
        questions: [
          { 
            id: 1, 
            type: "TFNG", 
            text: "The ruins of Hattusa are currently marked by tall pillars and high walls that are still standing.", 
            correctAnswer: "FALSE",
            explanation: {
              en: "The passage states: 'No pillars or high walls mark the ruins... just stone foundations half-covered by dry grass.' This directly contradicts the statement that pillars and walls are still standing.",
              ru: "В отрывке сказано: «Никакие колонны или высокие стены не отмечают руины... только каменные фундаменты, наполовину покрытые сухой травой». Это прямо противоречит утверждению, что столбы и стены все еще стоят.",
              uz: "Matnda aytilishicha: 'Xarobalarda ustunlar yoki baland devorlar yo'q ... faqat quruq o't bilan qoplangan tosh poydevorlar.' Bu ustunlar va devorlarning hamon tik turganligi haqidagi bayonotga mutlaqo zid."
            }
          },
          { 
            id: 2, 
            type: "TFNG", 
            text: "The Hittite Empire was less powerful than the Egyptian and Babylonian empires during its peak.", 
            correctAnswer: "FALSE",
            explanation: {
              en: "Paragraph 2 states that the Hittite Empire 'rivaled ancient Egypt and Babylon.' 'Rivaled' means they were comparable in power, not less powerful.",
              ru: "В параграфе 2 говорится, что Хеттская империя «соперничала с древним Египтом и Вавилоном». «Соперничала» означает, что они были сопоставимы по силе, а не менее мощны.",
              uz: "2-paragrafda Xet imperiyasi 'qadimgi Misr va Bobil bilan raqobatlashgani' aytiladi. 'Raqobatlashgan' degani ular kuch jihatidan kam bo'lmagan, balki teng bo'lganligini anglatadi."
            }
          },
          { 
            id: 3, 
            type: "TFNG", 
            text: "The Battle of Kadesh led to the creation of the first known peace treaty in history.", 
            correctAnswer: "TRUE",
            explanation: {
              en: "Paragraph 2 explicitly states: 'their tangle with Egypt’s Pharaoh Ramses II at the Battle of Kadesh resulted in the world’s first recorded peace treaty.'",
              ru: "В параграфе 2 прямо сказано: «их столкновение с египетским фараоном Рамсесом II в битве при Кадеше привело к первому в мире записанному мирному договору».",
              uz: "2-paragrafda aniq aytilgan: 'Qadesh jangida Misr fir'avni Ramses II bilan to'qnashuvi dunyodagi birinchi yozma tinchlik shartnomasiga olib keldi'."
            }
          },
          { 
            id: 4, 
            type: "TFNG", 
            text: "Archaeological excavations in the early 20th century confirmed the location of the Hittite capital.", 
            correctAnswer: "TRUE",
            explanation: {
              en: "Paragraph 3 mentions: 'Digs in the early 1900s finally unearthed a trove... confirming suspicions that Hattusa was the lost Hittite capital.' Early 1900s corresponds to the early 20th century.",
              ru: "В параграфе 3 упоминается: «Раскопки в начале 1900-х годов наконец обнаружили клад... подтвердив подозрения, что Хаттуса была потерянной хеттской столицей». Начало 1900-х годов соответствует началу 20-го века.",
              uz: "3-paragrafda aytilishicha: '1900-yillarning boshidagi qazishmalar xazinani ochdi... Xattusa yo'qolgan Xet poytaxti ekanligini tasdiqladi'. 1900-yillarning boshlari 20-asrning boshlariga to'g'ri keladi."
            }
          },
          { 
            id: 5, 
            type: "TFNG", 
            text: "The Hittite capital was located in an area with a mild climate and consistent rainfall.", 
            correctAnswer: "FALSE",
            explanation: {
              en: "Paragraph 4 describes Hattusa as sitting in 'a land of extremes, with scorching summers and frigid winters' and notes the region's plains are 'bone-dry most of the year,' which contradicts 'mild climate and consistent rainfall'.",
              ru: "В параграфе 4 Хаттуса описывается как находящаяся в «земле крайностей, с палящим летом и ледяной зимой», и отмечается, что равнины региона «совершенно сухие большую часть года», что противоречит «мягкому климату и постоянным осадкам».",
              uz: "4-paragrafda Xattusa 'yozda jazirama va qishda ayozli, keskin iqlimli yerda' joylashgani tasvirlangan va mintaqadagi tekisliklar 'yilning katta qismida quruq' ekanligi aytilgan, bu esa 'yumshoq iqlim va doimiy yog'ingarchilik'ka ziddir."
            }
          },
          { 
            id: 6, 
            type: "GAP_FILL", 
            text: "For centuries, the Hittites were forgotten, unlike the ____ or Assyrians who remained in history books.", 
            limit: "ONE_WORD", 
            correctAnswer: "Egyptians",
            explanation: {
              en: "Paragraph 3 states: 'The Egyptians and Assyrians remained part of historical memory, but the Hittites were extinguished completely.' The gap requires the other civilization mentioned alongside Assyrians.",
              ru: "В параграфе 3 говорится: «Египтяне и ассирийцы остались частью исторической памяти, но хетты были полностью уничтожены». В пропуске требуется другая цивилизация, упомянутая наряду с ассирийцами.",
              uz: "3-paragrafda aytilishicha: 'Misrliklar va Ossuriyaliklar tarixiy xotiraning bir qismi bo'lib qolishdi, ammo Xetlar butunlay yo'q bo'lib ketishdi'. Bo'sh joyga Ossuriyaliklar bilan birga tilga olingan boshqa sivilizatsiya kerak."
            }
          },
          { 
            id: 7, 
            type: "GAP_FILL", 
            text: "Evidence of their existence was first found in carvings on Egyptian ____ and in diplomatic letters.", 
            limit: "ONE_WORD", 
            correctAnswer: "temples",
            explanation: {
              en: "Paragraph 3 mentions 'carvings at ancient Egyptian temples' as one of the sources that set off the hunt for the Hittites.",
              ru: "В параграфе 3 упоминаются «резьба на древнеегипетских храмах» как один из источников, который начал поиски хеттов.",
              uz: "3-paragrafda Xetlarni qidirishni boshlashga sabab bo'lgan manbalardan biri sifatida 'qadimgi Misr ibodatxonalaridagi o'yma naqshlar' tilga olingan."
            }
          },
          { 
            id: 8, 
            type: "GAP_FILL", 
            text: "The confirmation of Hattusa as the capital came from the discovery of ____ tablets.", 
            limit: "ONE_WORD", 
            correctAnswer: "clay",
            explanation: {
              en: "Paragraph 3 concludes by saying digs unearthed a 'trove of clay cuneiform tablets confirming suspicions'.",
              ru: "Параграф 3 завершается тем, что раскопки обнаружили «клад глиняных клинописных табличек, подтверждающих подозрения».",
              uz: "3-paragraf qazishmalar natijasida 'shubhalarni tasdiqlovchi sopol mixxat yozuvlari xazinasi' topilganligi bilan yakunlanadi."
            }
          },
          { 
            id: 9, 
            type: "GAP_FILL", 
            text: "The city’s location was puzzling because the nearby plains were ____ for most of the year.", 
            limit: "ONE_WORD", 
            correctAnswer: "dry",
            explanation: {
              en: "Paragraph 4 states: 'the region's few plains are bone-dry most of the year.' The word 'dry' (or 'bone-dry') fits the gap.",
              ru: "В параграфе 4 говорится: «немногочисленные равнины региона совершенно сухие большую часть года». Слово «dry» (сухой) подходит для пропуска.",
              uz: "4-paragrafda aytilishicha: 'mintaqaning kam sonli tekisliklari yilning ko'p qismida quruq' bo'ladi. 'Dry' (quruq) so'zi bo'sh joyga mos keladi."
            }
          },
          { 
            id: 10, 
            type: "SHORT_ANSWER", 
            text: "What animals did the Hittites herd to ensure they had food during crop failures?", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "sheep and goats",
            explanation: {
              en: "Paragraph 4 mentions they herded 'tens of thousands of sheep and goats to provide a reliable food source when crops failed'.",
              ru: "В параграфе 4 упоминается, что они пасли «десятки тысяч овец и коз, чтобы обеспечить надежный источник пищи при неурожае».",
              uz: "4-paragrafda ular 'hosil bo'lmaganda ishonchli oziq-ovqat manbaini ta'minlash uchun o'n minglab qo'y va echkilarni' boqqanliklari aytiladi."
            }
          },
          { 
            id: 11, 
            type: "SHORT_ANSWER", 
            text: "Who were the northern raiders that constantly threatened the Hittite Empire?", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "The Kaska",
            explanation: {
              en: "Paragraph 5 identifies 'Raiders known as the Kaska were a constant threat from the north.'",
              ru: "В параграфе 5 говорится: «Налетчики, известные как Каска, были постоянной угрозой с севера».",
              uz: "5-paragrafda 'Kaska deb nomlanuvchi bosqinchilar shimoldan doimiy tahdid bo'lgan' deb ko'rsatilgan."
            }
          },
          { 
            id: 12, 
            type: "SHORT_ANSWER", 
            text: "Besides human conflict, what natural phenomenon frequently damaged the Hittite heartland?", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "earthquakes",
            explanation: {
              en: "Paragraph 5 lists natural disasters, specifically stating 'powerful earthquakes, regularly rocked the heartland'.",
              ru: "В параграфе 5 перечисляются стихийные бедствия, в частности говорится: «мощные землетрясения регулярно сотрясали сердце страны».",
              uz: "5-paragrafda tabiiy ofatlar sanab o'tiladi, xususan 'kuchli zilzilalar markaziy hududlarni muntazam larzaga keltirgani' aytiladi."
            }
          },
          { 
            id: 13, 
            type: "SHORT_ANSWER", 
            text: "What is the abandonment of Hattusa compared to, given that valuable items were removed?", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "emptied out slowly",
            explanation: {
              en: "Paragraph 5 states Hattusa 'appears to have been emptied out slowly... leaving only the heavy stone monuments behind'.",
              ru: "В параграфе 5 говорится, что Хаттуса «похоже, медленно опустела... оставив после себя только тяжелые каменные памятники».",
              uz: "5-paragrafda Xattusa 'sekin-asta bo'shab qolgandek... faqat og'ir tosh yodgorliklar qoldirilgan' deyiladi."
            }
          }
        ]
      },
      {
        id: "p2",
        title: "Passage 2: The Economics of Attention",
        content: "<p class='mb-4'><strong>A</strong> If you are not paying for the product, the adage goes, then you are the product. This cliché of the internet age has never been truer than it is today. In the early days of the web, the 'attention economy' was a niche concept discussed by sociologists. Today, it is the financial bedrock of the world’s largest companies. The giants of Silicon Valley do not primarily sell software or devices; they sell the certainty that a user’s gaze will linger on a specific pixel for a specific duration. This commodification of attention has profound implications for economics, psychology, and the fabric of society.</p><p class='mb-4'><strong>B</strong> The fundamental constraint of the information age is not information itself, which is now effectively infinite, but the mental capacity to process it. Herbert Simon, an economist and Nobel laureate, predicted this in 1971. He noted that 'a wealth of information creates a poverty of attention.' As content proliferates, the value of attention rises. Platforms compete ferociously for this finite resource, employing 'persuasive design' techniques rooted in behavioral psychology. Variable rewards, infinite scrolling, and notification badges are not accidental design choices; they are calibrated mechanisms intended to exploit the brain’s dopamine reward loops.</p><p class='mb-4'><strong>C</strong> From an economic perspective, this market suffers from significant externalities. Just as a factory might pollute a river without paying for the cleanup, social media platforms pollute the cognitive environment without bearing the cost. The 'pollution' manifests as fragmented concentration, reduced productivity, and the erosion of deep reading skills. The cost is borne by individuals, who find themselves unable to focus, and by employers, who lose billions of dollars annually to distracted workforces. Furthermore, the market mechanism fails to distinguish between 'high-quality' attention (deep engagement with complex ideas) and 'low-quality' attention (mindless scrolling). In fact, the algorithms often favor the latter, as it is easier to harvest and sell to advertisers.</p><p class='mb-4'><strong>D</strong> The societal impact extends to the political sphere. In an attention economy, outrage is a high-value currency. Content that elicits strong emotional reactions—anger, fear, or shock—travels faster and retains attention longer than nuanced analysis. This creates a perverse incentive structure for politicians and media outlets. To compete, they must adopt the tactics of the attention merchants, favoring sensationalism over substance. The result is a polarized public discourse where consensus-building is sacrificed for engagement metrics.</p><p class='mb-4'><strong>E</strong> Regulators are beginning to wake up to these distortions. The European Union’s Digital Services Act is an early attempt to impose order, requiring platforms to be transparent about their algorithms and giving users more control over what they see. However, structural change may require a rethink of the business models themselves. Some economists advocate for a shift towards subscription-based models, where the user pays the platform directly. This aligns the incentives of the company with the interests of the user: if I pay you to serve me, you have no reason to sell my attention to a third party.</p><p class='mb-4'><strong>F</strong> Ultimately, the reclamation of attention may need to be a personal revolution as much as a regulatory one. 'Digital minimalism' and 'deep work' movements are gaining traction, encouraging individuals to curate their information intake rigorously. This is not merely about 'unplugging' but about recognizing attention as a sovereign asset. In the 21st century, the ability to control one’s own attention is not just a productivity hack; it is a prerequisite for freedom of thought.</p>",
        questions: [
          { 
            id: 14, 
            type: "MATCHING_HEADINGS", 
            target: "Paragraph A", 
            options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], 
            correctAnswer: "vi",
            explanation: {
              en: "Heading vi (likely 'Attention as a product') matches Paragraph A, which discusses how users have become the product and attention is the 'financial bedrock' of companies.",
              ru: "Заголовок vi («Внимание как продукт») соответствует параграфу A, в котором обсуждается, как пользователи стали продуктом, а внимание — «финансовой основой» компаний.",
              uz: "vi sarlavhasi ('E'tibor mahsulot sifatida') A paragrafga mos keladi, unda foydalanuvchilar qanday qilib mahsulotga aylangani va e'tibor kompaniyalarning 'moliyaviy poydevori' ekanligi muhokama qilinadi."
            }
          },
          { 
            id: 15, 
            type: "MATCHING_HEADINGS", 
            target: "Paragraph B", 
            options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], 
            correctAnswer: "v",
            explanation: {
              en: "Heading v (likely 'Psychological mechanisms') matches Paragraph B, which discusses 'persuasive design' and 'dopamine reward loops' used to capture attention.",
              ru: "Заголовок v («Психологические механизмы») соответствует параграфу B, где обсуждаются «убеждающий дизайн» и «дофаминовые петли вознаграждения», используемые для захвата внимания.",
              uz: "v sarlavhasi ('Psixologik mexanizmlar') B paragrafga mos keladi, unda e'tiborni jalb qilish uchun ishlatiladigan 'ishontiruvchi dizayn' va 'dofamin mukofotlash halqalari' muhokama qilinadi."
            }
          },
          { 
            id: 16, 
            type: "MATCHING_HEADINGS", 
            target: "Paragraph C", 
            options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], 
            correctAnswer: "i",
            explanation: {
              en: "Heading i (likely 'Economic externalities' or 'Costs of pollution') matches Paragraph C, which explicitly compares social media to a factory polluting a river and discusses 'externalities'.",
              ru: "Заголовок i («Экономические внешние эффекты» или «Издержки загрязнения») соответствует параграфу C, где социальные сети сравниваются с фабрикой, загрязняющей реку, и обсуждаются «внешние эффекты».",
              uz: "i sarlavhasi ('Iqtisodiy tashqi ta'sirlar' yoki 'Ifloslanish xarajatlari') C paragrafga mos keladi, unda ijtimoiy tarmoqlar daryoni ifloslantiruvchi zavodga qiyoslanadi va 'tashqi ta'sirlar' muhokama qilinadi."
            }
          },
          { 
            id: 17, 
            type: "MATCHING_HEADINGS", 
            target: "Paragraph D", 
            options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], 
            correctAnswer: "ii",
            explanation: {
              en: "Heading ii (likely 'Impact on politics') matches Paragraph D, which opens with 'The societal impact extends to the political sphere' and discusses polarization.",
              ru: "Заголовок ii («Влияние на политику») соответствует параграфу D, который начинается со слов «Общественное влияние распространяется на политическую сферу» и обсуждает поляризацию.",
              uz: "ii sarlavhasi ('Siyosatga ta'siri') D paragrafga mos keladi, u 'Ijtimoiy ta'sir siyosiy sohaga ham tarqaladi' degan so'zlar bilan boshlanadi va qutblanishni muhokama qiladi."
            }
          },
          { 
            id: 18, 
            type: "MATCHING_HEADINGS", 
            target: "Paragraph E", 
            options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], 
            correctAnswer: "iv",
            explanation: {
              en: "Heading iv (likely 'Regulatory and business solutions') matches Paragraph E, which discusses the EU's Digital Services Act and subscription models.",
              ru: "Заголовок iv («Регуляторные и бизнес-решения») соответствует параграфу E, в котором обсуждаются Закон о цифровых услугах ЕС и модели подписки.",
              uz: "iv sarlavhasi ('Tartibga solish va biznes yechimlari') E paragrafga mos keladi, unda YI ning Raqamli xizmatlar to'g'risidagi qonuni va obuna modellari muhokama qilinadi."
            }
          },
          { 
            id: 19, 
            type: "MATCHING_HEADINGS", 
            target: "Paragraph F", 
            options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], 
            correctAnswer: "viii",
            explanation: {
              en: "Heading viii (likely 'Personal responsibility') matches Paragraph F, which focuses on 'personal revolution', 'Digital minimalism', and controlling one's own attention.",
              ru: "Заголовок viii («Личная ответственность») соответствует параграфу F, который фокусируется на «личной революции», «цифровом минимализме» и контроле собственного внимания.",
              uz: "viii sarlavhasi ('Shaxsiy javobgarlik') F paragrafga mos keladi, unda 'shaxsiy inqilob', 'raqamli minimalizm' va o'z e'tiborini boshqarishga e'tibor qaratilgan."
            }
          },
          { 
            id: 20, 
            type: "MCQ", 
            text: "According to the writer, what is the primary product sold by major Silicon Valley companies?", 
            options: ["A. Advanced software and hardware", "B. User data and personal information", "C. The assurance of user attention", "D. Behavioral psychology research"], 
            correctAnswer: "C",
            explanation: {
              en: "Paragraph A states: 'The giants of Silicon Valley do not primarily sell software or devices; they sell the certainty that a user’s gaze will linger...'",
              ru: "В параграфе A говорится: «Гиганты Кремниевой долины не продают в первую очередь программное обеспечение или устройства; они продают уверенность в том, что взгляд пользователя задержится...»",
              uz: "A paragrafda aytilishicha: 'Silikon vodiysi gigantlari asosan dasturiy ta'minot yoki qurilmalarni sotmaydi; ular foydalanuvchi nigohi ma'lum vaqt davomida turishiga ishonchni sotadilar...'"
            }
          },
          { 
            id: 21, 
            type: "MCQ", 
            text: "Herbert Simon’s prediction in 1971 suggested that:", 
            options: ["A. Information would eventually become scarce.", "B. An abundance of information leads to a scarcity of attention.", "C. The value of attention would decrease over time.", "D. Behavioral psychology would dominate economics."], 
            correctAnswer: "B",
            explanation: {
              en: "Paragraph B quotes Simon: 'a wealth of information creates a poverty of attention.'",
              ru: "В параграфе B цитируется Саймон: «богатство информации создает бедность внимания».",
              uz: "B paragrafda Saymonning so'zlari keltirilgan: 'axborotning ko'pligi e'tiborning yetishmasligini keltirib chiqaradi'."
            }
          },
          { 
            id: 22, 
            type: "MCQ", 
            text: "The term 'cognitive pollution' in the passage refers to:", 
            options: ["A. The physical waste produced by electronic devices.", "B. The negative side effects of social media on concentration and productivity.", "C. The spread of misinformation and fake news.", "D. The cost of advertising on digital platforms."], 
            correctAnswer: "B",
            explanation: {
              en: "Paragraph C defines the pollution as 'fragmented concentration, reduced productivity, and the erosion of deep reading skills'.",
              ru: "Параграф C определяет загрязнение как «фрагментированную концентрацию, сниженную производительность и эрозию навыков глубокого чтения».",
              uz: "C paragraf ifloslanishni 'bo'lingan konsentratsiya, pasaygan unumdorlik va chuqur o'qish ko'nikmalarining yemirilishi' sifatida ta'riflaydi."
            }
          },
          { 
            id: 23, 
            type: "MCQ", 
            text: "Why do algorithms often favor 'low-quality' attention?", 
            options: ["A. It creates deeper engagement with complex ideas.", "B. It is more difficult to harvest than high-quality attention.", "C. It leads to better political discourse.", "D. It is easier to capture and sell to advertisers."], 
            correctAnswer: "D",
            explanation: {
              en: "Paragraph C states: 'algorithms often favor the latter [low-quality attention], as it is easier to harvest and sell to advertisers.'",
              ru: "В параграфе C говорится: «алгоритмы часто отдают предпочтение последнему [низкокачественному вниманию], так как его легче собрать и продать рекламодателям».",
              uz: "C paragrafda aytilishicha: 'algoritmlar ko'pincha keyingisini [past sifatli e'tiborni] afzal ko'radi, chunki uni yig'ish va reklama beruvchilarga sotish osonroq'."
            }
          },
          { 
            id: 24, 
            type: "GAP_FILL", 
            text: "A fundamental change in ____ models might be necessary.", 
            limit: "ONE_WORD", 
            correctAnswer: "business",
            explanation: {
              en: "Paragraph E states: 'structural change may require a rethink of the business models themselves.'",
              ru: "В параграфе E говорится: «структурные изменения могут потребовать переосмысления самих бизнес-моделей».",
              uz: "E paragrafda aytilishicha: 'tizimli o'zgarishlar biznes modellarining o'zini qayta ko'rib chiqishni talab qilishi mumkin'."
            }
          },
          { 
            id: 25, 
            type: "GAP_FILL", 
            text: "Moving towards ____ services, where users pay directly, could align company incentives with user interests.", 
            limit: "ONE_WORD", 
            correctAnswer: "subscription",
            explanation: {
              en: "Paragraph E mentions: 'shift towards subscription-based models, where the user pays the platform directly.'",
              ru: "В параграфе E упоминается: «переход к моделям на основе подписки, где пользователь платит платформе напрямую».",
              uz: "E paragrafda 'foydalanuvchi platformaga to'g'ridan-to'g'ri to'laydigan obunaga asoslangan modellarga o'tish' haqida so'z boradi."
            }
          },
          { 
            id: 26, 
            type: "GAP_FILL", 
            text: "On a personal level, movements like 'digital minimalism' treat attention as a valuable ____ that must be protected.", 
            limit: "ONE_WORD", 
            correctAnswer: "asset",
            explanation: {
              en: "Paragraph F states: 'recognizing attention as a sovereign asset.'",
              ru: "В параграфе F говорится: «признание внимания суверенным активом».",
              uz: "F paragrafda 'e'tiborni suveren aktiv sifatida tan olish' haqida aytiladi."
            }
          }
        ]
      },
      {
        id: "p3",
        title: "Passage 3: Earth’s Climate Crossing the Line",
        content: "<p class='mb-4'>Humanity is entering a 'new reality,' according to a major report released by the University of Exeter and international collaborators. The report concludes that the planet has now crossed the first of several critical Earth system 'tipping points.' A tipping point occurs when a small change tips a system into a new state, causing significant and often irreversible transformation. The first of these to be breached is the stability of warm-water coral reefs.</p><p class='mb-4'>Mass coral die-off is currently underway. These reefs are vital to nearly a billion people and support a quarter of all marine species. With global warming currently at approximately 1.2°C above pre-industrial levels, reefs are already passing their thermal threshold. The report notes that even if global warming is stabilized at 1.5°C—the target of the Paris Agreement—warm-water coral reefs are virtually certain to be lost on a meaningful scale. This is a tragedy for nature and a catastrophic economic blow for the nations that rely on them for food and tourism revenue.</p><p class='mb-4'>The danger, however, is not isolated to the oceans. The report warns that the world is nearing other interconnected tipping points that could trigger cascading crises. These include the melting of polar ice sheets, the disruption of major ocean currents, and the dieback of the Amazon rainforest. The Amazon, often called the 'lungs of the Earth,' is at risk of transforming from a lush rainforest into a dry savanna. This shift would release massive amounts of stored carbon, further accelerating global heating.</p><p class='mb-4'>Another major concern is the Atlantic Meridional Overturning Circulation (AMOC), a large system of ocean currents that includes the Gulf Stream. The AMOC carries warm water from the tropics northwards, where it cools and sinks. This process is crucial for regulating the climate of the Northern Hemisphere. The report indicates the AMOC is at risk of collapse at temperatures below 2°C of global warming. A collapse would result in much harsher winters in north-west Europe, disrupt the West African and Indian monsoons, and drastically decrease agricultural yields worldwide, threatening global food security.</p><p class='mb-4'>Dr. Manjana Milkoreit, from the University of Oslo, highlights that current policy thinking rarely accounts for these non-linear threats. 'Tipping points present distinct governance challenges,' she argues. Unlike gradual climate change, where effects scale linearly with emissions, tipping points represent abrupt jumps. Preventing them requires 'frontloaded' mitigation pathways—drastic cuts in emissions now, rather than gradual reductions later.</p><p class='mb-4'>Despite the grim outlook, the report emphasizes the potential for 'positive tipping points.' Just as negative feedback loops can spiral out of control, positive social and technological changes can also accelerate rapidly. The report highlights that positive tipping points have already been crossed in the adoption of solar power and electric vehicles in leading markets. Once a new technology becomes cheaper and better than the old polluting one, a rapid mass adoption occurs—a 'tipping' of the market. The authors argue that coordinated policy action at 'super-leverage points' can unleash these cascades across sectors. For example, the decarbonization of the power sector accelerates the decarbonization of transport (via electric vehicles) and heating (via heat pumps).</p><p class='mb-4'>Professor Tim Lenton of the University of Exeter concludes that the power to prevent the worst outcomes is still in human hands, but it requires a shift in strategy. 'We need to do more—and move faster—to seize positive tipping point opportunities,' he says. The goal is to tip the world away from catastrophic outcomes and towards a sustainable future before the domino effect of negative tipping points becomes unstoppable.</p>",
        questions: [
          { 
            id: 27, 
            type: "YES_NO_NOT_GIVEN", 
            text: "The collapse of warm-water coral reefs is a reversible process if temperatures drop immediately.", 
            correctAnswer: "NO", 
            explanation: {
              en: "Paragraph 1 defines a tipping point as causing 'often irreversible transformation'. Paragraph 2 states reefs are 'virtually certain to be lost on a meaningful scale' even at 1.5C. There is no mention of reversibility; the tone suggests permanence.",
              ru: "Параграф 1 определяет переломный момент как вызывающий «часто необратимые трансформации». В параграфе 2 говорится, что рифы «практически наверняка будут потеряны в значительных масштабах» даже при 1,5°C. О возможности восстановления не упоминается; тон предполагает необратимость.",
              uz: "1-paragrafda burilish nuqtasi 'ko'pincha ortga qaytarib bo'lmaydigan o'zgarish' sifatida ta'riflangan. 2-paragrafda aytilishicha, riflar hatto 1,5°C da ham 'katta miqyosda yo'qolishi deyarli aniq'. Qayta tiklanish haqida so'z yo'q; ohang doimiylikni anglatadi."
            }
          },
          { 
            id: 28, 
            type: "YES_NO_NOT_GIVEN", 
            text: "The destruction of the Amazon rainforest would have a negligible effect on global carbon emissions.", 
            correctAnswer: "NO", 
            explanation: {
              en: "Paragraph 3 explicitly states: 'This shift would release massive amounts of stored carbon, further accelerating global heating.' 'Massive amounts' contradicts 'negligible effect'.",
              ru: "В параграфе 3 прямо говорится: «Этот сдвиг высвободит огромное количество накопленного углерода, еще больше ускорив глобальное потепление». «Огромное количество» противоречит «незначительному эффекту».",
              uz: "3-paragrafda aniq aytilgan: 'Bu o'zgarish katta miqdordagi to'plangan uglerodni chiqarib yuboradi va global isishni yanada tezlashtiradi'. 'Katta miqdor' 'arzimas ta'sir'ga ziddir."
            }
          },
          { 
            id: 29, 
            type: "YES_NO_NOT_GIVEN", 
            text: "The collapse of the AMOC would lead to milder winters in Europe.", 
            correctAnswer: "NO", 
            explanation: {
              en: "Paragraph 4 states: 'A collapse would result in much harsher winters in north-west Europe'. 'Harsher' contradicts 'milder'.",
              ru: "В параграфе 4 говорится: «Коллапс приведет к гораздо более суровым зимам в северо-западной Европе». «Более суровые» противоречит «более мягким».",
              uz: "4-paragrafda aytilishicha: 'Hlokat Shimoliy-G'arbiy Yevropada qishning ancha qattiq kelishiga olib keladi'. 'Qattiq' so'zi 'yumshoq' so'ziga ziddir."
            }
          },
          { 
            id: 30, 
            type: "YES_NO_NOT_GIVEN", 
            text: "Current government policies adequately address the risks posed by non-linear climate tipping points.", 
            correctAnswer: "NO", 
            explanation: {
              en: "Paragraph 5 states: 'current policy thinking rarely accounts for these non-linear threats.' This means they do NOT adequately address them.",
              ru: "В параграфе 5 говорится: «нынешнее политическое мышление редко учитывает эти нелинейные угрозы». Это означает, что они НЕ реагируют на них должным образом.",
              uz: "5-paragrafda aytilishicha: 'hozirgi siyosiy qarashlar ushbu chiziqli bo'lmagan tahdidlarni kamdan-kam hisobga oladi'. Bu ular yetarli darajada e'tibor bermayotganini anglatadi."
            }
          },
          { 
            id: 31, 
            type: "YES_NO_NOT_GIVEN", 
            text: "The adoption of solar power is an example of a positive tipping point that has already occurred in some markets.", 
            correctAnswer: "YES", 
            explanation: {
              en: "Paragraph 6 states: 'positive tipping points have already been crossed in the adoption of solar power... in leading markets.'",
              ru: "В параграфе 6 говорится: «положительные переломные моменты уже пройдены во внедрении солнечной энергии... на ведущих рынках».",
              uz: "6-paragrafda aytilishicha: 'quyosh energiyasini qabul qilishda ijobiy burilish nuqtalari allaqachon bosib o'tilgan... yetakchi bozorlarda'."
            }
          },
          { 
            id: 32, 
            type: "GAP_FILL", 
            text: "A tipping point is defined as a moment when a ____ causes a system to shift into a new state.", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "small change",
            explanation: {
              en: "Paragraph 1 states: 'A tipping point occurs when a small change tips a system into a new state'.",
              ru: "В параграфе 1 говорится: «Переломный момент наступает, когда небольшое изменение переводит систему в новое состояние».",
              uz: "1-paragrafda aytilishicha: 'Burilish nuqtasi kichik o'zgarish tizimni yangi holatga o'tkazganda yuz beradi'."
            }
          },
          { 
            id: 33, 
            type: "GAP_FILL", 
            text: "The Amazon rainforest is in danger of turning into a ____, which would release stored carbon.", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "dry savanna",
            explanation: {
              en: "Paragraph 3 mentions the risk of the Amazon 'transforming from a lush rainforest into a dry savanna'.",
              ru: "В параграфе 3 упоминается риск превращения Амазонки «из пышного тропического леса в сухую саванну».",
              uz: "3-paragrafda Amazonkaning 'serhosil yomg'irli o'rmondan quruq savannaga aylanishi' xavfi haqida so'z boradi."
            }
          },
          { 
            id: 34, 
            type: "GAP_FILL", 
            text: "The ____ is a system of currents responsible for regulating the Northern Hemisphere's climate.", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "AMOC",
            explanation: {
              en: "Paragraph 4 describes the 'AMOC' (Atlantic Meridional Overturning Circulation) and says 'This process is crucial for regulating the climate of the Northern Hemisphere'.",
              ru: "В параграфе 4 описывается «AMOC» (Атлантическая меридиональная опрокидывающая циркуляция) и говорится: «Этот процесс имеет решающее значение для регулирования климата Северного полушария».",
              uz: "4-paragrafda 'AMOC' tasvirlangan va 'Bu jarayon Shimoliy yarim shar iqlimini tartibga solish uchun juda muhim' deyilgan."
            }
          },
          { 
            id: 35, 
            type: "GAP_FILL", 
            text: "To prevent tipping points, Dr. Milkoreit suggests ____ pathways that involve immediate, drastic emission cuts.", 
            limit: "NO_MORE_THAN_TWO_WORDS", 
            correctAnswer: "frontloaded",
            explanation: {
              en: "Paragraph 5 quotes Dr. Milkoreit: 'Preventing them requires frontloaded mitigation pathways'.",
              ru: "В параграфе 5 цитируется д-р Милкорейт: «Предотвращение требует предварительных (frontloaded) путей смягчения последствий».",
              uz: "5-paragrafda doktor Milkoreytning so'zlari keltirilgan: 'Ularning oldini olish oldindan yuklangan (frontloaded) yumshatish yo'llarini talab qiladi'."
            }
          },
          { 
            id: 36, 
            type: "GAP_FILL", 
            text: "The new technology becomes ____ and better than the old polluting one.", 
            limit: "ONE_WORD", 
            correctAnswer: "cheaper",
            explanation: {
              en: "Paragraph 6 explains positive tipping points happen when 'new technology becomes cheaper and better'.",
              ru: "Параграф 6 объясняет, что положительные переломные моменты наступают, когда «новая технология становится дешевле и лучше».",
              uz: "6-paragrafda ijobiy burilish nuqtalari 'yangi texnologiya arzonroq va yaxshiroq bo'lganda' sodir bo'lishi tushuntiriladi."
            }
          },
          { 
            id: 37, 
            type: "GAP_FILL", 
            text: "Rapid mass ____ occurs as the market 'tips' toward the new product.", 
            limit: "ONE_WORD", 
            correctAnswer: "adoption",
            explanation: {
              en: "Paragraph 6 states: 'a rapid mass adoption occurs'.",
              ru: "В параграфе 6 говорится: «происходит быстрое массовое принятие (adoption)».",
              uz: "6-paragrafda aytilishicha: 'tezkor ommaviy qabul qilish (adoption) sodir bo'ladi'."
            }
          },
          { 
            id: 38, 
            type: "GAP_FILL", 
            text: "Policy action at 'super-leverage points' triggers ____ across other sectors.", 
            limit: "ONE_WORD", 
            correctAnswer: "cascades",
            explanation: {
              en: "Paragraph 6 argues that action at super-leverage points 'can unleash these cascades across sectors'.",
              ru: "В параграфе 6 утверждается, что действия в точках супер-рычагов «могут вызвать эти каскады (cascades) в других секторах».",
              uz: "6-paragrafda aytilishicha, o'ta kuchli ta'sir nuqtalaridagi harakatlar 'boshqa sohalarda ushbu kaskadlarni (cascades) keltirib chiqarishi mumkin'."
            }
          },
          { 
            id: 39, 
            type: "GAP_FILL", 
            text: "Decarbonizing power helps decarbonize ____ and heating.", 
            limit: "ONE_WORD", 
            correctAnswer: "transport",
            explanation: {
              en: "Paragraph 6 gives an example: 'decarbonization of the power sector accelerates the decarbonization of transport'.",
              ru: "В параграфе 6 приводится пример: «декарбонизация энергетического сектора ускоряет декарбонизацию транспорта».",
              uz: "6-paragrafda misol keltirilgan: 'energetika sektorini dekarbonizatsiya qilish transportni dekarbonizatsiya qilishni tezlashtiradi'."
            }
          },
          { 
            id: 40, 
            type: "GAP_FILL", 
            text: "The world moves away from ____ outcomes toward a sustainable future.", 
            limit: "ONE_WORD", 
            correctAnswer: "catastrophic",
            explanation: {
              en: "Paragraph 7 concludes with the goal to 'tip the world away from catastrophic outcomes'.",
              ru: "Параграф 7 завершается целью «увести мир от катастрофических (catastrophic) последствий».",
              uz: "7-paragraf 'dunyoni halokatli (catastrophic) oqibatlardan uzoqlashtirish' maqsadi bilan yakunlanadi."
            }
          }
        ]
      }
    ]
  }
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
      ]
    },
    testData: {
      timerSeconds: 3600,
      passages: [
        {
          id: "vol2_p1",
          title: "Passage 1: Genetic Secrets of the Monarch Migration",
          content: "<p class='mb-4'>The monarch butterfly (Danaus plexippus) is famous for its epic migration, traveling in great masses from Mexico to Canada every year. The range of that journey has stretched farther and farther north since the end of the last ice age, a feat made possible by a specific gene that makes the butterfly's muscles more efficient. This discovery comes from a study released by the University of Chicago, which suggests that natural selection has honed the monarch for flight efficiency rather than raw power.</p><p class='mb-4'>Study senior author Marcus Kronforst notes, 'At first we thought migratory butterflies needed to bulk up with big muscles. What emerged is that natural selection is mighty powerful for flight efficiency.' The researchers compared the genomes of 89 migratory monarchs with nine non-migratory monarch populations, such as those in South America. To their surprise, a single gene leaped out of the analysis. It wasn't involved with behavior or navigation, but with the formation of collagen, the connective tissue in muscles. This gene appears to reduce energy expenditure in long-distance travelers.</p><p class='mb-4'>In test chambers, migratory monarchs were found to fly most efficiently, though not most powerfully. They are essentially endurance athletes, whereas non-migratory butterflies are sprinters. The 'sprinters' need bursts of speed to out-compete other insects for food in a fixed location, while migratory monarchs fly to places with less competition but must survive the grueling journey. 'If you can't make it back to Mexico, you're dead,' says evolutionary biologist Andrew Brower.</p><p class='mb-4'>The study also suggests that migration was the 'founding condition' for the species. Monarchs likely originated in Mexico and spread worldwide. Populations that stopped migrating—such as those in Hawaii or Puerto Rico—eventually evolved into separate, sedentary groups. Interestingly, the study found that the iconic orange-and-black coloration is also tied to a single gene. A mutation in this gene is responsible for the rare white monarchs found on the island of Oahu.</p><p class='mb-4'>Currently, monarch numbers are dropping precipitously, down to 33 million in 2013, a decline linked to the loss of milkweed, the only plant their caterpillars eat. Understanding the genetics of their migration is crucial, but as ecologist Richard ffrench-Constant notes, 'The role of single genes in sometimes having an outsized effect on species is the theme of these results.'</p>",
          questions: [
            {
              id: 1,
              type: "TFNG",
              text: "The monarch butterfly’s migration range has decreased since the last ice age.",
              correctAnswer: "FALSE",
              explanation: { 
                  en: "Text states: 'stretched farther and farther north since the end of the last ice age'.", 
                  ru: "В тексте говорится: 'распространился все дальше и дальше на север с конца последнего ледникового периода'.", 
                  uz: "Matnda aytilishicha: 'oxirgi muzlik davri tugaganidan beri shimolga qarab tobora kengayib bordi'." 
              }
            },
            {
              id: 2,
              type: "TFNG",
              text: "Researchers initially expected migratory butterflies to have larger muscles than non-migratory ones.",
              correctAnswer: "TRUE",
              explanation: { 
                  en: "Text states: 'At first we thought migratory butterflies needed to bulk up with big muscles'.", 
                  ru: "В тексте говорится: 'Сначала мы думали, что мигрирующим бабочкам нужно накачать большие мышцы'.", 
                  uz: "Matnda aytilishicha: 'Avvaliga biz ko'chib yuruvchi kapalaklar katta mushaklar bilan kuchayishi kerak deb o'ylagandik'." 
              }
            },
            {
              id: 3,
              type: "TFNG",
              text: "The gene identified by the researchers is primarily responsible for the butterfly’s navigation skills.",
              correctAnswer: "FALSE",
              explanation: { 
                  en: "Text states: 'It wasn't involved with behavior or navigation, but with... collagen'.", 
                  ru: "В тексте говорится: 'Это было связано не с поведением или навигацией, а с... коллагеном'.", 
                  uz: "Matnda aytilishicha: 'Bu xatti-harakatlar yoki navigatsiya bilan emas, balki... kollagen bilan bog'liq edi'." 
              }
            },
            {
              id: 4,
              type: "TFNG",
              text: "Non-migratory monarchs are described as 'sprinters' because they need speed to compete for food.",
              correctAnswer: "TRUE",
              explanation: { 
                  en: "Text states: 'sprinters need bursts of speed to out-compete other insects for food'.", 
                  ru: "В тексте говорится: 'спринтерам нужны всплески скорости, чтобы превзойти других насекомых в борьбе за еду'.", 
                  uz: "Matnda aytilishicha: 'sprinterlar oziq-ovqat uchun boshqa hasharotlar bilan raqobatlashish uchun tezlikni oshirishga muhtoj'." 
              }
            },
            {
              id: 5,
              type: "TFNG",
              text: "The white monarch butterflies found on Oahu are the result of a diet lacking in milkweed.",
              correctAnswer: "FALSE",
              explanation: { 
                  en: "Text states: 'A mutation in this gene is responsible for the rare white monarchs', not diet.", 
                  ru: "В тексте говорится: 'Мутация в этом гене ответственна за редких белых монархов', а не диета.", 
                  uz: "Matnda aytilishicha: 'Ushbu gendagi mutatsiya noyob oq monarxlar uchun javobgardir', dieta emas." 
              }
            },
            {
              id: 6,
              type: "GAP_FILL",
              text: "A recent study compared the ____ of migratory and non-migratory monarch butterflies.",
              limit: "ONE_WORD",
              correctAnswer: "genomes",
              explanation: { 
                  en: "Paragraph 2: 'researchers compared the genomes of 89 migratory monarchs'.", 
                  ru: "Параграф 2: 'исследователи сравнили геномы 89 мигрирующих монархов'.", 
                  uz: "2-paragraf: 'tadqiqotchilar 89 ta ko'chib yuruvchi monarxning genomlarini taqqosladilar'." 
              }
            },
            {
              id: 7,
              type: "GAP_FILL",
              text: "The results showed that a specific gene related to ____ formation helps migratory monarchs use less energy.",
              limit: "ONE_WORD",
              correctAnswer: "collagen",
              explanation: { 
                  en: "Paragraph 2: 'involved... with the formation of collagen'.", 
                  ru: "Параграф 2: 'связан... с образованием коллагена'.", 
                  uz: "2-paragraf: 'kollagen hosil bo'lishi bilan bog'liq'." 
              }
            },
            {
              id: 8,
              type: "GAP_FILL",
              text: "This makes them similar to endurance ____, allowing them to survive the long trip to Mexico.",
              limit: "ONE_WORD",
              correctAnswer: "athletes",
              explanation: { 
                  en: "Paragraph 3: 'They are essentially endurance athletes'.", 
                  ru: "Параграф 3: 'Они по сути являются выносливыми атлетами'.", 
                  uz: "3-paragraf: 'Ular asosan chidamli atletlardir'." 
              }
            },
            {
              id: 9,
              type: "GAP_FILL",
              text: "In contrast, non-migratory butterflies rely on power and speed to survive in areas with higher ____.",
              limit: "ONE_WORD",
              correctAnswer: "competition",
              explanation: { 
                  en: "Paragraph 3: 'places with less competition' (implying non-migratory have more).", 
                  ru: "Параграф 3: 'места с меньшей конкуренцией' (подразумевается, что у немигрирующих ее больше).", 
                  uz: "3-paragraf: 'raqobat kamroq bo'lgan joylar' (ko'chmaydiganlarda ko'proq ekanligini anglatadi)." 
              }
            },
            {
              id: 10,
              type: "SHORT_ANSWER",
              text: "Where did the monarch species likely originate before spreading worldwide?",
              limit: "NO_MORE_THAN_TWO_WORDS",
              correctAnswer: "Mexico",
              explanation: { 
                  en: "Paragraph 4: 'Monarchs likely originated in Mexico'.", 
                  ru: "Параграф 4: 'Монархи, вероятно, произошли из Мексики'.", 
                  uz: "4-paragraf: 'Monarxlar Meksikadan kelib chiqqan bo'lishi mumkin'." 
              }
            },
            {
              id: 11,
              type: "SHORT_ANSWER",
              text: "What specific plant is essential for the diet of monarch caterpillars?",
              limit: "NO_MORE_THAN_TWO_WORDS",
              correctAnswer: "milkweed",
              explanation: { 
                  en: "Paragraph 5: 'milkweed, the only plant their caterpillars eat'.", 
                  ru: "Параграф 5: 'молочай, единственное растение, которое едят их гусеницы'.", 
                  uz: "5-paragraf: 'shirach (milkweed), ularning qurtlari yeydigan yagona o'simlik'." 
              }
            },
            {
              id: 12,
              type: "SHORT_ANSWER",
              text: "What year saw the monarch population drop to 33 million?",
              limit: "NO_MORE_THAN_TWO_WORDS",
              correctAnswer: "2013",
              explanation: { 
                  en: "Paragraph 5: 'down to 33 million in 2013'.", 
                  ru: "Параграф 5: 'до 33 миллионов в 2013 году'.", 
                  uz: "5-paragraf: '2013 yilda 33 milliongacha kamaydi'." 
              }
            },
            {
              id: 13,
              type: "SHORT_ANSWER",
              text: "Besides migration, what physical feature is also controlled by a single gene?",
              limit: "NO_MORE_THAN_TWO_WORDS",
              correctAnswer: "coloration",
              explanation: { 
                  en: "Paragraph 4: 'orange-and-black coloration is also tied to a single gene'.", 
                  ru: "Параграф 4: 'оранжево-черная окраска также связана с одним геном'.", 
                  uz: "4-paragraf: 'to'q sariq va qora rang ham bitta genga bog'liq'." 
              }
            }
          ]
        },
        {
          id: "vol2_p2",
          title: "Passage 2: The Bilingual Brain",
          content: "<p class='mb-4'><strong>A</strong> For a long time, the 'monolingual' brain was considered the standard model in neuroscience. Bilingualism was often viewed as a complication, or even a disadvantage, that might confuse children or hinder their academic development. However, research in recent decades has flipped this view on its head. It is now understood that managing two or more languages is a complex cognitive task that 'rewires' the brain, offering significant benefits that extend far beyond the ability to order coffee in Paris or Tokyo.</p><p class='mb-4'><strong>B</strong> The primary cognitive benefit of bilingualism is the enhancement of 'executive function.' This is a command system in the brain that directs the attention processes that we use for planning, solving problems, and performing various other mentally demanding tasks. Bilinguals are constantly exercising this system. When a bilingual person speaks, both languages are active in their brain. To speak one, they must actively suppress (inhibit) the other. This constant mental juggling acts as a workout for the brain's executive control system, strengthening the neural pathways responsible for inhibition and switching attention.</p><p class='mb-4'><strong>C</strong> This mental workout appears to have physical effects. Studies using neuroimaging have shown that bilinguals tend to have a greater density of grey matter (neurons) in the anterior cingulate cortex, a region of the brain involved in monitoring and controlling mental activity. Furthermore, the white matter (the connections between brain regions) is often more robust in older bilinguals compared to monolinguals. This suggests that the lifelong use of two languages may build up a 'cognitive reserve.'</p><p class='mb-4'><strong>D</strong> Cognitive reserve acts as a buffer against the effects of aging. While bilingualism does not prevent Alzheimer's disease or dementia, it may delay their onset. In several studies, bilingual patients diagnosed with Alzheimer's reported the onset of symptoms four to five years later than monolingual patients with the same level of disease pathology. Essentially, the bilingual brain can cope with damage better and function for longer, even when the physical condition of the brain has started to deteriorate.</p><p class='mb-4'><strong>E</strong> The benefits are not limited to the elderly. In children, bilingualism has been linked to better 'theory of mind'—the ability to understand that others have thoughts and perspectives different from one's own. Because bilingual children constantly have to evaluate which language to use with which person, they may develop a heightened sensitivity to social cues and the perspective of others.</p><p class='mb-4'><strong>F</strong> However, it is important not to overstate the case. The 'bilingual advantage' is not found in every single study, and the extent of the benefit likely depends on factors such as the age of acquisition and the frequency of language use. Nevertheless, the consensus is shifting. Language is not just a tool for communication; it is an experience that shapes the architecture of the mind.</p>",
          questions: [
             {
               id: 14,
               type: "MATCHING_HEADINGS",
               target: "Paragraph A",
               options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
               correctAnswer: "v",
               explanation: { 
                   en: "v. Historical views on bilingualism (Standard model, viewed as complication).", 
                   ru: "v. Исторические взгляды на двуязычие (стандартная модель, рассматривалась как осложнение).", 
                   uz: "v. Ikki tillilik haqidagi tarixiy qarashlar (Standart model, murakkablik sifatida qaralgan)." 
               }
             },
             {
               id: 15,
               type: "MATCHING_HEADINGS",
               target: "Paragraph B",
               options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
               correctAnswer: "vii",
               explanation: { 
                   en: "vii. How language management improves brain control (Executive function, inhibition).", 
                   ru: "vii. Как управление языком улучшает контроль мозга (Исполнительная функция, торможение).", 
                   uz: "vii. Til boshqaruvi miya nazoratini qanday yaxshilaydi (Ijro etuvchi funksiya, tormozlanish)." 
               }
             },
             {
               id: 16,
               type: "MATCHING_HEADINGS",
               target: "Paragraph C",
               options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
               correctAnswer: "i",
               explanation: { 
                   en: "i. Physical changes in brain structure (Grey matter, white matter).", 
                   ru: "i. Физические изменения в структуре мозга (Серое вещество, белое вещество).", 
                   uz: "i. Miya tuzilishidagi jismoniy o'zgarishlar (Kulrang modda, oq modda)." 
               }
             },
             {
               id: 17,
               type: "MATCHING_HEADINGS",
               target: "Paragraph D",
               options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
               correctAnswer: "iv",
               explanation: { 
                   en: "iv. Delaying the symptoms of brain disease (Alzheimer's, four to five years later).", 
                   ru: "iv. Отсрочка симптомов заболевания мозга (Альцгеймер, на четыре-пять лет позже).", 
                   uz: "iv. Miya kasalligi belgilarini kechiktirish (Altsgeymer, to'rt-besh yil keyinroq)." 
               }
             },
             {
               id: 18,
               type: "MATCHING_HEADINGS",
               target: "Paragraph E",
               options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
               correctAnswer: "iii",
               explanation: { 
                   en: "iii. Social benefits for younger learners (Children, theory of mind).", 
                   ru: "iii. Социальные преимущества для молодых учеников (Дети, теория разума).", 
                   uz: "iii. Yosh o'quvchilar uchun ijtimoiy imtiyozlar (Bolalar, ong nazariyasi)." 
               }
             },
             {
               id: 19,
               type: "MATCHING_HEADINGS",
               target: "Paragraph F",
               options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
               correctAnswer: "viii",
               explanation: { 
                   en: "viii. Limitations and variables in the research (Not to overstate, not found in every study).", 
                   ru: "viii. Ограничения и переменные в исследованиях (Не преувеличивать, не во всех исследованиях).", 
                   uz: "viii. Tadqiqotdagi cheklovlar va o'zgaruvchilar (Oshirib yubormaslik, har bir tadqiqotda topilmagan)." 
               }
             },
             {
               id: 20,
               type: "MCQ",
               text: "In the past, neuroscience generally regarded bilingualism as:",
               options: ["A. A clear cognitive advantage.", "B. A standard model for the human brain.", "C. A potential hindrance to development.", "D. Essential for academic success."],
               correctAnswer: "C",
               explanation: { 
                   en: "Paragraph A: 'viewed as a complication, or even a disadvantage'.", 
                   ru: "Параграф A: 'рассматривалось как осложнение или даже недостаток'.", 
                   uz: "A paragraf: 'murakkablik yoki hatto kamchilik sifatida qaralgan'." 
               }
             },
             {
               id: 21,
               type: "MCQ",
               text: "According to the passage, 'executive function' helps us to:",
               options: ["A. Learn new vocabulary quickly.", "B. Plan, solve problems, and control attention.", "C. Memorize long lists of words.", "D. Understand foreign cultures."],
               correctAnswer: "B",
               explanation: { 
                   en: "Paragraph B: 'directs the attention processes that we use for planning, solving problems...'", 
                   ru: "Параграф B: 'направляет процессы внимания, которые мы используем для планирования, решения проблем...'.", 
                   uz: "B paragraf: 'rejalashtirish, muammolarni hal qilish uchun foydalanadigan diqqat jarayonlarini boshqaradi...'." 
               }
             },
             {
               id: 22,
               type: "MCQ",
               text: "What does the term 'cognitive reserve' refer to?",
               options: ["A. The ability to learn a third language.", "B. The brain's capacity to cope with damage or aging.", "C. The amount of grey matter in the brain.", "D. The memory storage for vocabulary."],
               correctAnswer: "B",
               explanation: { 
                   en: "Paragraph D: 'buffer against the effects of aging... cope with damage better'.", 
                   ru: "Параграф D: 'буфер против эффектов старения... лучше справляться с повреждениями'.", 
                   uz: "D paragraf: 'qarish ta'siriga qarshi bufer... zararni yaxshiroq yengish'." 
               }
             },
             {
               id: 23,
               type: "MCQ",
               text: "Which statement is true regarding bilingual children?",
               options: ["A. They start speaking later than monolingual children.", "B. They have difficulty understanding social cues.", "C. They may have a better understanding of others' perspectives.", "D. They are immune to Alzheimer's disease."],
               correctAnswer: "C",
               explanation: { 
                   en: "Paragraph E: 'heightened sensitivity to social cues and the perspective of others'.", 
                   ru: "Параграф E: 'повышенная чувствительность к социальным сигналам и точке зрения других'.", 
                   uz: "E paragraf: 'ijtimoiy signallarga va boshqalarning nuqtai nazariga yuqori sezuvchanlik'." 
               }
             },
             {
               id: 24,
               type: "GAP_FILL",
               text: "When speaking, a bilingual person must actively ____ the language they are not using.",
               limit: "ONE_WORD",
               correctAnswer: "suppress", 
               explanation: { 
                   en: "Paragraph B: 'must actively suppress (inhibit) the other'.", 
                   ru: "Параграф B: 'должны активно подавлять (тормозить) другой'.", 
                   uz: "B paragraf: 'boshqasini faol ravishda bostirishi (tormozlashi) kerak'." 
               }
             },
             {
               id: 25,
               type: "GAP_FILL",
               text: "Studies show a greater density of ____ matter in the brains of bilinguals.",
               limit: "ONE_WORD",
               correctAnswer: "grey",
               explanation: { 
                   en: "Paragraph C: 'greater density of grey matter'.", 
                   ru: "Параграф C: 'большая плотность серого вещества'.", 
                   uz: "C paragraf: 'kulrang moddaning zichligi kattaroq'." 
               }
             },
             {
               id: 26,
               type: "GAP_FILL",
               text: "Bilingualism does not prevent dementia, but it may delay the ____ of symptoms by several years.",
               limit: "ONE_WORD",
               correctAnswer: "onset",
               explanation: { 
                   en: "Paragraph D: 'delay their onset'.", 
                   ru: "Параграф D: 'отсрочить их начало'.", 
                   uz: "D paragraf: 'ularning boshlanishini kechiktirish'." 
               }
             }
          ]
        },
        {
          id: "vol2_p3",
          title: "Passage 3: Sleep Resets the Brain for New Learning",
          content: "<p class='mb-4'>While everyone knows that a good night's sleep restores energy, a new study from Cornell University finds it resets another vital function: memory. Learning or experiencing new things activates neurons in the hippocampus, a region of the brain vital for memory. Later, while we sleep, those same neurons repeat the same pattern of activity. This process, known as consolidation, is how the brain stabilizes memories and stores them in the cortex. But this raises a fundamental question: how can we keep learning new things for a lifetime without using up all our neurons?</p><p class='mb-4'>The study, published in the journal Science, identifies a specific mechanism that solves this problem. At certain times during deep sleep, parts of the hippocampus go silent, allowing neurons to 'reset.' Azahara Oliva, an assistant professor of neurobiology and the paper’s author, explains, 'This mechanism could allow the brain to reuse the same resources, the same neurons, for new learning the next day.'</p><p class='mb-4'>The hippocampus is divided into three main regions: CA1, CA2, and CA3. While CA1 and CA3 are well-studied for their role in encoding memories of time and space, the function of CA2 has been less clear. The Cornell researchers found that CA2 is the conductor of this crucial silencing act. They implanted electrodes in the hippocampi of mice to record neuronal activity during both learning and sleep. They observed that during sleep, the neurons in CA1 and CA3 reproduced the patterns developed during the day—essentially 'replaying' the memories to store them. However, interspersed with these replays were periods where the CA1 and CA3 regions suddenly went quiet.</p><p class='mb-4'>'It's a reset of memory, and this state is generated by the middle region, CA2,' says Oliva. The researchers discovered parallel circuits regulated by two types of interneurons. One circuit regulates the memory consolidation (the replay), while the other triggers the reset (the silence). This balance ensures that the brain does not become overloaded. Without this reset, the neurons might remain saturated, making it difficult to encode new information the following day.</p><p class='mb-4'>This discovery has profound implications for medicine. The researchers believe they now have the tools to potentially boost memory by tinkering with these consolidation mechanisms. This could be applied when memory function falters, such as in Alzheimer's disease. Even more intriguingly, they have found evidence for exploring ways to erase negative or traumatic memories, which could offer new treatments for conditions like post-traumatic stress disorder (PTSD). The result helps explain why all animals require sleep. It is not merely a passive state of rest, but a dynamic process that fixes memories and clears the slate for the next day. As Oliva concludes, 'We show that memory is a dynamic process.'</p>",
          questions: [
            {
               id: 27,
               type: "YES_NO_NOT_GIVEN",
               text: "The process of memory consolidation occurs primarily when we are awake.",
               correctAnswer: "NO",
               explanation: { 
                   en: "Text states: 'Later, while we sleep... This process, known as consolidation...'", 
                   ru: "В тексте говорится: 'Позже, пока мы спим... Этот процесс, известный как консолидация...'", 
                   uz: "Matnda aytilishicha: 'Keyinroq, uxlayotganimizda... Konsolidatsiya deb ataladigan bu jarayon...'" 
               }
            },
            {
               id: 28,
               type: "YES_NO_NOT_GIVEN",
               text: "The hippocampus has an unlimited supply of neurons for learning new information.",
               correctAnswer: "NO",
               explanation: { 
                   en: "Text asks: 'how can we keep learning... without using up all our neurons?' implying limits.", 
                   ru: "В тексте задается вопрос: 'как мы можем продолжать учиться... не исчерпав все наши нейроны?', подразумевая ограничения.", 
                   uz: "Matnda so'raladi: 'qanday qilib biz o'rganishda davom etishimiz mumkin... barcha neyronlarimizni ishlatmasdan?', bu cheklovlarni anglatadi." 
               }
            },
            {
               id: 29,
               type: "YES_NO_NOT_GIVEN",
               text: "The CA2 region of the hippocampus was previously better understood than CA1 or CA3.",
               correctAnswer: "NO",
               explanation: { 
                   en: "Text states: 'function of CA2 has been less clear' compared to CA1/CA3.", 
                   ru: "В тексте говорится: 'функция CA2 была менее ясна' по сравнению с CA1/CA3.", 
                   uz: "Matnda aytilishicha: 'CA2 funksiyasi CA1/CA3 ga qaraganda kamroq tushunarli bo'lgan'." 
               }
            },
            {
               id: 30,
               type: "YES_NO_NOT_GIVEN",
               text: "The 'reset' mechanism during sleep allows neurons to be reused for new learning.",
               correctAnswer: "YES",
               explanation: { 
                   en: "Text states: 'allow the brain to reuse the same resources... for new learning'.", 
                   ru: "В тексте говорится: 'позволяет мозгу повторно использовать те же ресурсы... для нового обучения'.", 
                   uz: "Matnda aytilishicha: 'miyaga xuddi shu resurslarni qayta ishlatishga imkon beradi... yangi o'rganish uchun'." 
               }
            },
            {
               id: 31,
               type: "MCQ", 
               text: "This region is where memories are eventually stored after consolidation.",
               options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"],
               correctAnswer: "C",
               explanation: { 
                   en: "Text: 'stored in a large area called the cortex.'", 
                   ru: "Текст: 'хранится в большой области, называемой корой'.", 
                   uz: "Matn: 'cortex (po'stloq) deb ataladigan katta hududda saqlanadi'." 
               }
            },
            {
               id: 32,
               type: "MCQ",
               text: "These regions are well-known for encoding memories related to time and space.",
               options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"],
               correctAnswer: "A",
               explanation: { 
                   en: "Text: 'CA1 and CA3 are involved in encoding memories related to time and space.'", 
                   ru: "Текст: 'CA1 и CA3 участвуют в кодировании воспоминаний, связанных со временем и пространством'.", 
                   uz: "Matn: 'CA1 va CA3 vaqt va makon bilan bog'liq xotiralarni kodlashda ishtirok etadi'." 
               }
            },
            {
               id: 33,
               type: "MCQ",
               text: "This region is responsible for generating the 'silencing' state during sleep.",
               options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"],
               correctAnswer: "B",
               explanation: { 
                   en: "Text: 'state is generated by the middle region, CA2.'", 
                   ru: "Текст: 'состояние генерируется средней областью, CA2'.", 
                   uz: "Matn: 'holat o'rta mintaqa, CA2 tomonidan yaratilgan'." 
               }
            },
            {
               id: 34,
               type: "MCQ",
               text: "These regions go quiet during the reset phase to prevent overload.",
               options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"],
               correctAnswer: "A",
               explanation: { 
                   en: "Text: 'CA1 and CA3 regions suddenly went quiet.'", 
                   ru: "Текст: 'области CA1 и CA3 внезапно затихли'.", 
                   uz: "Matn: 'CA1 va CA3 hududlari to'satdan jim bo'lib qoldi'." 
               }
            },
            {
               id: 35,
               type: "MCQ",
               text: "This region acts as the 'conductor' of the hippocampal circuit.",
               options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"],
               correctAnswer: "B",
               explanation: { 
                   en: "Text: 'CA2 is the conductor of this crucial silencing act.'", 
                   ru: "Текст: 'CA2 является дирижером этого важного акта молчания'.", 
                   uz: "Matn: 'CA2 bu muhim jimjitlik harakatining dirijyori'." 
               }
            },
            {
              id: 36,
              type: "GAP_FILL",
              text: "Researchers believe they might be able to boost memory function in patients suffering from conditions like ____.",
              limit: "NO_MORE_THAN_TWO_WORDS",
              correctAnswer: "Alzheimer's",
              explanation: { 
                  en: "Text: 'such as in Alzheimer's disease'.", 
                  ru: "Текст: 'например, при болезни Альцгеймера'.", 
                  uz: "Matn: 'masalan, Altsgeymer kasalligida'." 
              }
            },
            {
              id: 37, 
              type: "GAP_FILL",
              text: "Furthermore, there is potential to treat ____ by finding ways to erase negative memories.",
              limit: "ONE_WORD", 
              correctAnswer: "PTSD",
              explanation: { 
                  en: "Text: 'treatments for conditions like post-traumatic stress disorder (PTSD)'.", 
                  ru: "Текст: 'лечение таких состояний, как посттравматическое стрессовое расстройство (ПТСР)'.", 
                  uz: "Matn: 'travmadan keyingi stress buzilishi (PTSD) kabi sharoitlarni davolash'." 
              }
            },
            {
              id: 38,
              type: "GAP_FILL",
              text: "There is potential to erase negative or ____ memories.",
              limit: "ONE_WORD",
              correctAnswer: "traumatic",
              explanation: { 
                  en: "Text: 'erase negative or traumatic memories'.", 
                  ru: "Текст: 'стереть негативные или травмирующие воспоминания'.", 
                  uz: "Matn: 'salbiy yoki travmatik xotiralarni o'chirish'." 
              }
            },
            {
              id: 39,
              type: "GAP_FILL",
              text: "Ultimately, the study confirms that sleep is a ____ process essential for maintaining brain function.",
              limit: "ONE_WORD",
              correctAnswer: "dynamic",
              explanation: { 
                  en: "Text: 'not merely a passive state... but a dynamic process'.", 
                  ru: "Текст: 'не просто пассивное состояние... а динамический процесс'.", 
                  uz: "Matn: 'shunchaki passiv holat emas... balki dinamik jarayon'." 
              }
            }
          ]
        }
      ]
    }
};

export const readingModules: Record<string, ModuleData> = {
    vol1,
    vol2
};
