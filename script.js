const translations = {
  en: {
    about_title: "About Me",
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

    achievements_title: "Achievements",
    achievement_1: "Participation in NVIDIA project",
    achievement_2: "History Olympiad at Yad Vashem",
    projects_title: "Projects",

    project_title: "Banana Quality Prediction",
    project_description: "A school machine learning project that predicts banana quality using logistic regression and classification models.",
    project_date: "Spring 2025",
    project_pdf_link: "Open project PDF",

    contact_title: "Contact",
    contact_text: "Email: rhaayk08@email.com",
  },
  ru: {
    about_title: "Обо мне",
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
    projects_title: "Проекты",

    project_title: "Прогноз качества бананов",
    project_description: "Школьный проект по машинному обучению, предсказывающий качество бананов с помощью логистической регрессии и классификационных моделей.",
    project_date: "Весна 2025",
    project_pdf_link: "Открыть PDF проект",

    contact_title: "Контакты",
    contact_text: "Email: rhaayk08@email.com",
  },
  de: {
    about_title: "Über mich",
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

    achievements_title: "Erfolge",
    achievement_1: "Teilnahme am NVIDIA-Projekt",
    achievement_2: "Geschichtsolympiade bei Yad Vashem",
    projects_title: "Projekte",

    project_title: "Vorhersage der Bananenqualität",
    project_description: "Ein Schulprojekt zum maschinellen Lernen, das die Qualität von Bananen mithilfe logistischer Regression und Klassifikationsmodellen vorhersagt.",
    project_date: "Frühjahr 2025",
    project_pdf_link: "Projekt-PDF öffnen",

    contact_title: "Kontakt",
    contact_text: "E-Mail: rhaayk08@email.com",
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Установить английский по умолчанию
setLanguage("en");
