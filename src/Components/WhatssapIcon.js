import React from 'react';
import { FaWhatsapp } from "react-icons/fa";


const WhatsAppIcon = () => {
  // Substitua o link e o caminho do ícone conforme necessário
  let message;
  message = `Olá, gostaria de obter mais informações sobre as passagens`;

  const encode = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/5532984957373?text=${encode}`;

  return (
    <div style={styles.whatsappIcon}>
      <a href={whatsappLink} target="_blank" rel="noreferrer">
        <FaWhatsapp style={styles.iconImage} />
      </a>
    </div>
  );
};


const styles = {
  whatsappIcon: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  },
  iconImage: {
    width: '50px', // Ajuste o tamanho conforme necessário
    height: 'auto',
    color: '#00a651', // Define a cor do ícone
  },
 }
;

export default WhatsAppIcon;
