Campus Club and Travel Buddy
============================
An Express application for campus club members and travel buddies.

GitHub Pages only serves static files; it does not run this Node.js server. Deploy the app as a Render Web Service to get a live application URL.

## Deploy on Render

1. Push this repository to GitHub.
2. In Render, choose **New > Blueprint**, connect this repository, and deploy the `render.yaml` configuration.
3. When prompted, set `MONGODB_URI` to your MongoDB connection string. Use a rotated database credential and keep the value private.
4. After deployment succeeds, open the `onrender.com` URL shown in the Render dashboard.

The deployed app is at `/`; the health check at `/health` returns `{"status":"ok"}`. Render uses `npm ci` to build and `npm start` to run the service. Free services may sleep after inactivity, so the first request can take longer.

To turn off the static GitHub Pages site, open repository **Settings > Pages**, select **Deploy from a branch**, set the branch to **None**, and save.

## Run locally

1. Install Node.js and run `npm ci`.
2. Copy `.env.example` to `.env` and set `MONGODB_URI` to your MongoDB connection string.
3. Run `npm start` and open <http://localhost:3000>. For automatic restarts, run `npm run dev`.
