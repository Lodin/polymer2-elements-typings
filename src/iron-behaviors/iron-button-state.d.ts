// Type definitions for iron-behaviors 1.0.17
// Project: https://github.com/PolymerElements/iron-behaviors
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {IronA11yKeysBehavior} from '../iron-a11y-keys-behavior/iron-a11y-keys-behavior';

export interface IronButtonState extends IronA11yKeysBehavior {
  // Properties
  active: boolean;
  ariaActiveAttribute: string;
  pointerDown: boolean;
  pressed: boolean;
  receivedFocusFromKeyboard: boolean;
  toggles: boolean;
}
