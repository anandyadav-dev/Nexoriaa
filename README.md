# NEXORIAA Technologies Website

Modern multi-page business website for **NEXORIAA Technologies**, an IT solutions company based in Lucknow.

Built with:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React icons

## Pages

- Home
- Services
- About Us
- Contact Us

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/anandyadav-dev/Nexoriaa.git
cd Nexoriaa
```

If you are working on the development branch:

```bash
git checkout develop
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open the website in your browser:

```text
http://localhost:3000
```

### 4. Create a Production Build

```bash
npm run build
```

### 5. Run Production Locally

```bash
npm start
```

## Useful Commands

```bash
npm run dev
```

Runs the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm start
```

Starts the production server after build.

```bash
npm run lint
```

Runs Next.js linting.

## Project Structure

```text
app/
  about/
  contact/
  services/
  globals.css
  layout.tsx
  page.tsx

components/
  contact-form.tsx
  page-hero.tsx
  site-footer.tsx
  site-header.tsx

package.json
tailwind.config.ts
tsconfig.json
```

## Deployment on a Server

These steps are for a VPS or cloud server running Linux with Node.js installed.

### 1. Install Node.js

Recommended Node.js version: **18.17 or higher**.

Check version:

```bash
node -v
npm -v
```

### 2. Clone Project on Server

```bash
git clone https://github.com/anandyadav-dev/Nexoriaa.git
cd Nexoriaa
git checkout develop
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Build Project

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

By default, Next.js runs on:

```text
http://localhost:3000
```

## Run with PM2

For production servers, use PM2 to keep the app running.

### 1. Install PM2

```bash
npm install -g pm2
```

### 2. Start App with PM2

```bash
pm2 start npm --name nexoriaa-website -- start
```

### 3. Save PM2 Process

```bash
pm2 save
pm2 startup
```

Follow the command shown by `pm2 startup`.

### 4. Useful PM2 Commands

```bash
pm2 list
pm2 logs nexoriaa-website
pm2 restart nexoriaa-website
pm2 stop nexoriaa-website
```

## Nginx Reverse Proxy

Use Nginx to point your domain to the Next.js app running on port `3000`.

Example config:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## SSL with Certbot

Install Certbot and enable HTTPS:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## Deployment Update Flow

When new code is pushed:

```bash
cd Nexoriaa
git pull origin develop
npm install
npm run build
pm2 restart nexoriaa-website
```

## Contact Details

**NEXORIAA Technologies**

- Phone: +91 7786021786
- Location: Indira Nagar, Lucknow
