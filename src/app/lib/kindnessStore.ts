// ─── Kindness Journey State ────────────────────────────────────────────────
// Persists user progress in localStorage across page navigation.

export interface KindnessState {
  score: number;               // 0–100
  completedScenarios: string[]; // IDs of completed scenarios
  wallMessages: string[];       // User-submitted anonymous notes
}

const STORAGE_KEY = "kindness-journey-v1";

const DEFAULTS: KindnessState = {
  score: 0,
  completedScenarios: [],
  wallMessages: [],
};

// ── Read current state ───────────────────────────────────────────────────────
export function loadState(): KindnessState {
  if (typeof window === "undefined") return { ...DEFAULTS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULTS };
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULTS };
  }
}

// ── Write state ──────────────────────────────────────────────────────────────
export function saveState(patch: Partial<KindnessState>): KindnessState {
  if (typeof window === "undefined") return { ...DEFAULTS };
  const current = loadState();
  const next: KindnessState = {
    ...current,
    ...patch,
    score: Math.min(100, Math.max(0, patch.score ?? current.score)),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    // Notify same-tab listeners (storage event only fires cross-tab)
    window.dispatchEvent(new CustomEvent("kindness-update"));
  } catch {
    // Ignore storage errors (e.g. private browsing with full storage)
  }
  return next;
}

// ── Convenience helpers ──────────────────────────────────────────────────────
export function addPoints(points: number): KindnessState {
  const current = loadState();
  return saveState({ score: current.score + points });
}

export function completeScenario(scenarioId: string): KindnessState {
  const current = loadState();
  if (current.completedScenarios.includes(scenarioId)) return current;
  return saveState({
    completedScenarios: [...current.completedScenarios, scenarioId],
  });
}

export function addWallMessage(message: string): KindnessState {
  const current = loadState();
  return saveState({
    wallMessages: [message.trim(), ...current.wallMessages].slice(0, 50),
  });
}

export function resetState(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("kindness-update"));
  } catch {
    // ignore
  }
}
