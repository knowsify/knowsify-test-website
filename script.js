function showScreen(screenId) {
  // hide all screens to begin with
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  
  // show the specific screen wanted
  document.getElementById(screenId).classList.remove('hidden');
}
// User list
const users = [
    { id: "pxstudent3001", password: "pxstudent3001password"},
    { id: "pxstudent3002", password: "pxstudent3002password"},
    { id: "pxstudent3003", password: "pxstudent3003password"},
    { id: "pxstudent3004", password: "pxstudent3004password"},
    { id: "pxstudent3005", password: "pxstudent3005password"},
    { id: "pxstudent3006", password: "pxstudent3006password"},
    { id: "pxstudent3007", password: "pxstudent3007password"},
    { id: "pxstudent3008", password: "pxstudent3008password"},
    { id: "pxstudent3009", password: "pxstudent3009password"},
    { id: "pxstudent3010", password: "pxstudent3010password"},
    { id: "pxstudent3011", password: "pxstudent3011password"},
    { id: "pxstudent3012", password: "pxstudent3012password"},
    { id: "pxstudent3013", password: "pxstudent3013password"},
    { id: "pxstudent3014", password: "pxstudent3014password"},
    { id: "pxstudent3015", password: "pxstudent3015password"},
    { id: "pxstudent3016", password: "pxstudent3016password"},
    { id: "pxstudent3017", password: "pxstudent3017password"},
    { id: "pxstudent3018", password: "pxstudent3018password"},
    { id: "pxstudent3019", password: "pxstudent3019password"},
    { id: "pxstudent3020", password: "pxstudent3020password"},
    { id: "pxstudent3021", password: "pxstudent3021password"},
    { id: "pxstudent3022", password: "pxstudent3022password"},
    { id: "pxstudent3023", password: "pxstudent3023password"},
    { id: "pxstudent3024", password: "pxstudent3024password"},
    { id: "pxstudent3025", password: "pxstudent3025password"},
    { id: "pxstudent3026", password: "pxstudent3026password"},
    { id: "pxstudent3027", password: "pxstudent3027password"},
    { id: "pxstudent3028", password: "pxstudent3028password"},
    { id: "pxstudent3029", password: "pxstudent3029password"},
    { id: "pxstudent3030", password: "pxstudent3030password"},
    { id: "pxntstudent3031", password: "pxntstudent3031password"},
    { id: "pxntstudent3032", password: "pxntstudent3032password"},
    { id: "pxntstudent3033", password: "pxntstudent3033password"},
    { id: "pxntstudent3034", password: "pxntstudent3034password"},
    { id: "pxntstudent3035", password: "pxntstudent3035password"},
    { id: "pxntstudent3036", password: "pxntstudent3036password"},
    { id: "pxntstudent3037", password: "pxntstudent3037password"},
    { id: "pxntstudent3038", password: "pxntstudent3038password"},
    { id: "pxntstudent3039", password: "pxntstudent3039password"},
    { id: "pxntstudent3040", password: "pxntstudent3040password"},    
    { id: "test123", password: "test123"},
    { id: "mohini75",  password: "mohini75"},
    { id: "test21", password: "test21"}
];

document.getElementById('login-btn').addEventListener('click', () => {
  const inputID = document.getElementById('participant-id').value.trim();
  const inputPassword = document.getElementById('password').value.trim();
  const errorElement = document.getElementById('login-error');

  // search the user array for a matching ID and password
  const matchedUser = users.find(user => user.id === inputID && user.password === inputPassword);

  if (matchedUser) {
    // if a match is found, login = successful
    errorElement.classList.add('hidden');
    sessionStorage.setItem('currentParticipant', matchedUser.id);
    
    document.getElementById('user-display').textContent = matchedUser.id;
    
    loadUserDashboard(matchedUser.id);
    
    
    showScreen('dashboard-screen');

    checkAllTasksCompleted();
  } else {
    // if no match is found, show error
    errorElement.classList.remove('hidden');
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    sessionStorage.removeItem('currentParticipant');

    document.getElementById('participant-id').value = '';
    document.getElementById('password').value  = '';

    showScreen('login-screen');
});

// check if a participant is already logged in when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const activeUser = sessionStorage.getItem('currentParticipant');
  if (activeUser) {
    document.getElementById('user-display').textContent = activeUser;
    showScreen('dashboard-screen');

    checkAllTasksCompleted();
  } else {
    showScreen('login-screen');
  }
});

