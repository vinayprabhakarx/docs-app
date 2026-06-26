# Vinay Prabhakar / Docs

A comprehensive documentation hub, project repository, and public technical portfolio built using [Fumadocs](https://fumadocs.dev/) and Next.js. This repository serves as a centralized source of truth to store technical notes, track learning progress, and publish technical guides.

## Features

- **Built with Next.js & Fumadocs:** Extremely fast, static-site generated documentation.
- **MDX Support:** Write content in standard Markdown with the extended power of React components.
- **Full-Text Search:** Built-in fast search functionality across all documentation out-of-the-box.
- **Scroll to Top:** A beautifully integrated smooth-scrolling button for navigating long pages.
- **Git Timestamps:** Automatically displays the "Last Updated" date on every page based on Git commit history.
- **Dark Mode Support:** Fully responsive light and dark mode automatically synced with system preferences.
- **Responsive Navigation:** Optimized sidebar and mobile navigation.

## Getting Started

To run this project locally and start writing your own documentation:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the site:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## How to Write Documentation

This platform uses Fumadocs, which automatically generates routing and sidebars based on your file and folder structure.

### 1. Where to Write
All of your documentation files must be placed inside the `content/docs` directory. 
- You can create standard Markdown (`.md`) or MDX (`.mdx`) files.
- You can create subfolders inside `content/docs` to cleanly group related pages together (e.g., `content/docs/my-topic`).

### 2. Using Images
All images and static assets should be placed inside the root `public` directory (e.g., `public/images/`).
- **Example:** If you place an image at `public/images/diagram.png`
- **Markdown Usage:** You can embed it in your markdown file by starting the path with a forward slash `/` (which represents the `public` folder):
  ```markdown
  ![My Diagram](/images/diagram.png)
  ```

### 3. File Metadata (Frontmatter)
At the very top of each `.md` or `.mdx` file, you should include YAML frontmatter. This metadata defines the page's title and description, which tells the documentation engine exactly what to display in the navigation sidebar, headers, and search results.

```markdown
---
title: My First Document
description: This is a brief summary of what this document is about.
---

# My First Document
Your markdown content starts here...
```

### 4. Folder Metadata (`meta.json`)
By default, Fumadocs sorts folders alphabetically. If you want to customize the display name of a folder in the sidebar or strictly control the exact order of the pages inside it, simply create a `meta.json` file inside that specific folder.

**Example `content/docs/my-topic/meta.json`:**
```json
{
  "title": "My Custom Topic Name",
  "pages": [
    "first-page-filename",
    "second-page-filename"
  ]
}
```
*Note: Do not include the `.md` extension in the `pages` array.*

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
