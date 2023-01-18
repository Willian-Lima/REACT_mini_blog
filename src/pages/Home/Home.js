import styles from './Home.module.css';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import PostDetail from '../../components/PostDetails/PostDetail';


const Home = () => {

  const [query, setQuery] = useState(null)
  const { documents: posts, loading } = useFetchDocuments("posts")

  const navigate = useNavigate();


  const handleSubit = (e) => {
    e.preventDefault();

    if(query) {
      return navigate(`/search?q=${query}`)
    }
  }
  
  console.log(loading)
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
          
          {loading && <p>Carregando...</p>}
          {posts && posts.map((post) => <PostDetail key={post.id} post={post} />) }
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