// Type definitions for iron-menu-behavior 1.2.0
// Project: https://github.com/PolymerElements/iron-menu-behavior
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {IronMultiSelectableBehavior} from '../iron-selector/iron-multi-selectable-behavior';
import {IronA11yKeysBehavior} from '../iron-a11y-keys-behavior/iron-a11y-keys-behavior';

export interface IronMenuBehavior extends IronMultiSelectableBehavior, IronA11yKeysBehavior {
  // Properties
  attrForItemTitle: string;
  focusedItem?: Object;
}
