import { stateBasedEffects } from './state-based-effects';
import { initialState as defaultState  } from './state/state';
import { IGameState } from './state/state.d';

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
    this.stateBasedEffects.forEach(effect => this.next(effect));
  }

  public next(reducer: Function): IGameState {
    const newState: IGameState = reducer(this.getLatestState());
    this.states.unshift(newState);
    this.actions.unshift(reducer);

    return newState;
  }
}
