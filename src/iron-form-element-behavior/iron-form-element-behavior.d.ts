// Type definitions for iron-form-element-behavior 1.0.5
// Project: https://github.com/PolymerElements/iron-form-element-behavior
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

export interface IronFormElementBehavior {
  // Properties
  name: string;
  required: boolean;
  value: string;

  // Events
  onIronFormElementRegister(event: Event): void;
  onIronFormElementUnregister(event: Event): void;
}
