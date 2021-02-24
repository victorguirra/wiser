import React, { useState, useEffect } from 'react';
import { Wrapper, ImgContainer, FormContainer, ForgotPasswordLink } from './styles';

import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Snackbar from '../../components/Snackbar';

import Image from '../../assets/images/woman.svg';

function Login(){
    const [ users, setUsers ] = useState([]);
    
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ errorMessage, setErrorMessage ] = useState('');
    
    const [ inputEmailIsValid, setInputEmailIsValid ] = useState(true);
    const [ inputPasswordIsValid, setInputPasswordIsValid ] = useState(true);

    const [ showSnackbar, setShowSnackbar ] = useState(false);

    useEffect(() => {
        (async() => {
            const { data } = await api.get();
            
            setUsers(data);
        })();
    }, [])

    async function handleSubmit(e){
        e.preventDefault();

        const filteredUser = await users.find(user => user.email === email);

        console.log(filteredUser);

        if(!filteredUser){
            setInputEmailIsValid(false);
            setErrorMessage('Insira um email válido!');
        }else if(filteredUser && password !== filteredUser.password){
            setInputEmailIsValid(true);
            setInputPasswordIsValid(false);
            setErrorMessage('Senha inválida!');
        }else{
            setInputEmailIsValid(true);
            setInputPasswordIsValid(true);
           
            setShowSnackbar(true);
        }
    }

    return(
        <>

            { showSnackbar && <Snackbar message="Login realizado com sucesso!" setShowSnackbar={setShowSnackbar} /> }

            <Wrapper>

                <ImgContainer>
                
                    <img src={ Image } alt="Login" />
                
                </ImgContainer>

                <FormContainer>

                    <form onSubmit={ handleSubmit }>

                        <h2>
                            Olá, seja <br/> bem-vindo!
                        </h2>

                        <p>
                            Para acessar a plataforma, <br/>
                            faça seu login.
                        </p>

                        <Input 
                            type="email" 
                            label="E-mail" 
                            placeholder="Digite seu e-mail"
                            name="email"
                            onChange={ e => setEmail(e.target.value) }
                            isValid={ inputEmailIsValid }
                            message={ errorMessage }
                        />

                        <Input 
                            type="password" 
                            label="Senha" 
                            placeholder="Digite sua senha"
                            name="password" 
                            onChange={ e => setPassword(e.target.value) }
                            isValid={ inputPasswordIsValid }
                            message={ errorMessage }
                        />

                        <Button />

                        <p>
                            Esqueceu seu login ou senha? <br />
                            Clique <ForgotPasswordLink to="#">aqui</ForgotPasswordLink>
                        </p>

                    </form>

                </FormContainer>
            
            </Wrapper>

        </>
    )
}

export default Login;