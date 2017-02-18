// Type definitions for paper-behaviors 1.0.12
// Project: https://github.com/PolymerElements/paper-behaviors
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings



export interface PaperRippleBehavior {
  noink: boolean;

  ensureRipple(optTriggeringEvent: Event): void;

  getRipple(): typeof Polymer.Element;

  hasRipple(): boolean;
}
