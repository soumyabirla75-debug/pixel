import { LiveRoom } from '../../client/liveroom.js';
import { attachDevTools } from './devtools.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  let roomId = params.get('room') || 'room-' + Math.random().toString(36).substring(2, 9);
  if (!params.get('room')) {
    const u = new URL(window.location.href);
    u.searchParams.set('room', roomId);
    window.history.replaceState({}, '', u);
  }

  const room = LiveRoom.join(roomId);
  room.cursors(true);
  attachDevTools(room);

  const statusPill = document.getElementById('status-pill');
  const statusText = document.getElementById('status-text');
  const roomDisplay = document.getElementById('room-id-display');
  const presenceList = document.getElementById('presence-list');
  const userCount = document.getElementById('user-count');
  const copyLinkBtn = document.getElementById('btn-copy-link');
  const newRoomBtn = document.getElementById('btn-new-room');
  const qrImg = document.getElementById('qr-code-img');
  const sharedTextInput = document.getElementById('shared-text');
  const sharedCounterValue = document.getElementById('counter-val');
  const btnInc = document.getElementById('btn-inc');
  const btnDec = document.getElementById('btn-dec');
  const btnUndo = document.getElementById('btn-undo');
  const btnRedo = document.getElementById('btn-redo');
  const chaosBtn = document.getElementById('btn-chaos-test');

  roomDisplay.textContent = room.id;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(room.link())}&bgcolor=0f172a&color=f8fafc`;

  copyLinkBtn.onclick = async () => {
    await navigator.clipboard.writeText(room.link());
    copyLinkBtn.textContent = '✓ Copied!';
    setTimeout(() => copyLinkBtn.textContent = '🔗 Copy Link', 2000);
  };

  newRoomBtn.onclick = () => window.location.search = `?room=room-${Math.random().toString(36).substring(2, 9)}`;

  room.on('status', s => {
    statusPill.className = `status-pill ${s}`;
    statusText.textContent = s;
  });

  room.on('presence', users => {
    userCount.textContent = `${users.length} Online`;
    presenceList.innerHTML = '';
    users.forEach(u => {
      const av = document.createElement('div');
      av.className = 'avatar-circle';
      av.style.background = u.color || '#6366f1';
      av.textContent = (u.name || 'U')[0].toUpperCase();
      presenceList.appendChild(av);
    });
  });

  room.on('state', (key, val) => {
    if (key === 'counter') sharedCounterValue.textContent = val ?? 0;
    if (key === 'notes' && document.activeElement !== sharedTextInput) sharedTextInput.value = val ?? '';
  });

  btnInc.onclick = () => room.set('counter', (room.get('counter') || 0) + 1);
  btnDec.onclick = () => room.set('counter', (room.get('counter') || 0) - 1);
  btnUndo.onclick = () => room.undo();
  btnRedo.onclick = () => room.redo();

  sharedTextInput.oninput = (e) => room.set('notes', e.target.value);

  chaosBtn.onclick = async () => {
    chaosBtn.disabled = true;
    chaosBtn.textContent = 'Offline 4s...';
    await room.simulateDisconnect(4000);
    chaosBtn.disabled = false;
    chaosBtn.textContent = '⚡ Chaos: Drop 4s';
  };

  document.querySelectorAll('.react-btn').forEach(btn => {
    btn.onclick = () => room.react(btn.getAttribute('data-emoji'), { x: 0.5, y: 0.5 });
  });
});
