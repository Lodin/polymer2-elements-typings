// Type definitions for iron-resizable-behavior 1.0.5
// Project: https://github.com/PolymerElements/iron-resizable-behavior
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

export interface IronResizableBehavior {
  // Methods
  assignParentResizable(parentResizable: HTMLElement): void;
  notifyResize(): void;
  resizerShouldNotify(element: HTMLElement): boolean;
  stopResizeNotificationsFor(target: Element): void;
}
