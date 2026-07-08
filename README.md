# Md Rakibul Hasan — Portfolio

https://ronypy.github.io/md.rakibul.hasan/

A React + Vite portfolio built around a "role lens" — visitors can filter
projects and experience by what they're hiring for (Applied Scientist, ML
Engineer, AI Engineer, Data Scientist, Academic), and the résumé download
switches to match.

## Development

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run deploy    # build + publish dist/ to the gh-pages branch
```

## Editing content

All text content lives in `src/data/*.js` as plain arrays/objects — no JSX
editing required for routine updates:

| File | What it controls |
|---|---|
| `profile.js` | Name, headline, subhead, hero stats, contact links |
| `roles.js` | The five role-lens filters and which résumé PDF each maps to |
| `education.js` | Degrees, dissertation title, committee |
| `publications.js` | Papers — add a new one at the top to keep it reverse-chronological |
| `projects.js` | Flagship project cards + the "Also built" compact list |
| `experience.js` | The industry/research/teaching timeline |
| `teaching.js` | Courses taught and student quotes |
| `skills.js` | Skill tag groups |
| `awards.js` | Awards and certifications |
| `focusAreas.js` | The three "what I work on" cards under the hero |

To add a new tailored résumé PDF, drop it in `public/resumes/` and add an
entry to `roles.js`.

To change the color palette or fonts, edit the CSS variables at the top of
`src/index.css`.
