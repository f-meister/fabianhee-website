# fabianhee-website | Personal Hub & Gaming Blog

This repository contains the source code for my personal brand hub, featuring my **Portfolio**, **Blog**, and **tastyfab** (YouTube content/JRPG & *Guilty Gear* analysis).

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



---

## 🚀 How to Run Locally

1. Open the project in VS Code.
2. When prompted, click **"Reopen in Container"**.
3. Once the container starts, launch the Hugo development server:
```bash
hugo server -D

```


4. Access your site at `http://localhost:1313`.

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

## 🚢 Deployment

Deployment is automated via **GitHub Actions** and **Cloudflare Pages**.

1. **Commit & Push:**
```bash
git add .
git commit -m "feat: analyze Sol Badguy theme"
git push origin main

```


2. **GitHub Action:** The `build-deploy` workflow triggers automatically.
3. **Cloudflare:** The static files are pushed to Cloudflare Pages and served via my custom domain.

---

## 📂 Content Management

* **Portfolio:** Located in `content/portfolio/`. Uses the `profile` layout.
* **tastyfab:** Located in `content/tastyfab/`. Uses the `background` (gaming) layout with YouTube embeds.
* **Blog:** Located in `content/blog/`. Standard markdown posts.

### Adding a new Character Analysis:

```bash
hugo new tastyfab/character-analyses/character-name.md

```

---

**Would you like me to add a specific "Troubleshooting" section to this README covering common Cloudflare DNS or Hugo build errors?**