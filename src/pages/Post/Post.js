import styles from './Post.module.css';

// Hooks
import { useParams } from 'react-router-dom';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchDocument("posts", id);
  return (
    <div className={styles.post_detail}>
        {loading && (
            <div className='loading'>
                <div></div>
            </div>
        )}
        {post && (
            <>
                <h1>{post.title}</h1>
                <div className={styles.img}>
                    <img className={styles.img} src={post.image} alt={post.title} />
                </div>
                <p>{post.body}</p>
                <h3>Este post trata sobre:</h3>
                {post.tags.map((tag) => (
                    <span key={tag}>
                        <span> #</span>
                        {tag}
                    </span>
                ))}
            </>
        )}
    </div>
  )
}

export default Post