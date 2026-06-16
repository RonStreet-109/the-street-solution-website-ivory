# Deployment Guide — GitHub, Vercel, and Custom Domain

## 1. Put the website on GitHub

1. Go to GitHub and create a new repository.
2. Name it something simple, such as `the-street-solution-start`.
3. Upload the website files from this folder.
4. Confirm the files are in the repository root:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `vercel.json`
   - `assets/`
5. Commit to the `main` branch.

## 2. Deploy on Vercel

1. Go to Vercel.
2. Click **Add New Project**.
3. Import your GitHub repository.
4. Use **Other** or **Static** as the project type if asked.
5. Leave build settings blank because this is a static website.
6. Click **Deploy**.

## 3. Connect TheStreetSolution.com

1. In the Vercel project, go to **Settings → Domains**.
2. Add `TheStreetSolution.com`.
3. Also add `www.TheStreetSolution.com` if you want the www version to work.
4. Vercel will display the exact DNS records.
5. Log in to the domain registrar where TheStreetSolution.com is managed.
6. Update DNS using the exact values Vercel shows.

Typical external DNS pattern:

| Host | Type | Value |
|---|---|---|
| @ | A | 76.76.21.21 |
| www | CNAME | copy the exact Vercel CNAME target shown in your Vercel dashboard |

Important: Vercel has used dynamic CNAME targets such as `cname.vercel-dns-0.com`. Copy the exact value from the Vercel project dashboard rather than guessing.

## 4. After DNS is connected

- Wait for Vercel to verify the domain.
- Vercel will provision SSL/HTTPS.
- Test the root domain and www domain.
- Choose one preferred version and redirect the other version to it if needed.