const passwordInput = document.getElementById('password');
const showPassCheckbox = document.getElementById('show-pass-btn');

showPassCheckbox.addEventListener('click',() =>{
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPassCheckbox.textContent = 'Hide Password';
        showPassCheckbox.classList.add('active');
    } else {
        passwordInput.type = 'password';
        showPassCheckbox.textContent = 'Show Password';
        showPassCheckbox.classList.remove('active');
    }
});



const routeGroups = {
 
  // GROUPS 1-5: Passage A has the feature, Passage B is "none"
  
  1: [
    { taskNum: 1, passageA: { id: 1, feature: "bionic" },   passageB: { id: 10, feature: "none" } },
    { taskNum: 2, passageA: { id: 2, feature: "ruler" },    passageB: { id: 7, feature: "none" } },
    { taskNum: 3, passageA: { id: 3, feature: "spotlight" },passageB: { id: 9, feature: "none" } },
    { taskNum: 4, passageA: { id: 4, feature: "filter" },   passageB: { id: 6, feature: "none" } },
    { taskNum: 5, passageA: { id: 5, feature: "font" },     passageB: { id: 8, feature: "none" } }
  ],
  2: [
    { taskNum: 1, passageA: { id: 1, feature: "font" },     passageB: { id: 10, feature: "none" } },
    { taskNum: 2, passageA: { id: 2, feature: "bionic" },   passageB: { id: 7, feature: "none" } },
    { taskNum: 3, passageA: { id: 3, feature: "ruler" },    passageB: { id: 9, feature: "none" } },
    { taskNum: 4, passageA: { id: 4, feature: "spotlight" },passageB: { id: 6, feature: "none" } },
    { taskNum: 5, passageA: { id: 5, feature: "filter" },   passageB: { id: 8, feature: "none" } }
  ],
  3: [
    { taskNum: 1, passageA: { id: 1, feature: "filter" },   passageB: { id: 10, feature: "none" } },
    { taskNum: 2, passageA: { id: 2, feature: "font" },     passageB: { id: 7, feature: "none" } },
    { taskNum: 3, passageA: { id: 3, feature: "bionic" },   passageB: { id: 9, feature: "none" } },
    { taskNum: 4, passageA: { id: 4, feature: "ruler" },    passageB: { id: 6, feature: "none" } },
    { taskNum: 5, passageA: { id: 5, feature: "spotlight" },passageB: { id: 8, feature: "none" } }
  ],
  4: [
    { taskNum: 1, passageA: { id: 1, feature: "spotlight" },passageB: { id: 10, feature: "none" } },
    { taskNum: 2, passageA: { id: 2, feature: "filter" },   passageB: { id: 7, feature: "none" } },
    { taskNum: 3, passageA: { id: 3, feature: "font" },     passageB: { id: 9, feature: "none" } },
    { taskNum: 4, passageA: { id: 4, feature: "bionic" },   passageB: { id: 6, feature: "none" } },
    { taskNum: 5, passageA: { id: 5, feature: "ruler" },    passageB: { id: 8, feature: "none" } }
  ],
  5: [
    { taskNum: 1, passageA: { id: 1, feature: "ruler" },    passageB: { id: 10, feature: "none" } },
    { taskNum: 2, passageA: { id: 2, feature: "spotlight" },passageB: { id: 7, feature: "none" } },
    { taskNum: 3, passageA: { id: 3, feature: "filter" },   passageB: { id: 9, feature: "none" } },
    { taskNum: 4, passageA: { id: 4, feature: "font" },     passageB: { id: 6, feature: "none" } },
    { taskNum: 5, passageA: { id: 5, feature: "bionic" },   passageB: { id: 8, feature: "none" } }
  ],

  
  // GROUPS 6-10: counterbalanced (Passage A is "none", Passage B has the feature)
  
  6: [
    { taskNum: 1, passageA: { id: 1, feature: "none" },     passageB: { id: 10, feature: "bionic" } },
    { taskNum: 2, passageA: { id: 2, feature: "none" },     passageB: { id: 7, feature: "ruler" } },
    { taskNum: 3, passageA: { id: 3, feature: "none" },     passageB: { id: 9, feature: "spotlight" } },
    { taskNum: 4, passageA: { id: 4, feature: "none" },     passageB: { id: 6, feature: "filter" } },
    { taskNum: 5, passageA: { id: 5, feature: "none" },     passageB: { id: 8, feature: "font" } }
  ],
  7: [
    { taskNum: 1, passageA: { id: 1, feature: "none" },     passageB: { id: 10, feature: "font" } },
    { taskNum: 2, passageA: { id: 2, feature: "none" },     passageB: { id: 7, feature: "bionic" } },
    { taskNum: 3, passageA: { id: 3, feature: "none" },     passageB: { id: 9, feature: "ruler" } },
    { taskNum: 4, passageA: { id: 4, feature: "none" },     passageB: { id: 6, feature: "spotlight" } },
    { taskNum: 5, passageA: { id: 5, feature: "none" },     passageB: { id: 8, feature: "filter" } }
  ],
  8: [
    { taskNum: 1, passageA: { id: 1, feature: "none" },     passageB: { id: 10, feature: "filter" } },
    { taskNum: 2, passageA: { id: 2, feature: "none" },     passageB: { id: 7, feature: "font" } },
    { taskNum: 3, passageA: { id: 3, feature: "none" },     passageB: { id: 9, feature: "bionic" } },
    { taskNum: 4, passageA: { id: 4, feature: "none" },     passageB: { id: 6, feature: "ruler" } },
    { taskNum: 5, passageA: { id: 5, feature: "none" },     passageB: { id: 8, feature: "spotlight" } }
  ],
  9: [
    { taskNum: 1, passageA: { id: 1, feature: "none" },     passageB: { id: 10, feature: "spotlight" } },
    { taskNum: 2, passageA: { id: 2, feature: "none" },     passageB: { id: 7, feature: "filter" } },
    { taskNum: 3, passageA: { id: 3, feature: "none" },     passageB: { id: 9, feature: "font" } },
    { taskNum: 4, passageA: { id: 4, feature: "none" },     passageB: { id: 6, feature: "bionic" } },
    { taskNum: 5, passageA: { id: 5, feature: "none" },     passageB: { id: 8, feature: "ruler" } }
  ],
  10: [
    { taskNum: 1, passageA: { id: 1, feature: "none" },     passageB: { id: 10, feature: "ruler" } },
    { taskNum: 2, passageA: { id: 2, feature: "none" },     passageB: { id: 7, feature: "spotlight" } },
    { taskNum: 3, passageA: { id: 3, feature: "none" },     passageB: { id: 9, feature: "filter" } },
    { taskNum: 4, passageA: { id: 4, feature: "none" },     passageB: { id: 6, feature: "font" } },
    { taskNum: 5, passageA: { id: 5, feature: "none" },     passageB: { id: 8, feature: "bionic" } }
  ]
};


