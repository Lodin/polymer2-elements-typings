// Type definitions for paper-menu 1.2.2
// Project: https://github.com/PolymerElements/paper-menu
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {IronControlState} from '../iron-behaviors/iron-control-state';

export class PaperSubmenu extends Polymer.Element implements IronControlState {
  // Properties
  public disabled: boolean;
  public focused: boolean;
  public opened: boolean;

  // Methods
  public close(): void;
  public dettached(): void;
  public open(): void;
  public toggle(): void;

  // Events
  public onPaperSubmenuClose(event: Event): void;
  public onPaperSubmenuOpen(event: Event): void;
}
