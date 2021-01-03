import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core/'
import FormContainer from '../../components/FormContainer'
import PageTitle from '../../components/PageTitle'
import {KeyboardDatePicker} from '@material-ui/pickers'
import {useForm} from '../../hooks/useForm'
import axios from 'axios'
import {useProtectedPage} from '../../hooks/useProtectedPage'

const CreateTripsForm = () => {
    
    
    const [form, onChangeInput] = useForm({
        name: '',
        planet: '',
        description: '',
        duration: ''
    })
    useProtectedPage()
    const history = useHistory()
    const [date, setDate] = useState(new Date())
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        const formattedDate = `${date.getDate()}/${date.getMonth()+ 1}/${date.getFullYear()}`
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": formattedDate,
            "description": form.description,
            "durationInDays": form.duration
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips', body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((response)=> history.push('/lista'))
        .catch((err)=>console.log(err))
    }

    return <div>
        <PageTitle title={'Criar Viagem'} />
        <FormContainer onSubmit={onSubmitForm}>
            <TextField 
                id="outlined-search"
                label="Nome"
                onChange={onChangeInput}
                name= {'name'}
                value={form['name']} />
            <TextField 
                id="outlined-search"
                label="Planeta"
                onChange={onChangeInput}
                name= {'planet'}
                value={form['planet']} />
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="dd/MM/yyyy"
                label="Data"
                value={date}
                onChange={date => setDate(date)}
            />
            <TextField
                id="outlined-search" 
                label="Descrição"
                onChange={onChangeInput}
                name= {'description'}
                value={form['description']}  />
            <TextField
                id="outlined-search"   
                label="Duração em dias"
                onChange={onChangeInput}
                name= {'duration'}
                value={form['duration']} />
            <Button variant="contained" color="primary" type={'submit'}>Criar</Button>
        </FormContainer>
    </div>
}
export default CreateTripsForm