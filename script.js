 /* =========================================================
   QUIZCHAMP
   Main JavaScript
   ========================================================= */


/* =========================================================
   SUPABASE CONFIG
   ========================================================= */

const SUPABASE_URL =
  "https://pjvxdqzdkgmeygpdaecy.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_pJVXb_8lS8fqacDDIpRFew_x0mEqwk2";

let supabaseClient = null;

if (SUPABASE_URL && SUPABASE_KEY) {

  supabaseClient =
    window.supabase.createClient(
      SUPABASE_URL,
      SUPABASE_KEY
    );

}


/* =========================================================
   ADMIN PASSWORD
   ========================================================= */

const ADMIN_PASSWORD = "ANSH86041";


/* =========================================================
   DEFAULT QUESTIONS
   ========================================================= */

const defaultQuestions = {

  "Mathematics": [

    {
      question: "5 × 8 = ?",
      options: ["30", "35", "40", "45"],
      answer: 2
    },

    {
      question: "12 × 12 = ?",
      options: ["124", "144", "154", "164"],
      answer: 1
    },

    {
      question: "Square of 9 is?",
      options: ["18", "72", "81", "90"],
      answer: 2
    },

    {
      question: "100 ÷ 4 = ?",
      options: ["20", "25", "30", "40"],
      answer: 1
    },

    {
      question: "15 + 27 = ?",
      options: ["40", "41", "42", "43"],
      answer: 2
    },

    {
      question: "7 × 7 = ?",
      options: ["42", "49", "56", "63"],
      answer: 1
    },

    {
      question: "50% of 200 is?",
      options: ["50", "75", "100", "150"],
      answer: 2
    },

    {
      question: "81 ÷ 9 = ?",
      options: ["7", "8", "9", "10"],
      answer: 2
    },

    {
      question: "13 + 19 = ?",
      options: ["30", "31", "32", "33"],
      answer: 2
    },

    {
      question: "A triangle has how many sides?",
      options: ["2", "3", "4", "5"],
      answer: 1
    }

  ],


  "Science": [

    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: 1
    },

    {
      question: "Which gas do humans mainly breathe?",
      options: ["Oxygen", "Carbon Dioxide", "Hydrogen", "Nitrogen"],
      answer: 0
    },

    {
      question: "How many bones are there in an adult human body?",
      options: ["106", "206", "306", "406"],
      answer: 1
    },

    {
      question: "H₂O is commonly known as?",
      options: ["Salt", "Water", "Oxygen", "Hydrogen"],
      answer: 1
    },

    {
      question: "Which organ pumps blood?",
      options: ["Brain", "Lungs", "Heart", "Kidney"],
      answer: 2
    },

    {
      question: "Which is the closest star to Earth?",
      options: ["Moon", "Sun", "Mars", "Sirius"],
      answer: 1
    },

    {
      question: "Plants prepare food by which process?",
      options: [
        "Respiration",
        "Photosynthesis",
        "Digestion",
        "Evaporation"
      ],
      answer: 1
    },

    {
      question: "Which force pulls objects toward Earth?",
      options: [
        "Magnetic force",
        "Gravity",
        "Friction",
        "Electric force"
      ],
      answer: 1
    },

    {
      question: "Which part absorbs water from soil?",
      options: ["Flower", "Leaf", "Root", "Fruit"],
      answer: 2
    },

    {
      question: "How many planets are in our Solar System?",
      options: ["7", "8", "9", "10"],
      answer: 1
    }

  ],


  "English": [

    {
      question: "What is the plural of child?",
      options: ["Childs", "Children", "Childes", "Childrens"],
      answer: 1
    },

    {
      question: "Opposite of hot is?",
      options: ["Warm", "Cold", "Cooler", "Heat"],
      answer: 1
    },

    {
      question: "Which is a noun?",
      options: ["Run", "Beautiful", "School", "Quickly"],
      answer: 2
    },

    {
      question: "Choose the correct spelling.",
      options: [
        "Beautifull",
        "Beutiful",
        "Beautiful",
        "Beautifool"
      ],
      answer: 2
    },

    {
      question: "Past tense of go is?",
      options: ["Goed", "Went", "Gone", "Going"],
      answer: 1
    },

    {
      question: "Which is an adjective?",
      options: ["Happy", "Run", "School", "Slowly"],
      answer: 0
    },

    {
      question: "Opposite of early is?",
      options: ["Fast", "Late", "Quick", "Soon"],
      answer: 1
    },

    {
      question: "Choose the correct article: ___ apple.",
      options: ["A", "An", "The", "No article"],
      answer: 1
    },

    {
      question: "Synonym of large is?",
      options: ["Small", "Tiny", "Big", "Short"],
      answer: 2
    },

    {
      question: "Which punctuation mark ends a question?",
      options: [".", ",", "!", "?"],
      answer: 3
    }

  ],


  "General Knowledge": [

    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: 1
    },

    {
      question: "How many days are there in a week?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },

    {
      question: "Which is the largest ocean?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
      ],
      answer: 2
    },

    {
      question: "How many colours are traditionally in a rainbow?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },

    {
      question: "Which animal is called the King of the Jungle?",
      options: ["Tiger", "Lion", "Elephant", "Bear"],
      answer: 1
    },

    {
      question: "Fastest land animal?",
      options: ["Lion", "Horse", "Cheetah", "Tiger"],
      answer: 2
    },

    {
      question: "How many months are there in a year?",
      options: ["10", "11", "12", "13"],
      answer: 2
    },

    {
      question: "Which is the largest continent?",
      options: ["Africa", "Asia", "Europe", "Australia"],
      answer: 1
    },

    {
      question: "Festival known as the festival of lights?",
      options: ["Holi", "Diwali", "Eid", "Christmas"],
      answer: 1
    },

    {
      question: "Which sport uses a bat and ball?",
      options: ["Swimming", "Cricket", "Boxing", "Wrestling"],
      answer: 1
    }

  ],


  "Computer": [

    {
      question: "What does CPU stand for?",
      options: [
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Program Unit",
        "Control Processing User"
      ],
      answer: 0
    },

    {
      question: "Which device is mainly used for typing?",
      options: ["Mouse", "Keyboard", "Monitor", "Speaker"],
      answer: 1
    },

    {
      question: "Which is a web browser?",
      options: ["Chrome", "Windows", "RAM", "CPU"],
      answer: 0
    },

    {
      question: "What does RAM stand for?",
      options: [
        "Random Access Memory",
        "Read Access Memory",
        "Rapid Action Machine",
        "Random Application Module"
      ],
      answer: 0
    },

    {
      question: "Which device displays images?",
      options: ["Keyboard", "Monitor", "Mouse", "CPU"],
      answer: 1
    },

    {
      question: "Which language is used for webpage styling?",
      options: ["HTML", "CSS", "SQL", "Python"],
      answer: 1
    },

    {
      question: "Which language adds behaviour to webpages?",
      options: ["CSS", "HTML", "JavaScript", "SQL"],
      answer: 2
    },

    {
      question: "What does URL stand for?",
      options: [
        "Uniform Resource Locator",
        "Universal Read Link",
        "User Resource Link",
        "Uniform Read Locator"
      ],
      answer: 0
    },

    {
      question: "Which is an operating system?",
      options: ["Windows", "Chrome", "Google", "HTML"],
      answer: 0
    },

    {
      question: "Which device controls the pointer?",
      options: ["Monitor", "Mouse", "Printer", "Speaker"],
      answer: 1
    }

  ]

};


