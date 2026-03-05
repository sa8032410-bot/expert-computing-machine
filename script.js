const prophets = [
    { name: {ar:"آدم",en:"Adam",fr:"Adam"}, story:{ar:"أول البشر وأول نبي خلقه الله.",en:"The first human and prophet created by Allah.",fr:"Le premier humain et prophète créé par Allah."}, image:"https://i.ibb.co/2S5ZB0f/adam.jpg" },
    { name: {ar:"نوح",en:"Noah",fr:"Noé"}, story:{ar:"دعا قومه 950 سنة وبنى السفينة.",en:"He دعوت his people for 950 years and built the Ark.",fr:"Il a دعوت son peuple pendant 950 ans et a construit l'arche."}, image:"https://i.ibb.co/2yYYLqH/noah.jpg" },
    { name: {ar:"هود",en:"Hud",fr:"Houd"}, story:{ar:"أرسل لقوم عاد ليهديهم.",en:"Sent to the people of 'Ad to guide them.",fr:"Envoyé au peuple de 'Ad pour les guider."}, image:"https://i.ibb.co/NZ2Hh2t/hud.jpg" },
    { name: {ar:"صالح",en:"Salih",fr:"Salih"}, story:{ar:"أرسل لقوم ثمود بالدعوة والإرشاد.",en:"Sent to the people of Thamud to guide them.",fr:"Envoyé au peuple de Thamud pour les guider."}, image:"https://i.ibb.co/4jN1Zb7/salih.jpg" },
    { name: {ar:"إبراهيم",en:"Abraham",fr:"Abraham"}, story:{ar:"خليل الله وواحد من أعظم الأنبياء.",en:"Friend of Allah and one of the greatest prophets.",fr:"Ami d'Allah et l'un des plus grands prophètes."}, image:"https://i.ibb.co/8K1cTnM/ibrahim.jpg" },
    { name: {ar:"لوط",en:"Lot",fr:"Lot"}, story:{ar:"أرسل لقومه ليهديهم عن الفواحش.",en:"Sent to his people to guide them from immorality.",fr:"Envoyé à son peuple pour les guider contre l'immoralité."}, image:"https://i.ibb.co/3Rv3f5X/lot.jpg" },
    { name: {ar:"إسماعيل",en:"Ismail",fr:"Ismaël"}, story:{ar:"ابن إبراهيم وشارك في بناء الكعبة.",en:"Son of Abraham and helped build the Kaaba.",fr:"Fils d'Abraham et a aidé à construire la Kaaba."}, image:"https://i.ibb.co/vYQyDWr/ismail.jpg" },
    { name: {ar:"إسحاق",en:"Ishaq",fr:"Isaac"}, story:{ar:"ابن إبراهيم ونبي كريم.",en:"Son of Abraham and a noble prophet.",fr:"Fils d'Abraham et prophète noble."}, image:"https://i.ibb.co/2P8G3qF/ishaq.jpg" },
    { name: {ar:"يعقوب",en:"Jacob",fr:"Jacob"}, story:{ar:"أبو يوسف وله قصص عظيمة.",en:"Father of Joseph with great stories.",fr:"Père de Joseph avec de grandes histoires."}, image:"https://i.ibb.co/5n3rgMZ/jacob.jpg" },
    { name: {ar:"يوسف",en:"Joseph",fr:"Joseph"}, story:{ar:"عرف بصبره وحكمته وصدقه.",en:"Known for patience, wisdom, and honesty.",fr:"Connu pour sa patience, sa sagesse et son honnêteté."}, image:"https://i.ibb.co/7tW5hHp/joseph.jpg" },
    { name: {ar:"أيوب",en:"Job",fr:"Job"}, story:{ar:"صبر على الابتلاءات والشدائد.",en:"Endured trials and hardships with patience.",fr:"Supporta les épreuves et les difficultés avec patience."}, image:"https://i.ibb.co/9H0S6zV/ayoub.jpg" },
    { name: {ar:"شعيب",en:"Shuaib",fr:"Shouaïb"}, story:{ar:"أرسل لقوم مدين بالدعوة.",en:"Sent to the people of Midian to guide them.",fr:"Envoyé au peuple de Madian pour les guider."}, image:"https://i.ibb.co/MCq9QhP/shuaib.jpg" },
    { name: {ar:"موسى",en:"Moses",fr:"Moïse"}, story:{ar:"كليم الله وأحد أعظم الأنبياء.",en:"Kaleem Allah and one of the greatest prophets.",fr:"Kaleem Allah et l'un des plus grands prophètes."}, image:"https://i.ibb.co/9WxvF6m/moses.jpg" },
    { name: {ar:"هارون",en:"Aaron",fr:"Aaron"}, story:{ar:"أخو موسى وناصره في الدعوة.",en:"Brother of Moses and his supporter in الدعوة.",fr:"Frère de Moïse et son soutien dans الدعوة."}, image:"https://i.ibb.co/x1LQRqv/haroon.jpg" },
    { name: {ar:"داود",en:"David",fr:"David"}, story:{ar:"ملك ونبي مشهور بالحكمة والشجاعة.",en:"King and prophet known for wisdom and courage.",fr:"Roi et prophète connu pour sa sagesse et son courage."}, image:"https://i.ibb.co/fkz5x7b/dawood.jpg" },
    { name: {ar:"سليمان",en:"Solomon",fr:"Salomon"}, story:{ar:"ابن داود وحكمته عظيمة.",en:"Son of David with immense wisdom.",fr:"Fils de David avec une sagesse immense."}, image:"https://i.ibb.co/QK5yYq5/solomon.jpg" },
    { name: {ar:"إلياس",en:"Elias",fr:"Élie"}, story:{ar:"أحد أنبياء بني إسرائيل.",en:"Prophet of Bani Israel.",fr:"Prophète des enfants d'Israël."}, image:"https://i.ibb.co/9GVYcnL/elias.jpg" },
    { name: {ar:"اليسع",en:"Elisha",fr:"Élisée"}, story:{ar:"خلف إلياس واستمر بالدعوة.",en:"Successor of Elias continuing الدعوة.",fr:"Successeur d'Élie poursuivant la الدعوة."}, image:"https://i.ibb.co/J7q3j8B/elisha.jpg" },
    { name: {ar:"يونس",en:"Jonah",fr:"Jonas"}, story:{ar:"ابتلعه الحوت ولكنه نجى.",en:"Swallowed by the whale but survived.",fr:"Avalé par la baleine mais survécu."}, image:"https://i.ibb.co/5KkJYbN/jonas.jpg" },
    { name: {ar:"زكريا",en:"Zechariah",fr:"Zacharie"}, story:{ar:"أب يحيى وبقي صابراً.",en:"Father of John (Yahya) and remained patient.",fr:"Père de Jean et resta patient."}, image:"https://i.ibb.co/FX8Y1fP/zekaria.jpg" },
    { name: {ar:"يحيى",en:"John",fr:"Jean"}, story:{ar:"نبي معاصر لعيسى عليه السلام.",en:"Prophet contemporary of Jesus (Isa).",fr:"Prophète contemporain de Jésus (Isa)."}, image:"https://i.ibb.co/0V4DcdS/yahya.jpg" },
    { name: {ar:"عيسى",en:"Jesus",fr:"Jésus"}, story:{ar:"أحد أولي العزم من الرسل.",en:"One of the Ulil Azm messengers.",fr:"Un des messagers Ulil Azm."}, image:"https://i.ibb.co/HTwHb1L/jesus.jpg" },
    { name: {ar:"محمد",en:"Muhammad",fr:"Mohammed"}, story:{ar:"خاتم الأنبياء والمرسلين.",en:"The last prophet and messenger.",fr:"Le dernier prophète et messager."}, image:"https://i.ibb.co/jvMxvGZ/muhammad.jpg" }
];

