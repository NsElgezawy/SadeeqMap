// Project: Interactive World Map Quiz
// Developer: Anas El-gezawy
// Date: July 2025

let questions = [
  { question: "اضغط على قارة أفريقيا", locations: [[0, 20]] },
  { question: "اضغط على قارة أوروبا", locations: [[54, 15]] },
  { question: "اضغط على قارة آسيا", locations: [[45, 90]] },
  { question: "اضغط على قارة أمريكا الشمالية", locations: [[55, -100]] },
  { question: "اضغط على قارة أمريكا الجنوبية", locations: [[-15, -60]] },
  { question: "اضغط على قارة أستراليا", locations: [[-25, 133]] },
  { question: "اضغط على قارة أنتاركتيكا", locations: [[-80, 0]] },

  { question: "اضغط على المحيط الهادئ", locations: [[0, -160], [10, 170]] },
  { question: "اضغط على المحيط الأطلسي", locations: [[13, -30]] },
  { question: "اضغط على المحيط الهندي", locations: [[-13, 80]] },
  { question: "اضغط على المحيط المتجمد الشمالي", locations: [[80, 0]] },
  { question: "اضغط على المحيط المتجمد الجنوبي", locations: [[-60, 110]] },
  { question: "اضغط على البحر الكاريبي", locations: [[20, -83]] },
  { question: "اضغط على البحر الأبيض المتوسط", locations: [[35, 18]] }
];

let score = 0;

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

const loadQuestion = () => {
  if (questions.length === 0) {
    questionElement.textContent = "🎉 انتهت جميع الأسئلة!";
    resultElement.textContent = "";
    nextButton.disabled = true;
    return;
  }

  currentQuestion = questions.shift(); // هات السؤال الأول واحذفه
  questionElement.textContent = currentQuestion.question;
  resultElement.textContent = "";
  resultElement.style.color = "#fff";
  markerGroup.clearLayers();
  scoreElement.textContent = `النتيجة الحالية: ${score} / ${14}`;
};

const checkAnswer = (e) => {
  const lat = e.latlng.lat;
  const lng = e.latlng.lng;

  // نحسب المسافات لكل المواقع المحتملة
  const distances = currentQuestion.locations.map(loc => {
    return map.distance([lat, lng], loc);
  });

  const minDistance = Math.min(...distances);

  // حدد أقرب نقطة عشان تحط الماركر الصح عليها
  const closestIndex = distances.indexOf(minDistance);
  const [correctLat, correctLng] = currentQuestion.locations[closestIndex];

  // ماركر صح
  const correctMarker = L.marker([correctLat, correctLng], {
    icon: L.divIcon({
      html: '<div style="background: green; width: 16px; height: 16px; border-radius: 50%; border: 2px solid white;"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    }),
  }).addTo(markerGroup);

  if (minDistance < 2500000) {
    score++;
    resultElement.textContent = "إجابة صحيحة ✅";
    resultElement.style.color = "lightgreen";
  } else {
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

  scoreElement.textContent = `النتيجة الحالية: ${score} / ${14}`;

  setTimeout(loadQuestion, 1500);
};

map.on("click", checkAnswer);

nextButton.addEventListener("click", loadQuestion);

shuffleArray(questions);
loadQuestion();