/* =========================================================
   LOCAL DATA
   ========================================================= */

let questions =
  JSON.parse(
    localStorage.getItem("quizChampQuestions")
  ) || defaultQuestions;


let user =
  JSON.parse(
    localStorage.getItem("quizChampUser")
  ) || null;


let students =
  JSON.parse(
    localStorage.getItem("quizChampStudents")
  ) || [];


/* =========================================================
   QUIZ VARIABLES
   ========================================================= */

let selectedSubject = "";

let currentQuestions = [];

let currentQuestionIndex = 0;

let selectedAnswer = null;

let quizCoins = 0;

let timerInterval = null;

let timeLeft = 30;


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async function () {

    if (!supabaseClient) {

      if (user) {
        showMainApp();
      } else {
        document.getElementById("loginPage").style.display = "flex";
      }

      return;
    }


    try {

      const {
        data: {
          session
        }
      } =
        await supabaseClient.auth.getSession();


      if (session && session.user) {

        await loadUserFromSupabase(
          session.user
        );

        showMainApp();

      } else {

        if (user) {
          showMainApp();
        } else {
          document.getElementById(
            "loginPage"
          ).style.display = "flex";
        }

      }

    } catch (error) {

      console.error(
        "Session error:",
        error
      );

      if (user) {
        showMainApp();
      } else {
        document.getElementById(
          "loginPage"
        ).style.display = "flex";
      }

    }

  }
);


