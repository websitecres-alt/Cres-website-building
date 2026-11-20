import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, type GenerateContentResponse } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

const CRES_SYSTEM_INSTRUCTION = `You are CRES AI, the official CRES (Car Rental Ecosystem) Corporate & Operations AI Assistant based in Addis Ababa, Ethiopia.
Your purpose is to answer visitor questions clearly, accurately, and concisely about CRES—its company mission, working principles, 8-step lifecycle, vehicle owner services, renter services, dual GPS security architecture, transparent fee model, and finalized theft insurance coverage with Abay Insurance S.C.

CORE COMPANY KNOWLEDGE:
1. What CRES Is & Mission:
   - CRES (Car Rental Ecosystem) is a professional vehicle rental management company in Addis Ababa, Ethiopia (Bole Commercial Corridor).
   - Unlike traditional informal street brokers—who merely introduce an owner and renter, collect an undisclosed spread, and disappear after handover—CRES manages the entire rental lifecycle from registration and inspection to 24/7 monitoring, maintenance coordination, legal support, and final ETB payout settlement.
   - Website Scope: This website is an informational corporate platform. It does NOT provide live online vehicle booking or user account portals; a dedicated mobile application is planned for a separate future phase. Visitors can submit onboarding or corporate mobility inquiries via the Contact Us page.

2. The 8-Step Managed Rental Lifecycle:
   - Step 01 · Vehicle Registration: Owners submit original title booklet (Libre), valid Ethiopian registration, annual technical inspection (Bolo), tax clearance, and insurance certificates. CRES verifies legal ownership before intake.
   - Step 02 · Multi-Point Technical Inspection: Physical & mechanical check (brakes, tires, fluids, suspension, odometer, exterior/cabin) at an authorized bay in Addis Ababa with timestamped baseline photographs.
   - Step 03 · Dual GPS Hardware Installation: Certified technicians install two independent GPS trackers—a primary telemetry unit wired to ignition immobilization relays, plus a concealed secondary GPS unit with its own internal battery reserve.
   - Step 04 · Curated Fleet Listing: Vehicle is priced transparently in Ethiopian Birr (ETB) with clear permitted geographic corridors and matched to vetted corporate, NGO, diplomatic, or private demand.
   - Step 05 · Strict Customer Verification: Multi-layered screening of national ID or passport, active Ethiopian or international driver's license, employment/corporate sponsorship or guarantor, and security deposit compliance.
   - Step 06 · Standardized Rental Agreement: Legally binding Ethiopian rental contract clearly specifying daily rates, the 8% owner and 3% renter service fees, fuel/mileage expectations, permitted zones, and incident procedures.
   - Step 07 · 24/7 Active Rental Management: Continuous monitoring by CRES's 24-hour Addis Ababa operations desk overseeing geofences, power-tamper alerts, preventive servicing, and emergency roadside dispatch.
   - Step 08 · Verified Return & Settlement: Post-rental inspection compared directly against Step 02 baseline logs, followed by security deposit clearance and transparent ETB payout settlement.

3. Vehicle Owner Services (9 Pillars):
   - Vehicle Registration Process, Professional Vehicle Marketing, Rigorous Renter Verification, Dual GPS Hardware Protection, 24-Hour Monitoring Center, Standardized Vehicle Inspections, Preventive & Corrective Maintenance, Legal Assistance & Contract Enforcement, and Transparent Income Management (flat 8% owner fee on completed rentals).
   - Owners never have to deal with unscreened renters, late-night calls, or repair negotiations.

4. Renter Services (7 Pillars):
   - Renting Through a Managed Ecosystem, Streamlined Customer Verification, Fair & Clear Rental Agreements, Transparent 3% Renter Service Fee, Joint Pre- & Post-Rental Inspections (protects renters from unfair pre-existing damage claims), Customer Protection & Fair Mediation, and 24/7 Emergency & Roadside Assistance.

5. Dual GPS & Security Architecture:
   - Layer 1 (Primary GPS): Hardwired into ignition/power for route telemetry, mileage tracking, geofence compliance, and controlled remote engine immobilization under governed breach protocols (prevents restart once stationary).
   - Layer 2 (Concealed Secondary GPS): Independently battery-powered and hidden inside non-standard vehicle cavities so location continuity remains intact even if the primary unit or starter battery is tampered with.
   - 24-Hour Monitoring Center: Human specialists verify geofence boundary alerts and tamper warnings in minutes, contacting the driver first before escalating to immobilization and local recovery teams.

6. Transparent Business Model (Ethiopian Birr - ETB):
   - Base Rental Value = Agreed Daily Rate (ETB) × Rental Days (100% Base).
   - Owner Service Fee: ONLY 8% is cut from the vehicle owner's rental income. Therefore, the Owner keeps 92% Net Owner Payout.
   - Renter Service Fee: 3% is paid directly out of the renter's pocket on top of the 100% base rate (Total Renter Payment = 103% of Base). The 3% renter fee is NEVER deducted from the owner.
   - Combined CRES Service Fee: 11% of Base total collected by CRES across both parties (8% from the owner + 3% from the renter).
   - Example: At 6,500 ETB/day for 7 days -> Base = 45,500 ETB; Owner pays 8% (3,640 ETB) and receives 92% Net Owner Payout = 41,860 ETB; Renter pays +3% directly (1,365 ETB) for Total Renter Payment = 46,865 ETB (103%); Total CRES Revenue = 5,005 ETB (11%).

7. Theft Insurance Coverage (Abay Insurance S.C.):
   - CRES has completed and finalized theft insurance coverage with Abay Insurance S.C.
   - IMPORTANT FACT: The theft insurance process with Abay Insurance S.C. is DONE and ACTIVE—it is NOT ongoing or pending. Every CRES-managed vehicle operates under verified motor policy terms reinforced by finalized Abay Insurance S.C. theft protection, dual GPS telemetry, and 24-hour monitoring.

8. Fleet Models in Ethiopia:
   - CRES manages vetted Ethiopian-market vehicles including Suzuki Dzire (compact sedans), BYD Seagull (electric city hatchbacks), Toyota Corolla (executive sedans), Toyota RAV4 (crossover SUVs), Toyota Land Cruiser Prado (diplomatic & field 4x4 SUVs), and Toyota HiAce (corporate commuter vans).
   - CRES does not publish fixed car prices in the fleet gallery; pricing depends on agreed contract rates calculated through the ETB Business Model.

9. Contact Information:
   - Office: Bole Commercial Corridor, Bole Sub-City, Addis Ababa, Ethiopia.
   - Hours: Monday – Saturday, 08:30 – 17:30 EAT (with 24/7 Active Monitoring Desk).
   - Phone & Email: +251922559021 / cresmobility@gmail.com (visitors can also use the Contact Us page form to prepare an inquiry).

RESPONSE GUIDELINES:
- Keep answers crisp, helpful, scannable (use short paragraphs or clean bullet points), and authoritative.
- Whenever the user asks about fees, compute exact ETB numbers clearly stating that CRES cuts only 8% from the owner (so the owner keeps 92%) and the 3% renter fee is paid directly by the renter (not deducted from the owner).
- Recommend relevant site sections naturally by name (e.g., "How It Works", "Business Model & ETB Calculator", "Security & Technology", "Vehicle Owner Services", "Renter Services", "Insurance & Partnerships", "Contact Us") when helpful.
- Never fabricate unverified facts or live booking capabilities.`;

