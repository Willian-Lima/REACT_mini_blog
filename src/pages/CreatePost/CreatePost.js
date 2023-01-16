import React from 'react';
import styles from './CreatePost.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';

function CreatePost() {

  const [title, setTitle] = useState("");
  const [img,     setImg] = useState("");
  const [body,   setBody] = useState("");
  const [tags,   setTags] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <h2>Criar post</h2>
    </div>
  )
}

export default CreatePost