function getParticipantAssignment(participantId) {
  // grabs very last character of ID (e.g., "1" in "pxstudent3001" & "0" in "pxstudent3010")
  const lastChar = participantId.slice(-1);
  let digit = parseInt(lastChar);
  
  // handle 0 digit so it equals to 10 instead of 0
  if (digit === 0) {
    digit = 10;
  }

  // 1. determine Route (Digits 1-5 map to Routes 1-5. Digits 6-10 also map to Routes 1-5!)
  // Using modulo: digits 1,6 -> Route 1; digits 2,7 -> Route 2; etc.
  const routeNum = ((digit - 1) % 5) + 1;

  // 2. Determine Group (A or B)
  // Digits 1-5 are Group A (Control then Feature)
  // Digits 6-10 are Group B (Feature then Control)
  const group = digit <= 5 ? 'A' : 'B';

  return { route: routeNum, group: group };
}

// route Mapping (5 latin square routes)
const routesData = {
  1: [
    { taskNum: 1, pA: 1, pB: 10 },
    { taskNum: 2, pA: 2, pB: 7 },
    { taskNum: 3, pA: 3, pB: 9 },
    { taskNum: 4, pA: 4, pB: 6 },
    { taskNum: 5, pA: 5, pB: 8 }
  ],
  2: [
    { taskNum: 1, pA: 1, pB: 10 },
    { taskNum: 2, pA: 2, pB: 7 },
    { taskNum: 3, pA: 3, pB: 9 },
    { taskNum: 4, pA: 4, pB: 6 },
    { taskNum: 5, pA: 5, pB: 8 }
  ],
  3: [
    { taskNum: 1, pA: 1, pB: 10 },
    { taskNum: 2, pA: 2, pB: 7 },
    { taskNum: 3, pA: 3, pB: 9 },
    { taskNum: 4, pA: 4, pB: 6 },
    { taskNum: 5, pA: 5, pB: 8 }
  ],
  4: [
    { taskNum: 1, pA: 1, pB: 10 },
    { taskNum: 2, pA: 2, pB: 7 },
    { taskNum: 3, pA: 3, pB: 9 },
    { taskNum: 4, pA: 4, pB: 6 },
    { taskNum: 5, pA: 5, pB: 8 }
  ],
  5: [
    { taskNum: 1, pA: 1, pB: 10 },
    { taskNum: 2, pA: 2, pB: 7 },
    { taskNum: 3, pA: 3, pB: 9 },
    { taskNum: 4, pA: 4, pB: 6 },
    { taskNum: 5, pA: 5, pB: 8 }
  ]
};

