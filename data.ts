
import { ModuleData, TestData, GrammarUnit } from './types';

// Consistent Teacher Avatar URL
const TEACHER_AVATAR_URL = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=400&auto=format&fit=crop";

// --- VOLUME 1 GRAMMAR (MFP Structure) ---

const vol1GrammarUnits: GrammarUnit[] = [
  {
    id: "g1_past_perfect",
    title: "Unit 1: The Past Perfect",
    description: "Sequencing events in history (Hittites & Egypt).",
    topic: "Past Perfect",
    meaning: {
      text: {
        en: "We use the Past Perfect to show that one action happened BEFORE another action in the past. It creates a clear timeline of events.",
        ru: "Мы используем Past Perfect, чтобы показать, что одно действие произошло ДО другого действия в прошлом.",
        uz: "Biz o'tmishdagi bir harakat boshqasidan OLDIN sodir bo'lganligini ko'rsatish uchun Past Perfect zamonidan foydalanamiz."
      },
      context: "When describing the Hittite collapse (1180 BC) relative to their discovery (1900 AD)."
    },
    form: {
      structure: "Subject + HAD + Past Participle (V3)",
      explanation: {
        en: "The auxiliary 'had' never changes. The main verb must be in the 3rd form (ed or irregular).",
        ru: "Вспомогательный глагол 'had' не меняется. Основной глагол в 3-й форме.",
        uz: "'Had' yordamchi fe'li o'zgarmaydi. Asosiy fe'l 3-shaklda bo'lishi kerak."
      },
      visual: {
        type: 'TIMELINE',
        title: "Timeline of Discovery",
        steps: [],
        timelineData: [
          { label: "Empire Collapsed (1180 BC)", time: 20, active: true },
          { label: "Digs Started (1900 AD)", time: 80, active: false }
        ]
      }
    },
    visuals: [],
    examples: [
      {
        original: "The empire collapsed. Then archaeologists arrived.",
        nominalized: "By the time archaeologists arrived, the empire <strong>had collapsed</strong>.",
        explanation: { en: "Collapse happened first, so it gets 'had'.", ru: "Крах произошел первым.", uz: "Qulash birinchi sodir bo'ldi." }
      }
    ],
    quiz: [
      { question: "She ____ (leave) before I arrived.", options: ["had left", "left", "leaves"], correct: "had left" },
      { question: "The city ____ (disappear) long ago.", options: ["had disappeared", "disappeared", "disappears"], correct: "had disappeared" },
      { question: "By the time I called, he ____ (leave).", options: ["left", "had left", "has left"], correct: "had left" },
      { question: "She realized she ____ (lose) her keys.", options: ["lost", "has lost", "had lost"], correct: "had lost" },
      { question: "The train ____ (depart) when we arrived.", options: ["had departed", "departs", "departed"], correct: "had departed" },
      { question: "I wished I ____ (study) harder.", options: ["studied", "had studied", "study"], correct: "had studied" },
      { question: "He asked if I ____ (see) the film.", options: ["saw", "have seen", "had seen"], correct: "had seen" },
      { question: "The roads were wet; it ____ (rain).", options: ["rained", "had rained", "rains"], correct: "had rained" },
      { question: "After she ____ (finish) work, she went home.", options: ["finished", "had finished", "has finished"], correct: "had finished" },
      { question: "He ____ (live) in London before moving to Paris.", options: ["lived", "had lived", "has lived"], correct: "had lived" },
      { question: "They ____ (eat) dinner by 8 PM.", options: ["ate", "have eaten", "had eaten"], correct: "had eaten" },
      { question: "I ____ (never / be) to space.", options: ["was never", "had never been", "have never been"], correct: "had never been" }
    ],
    practiceTests: [
        {
            id: 1,
            title: "Chronology Check",
            questions: [
                { id: 1, question: "When the team found the site, the walls ____ (crumble).", options: ["crumbled", "had crumbled", "crumbling"], correct: "had crumbled", explanation: "Crumbling happened before finding." },
                { id: 2, question: "They realized they ____ (make) a mistake.", options: ["made", "had made", "make"], correct: "had made", explanation: "Mistake happened before realization." },
                { id: 3, question: "When the police arrived, the thief ____ (escape).", options: ["escaped", "had escaped"], correct: "had escaped", explanation: "Action completed before another past action." },
                { id: 4, question: "She felt sick because she ____ (eat) too much.", options: ["ate", "had eaten"], correct: "had eaten", explanation: "Eating happened before feeling sick." },
                { id: 5, question: "The garden was dead because it ____ (be) dry all summer.", options: ["was", "had been"], correct: "had been", explanation: "State existed before the observation." },
                { id: 6, question: "He ____ (already / leave) when the trouble started.", options: ["already left", "had already left"], correct: "had already left", explanation: "Action completed prior to another event." },
                { id: 7, question: "By 1900, the civilization ____ (collapse) completely.", options: ["collapsed", "had collapsed"], correct: "had collapsed", explanation: "Collapse finished by a specific time in the past." },
                { id: 8, question: "They discovered that someone ____ (steal) the jewels.", options: ["stole", "had stolen"], correct: "had stolen", explanation: "Theft happened before discovery." },
                { id: 9, question: "I didn't recognize him because he ____ (change) so much.", options: ["changed", "had changed"], correct: "had changed", explanation: "Change occurred before the meeting." },
                { id: 10, question: "The meeting ____ (start) by the time I logged in.", options: ["started", "had started"], correct: "had started", explanation: "Event began before another action." },
                { id: 11, question: "She ____ (publish) three books before she turned 30.", options: ["published", "had published"], correct: "had published", explanation: "Achievements before a past milestone." },
                { id: 12, question: "We ____ (wait) for hours before the bus finally came.", options: ["waited", "had waited"], correct: "had waited", explanation: "Duration before a past event." }
            ]
        }
    ]
  },
  {
    id: "g1_passive_voice",
    title: "Unit 2: Passive Voice",
    description: "Shifting focus from the 'doer' to the 'object'.",
    topic: "Passive Voice",
    meaning: {
      text: {
        en: "In academic writing, the ACTION or the RESULT is often more important than WHO did it. We use passive voice to be objective.",
        ru: "В академическом письме ДЕЙСТВИЕ или РЕЗУЛЬТАТ часто важнее, чем ТОТ, кто это сделал.",
        uz: "Akademik yozuvda HARAKAT yoki NATIJA uni KIM bajarganidan ko'ra muhimroqdir."
      },
      context: "Describing archaeological findings or manufacturing processes."
    },
    form: {
      structure: "Object + BE + Past Participle (+ by Agent)",
      explanation: {
        en: "The object of the active sentence moves to the front. The verb 'to be' changes tense.",
        ru: "Объект активного предложения перемещается вперед.",
        uz: "Faol gapning to'ldiruvchisi oldinga o'tadi."
      },
      visual: {
        type: 'TRANSFORMATION',
        title: "Active to Passive Shift",
        steps: [
            { text: "[Archaeologists] [FOUND] [the city].", highlightIndices: [0, 1, 2], annotation: "Active: Focus on People" },
            { text: "[The city] [WAS FOUND] [by archaeologists].", highlightIndices: [0, 1, 2], annotation: "Passive: Focus on City" }
        ]
      }
    },
    visuals: [],
    examples: [
      {
        original: "Someone built the walls in 1200 BC.",
        nominalized: "The walls <strong>were built</strong> in 1200 BC.",
        explanation: { en: "Focus shifts to 'The walls'.", ru: "Фокус на стенах.", uz: "E'tibor devorlarga qaratiladi." }
      }
    ],
    quiz: [
      { question: "The letter ____ (send) yesterday.", options: ["was sent", "sent", "is sent"], correct: "was sent" },
      { question: "The decision ____ (make) yesterday.", options: ["made", "was made", "is made"], correct: "was made" },
      { question: "English ____ (speak) here.", options: ["speaks", "is spoken", "spoken"], correct: "is spoken" },
      { question: "The house ____ (build) in 1890.", options: ["built", "was built", "is built"], correct: "was built" },
      { question: "My car ____ (repair) right now.", options: ["repairs", "is being repaired", "was repaired"], correct: "is being repaired" },
      { question: "The results ____ (publish) next week.", options: ["will publish", "will be published", "published"], correct: "will be published" },
      { question: "Many crimes ____ (commit) every year.", options: ["are committed", "commit", "committed"], correct: "are committed" },
      { question: "The cake ____ (eat) by the dog.", options: ["ate", "was eaten", "is eaten"], correct: "was eaten" },
      { question: "A new bridge ____ (construct) at the moment.", options: ["constructs", "is being constructed", "was constructed"], correct: "is being constructed" },
      { question: "The letter ____ (not / send) yet.", options: ["has not been sent", "did not send", "was not sent"], correct: "has not been sent" },
      { question: "Mistakes ____ (make).", options: ["were made", "made", "did make"], correct: "were made" }
    ],
    practiceTests: [
        {
            id: 1,
            title: "Passive Construction",
            questions: [
                { id: 1, question: "The data ____ (analyze) right now.", options: ["is analyzed", "is being analyzed", "was analyzed"], correct: "is being analyzed", explanation: "Present Continuous Passive." },
                { id: 2, question: "The solution ____ (find) yet.", options: ["has not been found", "was not found", "is not found"], correct: "has not been found", explanation: "Present Perfect Passive." },
                { id: 3, question: "The data ____ (collect) by the research team last year.", options: ["collected", "was collected"], correct: "was collected", explanation: "Past Simple Passive." },
                { id: 4, question: "A new planet ____ (discover) recently.", options: ["discovered", "has been discovered"], correct: "has been discovered", explanation: "Present Perfect Passive (recent past)." },
                { id: 5, question: "The meeting ____ (hold) in Room 3B.", options: ["is held", "holds"], correct: "is held", explanation: "General fact/schedule." },
                { id: 6, question: "This picture ____ (paint) by Picasso.", options: ["painted", "was painted"], correct: "was painted", explanation: "Past action by specific agent." },
                { id: 7, question: "The files ____ (delete) by accident.", options: ["deleted", "were deleted"], correct: "were deleted", explanation: "Past event happened to the object." },
                { id: 8, question: "Smoking ____ (prohibit) in this area.", options: ["is prohibited", "prohibits"], correct: "is prohibited", explanation: "General rule/state." },
                { id: 9, question: "The winner ____ (announce) tomorrow.", options: ["will announce", "will be announced"], correct: "will be announced", explanation: "Future Passive." },
                { id: 10, question: "The homework must ____ (finish) by Friday.", options: ["finish", "be finished"], correct: "be finished", explanation: "Modal Passive." },
                { id: 11, question: "My bike ____ (steal) last night.", options: ["stole", "was stolen"], correct: "was stolen", explanation: "Past Simple Passive." },
                { id: 12, question: "Coffee ____ (grow) in Brazil.", options: ["grows", "is grown"], correct: "is grown", explanation: "General truth." }
            ]
        }
    ]
  },
  {
    id: "g1_nominalization",
    title: "Unit 3: Nominalization",
    description: "The art of turning verbs into nouns.",
    topic: "Nominalization",
    meaning: {
      text: {
        en: "Nominalization makes text denser and more formal by turning actions (verbs) into concepts (nouns). It is key for summarizing.",
        ru: "Номинализация делает текст более плотным и формальным.",
        uz: "Nominalizatsiya matnni zichroq va rasmiyroq qiladi."
      },
      context: "Summarizing trends or scientific processes."
    },
    form: {
      structure: "Verb/Adj -> Abstract Noun",
      explanation: {
        en: "Common suffixes: -tion, -ment, -ness, -ity, -ance.",
        ru: "Обычные суффиксы: -tion, -ment, -ness.",
        uz: "Umumiy qo'shimchalar: -tion, -ment, -ness."
      },
      visual: {
        type: 'FORMULA',
        title: "Concept Creation",
        steps: [],
        formulaItems: [
          { label: "Grow", color: "bg-blue-500" },
          { label: "+ th", color: "bg-slate-600" },
          { label: "= Growth", color: "bg-purple-500" }
        ]
      }
    },
    visuals: [],
    examples: [
        {
            original: "The population grew rapidly.",
            nominalized: "The rapid <strong>growth</strong> of the population...",
            explanation: { en: "Verb to Noun.", ru: "Глагол в Существительное.", uz: "Fe'l Otga aylanadi." }
        }
    ],
    quiz: [
        { question: "React -> ____", options: ["Reaction", "Reacting"], correct: "Reaction" },
        { question: "Analyze -> ____", options: ["Analysis", "Analyzing"], correct: "Analysis" },
        { question: "Develop -> ____", options: ["Development", "Developing"], correct: "Development" },
        { question: "Solve -> ____", options: ["Solution", "Solving"], correct: "Solution" },
        { question: "Discuss -> ____", options: ["Discussion", "Discussing"], correct: "Discussion" },
        { question: "Produce -> ____", options: ["Production", "Producing"], correct: "Production" },
        { question: "Fail -> ____", options: ["Failure", "Failing"], correct: "Failure" },
        { question: "Refuse -> ____", options: ["Refusal", "Refusing"], correct: "Refusal" },
        { question: "Create -> ____", options: ["Creation", "Creating"], correct: "Creation" },
        { question: "Silent -> ____", options: ["Silence", "Silencing"], correct: "Silence" },
        { question: "Efficient -> ____", options: ["Efficiency", "Efficiently"], correct: "Efficiency" }
    ],
    practiceTests: [
        {
            id: 1,
            title: "Formalizing Text",
            questions: [
                { id: 1, question: "The bomb exploded. -> The ____ caused damage.", options: ["explosion", "explode"], correct: "explosion", explanation: "Noun form required." },
                { id: 2, question: "The machine performs well. -> The ____ of the machine is good.", options: ["performance", "performing"], correct: "performance", explanation: "Abstract noun." },
                { id: 3, question: "They argued loudly. -> There was a loud ____.", options: ["argument", "arguing"], correct: "argument", explanation: "Noun for the event." },
                { id: 4, question: "The species evolved slowly. -> The slow ____ of the species...", options: ["evolution", "evolving"], correct: "evolution", explanation: "Process noun." },
                { id: 5, question: "We need to solve this. -> We need a ____.", options: ["solution", "solving"], correct: "solution", explanation: "Object noun." },
                { id: 6, question: "The government decided to act. -> The government's ____ was to act.", options: ["decision", "deciding"], correct: "decision", explanation: "Abstract concept." },
                { id: 7, question: "The bomb exploded. -> The ____ was loud.", options: ["explosion", "exploding"], correct: "explosion", explanation: "Event noun." },
                { id: 8, question: "Students must attend. -> ____ is mandatory.", options: ["Attendance", "Attending"], correct: "Attendance", explanation: "Concept noun." },
                { id: 9, question: "The bacteria resisted the drug. -> Drug ____ is a problem.", options: ["resistance", "resisting"], correct: "resistance", explanation: "Abstract quality." },
                { id: 10, question: "He is very intelligent. -> His ____ is impressive.", options: ["intelligence", "intelligent"], correct: "intelligence", explanation: "Attribute noun." },
                { id: 11, question: "The sun radiates heat. -> The ____ of heat from the sun...", options: ["radiation", "radiating"], correct: "radiation", explanation: "Process noun." }
            ]
        }
    ]
  }
];

