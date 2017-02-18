// Type definitions for neon-animation 1.2.4
// Project: https://github.com/PolymerElements/neon-animation
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

export interface NeonAnimationBehavior {
  // Properties
  animationTiming: Object;
  isNeonAnimation: boolean;

  // Methods
  complete(): void;
  setPrefixedProperty(node: HTMLElement, property: string, value: string|number): void;
  timingFromConfig(config: Object): void;
}
