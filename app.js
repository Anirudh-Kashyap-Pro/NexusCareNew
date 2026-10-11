/**
 * NexusCare - Indian Healthcare Operations & Patient Journey Engine
 * Multi-Role: Public/Patient, Staff/Doctor, Admin/Medical Superintendent
 * Bilingual: English & हिन्दी (Hindi)
 * Voice-First Assistant with Indian Audio Chimes
 * "One Patient, One Journey" Real-Time Lifecycle
 */

// ==========================================================================
// 1. Master Translation Dictionary (English <-> हिन्दी)
// ==========================================================================
const I18N = {
  en: {
    brand_sub: 'National Digital Health Grid • ABHA Integrated',
    lang_btn: 'हिन्दी',
    emergency_btn: '🚨 Emergency 108',
    call_patient: 'Call Next Patient',
    voice_hint: 'Tap to Speak (Voice Assistant)',
    voice_listening: 'Listening... (Speak in Hindi or English)',
    journey_title: 'One Patient, One Journey',
    journey_sub: 'Real-time guidance from hospital entry to pharmacy discharge',
    step1: 'Entry & Screening',
    step2: 'ABHA Registration',
    step3: 'Doctor Consultation',
    step4: 'Lab & Diagnostics',
    step5: 'Pharmacy Dispense',
    step6: 'Discharge & Review',
    step_done: 'Completed',
    step_active: 'In Progress (Now)',
    step_pending: 'Upcoming',
    crowd_title: 'Predictive Crowd Intelligence',
    crowd_advice: 'Recommended arrival: 10:45 AM. Currently OPD footfall is nominal (Wait time ~9 mins).',
    anatomy_title: 'Interactive Body Symptom Checker',
    anatomy_sub: 'Click where it hurts on the anatomical model to find the correct department',
    token_card_title: 'Your Digital OPD Token',
    token_ahead: 'Patients Ahead',
    token_est_time: 'Est. Consultation',
    token_room: 'Consultation Room',
    lab_ready: 'Lab Reports Ready',
    pharm_ready: 'Pharmacy Status',
    admin_title: 'Hospital Master Operations Command',
    quota_balancer: 'Smart Walk-in & Online Slot Auto-Flex Balancer',
    grievance_title: 'AI Grievance & Service Recovery Center',
    anonymous_report: 'Report Anonymous Grievance',
    role_patient: 'Patient / Public',
    role_staff: 'Doctor / Staff',
    role_admin: 'Admin / MS'
  },
  hi: {
    brand_sub: 'राष्ट्रीय डिजिटल स्वास्थ्य ग्रिड • आभा (ABHA) एकीकृत',
    lang_btn: 'English',
    emergency_btn: '🚨 आपातकाल 108',
    call_patient: 'अगले मरीज को बुलाएं',
    voice_hint: 'बोलने के लिए दबाएं (आवाज़ सहायक)',
    voice_listening: 'सुन रहे हैं... (हिंदी या अंग्रेजी में बोलें)',
    journey_title: 'एक मरीज, एक यात्रा (One Journey)',
    journey_sub: 'अस्पताल प्रवेश से लेकर दवाई वितरण तक हर कदम पर मार्गदर्शन',
    step1: 'प्रवेश एवं सुरक्षा',
    step2: 'आभा पंजीकरण',
    step3: 'डॉक्टर परामर्श',
    step4: 'जाँच एवं लैब',
    step5: 'दवाई वितरण',
    step6: 'छुट्टी एवं समीक्षा',
    step_done: 'पूर्ण हुआ',
    step_active: 'प्रगति पर (अभी)',
    step_pending: 'आगामी',
    crowd_title: 'स्मार्ट भीड़ पूर्वानुमान एवं आगमन समय',
    crowd_advice: 'सुझाया गया समय: 10:45 AM. वर्तमान में ओपीडी में कम भीड़ है (प्रतीक्षा समय ~9 मिनट).',
    anatomy_title: 'मानव शरीर लक्षण जाँचकर्ता',
    anatomy_sub: 'शरीर के जिस हिस्से में दर्द या तकलीफ है उस पर क्लिक करें',
    token_card_title: 'आपका डिजिटल ओपीडी टोकन',
    token_ahead: 'आगे के मरीज',
    token_est_time: 'अनुमानित समय',
    token_room: 'कमरा नंबर',
    lab_ready: 'जाँच रिपोर्ट स्थिति',
    pharm_ready: 'दवाई खिड़की स्थिति',
    admin_title: 'अस्पताल मुख्य संचालन नियंत्रण कक्ष',
    quota_balancer: 'स्मार्ट वॉक-इन और ऑनलाइन सीट संतुलन प्रणाली',
    grievance_title: 'एआई शिकायत निवारण एवं सेवा सुधार केंद्र',
    anonymous_report: 'गुमनाम शिकायत दर्ज करें',
    role_patient: 'मरीज़ (Patient)',
    role_staff: 'स्टाफ/डॉक्टर',
    role_admin: 'प्रशासक (Admin)'
  }
};

