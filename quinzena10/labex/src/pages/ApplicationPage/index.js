import React, { useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core/'
import FormContainer from '../../components/FormContainer'
import PageTitle from '../../components/PageTitle'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'
import {useForm} from '../../hooks/useForm'
import { useTripsList } from '../../hooks/useTripsList';

const ApplicationPage = () => {
    const trips = useTripsList()
    const [form, onChangeInput] = useForm({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: null
    })
    

    const onSubmitApplication = (e) => {
        //evita que a pagina atualize quando o formulario é enviado
        e.preventDefault()
        console.log(form)
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }
        
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips/${form.trip.id}/apply`, body)
    }
    console.log(form)

    return <div>
        <PageTitle title={'Candidatar para Viagem'} />
        <FormContainer onSubmit={onSubmitApplication}>
            <TextField 
                id="outlined-search"
                label="Nome Candidato"
                onChange={onChangeInput}
                name={'name'}
                value={form['name']}
            />
            <TextField 
                id="outlined-search" 
                label="Idade" 
                onChange={onChangeInput}
                name={'age'}
                value={form['age']}
                type={'number'}
            />
            <TextField 
                id="outlined-search" 
                label="Texto de Apresentação" 
                onChange={onChangeInput}
                name={'applicationText'}
                value={form['applicationText']}
                type={'text'} 
            />
            <TextField 
                id="outlined-search" 
                label="Profissão" 
                onChange={onChangeInput}
                name={'profession'}
                value={form['profession']}
            />
            <FormControl>
                <InputLabel id="select-paises">Nacionalidade</InputLabel>
                <Select
                    labelId="select-paises"
                    onChange={onChangeInput}
                    name={'country'}
                    value={form['country']}
                    >
                    <MenuItem value={'Brasil'}>Brasil</MenuItem>
                    <MenuItem value={'Argentina'}>Argentina</MenuItem>
                    <MenuItem value={'México'}>México</MenuItem>
                </Select>
            </FormControl>  

            <FormControl >
                <InputLabel id="select-planetas">Viagem</InputLabel>
                <Select 
                    labelId="select-planetas"
                    onChange={onChangeInput}
                    name={'trip'}
                    value={form['trip']}
                    >
                    {/* mapear cada item da lista de viagens. O map receberá um elemento que será cada uma das viagens.
                        Para cada uma das viagens, será retornado no menuItem. Value recebe a viagem, que ficará armazenada
                        no estado. */}
                    {trips.map( (trip) => {
                        return <MenuItem value={trip}>{trip.name}</MenuItem>
                    } )}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" type={'submit'}>Inscrever-se</Button>
        </FormContainer>
    </div>
}
export default ApplicationPage