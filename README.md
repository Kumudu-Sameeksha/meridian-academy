# Meridian Academy 🎓

A modern, responsive, and premium educational academy website designed to provide students with an engaging platform to explore courses, discover expert tutors, and learn in a supportive academic environment.

Built with **Next.js, TypeScript, Tailwind CSS, and Framer Motion**, the website focuses on clean UI/UX, smooth animations, responsive layouts, and an elegant academic visual identity.

---

## ✨ Features

### 🏠 Home Page

* Premium hero section with custom academy imagery
* Introduction to Meridian Academy
* Academy statistics and achievements
* Popular courses section
* Expert tutor showcase
* Personalized learning features
* Student testimonials
* Smooth scroll animations
* Responsive design for desktop, tablet, and mobile

### 📚 Courses

* Browse available courses
* Search courses by name
* Filter courses by subject
* Filter courses by difficulty level
* Course popularity sorting interface
* Animated category filters
* Responsive course cards
* Interactive hover animations

### 👨‍🏫 Tutors

* Dedicated tutor listing page
* Expert tutor profiles
* Tutor subjects and specializations
* Animated tutor cards
* Responsive layout
* Interactive hover effects

### ℹ️ About

* Introduction to Meridian Academy
* Academy values and learning philosophy
* Educational approach
* Responsive and modern layout

### 📩 Contact

* Contact information
* Contact form
* Inquiry options
* Office hours
* Social media links
* Responsive contact layout

---

## 🎨 UI/UX Design

The website follows a premium academic design system focused on simplicity, elegance, and usability.

### Color Palette

| Color                 | Purpose                 |
| --------------------- | ----------------------- |
| `#0F2942`             | Primary dark navy       |
| `#10203D`             | Secondary navy          |
| `#C9A227` / `#B49A6C` | Gold accent             |
| `#FCFBF8`             | Soft background         |
| White                 | Cards and content areas |

### Design Principles

* Minimal and elegant interface
* Clear visual hierarchy
* Consistent spacing
* Premium typography
* Responsive layouts
* Accessible interaction patterns
* Subtle animations instead of excessive motion
* Consistent navy and gold visual identity

---

## 🛠️ Technologies Used

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Framer Motion**

### UI & Icons

* **Lucide React**
* Responsive CSS
* Custom Tailwind utilities

### Development Tools

* **Visual Studio Code**
* **Git**
* **GitHub**
* **npm**

---

## 📁 Project Structure

```text
meridian-academy/
│
├── app/
│   ├── page.tsx
│   ├── courses/
│   │   └── page.tsx
│   ├── tutors/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   └── site.tsx
│
├── lib/
│   └── data.ts
│
├── public/
│   └── images/
│
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Kumudu-Sameeksha/MERIDIAN-Academy-project.git
```

### 2. Navigate to the Project

```bash
cd MERIDIAN-Academy-project
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm start
```

Runs the production build.

### Lint

```bash
npm run lint
```

Checks the project for code-quality and linting issues.

---

## 📱 Responsive Design

The website is designed to work across different screen sizes:

* 🖥️ Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

Tailwind CSS responsive utilities are used to adapt layouts, typography, navigation, cards, and spacing according to the screen size.

---

## 🎬 Animations

Framer Motion is used to create a smooth and engaging user experience.

Animations include:

* Fade-in effects
* Slide-up animations
* Staggered card animations
* Scroll-triggered animations
* Hover elevation
* Image zoom effects
* Animated filter indicators
* Button interactions
* Decorative background animations

The animations are intentionally subtle to maintain a professional educational appearance.

---

## 🔎 Course Filtering

The Courses page provides an interactive filtering experience.

Users can:

1. Search for courses
2. Select a subject category
3. Select a difficulty level
4. Sort courses by popularity

The filter interface uses animated transitions to provide clear visual feedback when selections change.

---

## 👨‍🏫 Tutor Experience

The tutor section highlights experienced educators through visually focused profile cards.

Each tutor card includes:

* Tutor image
* Tutor name
* Subject/specialization
* Animated hover effects
* Premium navy and gold styling
* Responsive card layout

---

## 📷 Custom Images

Custom project images can be stored inside:

```text
public/images/
```

For example:

```text
public/images/hero.jpg
public/images/tutor-1.jpg
public/images/tutor-2.jpg
public/images/tutor-3.jpg
```

Images can then be referenced in the application using:

```text
/images/hero.jpg
```

---

## 🔐 Environment Variables

If environment variables are added in the future, create a local `.env.local` file.

Example:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

Environment files are excluded from Git using `.gitignore`.

**Never commit API keys, passwords, private credentials, or other sensitive information to GitHub.**

---

## 🌐 Deployment

The project can be deployed using platforms that support Next.js applications, such as Vercel.

Typical deployment workflow:

```text
GitHub
   ↓
Connect Repository
   ↓
Build Next.js Application
   ↓
Deploy
   ↓
Live Website
```

---

## 🎯 Project Goals

The main goals of Meridian Academy are to:

* Create a professional educational platform
* Provide an intuitive course discovery experience
* Help students find suitable learning programs
* Showcase experienced tutors
* Provide a responsive and accessible interface
* Demonstrate modern frontend development practices
* Create a visually engaging academic website

---

## 🔮 Future Improvements

Potential future features include:

* Student authentication
* Student dashboard
* Course enrollment
* Online payments
* Tutor booking
* Course progress tracking
* Student reviews and ratings
* Online learning materials
* Quizzes and assessments
* Admin dashboard
* Backend API integration
* Database integration
* Email notifications

---

## 👩‍💻 Developer

**Kumudumini Sameeksha**

BSc (Hons) Software Engineering Student

Interested in:

* Frontend Development
* Software Engineering
* UI/UX Design
* React Development
* Full-Stack Development

---

## 📄 License

This project was created for educational and portfolio purposes.

© 2026 Meridian Academy. All rights reserved.

Live Demo: meridian-academy-rkpo.vercel.app
