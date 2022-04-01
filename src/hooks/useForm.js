import { useReducer } from "react";

export const useForm = (initialValues, onSubmit) => {
    const [state, dispatch] = useReducer(formReducer, initialValues);

    function changeHandler({target: {value, id, files}}) {
        console.log(value, id, files)
        const updatedElement = { ...state[id]};
        updatedElement.value = value;
        dispatch({id, updatedElement})
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

function formReducer(prevState, {id, updatedElement}) {
    return {...prevState, [id]: updatedElement};
};