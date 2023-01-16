import React from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>Este projeto consiste na construção de um mini blog desenvolvido com React.js no front-end e firebase no back-end.</p>
        <Link className='btn' to={'/posts/create'}>Criar postagem</Link>
    </div>
    
  )
}

export default About