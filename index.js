// Project: SadeeqMap
// Developer: Anas El-gezawy
// Date: July 2025

// === أسئلة أفريقيا ===
const africaQuestions =[
  { question: "اضغط على مضيق جبل طارق", locations: [[35.74651, -5.88867]], smallRange: true },
  { question: "اضغط على جبال أطلس", locations: [[33.30272, 2.28103]], smallRange: true },
  { question: "اضغط على هضبة شمال أفريقيا", locations: [[25.82185, -0.88461], [25.82185, 11.07448]], smallRange: true },
  { question: "اضغط على نهر السنغال", locations: [[13.09673, -10.0298]], smallRange: true },
  { question: "اضغط على نهر النيجر", locations: [[9.47853, 1.92929]], smallRange: true },
  { question: "اضغط على نهر الكونغو", locations: [[-4.1808, 18.10924]], smallRange: true },
  { question: "اضغط على جبل العوينات", locations: [[19.83295, 23.03358]], smallRange: true },
  { question: "اضغط على جبال البحر الأحمر", locations: [[22.61727, 35.16854]], smallRange: true },
  { question: "اضغط على نهر النيل", locations: [[27.08045, 30.06834]], smallRange: true },
  { question: "اضغط على بحيرة تانا", locations: [[11.89582, 37.1031]], smallRange: true },
  { question: "اضغط على هضبة الحبشة", locations: [[8.08925, 39.03766]], smallRange: true },
  { question: "اضغط على جبل كينيا", locations: [[1.61421, 39.74113]], smallRange: true },
  { question: "اضغط على جبل كلمنجارو", locations: [[-7.50942, 37.09845]], smallRange: true },
  { question: "اضغط على بحيرة فيكتوريا", locations: [[-1.37278, 33.05811]], smallRange: true },
  { question: "اضغط على مضيق باب المندب", locations: [[12.75418, 43.25851]], smallRange: true },
  { question: "اضغط على هضبة البحيرات الاستوائية", locations: [[-8.03176, 32.70172]], smallRange: true },
  { question: "اضغط على نهر الزمبيزي", locations: [[-15.93218, 34.63628]], smallRange: true },
  { question: "اضغط على مضيق موزمبيق", locations: [[-16.43846, 42.02278]], smallRange: true },
  { question: "اضغط على الهضبة الجنوبية", locations: [[-17.782, 19.33567]], smallRange: true },
  { question: "اضغط على نهر أورانج", locations: [[-27.18516, 18.6322]], smallRange: true },
  { question: "اضغط على جبال الكاب", locations: [[-33.401, 22.14958]], smallRange: true },
  { question: "اضغط على جبال دراكنزبرج", locations: [[-31.6229, 28.12913]], smallRange: true },
  { question: "اضغط على صحراء كلهاري", locations: [[-23.21122, 20.21502]], smallRange: true },
  { question: "اضغط على خليج غينيا", locations: [[1.07946, 2.10051]], smallRange: true },
];


// === أسئلة العالم ===
const worldQuestions = [
  { question: "اضغط على قارة أفريقيا", locations: [[13, 13]] },
  { question: "اضغط على قارة أوروبا", locations: [[54, 15]] },
  { question: "اضغط على قارة آسيا", locations: [[45, 90]] },
  { question: "اضغط على قارة أمريكا الشمالية", locations: [[55, -100]] },
  { question: "اضغط على قارة أمريكا الجنوبية", locations: [[-15, -60]] },
  { question: "اضغط على قارة أستراليا", locations: [[-25, 133]] },
  { question: "اضغط على قارة أنتاركتيكا", locations: [[-80, 0]] },
  { question: "اضغط على المحيط الهادئ", locations: [[40, -160], [40, 160], [-40, -165], [-40, 165], [0, -160], [0, 160]] },
  { question: "اضغط على المحيط الأطلسي", locations: [[0, -30], [30, -50]] },
  { question: "اضغط على المحيط الهندي", locations: [[-13, 80]] },
  { question: "اضغط على المحيط المتجمد الشمالي", locations: [[80, 0]] },
  { question: "اضغط على المحيط المتجمد الجنوبي", locations: [[-70, 20]] },
  { question: "اضغط على البحر الكاريبي", locations: [[20, -83]], smallRange: true },
  { question: "اضغط على البحر الأبيض المتوسط", locations: [[35, 18]], smallRange: true },
  { question: "اضغط على البحر الأحمر", locations: [[20, 40]], smallRange: true },

  { question: "اضغط علي أكبر قارات العالم؟", locations: [[45, 90]] }, // آسيا
  { question: "اضغط علي أصغر قارات العالم؟", locations: [[-25, 133]] }, // أستراليا
  { question: "اضغط علي ثاني أكبر قارات العالم؟", locations: [[13, 13]] }, // أفريقيا
  { question: "اضغط علي سادس أكبر قارات العالم؟", locations: [[54, 15]] }, // أوروبا
  { question: "ما هي القارة التي تحتوي على أكبر بحر مغلق في العالم؟", locations: [[45, 90]] }, // آسيا
  { question: "ما هي القارة التي تحتوي على أطول نهر في العالم؟", locations: [[13, 13]] }, // أفريقيا
  { question: "ما هي القارة التي تحتوي على أكبر حوض نهري في العالم؟", locations: [[-15, -60]] }, // أمريكا الجنوبية
  { question: " توجد جبال روكي في قارة؟", locations: [[55, -100]] }, // أمريكا الشمالية
  { question: " توجد جبال الألب في قارة؟", locations: [[54, 15]] }, // أوروبا
  { question: " توجد أعلى نقطة في العالم في قارة؟", locations: [[45, 90]] }, // آسيا
  { question: " توجد هضبة سقف العالم في قارة؟", locations: [[45, 90]] }, // آسيا
];


