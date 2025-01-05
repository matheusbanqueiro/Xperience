// src/pages/Solutions/index.tsx
import React from 'react';
import Hero from './Hero';
import IntroSection from '../../components/IntroSection';

const Solutions: React.FC = () => {
  
  const introSectionImage = new URL('/public/components/intro-section/happy-woman.png', import.meta.url).href;

  return (
    <div className="bg-[#F34A0D]">
      <Hero />
      <IntroSection 
        imageSrc={introSectionImage}
        imageAlt="Mulher sorridente fazendo sinal de OK"
        title="Consultoria empresarial sob medida para pequenos empreendedores"
        description="A Xperience oferece serviços inovadores, projetados para atender as principais necessidades de pequenos negócios, desde organização de processos até estratégias de expansão."
        highlightedText="trazer resultados rápidos e eficientes, com soluções práticas e acessíveis!!!"
        className='bg-[#FFFF]'
      />
    </div>
  );
};

export default Solutions;