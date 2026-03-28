import { EventEmitter } from 'events';
export class StoryMode extends EventEmitter {
  private active = false;
  async start() { this.active = true; this.emit('started'); }
  async stop() { this.active = false; this.emit('stopped'); }
  isActive() { return this.active; }
}
