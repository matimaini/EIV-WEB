import { useReducer } from "react";

export const useForm = (initialValues, onSubmit) => {
    const [state, dispatch] = useReducer(formReducer, initialValues);
    function changeHandler(event, newEvent = null) {
        let { id, value, files } = event.target;

        let updatedElement = null

        const idState = newEvent?.parent?? id;
        const valueState = newEvent?.value?? newEvent?? value;

        if(id === 'archivos') {
            updatedElement = { ...state[idState] };     
            updatedElement.value = files[0];
            updatedElement.name = files[0].name;
        } else {
            updatedElement = { ...state[idState] };     
            updatedElement = { ...updatedElement, value: valueState };
        }

        dispatch({idState, updatedElement})
    };

    const getCaptchaResponse = () => {
        const captchaResponse = window.grecaptcha.getResponse()
        console.log(window.grecaptcha)
        return captchaResponse ? captchaResponse : false;
    }

    const submitHandler = event => {
        event.preventDefault();
        const results = Object.keys(state).reduce((final, key) => {
            final[key] = state[key].value;
            console.log(final)
            return final;
        }, {});

        let captcha = getCaptchaResponse();
        if(captcha) {
            onSubmit(results, captcha)
        } else {
            console.log("No completo el captcha")
        }
    }

    return { state, submitHandler, changeHandler }
}

function formReducer(prevState, {idState, updatedElement}) {
    return {...prevState, [idState]: updatedElement};
};