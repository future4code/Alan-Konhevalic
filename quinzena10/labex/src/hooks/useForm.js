import React, { useEffect, useState } from 'react'

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    //Quando acontecer um evento nos inputs, o form será atualizado
    const onChangeInput = (event) => {
        //Novo valor do evento
        const newValue = event.target.value
        //Pegar o nome de cada campo a partir do novo valor, desde que seja colocado no textfield o nome do campo
        const fieldName = event.target.name
        //Mantem as outras propriedades do form e adiciona novos valores
        setForm({...form, [fieldName]: newValue})
    } 
    return [form, onChangeInput]
}