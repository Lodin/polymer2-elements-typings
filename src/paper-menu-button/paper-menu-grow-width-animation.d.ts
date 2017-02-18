// Type definitions for paper-menu-button 1.5.2
// Project: https://github.com/PolymerElements/paper-menu-button
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

import '@polymer/polymer/src/typescript/polymer';
import {NeonAnimationBehavior} from '../neon-animation/neon-animation-behavior';

export class PaperMenuGrowWidthAnimation extends Polymer.Element implements NeonAnimationBehavior {
  // Properties
  public animationTiming: Object;
  public isNeonAnimation: boolean;

  // Methods
  public complete(): void;
  public setPrefixedProperty(node: HTMLElement, property: string, value: string|number): void;
  public timingFromConfig(config: Object): void;
}
