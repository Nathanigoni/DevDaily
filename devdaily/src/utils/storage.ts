// src/utils/storage.ts

export function loadLogs() {
  const logs = localStorage.getItem('logs');
  return logs ? JSON.parse(logs) : [];
}

export function saveLogs(logs: any[]) {
  localStorage.setItem('logs', JSON.stringify(logs));
}