/* =========================================================
   LOAD USER FROM SUPABASE
   ========================================================= */

async function loadUserFromSupabase(
  authUser
) {

  if (!authUser || !supabaseClient) {
    return false;
  }


  const {
    data: profile,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, username, email, coins, total_coins, quizzes"
      )
      .eq("id", authUser.id)
      .maybeSingle();


  if (error) {

    console.error(
      "Profile load error:",
      error
    );

    return false;
  }


  if (!profile) {

    user = {

      id: authUser.id,

      name:
        authUser.user_metadata?.username ||
        "QuizChamp",

      dob: "",

      email:
        authUser.email || "",

      coins: 0,

      totalCoins: 0,

      quizzes: 0,

      weekCoins: 0,

      subjects: {

        Mathematics: 0,

        Science: 0,

        English: 0,

        "General Knowledge": 0,

        Computer: 0

      }

    };

  } else {

    user = {

      id: profile.id,

      name:
        profile.username ||
        authUser.user_metadata?.username ||
        "QuizChamp",

      dob: "",

      email:
        profile.email ||
        authUser.email ||
        "",

      coins:
        Number(profile.coins || 0),

      totalCoins:
        Number(profile.total_coins || 0),

      quizzes:
        Number(profile.quizzes || 0),

      weekCoins:
        Number(
          user?.weekCoins || 0
        ),

      subjects:
        user?.subjects || {

          Mathematics: 0,

          Science: 0,

          English: 0,

          "General Knowledge": 0,

          Computer: 0

        }

    };

  }


  saveUser();

  return true;

}


/* =========================================================
   REGISTER
   ========================================================= */

async function registerUser() {

  const name =
    document.getElementById(
      "nameInput"
    ).value.trim();


  const dob =
    document.getElementById(
      "dobInput"
    ).value;


  const email =
    document.getElementById(
      "emailInput"
    ).value.trim();


  const password =
    document.getElementById(
      "passwordInput"
    ).value.trim();


  if (
    !name ||
    !dob ||
    !email ||
    !password
  ) {

    alert(
      "Please fill all details."
    );

    return;
  }


  if (!supabaseClient) {

    alert(
      "Supabase is not connected."
    );

    return;
  }


  if (password.length < 6) {

    alert(
      "Password must be at least 6 characters."
    );

    return;
  }


  const {
    data,
    error
  } =
    await supabaseClient.auth.signUp({

      email: email,

      password: password,

      options: {

        data: {

          username: name

        }

      }

    });


  if (error) {

    alert(
      "❌ " +
      error.message
    );

    return;
  }


  if (!data.user) {

    alert(
      "Account could not be created."
    );

    return;
  }


  user = {

    id: data.user.id,

    name: name,

    dob: dob,

    email: email,

    coins: 0,

    totalCoins: 0,

    quizzes: 0,

    weekCoins: 0,

    subjects: {

      Mathematics: 0,

      Science: 0,

      English: 0,

      "General Knowledge": 0,

      Computer: 0

    }

  };


  saveUser();


  alert(
    "✅ QuizChamp account created successfully!"
  );


  showMainApp();


  await loadLeaderboardFromSupabase();

}


/* =========================================================
   GOOGLE DEMO
   ========================================================= */

async function googleDemoLogin() {

  alert(
    "Google Demo is not connected to Supabase yet. Please create an account using Name, DOB, Email and Password."
  );

}


/* =========================================================
   SHOW MAIN APP
   ========================================================= */