// ==========================================================================
// 2. Application Global State
// ==========================================================================
const appState = {
  lang: 'en', // 'en' or 'hi'
  activeRole: 'patient', // 'patient', 'staff', 'admin'
  activeTab: 'journey', // 'journey', 'anatomy', 'tokens', 'map', 'aidesk', 'admin_hub'
  
  // Current Patient Session ("One Patient, One Journey")
  patient: {
    name: 'Ramesh Kumar',
    nameHi: 'रमेश कुमार',
    abhaId: '91-4820-1928-4011',
    tokenNumber: 'AIIMS-CARD-104',
    department: 'Cardiology (हृदय रोग)',
    room: 'Room 204 (Floor 2)',
    doctor: 'Dr. Priya Nair (एम्स प्रशिक्षित कार्डियोलॉजिस्ट)',
    step: 3, // 1 to 6
    aheadInQueue: 2,
    estMinutes: 9,
    labStatus: 'CBC Blood & ECG: Ready for Doctor Review',
    pharmacyStatus: 'Order queued, pending consultation sign-off'
  },

  // Staff Session
  staff: {
    doctorName: 'Dr. Priya Nair (MD Cardiology)',
    roomNumber: 'Room 204',
    currentServing: 'AIIMS-CARD-103',
    queue: [
      { id: 'AIIMS-CARD-104', name: 'Ramesh Kumar', type: 'Online Booking', wait: '9 min', abha: '91-4820' },
      { id: 'AIIMS-CARD-105', name: 'Savitri Devi', type: 'Offline Walk-in (Senior)', wait: '18 min', abha: '91-1192' },
      { id: 'AIIMS-CARD-106', name: 'Mohammad Farooq', type: 'Online Booking', wait: '26 min', abha: '91-3841' }
    ]
  },

  // Admin Operational Metrics & Quota Flexing
  admin: {
    totalBeds: 2125,
    occupiedBeds: 1658,
    icuOccupancy: 92,
    onlineQuotaPercent: 60, // 60% online, 40% offline
    autoFlexActive: true,
    footfallToday: 1420,
    pmjayClaims: '₹4.82 Lakh',
    activeGrievances: [
      { id: 'GR-109', category: 'Housekeeping', desc: 'Sanitizer dispenser empty near Room 204', room: 'Floor 2, Corridor A', sla: '12 min left', priority: 'High', status: 'In Progress' },
      { id: 'GR-110', category: 'Divyangjan Support', desc: 'Wheelchair assistance requested at Main Gate', room: 'Main Entrance', sla: '4 min left', priority: 'Urgent', status: 'Dispatched' },
      { id: 'GR-111', category: 'Pharmacy Counter', desc: 'Prescription counter 3 queue slowing down', room: 'Central Pharmacy', sla: '18 min left', priority: 'Medium', status: 'Pending Review' }
    ]
  },

  // Voice Assistant State
  voiceListening: false,
  soundMuted: false,

  // Map State
  mapFloor: 2,
  mapDestination: 'room_204',
  map3DMode: false
};

