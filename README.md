# Intel Sustainability Timeline (Student Project)

This project is a responsive, accessible, and visually appealing timeline site inspired by Intel's official branding. It demonstrates best practices in HTML, CSS, and accessibility, and is designed for student coders to learn from and extend.

---

## Project Structure

- **index.html**  
  Main HTML file. Contains the page layout, navigation, timeline, info cards, modal, and footer.
- **style.css**  
  Custom styles for layout, branding, responsiveness, and accessibility.
- **img/**  
  Folder for images (e.g., timeline card images, Intel logo SVG).

---

## Key Features & Comments

- **Sticky Navigation Bar**  
  Uses an official-style Intel SVG logo and a language selector.  
  _Tip: The logo SVG is embedded for fast loading and easy color changes._

- **Hero Section**  
  Large heading and intro text, centered for a modern look.

- **Timeline Section**  
  Horizontally scrollable cards, each representing a milestone in Intel's sustainability journey.  
  _Tip: Cards use semantic HTML (`<article>`) and ARIA attributes for accessibility._

- **Three-Column Section**  
  Uses Bootstrap grid for responsive layout.  
  _Tip: Try resizing your browser to see how the layout adapts!_

- **Newsletter Subscription**  
  Simple form with accessible labels and feedback.  
  _Tip: The `autocomplete="email"` attribute helps users on mobile devices._

- **Modal Dialog**  
  Uses Bootstrap's modal for extra info.  
  _Tip: All interactive elements have clear focus states for keyboard users._

- **Footer**  
  Styled to match Intel's branding, with navigation links.

---

## Accessibility & Best Practices

- All interactive elements (buttons, links) have visible focus states.
- Uses ARIA labels and roles for screen readers.
- Color contrast meets WCAG guidelines.
- Responsive design: works well on desktop, tablet, and mobile.
- Uses semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<article>`, etc.).

---

## How to Run

1. Open the project in your dev container or local environment.
2. Open `index.html` in your browser.
   - If in the dev container, you can use:  
     ```sh
     $BROWSER index.html
     ```
3. Explore the timeline and try resizing the window to see the responsive design.

---

## Student Coding Tips

- **Explore the CSS:**  
  Look for comments and logical grouping. Try changing colors or spacing to see the effect.
- **Add More Timeline Cards:**  
  Copy an `<article class="glass-card ...">` block and update the year, image, and text.
- **Try Adding a New Section:**  
  Use Bootstrap's grid system for easy responsive layouts.
- **Experiment with Accessibility:**  
  Try navigating with the keyboard (Tab/Shift+Tab) and screen readers.
- **Localization:**  
  The language selector is present for future localization. Try connecting it to real translations!

---

## Comments in Code

- Look for `<!-- ... -->` in HTML and `/* ... */` in CSS for extra guidance.
- Use the `.container` class for consistent horizontal padding.
- Use ARIA attributes for accessibility where needed.

---

## License

This project is for educational purposes only and is not affiliated with or endorsed by Intel Corporation.
