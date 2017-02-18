// Type definitions for paper-menu-button 1.5.2
// Project: https://github.com/PolymerElements/paper-menu-button
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {IronA11yKeysBehavior} from '../iron-a11y-keys-behavior/iron-a11y-keys-behavior';
import {IronControlState} from '../iron-behaviors/iron-control-state';

export class PaperMenuButton extends Polymer.Element implements IronA11yKeysBehavior, IronControlState {
  // Properties
  public allowOutsideScroll: boolean;
  public closeAnimationConfig: Object;
  public closeOnActivate: boolean;
  public contentElement: HTMLElement;
  public disabled: boolean;
  public dynamicAlign: boolean;
  public focused: boolean;
  public horizontalAlign: string;
  public horizontalOffset: number;
  public ignoreSelect: boolean;
  public keyBindings: Object;
  public keyEventTarget?: EventTarget;
  public noAnimations: boolean;
  public noOverlap: boolean;
  public openAnimationConfig: Object;
  public opened: boolean;
  public restoreFocusOnClose: boolean;
  public stopKeyboardEventPropagation: boolean;
  public verticalAlign: string;
  public verticalOffset: number;

  // Methods
  public addOwnKeyBinding(eventString: string, handlerName: string): void;
  public close(): void;
  public keyboardEventMatchesKeys(event: KeyboardEvent, eventString: string): boolean;
  public open(): void;
  public removeOwnKeyBindings(): void;
  public toggle(): void;

  // Events
  public onPaperDropdownClose(event: Event): void;
  public onPaperDropdownOpen(event: Event): void;
}
