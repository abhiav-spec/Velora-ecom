# Sweet project 👌 Velora — A Premium E-commerce Platform

A high-performance, React-based e-commerce UI that delivers a seamless shopping experience with beautifully structured components and real-time state management.

This project demonstrates expertise in **React Context API**, **Dynamic Routing**, and **Responsive UI Design** using modern web standards.

---

## 🛍️ Velora - Premium E-commerce
Velora is more than just a shop; it's a sleek, modern interface designed for speed and clarity. It handles everything from product discovery to advanced cart management.

### 🚀 Features
- **Dynamic Product Rendering**: Displays products elegantly using reusable card components.
- **Advanced Filtering**: Categorize and filter products by price, type, and more.
- **Real-time Cart**: Fully functional cart system powered by Context API.
- **Smooth Animations**: Integrated with Lottie and Slick Carousel for a premium feel.
- **Responsive & Quick**: Built with Vite for lightning-fast HMR and optimized performance.
- **SEO Optimized**: Pre-configured meta tags and clean semantic HTML.

---

## 🌐 Data Sources & APIs
Velora aggregates data from reliable public APIs to provide a rich shopping experience:
- **Product Data**: Sourced from [Fake Store API](https://fakestoreapi.com). We use a custom **Vite Proxy** system to handle these requests securely and bypass CORS limitations.
- **Location Services**: Real-time user location detection using the **Geolocation API** and reverse geocoding via [OpenStreetMap (Nominatim)](https://nominatim.openstreetmap.org).
- **Authentication**: User profiles and secure access managed by **Clerk**.

---

## 🛠️ Tech Stack
- ⚛️ **React 19** - The core library
- ⚡ **Vite** - High-speed build tool
- 🎨 **Tailwind CSS / CSS4** - Modern styling & design tokens
- 🧭 **React Router Dom 7** - Seamless navigation
- 🔑 **Clerk** - Secure authentication integration
- 📦 **Context API** - Efficient global state management

---

## 📂 Project Structure

```text
📦 src
 ┣ 📂 assets          # Images, logos, and animations
 ┣ 📂 components      # Reusable UI components
 ┃ ┣ 📜 Navbar.jsx
 ┃ ┣ 📜 ProductCard.jsx
 ┃ ┗ 📜 Carousel.jsx
 ┣ 📂 context         # Global state (Cart, Theme)
 ┃ ┣ 📜 CartContext.jsx
 ┃ ┗ 📜 ThemeContext.jsx
 ┣ 📂 pages           # Main application views
 ┃ ┣ 📜 Home.jsx
 ┃ ┣ 📜 Products.jsx
 ┃ ┗ 📜 Cart.jsx
 ┣ 📜 App.jsx         # Routes & Main Logic
 ┗ 📜 main.jsx        # Entry Point
```

---

## 🧠 Core Concepts & Architecture
This project implements several advanced React patterns and architectural decisions:

### 📡 Vite Proxy Server
To ensure smooth communication with external APIs without CORS errors, we've implemented a **Proxy Server** within the `vite.config.js`. This allows the frontend to make requests to `/api/products` which are then internally routed to the actual data provider.

### 🏗️ Context API (Global State)
Instead of complex external libraries, Velora leverages the native **React Context API** for high-performance state management across three main domains:
- `CartContext`: Manages additions, removals, and quantity updates for the shopping bag.
- `DataContext`: Handles the global fetching and filtering of product catalogs.
- `ThemeContext`: Controls the visual aesthetics (Dark/Light mode) across the entire application.

### 🔐 Protected Routing
The checkout and cart experience is secured using **Higher-Order Components (HOC)** and Clerk, ensuring that sensitive user delivery info is only accessible to authenticated users.

---

## 🧠 How It Works
Velora uses a centralized data flow. All product data and cart states are managed via **React Context**, allowing any component to access shared state without "prop-drilling."

```javascript
// Example of dynamic rendering in Products.jsx
{filteredProducts.map((product) => (
  <ProductCard 
    key={product.id} 
    item={product} 
    showPrice={true}
  />
))}
```
This allows the UI to stay perfectly in sync, whether you're adding items to the cart from the Home page or the Single Product view.

---

## ▶️ Getting Started

1️⃣ **Clone the repository**
```bash
git clone https://github.com/abhiav-spec/Velora.git
```

2️⃣ **Go to project folder**
```bash
cd Velora
```

3️⃣ **Install dependencies**
```bash
npm install
```

4️⃣ **Start development server**
```bash
npm run dev
```

---

## � Preview
**The Velora Experience includes:**
- 🏢 **Professional Branding**
- 🛒 **Interactive Shopping Cart**
- 📱 **Mobile-First Responsive Layout**
- 🌓 **Integrated Theme Support**
- 💰 **Dynamic Price Updates**

---

## 🎯 Learning Goals
This project showcases mastery in:
- **Global State Management** with Context API
- **Dynamic Route Handling** for single product pages
- **Advanced List Rendering** with complex data objects
- **SEO & Performance Optimization** techniques

---

## 👨‍💻 Author
**Abhinav Kumar**
*A passionate developer building the future of web experiences.*
