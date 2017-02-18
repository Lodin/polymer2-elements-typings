// Type definitions for iron-scroll-target-behavior 1.1.1
// Project: https://github.com/PolymerElements/iron-scroll-target-behavior
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

export interface IronScrollTargetBehavior {
  // Properties
  scrollTarget: Element;

  // Methods
  scroll(options?: ScrollToOptions): void;
  scroll(left: number, top: number): void;
  toggleScrollListener(yes: boolean): void;
}
