// Type definitions for paper-behaviors 1.0.12
// Project: https://github.com/PolymerElements/paper-behaviors
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {PaperRippleBehavior} from './paper-ripple-behavior';
import {IronButtonState} from '../iron-behaviors/iron-button-state';
import {IronControlState} from '../iron-behaviors/iron-control-state';

export interface PaperButtonBehavior extends PaperRippleBehavior, IronButtonState, IronControlState {
  elevation: number;
}