function showMainApp() {

  document.getElementById(
    "loginPage"
  ).style.display = "none";


  document.getElementById(
    "mainApp"
  ).style.display = "block";


  showPage(
    "homePage"
  );


  updateUI();

}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showPage(pageId) {

  const pages =
    document.querySelectorAll(
      ".content-page"
    );


  pages.forEach(
    page => {

      page.classList.remove(
        "active"
      );

    }
  );


  const page =
    document.getElementById(
      pageId
    );


  if (page) {

    page.classList.add(
      "active"
    );

  }


  updateNavigation(
    pageId
  );


  if (
    pageId ===
    "leaderboardPage"
  ) {

    renderLeaderboard();

  }


  if (
    pageId ===
    "accountPage"
  ) {

    updateUI();

  }


  if (
    pageId ===
    "adminPage"
  ) {

    renderAdminQuestions();

  }

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function updateNavigation(pageId) {

  const buttons =
    document.querySelectorAll(
      ".bottom-nav button"
    );


  buttons.forEach(
    btn => {

      btn.classList.remove(
        "active"
      );

    }
  );


  if (
    pageId ===
    "homePage"
  ) {

    document
      .getElementById(
        "navHome"
      )
      ?.classList.add(
        "active"
      );

  }


  if (
    pageId ===
    "quizSubjectPage"
  ) {

    document
      .getElementById(
        "navQuiz"
      )
      ?.classList.add(
        "active"
      );

  }


  if (
    pageId ===
    "leaderboardPage"
  ) {

    document
      .getElementById(
        "navLeaderboard"
      )
      ?.classList.add(
        "active"
      );

  }


  if (
    pageId ===
    "accountPage"
  ) {

    document
      .getElementById(
        "navAccount"
      )
      ?.classList.add(
        "active"
      );

  }


  if (
    pageId ===
      "adminPage" ||
    pageId ===
      "adminLoginPage"
  ) {

    document
      .getElementById(
        "navAdmin"
      )
      ?.classList.add(
        "active"
      );

  }

}


/* =========================================================
   QUIZ TAB
   ========================================================= */

function showQuizTab() {

  showPage(
    "quizSubjectPage"
  );

}


/* =========================================================
   DIRECT QUIZ
   ========================================================= */

function startDirectQuiz(subject) {

  startQuiz(subject);

}


/* =========================================================
   START QUIZ
   ========================================================= */

function startQuiz(subject) {

  selectedSubject =
    subject;


  currentQuestions =
    questions[subject] || [];


  if (
    currentQuestions.length <
    10
  ) {

    alert(
      "This subject needs at least 10 questions."
    );

    return;
  }


  currentQuestions =
    [...currentQuestions]
      .sort(
        () =>
          Math.random() - 0.5
      )
      .slice(
        0,
        10
      );


  currentQuestionIndex = 0;

  selectedAnswer = null;

  quizCoins = 0;


  showPage(
    "quizPage"
  );


  loadQuestion();

}


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

  clearInterval(
    timerInterval
  );


  selectedAnswer = null;


  const question =
    currentQuestions[
      currentQuestionIndex
    ];


  document.getElementById(
    "quizSubject"
  ).textContent =
    selectedSubject;


  document.getElementById(
    "questionNumber"
  ).textContent =
    "Question " +
    (
      currentQuestionIndex +
      1
    );


  document.getElementById(
    "questionCount"
  ).textContent =
    (
      currentQuestionIndex +
      1
    ) +
    " / 10";


  document.getElementById(
    "questionText"
  ).textContent =
    question.question;


  const progress =
    (
      (
        currentQuestionIndex +
        1
      ) /
      10
    ) *
    100;


  document.getElementById(
    "progressBar"
  ).style.width =
    progress +
    "%";


  const container =
    document.getElementById(
      "optionsContainer"
    );


  container.innerHTML = "";


  question.options.forEach(
    (
      option,
      index
    ) => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "option";


      button.textContent =
        option;


      button.onclick =
        function () {

          selectOption(
            index
          );

        };


      container.appendChild(
        button
      );

    }
  );


  startTimer();

}


/* =========================================================
   SELECT OPTION
   ========================================================= */

function selectOption(index) {

  selectedAnswer =
    index;


  const options =
    document.querySelectorAll(
      ".option"
    );


  options.forEach(
    (
      button,
      i
    ) => {

      button.classList.toggle(
        "selected",
        i === index
      );

    }
  );

}


/* =========================================================
   SUBMIT ANSWER
   ========================================================= */