// --- VOLUME 2 GRAMMAR (MFP Structure) ---

const vol2GrammarUnits: GrammarUnit[] = [
  {
    id: "g2_conditionals",
    title: "Unit 1: Conditionals",
    description: "Hypotheticals and scientific truths.",
    topic: "Conditionals",
    meaning: {
        text: {
            en: "Conditionals describe the relationship between a condition (if...) and a result. In science, we use them for facts (Zero) or possibilities (First).",
            ru: "Условные предложения описывают связь между условием и результатом.",
            uz: "Shartli gaplar shart va natija o'rtasidagi munosabatni tasvirlaydi."
        },
        context: "Describing biological triggers (Monarch migration)."
    },
    form: {
        structure: "If + Condition, + Result",
        explanation: {
            en: "Zero: If + Pres, + Pres. First: If + Pres, + Will/Can.",
            ru: "Zero: Настоящее + Настоящее.",
            uz: "Zero: Hozirgi + Hozirgi."
        },
        visual: {
            type: 'FORMULA',
            title: "The Logic Flow",
            steps: [],
            formulaItems: [
                { label: "IF Temp drops", color: "bg-blue-600" },
                { label: "->", color: "bg-white text-black" },
                { label: "Monarchs migrate", color: "bg-purple-600" }
            ]
        }
    },
    visuals: [],
    examples: [
        {
            original: "It gets cold. They fly south.",
            nominalized: "If it <strong>gets</strong> cold, they <strong>fly</strong> south.",
            explanation: { en: "Zero conditional for general truth.", ru: "Нулевое условие для факта.", uz: "Umumiy haqiqat uchun nol shart." }
        }
    ],
    quiz: [
        { question: "If ice melts, water levels ____.", options: ["rise", "will rise"], correct: "rise" },
        { question: "If it rains, I ____ (stay) home.", options: ["stay", "will stay"], correct: "will stay" },
        { question: "If I were you, I ____ (go).", options: ["go", "would go"], correct: "would go" },
        { question: "If you heat ice, it ____ (melt).", options: ["melts", "will melt"], correct: "melts" },
        { question: "If he had known, he ____ (come).", options: ["would come", "would have come"], correct: "would have come" },
        { question: "Unless you study, you ____ (fail).", options: ["fail", "will fail"], correct: "will fail" },
        { question: "If I ____ (be) rich, I would buy a boat.", options: ["am", "were"], correct: "were" },
        { question: "Water boils if it ____ (reach) 100 degrees.", options: ["reaches", "will reach"], correct: "reaches" },
        { question: "If she ____ (call), tell her I'm out.", options: ["calls", "will call"], correct: "calls" },
        { question: "I would help if I ____ (can).", options: ["can", "could"], correct: "could" },
        { question: "If the sun ____ (rise), we wake up.", options: ["rises", "will rise"], correct: "rises" }
    ],
    practiceTests: [
        { 
            id: 1, 
            title: "Conditional Logic", 
            questions: [
                { id: 1, question: "If the gene ____ (change), the color changes.", options: ["changes", "will change"], correct: "changes", explanation: "Scientific fact." },
                { id: 2, question: "If the temperature drops, the chemical ____ (react).", options: ["reacts", "will react"], correct: "reacts", explanation: "Zero conditional (Fact)." },
                { id: 3, question: "If the government ____ (invest) more, the economy would grow.", options: ["invests", "invested"], correct: "invested", explanation: "Second conditional (Hypothetical)." },
                { id: 4, question: "If they ____ (listen) to the warnings, the disaster wouldn't have happened.", options: ["listened", "had listened"], correct: "had listened", explanation: "Third conditional (Past regret)." },
                { id: 5, question: "Plants die if they ____ (not / get) water.", options: ["do not get", "did not get"], correct: "do not get", explanation: "General truth." },
                { id: 6, question: "If I see him, I ____ (tell) him.", options: ["tell", "will tell"], correct: "will tell", explanation: "First conditional (Future possibility)." },
                { id: 7, question: "I wouldn't do that if I ____ (be) you.", options: ["am", "were"], correct: "were", explanation: "Advice (Second conditional)." },
                { id: 8, question: "If the experiment ____ (fail), we will try again.", options: ["fails", "failed"], correct: "fails", explanation: "Real possibility." },
                { id: 9, question: "Provided that the data ____ (be) correct, we can proceed.", options: ["is", "was"], correct: "is", explanation: "Formal condition." },
                { id: 10, question: "If I ____ (have) time tomorrow, I will help.", options: ["have", "had"], correct: "have", explanation: "Real condition." },
                { id: 11, question: "Had I known, I ____ (act) differently.", options: ["acted", "would have acted"], correct: "would have acted", explanation: "Inverted Third conditional." }
            ] 
        }
    ]
  },
  {
    id: "g2_participles",
    title: "Unit 2: Participle Clauses",
    description: "Advanced sentence reduction.",
    topic: "Participles",
    meaning: {
        text: { en: "We use -ing or -ed clauses to shorten 'relative clauses' (who/which). It makes writing flow better.", ru: "Мы используем причастия для сокращения.", uz: "Biz sifatdoshlardan gapni qisqartirish uchun foydalanamiz." },
        context: "Describing simultaneous actions or characteristics."
    },
    form: {
        structure: "Noun + V-ing (Active) OR Noun + V-ed (Passive)",
        explanation: { en: "Active meaning = -ing. Passive meaning = -ed.", ru: "Активный = -ing. Пассивный = -ed.", uz: "Faol = -ing. Passiv = -ed." },
        visual: {
            type: 'TRANSFORMATION',
            title: "Reduction Technique",
            steps: [
                { text: "The bird [WHICH IS FLYING] south...", highlightIndices: [2,3,4], annotation: "Full Relative Clause" },
                { text: "The bird [FLYING] south...", highlightIndices: [2], annotation: "Reduced Participle" }
            ]
        }
    },
    visuals: [],
    examples: [],
    quiz: [
        { question: "The man ____ (stand) there.", options: ["standing", "stood"], correct: "standing" },
        { question: "The girl ____ (sit) next to me is nice.", options: ["sitting", "sat"], correct: "sitting" },
        { question: "The car, ____ (make) in Germany, is reliable.", options: ["making", "made"], correct: "made" },
        { question: "____ (Feel) tired, he went to bed.", options: ["Feeling", "Felt"], correct: "Feeling" },
        { question: "____ (Damage) in the storm, the roof leaked.", options: ["Damaging", "Damaged"], correct: "Damaged" },
        { question: "The book ____ (write) by him is famous.", options: ["writing", "written"], correct: "written" },
        { question: "____ (Watch) TV, I fell asleep.", options: ["Watching", "Watched"], correct: "Watching" },
        { question: "The points ____ (discuss) were important.", options: ["discussing", "discussed"], correct: "discussed" },
        { question: "____ (Have) finished work, I left.", options: ["Having", "Had"], correct: "Having" },
        { question: "The man ____ (drive) the bus was angry.", options: ["driving", "driven"], correct: "driving" },
        { question: "Items ____ (leave) here will be removed.", options: ["leaving", "left"], correct: "left" }
    ],
    practiceTests: [
        { 
            id: 1, 
            title: "Reduction Drill", 
            questions: [
                { id: 1, question: "The study ____ (publish) yesterday is good.", options: ["published", "publishing"], correct: "published", explanation: "Passive meaning." },
                { id: 2, question: "The study, ____ (conduct) in 2020, showed results.", options: ["conducted", "conducting"], correct: "conducted", explanation: "Reduced passive clause." },
                { id: 3, question: "____ (Analyze) the data, the scientist found an error.", options: ["Analyzing", "Analyzed"], correct: "Analyzing", explanation: "Active participle clause (simultaneous action)." },
                { id: 4, question: "The solution ____ (propose) by the team was rejected.", options: ["proposed", "proposing"], correct: "proposed", explanation: "Passive relative clause reduction." },
                { id: 5, question: "____ (Know) the answer, she raised her hand.", options: ["Knowing", "Known"], correct: "Knowing", explanation: "Active state." },
                { id: 6, question: "The artifacts ____ (find) in the cave are ancient.", options: ["finding", "found"], correct: "found", explanation: "Passive." },
                { id: 7, question: "____ (Walk) down the street, I saw a cat.", options: ["Walking", "Walked"], correct: "Walking", explanation: "Active action." },
                { id: 8, question: "The decision ____ (take) yesterday was final.", options: ["taking", "taken"], correct: "taken", explanation: "Passive event." },
                { id: 9, question: "____ (Be) a doctor, he knew what to do.", options: ["Being", "Been"], correct: "Being", explanation: "State reduction." },
                { id: 10, question: "The glass, ____ (break) on the floor, was sharp.", options: ["broken", "breaking"], correct: "broken", explanation: "Resulting state." },
                { id: 11, question: "____ (Complete) the task, he went home.", options: ["Having completed", "Completing"], correct: "Having completed", explanation: "Perfect participle for sequence." }
            ] 
        }
    ]
  },
  {
    id: "g2_cohesion",
    title: "Unit 3: Cohesion",
    description: "Glueing the text together.",
    topic: "Cohesion",
    meaning: {
        text: { en: "Cohesion uses words like 'this', 'it', 'these' to refer back to ideas mentioned earlier.", ru: "Когезия использует ссылки.", uz: "Kogezya havolalardan foydalanadi." },
        context: "Tracking ideas across sentences."
    },
    form: {
        structure: "Reference Word -> Antecedent",
        explanation: { en: "Ensure the reference word matches the number (singular/plural) of the previous noun.", ru: "Проверьте число.", uz: "Sonni tekshiring." },
        visual: {
            type: 'FORMULA',
            title: "Linking Back",
            steps: [],
            formulaItems: [
                { label: "Idea A", color: "bg-slate-500" },
                { label: "<-- Ref (This)", color: "bg-amber-500" },
                { label: "Sentence B", color: "bg-slate-500" }
            ]
        }
    },
    visuals: [],
    examples: [],
    quiz: [
        { question: "I like apples. ____ are tasty.", options: ["They", "It"], correct: "They" },
        { question: "John is here. I saw ____.", options: ["him", "he"], correct: "him" },
        { question: "Use a map. ____ will help you.", options: ["It", "They"], correct: "It" },
        { question: "I like cars. ____ are fast.", options: ["It", "They"], correct: "They" },
        { question: "This is a problem. ____ needs a solution.", options: ["It", "These"], correct: "It" },
        { question: "People travel. ____ learn new things.", options: ["They", "He"], correct: "They" },
        { question: "The theory is complex. ____ explains gravity.", options: ["It", "They"], correct: "It" },
        { question: "Lions hunt. ____ are predators.", options: ["It", "They"], correct: "They" },
        { question: "Read the book. ____ is interesting.", options: ["It", "These"], correct: "It" },
        { question: "Ideas are powerful. ____ change the world.", options: ["It", "They"], correct: "They" },
        { question: "The sun sets. ____ gets dark.", options: ["It", "He"], correct: "It" }
    ],
    practiceTests: [
        { 
            id: 1, 
            title: "Reference Check", 
            questions: [
                { id: 1, question: "Global warming is real. ____ is a threat.", options: ["This", "These"], correct: "This", explanation: "Singular concept." },
                { id: 2, question: "Climate change is a threat. ____ requires action.", options: ["It", "They"], correct: "It", explanation: "Singular subject." },
                { id: 3, question: "Scientists found new cells. ____ were distinct.", options: ["They", "It"], correct: "They", explanation: "Plural subject (cells)." },
                { id: 4, question: "The data was corrupted. ____ meant the experiment failed.", options: ["This", "These"], correct: "This", explanation: "Refers to the situation." },
                { id: 5, question: "Pollution is rising. ____ is a concern.", options: ["This", "Those"], correct: "This", explanation: "Singular situation." },
                { id: 6, question: "Computers are useful, but ____ can break.", options: ["they", "it"], correct: "they", explanation: "Plural (Computers)." },
                { id: 7, question: "The ancient city was found. ____ walls were high.", options: ["Its", "It's"], correct: "Its", explanation: "Possessive." },
                { id: 8, question: "She has a hypothesis. ____ suggests that...", options: ["It", "They"], correct: "It", explanation: "Singular (Hypothesis)." },
                { id: 9, question: "There are many reasons. ____ include...", options: ["These", "This"], correct: "These", explanation: "Plural (Reasons)." },
                { id: 10, question: "The result was unexpected. ____ surprised everyone.", options: ["It", "They"], correct: "It", explanation: "The event." },
                { id: 11, question: "Bacteria evolve. ____ become resistant.", options: ["They", "It"], correct: "They", explanation: "Plural (Bacteria)." }
            ] 
        }
    ]
  }
];

