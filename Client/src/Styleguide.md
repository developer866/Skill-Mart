Got it 👍
Let’s build a **comprehensive style guide** for your website based on the **Bejamas-style palette** you shared. This guide will cover **colors, typography, spacing, breakpoints, buttons, inputs, and layout rules**.

---

# 🎨 Skill-Mart Style Guide

## 1. Colors

| Role                        | HEX Code  | Tailwind Class  |
| --------------------------- | --------- | --------------- |
| **Primary Background**      | `#F7F7F7` | `bg-[#F7F7F7]`  |
| **Text (Default)**          | `#000000` | `text-black`    |
| **Accent (CTA Buttons)**    | `#C9FF4D` | `bg-[#C9FF4D]`  |
| **Card / Input Background** | `#FFFFFF` | `bg-white`      |
| **Muted Text / Secondary**  | `#6B7280` | `text-gray-500` |

💡 **Usage Rules**:

* Accent (`#C9FF4D`) should only be used for **buttons, highlights, or links you want to stand out**.
* Background stays clean and neutral with `#F7F7F7`.
* Keep text black for high readability.

---

## 2. Typography

### Font Stack

Use **sans-serif (e.g., Inter, Poppins, or Helvetica Neue)** for a modern and clean look.

### Sizes & Roles

| Element                  | Font Size              | Weight           | Color                                          |
| ------------------------ | ---------------------- | ---------------- | ---------------------------------------------- |
| **Logo**                 | `text-xl md:text-2xl`  | `font-bold`      | Black                                          |
| **Hero Heading (H1)**    | `text-5xl md:text-6xl` | `font-extrabold` | Black                                          |
| **Section Heading (H2)** | `text-3xl md:text-4xl` | `font-bold`      | Black                                          |
| **Subheading (H3)**      | `text-2xl`             | `font-semibold`  | Black                                          |
| **Body Text**            | `text-base md:text-lg` | `font-normal`    | Black (70% opacity allowed for secondary text) |
| **Captions / Labels**    | `text-sm`              | `font-medium`    | Gray `#6B7280`                                 |

---

## 3. Layout & Spacing

* **Container Width**: `max-w-7xl mx-auto px-6 md:px-12`
* **Section Padding**: `py-16 md:py-24`
* **Vertical Rhythm**: Maintain `1.5rem (24px)` spacing between elements.
* **Grid System**:

  * Mobile: `grid-cols-1`
  * Tablet: `grid-cols-2`
  * Desktop: `grid-cols-3 or 4` depending on content

---

## 4. Breakpoints (Responsive)

| Device            | Width        | Tailwind Prefix |
| ----------------- | ------------ | --------------- |
| **Mobile**        | `0–640px`    | (default)       |
| **Tablet**        | `641–768px`  | `sm:` / `md:`   |
| **Desktop**       | `769–1024px` | `lg:`           |
| **Large Desktop** | `1025px+`    | `xl:` / `2xl:`  |

---

## 5. Components

### 🔹 Buttons

```jsx
<button className="bg-[#C9FF4D] text-black px-6 py-3 rounded-full font-semibold hover:opacity-80 transition">
  Call to Action
</button>
```

* **Primary Button** → Neon Green background, black text
* **Secondary Button** → Transparent background, black border `border border-black`

---

### 🔹 Input Fields

```jsx
<input
  type="text"
  placeholder="Your email"
  className="w-full px-4 py-3 rounded-full border border-gray-300 bg-white focus:ring-2 focus:ring-[#C9FF4D] outline-none"
/>
```

* Rounded, soft edges (`rounded-full`).
* White background for clarity.
* Highlight with `focus:ring-[#C9FF4D]`.

---

### 🔹 Navigation Bar

```jsx
<nav className="flex justify-between items-center py-4 px-8 bg-[#F7F7F7]">
  <h1 className="text-xl font-bold">SkillMart</h1>
  <ul className="flex space-x-6 text-black font-medium">
    <li className="hover:underline cursor-pointer">Work</li>
    <li className="hover:underline cursor-pointer">Services</li>
    <li className="hover:underline cursor-pointer">About</li>
    <li className="hover:underline cursor-pointer">Learn</li>
  </ul>
  <button className="bg-[#C9FF4D] text-black px-4 py-2 rounded-full font-semibold">
    Start project
  </button>
</nav>
```

---

### 🔹 Cards

```jsx
<div className="bg-white shadow p-6 rounded-lg hover:shadow-lg transition">
  <h3 className="text-xl font-bold mb-2">Professional Service</h3>
  <p className="text-gray-600">Connect with experts and artisans near you.</p>
  <button className="mt-4 bg-[#C9FF4D] px-4 py-2 rounded-full font-medium">
    Learn More
  </button>
</div>
```

---

### 🔹 Footer

```jsx
<footer className="bg-[#F7F7F7] text-center py-8 text-gray-600 text-sm">
  © 2025 SkillMart. All rights reserved.
</footer>
```

---

✅ This guide ensures **consistency across your site** while staying true to the minimalist **Bejamas-style look**.

Do you want me to also create a **Figma-style design sheet mockup** (color swatches + typography + button examples), so you can visually apply this quickly?