//  mapping features for each route as well as task
const featureMatrix = {
  1: { 1: "bionic", 2: "ruler", 3: "spotlight", 4: "filter", 5: "font" },
  2: { 1: "font", 2: "bionic", 3: "ruler", 4: "spotlight", 5: "filter" },
  3: { 1: "filter", 2: "font", 3: "bionic", 4: "ruler", 5: "spotlight" },
  4: { 1: "spotlight", 2: "filter", 3: "font", 4: "bionic", 5: "ruler" },
  5: { 1: "ruler", 2: "spotlight", 3: "filter", 4: "font", 5: "bionic" }
};



function loadUserDashboard(participantId) {
  const lastChar = participantId.slice(-1);
  let digit = parseInt(lastChar);
  if (lastChar === '0' || digit === 0) {
    digit = 10;
  }

  const routeNum = ((digit - 1) % 5) + 1;
  const group = digit <= 5 ? 'A' : 'B';
  const actualRouteKey = group === 'A' ? routeNum : routeNum + 5;

  const taskListContainer = document.getElementById('task-list');
  taskListContainer.innerHTML = ''; 

  const assignedRouteTasks = routeGroups[actualRouteKey];

 // Include the participantId in the storage key name

  const storageKey = `completedTasks_${participantId}`;
  const completedTasks = JSON.parse(sessionStorage.getItem(storageKey)) || [];

  assignedRouteTasks.forEach((task) => {
    const text1Config = task.passageA;
    const text2Config = task.passageB;

    const isFinished = completedTasks.includes(task.taskNum);

    const taskCard = document.createElement('div');
    taskCard.className = `task-card ${isFinished ? 'finished-card' : ''}`;
    taskCard.innerHTML = `
      <h3>Task ${task.taskNum}</h3>
      <p>Group: <strong>${group}</strong> | Route: <strong>${routeNum}</strong></p>
      <button class="btn ${isFinished ? 'secondary-btn' : 'primary-btn task-start-btn'}" ${isFinished ? 'disabled' : ''}>
        ${isFinished ? 'Completed ✓' : `Start Task ${task.taskNum}`}
      </button>
    `;

    if (!isFinished) {
      const startBtn = taskCard.querySelector('.task-start-btn');
      startBtn.addEventListener('click', () => {
        activeTaskNumber = task.taskNum; 
        startTaskBlock(text1Config, text2Config);
      });
    }

    taskListContainer.appendChild(taskCard);
  });
}

