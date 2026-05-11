// ─── Scenario & Category Data ─────────────────────────────────────────────

export type CategoryId = "others" | "yourself" | "online" | "silent" | "difficult";

export type ChoiceEmotion = "warm" | "gentle" | "neutral" | "reflective";

export interface Choice {
  id: string;
  text: string;
  feedback: string;
  emotion: ChoiceEmotion;
  points: number;
}

export interface Scenario {
  id: string;
  category: CategoryId;
  situation: string;
  choices: Choice[];
}

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
  emoji: string;
  color: string;
  glow: string;
  bg: string;
}

// ── Category definitions ─────────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  {
    id: "others",
    title: "Kindness to Others",
    subtitle: "The people around you",
    emoji: "🌻",
    color: "#c4943d",
    glow: "rgba(196, 148, 61, 0.32)",
    bg: "linear-gradient(145deg, #fffaee 0%, #fef3c7 100%)",
  },
  {
    id: "yourself",
    title: "Kindness to Yourself",
    subtitle: "The voice inside",
    emoji: "🌸",
    color: "#b56a7a",
    glow: "rgba(181, 106, 122, 0.32)",
    bg: "linear-gradient(145deg, #fff7f9 0%, #fce4e8 100%)",
  },
  {
    id: "online",
    title: "Kindness Online",
    subtitle: "Behind the screen",
    emoji: "💙",
    color: "#5a7ea0",
    glow: "rgba(90, 126, 160, 0.32)",
    bg: "linear-gradient(145deg, #f6f9ff 0%, #dbeafe 100%)",
  },
  {
    id: "silent",
    title: "Silent Kindness",
    subtitle: "Words not needed",
    emoji: "🍃",
    color: "#4a9078",
    glow: "rgba(74, 144, 120, 0.32)",
    bg: "linear-gradient(145deg, #f4fdf8 0%, #d1fae5 100%)",
  },
  {
    id: "difficult",
    title: "Difficult Kindness",
    subtitle: "When it's hard to give",
    emoji: "🕊",
    color: "#7a6ab0",
    glow: "rgba(122, 106, 176, 0.32)",
    bg: "linear-gradient(145deg, #f8f6ff 0%, #ede9fe 100%)",
  },
];

// ── Background tint per choice emotion ──────────────────────────────────────
export const EMOTION_TINTS: Record<ChoiceEmotion, string> = {
  warm: "rgba(196, 148, 61, 0.07)",
  gentle: "rgba(74, 144, 120, 0.07)",
  neutral: "rgba(90, 90, 90, 0.03)",
  reflective: "rgba(122, 106, 176, 0.07)",
};

