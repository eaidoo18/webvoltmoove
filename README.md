# Voltmoove website

Marketing site for **Voltmoove**, an app that helps EV owners in Ghana find nearby chargers, check availability and pick the right plug.

Plain HTML, CSS and JavaScript. No build step.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`.

## Structure
```
index.html     page content
styles.css     design tokens and styles
script.js      interactive map preview and waitlist form
assets/        logo and favicon
```

## Make it real
- The charger pins in `script.js` are **sample data**. Swap in your own API or JSON file.
- The waitlist form only validates in the browser. Connect it to Formspree, Netlify Forms or your backend.
- Feature copy and coverage cities are placeholders. Edit them to match what you launch.