// ==========================================================================
// 3. Indian Hospital Sound & Multilingual Speech Synthesis
// ==========================================================================
class HospitalAudioEngine {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Indian Airport / Railway / Hospital 3-Chime
  playHospitalChime() {
    if (appState.soundMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      // Notes: D4 (293.66Hz), F#4 (369.99Hz), A4 (440Hz), D5 (587.33Hz)
      const freqs = [293.66, 369.99, 440.00, 587.33];
      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = this.ctx.currentTime + idx * 0.18;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(f, start);

        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.55);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.6);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  playClick() {
    if (appState.soundMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(700, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(350, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  // Speak in Hindi or English using SpeechSynthesis
  speakAnnouncement(textEn, textHi) {
    if (appState.soundMuted || !('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const isHindi = appState.lang === 'hi';
    const textToSpeak = isHindi ? textHi : textEn;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);

    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.lang = isHindi ? 'hi-IN' : 'en-IN';

    window.speechSynthesis.speak(utterance);
  }
}

const hospitalAudio = new HospitalAudioEngine();

// ==========================================================================
// 4. Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  setupLanguageSwitcher();
  setupRoleSwitcher();
  setupBottomDock();
  setupPatientJourneyInteractions();
  setupStaffConsole();
  setupAdminConsole();
  setupAnatomyModel();
  setupHospitalMap();
  setupVoiceAssistant();
  setupGrievanceModule();
  setupEmergencyCodeRed();
  setupLongHoverTooltips();

  // Initial UI Render
  renderRoleLayout(appState.activeRole);
  renderI18N();
});

// ==========================================================================
// 5. Language Switcher (English <-> हिन्दी)
// ==========================================================================
function setupLanguageSwitcher() {
  const langBtn = document.getElementById('btn-lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      hospitalAudio.playClick();
      appState.lang = appState.lang === 'en' ? 'hi' : 'en';
      langBtn.innerHTML = `🌐 ${I18N[appState.lang].lang_btn}`;
      renderI18N();
      showToast(appState.lang === 'hi' ? 'भाषा बदलकर हिन्दी कर दी गई है' : 'Language switched to English');
    });
  }
}

function renderI18N() {
  const t = I18N[appState.lang];

  // Replace text for marked elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // Update dynamic patient name
  const nameEl = document.getElementById('patient-name-display');
  if (nameEl) {
    nameEl.textContent = appState.lang === 'hi' ? appState.patient.nameHi : appState.patient.name;
  }
}

// ==========================================================================
// 6. Role Switcher (Patient vs Staff vs Admin)
// ==========================================================================
function setupRoleSwitcher() {
  // Quick role buttons in header
  document.querySelectorAll('.role-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const targetRole = chip.dataset.role;
      if (targetRole) {
        hospitalAudio.playClick();
        setRole(targetRole);
      }
    });
  });

  // Modal Login triggers
  const loginModalBtn = document.getElementById('open-login-modal');
  const modalOverlay = document.getElementById('login-modal-overlay');
  const modalClose = document.getElementById('close-login-modal');

  if (loginModalBtn && modalOverlay) {
    loginModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('hidden');
    });
  }

  if (modalClose && modalOverlay) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.add('hidden');
    });
  }

  // Quick Demo Login Cards inside Modal
  document.querySelectorAll('.demo-login-card').forEach(card => {
    card.addEventListener('click', () => {
      const selectedRole = card.dataset.role;
      if (selectedRole) {
        hospitalAudio.playHospitalChime();
        setRole(selectedRole);
        if (modalOverlay) modalOverlay.classList.add('hidden');
      }
    });
  });
}

function setRole(role) {
  appState.activeRole = role;

  // Update header chips
  document.querySelectorAll('.role-chip').forEach(c => {
    c.classList.remove('active-patient', 'active-staff', 'active-admin');
    if (c.dataset.role === role) {
      c.classList.add(`active-${role}`);
    }
  });

  renderRoleLayout(role);

  const roleNames = {
    patient: appState.lang === 'hi' ? 'मरीज़ पोर्टल (Ramesh Kumar)' : 'Patient Portal (Ramesh Kumar)',
    staff: appState.lang === 'hi' ? 'स्टाफ कंसोल (Dr. Priya Nair)' : 'Staff Console (Dr. Priya Nair)',
    admin: appState.lang === 'hi' ? 'अस्पताल प्रशासन (Medical Superintendent)' : 'Hospital Administration (Medical Superintendent)'
  };
  showToast(`Switched Role: ${roleNames[role]}`);
}

function renderRoleLayout(role) {
  // Hide all role layout containers
  document.getElementById('patient-role-view')?.classList.add('hidden');
  document.getElementById('staff-role-view')?.classList.add('hidden');
  document.getElementById('admin-role-view')?.classList.add('hidden');

  // Reveal active role
  const target = document.getElementById(`${role}-role-view`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('fade-in');
  }

  // Update Bottom Dock options relevant to the role
  updateDockForRole(role);
}

function updateDockForRole(role) {
  const dock = document.querySelector('.horizontal-dock');
  if (!dock) return;

  if (role === 'patient') {
    dock.innerHTML = `
      <button class="dock-pill-btn active" data-tab="journey" data-tooltip="View your personalized live hospital step-by-step timeline">
        <span>📍 My Journey</span>
      </button>
      <button class="dock-pill-btn" data-tab="anatomy" data-tooltip="Interactive body symptom locator & department guidance">
        <span>🫀 Body Symptoms</span>
      </button>
      <button class="dock-pill-btn" data-tab="map" data-tooltip="2D/3D indoor hospital floor navigation & route tracer">
        <span>🗺️ Hospital Map</span>
      </button>
      <button class="dock-pill-btn" data-tab="grievance" data-tooltip="Anonymous AI grievance reporting with trackable resolution">
        <span>📢 Grievance Help</span>
      </button>
    `;
  } else if (role === 'staff') {
    dock.innerHTML = `
      <button class="dock-pill-btn active" data-tab="staff_queue" data-tooltip="Current OPD room queue and patient caller">
        <span>👨‍⚕️ OPD Queue</span>
      </button>
      <button class="dock-pill-btn" data-tab="lab_pharm" data-tooltip="Verify lab test readiness and sign off prescription dispense">
        <span>🧪 Lab & Pharmacy</span>
      </button>
      <button class="dock-pill-btn" data-tab="map" data-tooltip="Locate hospital diagnostic wings and bed bays">
        <span>🗺️ Hospital Map</span>
      </button>
    `;
  } else {
    // Admin
    dock.innerHTML = `
      <button class="dock-pill-btn active" data-tab="admin_hub" data-tooltip="Hospital-wide operational capacity and footfall telemetry">
        <span>📊 Master Ops</span>
      </button>
      <button class="dock-pill-btn" data-tab="quota_flex" data-tooltip="Dynamic balancing of online appointments vs offline walk-ins">
        <span>⚖️ Seat Balancer</span>
      </button>
      <button class="dock-pill-btn" data-tab="admin_grievance" data-tooltip="AI-classified patient grievances with SLA timers">
        <span>🎯 Resolution Tasks</span>
      </button>
      <button class="dock-pill-btn" data-tab="map" data-tooltip="Hospital architectural layout and surge capacity">
        <span>🗺️ Hospital Map</span>
      </button>
    `;
  }

  setupBottomDock();
}

