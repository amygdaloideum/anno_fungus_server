import { GameState, initialState as defaultState} from './state';
import stateBasedEffects from './stateBasedEffects';

export default class gameContainer {
    states: GameState[];
    actions: any[];
    stateBasedEffects: Function[];

    constructor(initialState: GameState) {
        this.states = [];
        this.actions = [];
        this.states.unshift(initialState);
    }

    getLatestState = () => this.states.slice(-1).pop() || defaultState;

    applyStateBasedEffects = () => stateBasedEffects.forEach(effect => this.next(this.getLatestState(), effect));                

    next = (state: GameState, reducer: Function): GameState => {
        const newState: GameState = reducer(state);
        this.states.unshift(newState);
        this.actions.unshift(reducer);
        return newState;
    }

}
