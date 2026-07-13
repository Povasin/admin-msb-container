# MSB Container Admin Panel 🔐

![Status: Production](https://img.shields.io/badge/Status-Live-brightgreen.svg?style=for-the-badge)
![React](https://img.shields.io/badge/Frontend-React-61DAFB.svg?style=for-the-badge&logo=react)
![Redux](https://img.shields.io/badge/State-Redux_Toolkit-764ABC.svg?style=for-the-badge&logo=redux)
![Node.js](https://img.shields.io/badge/Backend_API-Node.js-339933.svg?style=for-the-badge&logo=node.js)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1.svg?style=for-the-badge&logo=mysql)

## 📌 About
**MSB Container Admin Panel** — это закрытая административная часть экосистемы MSB Container. Панель предназначена для управления бизнес-процессами платформы: работа с товарами (CRUD), мониторинг заказов и управление клиентской базой.

## ⚙️ Техническая глубина
- **Security-First Design:** Разделение уровней доступа для администраторов.
- **State Management:** Эффективная работа с потоками данных через Redux Toolkit для обеспечения мгновенного отклика интерфейса при редактировании заказов.
- **API Integration:** Прямая интеграция с Node.js бэкендом для обновления данных в реальном времени.

## 🛠 Стек технологий
- **Frontend:** React, Redux Toolkit, SCSS/SASS
- **Архитектура:** SPA (Single Page Application)

## 🚀 Основные модули
- **Dashboard:** Общая сводка по заказам и активности пользователей.
- **Order Management:** Обработка входящих заказов, изменение статусов (в работе, отправлен, доставлен).
- **Catalog Management:** Полный CRUD товаров: добавление, удаление и редактирование характеристик продукции.
- **Client Management:** Просмотр профилей пользователей и управление их доступом.

---

## 💡 Преимущества архитектуры
Выделение админ-панели в отдельный репозиторий позволяет:
1. **Безопасность:** Изолировать логику администрирования от публичного кода сайта.
2. **Масштабируемость:** Независимо развивать интерфейс управления без влияния на основной сайт.
3. **Безопасность данных:** Реализовать отдельный контур авторизации (JWT-based).
