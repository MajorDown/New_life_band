"use client";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../../contexts/UserContext";
import useDate from "../../../tools/front/useDate";

const CreateArticle = () => {
  const { userId, updateuserId } = useUserContext();
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState([]);

  useEffect(() => {
    if (!userId) return <p>Vous devez être connecté pour créer un article !</p>;
  }, []);

  return (
    <section id="createArticle">
      <h2>Création d'un nouvel article</h2>
      <p>
        à noter : un article peux contenir jusqu'a 6 éléments de type 'text',
        'image' ou 'vidéo'
      </p>
      <form>
        <div id="titleForm">
          <label htmlFor="titleInput">Titre de l'article :</label>
          <input
            type="text"
            id="titleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Votre titre"
          />
        </div>
      </form>
    </section>
  );
};

export default CreateArticle;
