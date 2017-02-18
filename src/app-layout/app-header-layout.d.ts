// Type definitions for app-layout 0.10.7
// Project: https://github.com/PolymerElements/app-layout
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {Polymer} from '@polymer/polymer/src/typescript/polymer';
import {IronResizableBehavior} from '../iron-resizable-behavior/iron-resizable-behavior';
import {AppHeader} from './app-header';

export declare class AppLayout extends Polymer.Element implements IronResizableBehavior {
  // Properties
  public hasScrollingRegion: boolean;
  public header: AppHeader;

  // Methods
  public assignParentResizable(parentResizable: HTMLElement): void;
  public notifyResize(): void;
  public resetLayout(): void;
  public resizerShouldNotify(element: HTMLElement): boolean;
  public stopResizeNotificationsFor(target: Element): void;
}
