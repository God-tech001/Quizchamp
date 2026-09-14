 ```javascript
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
   WEEKLY SYSTEM
   Monday 12:00 AM → New Week
   Sunday 11:59 PM → Week Ends
   Timezone: India
   ========================================================= */

/*
   Example:

   Monday  = new week
   Tuesday
   Wednesday
   Thursday
   Friday
   Saturday
   Sunday

   Next Monday → weekCoins becomes 0.

   Lifetime coins and totalCoins are NOT reset.
*/


function getCurrentWeekId() {

  const now =
    new Date();

  const indiaTime =
    new Date(
      now.toLocaleString(
        "en-US",
        {
          timeZone:
            "Asia/Kolkata"
        }
      )
    );

  const day =
    indiaTime.getDay();

  /*
     JavaScript:
     Sunday = 0
     Monday = 1
     Tuesday = 2
     ...
     Saturday = 6
  */

  const daysFromMonday =
    day === 0
      ? 6
      : day - 1;

  const monday =
    new Date(
      indiaTime
    );

  monday.setDate(
    monday.getDate() -
    daysFromMonday
  );

  const year =
    monday.getFullYear();

  const month =
    String(
      monday.getMonth() + 1
    ).padStart(
      2,
      "0"
    );

  const date =
    String(
      monday.getDate()
    ).padStart(
      2,
      "0"
    );

  return (
    year +
    "-" +
    month +
    "-" +
    date
  );

}


/* =========================================================
   CHECK WEEKLY RESET
   ========================================================= */

async function checkWeeklyReset() {

  if (!user) {
    return;
  }

  const currentWeekId =
    getCurrentWeekId();

  /*
     If user's saved week is different
     from current Monday's week,
     start a fresh weekly score.
  */

  if (
    user.weekId !==
    currentWeekId
  ) {

    user.weekCoins = 0;

    user.weekId =
      currentWeekId;

    saveUser();

    /*
       Keep lifetime coins untouched.
       Only weekly coins are reset.
    */

    await updateUserInSupabase();

  }

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async function () {

    if (!supabaseClient) {

      if (user) {

        await checkWeeklyReset();

        showMainApp();

      } else {

        document.getElementById(
          "loginPage"
        ).style.display =
          "flex";

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


      if (
        session &&
        session.user
      ) {

        await loadUserFromSupabase(
          session.user
        );

        await checkWeeklyReset();

        showMainApp();

      } else {

        if (user) {

          await checkWeeklyReset();

          showMainApp();

        } else {

          document.getElementById(
            "loginPage"
          ).style.display =
            "flex";

        }

      }

    } catch (error) {

      console.error(
        "Session error:",
        error
      );

      if (user) {

        await checkWeeklyReset();

        showMainApp();

      } else {

        document.getElementById(
          "loginPage"
        ).style.display =
          "flex";

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

  if (
    !authUser ||
    !supabaseClient
  ) {

    return false;

  }


  const {
    data: profile,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, username, email, coins, total_coins, quizzes, week_coins, week_id"
      )
      .eq(
        "id",
        authUser.id
      )
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

      id:
        authUser.id,

      name:
        authUser.user_metadata?.username ||
        "QuizChamp",

      dob:
        "",

      email:
        authUser.email ||
        "",

      coins:
        0,

      totalCoins:
        0,

      quizzes:
        0,

      weekCoins:
        0,

      weekId:
        getCurrentWeekId(),

      subjects: {

        Mathematics:
          0,

        Science:
          0,

        English:
          0,

        "General Knowledge":
          0,

        Computer:
          0

      }

    };

  } else {

    user = {

      id:
        profile.id,

      name:
        profile.username ||
        authUser.user_metadata?.username ||
        "QuizChamp",

      dob:
        user?.dob ||
        "",

      email:
        profile.email ||
        authUser.email ||
        "",

      coins:
        Number(
          profile.coins ||
          0
        ),

      totalCoins:
        Number(
          profile.total_coins ||
          0
        ),

      quizzes:
        Number(
          profile.quizzes ||
          0
        ),

      weekCoins:
        Number(
          profile.week_coins ||
          0
        ),

      weekId:
        profile.week_id ||
        getCurrentWeekId(),

      subjects:
        user?.subjects || {

          Mathematics:
            0,

          Science:
            0,

          English:
            0,

          "General Knowledge":
            0,

          Computer:
            0

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


  if (
    password.length <
    6
  ) {

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

      email:
        email,

      password:
        password,

      options: {

        data: {

          username:
            name

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

    id:
      data.user.id,

    name:
      name,

    dob:
      dob,

    email:
      email,

    coins:
      0,

    totalCoins:
      0,

    quizzes:
      0,

    weekCoins:
      0,

    weekId:
      getCurrentWeekId(),

    subjects: {

      Mathematics:
        0,

      Science:
        0,

      English:
        0,

      "General Knowledge":
        0,

      Computer:
        0

    }

  };


  saveUser();


  /*
     Save the newly created profile
     with the current weekly ID.
  */

  await updateUserInSupabase();


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
  ).style.display =
    "none";


  document.getElementById(
    "mainApp"
  ).style.display =
    "block";


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

  startQuiz(
    subject
  );

}


/* =========================================================
   START QUIZ
   ========================================================= */

function startQuiz(subject) {

  selectedSubject =
    subject;


  currentQuestions =
    questions[subject] ||
    [];


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
          Math.random() -
          0.5
      )
      .slice(
        0,
        10
      );


  currentQuestionIndex =
    0;

  selectedAnswer =
    null;

  quizCoins =
    0;


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


  selectedAnswer =
    null;


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


  container.innerHTML =
    "";


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

  // Answer select nahi kiya hai
  if (selectedAnswer === null) {

    alert("Please select an answer first.");

    return;
  }

  // Timer stop
  clearInterval(timerInterval);


  /* =======================================================
     SMART LINK AD SYSTEM

     1st Submit  = AD
     2nd Submit  = NO AD
     3rd Submit  = NO AD
     4th Submit  = AD
     5th Submit  = NO AD
     6th Submit  = NO AD
     7th Submit  = AD
     ======================================================= */

  let submitCount = Number(
    localStorage.getItem("quizChampSubmitCount") || 0
  );


  // Valid Submit ko count karo
  submitCount++;


  // Count save karo
  localStorage.setItem(
    "quizChampSubmitCount",
    submitCount
  );


  // 1st, 4th, 7th, 10th... par AD
  const showAd =
    ((submitCount - 1) % 3 === 0);


  if (showAd) {

    // Naya Smart Link
    const smartLink =
      "https://www.profitableratecpmnetwork.com/t4w52zrphg?key=18f0b728ca70616e85a3a69f1a06670f";


    // Smart Link ko new tab me open karo
    window.open(
      smartLink,
      "_blank"
    );

  }


  // Quiz ka next/ad page flow
  showPage("adPage");

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
```
```javascript
/* =========================================================
   ADD COIN
   ========================================================= */

async function addCoin() {

  if (!user) return;


  /*
     Monday check

     Agar naya week start ho chuka hai,
     to sirf weekCoins reset honge.

     Lifetime coins reset nahi honge.
  */

  await checkWeeklyReset();


  /*
     LIFETIME COINS
  */

  user.coins =
    Number(
      user.coins || 0
    ) + 1;


  /*
     TOTAL LIFETIME COINS
  */

  user.totalCoins =
    Number(
      user.totalCoins || 0
    ) + 1;


  /*
     CURRENT WEEK COINS

     Har earned coin:
     +1 weekly
  */

  user.weekCoins =
    Number(
      user.weekCoins || 0
    ) + 1;


  /*
     Current week ID save karo
  */

  user.weekId =
    getCurrentWeekId();


  quizCoins++;


  saveUser();


  /*
     Supabase me:
     coins
     total_coins
     week_coins
     week_id

     sab update honge.
  */

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

        /*
           Lifetime coins
        */

        coins:
          Number(
            user.coins || 0
          ),

        /*
           Total lifetime coins
        */

        total_coins:
          Number(
            user.totalCoins || 0
          ),

        /*
           Total quizzes
        */

        quizzes:
          Number(
            user.quizzes || 0
          ),

        /*
           Weekly coins
        */

        week_coins:
          Number(
            user.weekCoins || 0
          ),

        /*
           Current week's Monday ID
        */

        week_id:
          user.weekId ||
          getCurrentWeekId()

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


  const quizCoinsElement =
    document.getElementById(
      "quizCoins"
    );


  if (quizCoinsElement) {

    quizCoinsElement.textContent =
      quizCoins;

  }


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


  /*
     Rank weekly coins ke according
     calculate hoga.
  */

  const rank =
    await getUserRank();


  const initial =
    getInitial(
      user.name
    );


  /* =======================================================
     HOME
     ======================================================= */

  setText(
    "homeName",
    user.name
  );


  setText(
    "homeAvatar",
    initial
  );


  /*
     Ye lifetime/current coins hain.
  */

  setText(
    "homeCoins",
    user.coins || 0
  );


  /*
     Rank WEEKLY coins se hai.
  */

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


  /*
     Current week coins
  */

  setText(
    "homeWeekCoins",
    user.weekCoins || 0
  );


  /* =======================================================
     ACCOUNT
     ======================================================= */

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


  /*
     Lifetime coins
  */

  setText(
    "accountCoins",
    user.coins || 0
  );


  /*
     Weekly rank
  */

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


  /*
     Lifetime total coins
  */

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
   LOAD WEEKLY LEADERBOARD FROM SUPABASE
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


  /*
     Current Monday ka ID
  */

  const currentWeekId =
    getCurrentWeekId();


  let data;
  let error;


  const result =
    await supabaseClient
      .from("profiles")
      .select(
        "id, username, email, week_coins, week_id, total_coins, quizzes, created_at"
      );


  data =
    result.data;

  error =
    result.error;


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


  /*
     IMPORTANT:

     Agar kisi student ka week_id
     current Monday ke week_id se
     match nahi karta,

     to uske weekly coins = 0.

     Isse naya week start hote hi
     leaderboard fresh dikhega.
  */

  const weeklyData =
    (data || [])
      .map(
        student => ({

          ...student,

          week_coins:
            student.week_id ===
            currentWeekId

              ? Number(
                  student.week_coins ||
                  0
                )

              : 0

        })
      )
      .sort(
        (
          a,
          b
        ) =>
          Number(
            b.week_coins || 0
          ) -
          Number(
            a.week_coins || 0
          )
      );


  data =
    weeklyData;


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

        medal =
          "🥇";

      } else if (
        index === 1
      ) {

        medal =
          "🥈";

      } else if (
        index === 2
      ) {

        medal =
          "🥉";

      }


      html += `

        <div class="
          leaderboard-item
          ${
            index === 0
              ? "top-one"
              : ""
          }
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
                student.week_coins ||
                0
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
   GET USER WEEKLY RANK
   ========================================================= */

