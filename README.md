# Urban Wave – Garments Order & Production Tracker System

Live Site(https://assignment-11-159ed.web.app)

## Table of Contents
- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Admin & Manager Credentials](#admin--manager-credentials)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Pages & Functionality](#pages--functionality)
- [Deployment Guidelines](#deployment-guidelines)
- [Additional Notes](#additional-notes)
- [GitHub Repositories](#github-repositories)

---

## Project Overview
**Urban Wave** is a **web-based Garments Order & Production Tracker System** designed for small and medium-sized garment factories. The platform helps manage **orders, production workflow, and inventory**, ensuring timely delivery. It allows tracking of production stages (cutting, sewing, finishing) and provides **role-based dashboards** for Admins, Managers, and Buyers.  

The project highlights **real-time backend integration**, **secure authentication**, **responsive design**, and smooth **Framer Motion animations**.

---

## Live Demo
🌐 [Live Site](https://assignment-11-159ed.web.app)
---

## Key Features
- **User Authentication**
  - Email/password login & registration
  - Google or GitHub login (optional)
  - Role-based access (Admin / Manager / Buyer)
- **Admin Dashboard**
  - Manage users, assign roles, suspend with feedback
  - View all products and toggle visibility on the homepage
  - Track all orders with status updates
- **Manager Dashboard**
  - Add and manage products with images & demo videos
  - Approve/reject orders and track production
- **Buyer Dashboard**
  - View and track personal orders
  - Cancel pending orders
- **Home Page**
  - Hero banner with call-to-action
  - Product cards from MongoDB (limit 6)
  - Customer feedback carousel & "How it works" section
- **Product Details & Booking**
  - Detailed product info with images/video
  - Booking form with validation & payment options
- **Responsive Design**
  - Mobile, tablet, and desktop ready
  - Dark/light theme toggle
- **Smooth Animations**
  - Framer Motion for page transitions
  - Toast / SweetAlert notifications for CRUD actions
- **Security**
  - Environment variables for Firebase & MongoDB credentials
  - Private routes protected with JWT / Firebase tokens in http-only cookies

---

## Technologies Used
- **Frontend:** React.js, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Payment Integration:** Stripe / PayFirst
- **Deployment:** Firebase Hosting / Vercel
- **Others:** React-Hook-Form, Toast/SweetAlert notifications, Cookie-based authentication

---

## Pages & Functionality

### Public Pages
- **Home:** Landing page with hero section, product showcase, feedback, and steps
- **All Products:** Grid display of products from MongoDB
- **Product Details:** Detailed product view with booking option
- **Login / Register:** Email/password authentication with validation

### Admin Dashboard
- **Manage Users:** Approve/suspend users with feedback
- **All Products:** CRUD operations and homepage toggle
- **All Orders:** View, search, filter, and track orders

### Manager Dashboard
- **Add Product:** Upload new products with details, images, and video
- **Manage Products:** Edit or delete products
- **Pending Orders:** Approve/reject orders
- **Approved Orders:** Track production progress
- **My Profile:** View personal info

### Buyer Dashboard
- **My Orders:** View and cancel pending orders
- **Track Order:** Visual timeline of production & shipping
- **My Profile:** View personal information

---

## Deployment Guidelines
- Ensure **server works perfectly** in production (no CORS / 404 / 504 errors)
- Add authorized domains to Firebase (Netlify / Vercel)
- Secure credentials using environment variables
- Private routes should persist login after reload
- Meaningful commits:  
  - Client: ≥20  
  - Server: ≥12

---

## Additional Notes
- Fully **responsive UI**
- Dynamic page titles for all routes
- 404 page for invalid routes
- Optional: Analytics Dashboard, search functionality, reusable components

---

## GitHub Repositories
- **Server:** [https://github.com/Sheikh-Reaz/assignment-11-server](https://github.com/Sheikh-Reaz/assignment-11-server)  
- **Client:** [https://github.com/Sheikh-Reaz/assignment-11](https://github.com/Sheikh-Reaz/assignment-11)

---

### Thank You
**Urban Wave** demonstrates a full **MERN stack web application** with secure authentication, role-based dashboards, responsive UI, and modern frontend design patterns.

