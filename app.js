const copy = {
  ru: {
    eyebrow: "Гео-сетка",
    title: "Азия по регионам",
    lead: "Макрорегионы, страны, города и контент-заходы: чтобы быстро разложить Азию на Reels, Shorts и TikTok-серии.",
    regionsLabel: "Регионов",
    countriesLabel: "Стран",
    citiesLabel: "Городов",
    anglesEyebrow: "Что снимать первым",
    anglesTitle: "Темы, которые цепляют в азиатской географии",
    countriesTitle: "Страны в фокусе",
    citiesTitle: "Города для разведки",
    signalsTitle: "Первые заходы",
    filters: {
      all: "Все регионы",
      southeast: "Юго-Восточная Азия",
      south: "Южная Азия",
      east: "Восточная Азия",
      central: "Центральная Азия",
      west: "Западная Азия"
    }
  },
  en: {
    eyebrow: "Geo grid",
    title: "Asia by regions",
    lead: "Macro-regions, countries, cities and content angles for turning Asia into Reels, Shorts and TikTok series.",
    regionsLabel: "Regions",
    countriesLabel: "Countries",
    citiesLabel: "Cities",
    anglesEyebrow: "What to shoot first",
    anglesTitle: "Angles that work across Asian geographies",
    countriesTitle: "Countries in focus",
    citiesTitle: "Cities to scout",
    signalsTitle: "First angles",
    filters: {
      all: "All regions",
      southeast: "Southeast Asia",
      south: "South Asia",
      east: "East Asia",
      central: "Central Asia",
      west: "West Asia"
    }
  }
};

