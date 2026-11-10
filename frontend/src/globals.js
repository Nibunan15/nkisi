/*
 * The original page code reads its dependencies from window (it was authored for <script> tags).
 * This module installs exactly those globals from npm packages so the design code runs unchanged.
 */
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Flip } from 'gsap/Flip';
import { createIcons, icons } from 'lucide';
import * as DesignSystem from './design-system/index.js';
import { submitEnquiry } from './services/api.js';
import './utils/imageSlot.js';

gsap.registerPlugin(ScrollTrigger, Flip);

Object.assign(window, {
  React,
  gsap,
  ScrollTrigger,
  Flip,
  NK_ASSET_BASE: '/',
  NKisiDesignSystem_91614a: DesignSystem,
  NK_API: { submitEnquiry },
});

// Same API as the lucide UMD build: lucide.createIcons() swaps <i data-lucide="…"> for SVGs.
window.lucide = { createIcons: (opts = {}) => createIcons({ icons, ...opts }) };
