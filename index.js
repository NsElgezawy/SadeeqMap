// Project: SadeeqMap
// Developer: Anas El-gezawy
// Date: July 2025

let questions = [
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
  { question: "اضغط على البحر الكاريبي", locations: [[20, -83]], isSea: true },
  { question: "اضغط على البحر الأبيض المتوسط", locations: [[35, 18]], isSea: true },
  { question: "اضغط على البحر الأحمر", locations: [[20, 40]], isSea: true },

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

let correct = 0;
let wrong = 0;
let highScore = 0;

const map = L.map("map").setView([20, 0], 2);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a>'
}).addTo(map);

const questionElement = document.getElementById("question");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-question");

const markerGroup = L.layerGroup().addTo(map);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let currentQuestion = null;
let answered = false;

const loadQuestion = () => {
  if (questions.length === 0) {
    questionElement.textContent = "🎉 انتهت جميع الأسئلة!";
    resultElement.textContent = "";
    nextButton.disabled = true;
    return;
  }

  currentQuestion = questions.shift();
  questionElement.textContent = currentQuestion.question;
  resultElement.textContent = "";
  markerGroup.clearLayers();
  updateScore();
  answered = false;
};

const updateScore = () => {
  scoreElement.textContent = `❌ صحيحة: ${correct} | ✅ خاطئة: ${wrong}`;
};

const checkAnswer = (e) => {
  if (answered) return; // تجنب النقر مرتين

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

  let allowedDistance = 2500000;
  if (currentQuestion.isSea) {
    allowedDistance = 990000;
  }

  if (minDistance < allowedDistance) {
    correct++;
    resultElement.textContent = "إجابة صحيحة ✅";
    resultElement.style.color = "lightgreen";
  } else {
    wrong++;
    const wrongMarker = L.marker([lat, lng], {
      icon: L.divIcon({
        html: '<div style="background: red; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>',
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      }),
    }).addTo(markerGroup);

    resultElement.textContent = "إجابة خاطئة ❌";
    resultElement.style.color = "#ff6961";
  }

  updateScore();
  answered = true; // يمنع تكرار الإجابة

  document.getElementById("question-container").scrollIntoView({ behavior: "smooth" });
};

map.on("click", checkAnswer);

nextButton.addEventListener("click", loadQuestion);

shuffleArray(questions);
loadQuestion();
