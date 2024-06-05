import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./css/Login.module.css"
import img from "./assets/img/lock.png"

function LoginPath(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/home');
    };

    return(
        <div className={styles.container}>
            <div className={styles.loginCard}>
            <input className={styles.input} type="text" placeholder='email'/>
            <input className={styles.input} type="password" id="" placeholder='senha'/>
            <div className={styles.containerButtons}>
            <button className={styles.buttons} onClick={handleLogin}>Login</button>
            <button className={styles.buttonsRosa} onClick={handleLogin}>Criar conta</button>
            </div>
            <img src={img} alt="mulher desbloqueando tela" />
            </div>
        </div>

    )
}

export default LoginPath;