const listContainer = document.getElementById("prophetsList");
const nameEl = document.getElementById("prophetName");
const storyEl = document.getElementById("prophetStory");
const imageEl = document.getElementById("prophetImage");
const searchInput = document.getElementById("search");
const languageSelect = document.getElementById("language");
const modeToggle = document.getElementById("modeToggle");

let currentLang = localStorage.getItem("lang") || "ar";
let darkMode = localStorage.getItem("dark") === "true";

// تطبيق الوضع المخزن
if(darkMode) document.body.classList.add("dark");
languageSelect.value = currentLang;

function renderList() {
    listContainer.innerHTML = "";
    prophets.forEach((prophet, index) => {
        const btn = document.createElement("button");
        btn.textContent = prophet.name[currentLang];
        btn.onclick = () => showProphet(index);
        listContainer.appendChild(btn);
    });
}

function showProphet(index) {
    const prophet = prophets[index];
    nameEl.textContent = prophet.name[currentLang];
    storyEl.textContent = prophet.story[currentLang];
    imageEl.src = prophet.image;
}

languageSelect.onchange = (e) => {
    currentLang = e.target.value;
    localStorage.setItem("lang", currentLang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
    renderList();
};

modeToggle.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", document.body.classList.contains("dark"));
};

searchInput.oninput = () => {
    const value = searchInput.value.toLowerCase();
    const buttons = listContainer.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.style.display = btn.textContent.toLowerCase().includes(value)
            ? "inline-block"
            : "none";
    });
};

// تشغيل الموقع
renderList();
showProphet(0);