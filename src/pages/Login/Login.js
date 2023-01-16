import styles from './Login.module.css';
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Login = () => {
    const [email,           setEmail]           = useState("");
    const [password,        setPassword]        = useState("");
    const [error,            setError]            = useState("");

    const { login, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            email,
            password
        };

        const res = await login(user)
      }

      useEffect(() => {
        setError(authError);
    }, [authError]);

  return (
    <div className={styles.container}>
        <h1>Entrar</h1>
        <p>Faça login para poder acessar sua conta.</p>
        <form className={styles.form} onSubmit={handleSubmit}>
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
            {!loading && <button type='submit' className='btn'>Entrar</button>}
            {loading && <button type='submit' className='btn' disabled>Aguarde...</button>}
            {error && <p className={styles.error}>{error}</p>}
        </form>
    </div>
  )
}

export default Login