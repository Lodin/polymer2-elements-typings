// Type definitions for app-layout 0.10.7
// Project: https://github.com/PolymerElements/app-layout
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {IronResizableBehavior} from '../iron-resizable-behavior/iron-resizable-behavior';
import {AppScrollEffectsBehavior} from './app-scroll-effects-behavior';

export class AppBox extends Polymer.Element implements AppScrollEffectsBehavior, IronResizableBehavior {
  // Properties
  public disabled: boolean;
  public effects: string;
  public effectsConfig: Object;
  public scrollTarget: Element;
  public threshold: number;
  public thresholdTriggered: boolean;
  // Methods
  public assignParentResizable(parentResizable: HTMLElement): void;

  public createEffect(effectName: string, effectConfig: Object): Object;

  public getScrollState(): Object;

  public isContentBelow(): boolean;

  public isOnScreen(): boolean;

  public notifyResize(): void;

  public resetLayout(): void;

  public resizerShouldNotify(element: HTMLElement): boolean;

  public scroll(options?: ScrollToOptions): void;
  public scroll(left: number, top: number): void;

  public stopResizeNotificationsFor(target: Element): void;

  public toggleScrollListener(yes: boolean): void;
}
