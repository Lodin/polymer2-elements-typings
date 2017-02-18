// Type definitions for paper-icon-button 1.1.4
// Project: https://github.com/PolymerElements/paper-icon-button
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {PaperInkyFocusBehavior} from '../paper-behaviors/paper-inky-focus-behavior';

export class PaperIconButton extends Polymer.Element implements PaperInkyFocusBehavior {
  // Properties
  public active: boolean;
  public alt: string;
  public ariaActiveAttribute: string;
  public disabled: boolean;
  public focused: boolean;
  public icon: string;
  public keyBindings: Object;
  public keyEventTarget?: EventTarget;
  public noink: boolean;
  public pointerDown: boolean;
  public pressed: boolean;
  public receivedFocusFromKeyboard: boolean;
  public src: string;
  public stopKeyboardEventPropagation: boolean;
  public toggles: boolean;

  // Methods
  public addOwnKeyBinding(eventString: string, handlerName: string): void;
  public ensureRipple(optTriggeringEvent: Event): void;
  public getRipple(): typeof Polymer.Element;
  public hasRipple(): boolean;
  public keyboardEventMatchesKeys(event: KeyboardEvent, eventString: string): boolean;
  public removeOwnKeyBindings(): void;
}
