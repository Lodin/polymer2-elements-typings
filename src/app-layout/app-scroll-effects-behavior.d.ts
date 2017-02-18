// Type definitions for app-layout 0.10.7
// Project: https://github.com/PolymerElements/app-layout
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {IronScrollTargetBehavior} from '../iron-scroll-target-behavior/iron-scroll-target-behavior';

export interface AppScrollEffectsBehavior extends IronScrollTargetBehavior {
  // Properties
  disabled: boolean;
  effects: string;
  effectsConfig: Object;
  threshold: number;
  thresholdTriggered: boolean;

  // Methods
  createEffect(effectName: string, effectConfig: Object): Object;
  isContentBelow(): boolean;
  isOnScreen(): boolean;
}