// --- PLACEHOLDER TEST DATA (Unchanged from previous context) ---
const vol1TestData: TestData = { timerSeconds: 3600, passages: [{ id: "p1", title: "Passage 1", content: "", questions: [] }] };
const vol2TestData: TestData = { timerSeconds: 3600, passages: [{ id: "p1", title: "Passage 1", content: "", questions: [] }] };

const vol1: ModuleData = {
  id: "read_vol_1",
  title: "IELTS Academic Vol. 1",
  subtitle: "Ancient Civilizations, Attention Economy & Climate Crisis",
  description: "Full mock test with pre-teaching vocabulary and grammar focus.",
  vocabSection: [
      {
      word: "Rampart",
      avatarUrl: TEACHER_AVATAR_URL,
      definition: { en: "A defensive wall.", ru: "Крепостной вал.", uz: "Mudofaa devori." },
      speakingQuestions: ["Describe a historical place."],
      quiz: [{ question: "Soldiers stood on the ____.", options: ["rampart", "ditch"], correct: "rampart" }],
      wordFormation: [{ root: "RAMPART", correct: "ramparts", sentence: "The ____ were high." }]
    }
  ],
  grammarUnits: vol1GrammarUnits,
  testData: vol1TestData
};

const vol2: ModuleData = {
    id: "read_vol_2",
    title: "IELTS Academic Vol. 2",
    subtitle: "Monarch Migration, The Bilingual Brain & Sleep Mechanics",
    description: "Advanced vocabulary for neuroscience and nature.",
    vocabSection: [],
    grammarUnits: vol2GrammarUnits,
    testData: vol2TestData
};

export const readingModules: Record<string, ModuleData> = { vol1, vol2 };