let currentTaskQueue = [];
let activeTaskData = null;
let readingStartTime = 0;

function startTaskBlock(text1Config, text2Config) {
  // queue up the two passages for this task block
  currentTaskQueue = [text1Config, text2Config];
  
  // start with the first passage in the queue
  loadNextPassageInBlock();
}
// track current task ID globally 
let activeTaskNumber = null; 

function loadNextPassageInBlock() {
  // 1. check if queue is empty first before trying to pull anything (stops certain errors)
  if (!currentTaskQueue || currentTaskQueue.length === 0) {
    const currentParticipant = sessionStorage.getItem('currentParticipant');
    const storageKey = `completedTasks_${currentParticipant}`;

    let completedTasks = JSON.parse(sessionStorage.getItem(storageKey)) || [];
    
    if (activeTaskNumber !== null && !completedTasks.includes(activeTaskNumber)) {
      completedTasks.push(activeTaskNumber);
      sessionStorage.setItem(storageKey, JSON.stringify(completedTasks));
    }

    alert("Task Block Complete! Returning to Dashboard.");
    
    if (currentParticipant) {
      loadUserDashboard(currentParticipant);
    }
    showScreen('dashboard-screen');
    checkAllTasksCompleted();
    return;
  }

  // 2) safe shift from queue
  const currentConfig = currentTaskQueue.shift();
  if (!currentConfig) return;

  activeTaskData = currentConfig; 

  // 3. match against passages
  const passageObj = passages.find(p => p && p.id === currentConfig.id);
  
  if (!passageObj) {
    console.error("Could not find passage with ID:", currentConfig.id);
    alert("Error: Passage data not found!");
    return;
  }

  activeTaskData.passageObj = passageObj;

  document.getElementById('instruction-title').textContent = `Task: ${passageObj.title}`;
  showScreen('instructions-screen');
}

document.getElementById('proceed-to-countdown-btn').onclick = () => {
  showCountdownScreen(activeTaskData.passageObj.title);
};

document.getElementById('back-to-dashboard-btn').onclick = () => {
  showScreen('dashboard-screen');
  checkAllTasksCompleted();
};

function showCountdownScreen(title) {
  showScreen('countdown-screen');
  let count = 3;
  const countdownEl = document.getElementById('countdown-timer');
  countdownEl.textContent = count;

  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      countdownEl.textContent = count;
    } else {
      clearInterval(timer);
      launchReadingInterface();
    }
  }, 1000);
}


function launchReadingInterface() {
  showScreen('reading-screen');

  // populate the text onscr
  document.getElementById('passage-title').textContent = activeTaskData.passageObj.title;
  
  const passageTextEl = document.getElementById('passage-text');
  passageTextEl.textContent = activeTaskData.passageObj.text;

  // applying feature class (e.g., .feature-bionic, .feature-ruler, or none)
  const passageBox = document.getElementById('passage-box');
  passageBox.className = `passage-box feature-${activeTaskData.feature}`;

  // triggering the feature.js script (#dontbetriggered)
  applyAccessibilityFeature(activeTaskData.feature, passageTextEl);

  // hide questions box initially, show "Done Reading" button
  document.getElementById('questions-box').classList.add('hidden');
  const actionBtn = document.getElementById('action-btn');
  actionBtn.textContent = "Done Reading";
  actionBtn.onclick = handleDoneReading;

  // start the reading timer (record the timestamp for future referneces)
  readingStartTime = Date.now();
}

