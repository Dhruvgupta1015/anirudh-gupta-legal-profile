/**
 * Main — App initialization
 */

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initPillars } from './pillars.js';
import { initJourney } from './journey.js';
import { initResearch } from './research.js';
import { initCredentials } from './credentials.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initJourney();      // Must run before initAnimations — injects .reveal elements
  initPillars();
  initResearch();
  initCredentials();  // Certificate lightbox — no .reveal injection
  initAnimations();   // Observes all .reveal elements — must run last
});
