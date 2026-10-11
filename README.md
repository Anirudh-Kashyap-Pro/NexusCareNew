# 🏥 NexusCare India — National Hospital Operations & "One Patient, One Journey" Engine

An authentic, colorful, and human-centric healthcare ecosystem built specifically for the **Indian healthcare environment**, integrating **ABHA (Ayushman Bharat Health Account)**, bilingual **English & हिन्दी (Hindi)** support, multi-role interfaces (**Patient, Staff, Admin**), voice-first guidance, and predictive queue intelligence.

---

## 🇮🇳 India-Specific Innovations & Features

1. **One Patient, One Journey (एक मरीज, एक यात्रा):**
   - Individualized, step-by-step hospital lifecycle from Main Gate entry to Janaushadhi pharmacy discharge.
   - Live ABHA ID verification (`91-4820-1928-4011`), PMJAY verified cashless tag, and WhatsApp token share button.
   - Real-time ahead-in-queue counters and consultation countdown timers.

2. **Predictive Crowd Intelligence & Best Arrival Time:**
   - Real-time crowd density analysis informing patients of the best time to arrive (e.g., *"Arrive at 10:45 AM to avoid peak rush"*), dramatically reducing waiting room congestion.

3. **Multi-Role Tailored Experiences (Patient, Staff, Admin):**
   - **Public / Patient (मरीज़):** Personal journey timeline, live token tracking, virtual human anatomy symptom checker, lab & pharmacy readiness, and anonymous grievance logging.
   - **Staff / Doctor (स्टाफ/डॉक्टर):** OPD console (Dr. Priya Nair, Room 204), big **"Call Next Patient"** trigger with authentic Indian hospital chimes and bilingual voice broadcast, digital generic prescription quick-sign, and offline-to-online slot flexer.
   - **Admin / Medical Superintendent (प्रशासक):** Hospital master command center, 2,125 bed telemetry, ICU occupancy, **Smart Walk-in & Online Slot Auto-Flex Balancer**, and AI Grievance Task SLA tracker.

4. **Smart Walk-in & Online Slot Auto-Flex Balancer:**
   - Dynamic balancing slider (e.g., 60% Online / 40% Offline walk-in) with an automated algorithm that shifts unused offline seats to online patients if physical walk-in footfall is below threshold, protecting rural walk-ins while maximizing doctor throughput.

5. **Virtual Human Anatomy & Symptom Checker:**
   - Interactive SVG anatomical model with clickable zones: Head, Throat/ENT, Chest & Heart, Abdomen, Spine/Back, Knees & Joints.
   - 1–10 pain severity rating with automatic clinical triage level calculation (Level 1 Urgent Red, Level 2 Priority Amber, Level 3 Routine Mint) guiding patients to the exact OPD room.

6. **Voice-First Multilingual Assistant ("NexusCare आवाज़ सहायक"):**
   - Floating mic button tailored for non-tech-savvy, elderly, or rural patients.
   - Speaks back in voice in Hindi (*"नमस्ते रमेश जी, आपकी बारी कमरा 204 में है"*) and English.

7. **Architectural 2D & Isometric 3D Hospital Map:**
   - Multi-floor blueprints (Floors 1 to 4) with animated glowing hallway route paths from Lift B to OPD Room 204.
   - Divyangjan / Wheelchair ramp & elevator routing guidance.

8. **AI Grievance & Service Recovery Center:**
   - Anonymous complaint reporting that automatically classifies issues (cleanliness, staff delays, wheelchair availability) and assigns a **15-minute SLA task** directly to the Admin dashboard.

9. **Long-Hover Descriptions:**
   - Hovering over any badge, metric, or button for >600ms reveals a clear tooltip explaining what the feature does in plain language.

---

## 🎨 Visual Identity
- **Bright, Welcoming Indian Hospital Palette:** Surgical Teal (`#0d9488`), Indian Saffron/Marigold (`#ea580c`, `#f59e0b`), Royal Sapphire Blue (`#2563eb`), Emergency Crimson (`#e11d48`), and Healing Mint (`#10b981`) on clinical off-white surfaces (`#f8fafc`).
- Clean, human-designed interface with authentic clinical typography (*Plus Jakarta Sans* & *Noto Sans Devanagari*).

---

## 🚀 Running & Deploying
- **Direct Launch:** Open [index.html](file:///C:/Users/amirc/.gemini/antigravity/scratch/nexuscare/index.html) in your browser.
- **Local Server:** Run `powershell -ExecutionPolicy Bypass -File .\serve.ps1` to serve locally on `http://localhost:8080/`.
- **Public 10-Second Deployment:** Drag & drop the updated [nexuscare.zip](file:///C:/Users/amirc/.gemini/antigravity/scratch/nexuscare.zip) archive directly into [Netlify Drop](https://app.netlify.com/drop).
