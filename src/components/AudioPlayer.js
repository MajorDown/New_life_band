import React from "react";

const audioPlayer = () => {
  return (
    <div className="audioPlayer">
      <audio src="chemin_vers_votre_fichier_audio.mp3" controls>
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
    </div>
  );
};

export default audioPlayer;
