'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { 
  DivTelaInicial,
  DivTelaInicialCenter,
  StyledRow,
  StyledCol
} from './antd_styled';
import bg from './ico/IMAGEM-BANNER-INICIAL.png';
import logoFinal from './ico/LOGO_logo final.png';

export default function Home() {
  const [windowSize, setWindowSize] = useState([ window!.innerWidth!, window!.innerHeight! ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };

  }, []);

  const RetornaConteudoInicial = () => {
    if(windowSize[0] > 1030){
      return (
        <StyledRow 
          gutter={[ 64, 16 ]}
          style={{}}
        >
          <StyledCol 
            flex="50%"
            style={{
              marginRight: 0
            }}
          >
            <h1>
              Descubra o poder da ciência de dados e da Inteligência Artificial 
              para impulsionar o desenvolvimento!
            </h1>
            <h2
              style={{
                textAlign: 'justify'
              }}
            >
              O Atlas de Oportunidades é um projeto open-source materializado num 
              site gratuito de apoio à decisão que visa ajudar empreendedores, empresas, 
              governos e outros púbicos interessados em identificar oportunidades de negócios. 
              O projeto combina várias fontes de dados, processadas com ciência de dados espaciais e 
              algoritmos de Inteligência Artificial. O Atlas traduz as teorias e métodos científicos 
              mais avançados das áreas de administração, estatística e ciência da computação num site 
              simples, intuitivo e interativo voltado à geração de empregos, renda e fomentar o desenvolvimento 
              econômico sustentável.
            </h2>
            <Button 
              style={{
                textTransform: 'uppercase',
                marginTop: 10,
                color: '#0A74A6',
                fontSize: 14,
                fontWeight: 500,
              }}
              type="primary" ghost
            >
              Saiba mais...
            </Button>
          </StyledCol>
          <StyledCol
            flex="50%"
            style={{
              height: '100%'
            }}
          >
            <Image
              src={logoFinal}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }} 
              alt="Logo atlas oportunidades"
            />
          </StyledCol>
        </StyledRow>
      );

    } else {
      return (
        <StyledRow 
        >
          <StyledCol 
            flex="100%"
            style={{
              marginRight: 0
            }}
          >
            <h1>
              Descubra o poder da ciência de dados e da Inteligência Artificial 
              para impulsionar o desenvolvimento!
            </h1>
            <h2
              style={{
                textAlign: 'justify'
              }}
            >
              O Atlas de Oportunidades é um projeto open-source materializado num 
              site gratuito de apoio à decisão que visa ajudar empreendedores, empresas, 
              governos e outros púbicos interessados em identificar oportunidades de negócios. 
              O projeto combina várias fontes de dados, processadas com ciência de dados espaciais e 
              algoritmos de Inteligência Artificial. O Atlas traduz as teorias e métodos científicos 
              mais avançados das áreas de administração, estatística e ciência da computação num site 
              simples, intuitivo e interativo voltado à geração de empregos, renda e fomentar o desenvolvimento 
              econômico sustentável.
            </h2>
          </StyledCol>
        </StyledRow>
      );
    }
  }

  return (
    <DivTelaInicial
      style={{
        backgroundImage: `url(${bg.src}) `,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <DivTelaInicialCenter>
        {RetornaConteudoInicial()}        
        
      </DivTelaInicialCenter>
      
    </DivTelaInicial>
    
  )
}