function submitAnswer() {

  if (
    selectedAnswer ===
    null
  ) {

    alert(
      "Please select an answer first."
    );

    return;
  }


  clearInterval(
    timerInterval
  );


  showPage(
    "adPage"
  );

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

  addCoin();


  currentQuestionIndex++;


  if (
    currentQuestionIndex >=
    10
  ) {

    finishQuiz();

    return;

  }


  showPage(
    "quizPage"
  );


  loadQuestion();

}


/* =========================================================
   ADD COIN
   ========================================================= */

async function addCoin() {

  if (!user) return;


  user.coins =
    Number(
      user.coins || 0
    ) +
    1;


  user.totalCoins =
    Number(
      user.totalCoins || 0
    ) +
    1;


  user.weekCoins =
    Number(
      user.weekCoins || 0
    ) +
    1;


  quizCoins++;


  saveUser();


  await updateUserInSupabase();


  updateUI();

}


/* =========================================================
   UPDATE USER IN SUPABASE
   ========================================================= */

async function updateUserInSupabase() {

  if (
    !supabaseClient ||
    !user
  ) {

    return false;

  }


  const {
    error
  } =
    await supabaseClient
      .from("profiles")
      .update({

        username:
          user.name,

        email:
          user.email,

        coins:
          Number(
            user.coins || 0
          ),

        total_coins:
          Number(
            user.totalCoins || 0
          ),

        quizzes:
          Number(
            user.quizzes || 0
          )

      })
      .eq(
        "id",
        user.id
      );


  if (error) {

    console.error(
      "Supabase update error:",
      error
    );

    return false;

  }


  return true;

}


/* =========================================================
   FINISH QUIZ
   ========================================================= */

async function finishQuiz() {

  if (!user) return;


  user.quizzes =
    Number(
      user.quizzes || 0
    ) +
    1;


  if (!user.subjects) {

    user.subjects = {};

  }


  user.subjects[
    selectedSubject
  ] =
    Number(
      user.subjects[
        selectedSubject
      ] || 0
    ) +
    1;


  saveUser();


  await updateUserInSupabase();


  document.getElementById(
    "quizCoins"
  ).textContent =
    quizCoins;


  showPage(
    "completePage"
  );


  updateUI();

}


/* =========================================================
   TIMER
   ========================================================= */

function startTimer() {

  timeLeft = 30;


  updateTimer();


  timerInterval =
    setInterval(
      function () {

        timeLeft--;


        updateTimer();


        if (
          timeLeft <= 0
        ) {

          clearInterval(
            timerInterval
          );


          selectedAnswer =
            null;


          showPage(
            "adPage"
          );

        }

      },
      1000
    );

}


/* =========================================================
   UPDATE TIMER
   ========================================================= */

function updateTimer() {

  const timer =
    document.getElementById(
      "timer"
    );


  if (timer) {

    timer.textContent =
      "⏱️ " +
      timeLeft;

  }

}


/* =========================================================
   EXIT QUIZ
   ========================================================= */

function exitQuiz() {

  clearInterval(
    timerInterval
  );


  const confirmExit =
    confirm(
      "Are you sure you want to exit the quiz?"
    );


  if (
    confirmExit
  ) {

    showPage(
      "homePage"
    );

  } else {

    showPage(
      "quizPage"
    );

  }

}


/* =========================================================
   UPDATE UI
   ========================================================= */

async function updateUI() {

  if (!user) return;


  const rank =
    await getUserRank();


  const initial =
    getInitial(
      user.name
    );


  /* HOME */

  setText(
    "homeName",
    user.name
  );


  setText(
    "homeAvatar",
    initial
  );


  setText(
    "homeCoins",
    user.coins || 0
  );


  setText(
    "homeRank",
    rank
      ? "#" + rank
      : "-"
  );


  setText(
    "homeQuizzes",
    user.quizzes || 0
  );


  setText(
    "homeWeekCoins",
    user.weekCoins || 0
  );


  /* ACCOUNT */

  setText(
    "accountAvatar",
    initial
  );


  setText(
    "accountName",
    user.name
  );


  setText(
    "accountEmail",
    user.email
  );


  setText(
    "accountCoins",
    user.coins || 0
  );


  setText(
    "accountRank",
    rank
      ? "#" + rank
      : "-"
  );


  setText(
    "accountQuizzes",
    user.quizzes || 0
  );


  setText(
    "accountTotalCoins",
    user.totalCoins || 0
  );


  const subjects =
    user.subjects || {};


  setText(
    "mathCount",
    subjects.Mathematics || 0
  );


  setText(
    "scienceCount",
    subjects.Science || 0
  );


  setText(
    "englishCount",
    subjects.English || 0
  );


  setText(
    "gkCount",
    subjects[
      "General Knowledge"
    ] || 0
  );


  setText(
    "computerCount",
    subjects.Computer || 0
  );

}


