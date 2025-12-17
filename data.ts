import { ModuleData } from './types';

export const readingData: ModuleData = {
  id: "read_vol_1",
  title: "IELTS Academic Reading Vol. 1",
  subtitle: "Ancient Civilizations, Attention Economy & Climate Crisis",
  description: "Full mock test with pre-teaching vocabulary and grammar focus.",
  vocabSection: [
    {
      word: "Rampart",
      definition: "A defensive wall of a castle or walled city.",
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
      definition: "(of an environment) harsh and difficult to live in.",
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
      definition: "To cause to cease to exist; to wipe out completely.",
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
      definition: "Treating something (like attention) as a product to be bought and sold.",
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
      definition: "Not possible to undo or alter.",
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
    content: "Nominalization transforms actions (verbs) and descriptions (adjectives) into concepts (nouns). This creates the 'Academic Tone' required for high IELTS scores.",
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
        explanation: "Action 'grew' becomes Concept 'growth'."
      },
      {
        original: "The chemicals reacted violently when mixed.",
        nominalized: "The violent <strong>reaction</strong> of the chemicals surprised the scientists.",
        explanation: "Action 'reacted' becomes Concept 'reaction'."
      },
      {
        original: "It is difficult to solve this complex problem.",
        nominalized: "The <strong>difficulty</strong> of solving this complex problem cannot be overstated.",
        explanation: "Description 'difficult' becomes Concept 'difficulty'."
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
          { id: 1, type: "TFNG", text: "The ruins of Hattusa are currently marked by tall pillars and high walls that are still standing.", correctAnswer: "FALSE" },
          { id: 2, type: "TFNG", text: "The Hittite Empire was less powerful than the Egyptian and Babylonian empires during its peak.", correctAnswer: "FALSE" },
          { id: 3, type: "TFNG", text: "The Battle of Kadesh led to the creation of the first known peace treaty in history.", correctAnswer: "TRUE" },
          { id: 4, type: "TFNG", text: "Archaeological excavations in the early 20th century confirmed the location of the Hittite capital.", correctAnswer: "TRUE" },
          { id: 5, type: "TFNG", text: "The Hittite capital was located in an area with a mild climate and consistent rainfall.", correctAnswer: "FALSE" },
          { id: 6, type: "GAP_FILL", text: "For centuries, the Hittites were forgotten, unlike the ____ or Assyrians who remained in history books.", limit: "ONE_WORD", correctAnswer: "Egyptians" },
          { id: 7, type: "GAP_FILL", text: "Evidence of their existence was first found in carvings on Egyptian ____ and in diplomatic letters.", limit: "ONE_WORD", correctAnswer: "temples" },
          { id: 8, type: "GAP_FILL", text: "The confirmation of Hattusa as the capital came from the discovery of ____ tablets.", limit: "ONE_WORD", correctAnswer: "clay" },
          { id: 9, type: "GAP_FILL", text: "The city’s location was puzzling because the nearby plains were ____ for most of the year.", limit: "ONE_WORD", correctAnswer: "dry" },
          { id: 10, type: "SHORT_ANSWER", text: "What animals did the Hittites herd to ensure they had food during crop failures?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "sheep and goats" },
          { id: 11, type: "SHORT_ANSWER", text: "Who were the northern raiders that constantly threatened the Hittite Empire?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "The Kaska" },
          { id: 12, type: "SHORT_ANSWER", text: "Besides human conflict, what natural phenomenon frequently damaged the Hittite heartland?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "earthquakes" },
          { id: 13, type: "SHORT_ANSWER", text: "What is the abandonment of Hattusa compared to, given that valuable items were removed?", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "emptied out slowly" }
        ]
      },
      {
        id: "p2",
        title: "Passage 2: The Economics of Attention",
        content: "<p class='mb-4'><strong>A</strong> If you are not paying for the product, the adage goes, then you are the product. This cliché of the internet age has never been truer than it is today. In the early days of the web, the 'attention economy' was a niche concept discussed by sociologists. Today, it is the financial bedrock of the world’s largest companies. The giants of Silicon Valley do not primarily sell software or devices; they sell the certainty that a user’s gaze will linger on a specific pixel for a specific duration. This commodification of attention has profound implications for economics, psychology, and the fabric of society.</p><p class='mb-4'><strong>B</strong> The fundamental constraint of the information age is not information itself, which is now effectively infinite, but the mental capacity to process it. Herbert Simon, an economist and Nobel laureate, predicted this in 1971. He noted that 'a wealth of information creates a poverty of attention.' As content proliferates, the value of attention rises. Platforms compete ferociously for this finite resource, employing 'persuasive design' techniques rooted in behavioral psychology. Variable rewards, infinite scrolling, and notification badges are not accidental design choices; they are calibrated mechanisms intended to exploit the brain’s dopamine reward loops.</p><p class='mb-4'><strong>C</strong> From an economic perspective, this market suffers from significant externalities. Just as a factory might pollute a river without paying for the cleanup, social media platforms pollute the cognitive environment without bearing the cost. The 'pollution' manifests as fragmented concentration, reduced productivity, and the erosion of deep reading skills. The cost is borne by individuals, who find themselves unable to focus, and by employers, who lose billions of dollars annually to distracted workforces. Furthermore, the market mechanism fails to distinguish between 'high-quality' attention (deep engagement with complex ideas) and 'low-quality' attention (mindless scrolling). In fact, the algorithms often favor the latter, as it is easier to harvest and sell to advertisers.</p><p class='mb-4'><strong>D</strong> The societal impact extends to the political sphere. In an attention economy, outrage is a high-value currency. Content that elicits strong emotional reactions—anger, fear, or shock—travels faster and retains attention longer than nuanced analysis. This creates a perverse incentive structure for politicians and media outlets. To compete, they must adopt the tactics of the attention merchants, favoring sensationalism over substance. The result is a polarized public discourse where consensus-building is sacrificed for engagement metrics.</p><p class='mb-4'><strong>E</strong> Regulators are beginning to wake up to these distortions. The European Union’s Digital Services Act is an early attempt to impose order, requiring platforms to be transparent about their algorithms and giving users more control over what they see. However, structural change may require a rethink of the business models themselves. Some economists advocate for a shift towards subscription-based models, where the user pays the platform directly. This aligns the incentives of the company with the interests of the user: if I pay you to serve me, you have no reason to sell my attention to a third party.</p><p class='mb-4'><strong>F</strong> Ultimately, the reclamation of attention may need to be a personal revolution as much as a regulatory one. 'Digital minimalism' and 'deep work' movements are gaining traction, encouraging individuals to curate their information intake rigorously. This is not merely about 'unplugging' but about recognizing attention as a sovereign asset. In the 21st century, the ability to control one’s own attention is not just a productivity hack; it is a prerequisite for freedom of thought.</p>",
        questions: [
          { id: 14, type: "MATCHING_HEADINGS", target: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "vi" },
          { id: 15, type: "MATCHING_HEADINGS", target: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "v" },
          { id: 16, type: "MATCHING_HEADINGS", target: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "i" },
          { id: 17, type: "MATCHING_HEADINGS", target: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "ii" },
          { id: 18, type: "MATCHING_HEADINGS", target: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "iv" },
          { id: 19, type: "MATCHING_HEADINGS", target: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "viii" },
          { id: 20, type: "MCQ", text: "According to the writer, what is the primary product sold by major Silicon Valley companies?", options: ["A. Advanced software and hardware", "B. User data and personal information", "C. The assurance of user attention", "D. Behavioral psychology research"], correctAnswer: "C" },
          { id: 21, type: "MCQ", text: "Herbert Simon’s prediction in 1971 suggested that:", options: ["A. Information would eventually become scarce.", "B. An abundance of information leads to a scarcity of attention.", "C. The value of attention would decrease over time.", "D. Behavioral psychology would dominate economics."], correctAnswer: "B" },
          { id: 22, type: "MCQ", text: "The term 'cognitive pollution' in the passage refers to:", options: ["A. The physical waste produced by electronic devices.", "B. The negative side effects of social media on concentration and productivity.", "C. The spread of misinformation and fake news.", "D. The cost of advertising on digital platforms."], correctAnswer: "B" },
          { id: 23, type: "MCQ", text: "Why do algorithms often favor 'low-quality' attention?", options: ["A. It creates deeper engagement with complex ideas.", "B. It is more difficult to harvest than high-quality attention.", "C. It leads to better political discourse.", "D. It is easier to capture and sell to advertisers."], correctAnswer: "D" },
          { id: 24, type: "GAP_FILL", text: "A fundamental change in ____ models might be necessary.", limit: "ONE_WORD", correctAnswer: "business" },
          { id: 25, type: "GAP_FILL", text: "Moving towards ____ services, where users pay directly, could align company incentives with user interests.", limit: "ONE_WORD", correctAnswer: "subscription" },
          { id: 26, type: "GAP_FILL", text: "On a personal level, movements like 'digital minimalism' treat attention as a valuable ____ that must be protected.", limit: "ONE_WORD", correctAnswer: "asset" }
        ]
      },
      {
        id: "p3",
        title: "Passage 3: Earth’s Climate Crossing the Line",
        content: "<p class='mb-4'>Humanity is entering a 'new reality,' according to a major report released by the University of Exeter and international collaborators. The report concludes that the planet has now crossed the first of several critical Earth system 'tipping points.' A tipping point occurs when a small change tips a system into a new state, causing significant and often irreversible transformation. The first of these to be breached is the stability of warm-water coral reefs.</p><p class='mb-4'>Mass coral die-off is currently underway. These reefs are vital to nearly a billion people and support a quarter of all marine species. With global warming currently at approximately 1.2°C above pre-industrial levels, reefs are already passing their thermal threshold. The report notes that even if global warming is stabilized at 1.5°C—the target of the Paris Agreement—warm-water coral reefs are virtually certain to be lost on a meaningful scale. This is a tragedy for nature and a catastrophic economic blow for the nations that rely on them for food and tourism revenue.</p><p class='mb-4'>The danger, however, is not isolated to the oceans. The report warns that the world is nearing other interconnected tipping points that could trigger cascading crises. These include the melting of polar ice sheets, the disruption of major ocean currents, and the dieback of the Amazon rainforest. The Amazon, often called the 'lungs of the Earth,' is at risk of transforming from a lush rainforest into a dry savanna. This shift would release massive amounts of stored carbon, further accelerating global heating.</p><p class='mb-4'>Another major concern is the Atlantic Meridional Overturning Circulation (AMOC), a large system of ocean currents that includes the Gulf Stream. The AMOC carries warm water from the tropics northwards, where it cools and sinks. This process is crucial for regulating the climate of the Northern Hemisphere. The report indicates the AMOC is at risk of collapse at temperatures below 2°C of global warming. A collapse would result in much harsher winters in north-west Europe, disrupt the West African and Indian monsoons, and drastically decrease agricultural yields worldwide, threatening global food security.</p><p class='mb-4'>Dr. Manjana Milkoreit, from the University of Oslo, highlights that current policy thinking rarely accounts for these non-linear threats. 'Tipping points present distinct governance challenges,' she argues. Unlike gradual climate change, where effects scale linearly with emissions, tipping points represent abrupt jumps. Preventing them requires 'frontloaded' mitigation pathways—drastic cuts in emissions now, rather than gradual reductions later.</p><p class='mb-4'>Despite the grim outlook, the report emphasizes the potential for 'positive tipping points.' Just as negative feedback loops can spiral out of control, positive social and technological changes can also accelerate rapidly. The report highlights that positive tipping points have already been crossed in the adoption of solar power and electric vehicles in leading markets. Once a new technology becomes cheaper and better than the old polluting one, a rapid mass adoption occurs—a 'tipping' of the market. The authors argue that coordinated policy action at 'super-leverage points' can unleash these cascades across sectors. For example, the decarbonization of the power sector accelerates the decarbonization of transport (via electric vehicles) and heating (via heat pumps).</p><p class='mb-4'>Professor Tim Lenton of the University of Exeter concludes that the power to prevent the worst outcomes is still in human hands, but it requires a shift in strategy. 'We need to do more—and move faster—to seize positive tipping point opportunities,' he says. The goal is to tip the world away from catastrophic outcomes and towards a sustainable future before the domino effect of negative tipping points becomes unstoppable.</p>",
        questions: [
          { id: 27, type: "YES_NO_NOT_GIVEN", text: "The collapse of warm-water coral reefs is a reversible process if temperatures drop immediately.", correctAnswer: "NO" },
          { id: 28, type: "YES_NO_NOT_GIVEN", text: "The destruction of the Amazon rainforest would have a negligible effect on global carbon emissions.", correctAnswer: "NO" },
          { id: 29, type: "YES_NO_NOT_GIVEN", text: "The collapse of the AMOC would lead to milder winters in Europe.", correctAnswer: "NO" },
          { id: 30, type: "YES_NO_NOT_GIVEN", text: "Current government policies adequately address the risks posed by non-linear climate tipping points.", correctAnswer: "NO" },
          { id: 31, type: "YES_NO_NOT_GIVEN", text: "The adoption of solar power is an example of a positive tipping point that has already occurred in some markets.", correctAnswer: "YES" },
          { id: 32, type: "GAP_FILL", text: "A tipping point is defined as a moment when a ____ causes a system to shift into a new state.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "small change" },
          { id: 33, type: "GAP_FILL", text: "The Amazon rainforest is in danger of turning into a ____, which would release stored carbon.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "dry savanna" },
          { id: 34, type: "GAP_FILL", text: "The ____ is a system of currents responsible for regulating the Northern Hemisphere's climate.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "AMOC" },
          { id: 35, type: "GAP_FILL", text: "To prevent tipping points, Dr. Milkoreit suggests ____ pathways that involve immediate, drastic emission cuts.", limit: "NO_MORE_THAN_TWO_WORDS", correctAnswer: "frontloaded" },
          { id: 36, type: "GAP_FILL", text: "The new technology becomes ____ and better than the old polluting one.", limit: "ONE_WORD", correctAnswer: "cheaper" },
          { id: 37, type: "GAP_FILL", text: "Rapid mass ____ occurs as the market 'tips' toward the new product.", limit: "ONE_WORD", correctAnswer: "adoption" },
          { id: 38, type: "GAP_FILL", text: "Policy action at 'super-leverage points' triggers ____ across other sectors.", limit: "ONE_WORD", correctAnswer: "cascades" },
          { id: 39, type: "GAP_FILL", text: "Decarbonizing power helps decarbonize ____ and heating.", limit: "ONE_WORD", correctAnswer: "transport" },
          { id: 40, type: "GAP_FILL", text: "The world moves away from ____ outcomes toward a sustainable future.", limit: "ONE_WORD", correctAnswer: "catastrophic" }
        ]
      }
    ]
  }
};