import { IGameState, initialState as defaultState } from './state';
import { stateBasedEffects } from './state-based-effects';

export class GameContainer {
  private states: IGameState[];
  private actions: any[];
  private stateBasedEffects: Function[];

  constructor(initialState: IGameState) {
    this.states = [];
    this.actions = [];
    this.states.push(initialState);
  }

  public getLatestState(): IGameState {
    return this.states.slice(-1).pop() || defaultState;
  }

  public applyStateBasedEffects(): void {
    this.stateBasedEffects.forEach(effect => this.next(this.getLatestState(), effect));
  }

  public next(state: IGameState, reducer: Function): IGameState {
    const newState: IGameState = reducer(state);
    this.states.unshift(newState);
    this.actions.unshift(reducer);

    return newState;
  }
}
