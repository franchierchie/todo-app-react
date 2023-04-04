import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
  
    const [formState, setFomrState] = useState( initialForm );

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFomrState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFomrState( initialForm );
    }

    return {
        //  Sirve para ahorrarse el const { username, email, password } = formState; de FormWithCustomHoook.jsx
        // De esta forma desestructuramos el formState, retornando lo q le hayas pasado en el useForm de "".jsx ( en este caso retorna username, email y password )
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
