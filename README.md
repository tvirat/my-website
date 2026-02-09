# Website Building Workshop - Starter Project

## Project Overview

This is a beginner-friendly starter project for learning web development. You will build a simple website using HTML, CSS, and JavaScript - the three core technologies that power every website on the internet.

By the end of this workshop, you will have:

- Created a personal webpage
- Learned the basics of HTML, CSS, and JavaScript
- Published your website online using GitHub Pages

## What Are HTML, CSS, and JavaScript?

### HTML (HyperText Markup Language)

HTML is the structure and content of your webpage. Think of it as the skeleton of a building. HTML defines what text appears, where images go, and how content is organized using tags like `<h1>` for headings, `<p>` for paragraphs, and `<div>` for containers.

### CSS (Cascading Style Sheets)

CSS controls how your webpage looks. Think of it as the paint and decorations on a building. CSS changes colors, fonts, spacing, and layout. You can make text blue, add borders, center content, and create beautiful designs.

### JavaScript

JavaScript makes your webpage interactive. Think of it as the electrical system that makes lights turn on when you flip a switch. JavaScript responds to user actions like button clicks, changes content dynamically, and can fetch data from the internet.

## File Structure

```
website-workshop-starter/
│
├── index.html          # Main HTML file - the structure of your webpage
├── css/
│   └── style.css       # CSS file - styles and appearance
├── js/
│   └── script.js       # JavaScript file - interactivity and behavior
├── assets/             # Folder for images and other media files
│                       # (currently empty - add your images here)
└── README.md           # This file - project documentation
```

### File Descriptions

- **index.html**: This is the main file that browsers read. It contains all your content (text, headings, images) and links to your CSS and JavaScript files. Open this file in a browser to see your website.

- **css/style.css**: This file contains all your styling rules. It controls colors, fonts, spacing, and layout. The HTML file links to this CSS file so the styles are applied to your page.

- **js/script.js**: This file contains JavaScript code that makes your page interactive. It can respond to button clicks, change content, and perform calculations. The HTML file loads this script to add behavior to your page.

