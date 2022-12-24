import { Nothing } from "./nothing";
import { Schtate } from "./types/Schtate";
export declare class Maybe<Something> implements Schtate<Something> {
  private value;
  private constructor();
  private static isNothing;
  static isMaybe: (arg: unknown) => arg is Maybe<unknown>;
  static nothing<T>(): Maybe<T>;
  static of<Something>(
    val: Something | Nothing | Maybe<Something> | null | undefined
  ): Maybe<Something>;
  static fromFunction<Something>(
    cb: () => Something | null | Nothing
  ): Maybe<Something>;
  something(cb: (arg: Something) => void): Maybe<Something>;
  nothing(cb: (arg: Nothing) => void): this;
  map<SomethingElse>(
    cb: (arg: Something) => SomethingElse
  ): Maybe<SomethingElse>;
  reduce<SomethingElse>(
    cb: (arg0: SomethingElse, arg1: Something) => SomethingElse,
    starterThing: SomethingElse
  ): Maybe<SomethingElse>;
  match<T, U>({
    something: somethingCB,
    nothing: nothingCB,
  }: {
    something: (arg: Something) => T;
    nothing: () => U;
  }): T | U;
}
