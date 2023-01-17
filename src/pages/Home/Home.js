import styles from './Home.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';


const Home = () => {

  const [query, setQuery] = useState(null)
  const [posts] = useState([])

  const handleSubit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.home}>
        <h1>Veja nossos posts ais recentes</h1>
        <form className={styles.form} onSubmit={handleSubit}>
          <input 
          type="text" 
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)} />
          <button type='subit' className={styles.btn}>Pesquisar</button>
        </form>
        <div>
          <h1>Posts...</h1>
          {posts && posts.length === 0 && (
            <div className={styles.noposts}>
              <p>Não foram encontrados posts</p>
              <Link to="/posts/create" className='btn'>
                Criar primeiro post
              </Link>
            </div>
          )}
        </div>
    </div>
  )
}

export default Home