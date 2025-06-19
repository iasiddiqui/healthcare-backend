# 🏥 Healthcare Backend API

This is a RESTful backend API for a healthcare application, built with **Node.js**, **Express.js**, **PostgreSQL**, and **Sequelize ORM**. It supports user authentication and CRUD operations for managing patients, doctors, and their mappings.

## 🔧 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JSON Web Tokens (JWT) for Authentication
- dotenv for environment variable management
- bcrypt for password hashing
- CORS for cross-origin requests

## 📁 Project Structure

```
healthcare-backend/
├── controllers/       # Route logic for auth, patient, doctor, and mapping
├── middleware/        # Auth middleware (JWT verify)
├── models/            # Sequelize models and database initialization
├── routes/            # API route definitions
├── .env               # Environment variables
├── app.js             # Main Express app
├── server.js          # Entry point
└── package.json
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/iasiddiqui/healthcare-backend.git
cd healthcare-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
DATABASE_URL=postgres://your_pg_user:your_pg_password@localhost:5432/your_db_name
JWT_SECRET=your_secret_key
```

> Replace `your_pg_user`, `your_pg_password`, and `your_db_name` with your PostgreSQL credentials.

### 4. Run Database Migrations (Optional)

If using Sequelize migrations:

```bash
npx sequelize-cli db:migrate
```

### 5. Start the Server

```bash
npm run dev
```

The server will run at `http://localhost:5000`.

## 🔐 Authentication

- JWT-based authentication
- Routes protected using middleware (`/patients`, `/doctors`, etc.)

## 📮 API Endpoints

### ✅ Auth

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| POST   | /api/auth/register  | Register a new user   |
| POST   | /api/auth/login     | Login and receive JWT |

### 🧑‍⚕️ Doctors

| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| GET    | /api/doctors         | Get all doctors        |
| POST   | /api/doctors         | Create new doctor      |
| PUT    | /api/doctors/:id     | Update doctor by ID    |
| DELETE | /api/doctors/:id     | Delete doctor by ID    |

### 🧑‍🤝‍🧑 Patients

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| GET    | /api/patients         | Get all patients        |
| POST   | /api/patients         | Add new patient         |
| PUT    | /api/patients/:id     | Update patient by ID    |
| DELETE | /api/patients/:id     | Delete patient by ID    |

### 🔗 Doctor-Patient Mapping

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | /api/mappings         | Get all mappings             |
| POST   | /api/mappings         | Assign doctor to patient     |
| DELETE | /api/mappings/:id     | Remove mapping by ID         |

## 🔒 Protected Routes

All routes under `/api/doctors`, `/api/patients`, and `/api/mappings` require a valid JWT token in the header:

```
Authorization: Bearer <your_token>
```

## 🚀 Future Improvements

- Role-based access (admin, doctor, patient)
- Pagination and search filters
- Appointment scheduling system
- Swagger API docs

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Ishan Ahmad Siddiqui**  
[GitHub](https://github.com/iasiddiqui) | [LinkedIn](https://www.linkedin.com/in/ishan-ahmad-siddiqui/)
