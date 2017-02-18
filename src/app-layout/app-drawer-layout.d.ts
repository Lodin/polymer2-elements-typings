// Type definitions for app-layout 0.10.7
// Project: https://github.com/PolymerElements/app-layout
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import {Polymer} from '@polymer/polymer/src/typescript/polymer';
import {IronResizableBehavior} from '../iron-resizable-behavior/iron-resizable-behavior';
import {AppDrawer} from './app-drawer';

export declare class AppDrawerLayout extends Polymer.Element implements IronResizableBehavior {
  // Properties
  public drawer: AppDrawer;
  public forceNarrow: boolean;
  public narrow: boolean;
  public openedWhenNarrow: boolean;
  public responsiveWidth: string;

  // Methods
  public assignParentResizable(parentResizable: HTMLElement): void;
  public notifyResize(): void;
  public resetLayout(): void;
  public resizerShouldNotify(element: HTMLElement): boolean;
  public stopResizeNotificationsFor(target: Element): void;
}
