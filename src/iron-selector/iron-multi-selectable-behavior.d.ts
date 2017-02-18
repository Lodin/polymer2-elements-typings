// Type definitions for iron-selector 1.5.2
// Project: https://github.com/PolymerElements/iron-selector
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {IronSelectableBehavior} from './iron-selectable-behavior';

export interface IronMultiSelectableBehavior extends IronSelectableBehavior {
  // Properties
  multi: boolean;
  selectedItems: HTMLElement[];
  selectedValues: number[];

  // Methods
  multiChanged(multi: boolean): void;
}
