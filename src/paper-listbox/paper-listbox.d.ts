// Type definitions for paper-listbox 1.1.2
// Project: https://github.com/PolymerElements/paper-listbox
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {IronMenuBehavior} from '../iron-menu-behavior/iron-menu-behavior';

export class PaperListbox extends Polymer.Element implements IronMenuBehavior {
  // Properties
  public activateEvent: string;
  public attrForItemTitle: string;
  public attrForSelected: string;
  public fallbackSelection: string;
  public focusedItem?: Object;
  public items: HTMLElement[];
  public keyBindings: Object;
  public keyEventTarget?: EventTarget;
  public multi: boolean;
  public selectable: string;
  public selected: string|number;
  public selectedAttribute: string;
  public selectedClass: string;
  public selectedItem?: Object;
  public selectedItems: HTMLElement[];
  public selectedValues: number[];
  public stopKeyboardEventPropagation: boolean;

  // Methods
  public addOwnKeyBinding(eventString: string, handlerName: string): void;
  public forceSynchronousItemUpdate(): void;
  public indexOf(item: Object): void;
  public keyboardEventMatchesKeys(event: KeyboardEvent, eventString: string): boolean;
  public multiChanged(multi: boolean): void;
  public removeOwnKeyBindings(): void;
  public select(value: string|number): void;
  public selectIndex(index: number): void;
  public selectNext(): void;
  public selectPrevious(): void;

  // Events
  public onIronActivate(event: Event): void;
  public onIronDeselect(event: Event): void;
  public onIronItemsChanged(event: Event): void;
  public onIronSelect(event: Event): void;
}
