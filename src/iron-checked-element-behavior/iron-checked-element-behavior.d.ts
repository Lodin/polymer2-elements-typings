// Type definitions for iron-checked-element-behavior 1.0.5
// Project: https://github.com/PolymerElements/iron-checked-element-behavior
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {IronFormElementBehavior} from '../iron-form-element-behavior/iron-form-element-behavior';
import {IronValidatableBehavior} from '../iron-validatable-behavior/iron-form-element-behavior';

export interface IronCheckedElementBehavior extends IronFormElementBehavior, IronValidatableBehavior {
  // Properties
  checked: boolean;
  toggles: boolean;

  // Events
  onIronChange(event: Event): void;
}