function handleDoneReading() {
  //wipe out active visual features (ruler/spotlight) and mouse listeners so it can actually progress
  if (typeof cleanupActiveFeatures === 'function') {
    cleanupActiveFeatures();
  }

  // calculate total reading time in secs
  const readingDuration = (Date.now() - readingStartTime) / 1000;
  activeTaskData.readingTime = parseFloat(readingDuration.toFixed(2));

  // calculate word count and words per minute (WPM)
  const passageText = activeTaskData.passageObj.text;
  const wordCount = getWordCount(passageText);
  const wpm = readingDuration > 0 ? Math.round((wordCount / readingDuration) * 60) : 0;

  // store values in activeTaskData so we can use them during submission
  activeTaskData.wordCount = wordCount;
  activeTaskData.wpm = wpm;

  console.log(`Task Logged -> Words: ${wordCount}, Time: ${activeTaskData.readingTime}s, WPM: ${wpm}`);

  // hiding the reading text, then revealing the comprehension questions
  document.getElementById('passage-text').classList.add('hidden'); 
  document.getElementById('questions-box').classList.remove('hidden');

  // render the 3 multiple-choice questions 
  renderQuizQuestions(activeTaskData.passageObj.questions);

  
  const actionBtn = document.getElementById('action-btn');
  actionBtn.textContent = "Submit Answers";
  actionBtn.onclick = handleQuizSubmission;
}

function renderQuizQuestions(questionsArray) {
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = ''; // Clear old questions

  questionsArray.forEach((qObj, qIndex) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question-card';
    
    let optionsHTML = '';
    qObj.options.forEach((opt, optIndex) => {
      optionsHTML += `
        <label class="quiz-option">
          <input type="radio" name="q${qIndex}" value="${optIndex}" required>
          ${opt}
        </label><br>
      `;
    });

    qDiv.innerHTML = `
      <p><strong>Q${qIndex + 1}:</strong> ${qObj.question}</p>
      ${optionsHTML}
    `;
    quizContainer.appendChild(qDiv);
  });
}

function handleQuizSubmission() {
  const questions = activeTaskData.passageObj.questions;
  let score = 0;

  // check user answers against the correct answers index
  questions.forEach((qObj, qIndex) => {
    const selectedOption = document.querySelector(`input[name="q${qIndex}"]:checked`);
    if (selectedOption && parseInt(selectedOption.value) === qObj.correct) {
      score++;
    }
  });

  activeTaskData.quizScore = score; // out of 3

  // calculate percentage score for the CSV (prefer seeing 67 then 2/3 erm..)
  const percentageScore = questions.length > 0 ? Math.round((score / questions.length) * 100) : 100;

  //  trial result object for CSV export
  const currentParticipant = sessionStorage.getItem('currentParticipant') || 'Participant';
  const trialResult = {
    participantId: currentParticipant,
    taskNumber: typeof activeTaskNumber !== 'undefined' ? activeTaskNumber : 1,
    passageId: activeTaskData.passageObj.id || '',
    passageTitle: activeTaskData.passageObj.title || 'Passage',
    feature: activeTaskData.feature || 'none',
    wordCount: activeTaskData.wordCount || 0,
    readingTimeSec: activeTaskData.readingTime || 0,
    wpm: activeTaskData.wpm || 0,
    quizScorePercent: percentageScore,
    completedAt: new Date().toISOString()
  };

  // save trial results into sessionStorage securely enough
  const resultsKey = `trialResults_${currentParticipant}`;
  let allResults = JSON.parse(sessionStorage.getItem(resultsKey)) || [];
  
  // stop duplicate logs if the same passage is somehow re-submitted
  allResults.push(trialResult);
  sessionStorage.setItem(resultsKey, JSON.stringify(allResults));
  
  // also save a fallback global key just in case
  sessionStorage.setItem('trialResults', JSON.stringify(allResults));

  // log data into console
  console.log("Recorded Data for Passage:", activeTaskData);
  console.log("Saved trial results to storage:", allResults);

  // returning passage text visibility for next round
  document.getElementById('passage-text').classList.remove('hidden');

  
  loadNextPassageInBlock();
}


