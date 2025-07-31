body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #ffffff;
  color: #333;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* --- Стили для мобильных устройств (по умолчанию) --- */

.sidebar {
  position: fixed;
  top: 0;
  right: -250px;
  width: 250px;
  height: 100vh;
  background-color: #f5f0fa;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -2px 0 8px rgba(0,0,0,0.15);
  transition: right 0.3s ease-in-out;
  z-index: 1000;
}

.sidebar.active {
  right: 0;
}

.sidebar h1 {
  color: #caa0ff;
  font-size: 1.8em;
  margin-bottom: 1em;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-bottom: 2em;
}

.sidebar nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.sidebar nav a:hover {
  color: #caa0ff;
}

.lang-switcher ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}

.lang-switcher ul li {
  margin-bottom: 0.8em;
}

.lang-switcher button {
  background-color: #ffffff;
  border: 2px solid #caa0ff;
  border-radius: 20px;
  padding: 6px 12px;
  font-size: 1em;
  cursor: pointer;
  width: 100%;
  transition: background 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.lang-switcher button:hover {
  background-color: #caa0ff33;
  transform: scale(1.05);
}

.sidebar-footer {
  margin-top: auto;
  padding: 1em 0 0 0;
  width: 100%;
  border-top: 1px solid #d6c9f8;
  text-align: center;
}

.email-link {
  color: #7a56ff;
  font-weight: 600;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s;
}

.email-link:hover {
  color: #4e2ac1;
  text-decoration: underline;
}

main {
  padding: 3em 2em;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
}

section {
  margin-bottom: 3em;
}

h2 {
  color: #caa0ff;
  font-size: 1.5em;
}

.about-content {
  display: flex;
  align-items: flex-start;
  gap: 2em;
  flex-wrap: wrap;
}

.profile-pic {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border: 3px solid #caa0ff;
}

.info-list p {
  margin: 0.4em 0;
  font-size: 1.05em;
}

.info-list a {
  color: #a178ff;
  text-decoration: none;
  transition: color 0.3s;
}

.info-list a:hover {
  color: #6b3ecf;
  text-decoration: underline;
}

.languages-list {
  list-style: disc inside;
  margin: 0.3em 0 0 1.2em;
  padding: 0;
}

.languages-list li {
  margin-bottom: 0.2em;
  font-size: 1.05em;
}

.project {
  background-color: #f3eaff;
  border: 2px solid #caa0ff;
  border-radius: 12px;
  padding: 1.5em 1.8em;
  margin-bottom: 2em;
  box-shadow: 0 4px 8px rgba(202, 160, 255, 0.2);
}

.project-title {
  color: #9b6cff;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  font-size: 1.2em;
}

.project-description {
  font-size: 1.05em;
  margin-bottom: 1em;
  color: #4a317d;
}

.project-pdf-link {
  color: #7a56ff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.project-pdf-link:hover {
  color: #4e2ac1;
  text-decoration: underline;
}

.highlight {
  color: #a178ff;
}

.toggle-sidebar {
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #caa0ff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.5em;
  line-height: 1;
  box-shadow: 0 2px 8px rgba(202, 160, 255, 0.4);
  z-index: 1001;
  transition: background-color 0.3s ease;
}

.toggle-sidebar:hover {
  background-color: #b388ff;
}


/* --- Стили для десктопов (медиа-запрос) --- */
@media (min-width: 769px) {
  body {
    display: flex;
  }

  .toggle-sidebar {
    display: none;
  }

  .sidebar {
    position: fixed;
    right: 0;
    left: auto;
    width: 220px;
    height: 100vh;
    background-color: #f5f0fa;
    box-shadow: -2px 0 8px rgba(0,0,0,0.05);
    transition: none;
    z-index: auto;
  }

  .sidebar.active {
    right: 0;
  }

  main {
    margin-left: 0;
    margin-right: 240px;
    flex-grow: 1;
    max-width: 800px;
    box-sizing: border-box;
  }
}
