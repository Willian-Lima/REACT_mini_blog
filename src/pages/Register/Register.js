import styles from './Register.module.css';

import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [displayName,     setDisplayName]     = useState("");
    const [email,           setEmail]           = useState("");
    const [password,        setPassword]        = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,            setError]            = useState("");

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user)

        console.log(user);
    }

    useEffect(() => {
        setError(authError);
    }, [authError])

  return (
    <div className={styles.container}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie uma conta e compartilhe suas histórias.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                <input 
                    type="text" 
                    name='displayName' 
                    required 
                    placeholder='Nome do usuário'
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <span>Nome</span>
            </label>
            <label>
                <input 
                    type="email" 
                    name='email' 
                    required 
                    placeholder='Email do usuário'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
            </label>
            <label>
                <input 
                    type="password" 
                    name='password' 
                    required 
                    placeholder='Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <span>Senha</span>
            </label>
            <label>
                <input 
                    type="password" 
                    name='confirmPassword' 
                    required 
                    placeholder='Confirmar senha'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span>Confirmar senha</span>
            </label>
            {!loading && <button type='submit' className='btn'>Registrar</button>}
            {loading && <button type='submit' className='btn' disabled>Aguarde...</button>}
            {error && <p className={styles.error}>{error}</p>}
        </form>
    </div>
  )
}

export default Register