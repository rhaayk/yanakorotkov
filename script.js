// Объект с переводами для разных языков
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
    project_date: "<strong class=\"highlight\">Spring 2025</strong>",
    project_description: "A school machine learning project that predicts banana quality using logistic regression and classification models.",
    project_pdf_link: "Open project PDF",
    
    ai4good_title: "AI4Good International Program",
    ai4good_date: "<strong class=\"highlight\">Spring 2025</strong>",
    ai4good_description: "Our 2025 Al4Good International Program brought together teen girls and female role models in nine countries for an eight-week online initiative empowering aspiring female leaders to use Al for positive community impact. Through learning from leaders in tech and Al, participants explored how to define challenges related to SDG Goals, identify innovative solutions, develop project plans, and deliver impactful pitch presentations.",
    ai4good_certificate: "Certificate",
    ai4good_presentation: "Presentation",
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
    project_date: "<strong class=\"highlight\">Весна 2025</strong>",
    project_description: "Школьный проект по машинному обучению, предсказывающий качество бананов с помощью логистической регрессии и классификационных моделей.",
    project_pdf_link: "Открыть PDF проект",

    ai4good_title: "AI4Good International Program",
    ai4good_date: "<strong class=\"highlight\">Весна 2025</strong>",
    ai4good_description: "Программа AI4Good 2025 объединила девочек-подростков и женщин-лидеров в девяти странах в рамках восьминедельной онлайн-инициативы, которая дает возможность начинающим лидерам использовать ИИ для позитивного влияния на общество. Изучая опыт лидеров в области технологий и ИИ, участники узнали, как определять проблемы, связанные с целями в области устойчивого развития, находить инновационные решения, разрабатывать планы проектов и проводить презентации.",
    ai4good_certificate: "Сертификат",
    ai4good_presentation: "Презентация",
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
    project_date: "<strong class=\"highlight\">Frühjahr 2025</strong>",
    project_description: "Ein Schulprojekt zum maschinellen Lernen, das die Qualität von Bananen mithilfe logistischer Regression und Klassifikationsmodellen vorhersagt.",
    project_pdf_link: "Projekt-PDF öffnen",

    ai4good_title: "AI4Good International Program",
    ai4good_date: "<strong class=\"highlight\">Frühjahr 2025</strong>",
    ai4good_description: "Das AI4Good International Program 2025 brachte Teenager-Mädchen und weibliche Vorbilder in neun Ländern zu einer achtwöchigen Online-Initiative zusammen. Ziel war es, angehende weibliche Führungskräfte zu befähigen, KI für einen positiven Einfluss auf ihre Gemeinschaft einzusetzen. Durch das Lernen von Führungskräften in den Bereichen Technologie und KI erforschten die Teilnehmerinnen, wie sie Herausforderungen im Zusammenhang mit den SDG-Zielen definieren, innovative Lösungen identifizieren, Projektpläne entwickeln und wirkungsvolle Präsentationen halten können.",
    ai4good_certificate: "Zertifikat",
    ai4good_presentation: "Präsentation",
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage("en");

  const sidebar = document.querySelector('.sidebar');
  const burgerButton = document.getElementById('burger');
  const navLinks = document.querySelectorAll('.sidebar nav a');

  if (burgerButton) {
    burgerButton.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }
    });
  });
});