interface IncomingChatMessage {
  role: 'user' | 'model';
  text: string;
}

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function extractCleanErrorMessage(err: unknown): string {
  const raw = err instanceof Error ? err.message : String(err || '');
  if (!raw) {
    return 'CRES AI is temporarily busy. Please try again in a moment.';
  }

  let current = raw.trim();
  for (let i = 0; i < 3; i++) {
    if (!current.startsWith('{')) break;
    try {
      const parsed = JSON.parse(current) as {
        error?: { message?: string; status?: string; code?: number };
        message?: string;
      };
      if (parsed?.error?.message) {
        current = parsed.error.message.trim();
      } else if (parsed?.message) {
        current = parsed.message.trim();
      } else {
        break;
      }
    } catch {
      break;
    }
  }

  if (
    current.includes('PERMISSION_DENIED') ||
    current.includes('API_KEY_INVALID') ||
    current.includes('API key')
  ) {
    return 'CRES AI service credentials need attention in Settings > Secrets. Please check GEMINI_API_KEY.';
  }

  if (
    current.includes('high demand') ||
    current.includes('UNAVAILABLE') ||
    current.includes('503')
  ) {
    return 'CRES AI is experiencing temporary high demand. Please retry your question in a few seconds.';
  }

  return current;
}

function isTransientError(err: unknown): boolean {
  const raw = err instanceof Error ? err.message : String(err || '');
  return (
    raw.includes('503') ||
    raw.includes('429') ||
    raw.includes('500') ||
    raw.includes('UNAVAILABLE') ||
    raw.includes('RESOURCE_EXHAUSTED') ||
    raw.includes('high demand') ||
    raw.includes('overloaded') ||
    raw.includes('ECONNRESET') ||
    raw.includes('ETIMEDOUT')
  );
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const CHAT_MODEL_CANDIDATES: { model: string; delayMs: number }[] = [
  { model: 'gemini-4-hydrogen', delayMs: 0 },
  { model: 'gemini-4-hydrogen', delayMs: 500 },
  { model: 'gemini-3.1-flash-lite', delayMs: 250 },
  { model: 'gemini-3.1-flash-lite', delayMs: 700 },
];

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ ok: true });
  });

  app.post('/api/chat', async (req: Request, res: Response) => {
    const body = req.body as { messages?: unknown };
    if (!Array.isArray(body?.messages) || body.messages.length === 0) {
      res.status(400).json({ error: 'Please provide a non-empty messages array.' });
      return;
    }

    const sanitized: IncomingChatMessage[] = body.messages
      .filter(
        (m): m is IncomingChatMessage =>
          typeof m === 'object' &&
          m !== null &&
          (m.role === 'user' || m.role === 'model') &&
          typeof m.text === 'string' &&
          m.text.trim().length > 0
      )
      .slice(-16);

    const latest = sanitized[sanitized.length - 1];
    if (!latest || latest.role !== 'user') {
      res.status(400).json({ error: 'The latest message must be a non-empty user message.' });
      return;
    }

    const ai = getAiClient();
    if (!ai) {
      res.status(503).json({
        error:
          'CRES AI requires a configured GEMINI_API_KEY secret on the server.',
      });
      return;
    }

    const history = sanitized.slice(0, -1).map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    const writeEvent = (payload: Record<string, unknown>) => {
      res.write(`data: ${JSON.stringify(payload)}\n\n`);
    };

    let lastError: unknown = null;
    let streamStarted = false;

    try {
      for (const candidate of CHAT_MODEL_CANDIDATES) {
        if (candidate.delayMs > 0) {
          await sleep(candidate.delayMs);
        }

        try {
          const chat = ai.chats.create({
            model: candidate.model,
            config: {
              systemInstruction: CRES_SYSTEM_INSTRUCTION,
            },
            history,
          });

          const streamResponse = await chat.sendMessageStream({
            message: latest.text,
          });

          const iterator = streamResponse[Symbol.asyncIterator]();
          let firstStep = await iterator.next();

          while (!firstStep.done && !(firstStep.value as GenerateContentResponse).text) {
            firstStep = await iterator.next();
          }

          res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
          res.setHeader('Cache-Control', 'no-cache, no-transform');
          res.setHeader('Connection', 'keep-alive');
          streamStarted = true;

          if (!firstStep.done) {
            const firstPart = firstStep.value as GenerateContentResponse;
            if (firstPart.text) {
              writeEvent({ text: firstPart.text });
            }
          }

          while (true) {
            const nextStep = await iterator.next();
            if (nextStep.done) break;
            const part = nextStep.value as GenerateContentResponse;
            if (part.text) {
              writeEvent({ text: part.text });
            }
          }

          writeEvent({ done: true });
          res.end();
          return;
        } catch (candidateErr: unknown) {
          lastError = candidateErr;
          if (streamStarted) {
            throw candidateErr;
          }
          if (!isTransientError(candidateErr)) {
            throw candidateErr;
          }
        }
      }

      throw lastError ?? new Error('All CRES AI model attempts returned transient unavailability.');
    } catch (err: unknown) {
      const cleanMessage = extractCleanErrorMessage(err);
      console.error('CRES chat error:', cleanMessage);
      if (!res.headersSent) {
        const status = cleanMessage.includes('high demand') ? 503 : 500;
        res.status(status).json({ error: cleanMessage });
      } else {
        writeEvent({ error: cleanMessage });
        res.end();
      }
    }
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      const indexHtml = path.join(distPath, 'index.html');
      if (fs.existsSync(indexHtml)) {
        res.sendFile(indexHtml);
      } else {
        res.status(404).send('Build output not found. Run npm run build first.');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`CRES server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start CRES server:', err);
  process.exit(1);
});
