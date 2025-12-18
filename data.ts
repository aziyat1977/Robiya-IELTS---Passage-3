import { ModuleData, TestData } from './types';

// Consistent Teacher Avatar URL (Professional Female)
const TEACHER_AVATAR_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop";

const vol1TestData: TestData = {
  timerSeconds: 3600,
  passages: [
    {
        id: "p1",
        title: "Passage 1: The Ancient Empire That Civilization Forgot",
        content: "<p class='mb-4'>At its height, the ancient city of Hattusa must have been awe-inspiring. Built into a steep hillside in what is today central Turkey, the city was ringed by tall brick walls and home to vast temple complexes and an imposing stone rampart visible from miles away. Today, however, the hillside is home to a mystery. No pillars or high walls mark the ruins of the palace and temples that once stood—just stone foundations half-covered by dry grass. The mud-brick walls have crumbled over the centuries, and floods have eroded the original hillside, sending buildings full of clay tablets cascading down the slopes.</p><p class='mb-4'>These are the remains of the Hittite Empire, a civilization that, around 1200 B.C., rivaled ancient Egypt and Babylon. For at least 450 years, the Hittites controlled much of modern-day Turkey and beyond, from the Black Sea to the Mediterranean. They built sophisticated cities, authored massive archives of cuneiform tablets, and their kings benefited from trade routes that reached far beyond their homeland. Their armies even penetrated deep into Mesopotamia, and their tangle with Egypt’s Pharaoh Ramses II at the Battle of Kadesh resulted in the world’s first recorded peace treaty.</p><p class='mb-4'>Yet, around 1180 B.C., the Hittites vanished with few parallels in history. The Egyptians and Assyrians remained part of historical memory, but the Hittites were extinguished completely. Scholars didn't even register their existence until 3,000 years later, when carvings at ancient Egyptian temples and diplomatic correspondence discovered on clay tablets set off an international hunt for the location of their capital. Digs in the early 1900s finally unearthed a trove of clay cuneiform tablets confirming suspicions that Hattusa was the lost Hittite capital.</p><p class='mb-4'>One question that has long puzzled archaeologists is why the Hittites situated their capital in such an inhospitable location. Hattusa sits in a land of extremes, with scorching summers and frigid winters. Freshwater springs are abundant in the rocky mountains nearby, but the region's few plains are bone-dry most of the year. Recent close readings of Hittite texts, combined with environmental data, show that droughts gripped the region every few decades, pushing populations to the brink of starvation. Despite this, the Hittites built a complex society. Andreas Schachner, of the German Archaeological Institute, suggests their resilience was due to a combination of adaptation and planning. They managed to squeeze more out of the land than anyone before, herding tens of thousands of sheep and goats to provide a reliable food source when crops failed.</p><p class='mb-4'>The empire’s collapse remains a subject of debate. Theories range from political unrest to climate change. Schachner argues there was likely no single reason, but rather a 'perfect storm' of factors. Raiders known as the Kaska were a constant threat from the north. Natural disasters, including powerful earthquakes, regularly rocked the heartland. By about 1250 B.C., palace infighting and royal assassinations grew rampant. Finally, a severe and prolonged drought may have been the breaking point, leading to the abandonment of the capital. Unlike other cities that were sacked and burned, Hattusa appears to have been emptied out slowly, its valuable items taken by the departing rulers, leaving only the heavy stone monuments behind.</p>",
        questions: [
          { id: 1, type: "TFNG", text: "The ruins of Hattusa are currently marked by tall pillars and high walls that are still standing.", correctAnswer: "FALSE", explanation: { en: "Passage 1 says: 'No pillars or high walls mark the ruins...'", ru: "В тексте говорится, что руины не отмечены ни столбами, ни стенами.", uz: "Matnda aytilishicha, xarobalarda ustunlar ham, devorlar ham yo'q." } },
          { id: 2, type: "TFNG", text: "The Hittite Empire was less powerful than the Egyptian and Babylonian empires during its peak.", correctAnswer: "FALSE", explanation: { en: "Passage 2 says they 'rivaled ancient Egypt and Babylon'.", ru: "Текст говорит, что они 'соперничали' с Египтом и Вавилоном.", uz: "Matn ular Misr va Bobil bilan 'raqobatlashgan' deydi." } },
          { id: 3, type: "TFNG", text: "The Battle of Kadesh led to the creation of the first known peace treaty in history.", correctAnswer: "TRUE", explanation: { en: "Passage 2 mentions the 'world’s first recorded peace treaty'.", ru: "Упоминается первый в мире мирный договор.", uz: "Dunyodagi birinchi tinchlik shartnomasi eslatib o'tilgan." } },
          { id: 4, type: "TFNG", text: "Archaeological excavations in the early 20th century confirmed the location of the Hittite capital.", correctAnswer: "TRUE", explanation: { en: "Passage 3: 'Digs in the early 1900s finally unearthed...'", ru: "Раскопки в начале 1900-х подтвердили это.", uz: "1900-yillarning boshidagi qazishmalar buni tasdiqladi." } },
          { id: 5, type: "TFNG", text: "The Hittite capital was located in an area with a mild climate and consistent rainfall.", correctAnswer: "FALSE", explanation: { en: "Passage 4 describes 'scorching summers and frigid winters' and 'bone-dry' plains.", ru: "Описан суровый климат.", uz: "Keskin iqlim tasvirlangan." } },
          { id: 6, type: "GAP_FILL", text: "For centuries, the Hittites were forgotten, unlike the ____ or Assyrians who remained in history books.", limit: "ONE_WORD", correctAnswer: "Egyptians", explanation: { en: "Passage 3 contrasts them with Egyptians and Assyrians.", ru: "Сравнивает с египтянами и ассирийцами.", uz: "Misrliklar va ossuriyaliklar bilan taqqoslaydi." } },
          { id: 7, type: "GAP_FILL", text: "Evidence of their existence was first found in carvings on Egyptian ____ and in diplomatic letters.", limit: "ONE_WORD", correctAnswer: "temples", explanation: { en: "Passage 3 mentions 'carvings at ancient Egyptian temples'.", ru: "Резьба на египетских храмах.", uz: "Misr ibodatxonalaridagi o'ymakorlik." } },
          { id: 8, type: "GAP_FILL", text: "The confirmation of Hattusa as the capital came from the discovery of ____ tablets.", limit: "ONE_WORD", correctAnswer: "clay", explanation: { en: "Passage 3 mentions 'trove of clay cuneiform tablets'.", ru: "Клад глиняных табличек.", uz: "Sopol taxtachalar xazinasi." } },
          { id: 9, type: "GAP_FILL", text: "The city’s location was puzzling because the nearby plains were ____ for most of the year.", limit: "ONE_WORD", correctAnswer: "dry", explanation: { en: "Passage 4 says plains are 'bone-dry'.", ru: "Равнины 'совершенно сухие'.", uz: "Tekisliklar 'juda quruq'." } },
          { id: 10, type: "SHORT_ANSWER", text: "What animals did the Hittites herd to ensure they had food during crop failures?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "sheep and goats", explanation: { en: "Passage 4 mentions herding 'sheep and goats'.", ru: "Пасли овец и коз.", uz: "Qo'y va echkilarni boqishgan." } },
          { id: 11, type: "SHORT_ANSWER", text: "Who were the northern raiders that constantly threatened the Hittite Empire?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "The Kaska", explanation: { en: "Passage 5 identifies 'Raiders known as the Kaska'.", ru: "Налетчики, известные как Каска.", uz: "Kaska nomi bilan tanilgan bosqinchilar." } },
          { id: 12, type: "SHORT_ANSWER", text: "Besides human conflict, what natural phenomenon frequently damaged the Hittite heartland?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "earthquakes", explanation: { en: "Passage 5 mentions 'powerful earthquakes'.", ru: "Мощные землетрясения.", uz: "Kuchli zilzilalar." } },
          { id: 13, type: "SHORT_ANSWER", text: "What is the abandonment of Hattusa compared to, given that valuable items were removed?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "emptied out slowly", explanation: { en: "Passage 5 says it was 'emptied out slowly'.", ru: "Медленно опустел.", uz: "Sekin-asta bo'shab qolgan." } }
        ]
      },
      {
        id: "p2",
        title: "Passage 2: The Economics of Attention",
        content: "<p class='mb-4'><strong>A</strong> If you are not paying for the product, the adage goes, then you are the product. This cliché of the internet age has never been truer than it is today. In the early days of the web, the 'attention economy' was a niche concept discussed by sociologists. Today, it is the financial bedrock of the world’s largest companies. The giants of Silicon Valley do not primarily sell software or devices; they sell the certainty that a user’s gaze will linger on a specific pixel for a specific duration. This commodification of attention has profound implications for economics, psychology, and the fabric of society.</p><p class='mb-4'><strong>B</strong> The fundamental constraint of the information age is not information itself, which is now effectively infinite, but the mental capacity to process it. Herbert Simon, an economist and Nobel laureate, predicted this in 1971. He noted that 'a wealth of information creates a poverty of attention.' As content proliferates, the value of attention rises. Platforms compete ferociously for this finite resource, employing 'persuasive design' techniques rooted in behavioral psychology. Variable rewards, infinite scrolling, and notification badges are not accidental design choices; they are calibrated mechanisms intended to exploit the brain’s dopamine reward loops.</p><p class='mb-4'><strong>C</strong> From an economic perspective, this market suffers from significant externalities. Just as a factory might pollute a river without paying for the cleanup, social media platforms pollute the cognitive environment without bearing the cost. The 'pollution' manifests as fragmented concentration, reduced productivity, and the erosion of deep reading skills. The cost is borne by individuals, who find themselves unable to focus, and by employers, who lose billions of dollars annually to distracted workforces. Furthermore, the market mechanism fails to distinguish between 'high-quality' attention (deep engagement with complex ideas) and 'low-quality' attention (mindless scrolling). In fact, the algorithms often favor the latter, as it is easier to harvest and sell to advertisers.</p><p class='mb-4'><strong>D</strong> The societal impact extends to the political sphere. In an attention economy, outrage is a high-value currency. Content that elicits strong emotional reactions—anger, fear, or shock—travels faster and retains attention longer than nuanced analysis. This creates a perverse incentive structure for politicians and media outlets. To compete, they must adopt the tactics of the attention merchants, favoring sensationalism over substance. The result is a polarized public discourse where consensus-building is sacrificed for engagement metrics.</p><p class='mb-4'><strong>E</strong> Regulators are beginning to wake up to these distortions. The European Union’s Digital Services Act is an early attempt to impose order, requiring platforms to be transparent about their algorithms and giving users more control over what they see. However, structural change may require a rethink of the business models themselves. Some economists advocate for a shift towards subscription-based models, where the user pays the platform directly. This aligns the incentives of the company with the interests of the user: if I pay you to serve me, you have no reason to sell my attention to a third party.</p><p class='mb-4'><strong>F</strong> Ultimately, the reclamation of attention may need to be a personal revolution as much as a regulatory one. 'Digital minimalism' and 'deep work' movements are gaining traction, encouraging individuals to curate their information intake rigorously. This is not merely about 'unplugging' but about recognizing attention as a sovereign asset. In the 21st century, the ability to control one’s own attention is not just a productivity hack; it is a prerequisite for freedom of thought.</p>",
        questions: [
          { id: 14, type: "MATCHING_HEADINGS", target: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "vi", explanation: { en: "Paragraph A discusses attention as a product.", ru: "Параграф A обсуждает внимание как продукт.", uz: "A paragraf e'tiborni mahsulot sifatida muhokama qiladi." } },
          { id: 15, type: "MATCHING_HEADINGS", target: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "v", explanation: { en: "Paragraph B discusses psychological mechanisms like dopamine.", ru: "Психологические механизмы.", uz: "Psixologik mexanizmlar." } },
          { id: 16, type: "MATCHING_HEADINGS", target: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "i", explanation: { en: "Paragraph C discusses economic externalities/pollution.", ru: "Экономические внешние эффекты.", uz: "Iqtisodiy tashqi omillar." } },
          { id: 17, type: "MATCHING_HEADINGS", target: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "ii", explanation: { en: "Paragraph D discusses political impact.", ru: "Политическое влияние.", uz: "Siyosiy ta'sir." } },
          { id: 18, type: "MATCHING_HEADINGS", target: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iv", explanation: { en: "Paragraph E discusses regulation.", ru: "Регулирование.", uz: "Tartibga solish." } },
          { id: 19, type: "MATCHING_HEADINGS", target: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "viii", explanation: { en: "Paragraph F discusses personal responsibility.", ru: "Личная ответственность.", uz: "Shaxsiy javobgarlik." } },
          { id: 20, type: "MCQ", text: "According to the writer, what is the primary product sold by major Silicon Valley companies?", options: ["A. Advanced software and hardware", "B. User data and personal information", "C. The assurance of user attention", "D. Behavioral psychology research"], correctAnswer: "C", explanation: { en: "They sell the 'certainty that a user’s gaze will linger'.", ru: "Они продают уверенность в внимании пользователя.", uz: "Ular foydalanuvchi e'tiboriga ishonchni sotadilar." } },
          { id: 21, type: "MCQ", text: "Herbert Simon’s prediction in 1971 suggested that:", options: ["A. Information would eventually become scarce.", "B. An abundance of information leads to a scarcity of attention.", "C. The value of attention would decrease over time.", "D. Behavioral psychology would dominate economics."], correctAnswer: "B", explanation: { en: "'Wealth of information creates a poverty of attention.'", ru: "Богатство информации создает бедность внимания.", uz: "Axborotning ko'pligi e'tiborning etishmasligini keltirib chiqaradi." } },
          { id: 22, type: "MCQ", text: "The term 'cognitive pollution' in the passage refers to:", options: ["A. The physical waste produced by electronic devices.", "B. The negative side effects of social media on concentration and productivity.", "C. The spread of misinformation and fake news.", "D. The cost of advertising on digital platforms."], correctAnswer: "B", explanation: { en: "Refers to fragmented concentration and reduced productivity.", ru: "Относится к фрагментации внимания.", uz: "Bo'lingan konsentratsiyaga ishora qiladi." } },
          { id: 23, type: "MCQ", text: "Why do algorithms often favor 'low-quality' attention?", options: ["A. It creates deeper engagement with complex ideas.", "B. It is more difficult to harvest than high-quality attention.", "C. It leads to better political discourse.", "D. It is easier to capture and sell to advertisers."], correctAnswer: "D", explanation: { en: "It is 'easier to harvest and sell to advertisers'.", ru: "Легче собрать и продать.", uz: "Yig'ish va sotish osonroq." } },
          { id: 24, type: "GAP_FILL", text: "A fundamental change in ____ models might be necessary.", limit: "ONE_WORD", correctAnswer: "business", explanation: { en: "Rethink of 'business models'.", ru: "Переосмысление бизнес-моделей.", uz: "Biznes modellarini qayta ko'rib chiqish." } },
          { id: 25, type: "GAP_FILL", text: "Moving towards ____ services, where users pay directly, could align company incentives with user interests.", limit: "ONE_WORD", correctAnswer: "subscription", explanation: { en: "Shift towards 'subscription-based models'.", ru: "Переход к моделям подписки.", uz: "Obuna modellariga o'tish." } },
          { id: 26, type: "GAP_FILL", text: "On a personal level, movements like 'digital minimalism' treat attention as a valuable ____ that must be protected.", limit: "ONE_WORD", correctAnswer: "asset", explanation: { en: "Recognizing attention as a 'sovereign asset'.", ru: "Внимание как суверенный актив.", uz: "E'tiborni suveren aktiv sifatida tan olish." } }
        ]
      },
      {
        id: "p3",
        title: "Passage 3: Earth’s Climate Crossing the Line",
        content: "<p class='mb-4'>Humanity is entering a 'new reality,' according to a major report released by the University of Exeter and international collaborators. The report concludes that the planet has now crossed the first of several critical Earth system 'tipping points.' A tipping point occurs when a small change tips a system into a new state, causing significant and often irreversible transformation. The first of these to be breached is the stability of warm-water coral reefs.</p><p class='mb-4'>Mass coral die-off is currently underway. These reefs are vital to nearly a billion people and support a quarter of all marine species. With global warming currently at approximately 1.2°C above pre-industrial levels, reefs are already passing their thermal threshold. The report notes that even if global warming is stabilized at 1.5°C—the target of the Paris Agreement—warm-water coral reefs are virtually certain to be lost on a meaningful scale. This is a tragedy for nature and a catastrophic economic blow for the nations that rely on them for food and tourism revenue.</p><p class='mb-4'>The danger, however, is not isolated to the oceans. The report warns that the world is nearing other interconnected tipping points that could trigger cascading crises. These include the melting of polar ice sheets, the disruption of major ocean currents, and the dieback of the Amazon rainforest. The Amazon, often called the 'lungs of the Earth,' is at risk of transforming from a lush rainforest into a dry savanna. This shift would release massive amounts of stored carbon, further accelerating global heating.</p><p class='mb-4'>Another major concern is the Atlantic Meridional Overturning Circulation (AMOC), a large system of ocean currents that includes the Gulf Stream. The AMOC carries warm water from the tropics northwards, where it cools and sinks. This process is crucial for regulating the climate of the Northern Hemisphere. The report indicates the AMOC is at risk of collapse at temperatures below 2°C of global warming. A collapse would result in much harsher winters in north-west Europe, disrupt the West African and Indian monsoons, and drastically decrease agricultural yields worldwide, threatening global food security.</p><p class='mb-4'>Dr. Manjana Milkoreit, from the University of Oslo, highlights that current policy thinking rarely accounts for these non-linear threats. 'Tipping points present distinct governance challenges,' she argues. Unlike gradual climate change, where effects scale linearly with emissions, tipping points represent abrupt jumps. Preventing them requires 'frontloaded' mitigation pathways—drastic cuts in emissions now, rather than gradual reductions later.</p><p class='mb-4'>Despite the grim outlook, the report emphasizes the potential for 'positive tipping points.' Just as negative feedback loops can spiral out of control, positive social and technological changes can also accelerate rapidly. The report highlights that positive tipping points have already been crossed in the adoption of solar power and electric vehicles in leading markets. Once a new technology becomes cheaper and better than the old polluting one, a rapid mass adoption occurs—a 'tipping' of the market. The authors argue that coordinated policy action at 'super-leverage points' can unleash these cascades across sectors. For example, the decarbonization of the power sector accelerates the decarbonization of transport (via electric vehicles) and heating (via heat pumps).</p><p class='mb-4'>Professor Tim Lenton of the University of Exeter concludes that the power to prevent the worst outcomes is still in human hands, but it requires a shift in strategy. 'We need to do more—and move faster—to seize positive tipping point opportunities,' he says. The goal is to tip the world away from catastrophic outcomes and towards a sustainable future before the domino effect of negative tipping points becomes unstoppable.</p>",
        questions: [
          { id: 27, type: "YES_NO_NOT_GIVEN", text: "The collapse of warm-water coral reefs is a reversible process if temperatures drop immediately.", correctAnswer: "NO", explanation: { en: "Passage defines tipping points as 'often irreversible'.", ru: "Определяет переломные моменты как часто необратимые.", uz: "Burilish nuqtalari ko'pincha qaytarib bo'lmaydigan deb ta'riflanadi." } },
          { id: 28, type: "YES_NO_NOT_GIVEN", text: "The destruction of the Amazon rainforest would have a negligible effect on global carbon emissions.", correctAnswer: "NO", explanation: { en: "It would release 'massive amounts of stored carbon'.", ru: "Высвободит огромное количество углерода.", uz: "Katta miqdordagi uglerodni chiqaradi." } },
          { id: 29, type: "YES_NO_NOT_GIVEN", text: "The collapse of the AMOC would lead to milder winters in Europe.", correctAnswer: "NO", explanation: { en: "Would lead to 'much harsher winters'.", ru: "Приведет к гораздо более суровым зимам.", uz: "Ancha qattiq qishga olib keladi." } },
          { id: 30, type: "YES_NO_NOT_GIVEN", text: "Current government policies adequately address the risks posed by non-linear climate tipping points.", correctAnswer: "NO", explanation: { en: "Policy thinking 'rarely accounts for these non-linear threats'.", ru: "Политика редко учитывает эти угрозы.", uz: "Siyosat bu tahdidlarni kamdan-kam hisobga oladi." } },
          { id: 31, type: "YES_NO_NOT_GIVEN", text: "The adoption of solar power is an example of a positive tipping point that has already occurred in some markets.", correctAnswer: "YES", explanation: { en: "Positive tipping points 'have already been crossed' in solar adoption.", ru: "Положительные моменты уже пройдены.", uz: "Ijobiy burilish nuqtalari allaqachon bosib o'tilgan." } },
          { id: 32, type: "GAP_FILL", text: "A tipping point is defined as a moment when a ____ causes a system to shift into a new state.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "small change", explanation: { en: "When a 'small change' tips a system.", ru: "Когда небольшое изменение переворачивает систему.", uz: "Kichik o'zgarish tizimni o'zgartirganda." } },
          { id: 33, type: "GAP_FILL", text: "The Amazon rainforest is in danger of turning into a ____, which would release stored carbon.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "dry savanna", explanation: { en: "Turning into a 'dry savanna'.", ru: "Превращение в сухую саванну.", uz: "Quruq savannaga aylanish." } },
          { id: 34, type: "GAP_FILL", text: "The ____ is a system of currents responsible for regulating the Northern Hemisphere's climate.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "AMOC", explanation: { en: "The 'AMOC' regulates the climate.", ru: "AMOC регулирует климат.", uz: "AMOC iqlimni tartibga soladi." } },
          { id: 35, type: "GAP_FILL", text: "To prevent tipping points, Dr. Milkoreit suggests ____ pathways that involve immediate, drastic emission cuts.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "frontloaded", explanation: { en: "Suggests 'frontloaded' mitigation.", ru: "Предлагает предварительные меры.", uz: "Oldindan yuklangan choralarni taklif qiladi." } },
          { id: 36, type: "GAP_FILL", text: "The new technology becomes ____ and better than the old polluting one.", limit: "ONE_WORD", correctAnswer: "cheaper", explanation: { en: "Technology becomes 'cheaper and better'.", ru: "Становится дешевле и лучше.", uz: "Arzonroq va yaxshiroq bo'ladi." } },
          { id: 37, type: "GAP_FILL", text: "Rapid mass ____ occurs as the market 'tips' toward the new product.", limit: "ONE_WORD", correctAnswer: "adoption", explanation: { en: "Rapid mass 'adoption' occurs.", ru: "Происходит быстрое массовое принятие.", uz: "Tez ommaviy qabul qilish sodir bo'ladi." } },
          { id: 38, type: "GAP_FILL", text: "Policy action at 'super-leverage points' triggers ____ across other sectors.", limit: "ONE_WORD", correctAnswer: "cascades", explanation: { en: "Triggers 'cascades' across sectors.", ru: "Вызывает каскады в других секторах.", uz: "Boshqa sohalarda kaskadlarni keltirib chiqaradi." } },
          { id: 39, type: "GAP_FILL", text: "Decarbonizing power helps decarbonize ____ and heating.", limit: "ONE_WORD", correctAnswer: "transport", explanation: { en: "Helps decarbonize 'transport'.", ru: "Помогает декарбонизировать транспорт.", uz: "Transportni dekarbonizatsiya qilishga yordam beradi." } },
          { id: 40, type: "GAP_FILL", text: "The world moves away from ____ outcomes toward a sustainable future.", limit: "ONE_WORD", correctAnswer: "catastrophic", explanation: { en: "Moves away from 'catastrophic' outcomes.", ru: "Уходит от катастрофических последствий.", uz: "Halokatli oqibatlardan uzoqlashadi." } }
        ]
      }
    ]
  }
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
      id: "vol2_p1",
      title: "Passage 1: Genetic Secrets of the Monarch Migration",
      content: "<p class='mb-4'>The monarch butterfly (Danaus plexippus) is famous for its epic migration, traveling in great masses from Mexico to Canada every year. The range of that journey has stretched farther and farther north since the end of the last ice age, a feat made possible by a specific gene that makes the butterfly's muscles more efficient. This discovery comes from a study released by the University of Chicago, which suggests that natural selection has honed the monarch for flight efficiency rather than raw power.</p><p class='mb-4'>Study senior author Marcus Kronforst notes, 'At first we thought migratory butterflies needed to bulk up with big muscles. What emerged is that natural selection is mighty powerful for flight efficiency.' The researchers compared the genomes of 89 migratory monarchs with nine non-migratory monarch populations, such as those in South America. To their surprise, a single gene leaped out of the analysis. It wasn't involved with behavior or navigation, but with the formation of collagen, the connective tissue in muscles. This gene appears to reduce energy expenditure in long-distance travelers.</p><p class='mb-4'>In test chambers, migratory monarchs were found to fly most efficiently, though not most powerfully. They are essentially endurance athletes, whereas non-migratory butterflies are sprinters. The 'sprinters' need bursts of speed to out-compete other insects for food in a fixed location, while migratory monarchs fly to places with less competition but must survive the grueling journey. 'If you can't make it back to Mexico, you're dead,' says evolutionary biologist Andrew Brower.</p><p class='mb-4'>The study also suggests that migration was the 'founding condition' for the species. Monarchs likely originated in Mexico and spread worldwide. Populations that stopped migrating—such as those in Hawaii or Puerto Rico—eventually evolved into separate, sedentary groups. Interestingly, the study found that the iconic orange-and-black coloration is also tied to a single gene. A mutation in this gene is responsible for the rare white monarchs found on the island of Oahu.</p><p class='mb-4'>Currently, monarch numbers are dropping precipitously, down to 33 million in 2013, a decline linked to the loss of milkweed, the only plant their caterpillars eat. Understanding the genetics of their migration is crucial, but as ecologist Richard ffrench-Constant notes, 'The role of single genes in sometimes having an outsized effect on species is the theme of these results.'</p>",
      questions: [
        { id: 1, type: "TFNG", text: "The monarch butterfly’s migration range has decreased since the last ice age.", correctAnswer: "FALSE", explanation: { en: "Text states: 'stretched farther and farther north'.", ru: "В тексте: 'расширился дальше и дальше на север'.", uz: "Matnda: 'shimolga qarab tobora kengayib bordi'." } },
        { id: 2, type: "TFNG", text: "Researchers initially expected migratory butterflies to have larger muscles than non-migratory ones.", correctAnswer: "TRUE", explanation: { en: "Text states: 'At first we thought migratory butterflies needed to bulk up with big muscles'.", ru: "Текст: 'Сначала мы думали, что им нужны большие мышцы'.", uz: "Matn: 'Avvaliga biz ularga katta mushaklar kerak deb o'ylagandik'." } },
        { id: 3, type: "TFNG", text: "The gene identified by the researchers is primarily responsible for the butterfly’s navigation skills.", correctAnswer: "FALSE", explanation: { en: "Text: 'It wasn't involved with behavior or navigation'.", ru: "Текст: 'Это не было связано с поведением или навигацией'.", uz: "Matn: 'Bu xatti-harakatlar yoki navigatsiya bilan bog'liq emas edi'." } },
        { id: 4, type: "TFNG", text: "Non-migratory monarchs are described as 'sprinters' because they need speed to compete for food.", correctAnswer: "TRUE", explanation: { en: "Text: 'sprinters need bursts of speed to out-compete other insects for food'.", ru: "Текст: 'спринтерам нужна скорость, чтобы конкурировать за еду'.", uz: "Matn: 'sprinterlar oziq-ovqat uchun raqobatlashish uchun tezlikka muhtoj'." } },
        { id: 5, type: "TFNG", text: "The white monarch butterflies found on Oahu are the result of a diet lacking in milkweed.", correctAnswer: "FALSE", explanation: { en: "Text: 'A mutation in this gene is responsible', not diet.", ru: "Текст: 'Ответственна мутация в этом гене', а не диета.", uz: "Matn: 'Bunga diet emas, balki gendagi mutatsiya sababchi'." } },
        { id: 6, type: "GAP_FILL", text: "A recent study compared the ____ of migratory and non-migratory monarch butterflies.", limit: "ONE_WORD", correctAnswer: "genomes", explanation: { en: "Text: 'compared the genomes'.", ru: "Текст: 'сравнили геномы'.", uz: "Matn: 'genomlarni taqqosladi'." } },
        { id: 7, type: "GAP_FILL", text: "The results showed that a specific gene related to ____ formation helps migratory monarchs use less energy.", limit: "ONE_WORD", correctAnswer: "collagen", explanation: { en: "Text: 'formation of collagen'.", ru: "Текст: 'образование коллагена'.", uz: "Matn: 'kollagen hosil bo'lishi'." } },
        { id: 8, type: "GAP_FILL", text: "This makes them similar to endurance ____, allowing them to survive the long trip to Mexico.", limit: "ONE_WORD", correctAnswer: "athletes", explanation: { en: "Text: 'endurance athletes'.", ru: "Текст: 'выносливые атлеты'.", uz: "Matn: 'chidamli atletlar'." } },
        { id: 9, type: "GAP_FILL", text: "In contrast, non-migratory butterflies rely on power and speed to survive in areas with higher ____.", limit: "ONE_WORD", correctAnswer: "competition", explanation: { en: "Text: 'places with less competition' (implying non-migratory have more).", ru: "Текст: 'места с меньшей конкуренцией'.", uz: "Matn: 'raqobat kamroq bo'lgan joylar'." } },
        { id: 10, type: "SHORT_ANSWER", text: "Where did the monarch species likely originate before spreading worldwide?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "Mexico", explanation: { en: "Text: 'Monarchs likely originated in Mexico'.", ru: "Текст: 'Монархи, вероятно, произошли из Мексики'.", uz: "Matn: 'Monarxlar Meksikadan kelib chiqqan bo'lishi mumkin'." } },
        { id: 11, type: "SHORT_ANSWER", text: "What specific plant is essential for the diet of monarch caterpillars?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "milkweed", explanation: { en: "Text: 'milkweed, the only plant'.", ru: "Текст: 'молочай, единственное растение'.", uz: "Matn: 'shirach, yagona o'simlik'." } },
        { id: 12, type: "SHORT_ANSWER", text: "What year saw the monarch population drop to 33 million?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "2013", explanation: { en: "Text: 'down to 33 million in 2013'.", ru: "Текст: 'до 33 миллионов в 2013'.", uz: "Matn: '2013 yilda 33 milliongacha'." } },
        { id: 13, type: "SHORT_ANSWER", text: "Besides migration, what physical feature is also controlled by a single gene?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "coloration", explanation: { en: "Text: 'coloration is also tied to a single gene'.", ru: "Текст: 'окраска также связана с одним геном'.", uz: "Matn: 'rang ham bitta genga bog'liq'." } }
      ]
    },
    {
      id: "vol2_p2",
      title: "Passage 2: The Bilingual Brain",
      content: "<p class='mb-4'><strong>A</strong> For a long time, the 'monolingual' brain was considered the standard model in neuroscience. Bilingualism was often viewed as a complication, or even a disadvantage, that might confuse children or hinder their academic development. However, research in recent decades has flipped this view on its head. It is now understood that managing two or more languages is a complex cognitive task that 'rewires' the brain, offering significant benefits that extend far beyond the ability to order coffee in Paris or Tokyo.</p><p class='mb-4'><strong>B</strong> The primary cognitive benefit of bilingualism is the enhancement of 'executive function.' This is a command system in the brain that directs the attention processes that we use for planning, solving problems, and performing various other mentally demanding tasks. Bilinguals are constantly exercising this system. When a bilingual person speaks, both languages are active in their brain. To speak one, they must actively suppress (inhibit) the other. This constant mental juggling acts as a workout for the brain's executive control system, strengthening the neural pathways responsible for inhibition and switching attention.</p><p class='mb-4'><strong>C</strong> This mental workout appears to have physical effects. Studies using neuroimaging have shown that bilinguals tend to have a greater density of grey matter (neurons) in the anterior cingulate cortex, a region of the brain involved in monitoring and controlling mental activity. Furthermore, the white matter (the connections between brain regions) is often more robust in older bilinguals compared to monolinguals. This suggests that the lifelong use of two languages may build up a 'cognitive reserve.'</p><p class='mb-4'><strong>D</strong> Cognitive reserve acts as a buffer against the effects of aging. While bilingualism does not prevent Alzheimer's disease or dementia, it may delay their onset. In several studies, bilingual patients diagnosed with Alzheimer's reported the onset of symptoms four to five years later than monolingual patients with the same level of disease pathology. Essentially, the bilingual brain can cope with damage better and function for longer, even when the physical condition of the brain has started to deteriorate.</p><p class='mb-4'><strong>E</strong> The benefits are not limited to the elderly. In children, bilingualism has been linked to better 'theory of mind'—the ability to understand that others have thoughts and perspectives different from one's own. Because bilingual children constantly have to evaluate which language to use with which person, they may develop a heightened sensitivity to social cues and the perspective of others.</p><p class='mb-4'><strong>F</strong> However, it is important not to overstate the case. The 'bilingual advantage' is not found in every single study, and the extent of the benefit likely depends on factors such as the age of acquisition and the frequency of language use. Nevertheless, the consensus is shifting. Language is not just a tool for communication; it is an experience that shapes the architecture of the mind.</p>",
      questions: [
         { id: 14, type: "MATCHING_HEADINGS", target: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "v", explanation: { en: "Historical views on bilingualism.", ru: "Исторические взгляды.", uz: "Tarixiy qarashlar." } },
         { id: 15, type: "MATCHING_HEADINGS", target: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "vii", explanation: { en: "How language management improves brain control.", ru: "Как управление языком улучшает контроль мозга.", uz: "Tilni boshqarish miya nazoratini qanday yaxshilaydi." } },
         { id: 16, type: "MATCHING_HEADINGS", target: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "i", explanation: { en: "Physical changes in brain structure.", ru: "Физические изменения в структуре мозга.", uz: "Miya tuzilishidagi jismoniy o'zgarishlar." } },
         { id: 17, type: "MATCHING_HEADINGS", target: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iv", explanation: { en: "Delaying the symptoms of brain disease.", ru: "Отсрочка симптомов болезни мозга.", uz: "Miya kasalligi belgilarini kechiktirish." } },
         { id: 18, type: "MATCHING_HEADINGS", target: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iii", explanation: { en: "Social benefits for younger learners.", ru: "Социальные преимущества для молодых.", uz: "Yoshlar uchun ijtimoiy imtiyozlar." } },
         { id: 19, type: "MATCHING_HEADINGS", target: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "viii", explanation: { en: "Limitations and variables in research.", ru: "Ограничения в исследованиях.", uz: "Tadqiqotdagi cheklovlar." } },
         { id: 20, type: "MCQ", text: "In the past, neuroscience generally regarded bilingualism as:", options: ["A. A clear cognitive advantage.", "B. A standard model for the human brain.", "C. A potential hindrance to development.", "D. Essential for academic success."], correctAnswer: "C", explanation: { en: "Viewed as a complication/disadvantage.", ru: "Рассматривалось как осложнение.", uz: "Murakkablik/kamchilik sifatida qaralgan." } },
         { id: 21, type: "MCQ", text: "According to the passage, 'executive function' helps us to:", options: ["A. Learn new vocabulary quickly.", "B. Plan, solve problems, and control attention.", "C. Memorize long lists of words.", "D. Understand foreign cultures."], correctAnswer: "B", explanation: { en: "Directs attention processes for planning/solving.", ru: "Направляет процессы внимания.", uz: "Diqqat jarayonlarini boshqaradi." } },
         { id: 22, type: "MCQ", text: "What does the term 'cognitive reserve' refer to?", options: ["A. The ability to learn a third language.", "B. The brain's capacity to cope with damage or aging.", "C. The amount of grey matter in the brain.", "D. The memory storage for vocabulary."], correctAnswer: "B", explanation: { en: "Buffer against aging/damage.", ru: "Буфер против старения.", uz: "Qarish/zararga qarshi bufer." } },
         { id: 23, type: "MCQ", text: "Which statement is true regarding bilingual children?", options: ["A. They start speaking later than monolingual children.", "B. They have difficulty understanding social cues.", "C. They may have a better understanding of others' perspectives.", "D. They are immune to Alzheimer's disease."], correctAnswer: "C", explanation: { en: "Linked to better 'theory of mind'.", ru: "Связано с лучшей 'теорией разума'.", uz: "Yaxshiroq 'ong nazariyasi' bilan bog'liq." } },
         { id: 24, type: "GAP_FILL", text: "When speaking, a bilingual person must actively ____ the language they are not using.", limit: "ONE_WORD", correctAnswer: "suppress", explanation: { en: "Must actively suppress (inhibit) the other.", ru: "Должны активно подавлять другой.", uz: "Boshqasini faol ravishda bostirishi kerak." } },
         { id: 25, type: "GAP_FILL", text: "Studies show a greater density of ____ matter in the brains of bilinguals.", limit: "ONE_WORD", correctAnswer: "grey", explanation: { en: "Greater density of grey matter.", ru: "Большая плотность серого вещества.", uz: "Kulrang moddaning zichligi kattaroq." } },
         { id: 26, type: "GAP_FILL", text: "Bilingualism does not prevent dementia, but it may delay the ____ of symptoms by several years.", limit: "ONE_WORD", correctAnswer: "onset", explanation: { en: "Delay their onset.", ru: "Отсрочить их начало.", uz: "Ular boshlanishini kechiktirishi mumkin." } }
      ]
    },
    {
      id: "vol2_p3",
      title: "Passage 3: Sleep Resets the Brain for New Learning",
      content: "<p class='mb-4'>While everyone knows that a good night's sleep restores energy, a new study from Cornell University finds it resets another vital function: memory. Learning or experiencing new things activates neurons in the hippocampus, a region of the brain vital for memory. Later, while we sleep, those same neurons repeat the same pattern of activity. This process, known as consolidation, is how the brain stabilizes memories and stores them in the cortex. But this raises a fundamental question: how can we keep learning new things for a lifetime without using up all our neurons?</p><p class='mb-4'>The study, published in the journal Science, identifies a specific mechanism that solves this problem. At certain times during deep sleep, parts of the hippocampus go silent, allowing neurons to 'reset.' Azahara Oliva, an assistant professor of neurobiology and the paper’s author, explains, 'This mechanism could allow the brain to reuse the same resources, the same neurons, for new learning the next day.'</p><p class='mb-4'>The hippocampus is divided into three main regions: CA1, CA2, and CA3. While CA1 and CA3 are well-studied for their role in encoding memories of time and space, the function of CA2 has been less clear. The Cornell researchers found that CA2 is the conductor of this crucial silencing act. They implanted electrodes in the hippocampi of mice to record neuronal activity during both learning and sleep. They observed that during sleep, the neurons in CA1 and CA3 reproduced the patterns developed during the day—essentially 'replaying' the memories to store them. However, interspersed with these replays were periods where the CA1 and CA3 regions suddenly went quiet.</p><p class='mb-4'>'It's a reset of memory, and this state is generated by the middle region, CA2,' says Oliva. The researchers discovered parallel circuits regulated by two types of interneurons. One circuit regulates the memory consolidation (the replay), while the other triggers the reset (the silence). This balance ensures that the brain does not become overloaded. Without this reset, the neurons might remain saturated, making it difficult to encode new information the following day.</p><p class='mb-4'>This discovery has profound implications for medicine. The researchers believe they now have the tools to potentially boost memory by tinkering with these consolidation mechanisms. This could be applied when memory function falters, such as in Alzheimer's disease. Even more intriguingly, they have found evidence for exploring ways to erase negative or traumatic memories, which could offer new treatments for conditions like post-traumatic stress disorder (PTSD). The result helps explain why all animals require sleep. It is not merely a passive state of rest, but a dynamic process that fixes memories and clears the slate for the next day. As Oliva concludes, 'We show that memory is a dynamic process.'</p>",
      questions: [
        { id: 27, type: "YES_NO_NOT_GIVEN", text: "The process of memory consolidation occurs primarily when we are awake.", correctAnswer: "NO", explanation: { en: "Text states: 'Later, while we sleep...'", ru: "Текст: 'Позже, когда мы спим...'", uz: "Matn: 'Keyinroq, biz uxlayotganimizda...'" } },
        { id: 28, type: "YES_NO_NOT_GIVEN", text: "The hippocampus has an unlimited supply of neurons for learning new information.", correctAnswer: "NO", explanation: { en: "Implies limits: 'without using up all our neurons?'", ru: "Подразумевает ограничения.", uz: "Cheklovlarni nazarda tutadi." } },
        { id: 29, type: "YES_NO_NOT_GIVEN", text: "The CA2 region of the hippocampus was previously better understood than CA1 or CA3.", correctAnswer: "NO", explanation: { en: "CA2 function 'has been less clear'.", ru: "Функция CA2 'была менее ясна'.", uz: "CA2 funksiyasi 'kamroq tushunarli bo'lgan'." } },
        { id: 30, type: "YES_NO_NOT_GIVEN", text: "The 'reset' mechanism during sleep allows neurons to be reused for new learning.", correctAnswer: "YES", explanation: { en: "Allows brain to 'reuse the same resources'.", ru: "Позволяет 'повторно использовать те же ресурсы'.", uz: "'Xuddi shu resurslarni qayta ishlatishga' imkon beradi." } },
        { id: 31, type: "MCQ", text: "This region is where memories are eventually stored after consolidation.", options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"], correctAnswer: "C", explanation: { en: "Stored in 'the cortex'.", ru: "Хранится в 'коре'.", uz: "'Po'stloq'da saqlanadi." } },
        { id: 32, type: "MCQ", text: "These regions are well-known for encoding memories related to time and space.", options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"], correctAnswer: "A", explanation: { en: "CA1 and CA3 are involved in encoding.", ru: "CA1 и CA3 участвуют в кодировании.", uz: "CA1 va CA3 kodlashda ishtirok etadi." } },
        { id: 33, type: "MCQ", text: "This region is responsible for generating the 'silencing' state during sleep.", options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"], correctAnswer: "B", explanation: { en: "State is generated by 'CA2'.", ru: "Состояние генерируется 'CA2'.", uz: "Holat 'CA2' tomonidan yaratiladi." } },
        { id: 34, type: "MCQ", text: "These regions go quiet during the reset phase to prevent overload.", options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"], correctAnswer: "A", explanation: { en: "CA1 and CA3 regions 'suddenly went quiet'.", ru: "Регионы CA1 и CA3 'внезапно затихли'.", uz: "CA1 va CA3 hududlari 'to'satdan jim bo'ldi'." } },
        { id: 35, type: "MCQ", text: "This region acts as the 'conductor' of the hippocampal circuit.", options: ["A. CA1 and CA3", "B. CA2", "C. The Cortex"], correctAnswer: "B", explanation: { en: "CA2 is the 'conductor'.", ru: "CA2 - это 'дирижер'.", uz: "CA2 - bu 'dirijyor'." } },
        { id: 36, type: "GAP_FILL", text: "Researchers believe they might be able to boost memory function in patients suffering from conditions like ____.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "Alzheimer's", explanation: { en: "Such as in 'Alzheimer's disease'.", ru: "Например, при 'болезни Альцгеймера'.", uz: "'Altsgeymer kasalligi' kabi." } },
        { id: 37, type: "GAP_FILL", text: "Furthermore, there is potential to treat ____ by finding ways to erase negative memories.", limit: "ONE_WORD", correctAnswer: "PTSD", explanation: { en: "Treat conditions like 'PTSD'.", ru: "Лечить состояния, такие как 'ПТСР'.", uz: "'PTSD' kabi sharoitlarni davolash." } },
        { id: 38, type: "GAP_FILL", text: "There is potential to erase negative or ____ memories.", limit: "ONE_WORD", correctAnswer: "traumatic", explanation: { en: "Erase negative or 'traumatic' memories.", ru: "Стереть негативные или 'травматические' воспоминания.", uz: "Salbiy yoki 'travmatik' xotiralarni o'chirish." } },
        { id: 39, type: "GAP_FILL", text: "Ultimately, the study confirms that sleep is a ____ process essential for maintaining brain function.", limit: "ONE_WORD", correctAnswer: "dynamic", explanation: { en: "It is a 'dynamic process'.", ru: "Это 'динамический процесс'.", uz: "Bu 'dinamik jarayon'." } }
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
           "Describe a mountain path that rises precipitously?",
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