// Type definitions for iron-selector 1.5.2
// Project: https://github.com/PolymerElements/iron-selector
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

export interface IronSelectableBehavior {
  // Properties
  activateEvent: string;
  attrForSelected: string;
  fallbackSelection: string;
  items: HTMLElement[];
  selectable: string;
  selected: (string|number);
  selectedAttribute: string;
  selectedClass: string;
  selectedItem?: Object;

  // Methods
  forceSynchronousItemUpdate(): void;
  indexOf(item: Object): void;
  select(value: string|number): void;
  selectIndex(index: number): void;
  selectNext(): void;
  selectPrevious(): void;

  // Events
  onIronActivate(event: Event): void;
  onIronDeselect(event: Event): void;
  onIronItemsChanged(event: Event): void;
  onIronSelect(event: Event): void;
}