/* =========================================================
   LEADERBOARD
   ========================================================= */

async function renderLeaderboard() {

  const list =
    document.getElementById(
      "leaderboardList"
    );


  if (!list) return;


  list.innerHTML = `
    <p style="
      text-align:center;
      color:#64748b;
      padding:20px;
    ">
      Loading leaderboard...
    </p>
  `;


  await loadLeaderboardFromSupabase();

}


/* =========================================================
   LOAD LEADERBOARD FROM SUPABASE
   ========================================================= */

async function loadLeaderboardFromSupabase() {

  const list =
    document.getElementById(
      "leaderboardList"
    );


  if (
    !list ||
    !supabaseClient
  ) {

    return;

  }


  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, username, email, coins, total_coins, quizzes, created_at"
      )
      .order(
        "coins",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      "Leaderboard error:",
      error
    );


    list.innerHTML = `
      <p style="
        text-align:center;
        color:#dc2626;
        padding:20px;
      ">
        ❌ Could not load leaderboard.
      </p>
    `;


    return;

  }


  if (
    !data ||
    data.length === 0
  ) {

    list.innerHTML = `
      <p style="
        text-align:center;
        color:#64748b;
        padding:20px;
      ">
        No students yet.
      </p>
    `;


    return;

  }


  let html = "";


  data.forEach(
    (
      student,
      index
    ) => {

      const isYou =
        user &&
        student.id ===
          user.id;


      let medal = "";


      if (
        index === 0
      ) {

        medal = "🥇";

      } else if (
        index === 1
      ) {

        medal = "🥈";

      } else if (
        index === 2
      ) {

        medal = "🥉";

      }


      html += `

        <div class="
          leaderboard-item
          ${index === 0
            ? "top-one"
            : ""}
        ">

          <span class="rank-number">

            ${
              medal ||
              index + 1
            }

          </span>


          <span class="player-name">

            ${escapeHTML(
              student.username ||
              "QuizChamp"
            )}

            ${
              isYou
                ? " (You)"
                : ""
            }

          </span>


          <span class="player-coins">

            🪙 ${
              Number(
                student.coins || 0
              )
            }

          </span>

        </div>

      `;

    }
  );


  list.innerHTML =
    html;

}


/* =========================================================
   ADD STUDENT TO LEADERBOARD
   ========================================================= */

function addStudentToLeaderboard() {

  if (!user) return;


  const existing =
    students.find(
      student =>
        student.id ===
        user.id
    );


  if (!existing) {

    students.push({

      id:
        user.id,

      name:
        user.name,

      coins:
        user.coins || 0

    });

  }


  saveStudents();

}


/* =========================================================
   UPDATE LEADERBOARD STUDENT
   ========================================================= */

function updateLeaderboardStudent() {

  if (!user) return;


  const student =
    students.find(
      item =>
        item.id ===
        user.id
    );


  if (student) {

    student.name =
      user.name;

    student.coins =
      user.coins || 0;

  } else {

    addStudentToLeaderboard();

  }


  saveStudents();

}


/* =========================================================
   GET USER RANK
   ========================================================= */

async function getUserRank() {

  if (
    !user ||
    !supabaseClient
  ) {

    return null;

  }


  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, coins"
      )
      .order(
        "coins",
        {
          ascending: false
        }
      );


  if (
    error ||
    !data
  ) {

    return null;

  }


  const index =
    data.findIndex(
      student =>
        student.id ===
        user.id
    );


  if (
    index === -1
  ) {

    return null;

  }


  return index + 1;

}


/* =========================================================
   ADMIN OPEN
   ========================================================= */

