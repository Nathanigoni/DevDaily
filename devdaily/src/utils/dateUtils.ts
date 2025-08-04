// src/utils/dateUtils.ts
export function getToday() {
  return new Date().toLocaleDateString();
}

export function getStreak(entries: { date: string }[]): number {
  const dates = entries.map((e) => new Date(e.date)).sort((a, b) => b.getTime() - a.getTime());

  let streak = 0;
  let day = new Date();

  for (const d of dates) {
    const diff = (day.getTime() - d.getTime()) / (1000 * 3600 * 24);
    if (diff < 1.5) {
      streak++;
      day.setDate(day.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

export function getMostUsedTag(entries: { tags: string[] }[]): string {
  const tagCount: Record<string, number> = {};

  for (const entry of entries) {
    entry.tags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  }

  const top = Object.entries(tagCount).sort((a, b) => b[1] - a[1])[0];
  return top ? top[0] : '';
}
