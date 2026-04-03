# Portfolio Content Guide

This guide explains how to add new **Projects** and **Blog Posts** to your portfolio.

## 📂 File to Edit
All content is managed in: `src/components/dom/Overlay.jsx`

---

## 🚀 Adding a New Project
Projects typically require two steps: adding to the *list* and adding *details*.

### 1. Add to Project List
Find the `const projects` array (around line 8). Add a new object:

```javascript
{
    title: "Your Project Title",
    desc: "Short description for the card",
    tech: ["Tech1", "Tech2", "Tech3"], // List of technologies
    status: "ONLINE" // Options: "ONLINE", "PROTOTYPE", "OFFLINE"
},
```

### 2. Add Project Details (Image & Long Description)
Find the `const projectDetails` object (around line 55). Add a matching entry using the **exact same title**:

```javascript
"Your Project Title": {
    longDesc: "A longer, detailed description that appears in the modal.",
    image: yourImportedImageVariable // See "Importing Images" below
},
```

### 3. Importing Images
At the top of the file, import your image:
```javascript
import yourImageName from '../../images/your-image-file.webp'
```
*Note: Make sure your image file is in `src/images/`.*

---

## 📝 Adding a New Blog Post
Find the `const blogPosts` array (around line 29). Add a new object:

```javascript
{
    title: "Title of your article",
    date: "YYYY.MM.DD",
    link: "https://medium.com/your-article-link"
}
```

---

## 🖼️ User Action Required: Favicon
I have updated `index.html` to look for `favicon.png` in your `public` folder.
**Action:** Please save your pixel art brain image as **`favicon.png`** and place it in the **`public/`** folder of your project.
