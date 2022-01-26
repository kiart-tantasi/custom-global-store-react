const counterActions = {
    INCREASE_COUNTER: (state: {counter: number}) => {
        return {counter: state.counter + 1};
    },
    DECREASE_COUNTER: (state: {counter: number}) => {
        if (state.counter <= 0) {
            return {counter: state.counter};
        }
        return {counter: state.counter - 1};
    }
}

const counterInitialState: {counter: number} = {counter: 0};

export { counterInitialState };

export default counterActions;

