// Type definitions for app-layout 0.10.7
// Project: https://github.com/PolymerElements/app-layout
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';

export class AppDrawer extends Polymer.Element {
  // Properties
  public align: string;
  public disableSwipe: boolean;
  public noFocusTrap: boolean;
  public opened: boolean;
  public persistent: boolean;
  public position: string;
  public swipeOpen: boolean;
  public transitionDuration: number;

  // Methods
  public close(): void;

  public getWidth(): number;

  public open(): void;

  public resetLayout(): void;

  public toggle(): void;

  // Events
  public onAppDrawerAttached(event: Event): void;

  public onAppDrawerResetLayout(event: Event): void;

  public onAppDrawerTransitioned(event: Event): void;
}