const regions = [
  {
    id: "southeast",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1400&q=80",
    ru: {
      name: "Юго-Восточная Азия",
      tagline: "Главная зона для релокации, зимовки, туризма, островов, дешевой жизни и быстрых контрастов.",
      countries: ["Таиланд", "Вьетнам", "Индонезия", "Филиппины", "Малайзия", "Сингапур", "Камбоджа"],
      cities: ["Бангкок", "Пхукет", "Паттайя", "Самуи", "Чиангмай", "Хошимин", "Ханой", "Дананг", "Нячанг", "Бали", "Чангу", "Убуд", "Джакарта", "Манила", "Себу", "Куала-Лумпур", "Сингапур"],
      signals: [
        "Где жизнь у моря реально удобна, а где это только картинка.",
        "Почему один город подходит для отдыха, другой для работы, третий для жизни.",
        "Сравнение цен, виз, аренды, медицины, интернета и районов без туристической романтики."
      ]
    },
    en: {
      name: "Southeast Asia",
      tagline: "The main zone for relocation, wintering, tourism, islands, lower costs and fast contrasts.",
      countries: ["Thailand", "Vietnam", "Indonesia", "Philippines", "Malaysia", "Singapore", "Cambodia"],
      cities: ["Bangkok", "Phuket", "Pattaya", "Koh Samui", "Chiang Mai", "Ho Chi Minh City", "Hanoi", "Da Nang", "Nha Trang", "Bali", "Canggu", "Ubud", "Jakarta", "Manila", "Cebu", "Kuala Lumpur", "Singapore"],
      signals: [
        "Where seaside life is actually convenient, and where it is only a picture.",
        "Why one city works for vacation, another for work, and another for real life.",
        "Prices, visas, rent, medicine, internet and districts without tourist romance."
      ]
    }
  },
  {
    id: "south",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=80",
    ru: {
      name: "Южная Азия",
      tagline: "Огромные рынки, масштаб, контрасты, IT, духовный туризм, океанские направления и плотная городская жизнь.",
      countries: ["Индия", "Шри-Ланка", "Непал", "Бангладеш", "Пакистан", "Мальдивы"],
      cities: ["Дели", "Мумбаи", "Бангалор", "Гоа", "Ченнаи", "Хайдарабад", "Пуна", "Джайпур", "Коломбо", "Галле", "Катманду", "Дакка", "Карачи", "Лахор", "Мале"],
      signals: [
        "Как выглядит рынок, где один город больше некоторых стран.",
        "IT-Азия против туристической Азии: Бангалор, Дели, Гоа и Шри-Ланка как разные вселенные.",
        "Почему красивые места не всегда простые для быта, документов и долгой жизни."
      ]
    },
    en: {
      name: "South Asia",
      tagline: "Huge markets, scale, contrasts, IT, spiritual travel, ocean destinations and dense city life.",
      countries: ["India", "Sri Lanka", "Nepal", "Bangladesh", "Pakistan", "Maldives"],
      cities: ["Delhi", "Mumbai", "Bengaluru", "Goa", "Chennai", "Hyderabad", "Pune", "Jaipur", "Colombo", "Galle", "Kathmandu", "Dhaka", "Karachi", "Lahore", "Male"],
      signals: [
        "What a market looks like when one city is bigger than some countries.",
        "IT Asia versus tourist Asia: Bengaluru, Delhi, Goa and Sri Lanka as different worlds.",
        "Why beautiful places are not always easy for daily life, documents and long stays."
      ]
    }
  },
  {
    id: "east",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&q=80",
    ru: {
      name: "Восточная Азия",
      tagline: "Технологии, дисциплина, мегаполисы, дорогая жизнь, суперсервисы и сильные культурные коды.",
      countries: ["Япония", "Южная Корея", "Китай", "Тайвань", "Гонконг", "Монголия"],
      cities: ["Токио", "Осака", "Киото", "Сеул", "Пусан", "Пекин", "Шанхай", "Шэньчжэнь", "Гуанчжоу", "Тайбэй", "Гонконг", "Улан-Батор"],
      signals: [
        "Почему тут удобно как в будущем, но дорого и не всегда просто влиться.",
        "Мегаполис как продукт: транспорт, сервисы, безопасность, аренда и правила.",
        "Культурный шок без клише: что реально удивляет после первого месяца."
      ]
    },
    en: {
      name: "East Asia",
      tagline: "Technology, discipline, megacities, high costs, super-services and strong cultural codes.",
      countries: ["Japan", "South Korea", "China", "Taiwan", "Hong Kong", "Mongolia"],
      cities: ["Tokyo", "Osaka", "Kyoto", "Seoul", "Busan", "Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Taipei", "Hong Kong", "Ulaanbaatar"],
      signals: [
        "Why it can feel like the future, but expensive and hard to enter.",
        "The city as a product: transport, services, safety, rent and rules.",
        "Culture shock without cliches: what actually surprises after a month."
      ]
    }
  },
  {
    id: "central",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1400&q=80",
    ru: {
      name: "Центральная Азия",
      tagline: "Близкая Азия для русскоязычной аудитории: рост городов, релокация, рынки, аренда, новые сервисы.",
      countries: ["Казахстан", "Узбекистан", "Кыргызстан", "Таджикистан", "Туркменистан"],
      cities: ["Алматы", "Астана", "Шымкент", "Ташкент", "Самарканд", "Бухара", "Бишкек", "Ош", "Душанбе", "Ашхабад"],
      signals: [
        "Почему эти города стали ближе, чем кажется: язык, деньги, работа, документы.",
        "Где рынок растет быстрее инфраструктуры и что это меняет для жизни.",
        "Сравнение Алматы, Ташкента и Бишкека как трех разных сценариев переезда."
      ]
    },
    en: {
      name: "Central Asia",
      tagline: "A close Asian region for Russian-speaking audiences: city growth, relocation, markets, rent and new services.",
      countries: ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan", "Turkmenistan"],
      cities: ["Almaty", "Astana", "Shymkent", "Tashkent", "Samarkand", "Bukhara", "Bishkek", "Osh", "Dushanbe", "Ashgabat"],
      signals: [
        "Why these cities feel closer than expected: language, money, work and documents.",
        "Where the market grows faster than infrastructure and how it changes daily life.",
        "Almaty, Tashkent and Bishkek as three different relocation scenarios."
      ]
    }
  },
  {
    id: "west",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    ru: {
      name: "Западная Азия и Ближний Восток",
      tagline: "Деньги, хабы, жара, визы, недвижимость, премиальный сервис и резкий контраст между странами.",
      countries: ["ОАЭ", "Турция", "Катар", "Саудовская Аравия", "Грузия", "Армения", "Азербайджан"],
      cities: ["Дубай", "Абу-Даби", "Доха", "Эр-Рияд", "Джидда", "Стамбул", "Анталья", "Тбилиси", "Батуми", "Ереван", "Баку"],
      signals: [
        "Дубай как витрина: что за кадром, если жить не неделю, а год.",
        "Где релокация про комфорт, а где про налоги, бизнес и статус.",
        "Почему один регион может быть одновременно дорогим, удобным и очень разным по правилам."
      ]
    },
    en: {
      name: "West Asia and the Middle East",
      tagline: "Money, hubs, heat, visas, real estate, premium service and sharp country-to-country contrasts.",
      countries: ["UAE", "Turkey", "Qatar", "Saudi Arabia", "Georgia", "Armenia", "Azerbaijan"],
      cities: ["Dubai", "Abu Dhabi", "Doha", "Riyadh", "Jeddah", "Istanbul", "Antalya", "Tbilisi", "Batumi", "Yerevan", "Baku"],
      signals: [
        "Dubai as a showcase: what is behind the picture if you stay for a year, not a week.",
        "Where relocation is about comfort, and where it is about taxes, business and status.",
        "Why one region can be expensive, convenient and very different by rules at the same time."
      ]
    }
  }
];

