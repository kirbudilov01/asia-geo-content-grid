const copy = {
  ru: {
    eyebrow: "Гео-сетка",
    title: "Азия для контент-завода",
    lead: "Страны, города и темы, которые можно быстро разложить на Reels, Shorts и TikTok-серии.",
    countriesLabel: "Стран",
    citiesLabel: "Городов",
    topicsLabel: "Тем для первых тестов",
    anglesEyebrow: "Что снимать первым",
    anglesTitle: "Темы, которые цепляют в азиатской географии",
    citiesTitle: "Города для разведки",
    signalsTitle: "Первые заходы",
    filters: {
      all: "Все",
      thailand: "Таиланд",
      vietnam: "Вьетнам",
      indonesia: "Индонезия",
      india: "Индия",
      philippines: "Филиппины"
    }
  },
  en: {
    eyebrow: "Geo grid",
    title: "Asia for the content factory",
    lead: "Countries, cities and angles that can quickly become Reels, Shorts and TikTok series.",
    countriesLabel: "Countries",
    citiesLabel: "Cities",
    topicsLabel: "First-test topics",
    anglesEyebrow: "What to shoot first",
    anglesTitle: "Angles that work across Asian geographies",
    citiesTitle: "Cities to scout",
    signalsTitle: "First angles",
    filters: {
      all: "All",
      thailand: "Thailand",
      vietnam: "Vietnam",
      indonesia: "Indonesia",
      india: "India",
      philippines: "Philippines"
    }
  }
};

const countries = [
  {
    id: "thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    ru: {
      name: "Таиланд",
      tagline: "Самый понятный вход в Юго-Восточную Азию: релокация, зимовка, туризм, цены, острова.",
      cities: ["Бангкок", "Пхукет", "Паттайя", "Чиангмай", "Самуи", "Краби", "Хуа Хин", "Ко Панган"],
      signals: [
        "Сравнение жизни у моря и в столице.",
        "Сколько стоит нормальный месяц без иллюзий.",
        "Где туристический рай превращается в бытовую рутину."
      ]
    },
    en: {
      name: "Thailand",
      tagline: "The easiest entry point into Southeast Asia: relocation, wintering, tourism, prices and islands.",
      cities: ["Bangkok", "Phuket", "Pattaya", "Chiang Mai", "Koh Samui", "Krabi", "Hua Hin", "Koh Phangan"],
      signals: [
        "Seaside life versus the capital.",
        "What a normal month really costs.",
        "Where the tourist dream turns into daily routine."
      ]
    }
  },
  {
    id: "vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    ru: {
      name: "Вьетнам",
      tagline: "Быстрый рост, плотные города, сильная уличная экономика и контраст между севером и югом.",
      cities: ["Хошимин", "Ханой", "Дананг", "Нячанг", "Хойан", "Далат", "Фукуок", "Хайфон"],
      signals: [
        "Почему Вьетнам стал новым магнитом для экспатов.",
        "Город, где все едет, торгует и строится одновременно.",
        "Дананг как мягкий формат Азии для первого переезда."
      ]
    },
    en: {
      name: "Vietnam",
      tagline: "Fast growth, dense cities, street economy and a clear north-south contrast.",
      cities: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Nha Trang", "Hoi An", "Da Lat", "Phu Quoc", "Haiphong"],
      signals: [
        "Why Vietnam became a new expat magnet.",
        "A city where everything moves, sells and gets built at once.",
        "Da Nang as a softer first step into Asia."
      ]
    }
  },
  {
    id: "indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    ru: {
      name: "Индонезия",
      tagline: "Бали как витрина, Джакарта как реальность: креаторы, удаленка, трафик, аренда, комьюнити.",
      cities: ["Бали", "Джакарта", "Чангу", "Убуд", "Денпасар", "Сурабая", "Джокьякарта", "Ломбок"],
      signals: [
        "Бали как мечта и как перегретый рынок.",
        "Чем реальная Индонезия отличается от картинки в соцсетях.",
        "Почему креаторы едут туда, где уже слишком много креаторов."
      ]
    },
    en: {
      name: "Indonesia",
      tagline: "Bali as the showcase, Jakarta as the reality: creators, remote work, traffic, rent and communities.",
      cities: ["Bali", "Jakarta", "Canggu", "Ubud", "Denpasar", "Surabaya", "Yogyakarta", "Lombok"],
      signals: [
        "Bali as a dream and as an overheated market.",
        "How real Indonesia differs from the social media image.",
        "Why creators move to places already packed with creators."
      ]
    }
  },
  {
    id: "india",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    ru: {
      name: "Индия",
      tagline: "Гигантский рынок: мегаполисы, технологии, контрасты, сервисы, образование и внутренняя миграция.",
      cities: ["Дели", "Мумбаи", "Бангалор", "Гоа", "Ченнаи", "Хайдарабад", "Пуна", "Джайпур"],
      signals: [
        "Как живет страна, где масштаб чувствуется в каждом квартале.",
        "Бангалор как азиатская технологическая фабрика.",
        "Гоа не только пляжи: почему туда едут работать и пережидать."
      ]
    },
    en: {
      name: "India",
      tagline: "A massive market: megacities, technology, contrasts, services, education and internal migration.",
      cities: ["Delhi", "Mumbai", "Bengaluru", "Goa", "Chennai", "Hyderabad", "Pune", "Jaipur"],
      signals: [
        "How a country lives when scale is visible on every block.",
        "Bengaluru as Asia's technology factory.",
        "Goa beyond beaches: why people go there to work and reset."
      ]
    }
  },
  {
    id: "philippines",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
    ru: {
      name: "Филиппины",
      tagline: "Островная жизнь, английский язык, сервисная экономика и сильный контраст Манилы с курортами.",
      cities: ["Манила", "Себу", "Боракай", "Давао", "Эль-Нидо", "Палаван", "Бохол", "Сиаргао"],
      signals: [
        "Почему Филиппины проще для первого общения, но сложнее в быту.",
        "Манила против островов: две разные страны в одной.",
        "Где заканчивается отпуск и начинается реальная инфраструктура."
      ]
    },
    en: {
      name: "Philippines",
      tagline: "Island life, English, service economy and a sharp contrast between Manila and the resorts.",
      cities: ["Manila", "Cebu", "Boracay", "Davao", "El Nido", "Palawan", "Bohol", "Siargao"],
      signals: [
        "Why the Philippines are easier to enter socially but harder in daily life.",
        "Manila versus the islands: two different countries in one.",
        "Where vacation ends and real infrastructure begins."
      ]
    }
  }
];

