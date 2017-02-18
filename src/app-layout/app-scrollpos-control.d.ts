// Type definitions for app-layout 0.10.7
// Project: https://github.com/PolymerElements/app-layout
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {Polymer} from '@polymer/polymer/src/typescript/polymer';
import {IronScrollTargetBehavior} from '../iron-scroll-target-behavior/iron-scroll-target-behavior';

export declare class AppScrollposControl extends Polymer.Element implements IronScrollTargetBehavior {
  // Properties
  public reset: boolean;
  public scrollTarget: Element;
  public selected: string;

  // Methods
  public scroll(left: number, top: number): void;
  public toggleScrollListener(yes: boolean): void;
}