function setupBottomDock() {
  document.querySelectorAll('.dock-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      hospitalAudio.playClick();
      document.querySelectorAll('.dock-pill-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const tab = btn.dataset.tab;
      handleDockTabSwitch(tab);
    });
  });
}

function handleDockTabSwitch(tab) {
  // If navigating to anatomy, scroll smoothly to anatomy section
  if (tab === 'anatomy') {
    document.getElementById('patient-anatomy-section')?.scrollIntoView({ behavior: 'smooth' });
  } else if (tab === 'map') {
    document.getElementById('hospital-map-section')?.scrollIntoView({ behavior: 'smooth' });
  } else if (tab === 'grievance' || tab === 'admin_grievance') {
    document.getElementById('grievance-section')?.scrollIntoView({ behavior: 'smooth' });
  } else if (tab === 'quota_flex') {
    document.getElementById('quota-balancer-section')?.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ==========================================================================
// 7. "One Patient, One Journey" Interactive Flow
// ==========================================================================
function setupPatientJourneyInteractions() {
  // Timeline Step Nodes Click
  document.querySelectorAll('.journey-step-node').forEach(node => {
    node.addEventListener('click', () => {
      hospitalAudio.playClick();
      const stepIndex = parseInt(node.dataset.step, 10);
      showStepDetails(stepIndex);
    });
  });

  // WhatsApp / SMS Share Token Button
  const shareBtn = document.getElementById('share-token-whatsapp');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      hospitalAudio.playClick();
      const msg = `NexusCare India: Your OPD Token ${appState.patient.tokenNumber} for Cardiology is confirmed at Room 204. Live queue status: https://nexuscare.gov.in/track?id=${appState.patient.tokenNumber}`;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(msg);
      }
      showToast('📲 Token details copied for WhatsApp / SMS sharing!');
    });
  }
}

function showStepDetails(step) {
  const stepsData = {
    1: { title: 'Step 1: Hospital Main Gate & Security Entry', desc: 'Screening nominal. Divyangjan wheelchair ramp active at Gate 1.' },
    2: { title: 'Step 2: ABHA Health Card Verified', desc: 'Ayushman Bharat PMJAY verified. Electronic medical record synchronized.' },
    3: { title: 'Step 3: Cardiology OPD Consultation (Room 204)', desc: 'Current: Dr. Priya Nair. 2 patients ahead. Est wait: ~9 minutes.' },
    4: { title: 'Step 4: Diagnostic Laboratory (Floor 1, Lab 3)', desc: 'CBC blood sample processed. Report uploaded to digital vault.' },
    5: { title: 'Step 5: Central Pharmacy Dispense (Counter 2)', desc: 'Generic medicines packed under PM Bharatiya Janaushadhi Pariyojana.' },
    6: { title: 'Step 6: Discharge & Feedback', desc: 'Prescription QR generated. Digital follow-up scheduled for 14 days.' }
  };

  const data = stepsData[step];
  if (data) {
    showToast(`ℹ️ ${data.title}: ${data.desc}`);
  }
}

// ==========================================================================
// 8. Staff Console & Doctor OPD Desk
// ==========================================================================
function setupStaffConsole() {
  const callNextBtn = document.getElementById('btn-call-next-patient');
  if (callNextBtn) {
    callNextBtn.addEventListener('click', () => {
      callNextPatientByDoctor();
    });
  }

  // Quick action: Convert Offline Seat to Online
  const flexSeatBtn = document.getElementById('btn-flex-offline-seat');
  if (flexSeatBtn) {
    flexSeatBtn.addEventListener('click', () => {
      hospitalAudio.playClick();
      showToast('🔄 1 Unused Offline Walk-in slot released to Online Waiting Pool.');
    });
  }
}