function openAdmin() {

  showPage(
    "adminLoginPage"
  );

}


/* =========================================================
   ADMIN LOGIN
   ========================================================= */

function adminLogin() {

  const password =
    document.getElementById(
      "adminPassword"
    ).value;


  const error =
    document.getElementById(
      "adminError"
    );


  if (
    password ===
    ADMIN_PASSWORD
  ) {

    error.textContent =
      "";


    document.getElementById(
      "adminPassword"
    ).value =
      "";


    showPage(
      "adminPage"
    );


  } else {

    error.textContent =
      "❌ Incorrect admin password.";

  }

}


/* =========================================================
   ADMIN LOGOUT
   ========================================================= */

function adminLogout() {

  showPage(
    "homePage"
  );

}


/* =========================================================
   WEEKLY WINNER
   ========================================================= */

async function renderWeeklyWinner() {

  const nameElement =
    document.getElementById(
      "adminWinnerName"
    );


  const coinsElement =
    document.getElementById(
      "adminWinnerCoins"
    );


  if (
    !nameElement ||
    !coinsElement
  ) {

    return;

  }


  if (!supabaseClient) {

    nameElement.textContent =
      "No Winner Yet";

    coinsElement.textContent =
      "🪙 0 Points";

    return;

  }


  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "username, coins"
      )
      .order(
        "coins",
        {
          ascending: false
        }
      )
      .limit(1);


  if (
    error ||
    !data ||
    data.length === 0
  ) {

    nameElement.textContent =
      "No Winner Yet";

    coinsElement.textContent =
      "🪙 0 Points";

    return;

  }


  const winner =
    data[0];


  nameElement.textContent =
    "🥇 " +
    (
      winner.username ||
      "QuizChamp"
    );


  coinsElement.textContent =
    "🪙 " +
    Number(
      winner.coins || 0
    ) +
    " Points";

}


/* =========================================================
   ADMIN QUESTIONS
   ========================================================= */

function showAdminQuestions() {

  renderAdminQuestions();

}


/* =========================================================
   RENDER ADMIN QUESTIONS
   ========================================================= */

async function renderAdminQuestions() {

  const area =
    document.getElementById(
      "adminQuestionArea"
    );


  if (!area) return;


  renderWeeklyWinner();


  let totalQuestions = 0;


  Object.keys(
    questions
  ).forEach(
    subject => {

      totalQuestions +=
        questions[
          subject
        ].length;

    }
  );


  setText(
    "adminQuestionCount",
    totalQuestions
  );


  /* GLOBAL STUDENT COUNT */

  if (supabaseClient) {

    const {
      count,
      error
    } =
      await supabaseClient
        .from("profiles")
        .select(
          "id",
          {
            count:
              "exact",
            head:
              true
          }
        );


    if (!error) {

      setText(
        "adminStudentCount",
        count || 0
      );

    }

  } else {

    setText(
      "adminStudentCount",
      students.length
    );

  }


  area.innerHTML = "";


  Object.keys(
    questions
  ).forEach(
    subject => {

      const heading =
        document.createElement(
          "h3"
        );


      heading.style.color =
        "#312e81";


      heading.style.marginTop =
        "20px";


      heading.textContent =
        subject;


      area.appendChild(
        heading
      );


      questions[
        subject
      ].forEach(
        (
          q,
          index
        ) => {

          const div =
            document.createElement(
              "div"
            );


          div.className =
            "admin-question";


          div.innerHTML = `

            <strong>
              Question ${
                index + 1
              }
            </strong>


            <p style="
              margin-top:8px;
              margin-bottom:8px;
              color:#172554;
            ">

              ${escapeHTML(
                q.question
              )}

            </p>


            <small>

              A. ${
                escapeHTML(
                  q.options[0]
                )
              }

              <br>

              B. ${
                escapeHTML(
                  q.options[1]
                )
              }

              <br>

              C. ${
                escapeHTML(
                  q.options[2]
                )
              }

              <br>

              D. ${
                escapeHTML(
                  q.options[3]
                )
              }

            </small>


            <br><br>


            <strong style="color:#047857;">

              Correct:
              ${
                ["A","B","C","D"][
                  q.answer
                ]
              }

            </strong>


            <br>


            <button
              class="delete-btn"
              onclick="
                deleteQuestion(
                  '${escapeJS(subject)}',
                  ${index}
                )
              "
            >
              🗑️ Delete
            </button>

          `;


          area.appendChild(
            div
          );

        }
      );

    }
  );

}


