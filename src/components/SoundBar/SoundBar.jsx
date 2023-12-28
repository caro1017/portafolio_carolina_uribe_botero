import { useState } from "react";
import { IconButton } from "@mui/material";

import audio from "../../../public/audio/MA_Awesomemusic_ModernInterior.mp4";

const SoundBar = () => {
  // Estado para controlar qué icono se muestra
  const [isSoundMute, setSoundMute] = useState(true);

  // Función para alternar entre los iconos al hacer clic
  const handleIconChange = () => {
    setSoundMute(!isSoundMute);
    const audio = document.getElementById("audio");

    if (isSoundMute) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };
  return (
    <div>
      <IconButton aria-label="Cambio tema" onClick={handleIconChange}>
        {isSoundMute ? (
          <i className="bx bx-volume-mute text-grey hover:text-blue text-xl" />
        ) : (
          <i className="bx bx-volume-full text-grey hover:text-blue text-xl" />
        )}
      </IconButton>
      <audio id="audio" loop>
        <source src={audio} type="audio/mp4"/>
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default SoundBar;