async function getUserRank() {

  if (
    !user ||
    !supabaseClient
  ) {

    return null;

  }


  /*
     Current Monday
  */

  const currentWeekId =
    getCurrentWeekId();


  const {
    data,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, week_coins, week_id"
      );


  if (
    error ||
    !data
  ) {

    return null;

  }


  /*
     Sirf current week ka score
     ranking mein count hoga.
  */

  const weeklyData =
    data
      .map(
        student => ({

          ...student,

          week_coins:
            student.week_id ===
            currentWeekId

              ? Number(
                  student.week_coins ||
                  0
                )

              : 0

        })
      )
      .sort(
        (
          a,
          b
        ) =>
          Number(
            b.week_coins || 0
          ) -
          Number(
            a.week_coins || 0
          )
      );


  const index =
    weeklyData.findIndex(
      student =>
        student.id ===
        user.id
    );


  if (
    index === -1
  ) {

    return null;

  }


  return (
    index + 1
  );

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


  /*
     Current week
  */

  const currentWeekId =
    getCurrentWeekId();


  const {
    data: profiles,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "username, week_coins, week_id"
      );


  if (error) {

    console.error(
      "Weekly winner error:",
      error
    );


    nameElement.textContent =
      "No Winner Yet";

    coinsElement.textContent =
      "🪙 0 Points";

    return;

  }


  /*
     Old week ke scores ko 0 maana jayega.
  */

  const weeklyData =
    (profiles || [])
      .map(
        student => ({

          ...student,

          currentWeekCoins:
            student.week_id ===
            currentWeekId

              ? Number(
                  student.week_coins ||
                  0
                )

              : 0

        })
      )
      .sort(
        (
          a,
          b
        ) =>
          b.currentWeekCoins -
          a.currentWeekCoins
      );


  const winner =
    weeklyData[0];


  if (
    !winner ||
    winner.currentWeekCoins <= 0
  ) {

    nameElement.textContent =
      "No Winner Yet";

    coinsElement.textContent =
      "🪙 0 Points";

    return;

  }


  nameElement.textContent =
    "🥇 " +
    (
      winner.username ||
      "QuizChamp"
    );


  coinsElement.textContent =
    "🪙 " +
    winner.currentWeekCoins +
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


  /*
     Weekly winner bhi admin page par
     show hoga.
  */

  renderWeeklyWinner();


  let totalQuestions =
    0;


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


  /*
     GLOBAL STUDENT COUNT
  */

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


  area.innerHTML =
    "";


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
```
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
