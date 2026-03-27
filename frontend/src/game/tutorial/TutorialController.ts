import { TutorialStep, TUTORIAL_STEPS, isTutorialComplete, completeTutorial } from './steps';
export class TutorialController {
  private idx = 0; private done = false;
  constructor() { this.done = isTutorialComplete(); }
  isComplete(): boolean { return this.done; }
  getCurrent(): TutorialStep | null { if (this.done || this.idx >= TUTORIAL_STEPS.length) return null; return TUTORIAL_STEPS[this.idx]; }
  next(): TutorialStep | null { this.idx++; if (this.idx >= TUTORIAL_STEPS.length) { this.done = true; completeTutorial(); return null; } return TUTORIAL_STEPS[this.idx]; }
  skip(): void { this.done = true; completeTutorial(); }
  reset(): void { this.idx = 0; this.done = false; }
  getProgress(): number { return this.idx / TUTORIAL_STEPS.length; }
}