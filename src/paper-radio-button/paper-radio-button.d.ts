// Type definitions for paper-radio-button 1.3.1
// Project: https://github.com/PolymerElements/paper-radio-button
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {PaperCheckedElementBehavior} from '../paper-behaviors/paper-checked-element-behavior';

export class PaperRadioButton extends Polymer.Element implements PaperCheckedElementBehavior {
  // Properties
  public active: boolean;
  public ariaActiveAttribute: string;
  public checked: boolean;
  public disabled: boolean;
  public focused: boolean;
  public invalid: boolean;
  public keyBindings: Object;
  public keyEventTarget?: EventTarget;
  public name: string;
  public noink: boolean;
  public pointerDown: boolean;
  public pressed: boolean;
  public receivedFocusFromKeyboard: boolean;
  public required: boolean;
  public stopKeyboardEventPropagation: boolean;
  public toggles: boolean;
  public validator: string;
  public validatorType: string;
  public value: string;

  // Methods
  public addOwnKeyBinding(eventString: string, handlerName: string): void;
  public ensureRipple(optTriggeringEvent: Event): void;
  public getRipple(): typeof Polymer.Element;
  public hasRipple(): boolean;
  public hasValidator(): boolean;
  public keyboardEventMatchesKeys(event: KeyboardEvent, eventString: string): boolean;
  public removeOwnKeyBindings(): void;
  public validate(value: Object): boolean;

  // Events
  public onChange(event: Event): void;
  public onIronChange(event: Event): void;
  public onIronChange(event: Event): void;
  public onIronFormElementRegister(event: Event): void;
  public onIronFormElementUnregister(event: Event): void;
}
