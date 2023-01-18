import styles from './Search.module.css';

import { useFetchDocuments } from '../../hooks/useFetchDocuments';
import { useQuery } from '../../hooks/useQuery';
import PostDetail from '../../components/PostDetails/PostDetail';
import { Link } from 'react-router-dom';

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search.toLowerCase());

  return (
    <div>
        <h2 className={styles.title}>Busca</h2>
        <div className={styles.home}>
            {posts && posts.length === 0 && (
                <>
                    <p>Nada encontrado :(</p>
                    <Link to="/" className='btn btn-dark'>Voltar</Link>
                </>
            )}
            {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
    </div>
    
  )
}

export default Search