/* =========================================================
   OPEN ADD QUESTION
   ========================================================= */

function openAddQuestion() {

  showPage(
    "addQuestionPage"
  );

}


/* =========================================================
   SAVE NEW QUESTION
   ========================================================= */

function saveNewQuestion() {

  const subject =
    document.getElementById(
      "newQuestionSubject"
    ).value;


  const question =
    document.getElementById(
      "newQuestionText"
    ).value.trim();


  const optionA =
    document.getElementById(
      "optionA"
    ).value.trim();


  const optionB =
    document.getElementById(
      "optionB"
    ).value.trim();


  const optionC =
    document.getElementById(
      "optionC"
    ).value.trim();


  const optionD =
    document.getElementById(
      "optionD"
    ).value.trim();


  const answer =
    Number(
      document.getElementById(
        "correctAnswer"
      ).value
    );


  if (
    !question ||
    !optionA ||
    !optionB ||
    !optionC ||
    !optionD
  ) {

    alert(
      "Please fill all fields."
    );

    return;

  }


  if (
    !questions[subject]
  ) {

    questions[subject] =
      [];

  }


  questions[
    subject
  ].push({

    question:
      question,

    options: [

      optionA,

      optionB,

      optionC,

      optionD

    ],

    answer:
      answer

  });


  localStorage.setItem(
    "quizChampQuestions",
    JSON.stringify(
      questions
    )
  );


  alert(
    "✅ Question added successfully!"
  );


  document.getElementById(
    "newQuestionText"
  ).value = "";


  document.getElementById(
    "optionA"
  ).value = "";


  document.getElementById(
    "optionB"
  ).value = "";


  document.getElementById(
    "optionC"
  ).value = "";


  document.getElementById(
    "optionD"
  ).value = "";


  showPage(
    "adminPage"
  );


  renderAdminQuestions();

}


/* =========================================================
   DELETE QUESTION
   ========================================================= */

function deleteQuestion(
  subject,
  index
) {

  const confirmDelete =
    confirm(
      "Delete this question?"
    );


  if (
    !confirmDelete
  ) {

    return;

  }


  questions[
    subject
  ].splice(
    index,
    1
  );


  localStorage.setItem(
    "quizChampQuestions",
    JSON.stringify(
      questions
    )
  );


  renderAdminQuestions();

}


/* =========================================================
   LOGOUT
   ========================================================= */

async function logout() {

  const confirmLogout =
    confirm(
      "Do you want to logout?"
    );


  if (
    !confirmLogout
  ) {

    return;

  }


  if (supabaseClient) {

    const {
      error
    } =
      await supabaseClient.auth.signOut();


    if (error) {

      console.error(
        "Logout error:",
        error
      );

    }

  }


  localStorage.removeItem(
    "quizChampUser"
  );


  user = null;


  location.reload();

}


/* =========================================================
   SAVE USER
   ========================================================= */

function saveUser() {

  localStorage.setItem(
    "quizChampUser",
    JSON.stringify(
      user
    )
  );

}


/* =========================================================
   SAVE STUDENTS
   ========================================================= */

function saveStudents() {

  localStorage.setItem(
    "quizChampStudents",
    JSON.stringify(
      students
    )
  );

}


/* =========================================================
   SET TEXT
   ========================================================= */

function setText(
  id,
  value
) {

  const element =
    document.getElementById(
      id
    );


  if (element) {

    element.textContent =
      value;

  }

}


/* =========================================================
   INITIAL
   ========================================================= */

function getInitial(
  name
) {

  if (!name) {

    return "Q";

  }


  return name
    .trim()
    .charAt(0)
    .toUpperCase();

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHTML(
  text
) {

  return String(text)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


/* =========================================================
   ESCAPE JAVASCRIPT
   ========================================================= */

function escapeJS(
  text
) {

  return String(text)

    .replace(
      /\\/g,
      "\\\\"
    )

    .replace(
      /'/g,
      "\\'"
    );

}