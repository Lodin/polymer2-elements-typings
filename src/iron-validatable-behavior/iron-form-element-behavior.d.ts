// Type definitions for iron-validatable-behavior 1.1.1
// Project: https://github.com/PolymerElements/iron-validatable-behavior
// Definitions by: Vlad Rindevich <https://github.com/Lodin>
// Definitions: https://github.com/Lodin/polymer2-elements-typings

export interface IronValidatableBehavior {
  // Properties
  invalid: boolean;
  validator: string;
  validatorType: string;

  // Methods
  hasValidator(): boolean;
  validate(value: Object): boolean;
}
