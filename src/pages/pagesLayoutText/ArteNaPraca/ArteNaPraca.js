import React from "react";
import Layout from "../../../components/LayoutPagesText/LayoutPagesText";
import BigArteNaPraca from "../../../assets/Texts/Big/BigArteNaPraca.jpg";

import ImagesPraca from "../../../assets/Texts/Small/ArteNaPraca/SmallArteNaPraca.jpg";
import ImagesArteNaPraca2 from "../../../assets/Texts/Small/ArteNaPraca/SmallArteNaPraca.jpg";

const ArteNaPraca = () => {

  const paragraphs = [
    "A intervenção provocava um questionamento sobre os problemas de mobilidade nos grandes centros urbanos.",
    "Formada por uma réplica de carruagem imperial e quatro cavalos esculpidos em escala real, a intervenção foi instalada a mais de 30 metros de altura sobre a ponte Octávio Frias de Oliveira na marginal Pinheiros, em São Paulo.",
    "A  obra comparava a velocidade média de deslocamento de um carro no trânsito paulistano, durante o horário de pico, com a velocidade de uma carruagem nos tempos do Império quando o asfalto sequer existia. Ambos se movimentam a lentos 20 quilômetros por hora."
  ];

  const images = [
    { src: ImagesPraca, objectPosition: '50% 80%' },
    { src: ImagesArteNaPraca2, objectPosition: '50% 70%' },
    { src: ImagesArteNaPraca2, objectPosition: '50% 70%' }
  ];

    return (
      <div>
        <Layout imageUrl={BigArteNaPraca} 
        alt={"Foto grande das crianças pintando na escola"} 
        objectPosition="50% 50%"
        titlePost={"UM DIA DE SOL É UM CONVITE"} 
        paragraphs={paragraphs} 
        images={images}/>
      </div>
    );
  };
  
  export default ArteNaPraca;