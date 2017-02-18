// Type definitions for paper-button 1.0.14
// Project: https://github.com/PolymerElements/paper-button
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {Polymer} from '@polymer/polymer/src/typescript/polymer';
import {PaperButtonBehavior} from '../paper-behaviors/paper-button-behavior';

export declare class PaperButton extends Polymer.Element implements PaperButtonBehavior {
  // Properties
  public active: boolean;
  public ariaActiveAttribute: string;
  public disabled: boolean;
  public elevation: number;
  public focused: boolean;
  public keyBindings: Object;
  public keyEventTarget: EventTarget;
  public noink: boolean;
  public pointerDown: boolean;
  public pressed: boolean;
  public raised: boolean;
  public receivedFocusFromKeyboard: boolean;
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
