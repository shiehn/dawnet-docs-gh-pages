# Signals & Sorcery Authentication + FastAPI Integration — Combined Plan

## Context Summary (from Original Plan)

The *Signals & Sorcery* authentication gateway is designed as a secure, indie-scalable backend for the **SAS Electron app**, hosted on **Fly.io** with **Neon Postgres**, **Upstash Redis**, and **Clerk (Google OAuth)**.

The primary goals of the system are:

- Enable **social login (Google)** through Clerk.
- Validate **JWT tokens** issued by Clerk within **FastAPI**.
- Store users in **Postgres**, assigning tiers (`free` / `pro`) and tracking rate limits.
- Enforce **Redis-based throttling** for free-tier users.
- Proxy requests to **OpenAI API** for content generation.
- Deploy lightweight and affordable infra using **Fly.io** and managed SaaS services (Clerk, Neon, Upstash, Stripe).

### Current Architecture

```
Electron App → Clerk OAuth (Google)
   ↓ token
FastAPI (Fly.io)
   ↓
Neon Postgres → user tier data
Upstash Redis → rate limits
Stripe (future) → billing + upgrade
OpenAI Proxy (future) → content
```

### Repository Overview

```
signals-and-sorcery/
  electron-app/
  sas-gateway/
    app/
      main.py
      config.py
      auth.py
      limits.py
      deps.py
      routes/
        health.py
        me.py
        openai_proxy.py
      db.py
      webhooks/stripe.py
    fly.toml
    Dockerfile
```

### Already Complete

- ✅ Fly.io app with Postgres attached (`sas-gateway`)
- ✅ Clerk dev + prod environments
- ✅ JWT template defined in Clerk
- ✅ Hello-world API verified running

---

## Next Step Actions (vNext)

### 1. Finalize Clerk OAuth Configuration

1. Enable Google provider in Clerk dashboard.
2. Add redirect URIs:
   - `http://127.0.0.1:43110/callback`
   - `sas://callback` (optional custom scheme)
3. Create JWT template for the API (`aud: sas-api`).
4. Copy environment variables:
   - `CLERK_ISSUER`
   - `CLERK_JWKS_URL`
   - `CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`

### 2. Set Up Secrets in Fly.io

Run once per environment:

```bash
fly secrets set   CLERK_ISSUER=<issuer>   CLERK_JWKS_URL=<jwks_url>   CLERK_AUDIENCE=sas-api   DATABASE_URL=<neon_connection_url>
```

### 3. FastAPI Implementation Steps

1. Add `auth.py` for JWT verification using Clerk’s JWKS URL.
2. Add `/v1/me` endpoint in `routes/me.py` that:
   - Extracts and verifies the Bearer token.
   - Upserts user in Postgres.
   - Returns `{ id, email, username }`.
3. Add a simple user model in `models.py`.
4. Confirm `users` table exists with schema:

```sql
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id text UNIQUE NOT NULL,
  email text,
  plan text NOT NULL DEFAULT 'free',
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
```

### 4. Electron App — PKCE Login Flow

1. In Electron main process:
   - Generate PKCE `code_verifier` + `code_challenge`.
   - Open **system browser** to Clerk OAuth with redirect to `127.0.0.1:43110/callback`.
   - Run temporary HTTP listener to receive `?code=`.
   - Exchange code for **ID token** using Clerk endpoint.
   - Store the ID token in macOS Keychain.
2. Renderer process displays `claims.name` or `claims.email`.
3. Send ID token to `/v1/me` on gateway to fetch user info.

### 5. Dev vs Prod Configuration

| Env | Clerk Instance | Fly App URL | Notes |
|-----|----------------|--------------|-------|
| Dev | Clerk Dev | `sas-dev.fly.dev` | For test users |
| Prod | Clerk Prod | `sas.fly.dev` | For real users |

### 6. Validation Checklist

| Task | Description | Status |
|------|--------------|--------|
| `/v1/me` | JWT verification + upsert | ☐ |
| `auth.py` | JWKS verifier | ☐ |
| Electron | PKCE + token storage | ☐ |
| UI | Display user name | ☐ |
| Fly Secrets | Set and test | ☐ |
| Curl Test | Verify `/v1/me` works | ☐ |

### 7. Manual Smoke Test

```bash
curl -H "Authorization: Bearer $ID_TOKEN" https://sas.fly.dev/v1/me
```

Expected output:
```json
{ "id": "user_abc123", "email": "steve@example.com", "username": "Steve" }
```

---

## Roadmap (Beyond Auth)

- Integrate Stripe for tier upgrades.
- Add OpenAI proxy endpoint for loop generation.
- Add Redis-based rate limiter (free vs pro tiers).
- Add `GET /v1/limits` route to show remaining quota.
- Add monitoring/logging via Sentry.

---

**Author:** ChatGPT for Steve Hiehn  
**Date:** 2025‑11‑11  
**Version:** Auth Integration vNext  
