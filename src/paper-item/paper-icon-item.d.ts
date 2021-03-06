// Type definitions for paper-item 1.2.1
// Project: https://github.com/PolymerElements/paper-item
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {PaperItemBehavior} from './paper-item-behavior';

export class PaperIconItem extends Polymer.Element implements PaperItemBehavior {
  // Properties
  public active: boolean;
  public ariaActiveAttribute: string;
  public disabled: boolean;
  public focused: boolean;
  public keyBindings: Object;
  public keyEventTarget?: EventTarget;
  public pointerDown: boolean;
  public pressed: boolean;
  public receivedFocusFromKeyboard: boolean;
  public stopKeyboardEventPropagation: boolean;
  public toggles: boolean;

  // Methods
  public addOwnKeyBinding(eventString: string, handlerName: string): void;
  public keyboardEventMatchesKeys(event: KeyboardEvent, eventString: string): boolean;
  public removeOwnKeyBindings(): void;
}