function downloadParticipantCSV() {
  const currentParticipant = sessionStorage.getItem('currentParticipant') || 'Participant';
  
  //check multiple possible key names in sessionStorage and localStorage bc of variable console issues
  let participantResults = [];
  const possibleKeys = [
    `trialResults_${currentParticipant}`,
    `trialResults`,
    `results_${currentParticipant}`,
    `results`
  ];

  for (const key of possibleKeys) {
    const data = sessionStorage.getItem(key) || localStorage.getItem(key);
    if (data) {
      try {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed) && parsed.length > 0) {
          participantResults = parsed;
          console.log(`Found results using key: ${key}`, participantResults);
          break;
        }
      } catch (e) {
        //ignore JSON parse errors and keep looking
      }
    }
  }

  // if its still empty, look for any key containing trial results in storage
  if (participantResults.length === 0) {
    for (let i = 0; i < sessionStorage.length; i++) {
      const k = sessionStorage.key(i);
      if (k && k.includes('result')) {
        try {
          const parsed = JSON.parse(sessionStorage.getItem(k));
          if (Array.isArray(parsed) && parsed.length > 0) {
            participantResults = parsed;
            break;
          }
        } catch (e) {}
      }
    }
  }

  if (participantResults.length === 0) {
    alert("No trial results found to download. Check console for storage keys.");
    console.log("SessionStorage contents:", Object.keys(sessionStorage));
    console.log("LocalStorage contents:", Object.keys(localStorage));
    return;
  }

  // defining the CSV headers
  const headers = [
    "ParticipantID", 
    "TaskNumber", 
    "PassageID", 
    "PassageTitle", 
    "Feature", 
    "WordCount", 
    "ReadingTimeSec", 
    "WPM", 
    "QuizScorePercent", 
    "CompletedAt"
  ];

  let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";

  participantResults.forEach(row => {
    const rowData = [
      row.participantId || currentParticipant,
      row.taskNumber || '',
      row.passageId || '',
      `"${row.passageTitle || 'Passage'}"`,
      row.feature || '',
      row.wordCount || 0,
      row.readingTimeSec || 0,
      row.wpm || 0,
      row.quizScorePercent || 0,
      row.completedAt || new Date().toISOString()
    ];
    csvContent += rowData.join(",") + "\n";
  });

  // browser download
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${currentParticipant}_knowsify_study_results.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


function showFinalCompletionScreen() {
  showScreen('completion-screen'); 

  //CSV download prompt
  downloadParticipantCSV();
}

function checkAllTasksCompleted() {
  const currentParticipant = sessionStorage.getItem('currentParticipant');
  const completedKey = `completedTasks_${currentParticipant}`;
  const completedTasks = JSON.parse(sessionStorage.getItem(completedKey)) || [];

  const totalTasks = 5; 

  console.log("Checking completion for:", currentParticipant);
  console.log("Completed tasks found:", completedTasks);

  const completionSection = document.getElementById('all-tasks-completed-section');
  if (!completionSection) {
    console.error("Could not find #all-tasks-completed-section in HTML!");
    return;
  }

  //if all tasks = done, show download button and log it down in the console
  if (completedTasks.length >= totalTasks) {
    completionSection.classList.remove('hidden');
    console.log("Showing CSV download section!");
  } else {
    completionSection.classList.add('hidden');
    console.log("Not all tasks done yet, keeping hidden.");
  }
}