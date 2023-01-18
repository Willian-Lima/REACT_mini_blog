import styles from './EditPost.module.css';

import { useState, useEffect } from 'react';
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';

function CreatePost() {

  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id)

  const [title, setTitle] = useState("");
  const [image,     setImage] = useState("");
  const [body,   setBody] = useState("");
  const [tags,   setTags] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if(post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tags.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array (Divide o array aonde estiver as "," depois retira os espaços e coloca tudo em caixa baixa)
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }

    updateDocument(id, data);

    // redirect to home page
    navigate("/posts/dasboard");
  };

  return (
    <div className={styles.create_post}>
      {post && (
        <>
          <p>Altere os dados do post</p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              <span className={styles.span}>Título:</span>
              <input
                type="text"
                name="text"
                required
                placeholder="Pense num bom título..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>
            <label>
              <span className={styles.span}>URL da imagem:</span>
              <input
                type="text"
                name="image"
                required
                placeholder="Insira uma imagem que representa seu post"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <p>Preview da imagem salva:</p>
            <div className={styles.img}>
              <img className={styles.img} src={post.image} alt={post.title} />
            </div>
            <label>
              <span className={styles.span}>Conteúdo:</span>
              <textarea
                name="body"
                required
                placeholder="Insira o conteúdo do post"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
            </label>
            <label>
              <span className={styles.span}>Tags:</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="Insira as tags separadas por vírgula"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>
            {!response.loading && <button className="btn">Salvar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde.. .
              </button>
            )}
            {(response.error || formError) && (
              <p className="error">{response.error || formError}</p>
            )}
          </form>
        </>
      )}
    </div>
  )
}

export default CreatePost