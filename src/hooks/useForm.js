import { useReducer } from "react";

export const useForm = (initialValues, onSubmit) => {
    const [state, dispatch] = useReducer(formReducer, initialValues);

    function changeHandler(event, newEvent = null) {
        let { id, value, files } = event.target;
        let updatedElement = null;

        const idState = newEvent?.parent?? id;
        const valueState = newEvent?.value?? newEvent?? value;

        if(id === 'file') {
            updatedElement = { ...state[idState]};     
            updatedElement.value = [files];
        }

        updatedElement = { ...state[idState]};     
        updatedElement.value = valueState;

        dispatch({idState, updatedElement})
    };

    const submitHandler = event => {
        event.preventDefault();
        const results = Object.keys(state).reduce((final, key) => {
            final[key] = state[key].value;
            return final;
        }, {});

        onSubmit(results)
    }

    return { state, submitHandler, changeHandler }
}

function formReducer(prevState, {idState, updatedElement}) {
    return {...prevState, [idState]: updatedElement};
};