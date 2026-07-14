/**
 * Main — App initialization
 */

import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initPillars } from './pillars.js';
import { initJourney } from './journey.js';
import { initResearch } from './research.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAnimations();
  initPillars();
  initJourney();
  initResearch();
});
