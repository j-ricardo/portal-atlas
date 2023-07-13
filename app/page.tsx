'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { 
  DivTelaInicial,
  DivTelaInicialCenter,
  DivMap,
  StyledRow,
  StyledCol,

} from './antd_styled';
import bg from './ico/IMAGEM-BANNER-INICIAL.png';
import logoFinal from './ico/LOGO_logo final.png';
import { 
  ComposableMap, 
  Geographies, 
  Geography,
  Marker
} from 'react-simple-maps';
const geoUrl = "/features_old.json";
import mit_cambridge from "./ico/MIT.png";
import ufrgs_porto_alegre from "./ico/UFRGS.png";
import ufg_goiania from "./ico/UFG.png";
import ubn_brasilia from "./ico/UNB.png";
import fgv_rio_de_janeiro from "./ico/UFG.png";
import bocconi_milan from "./ico/BOCCONI.png";
import bologna from "./ico/BOLOGNA.png";
import sabanci_tuzla from "./ico/SABANCI.png";
import sul_australia_adelaide from "./ico/SUL-AUSTRALIA.png";

const markers = [
  { markerOffset: -15, name: "Cambridge", coordinates: [ -71.1185, 42.3759 ] },
  { markerOffset: -15, name: "Porto Alegre", coordinates: [ -51.2300, -30.0331 ] },
  { markerOffset: 15, name: "Rio de Janeiro", coordinates: [ -43.2056, -22.9111 ] },
  { markerOffset:  25, name: "Brasilia", coordinates: [ -47.8825, -15.7942] },
  { markerOffset: -15, name: "Goiania", coordinates: [ -49.2500, -16.6667 ] },
  { markerOffset: -15, name: "Milan", coordinates: [ 9.1900, 45.4669 ] },
  { markerOffset: -15, name: "Bologna", coordinates: [ 11.3428, 44.4939 ] },
  { markerOffset: -15, name: "Tuzla", coordinates: [ 29.3006, 40.8161 ] },
  { markerOffset: -15, name: "Adelaide", coordinates: [ 138.6000, -34.9275 ] }
];

export default function Home() {
  const [windowSize, setWindowSize] = useState([ window!.innerWidth!, window!.innerHeight! ]);
  //const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

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

  const RetornaCor = (country: string) => {
    if (
      country === "Australia" ||
      country === "Turkey" ||
      country === "Italy" ||
      country === "Brazil" ||
      country === "United States" ||
      country === "United States of America"
    )
      return "#2c73a5";
    else 
      return "#0d3559";
  }

  const RetornaIconeCidade = (city: string) => {
    console.log(city);
    if (city === "Cambridge")
      return mit_cambridge;
    else if (city === "Porto Alegre")
      return ufrgs_porto_alegre;
    else if (city === "Rio de Janeiro")
      return fgv_rio_de_janeiro;
    else if (city === "Brasilia")
      return ubn_brasilia;
    else if (city === "Goiania")
      return ufg_goiania;
    else if (city === "Milan")
      return bocconi_milan;
    else if (city === "Bologna")
      return bologna;
    else if (city === "Tuzla")
      return sabanci_tuzla;
    else 
      return sul_australia_adelaide;    
  }

  return (
    <>
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
      <DivMap>
        <ComposableMap
          style={{ backgroundColor: "#00406e", width: '100%' }}
          projectionConfig={{
            scale: 210,
            center: [25, 10],
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                return (
                  <Geography 
                    key={geo.rsmKey} 
                    geography={geo}
                    fill={RetornaCor(geo.properties.name)}
                    stroke="#00406e"
                    enableBackground={1}
                  />
                );
              })
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker 
              key={name} 
              coordinates={[coordinates[0], coordinates[1]]}
              style={{ width: 200, height: 100}}
              >
              <Image
                src={RetornaIconeCidade(name)}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto', display: 'absolute', zIndex: 1000 }} 
                alt="Logo header"
              />
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </DivMap>
    </>
    
  )
}
