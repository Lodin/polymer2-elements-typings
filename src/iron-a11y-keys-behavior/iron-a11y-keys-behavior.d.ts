// Type definitions for iron-a11y-keys-behavior 1.1.9
// Project: https://github.com/PolymerElements/iron-a11y-keys-behavior
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

export interface IronA11yKeysBehavior {
  // Properties
  keyBindings: Object;
  keyEventTarget?: EventTarget;
  stopKeyboardEventPropagation: boolean;

  // Methods
  addOwnKeyBinding(eventString: string, handlerName: string): void;
  keyboardEventMatchesKeys(event: KeyboardEvent, eventString: string): boolean;
  removeOwnKeyBindings(): void;
}
