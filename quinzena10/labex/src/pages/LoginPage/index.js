import React from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core/'
import FormContainer from '../../components/FormContainer'
import PageTitle from '../../components/PageTitle'
import {useForm} from '../../hooks/useForm'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    //serve para redirecionar
    const history = useHistory()
    const [form, onChangeInput] = useForm({
        email: '',
        password: ''
    })

    const onSubmitLogin = (event) => {
        event.preventDefault()
        console.log(form)
        const body = {
            email: form.email,
            password: form.password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/login', body)
            .then((response) => {
                //salvar no local storage:
                window.localStorage.setItem('token', response.data.token)
                history.push('/lista')
            })
            .catch(err => console.log(err))
    }
    return <div>
        <PageTitle title={'Login'} />
        <FormContainer onSubmit={onSubmitLogin}>
            <TextField 
                label="Email"
                onChange={onChangeInput}
                value={form['email']}
                name={'email'}
                type={"email"}
                variant="outlined" />
            <TextField 
                label="Senha"
                onChange={onChangeInput}
                value={form['password']}
                name={'password'}
                type={"password"}
                variant="outlined" />
            <Button variant="contained" color="primary" type={'submit'}>Entrar</Button>
        </FormContainer>
    </div>
}
export default LoginPage