// ── All scenarios (3 per category = 15 total) ────────────────────────────────
export const SCENARIOS: Scenario[] = [

  // ── Kindness to Others ──────────────────────────────────────────────────
  {
    id: "others-1",
    category: "others",
    situation: "You notice someone sitting alone during lunch, looking down at their phone.",
    choices: [
      {
        id: "a",
        text: "Ignore them and sit elsewhere",
        feedback: "It's okay. We don't always have the capacity. Notice how it felt to walk by.",
        emotion: "reflective",
        points: 5,
      },
      {
        id: "b",
        text: "Smile in their direction",
        feedback: "A small, quiet acknowledgment. Sometimes that's enough to remind someone they exist.",
        emotion: "gentle",
        points: 15,
      },
      {
        id: "c",
        text: "Invite them to join your table",
        feedback: "That took courage. You may have just changed someone's whole afternoon.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "d",
        text: "Sit nearby without saying anything",
        feedback: "Presence can be kind too. You chose not to leave them entirely alone.",
        emotion: "gentle",
        points: 18,
      },
    ],
  },
  {
    id: "others-2",
    category: "others",
    situation: "A stranger at a café is short on change for their order. The cashier is waiting.",
    choices: [
      {
        id: "a",
        text: "Say nothing and wait your turn",
        feedback: "You kept the peace. The moment passed quietly.",
        emotion: "neutral",
        points: 3,
      },
      {
        id: "b",
        text: "Offer to cover the difference",
        feedback: "You gave without being asked. That generosity tends to ripple forward.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "c",
        text: "Suggest they pay another way",
        feedback: "A practical thought. You were trying to help in your own way.",
        emotion: "gentle",
        points: 12,
      },
      {
        id: "d",
        text: "Pretend you didn't notice",
        feedback: "Sometimes we disconnect to protect our energy. That's a very human thing.",
        emotion: "reflective",
        points: 4,
      },
    ],
  },
  {
    id: "others-3",
    category: "others",
    situation: "A coworker is visibly overwhelmed before an important meeting.",
    choices: [
      {
        id: "a",
        text: "Don't bring it up — they look busy",
        feedback: "You respected their space. Not every kindness needs to be spoken aloud.",
        emotion: "gentle",
        points: 10,
      },
      {
        id: "b",
        text: "Say quietly, 'Hey — you've got this.'",
        feedback: "Two words can carry more weight than you think. That landed somewhere.",
        emotion: "warm",
        points: 20,
      },
      {
        id: "c",
        text: "Ask if there's anything you can help with",
        feedback: "You showed up fully. That kind of support is rare and long remembered.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "d",
        text: "Make a small joke to lighten the mood",
        feedback: "Humor with care is its own form of kindness. It says: I see you.",
        emotion: "gentle",
        points: 18,
      },
    ],
  },

  // ── Kindness to Yourself ────────────────────────────────────────────────
  {
    id: "yourself-1",
    category: "yourself",
    situation: "You made a mistake at work and you've been replaying it in your mind all evening.",
    choices: [
      {
        id: "a",
        text: "Tell yourself you're so stupid",
        feedback: "That voice isn't protecting you. It's just hurting you. You deserve more from yourself.",
        emotion: "reflective",
        points: 4,
      },
      {
        id: "b",
        text: "Distract yourself and try not to think about it",
        feedback: "Rest is valid. Sometimes stepping away is the kindest thing you can do.",
        emotion: "gentle",
        points: 12,
      },
      {
        id: "c",
        text: "Acknowledge it happened — and forgive yourself",
        feedback: "This is the hardest one. You chose yourself today. That takes real courage.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "d",
        text: "Talk it through with someone you trust",
        feedback: "Sharing is healing. You didn't carry it alone. That matters.",
        emotion: "warm",
        points: 22,
      },
    ],
  },
  {
    id: "yourself-2",
    category: "yourself",
    situation: "You've been running on empty for weeks. Your body keeps asking you to slow down.",
    choices: [
      {
        id: "a",
        text: "Push through. You'll rest when it's done.",
        feedback: "Productivity at the cost of yourself isn't a win. Hear what your body is telling you.",
        emotion: "reflective",
        points: 5,
      },
      {
        id: "b",
        text: "Cancel the plans. Stay in and rest.",
        feedback: "That took courage to choose yourself over obligation. Rest is not failure.",
        emotion: "warm",
        points: 24,
      },
      {
        id: "c",
        text: "Reduce your load, just a little",
        feedback: "A small act of self-mercy. You found the middle ground.",
        emotion: "gentle",
        points: 18,
      },
      {
        id: "d",
        text: "Ask someone for help carrying the weight",
        feedback: "Asking for help is strength. You reached out. That matters so much.",
        emotion: "warm",
        points: 22,
      },
    ],
  },
  {
    id: "yourself-3",
    category: "yourself",
    situation: "Someone complimented you genuinely today, but you immediately deflected it.",
    choices: [
      {
        id: "a",
        text: "Say 'It's nothing, really.'",
        feedback: "You're so used to not taking up space. But you earned that moment.",
        emotion: "reflective",
        points: 6,
      },
      {
        id: "b",
        text: "Say thank you — even if it felt awkward",
        feedback: "Receiving kindness is a skill. You practiced it today.",
        emotion: "warm",
        points: 22,
      },
      {
        id: "c",
        text: "Let yourself sit with the feeling for a second",
        feedback: "Pausing to receive is an act of self-kindness. You noticed.",
        emotion: "gentle",
        points: 20,
      },
      {
        id: "d",
        text: "Say 'Thank you, that really means a lot.'",
        feedback: "You accepted it fully. No apology, no deflection. Just — thank you.",
        emotion: "warm",
        points: 25,
      },
    ],
  },

  // ── Kindness Online ──────────────────────────────────────────────────────
  {
    id: "online-1",
    category: "online",
    situation: "Someone you follow posts something deeply personal and vulnerable on social media.",
    choices: [
      {
        id: "a",
        text: "Scroll past without responding",
        feedback: "You're not obligated to respond. But they were brave to share that.",
        emotion: "neutral",
        points: 4,
      },
      {
        id: "b",
        text: "Leave a heart emoji",
        feedback: "A small signal: I see you. Sometimes that's exactly the right response.",
        emotion: "gentle",
        points: 15,
      },
      {
        id: "c",
        text: "Write a genuine, thoughtful comment",
        feedback: "You paused to be truly present with them. That kind of attention is rare online.",
        emotion: "warm",
        points: 24,
      },
      {
        id: "d",
        text: "Send them a private message",
        feedback: "You moved the conversation somewhere warmer. That took real intention.",
        emotion: "warm",
        points: 25,
      },
    ],
  },
  {
    id: "online-2",
    category: "online",
    situation: "A stranger is being unfairly criticized in a comment section you're reading.",
    choices: [
      {
        id: "a",
        text: "Scroll past — it's not your fight",
        feedback: "Sometimes bystanders choose their battles. That's a real and valid choice.",
        emotion: "neutral",
        points: 3,
      },
      {
        id: "b",
        text: "Like the comments defending them",
        feedback: "Quiet support still matters. You added weight to the right side.",
        emotion: "gentle",
        points: 15,
      },
      {
        id: "c",
        text: "Write a calm, kind response defending them",
        feedback: "You stepped in. That takes something most people don't bring online.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "d",
        text: "Report the harmful comment",
        feedback: "You used the system to protect someone. That's a quiet but real act of care.",
        emotion: "warm",
        points: 20,
      },
    ],
  },
  {
    id: "online-3",
    category: "online",
    situation: "You disagree with something a friend posted online — and it's bothering you.",
    choices: [
      {
        id: "a",
        text: "Post a sharp counter-argument publicly",
        feedback: "You had every right to your view. Consider: was that the kindest way to share it?",
        emotion: "reflective",
        points: 3,
      },
      {
        id: "b",
        text: "Message them privately with your thoughts",
        feedback: "You chose the quiet conversation over the public stage. That's care.",
        emotion: "warm",
        points: 22,
      },
      {
        id: "c",
        text: "Say nothing this time",
        feedback: "Restraint is its own kind of wisdom. Not every thought needs a platform.",
        emotion: "gentle",
        points: 14,
      },
      {
        id: "d",
        text: "Ask a curious question instead of arguing",
        feedback: "You approached it with curiosity instead of combat. That's rare and beautiful.",
        emotion: "warm",
        points: 25,
      },
    ],
  },

  // ── Silent Kindness ──────────────────────────────────────────────────────
  {
    id: "silent-1",
    category: "silent",
    situation: "An elderly person is struggling with heavy bags at the grocery store exit.",
    choices: [
      {
        id: "a",
        text: "Walk past — they might feel embarrassed",
        feedback: "You were considerate in your restraint. But sometimes people just need hands.",
        emotion: "reflective",
        points: 8,
      },
      {
        id: "b",
        text: "Slow down and make gentle eye contact",
        feedback: "An invitation without an imposition. You gave them the choice to ask.",
        emotion: "gentle",
        points: 16,
      },
      {
        id: "c",
        text: "Quietly offer to carry one of the bags",
        feedback: "You just made someone's walk lighter in more ways than one.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "d",
        text: "Hold the door open ahead of them",
        feedback: "A small clearing of the way. You thought ahead for someone else.",
        emotion: "gentle",
        points: 18,
      },
    ],
  },
  {
    id: "silent-2",
    category: "silent",
    situation: "A friend sits quietly beside you. They haven't said what's wrong, but something clearly is.",
    choices: [
      {
        id: "a",
        text: "Ask them directly, 'What's wrong?'",
        feedback: "You opened the door. They may not have been ready — but the door is open.",
        emotion: "gentle",
        points: 16,
      },
      {
        id: "b",
        text: "Sit in silence with them",
        feedback: "You chose presence over words. That is its own profound kindness.",
        emotion: "warm",
        points: 24,
      },
      {
        id: "c",
        text: "Put on their favorite music",
        feedback: "You reached for what comforts them. That attentiveness is a gift.",
        emotion: "gentle",
        points: 20,
      },
      {
        id: "d",
        text: "Gently place your hand near theirs",
        feedback: "Touch can hold what words cannot. You knew that instinctively.",
        emotion: "warm",
        points: 25,
      },
    ],
  },
  {
    id: "silent-3",
    category: "silent",
    situation: "You notice a stranger crying quietly on a park bench.",
    choices: [
      {
        id: "a",
        text: "Give them space and privacy",
        feedback: "You honored their moment. Privacy is a genuine form of care.",
        emotion: "gentle",
        points: 12,
      },
      {
        id: "b",
        text: "Sit nearby, not too close",
        feedback: "You offered presence without pressure. That's a rare and beautiful instinct.",
        emotion: "warm",
        points: 20,
      },
      {
        id: "c",
        text: "Ask softly, 'Are you okay?'",
        feedback: "You checked in. That small phrase can genuinely change everything.",
        emotion: "warm",
        points: 24,
      },
      {
        id: "d",
        text: "Leave a kind note on the bench beside them",
        feedback: "Anonymous kindness is its own beautiful form of generosity.",
        emotion: "warm",
        points: 25,
      },
    ],
  },

  // ── Difficult Kindness ───────────────────────────────────────────────────
  {
    id: "difficult-1",
    category: "difficult",
    situation: "A friend said something that hurt you deeply, and they don't seem to realize it.",
    choices: [
      {
        id: "a",
        text: "Say nothing and push it down",
        feedback: "Swallowing pain protects them but costs you. Your feelings deserve space too.",
        emotion: "reflective",
        points: 6,
      },
      {
        id: "b",
        text: "Distance yourself without explaining why",
        feedback: "A quiet withdrawal. It communicates something — just not directly.",
        emotion: "reflective",
        points: 8,
      },
      {
        id: "c",
        text: "Tell them gently how it made you feel",
        feedback: "That was a vulnerable, courageous choice. Real kindness to both yourself and the friendship.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "d",
        text: "Wait until you've processed it, then bring it up",
        feedback: "You chose timing with care. That's emotional intelligence in action.",
        emotion: "warm",
        points: 22,
      },
    ],
  },
  {
    id: "difficult-2",
    category: "difficult",
    situation: "Someone who once hurt you is now clearly struggling and needs help.",
    choices: [
      {
        id: "a",
        text: "Stay away — you don't owe them anything",
        feedback: "Your boundaries are valid. Protecting yourself is not unkind.",
        emotion: "reflective",
        points: 10,
      },
      {
        id: "b",
        text: "Feel conflicted and do nothing",
        feedback: "You're allowed to sit with the tension. That conflict is real and human.",
        emotion: "reflective",
        points: 8,
      },
      {
        id: "c",
        text: "Help them anyway, quietly",
        feedback: "You held two truths at once: your pain and their need. That is something profound.",
        emotion: "warm",
        points: 25,
      },
      {
        id: "d",
        text: "Point them toward someone else who can help",
        feedback: "You cared, just from a safer distance. That still counts. It still matters.",
        emotion: "gentle",
        points: 18,
      },
    ],
  },
  {
    id: "difficult-3",
    category: "difficult",
    situation: "You're exhausted — and someone you love needs more from you than you have right now.",
    choices: [
      {
        id: "a",
        text: "Give everything even when you're running empty",
        feedback: "Your sacrifice is real. But you can't pour from empty. You matter too.",
        emotion: "reflective",
        points: 8,
      },
      {
        id: "b",
        text: "Tell them honestly: 'I'm not okay right now either'",
        feedback: "Vulnerability is its own closeness. You let them truly see you.",
        emotion: "warm",
        points: 24,
      },
      {
        id: "c",
        text: "Ask someone else to step in for now",
        feedback: "Delegating care is not abandonment. It's wisdom and self-preservation.",
        emotion: "gentle",
        points: 20,
      },
      {
        id: "d",
        text: "Give what little you can, and be honest about the rest",
        feedback: "You showed up in half-measure, and that was all you had. It was enough.",
        emotion: "warm",
        points: 22,
      },
    ],
  },
];

// ── Helper functions ─────────────────────────────────────────────────────────
export function getScenariosForCategory(categoryId: CategoryId): Scenario[] {
  return SCENARIOS.filter((s) => s.category === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function isValidCategory(id: string): id is CategoryId {
  return CATEGORIES.some((c) => c.id === id);
}
