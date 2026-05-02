/*
 * ============================================================
 * BDM Business — Cloudflare Worker
 * Proxies bdmbusiness.org → bdm-solutions-hub.replit.app
 * Falls back to a branded maintenance page when origin is down
 * ============================================================
 *
 * SETUP STEPS (one-time, ~5 minutes):
 *
 * 1. DEPLOY THIS WORKER
 *    - Go to https://workers.cloudflare.com and sign in (free account is fine)
 *    - Click "Create Worker"
 *    - Delete the default code and paste the entire contents of this file
 *    - Click "Save and Deploy"
 *
 * 2. ADD YOUR DOMAIN ROUTES
 *    - In the Worker's Settings tab → Triggers → Routes → Add Route
 *    - Add:  bdmbusiness.org/*
 *    - Add:  www.bdmbusiness.org/*
 *    - Select the zone "bdmbusiness.org" for both
 *
 * 3. POINT YOUR DNS TO REPLIT (if not already done)
 *    - In Cloudflare DNS, ensure you have a CNAME record:
 *        Name: @   →  Target: bdm-solutions-hub.replit.app   (Proxied / orange cloud ON)
 *        Name: www →  Target: bdm-solutions-hub.replit.app   (Proxied / orange cloud ON)
 *
 * 4. DONE
 *    - When Replit is live: visitors see your website normally
 *    - When Replit is offline/suspended: visitors see the BDM maintenance page below
 * ============================================================
 */

const ORIGIN = "https://bdm-solutions-hub.replit.app";

export default {
  async fetch(request) {
    try {
      const originUrl = new URL(ORIGIN);
      const targetUrl = new URL(request.url);
      targetUrl.protocol = originUrl.protocol;
      targetUrl.hostname = originUrl.hostname;
      targetUrl.port = originUrl.port;

      const headers = new Headers(request.headers);
      headers.set("Host", originUrl.hostname);

      const response = await fetch(targetUrl.toString(), {
        method: request.method,
        headers,
        body: ["GET", "HEAD"].includes(request.method) ? null : request.body,
        redirect: "follow",
      });

      if (response.status >= 400) {
        return maintenancePage();
      }

      return response;
    } catch (error) {
      return maintenancePage();
    }
  },
};

function maintenancePage() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BDM Business | We'll Be Back Soon</title>
  <style>
    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #111827 50%, #1e1b4b 100%);
      color: #ffffff;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      padding: 24px;
    }

    .card {
      max-width: 620px;
      width: 100%;
      padding: 48px 32px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(12px);
    }

    .badge {
      display: inline-block;
      padding: 8px 14px;
      margin-bottom: 24px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.1);
      color: #cbd5e1;
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    h1 {
      margin: 0 0 16px;
      font-size: clamp(32px, 5vw, 52px);
      line-height: 1.1;
      font-weight: 800;
    }

    p {
      margin: 0 auto;
      max-width: 480px;
      color: #cbd5e1;
      font-size: 18px;
      line-height: 1.7;
    }

    .footer {
      margin-top: 28px;
      color: #94a3b8;
      font-size: 14px;
    }

    .contact {
      margin-top: 32px;
      padding-top: 28px;
      border-top: 1px solid rgba(255, 255, 255, 0.10);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 14px;
    }

    .contact-label {
      color: #94a3b8;
      font-size: 13px;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .contact-links {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
    }

    .btn-whatsapp {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #25D366;
      color: #fff;
      font-weight: 700;
      font-size: 14px;
      padding: 10px 22px;
      border-radius: 999px;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .btn-whatsapp:hover { opacity: 0.85; }

    .btn-whatsapp svg {
      width: 16px;
      height: 16px;
      fill: #fff;
      flex-shrink: 0;
    }

    .link-muted {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #94a3b8;
      font-size: 14px;
      text-decoration: none;
      padding: 10px 18px;
      border-radius: 999px;
      border: 1px solid rgba(255, 255, 255, 0.12);
      transition: color 0.2s, border-color 0.2s;
    }
    .link-muted:hover { color: #fff; border-color: rgba(255,255,255,0.35); }
  </style>
</head>
<body>
  <main class="card">
    <div class="badge">BDM Business</div>
    <h1>We'll be back soon</h1>
    <p>Our website is currently undergoing a quick update. Please check back shortly.</p>
    <div class="footer">Thank you for your patience.</div>

    <div class="contact">
      <span class="contact-label">Reach us while we're away</span>
      <div class="contact-links">

        <a class="btn-whatsapp" href="https://wa.me/233278099101" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          WhatsApp
        </a>

        <a class="link-muted" href="https://www.instagram.com/bdmbusiness_" target="_blank" rel="noopener noreferrer">
          @bdmbusiness_
        </a>

        <a class="link-muted" href="mailto:support@bdmbusiness.org">
          support@bdmbusiness.org
        </a>

      </div>
    </div>
  </main>
</body>
</html>`;

  return new Response(html, {
    status: 503,
    headers: {
      "Content-Type": "text/html; charset=UTF-8",
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      "Pragma": "no-cache",
      "Expires": "0",
    },
  });
}
