import { Fragment } from "react";
import { Link } from "react-router-dom";

import styles from "./PostDetail.module.css";

const PostDetail = ({ post }) => {
  return (
    <div className={styles.post_detail}>
      <Link to={`/posts/${post.id}`} className={styles.link}>
      <div className={styles.img}>
        <img className={styles.img} src={post.image} alt={post.title} />
      </div>
      
        <h2>{post.title}</h2>
      </Link>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            <Fragment>
              <Link to={`/search?q=${tag}`} className={styles.link}>
                {tag}
              </Link>
            </Fragment>
          </p>
        ))}
      </div>
    </div>
  );
};

export default PostDetail;