const angles = {
  ru: [
    ["Переезд без романтики", "Что человек узнает только после первого месяца жизни в стране."],
    ["Город против острова", "Где красиво жить, а где реально удобно работать и решать бытовые задачи."],
    ["Цены без мифов", "Аренда, еда, транспорт, связь, медицина и неожиданные расходы."],
    ["Безопасность и быт", "Что волнует людей сильнее красивых видов: районы, дороги, медицина, документы."],
    ["Экспаты и местные", "Где появляется нормальная среда, а где человек остается туристом."],
    ["Недвижимость", "Почему вид из окна не равен хорошей покупке или аренде."],
    ["Работа и удаленка", "Интернет, коворкинги, часовые пояса, дисциплина, визовые ограничения."],
    ["Антиоткрытка", "Один сильный контраст: картинка из соцсетей против того, как оно устроено на земле."]
  ],
  en: [
    ["Relocation without romance", "What people only learn after the first month in the country."],
    ["City versus island", "Where it looks beautiful, and where it is actually easy to work and live."],
    ["Prices without myths", "Rent, food, transport, mobile plans, healthcare and hidden costs."],
    ["Safety and daily life", "What matters more than views: districts, roads, medicine and documents."],
    ["Expats and locals", "Where a real environment appears, and where a person stays a tourist."],
    ["Real estate", "Why a nice view does not equal a good rental or purchase."],
    ["Work and remote life", "Internet, coworkings, time zones, discipline and visa limits."],
    ["Anti-postcard", "One strong contrast: the social media picture versus how the place works on the ground."]
  ]
};

const grid = document.querySelector("#countryGrid");
const angleGrid = document.querySelector("#angleGrid");
const cityCount = document.querySelector("#cityCount");
const countryCount = document.querySelector("#countryCount");
const topicCount = document.querySelector("#topicCount");
const filters = [...document.querySelectorAll(".filter")];
const langToggle = document.querySelector("#langToggle");

let activeLang = "ru";
let activeFilter = "all";

function renderPage() {
  const strings = copy[activeLang];
  document.documentElement.lang = activeLang;
  document.title = activeLang === "ru" ? "Азия: страны и города для контент-сетки" : "Asia: countries and cities for the content grid";
  document.querySelectorAll("[data-i18n]").forEach((item) => {
    item.textContent = strings[item.dataset.i18n] || "";
  });
  filters.forEach((button) => {
    button.textContent = strings.filters[button.dataset.filter];
    button.classList.toggle("is-active", button.dataset.filter === activeFilter);
  });
  langToggle.textContent = activeLang === "ru" ? "EN" : "RU";
  renderCountries();
  renderAngles();
}

function renderCountries() {
  const visible = countries.filter((country) => activeFilter === "all" || country.id === activeFilter);
  grid.innerHTML = visible.map(countryCard).join("");
  countryCount.textContent = visible.length;
  cityCount.textContent = visible.reduce((sum, item) => sum + item[activeLang].cities.length, 0);
  topicCount.textContent = angles[activeLang].length * 3;
}

function countryCard(country) {
  const data = country[activeLang];
  const strings = copy[activeLang];
  return `
    <article class="country-card">
      <div class="country-card__top" style="background-image: url('${country.image}')">
        <h3>${data.name}</h3>
        <p class="tagline">${data.tagline}</p>
      </div>
      <div class="country-card__body">
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