- **assets/**: This folder is for storing images, videos, or other media files you want to use on your website. To add an image, save it in this folder and reference it in your HTML using the path `assets/your-image.jpg`.

## How to Run Your Website Locally

### Option A: Double-Click Method (Simplest)

1. Navigate to your project folder on your computer
2. Find the `index.html` file
3. Double-click `index.html`
4. Your default web browser will open and display your website

**Note**: This method works, but if you make changes to your files, you'll need to refresh the browser manually. Also, some advanced features may not work perfectly with this method.

### Option B: Using VS Code Live Server (Recommended)

VS Code Live Server automatically refreshes your browser when you save changes, making it easier to see your edits in real-time.

1. **Install VS Code** (if you haven't already):

   - Download from: https://code.visualstudio.com/
   - Install it on your computer

2. **Install the Live Server Extension**:

   - Open VS Code
   - Click the Extensions icon in the left sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Search for "Live Server" by Ritwick Dey
   - Click "Install"

3. **Open Your Project**:

   - In VS Code, go to File -> Open Folder
   - Select your project folder (`website-workshop-starter`)

4. **Start Live Server**:

   - Right-click on `index.html` in the file explorer
   - Select "Open with Live Server"
   - Your browser will open automatically
   - The URL will be something like `http://127.0.0.1:5500/index.html`

5. **Make Changes**:
   - Edit your HTML, CSS, or JavaScript files
   - Save the file (`Ctrl+S` / `Cmd+S`)
   - Your browser will automatically refresh to show your changes

## Workshop Tasks Checklist

Follow the TODO comments in each file to complete these tasks:

### HTML Tasks (in index.html)

- [ ] Change the page title in the `<title>` tag
- [ ] Add a heading (`<h1>`) in the header section
- [ ] Add a paragraph (`<p>`) about yourself in the main section
- [ ] Create a list (`<ul>` or `<ol>`) of your favorite things
- [ ] Add a button with an `id` attribute
- [ ] Add an image placeholder (or actual image)
- [ ] Create a new section with an `id` attribute

### CSS Tasks (in css/style.css)

- [ ] Change the font-family
- [ ] Change the background-color
- [ ] Style the header section
- [ ] Center the main content container
- [ ] Style your button
- [ ] Add hover effects to your button
- [ ] Create a "card" class for styling sections
- [ ] Style the footer section

### JavaScript Tasks (in js/script.js)

- [ ] Use `document.querySelector()` to select an element
- [ ] Change text content using `.textContent`
- [ ] Add a click event listener to your button
- [ ] Create a click counter that updates on each click

## Git Basics

Git is a version control system that tracks changes to your files. GitHub is a website that hosts your Git repositories online. Learning Git basics will help you save your work and publish your website.

### Creating a GitHub Repository

1. Go to https://github.com and sign in (or create an account)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., "my-first-website")
5. Choose "Public" (required for free GitHub Pages hosting)
6. Do NOT check "Initialize this repository with a README" (you already have files)
7. Click "Create repository"

### Connecting Your Local Folder to GitHub

After creating the repository on GitHub, you'll see instructions. Follow these steps in your terminal or command prompt:

1. **Open Terminal/Command Prompt**:

   - On Mac: Open Terminal from Applications
   - On Windows: Open Command Prompt or PowerShell
   - On Linux: Open Terminal

2. **Navigate to your project folder**:

   ```bash
   cd /path/to/your/website-workshop-starter
   ```

   Replace `/path/to/your/` with the actual path to your folder.

3. **Initialize Git** (if not already done):

   ```bash
   git init
   ```

4. **Add the remote repository**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   ```
   Replace `YOUR-USERNAME` and `YOUR-REPO-NAME` with your actual GitHub username and repository name.

### Basic Git Workflow

Once your repository is connected, use these commands to save and upload your changes:

1. **Check what files have changed**:

   ```bash
   git status
   ```

   This shows you which files have been modified, added, or deleted.

2. **Stage your changes** (prepare them to be saved):

   ```bash
   git add .
   ```

   The `.` means "all files". This stages all changes in your project folder.

3. **Commit your changes** (save a snapshot with a message):

   ```bash
   git commit -m "Describe what you changed"
   ```

   Write a clear message describing what you changed. Examples:

   - `git commit -m "Added heading and paragraph to homepage"`
   - `git commit -m "Styled the header with blue background"`
   - `git commit -m "Added click counter button functionality"`

4. **Push to GitHub** (upload your changes):
   ```bash
   git push -u origin main
   ```
   The first time you push, use `-u origin main`. After that, you can just use `git push`.

### Git Best Practices

- **Commit often**: Save your work frequently with small, logical commits
- **Write clear commit messages**: Describe what changed, not why (unless it's important)
- **Check status before committing**: Use `git status` to see what will be committed
- **Push regularly**: Upload your changes to GitHub so they're backed up online

## GitHub Pages Hosting

GitHub Pages lets you host your website for free. Your website will be accessible at a URL like `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`.

### Setting Up GitHub Pages

1. **Ensure your repository is public**:

   - Go to your repository on GitHub
   - Click "Settings" (top menu bar)
   - Scroll down to "Danger Zone" if you need to change visibility
   - Note: Private repositories require a paid GitHub plan for Pages

2. **Enable GitHub Pages**:

   - In your repository, click "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose branch: `main`
   - Choose folder: `/ (root)`
   - Click "Save"

3. **Wait for deployment**:

   - GitHub will show a message: "Your site is ready to be published"
   - After a few minutes, refresh the page
   - You'll see a green checkmark and your website URL
   - The URL format is: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

4. **Test your website**:
   - Click the URL or copy it into your browser
   - Your `index.html` file should load
   - If you see a 404 error, wait a few more minutes and try again

### Updating Your Website

After making changes to your code:

1. Follow the Git workflow:

   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. Wait 1-2 minutes for GitHub Pages to rebuild your site

3. Refresh your website URL to see the changes

### Troubleshooting GitHub Pages

**Problem: Getting a 404 error**

- **Solution**: Make sure `index.html` is in the root folder of your repository (not in a subfolder)
- **Solution**: Check that you selected the correct branch (`main`) in Pages settings
- **Solution**: Wait a few minutes - deployment can take 1-5 minutes

**Problem: Website shows old content**

- **Solution**: Hard refresh your browser (`Ctrl+Shift+R` / `Cmd+Shift+R`)
- **Solution**: Clear your browser cache
- **Solution**: Check that you pushed your latest changes with `git push`

**Problem: CSS or JavaScript not loading**

- **Solution**: Check that file paths in `index.html` are correct:
  - `<link rel="stylesheet" href="css/style.css">` (not `/css/style.css` or `./css/style.css`)
  - `<script src="js/script.js"></script>` (not `/js/script.js`)
- **Solution**: Make sure your `css` and `js` folders exist and contain the files

**Problem: Images not showing**

- **Solution**: Check that image paths in HTML are correct relative to `index.html`
- **Solution**: Make sure image files are actually committed and pushed to GitHub
- **Solution**: Use lowercase filenames and avoid spaces (use hyphens instead)

## Frequently Asked Questions

### Why doesn't my CSS apply?

1. **Check the file path**: In `index.html`, make sure the link tag says `href="css/style.css"` (relative path, not absolute)

2. **Check file location**: Make sure `style.css` is inside a folder named `css` in the same directory as `index.html`

3. **Check for typos**: CSS is case-sensitive. Make sure selectors match your HTML exactly

4. **Check browser cache**: Hard refresh with `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

5. **Check the Console**: Open Developer Tools (F12) and look for 404 errors indicating the CSS file wasn't found

### Why doesn't my JavaScript run?

1. **Check the script tag**: Make sure `index.html` has `<script defer src="js/script.js"></script>` before the closing `</body>` tag

2. **Check the file path**: The path should be `js/script.js` (relative, not absolute)

3. **Check the Console**: Open Developer Tools (F12) -> Console tab. JavaScript errors will appear in red

4. **Check for syntax errors**: Missing semicolons, unmatched quotes, or typos can break JavaScript

5. **Check element selection**: If you're selecting elements, make sure they exist in your HTML and have the correct `id` or `class`

### What is the console?

The Console is a developer tool in your browser that shows:

- Error messages from your code
- Messages you print with `console.log()`
- Warnings and information about your webpage

**How to open it**:

- Press `F12` (or `Fn+F12` on some laptops)
- Right-click on the webpage -> "Inspect" or "Inspect Element" -> Click "Console" tab
- On Mac: `Cmd+Option+I`, then click "Console"

**Why it's useful**:

- See if JavaScript is running
- Debug errors in your code
- Test JavaScript commands directly
- See network errors (like missing files)

### I pushed but my website didn't update

1. **Wait a few minutes**: GitHub Pages can take 1-5 minutes to rebuild after a push

2. **Check that you actually pushed**: Go to your GitHub repository and verify your latest commit appears

3. **Hard refresh your browser**: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac) to clear cache

4. **Check the Pages settings**: Go to Settings -> Pages and verify it's deploying from the `main` branch

5. **Check for build errors**: In your repository, go to "Actions" tab to see if there were any deployment errors

6. **Verify file paths**: Make sure all your file paths are correct and files are in the right locations

## Next Steps

After completing this workshop:

1. **Experiment**: Try changing colors, fonts, and layouts. Break things and fix them - that's how you learn!

2. **Add more content**: Create multiple pages, add more sections, include more images

3. **Learn more**: Explore online resources like MDN Web Docs (https://developer.mozilla.org) for detailed HTML, CSS, and JavaScript documentation

4. **Build projects**: Create a portfolio, a blog, a landing page, or any website idea you have

5. **Share your work**: Show your website to friends and family, and get feedback

Remember: Every expert was once a beginner. Keep practicing, keep building, and don't be afraid to make mistakes!
