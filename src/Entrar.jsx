import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/Entrar.module.css';
import img from './assets/img/bro.png'

function Entrar() {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/login');
    };
    
    return (
        <div  className={styles.container}>
            <div className={styles.loginCard}>
            <div className={styles.btn}>
                <button className={styles.buttons} onClick={handleLogin}>Login</button>
            </div>
            <div className={styles.btn}>
                <button className={styles.buttonsRosa}  onClick={handleLogin}>Criar conta</button>
            </div>
            <img className={styles.image} src={img} alt="Imagem de um casal tirando selfie" />
            </div>
        </div >
    );
}

export default Entrar;