function callNextPatientByDoctor() {
  hospitalAudio.playHospitalChime();

  if (appState.staff.queue.length > 0) {
    const nextPatient = appState.staff.queue.shift();
    appState.staff.currentServing = nextPatient.id;

    // Update Staff UI
    const servingIdEl = document.getElementById('staff-current-serving-id');
    if (servingIdEl) servingIdEl.textContent = nextPatient.id;

    const servingNameEl = document.getElementById('staff-current-serving-name');
    if (servingNameEl) servingNameEl.textContent = `${nextPatient.name} (${nextPatient.type})`;

    renderStaffQueueTable();

    // Voice announcement in English & Hindi
    const enText = `Attention: Token ${nextPatient.id}, ${nextPatient.name}, please proceed to Consultation Room 204.`;
    const hiText = `कृपया ध्यान दें: टोकन नंबर ${nextPatient.id}, श्री ${nextPatient.name}, परामर्श कमरा नंबर 204 में पधारें।`;
    hospitalAudio.speakAnnouncement(enText, hiText);

    showToast(`📢 Called Token: ${nextPatient.id} (${nextPatient.name})`);
  } else {
    showToast('All queued patients for this OPD session have been attended!');
  }
}

function renderStaffQueueTable() {
  const tbody = document.getElementById('staff-queue-tbody');
  if (!tbody) return;

  tbody.innerHTML = '';
  appState.staff.queue.forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong style="color: var(--teal-700); font-family: var(--font-mono);">${p.id}</strong></td>
      <td>${p.name}</td>
      <td><span class="badge" style="background: var(--saffron-100); color: var(--saffron-700); font-size:0.75rem;">${p.type}</span></td>
      <td>${p.wait}</td>
      <td><button class="action-btn" onclick="showToast('Calling ${p.name} priority flag...')">Fast-Track</button></td>
    `;
    tbody.appendChild(tr);
  });
}

// ==========================================================================
// 9. Admin Operations Center & Dynamic Quota Balancer
// ==========================================================================
function setupAdminConsole() {
  // Quota Balancer Slider (Online vs Walk-in)
  const quotaSlider = document.getElementById('quota-flex-range');
  const onlineChunk = document.getElementById('slider-chunk-online');
  const offlineChunk = document.getElementById('slider-chunk-offline');
  const onlineLabel = document.getElementById('quota-online-val');
  const offlineLabel = document.getElementById('quota-offline-val');

  if (quotaSlider && onlineChunk && offlineChunk) {
    quotaSlider.addEventListener('input', (e) => {
      const onlineVal = parseInt(e.target.value, 10);
      const offlineVal = 100 - onlineVal;

      appState.admin.onlineQuotaPercent = onlineVal;
      onlineChunk.style.width = `${onlineVal}%`;
      offlineChunk.style.width = `${offlineVal}%`;

      onlineChunk.textContent = `${onlineVal}% Online`;
      offlineChunk.textContent = `${offlineVal}% Walk-in`;

      if (onlineLabel) onlineLabel.textContent = `${onlineVal}% (${Math.round(onlineVal * 8.5)} slots)`;
      if (offlineLabel) offlineLabel.textContent = `${offlineVal}% (${Math.round(offlineVal * 8.5)} slots)`;
    });
  }

  // Surge Trigger button
  const surgeBtn = document.getElementById('btn-trigger-surge');
  if (surgeBtn) {
    surgeBtn.addEventListener('click', () => {
      hospitalAudio.playHospitalChime();
      showToast('⚠️ CODE ORANGE: Emergency Surge Protocol Activated. 12 Step-down beds re-allocated to Trauma.');
    });
  }
}

// ==========================================================================
// 10. Virtual Human Anatomy & Indian Symptom Triage
// ==========================================================================
function setupAnatomyModel() {
  document.querySelectorAll('.body-zone-interactive').forEach(zone => {
    zone.addEventListener('click', () => {
      hospitalAudio.playClick();
      const zoneId = zone.dataset.zone;
      selectAnatomyZone(zoneId);
    });
  });

  // Pain range slider
  const painRange = document.getElementById('patient-pain-slider');
  const painValDisplay = document.getElementById('patient-pain-val-display');

  if (painRange && painValDisplay) {
    painRange.addEventListener('input', (e) => {
      const val = parseInt(e.target.value, 10);
      painValDisplay.textContent = `${val}/10`;
      recalculateTriageTier(val);
    });
  }
}

function selectAnatomyZone(zoneId) {
  document.querySelectorAll('.body-zone-interactive').forEach(z => z.classList.remove('active-selected'));
  const activeZone = document.querySelector(`[data-zone="${zoneId}"]`);
  if (activeZone) activeZone.classList.add('active-selected');

  const zoneDirectory = {
    head: {
      name: 'Head & Brain (सिर एवं न्यूरोलॉजी)',
      dept: 'Neurology OPD (Room 304)',
      wait: '12 mins',
      doctor: 'Dr. Rajesh Sharma',
      symptoms: ['Throbbing migraine', 'Dizziness / चक्कर आना', 'Sudden blurred vision']
    },
    throat: {
      name: 'Throat & ENT (गला एवं कान-नाक)',
      dept: 'ENT Clinic (Room 112)',
      wait: '8 mins',
      doctor: 'Dr. Sunita Rao',
      symptoms: ['Severe sore throat / खराश', 'Difficulty swallowing', 'Ear pain']
    },
    chest: {
      name: 'Chest & Heart (छाती एवं हृदय)',
      dept: 'Cardiology & CCU (Room 204)',
      wait: 'Immediate / 2 mins',
      doctor: 'Dr. Priya Nair',
      symptoms: ['Chest pressure / सीने में भारीपन', 'Shortness of breath / सांस फूलना', 'Arm numbness']
    },
    abdomen: {
      name: 'Abdomen & Digestive (पेट एवं पाचन)',
      dept: 'Gastroenterology (Room 108)',
      wait: '14 mins',
      doctor: 'Dr. Amit Patel',
      symptoms: ['Severe right quadrant pain', 'Acid reflux / गैस', 'Nausea / उल्टी']
    },
    spine: {
      name: 'Spine & Lower Back (रीढ़ की हड्डी एवं कमर दर्द)',
      dept: 'Orthopedics & Spine (Room 106)',
      wait: '16 mins',
      doctor: 'Dr. Sandeep Goel',
      symptoms: ['Lumbar disc pain', 'Sciatica radiating to legs', 'Morning stiffness']
    },
    knees: {
      name: 'Knees & Joints (घुटने एवं जोड़ दर्द)',
      dept: 'Orthopedics & Rheumatology (Room 104)',
      wait: '15 mins',
      doctor: 'Dr. Sandeep Goel',
      symptoms: ['Knee swelling / सूजन', 'Joint crepitus', 'Unable to bear weight']
    }
  };

  const selected = zoneDirectory[zoneId] || zoneDirectory.chest;

  const titleEl = document.getElementById('selected-zone-name');
  if (titleEl) titleEl.textContent = selected.name;

  const deptEl = document.getElementById('triage-recommended-dept');
  if (deptEl) deptEl.textContent = selected.dept;

  const docEl = document.getElementById('triage-on-duty-doc');
  if (docEl) docEl.textContent = selected.doctor;

  const waitEl = document.getElementById('triage-est-wait');
  if (waitEl) waitEl.textContent = selected.wait;

  // Symptom pills
  const pillsContainer = document.getElementById('zone-symptoms-chips');
  if (pillsContainer) {
    pillsContainer.innerHTML = '';
    selected.symptoms.forEach(sym => {
      const chip = document.createElement('span');
      chip.className = 'badge';
      chip.style.cssText = 'background: var(--teal-50); color: var(--teal-800); border: 1px solid var(--teal-200); padding: 4px 10px; border-radius: 99px; font-size: 0.8rem;';
      chip.textContent = sym;
      pillsContainer.appendChild(chip);
    });
  }
}

function recalculateTriageTier(painVal) {
  const badge = document.getElementById('triage-severity-badge');
  if (!badge) return;

  if (painVal >= 8) {
    badge.textContent = '🚨 Level 1: Emergent Urgent (तत्काल)';
    badge.style.background = 'var(--rose-100)';
    badge.style.color = 'var(--rose-700)';
    badge.style.borderColor = 'var(--rose-500)';
  } else if (painVal >= 5) {
    badge.textContent = '⚡ Level 2: Priority Clinical Care';
    badge.style.background = 'var(--saffron-100)';
    badge.style.color = 'var(--saffron-700)';
    badge.style.borderColor = 'var(--saffron-400)';
  } else {
    badge.textContent = '🟢 Level 3: Routine OPD';
    badge.style.background = 'var(--mint-100)';
    badge.style.color = 'var(--mint-600)';
    badge.style.borderColor = 'var(--mint-500)';
  }
}

// ==========================================================================
// 11. Interactive 2D & Isometric 3D Hospital Map
// ==========================================================================
function setupHospitalMap() {
  const toggle3DBtn = document.getElementById('btn-toggle-3d-map');
  const mapSvg = document.getElementById('hospital-floor-svg');

  if (toggle3DBtn && mapSvg) {
    toggle3DBtn.addEventListener('click', () => {
      hospitalAudio.playClick();
      appState.map3DMode = !appState.map3DMode;

      if (appState.map3DMode) {
        mapSvg.style.transform = 'perspective(900px) rotateX(25deg) rotateZ(-6deg) scale(0.92)';
        mapSvg.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        toggle3DBtn.textContent = 'View in Flat 2D';
      } else {
        mapSvg.style.transform = 'none';
        toggle3DBtn.textContent = 'View in Isometric 3D';
      }
      showToast(appState.map3DMode ? 'Switched to Isometric 3D Perspective' : 'Switched to Architectural 2D Plan');
    });
  }

  // Floor selector pills
  document.querySelectorAll('.map-floor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      hospitalAudio.playClick();
      document.querySelectorAll('.map-floor-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const floor = parseInt(btn.dataset.floor, 10);
      appState.mapFloor = floor;
      renderMapFloor(floor);
    });
  });

  renderMapFloor(2);
}

function renderMapFloor(floor) {
  const container = document.getElementById('hospital-floor-svg-wrap');
  if (!container) return;

  const floorTitles = {
    1: 'Floor 1: Main Entrance, Emergency Trauma, Central Pharmacy & Diagnostics',
    2: 'Floor 2: Cardiology Suite, Cath Lab & Daycare Wards',
    3: 'Floor 3: Intensive Care Units (ICU), Neurology & Nephrology',
    4: 'Floor 4: Inpatient Private Suites, Pediatric Wing & Cafeteria'
  };

  const titleEl = document.getElementById('map-floor-subtitle');
  if (titleEl) titleEl.textContent = floorTitles[floor] || `Floor ${floor}`;

  // Rooms and animated path
  container.innerHTML = `
    <svg id="hospital-floor-svg" class="map-svg-container" viewBox="0 0 600 440">
      <!-- Corridors -->
      <rect x="60" y="210" width="480" height="50" class="map-corridor"/>
      <rect x="270" y="50" width="60" height="340" class="map-corridor"/>

      <!-- Lift / Stairs Core -->
      <rect x="270" y="210" width="60" height="50" fill="#cbd5e1" stroke="#94a3b8"/>
      <text x="300" y="240" font-size="11" fill="#475569" font-weight="700" text-anchor="middle">LIFT B</text>

      <!-- Rooms -->
      <rect class="map-room-tile ${floor === 2 ? 'target-destination' : ''}" x="60" y="70" width="160" height="110" rx="12" onclick="onMapRoomClick('Cardiology Room 204')"/>
      <text x="140" y="125" font-size="13" font-weight="800" fill="#0f766e" text-anchor="middle">Cardiology 204</text>
      <text x="140" y="145" font-size="10" fill="#64748b" text-anchor="middle">Dr. Priya Nair</text>

      <rect class="map-room-tile" x="380" y="70" width="160" height="110" rx="12" onclick="onMapRoomClick('Diagnostic Lab 3')"/>
      <text x="460" y="125" font-size="13" font-weight="800" fill="#1e40af" text-anchor="middle">Diagnostic Lab 3</text>
      <text x="460" y="145" font-size="10" fill="#64748b" text-anchor="middle">Blood / ECG Tests</text>

      <rect class="map-room-tile" x="60" y="290" width="160" height="110" rx="12" onclick="onMapRoomClick('Central Pharmacy Counter 2')"/>
      <text x="140" y="345" font-size="13" font-weight="800" fill="#059669" text-anchor="middle">Pharmacy C-2</text>
      <text x="140" y="365" font-size="10" fill="#64748b" text-anchor="middle">Janaushadhi Kendra</text>

      <rect class="map-room-tile" x="380" y="290" width="160" height="110" rx="12" onclick="onMapRoomClick('Emergency Triage Bay')"/>
      <text x="460" y="345" font-size="13" font-weight="800" fill="#be123c" text-anchor="middle">Emergency Bay</text>
      <text x="460" y="365" font-size="10" fill="#64748b" text-anchor="middle">Red Trauma Zone</text>

      <!-- Active Animated Glowing Route Tracer -->
      <path class="map-route-tracer" d="M 300 235 L 300 125 L 220 125"/>
      <circle cx="220" cy="125" r="7" fill="#f59e0b"/>
      <circle cx="300" cy="235" r="6" fill="#0d9488"/>
    </svg>
  `;
}

window.onMapRoomClick = function(roomName) {
  hospitalAudio.playClick();
  showToast(`📍 Selected: ${roomName}. Wheelchair route available via Lift B.`);
};

// ==========================================================================
// 12. Voice-First Multilingual Assistant ("NexusCare आवाज़ सहायक")
// ==========================================================================
function setupVoiceAssistant() {
  const micBtn = document.getElementById('floating-voice-mic');
  if (micBtn) {
    micBtn.addEventListener('click', () => {
      toggleVoiceAssistant();
    });
  }
}

function toggleVoiceAssistant() {
  const micBtn = document.getElementById('floating-voice-mic');
  const hintEl = document.getElementById('voice-hint-text');

  hospitalAudio.playHospitalChime();
  appState.voiceListening = !appState.voiceListening;

  if (appState.voiceListening) {
    if (micBtn) micBtn.classList.add('listening');
    if (hintEl) hintEl.textContent = I18N[appState.lang].voice_listening;

    // Simulate voice query processing
    setTimeout(() => {
      if (appState.voiceListening) {
        handleVoiceQuerySimulated();
      }
    }, 2800);
  } else {
    if (micBtn) micBtn.classList.remove('listening');
    if (hintEl) hintEl.textContent = I18N[appState.lang].voice_hint;
  }
}

function handleVoiceQuerySimulated() {
  const micBtn = document.getElementById('floating-voice-mic');
  const hintEl = document.getElementById('voice-hint-text');

  if (micBtn) micBtn.classList.remove('listening');
  appState.voiceListening = false;

  const enVoice = `Hello Ramesh ji. Your token is AIIMS-CARD-104. There are 2 patients ahead of you. Please proceed to Consultation Room 204 on Floor 2.`;
  const hiVoice = `नमस्ते रमेश जी। आपका टोकन AIIMS-CARD-104 है। आपसे आगे केवल 2 मरीज हैं। कृपया दूसरी मंजिल पर कमरा नंबर 204 में पहुंचें।`;

  hospitalAudio.speakAnnouncement(enVoice, hiVoice);

  if (hintEl) {
    hintEl.textContent = appState.lang === 'hi' ? 'कमरा 204 की ओर जाएं' : 'Proceed to Room 204';
  }
  showToast(appState.lang === 'hi' ? '🎙️ आवाज़ सहायक: कमरा 204 में 2 मरीज आगे हैं' : '🎙️ Voice Assistant: Room 204 (2 patients ahead)');
}

// ==========================================================================
// 13. AI Grievance & Service Recovery System
// ==========================================================================
function setupGrievanceModule() {
  const form = document.getElementById('anonymous-grievance-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      hospitalAudio.playClick();

      const descInput = document.getElementById('grievance-desc-input');
      const locationInput = document.getElementById('grievance-location-input');

      const desc = descInput ? descInput.value.trim() : 'Sanitation issue';
      const loc = locationInput ? locationInput.value.trim() : 'Floor 2';

      // Create new trackable task with AI categorization
      const newTask = {
        id: `GR-${Math.floor(Math.random() * 800 + 100)}`,
        category: 'Patient Care & Amenities',
        desc: desc || 'Facility hygiene improvement required',
        room: loc || 'OPD Waiting Wing',
        sla: '15 min SLA',
        priority: 'High',
        status: 'Dispatched to Duty Manager'
      };

      appState.admin.activeGrievances.unshift(newTask);
      renderGrievanceBoard();

      if (descInput) descInput.value = '';
      if (locationInput) locationInput.value = '';

      showToast(`✅ Anonymous Grievance logged! Ticket ${newTask.id} assigned to Floor Supervisor with 15-min SLA.`);
    });
  }

  renderGrievanceBoard();
}

function renderGrievanceBoard() {
  const grid = document.getElementById('grievance-tasks-grid');
  if (!grid) return;

  grid.innerHTML = '';
  appState.admin.activeGrievances.forEach(t => {
    const card = document.createElement('div');
    card.className = `grievance-task-card ${t.priority === 'Urgent' ? '' : 'sla-amber'}`;
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span style="font-family: var(--font-mono); font-weight: 700; color: var(--teal-800);">${t.id}</span>
        <span class="badge" style="background: var(--rose-100); color: var(--rose-700); font-size: 0.72rem; padding: 2px 8px; border-radius: 99px;">
          ⏱️ ${t.sla}
        </span>
      </div>
      <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-main);">${t.desc}</div>
      <div style="font-size: 0.78rem; color: var(--text-light);">📍 Location: ${t.room}</div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.4rem; padding-top: 0.4rem; border-top: 1px dashed var(--border-light);">
        <span style="font-size: 0.75rem; color: var(--teal-600); font-weight: 600;">● ${t.status}</span>
        <button class="action-btn" onclick="resolveGrievance('${t.id}')">Resolve Task</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

window.resolveGrievance = function(taskId) {
  hospitalAudio.playClick();
  appState.admin.activeGrievances = appState.admin.activeGrievances.filter(t => t.id !== taskId);
  renderGrievanceBoard();
  showToast(`🎉 Task ${taskId} marked RESOLVED by Floor Staff.`);
};

// ==========================================================================
// 14. Emergency Code Red Section
// ==========================================================================
function setupEmergencyCodeRed() {
  const emergencyBtn = document.getElementById('btn-header-emergency');
  if (emergencyBtn) {
    emergencyBtn.addEventListener('click', () => {
      hospitalAudio.playHospitalChime();
      const modal = document.getElementById('emergency-action-modal');
      if (modal) modal.classList.remove('hidden');
    });
  }

  const closeEmergency = document.getElementById('close-emergency-modal');
  if (closeEmergency) {
    closeEmergency.addEventListener('click', () => {
      document.getElementById('emergency-action-modal')?.classList.add('hidden');
    });
  }
}

// ==========================================================================
// 15. Long-Hover Descriptions Tooltip Engine
// ==========================================================================
function setupLongHoverTooltips() {
  // Built into CSS [data-tooltip] selector with 600ms long-hover transition!
}

// ==========================================================================
// 16. Toast Notification Helper
// ==========================================================================
function showToast(message) {
  const container = document.getElementById('toast-wrapper');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span style="color: var(--teal-600); font-size: 1.1rem;">●</span>
    <span style="flex: 1; font-weight: 500;">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

window.showToast = showToast;
