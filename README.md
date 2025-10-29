# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-) on Frontend Mentor.  
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

---

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size  
- See hover and focus states for interactive elements  

---

## Links

- **Solution URL:** [Click here](https://github.com/Harmajabb/3-column-card.git)
- **Live Site URL:** [Click here](https://3-column-card-pink.vercel.app/)

---

## My process

### Built with

- **React + TypeScript (Vite)** – component-based architecture  
- **Semantic HTML5 markup** – clean and accessible  
- **CSS Grid** – for the responsive 3-column layout  
- **CSS custom properties** – color tokens (HSL values)  
- **Mobile-first workflow**  
- **Google Fonts** – *Big Shoulders Display* & *Lexend Deca*  

---

### What I learned

Before starting this project, I already had a foundation in **React** thanks to my training at the **Wild Code School**.  
However, my goal here was to **strengthen the front-end fundamentals** — CSS Grid, variables, responsive design, and component organization in React.

This project helped me to:

**Structure a React app cleanly**  
I created a clear folder structure:  

``src/``
``├── components/``
``│ ├── CategoryCard.tsx``
``│ └── CardIcon.tsx``
``├── data/``
``│ └── categoriesData.ts``
``├── assets/``
``└── App.tsx``

This makes the code modular, reusable, and scalable.

**Render dynamic UI from data**  
``tsx``
``{categoriesData.map((c) => (``
``  <CategoryCard key={c.id} {...c} iconSrc={iconById[c.id]} />``
``))}``

Here, .map() loops through the data and creates a card for each object.
The key prop ensures that React can efficiently track and update each element.

**Use TypeScript for type safety**

``export type Category = {``
``  id: string;``
``  bg: string;``
``  title: string;``
``  text: string;``
``  buttonLabel: string;``
``};``

By typing the data, I prevent common errors and make my code self-documented.

**Separate logic and style**

Instead of inline styles like:

``<article style={{ backgroundColor: 'orange' }}>...</article>``

I prefered:

``<article className="card card--sedans">...</article>``

with all the styling handled in a dedicated CSS file for readability, accessibility, and scalability.

**Accessibility and responsive**

- ``alt`` text for images
- ``type="button"`` for buttons (prevents default “submit” behavior)
- Focus-visible and hover effects for keyboard navigation
- Media queries for mobile-first design

## Continued Development:

Next, I want to keep improving:

- My **state management** logic in React (useState, useEffect)
- Building small **interactive components** (ex: rating systems, modals, toggles)
- Writing **accessible components** by default
- Exploring **CSS methodologies** (BEM, utility-first, etc.)

My next step will be the Product preview card component challenge, where I'll add interactivity and data handling logic.

## Useful Ressources 

Each resource below helped me solve a specific problem or improve a concept during this project.

- [React – Components & Props](https://react.dev/learn/passing-props-to-a-component), it will help to understand how to pass the structure data between parent and child component
- [React – Rendering Lists](https://react.dev/learn/rendering-lists), how to use ``.map()`` in react, it will help you to go through data arrays.
- [TypeScript React Cheatsheets](https://react-typescript-cheatsheet.netlify.app/), how to use typescript in a React Project, I loved that part!
- [MDN – `<img>` alt attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img), very important for accessibility through img.  
- [W3C – Focus Visible (WCAG)](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html), helped me implement clear keyboard focus styles for accessibility,

## Author

- Lea Francois – Web development student at Wild Code School, currently learning fullstack development.