// === متغيرات عامة للعبة ===
let questions = [];
let correct = 0;
let wrong = 0;
let highScore = 0;

let map, markerGroup;
let currentQuestion = null;
let answered = false;

// === وظائف ===
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const loadQuestion = () => {
  if (questions.length === 0) {
    document.getElementById("question").textContent = "🎉 انتهت جميع الأسئلة!";
    document.getElementById("result").textContent = "";
    document.getElementById("next-question").disabled = true;
    return;
  }

  currentQuestion = questions.shift();
  document.getElementById("question").textContent = currentQuestion.question;
  document.getElementById("result").textContent = "";
  markerGroup.clearLayers();
  updateScore();
  answered = false;
};

const updateScore = () => {
  document.getElementById("score").textContent = `❌ صحيحة: ${correct} | ✅ خاطئة: ${wrong}`;
};

const checkAnswer = (e) => {
  if (answered) return;

  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  const distances = currentQuestion.locations.map(loc => {
    return map.distance([lat, lng], loc);
  });

  const minDistance = Math.min(...distances);
  const closestIndex = distances.indexOf(minDistance);
  const [correctLat, correctLng] = currentQuestion.locations[closestIndex];

  const correctMarker = L.marker([correctLat, correctLng], {
    icon: L.divIcon({
      html: '<div style="background: green; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    }),
  }).addTo(markerGroup);

  let allowedDistance = currentQuestion.smallRange ? 990000 : 2200000;

  if (minDistance < allowedDistance) {
    correct++;
    document.getElementById("result").textContent = "إجابة صحيحة ✅";
    document.getElementById("result").style.color = "lightgreen";
  } else {
    wrong++;
    L.marker([lat, lng], {
      icon: L.divIcon({
        html: '<div style="background: red; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      }),
    }).addTo(markerGroup);

    document.getElementById("result").textContent = "إجابة خاطئة ❌";
    document.getElementById("result").style.color = "#ff6961";
  }

  updateScore();
  answered = true;
  document.getElementById("question-container").scrollIntoView({ behavior: "smooth" });
};

// === تشغيل اللعبة ===
function startGame(mode) {
  // اخفاء شاشة البداية
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";

  // اختيار الأسئلة
  questions = (mode === "africa" ? [...africaQuestions] : [...worldQuestions]);

  // تجهيز الخريطة
  map = L.map("map").setView([20, 0], 2);
  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
  }).addTo(map);

  markerGroup = L.layerGroup().addTo(map);

  map.on("click", checkAnswer);
  document.getElementById("next-question").addEventListener("click", loadQuestion);

  shuffleArray(questions);
  loadQuestion();
}

// === ربط الأزرار ===
document.getElementById("btn-world").addEventListener("click", () => startGame("world"));
document.getElementById("btn-africa").addEventListener("click", () => startGame("africa"));
document.getElementById("back-button").addEventListener("click", () => {
  // اخفاء الكويز
  document.getElementById("quiz-container").style.display = "none";
  // إظهار شاشة البداية
  document.getElementById("start-screen").style.display = "flex";

  // إعادة تعيين المتغيرات
  correct = 0;
  wrong = 0;

  // تدمير الخريطة القديمة لو لسه مفتوحة
  if (map) {
    map.remove();
  }
});

