export const resumeData = {
  personal: {
    name: "Степан Кондратов",
    nameEn: "Stepan Kondratov",
    title: "Fullstack/Golang Developer",
    location: "Москва, Россия",
    phone: "+7 (910) 4087398",
    email: "rebzinka@gmail.com",
    telegram: "@StephenMarkman",
    age: 20,
    birthDate: "17 июля 2005",
    salary: "120 000 ₽",
    avatar: "me.jpeg"
  },

  about: {
    ru: "Инженер с 2+ годами опыта разработки, специализирующийся на создании высоконагруженных backend-систем на Go. Работаю с современными технологиями: микросервисы, RESTful API, PostgreSQL, Redis, Docker. При проектировании использую принципы \"чистой архитектуры\".",
    goals: "Найти команду, где ценят не только технические навыки, но и аналитическое мышление. Где можно влиять на архитектуру и видеть результат своего труда в продукте.",
    hobbies: ["Мотокросс", "Шахматы", "Воркаут", "Настольный теннис"]
  },

  experience: [
    {
      id: 1,
      company: "Центр эндокринологии и биобанкирования",
      position: "Fullstack-разработчик",
      location: "Москва",
      period: "Июнь 2024 - Июнь 2025",
      duration: "1 год 1 месяц",
      website: "www.endocrincentr.ru",
      description: [
        "Разработал full-stack приложение с использованием Go для бэкенда и React для фронтенда",
        "Реализовал REST API на Go, интегрировав его с фронтендом через асинхронные запросы (Axios)",
        "Оптимизировал работу базы данных PostgreSQL, улучшив скорость выполнения сложных запросов на 25%",
        "Автоматизировал процессы сборки и деплоя с использованием Docker, GitHub Actions",
        "Провёл рефакторинг legacy-кода, улучшив читаемость и поддерживаемость кодовой базы"
      ],
      stack: ["React", "Go", "PostgreSQL", "Docker", "Git"]
    },
    {
      id: 2,
      company: "ГКУ Москворечье",
      position: "Backend Developer",
      location: "Москва",
      period: "Май 2023 - Апрель 2024",
      duration: "1 год",
      website: "mskr.mos.ru",
      description: [
        "Разработал сервис на Go для сбора аналитических данных",
        "Оптимизировал SQL-запросы к PostgreSQL, сократив время выполнения на 15-30%",
        "Участвовал в планировании спринтов и код-ревью по методологии Agile"
      ],
      stack: ["Go", "PostgreSQL", "Docker", "Git"]
    }
  ],

  education: [
    {
      id: 1,
      institution: "МГТУ им. Н.Э. Баумана",
      degree: "Высшее образование",
      field: "Информатика и системы управления",
      year: "2026",
      location: "Москва"
    },
    {
      id: 2,
      institution: "Цифровая Кафедра МГТУ им. Н. Э. Баумана",
      degree: "Курс повышения квалификации",
      field: "ML-разработчик",
      year: "2025"
    },
    {
      id: 3,
      institution: "VK & МГТУ им. Н. Э. Баумана",
      degree: "Программа по веб-разработке",
      field: "Веб-разработка",
      year: "2024",
      note: "Лид команды из 4 человек"
    }
  ],

  skills: {
    languages: ["Go", "JavaScript", "Python", "C++", "C", "Bash"],
    backend: ["Golang", "Echo", "GIN", "gRPC", "REST API", "Node.js"],
    frontend: ["React", "HTML", "CSS"],
    databases: ["PostgreSQL", "Redis", "SQL"],
    tools: ["Docker", "Git", "Nginx", "Linux", "S3"],
    methodologies: ["Clean Architecture", "SOLID", "Agile", "Scrum"],
    other: ["HTTP", "JSON"]
  },

  languages: [
    { name: "Русский", level: "Родной", proficiency: 100 },
    { name: "English", level: "C2 - В совершенстве", proficiency: 95 }
  ],

  certifications: [
    {
      name: "IELTS",
      issuer: "Международный экзамен",
      year: "2020",
      subject: "Английский язык"
    }
  ],

  social: {
    telegram: "https://t.me/StephenMarkman",
    email: "mailto:rebzinka@gmail.com",
    phone: "tel:+79104087398"
  }
};
