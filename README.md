# Personal Website

# Development
## Backend
1. Get `.env` file from Bitwarden
2. Run `npm run develop`

## Frontend
1. Run `npm run dev`

# Deploy
## Backend
1. Run `flyctl deploy` in the backend directory
2. Go to `https://red-cloud-4553.fly.dev/admin`

## Frontend
1. Push to Github and Vercel will deploy

## Secret management
Secrets are stored in the `.env.[stage]` file. Locally, Strapi will read from `.env`. In production, fly.io sets an environment variable to read from `.env.prod` (see fly.toml)

# Other

## Connecting to prod postgres
- `FLYCTL_WG_REGION=sea flyctl postgres connect -a red-cloud-4553-db`
