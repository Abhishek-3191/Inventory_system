# Inventory & Order Management System

A production-ready full-stack Inventory & Order Management System built using React, FastAPI, PostgreSQL, Docker, and Docker Compose.

---
# Links
# Frontend:-https://inventory-system-qy65-24qv799kd-abhishek-3191s-projects.vercel.app/
# Backend:- https://inventory-system-e038.onrender.com

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* ShadCN UI
* Axios

## Backend

* Python
* FastAPI
* SQLAlchemy

## Database

* PostgreSQL

## DevOps & Deployment

* Docker
* Docker Compose
* Render
* Vercel
* Docker Hub

---

# Features

## Product Management

* Add product
* View products
* Update product
* Delete product
* Unique SKU validation
* Inventory tracking

## Customer Management

* Add customer
* View customers
* Delete customer
* Unique email validation

## Order Management

* Create order
* View all orders
* View order details
* Delete order
* Automatic stock reduction
* Automatic total calculation

## Dashboard

* Total products
* Total customers
* Total orders
* Low stock products

---

# Business Logic Implemented

* Product SKU must be unique
* Customer email must be unique
* Product quantity cannot be negative
* Orders cannot be placed if stock is insufficient
* Creating orders automatically reduces stock
* Total order amount calculated by backend
* Proper validation and error handling
* Proper HTTP status codes

---

# Project Structure

```bash
Inventory_system/
│
├── backend/
│   ├── app/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── runtime.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   └── vite.config.js
│
├── docker-compose.yml
└── README.md
```

---

# Backend Deployment

Deployed on Render:

Backend API URL:
YOUR_BACKEND_URL

Swagger Docs:
YOUR_BACKEND_URL/docs

---

# Frontend Deployment

Deployed on Vercel:

Frontend URL:
YOUR_FRONTEND_URL

---

# Docker Hub Image

Backend Docker Image:

https://hub.docker.com/r/abhi3191/inventory-backend

---

# Environment Variables

## Backend

Create `.env` inside backend folder:

```env
DATABASE_URL=your_postgresql_database_url
```

## Frontend

Create `.env` inside frontend folder:

```env
VITE_API_URL=your_backend_url
```

---

# Running Locally

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Running with Docker Compose

```bash
docker compose up --build
```

---

# API Endpoints

## Products

| Method | Endpoint       |
| ------ | -------------- |
| POST   | /products      |
| GET    | /products      |
| GET    | /products/{id} |
| PUT    | /products/{id} |
| DELETE | /products/{id} |

---

## Customers

| Method | Endpoint        |
| ------ | --------------- |
| POST   | /customers      |
| GET    | /customers      |
| GET    | /customers/{id} |
| DELETE | /customers/{id} |

---

## Orders

| Method | Endpoint     |
| ------ | ------------ |
| POST   | /orders      |
| GET    | /orders      |
| GET    | /orders/{id} |
| DELETE | /orders/{id} |

---

# Docker Commands

## Build Backend Image

```bash
docker build -t abhi3191/inventory-backend .
```

## Push Backend Image

```bash
docker push abhi3191/inventory-backend
```

---

# Author

Abhishek Srivastava
