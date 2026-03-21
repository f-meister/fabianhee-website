# fabianhee-website | Personal Hub & Blog

This repository contains the source code for my personal brand hub, featuring my **Professional Profile**, **Blog**, **Portfolio**, **How I Work**, **Experience**, and YouTube channel.

Built with **Hugo (Blowfish Theme)** and version-locked via **Dev Containers** for 100% reproducibility.

---

## 🛠 Development Environment

This project uses a **Dev Container** to ensure the environment is identical across all machines.

* **OS:** Ubuntu 24.04 (Noble Numbat)
* **Hugo:** v0.157.0
* **Go:** v1.25.8
* **Docker:** v26.1.4 (Moby)
* **Act:** v0.2.84 (Local GitHub Actions)

### Prerequisites

1. **Docker Desktop** (or Engine) installed on host.
2. **VS Code** with the *Dev Containers* extension.
3. **Host Fix (Required for Ubuntu 24.04):** Run this on your host machine to allow Docker-in-Docker:
```bash
sudo sysctl -w kernel.apparmor_restrict_unprivileged_userns=0

```
Otherwise, the devcontainers should trigger normally with the supplied `devcontainer.json` configuration.


---

## 🚀 How to Run Locally

1. Open the project in VS Code.
2. When prompted, click **"Reopen in Container"**.
3. Once the container starts, launch the Hugo development server:
```bash
hugo server -D

```
4. Access your site at `http://localhost:1313`.

Note: If there is no prompt, manually trigger the container building/running sequence by pressing `F1` and select **"Reopen in Container"** or a similarly phrased selection.

---

## 🧪 Testing GitHub Actions (Locally)

We use `act` to verify that our deployment scripts work before pushing to GitHub.

### 1. Dry Run (Build Only)

This simulates the GitHub runner environment and builds the Hugo site.

```bash
act -j build-deploy --graph

```

### 2. Full Test (With Secrets)

To test the Cloudflare deployment logic, you need to provide mock or real credentials.

```bash
# Create a temporary .secrets file
echo "CLOUDFLARE_API_TOKEN=your_token" > .secrets
echo "CLOUDFLARE_ACCOUNT_ID=your_id" >> .secrets

# Run the deploy job
act -j build-deploy --secret-file .secrets

```
---

## 🪾 Branching Strategy
Standard branching strategy applies.

Production branch: `main`

Preview branch: `dev`

Feature branches should start with `(feature-number)-(feature-name)` and merge to dev for preview.

---

## 🚢 Deployment

Deployment is automated via **GitHub Actions** and **Cloudflare**. 

1. **Commit & Push:**
```bash
git add .
git commit -m "feat: add some fancy feature"
git push origin dev
```
2. **GitHub Action:** The `build-deploy` workflow triggers automatically on push for `main` and `dev` branches.
3. **Cloudflare:** The static files are pushed to Cloudflare Pages and served via my custom domain.

---
## 📂 Structure
1. CSS, JS, and "images that are to be converted to webp format" are stored in the `assets` folder.
2. Default Blowfish/Hugo configuration is in `config/_default`. These include menu configurations and site parameters.
3. Actual website content is in `content`.
4. Yaml files containing text strings to be procedurally generated is in `data`.
5. Layout defaults, shortcodes, and partials are in `layouts` under each corresponding subfolder.
6. Public-facing files are in `static`.

---

## 📂 Content Management
All content uses a custom `no-list` layout, except for Blogposts. Elements are often generated using shortcode `html` files contained in `layouts`

* **Blog:** Located in `content/blog/`. Content is grabbed from Google Drive during build time, therefore nothing should be added here manually.
* **How I work:** Located in `content/mentality/`.
* **Experience:** Located in `content/experience/`.
* **Portfolio:** Located in `content/portfolio/` and consists of each corresponding portfolio type, (i.e. audio-video, games, & tech). There is no landing page for `Portfolio` itself.
* **Contact:** Located in `content/contact/`.

### Adding a new Blogpost:
Blogposts live in Google Drive and the full integration is built using Google Console's Workload Identity Federation. (please see `.github/workflows/full-sync-deploy.yaml` for more details)

The "Hello World" folder is the main reference for creating blogposts. Use it as a template for new posts.

## Contribution
I'm open to collaborations and fixes. Please feel free to fork this repo if you find it useful for you.