const angles = {
  ru: [
    ["Регион против страны", "Почему нельзя говорить просто “Азия”: ЮВА, Южная Азия и Ближний Восток дают разные сценарии жизни."],
    ["Город как продукт", "Транспорт, район, медицина, аренда, интернет и документы важнее красивого вида."],
    ["Переезд без романтики", "Что человек понимает только после первого месяца: шум, жара, правила, платежи, быт."],
    ["Дешево или удобно", "Где низкая цена компенсируется сложностью, а где дорого, но все работает."],
    ["Турист против резидента", "Один и тот же город может быть раем на неделю и тяжелым местом на год."],
    ["Куда ехать первым", "Стартовые города для разведки: Бангкок, Дананг, Бали, Алматы, Дубай, Тбилиси."],
    ["Рынок растет быстрее города", "Где спрос, аренда и миграция обгоняют дороги, школы, медицину и сервисы."],
    ["Антиоткрытка", "Берем красивую картинку региона и показываем, что нужно проверить до переезда."]
  ],
  en: [
    ["Region versus country", "Why you cannot simply say “Asia”: Southeast Asia, South Asia and the Middle East create different life scenarios."],
    ["The city as a product", "Transport, district, healthcare, rent, internet and documents matter more than the view."],
    ["Relocation without romance", "What people learn only after the first month: noise, heat, rules, payments and daily life."],
    ["Cheap or convenient", "Where low cost comes with complexity, and where it is expensive but works."],
    ["Tourist versus resident", "The same city can be paradise for a week and hard for a year."],
    ["Where to go first", "Starter scouting cities: Bangkok, Da Nang, Bali, Almaty, Dubai and Tbilisi."],
    ["The market outruns the city", "Where demand, rent and migration grow faster than roads, schools, healthcare and services."],
    ["Anti-postcard", "Take the beautiful regional picture and show what must be checked before moving."]
  ]
};

const grid = document.querySelector("#regionGrid");
const regionCount = document.querySelector("#regionCount");
const countryCount = document.querySelector("#countryCount");
const cityCount = document.querySelector("#cityCount");
const angleGrid = document.querySelector("#angleGrid");
const filters = [...document.querySelectorAll(".filter")];
const langToggle = document.querySelector("#langToggle");

let activeLang = "ru";
let activeFilter = "all";

function renderPage() {
  const strings = copy[activeLang];
  document.documentElement.lang = activeLang;
  document.title = activeLang === "ru" ? "Азия: регионы, страны и города для контент-сетки" : "Asia: regions, countries and cities for the content grid";
  document.querySelectorAll("[data-i18n]").forEach((item) => {
    item.textContent = strings[item.dataset.i18n] || "";
  });
  filters.forEach((button) => {
    button.textContent = strings.filters[button.dataset.filter];
    button.classList.toggle("is-active", button.dataset.filter === activeFilter);
  });
  langToggle.textContent = activeLang === "ru" ? "EN" : "RU";
  renderRegions();
  renderAngles();
}

function visibleRegions() {
  return regions.filter((region) => activeFilter === "all" || region.id === activeFilter);
}

function renderRegions() {
  const visible = visibleRegions();
  grid.innerHTML = visible.map(regionCard).join("");
  regionCount.textContent = visible.length;
  countryCount.textContent = visible.reduce((sum, item) => sum + item[activeLang].countries.length, 0);
  cityCount.textContent = visible.reduce((sum, item) => sum + item[activeLang].cities.length, 0);
}

function regionCard(region) {
  const data = region[activeLang];
  const strings = copy[activeLang];
  return `
    <article class="country-card">
      <div class="country-card__top" style="background-image: url('${region.image}')">
        <h3>${data.name}</h3>
        <p class="tagline">${data.tagline}</p>
      </div>
      <div class="country-card__body">
        <p class="label">${strings.countriesTitle}</p>
        <div class="cities countries">
          ${data.countries.map((country) => `<span class="city">${country}</span>`).join("")}
        </div>
        <p class="label">${strings.citiesTitle}</p>
        <div class="cities">
          ${data.cities.map((city) => `<span class="city">${city}</span>`).join("")}
        </div>
        <p class="label">${strings.signalsTitle}</p>
        <ul class="signals">
          ${data.signals.map((signal) => `<li>${signal}</li>`).join("")}
        </ul>
      </div>
    </article>
  `;
}

function renderAngles() {
  angleGrid.innerHTML = angles[activeLang].map(([title, body]) => `
    <article class="angle-card">
      <strong>${title}</strong>
      <p>${body}</p>
    </article>
  `).join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    renderPage();
  });
});

langToggle.addEventListener("click", () => {
  activeLang = activeLang === "ru" ? "en" : "ru";
  renderPage();
});

renderPage();
