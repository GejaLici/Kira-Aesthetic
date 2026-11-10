import { EventEmitter } from 'events';

// This is a simple event emitter that can be used to broadcast errors.
// We use this to broadcast Firestore permission errors to the UI.
export const errorEmitter = new EventEmitter();
