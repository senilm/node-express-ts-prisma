# 🚀 Express + Prisma + TypeScript Starter

A minimal and extensible starter template for building backend services using:

- Express (v5)
- TypeScript
- Prisma ORM
- Winston logger
- dotenv-flow for environment configuration
- Helmet & CORS for security
- Nodemon for development

---

## 📆 Tech Stack

| Tool         | Description                          |
|--------------|--------------------------------------|
| Express      | Backend server                       |
| TypeScript   | Strongly typed JavaScript            |
| Prisma       | Next-gen Node.js ORM                 |
| dotenv-flow  | Multi-env configuration (.env files) |
| Winston      | Advanced logging                     |
| Helmet       | HTTP header security                 |
| CORS         | Cross-origin requests handler        |
| Nodemon      | Auto-restarts server in dev          |

---

## ⚙️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/express-prisma-ts
cd express-prisma-ts
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Create environment files using `.env`, `.env.development`, `.env.production`, etc.

```env
PORT=3000
DATABASE_URL="your_database_url"
LOG_LEVEL=debug
```

> dotenv-flow will automatically pick the correct `.env` based on the environment.

### 4. Initialize Prisma

```bash
npx prisma init
```

Then define your schema in `prisma/schema.prisma` and run:

```bash
npm run prisma:migrate
```

---

## 🔪 Available Scripts

| Script             | Description                              |
|--------------------|------------------------------------------|
| `npm run dev`      | Starts dev server with `nodemon`         |
| `npm run build`    | Compiles TypeScript to `dist/`           |
| `npm start`        | Starts production server (from `dist/`)  |
| `npm run prisma:migrate` | Runs dev migration                |
| `npm run prisma:deploy`  | Deploys production-ready migration |
| `npm run prisma:generate`| Regenerates Prisma client          |

---

## 💂 Folder Structure

```bash
.
├── prisma/                # Prisma schema and migrations
├── src/
│   ├── routes/            # Express routes
│   ├── middleware/        # Custom middlewares
│   ├── lib/logger.ts      # Winston logger setup
│   └── index.ts           # Entry point
├── dist/                  # Compiled output (ignored)
├── .env*                  # Environment files
├── tsconfig.json          # TypeScript config
└── package.json
```

---

## 🧠 Author

Made with ❤️ by **Senil Mendapara**

---

## 🛠️ License

[ISC](LICENSE)

