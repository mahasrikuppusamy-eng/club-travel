Campus Club and Travel Buddy
============================
An Express application for campus club members and travel buddies.

The server listens on port `3000` by default. Set `PORT` to use another port.


## Run locally

1. Install Node.js.
2. Run `npm ci` to install dependencies.
3. Run `npm start` to start the server. For automatic restarts during development, use `npm run dev`.

Open <http://localhost:3000> in a browser. The database-backed forms require a MongoDB connection string in the `MONGODB_URI` environment variable. Keep credentials out of source control; use a local `.env` file with an environment-loading tool or configure the variable in your deployment environment.
