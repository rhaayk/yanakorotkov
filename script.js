
// Объект с переводами для разных языков
const translations = {
  en: {
    about_title: "About Me",
    achievements_title: "Achievements",
    projects_title: "Projects", // Убедись, что этот ключ есть и переведен
    contact_title: "Contact",

    // Остальные переводы
    label_name: "Name:",
    name: "Yana Korotkov",
    label_birthday: "Birthday:",
    birthday: "28.11.2008",
    label_location: "Location:",
    location: "Haifa, Israel",
    label_school: "School:",
    school_name: "Bosmat a Hadash",
    label_languages: "Languages:",
    lang_russian: "Russian (native)",
    lang_english: "English B2",
    lang_hebrew: "Hebrew B2",
    label_interests: "Interests:",
    interests: "Mathematics, physics, programming",
    label_quote: "Quote:",
    quote: "«Just having fun»",
    label_inspirer: "Inspirer:",
    inspirer: "Sofia Kovalevskaya",
    label_motivation: "Motivation:",
    motivation: "Striving to create technologies that change the world",

    achievement_1: "Participation in NVIDIA project",
    achievement_2: "History Olympiad at Yad Vashem",

    project_title: "Banana Quality Prediction",
    project_description: "A school machine learning project that predicts banana quality using logistic regression and classification models.",
    project_date: "Spring 2025",
    project_pdf_link: "Open project PDF",

    ai4good_title: "AI4Good International Program",
    ai4good_date: "Spring 2025",
    ai4good_description: "Our 2025 Al4Good International Program brought together teen girls and female role models in nine countries for an eight-week online initiative empowering aspiring female leaders to use Al for positive community impact. Through learning from leaders in tech and Al, participants explored how to define challenges related to SDG Goals, identify innovative solutions, develop project plans, and deliver impactful pitch presentations.",
    ai4good_certificate: "Certificate",
    ai4good_presentation: "Presentation",

    contact_text: "Email: rhaayk08@gmail.com",
  },
  ru: {
    about_title: "Обо мне",
    achievements_title: "Достижения",
    projects_title: "Проекты", // Убедись, что этот ключ есть и переведен
    contact_title: "Контакты",

    // Остальные переводы
    label_name: "Имя:",
    name: "Яна Коротков",
    label_birthday: "Дата рождения:",
    birthday: "28.11.2008",
    label_location: "Место проживания:",
    location: "Хайфа, Израиль",
    label_school: "Школа:",
    school_name: "Босмат а Хадаш",
    label_languages: "Языки:",
    lang_russian: "Русский (носитель)",
    lang_english: "Английский B2",
    lang_hebrew: "Иврит B2",
    label_interests: "Интересы:",
    interests: "Математика, физика, программирование",
    label_quote: "Цитата:",
    quote: "«Just having fun»",
    label_inspirer: "Вдохновитель:",
    inspirer: "Софья Ковалевская",
    label_motivation: "Мотивация:",
    motivation: "Стремление создавать технологии, которые меняют мир",

    achievements_title: "Достижения",
    achievement_1: "Участие в проекте NVIDIA",
    achievement_2: "Олимпиада по истории Яд Вашем",

    project_title: "Прогноз качества бананов",
    project_description: "Школьный проект по машинному обучению, предсказывающий качество бананов с помощью логистической регрессии и классификационных моделей.",
    project_date: "Весна 2025",
    project_pdf_link: "Открыть PDF проект",

    ai4good_title: "AI4Good International Program",
    ai4good_date: "Весна 2025",
    ai4good_description: "Программа AI4Good 2025 объединила девочек-подростков и женщин-лидеров в девяти странах в рамках восьминедельной онлайн-инициативы, которая дает возможность начинающим лидерам использовать ИИ для позитивного влияния на общество. Изучая опыт лидеров в области технологий и ИИ, участники узнали, как определять проблемы, связанные с целями в области устойчивого развития, находить инновационные решения, разрабатывать планы проектов и проводить презентации.",
    ai4good_certificate: "Сертификат",
    ai4good_presentation: "Презентация",

    contact_text: "Email: rhaayk08@gmail.com",
  },
  de: {
    about_title: "Über mich",
    achievements_title: "Erfolge",
    projects_title: "Projekte", // Убедись, что этот ключ есть и переведен
    contact_title: "Kontakt",

    // Остальные переводы
    label_name: "Name:",
    name: "Yana Korotkov",
    label_birthday: "Geburtsdatum:",
    birthday: "28.11.2008",
    label_location: "Wohnort:",
    location: "Haifa, Israel",
    label_school: "Schule:",
    school_name: "Bosmat a Hadash",
    label_languages: "Sprachen:",
    lang_russian: "Russisch (Muttersprache)",
    lang_english: "Englisch B2",
    lang_hebrew: "Hebräisch B2",
    label_interests: "Interessen:",
    interests: "Mathematik, Physik, Programmierung",
    label_quote: "Zitat:",
    quote: "«Just having fun»",
    label_inspirer: "Inspiratorin:",
    inspirer: "Sofia Kowalewskaja",
    label_motivation: "Motivation:",
    motivation: "Das Bestreben, Technologien zu schaffen, die die Welt verändern",

    achievement_1: "Teilnahme am NVIDIA-Projekt",
    achievement_2: "Geschichtsolympiade bei Yad Vashem",

    project_title: "Vorhersage der Bananenqualität",
    project_description: "Ein Schulprojekt zum maschinellen Lernen, das die Qualität von Bananen mithilfe logistischer Regression und Klassifikationsmodellen vorhersagt.",
    project_date: "Frühjahr 2025",
    project_pdf_link: "Projekt-PDF öffnen",

    ai4good_title: "AI4Good International Program",
    ai4good_date: "Frühjahr 2025",
    ai4good_description: "Das AI4Good International Program 2025 brachte Teenager-Mädchen und weibliche Vorbilder in neun Ländern zu einer achtwöchigen Online-Initiative zusammen. Ziel war es, angehende weibliche Führungskräfte zu befähigen, KI für einen positiven Einfluss auf ihre Gemeinschaft einzusetzen. Durch das Lernen von Führungskräften in den Bereichen Technologie und KI erforschten die Teilnehmerinnen, wie sie Herausforderungen im Zusammenhang mit den SDG-Zielen definieren, innovative Lösungen identifizieren, Projektpläne entwickeln und wirkungsvolle Präsentationen halten können.",
    ai4good_certificate: "Zertifikat",
    ai4good_presentation: "Präsentation",

    contact_text: "E-Mail: rhaayk08@gmail.com",
  }
};

// Функция для установки языка
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      // Специальная обработка для ссылок, чтобы не менять атрибут href
      // Мы изменяем textContent элемента, который имеет data-i18n
      el.textContent = translations[lang][key];
    }
  });
}

// Установить английский по умолчанию при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  setLanguage("en");

  // Получаем ссылки на элементы
  const sidebar = document.querySelector('.sidebar');
  const burgerButton = document.getElementById('burger');
  const navLinks = document.querySelectorAll('.sidebar nav a');

  // Добавляем слушатель события на кнопку-бургер
  if (burgerButton) {
    burgerButton.addEventListener('click', () => {
      sidebar.classList.toggle('active'); // Переключаем класс 'active' для сайдбара
    });
  }

  // Добавляем слушатель события на каждую ссылку в меню
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Закрываем сайдбар после клика по ссылке, если он открыт
      if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }
    });
  });
});
