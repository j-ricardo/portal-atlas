'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from 'antd';
import { 
  DivTelaInicial,
  DivTelaInicialCenter,
  DivMap,
  StyledRow,
  StyledCol,
  StyledComposableMap
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
import Mit_cambridge from "./ico/MIT.png";
import Ufrgs_porto_alegre from "./ico/UFRGS.png";
import Fgv_rio_de_janeiro from "./ico/FGV.png";
import Ubn_brasilia from "./ico/UNB.png";
import Ufg_goiania from "./ico/UFG.png";
import Bocconi_milan from "./ico/BOCCONI.png";
import Bologna from "./ico/BOLOGNA.png";
import Sabanci_tuzla from "./ico/SABANCI.png";
import Sul_australia_adelaide from "./ico/SUL-AUSTRALIA.png";
import Apoio from "./ico/apoio.png";

const markers = [
  { name: "Cambridge", coordinates: [ -71.1185, 42.3759 ] },
  { name: "Porto Alegre", coordinates: [ -51.2300, -30.0331 ] },
  { name: "Rio de Janeiro", coordinates: [ -43.2056, -22.9111 ] },
  { name: "Brasilia", coordinates: [ -47.8825, -15.7942 ] },
  { name: "Goiania", coordinates: [ -49.2500, -16.6667 ] },
  { name: "Milan", coordinates: [ 9.1900, 45.4669 ] },
  { name: "Bologna", coordinates: [ 11.3428, 44.4939 ] },
  { name: "Tuzla", coordinates: [ 29.3006, 40.8161 ] },
  { name: "Adelaide", coordinates: [ 138.6000, -34.9275 ] }
];

const fatorMultPrinc: number = 0.40;
const fatorMultSecond: number = 0.35;

export default function Home() {
  const [windowSize, setWindowSize] = useState([ window!.innerWidth!, window!.innerHeight! ]);
  const mapRef = useRef<HTMLInputElement>();
  const [heightMap, setHeightMap] = useState<number>(0);

  useEffect(() => {
    if(mapRef.current !== undefined ){
      setHeightMap(mapRef.current.clientHeight!);
    }
  }, [mapRef]);

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
        <div
          style={{ 
            position: 'absolute',
            zIndex: 999,
            width: '100%',
            height: heightMap
          }}
        >
          <h1>
            Rede de colaboração
          </h1>
          <div
            style={{
              width: '100%',
              margin: 'auto',
              textAlign: 'center', 
              position: 'absolute',      
              bottom: 0,
              marginBottom: 15    
            }}
          >
            <Image
              src={Apoio}
              width={0}
              height={0}
              style={{ 
                width: '60%',
                maxWidth: 500,
                height: 'auto',
                bottom: 0
              }} 
              alt="apoio"
            />
          </div>
        </div>
        <StyledComposableMap
          ref={mapRef}
          style={{ backgroundColor: "#00406e", width: '100%' }}
          projection="geoMercator"
          projectionConfig={{
            scale: 140,
            center: [15, 25],
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
          <Marker
            key="marker1"
            coordinates={[ -71.1185 - 74, 42.3759 + 2 ]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Mit_cambridge.src}
                height={312*fatorMultPrinc}
                width={465*fatorMultPrinc}
              />
            </svg>
          </Marker>          
          <Marker
            key="marker2"
            coordinates={[ -51.2300 - 96, -30.0331 + 29 ]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Ufrgs_porto_alegre.src}
                height={312*fatorMultPrinc}
                width={603*fatorMultPrinc}
              />
            </svg>
          </Marker>          
          <Marker
            key="marker3"
            coordinates={[ -43.2056 - 25, -22.9111 + 2]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Fgv_rio_de_janeiro.src}
                height={256*fatorMultSecond}
                width={214*fatorMultSecond}
              />
            </svg>
          </Marker>
          <Marker
            key="marker4"
            coordinates={[ -47.8825 - 1, -15.7942 + 2]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Ubn_brasilia.src}
                height={296*fatorMultSecond}
                width={238*fatorMultSecond}
              />
            </svg>
          </Marker>                 
          <Marker
            key="marker5"
            coordinates={[ -49.2500 - 1, -16.6667 + 1 ]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Ufg_goiania.src}
                height={278*fatorMultSecond}
                width={417*fatorMultSecond}
              />
            </svg>
          </Marker>           
          <Marker
            key="marker6"
            coordinates={[ 9.1900 - 32, 45.4669 + 380 ]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Bocconi_milan.src}
                height={260*fatorMultSecond}
                width={231*fatorMultSecond}
              />
            </svg>
          </Marker>
          <Marker
            key="marker7"
            coordinates={[ 11.3428 - 5, 44.4939 + 381 ]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Bologna.src}
                height={282*fatorMultSecond}
                width={196*fatorMultSecond}
              />
            </svg>
          </Marker>
          <Marker
            key="marker8"
            coordinates={[ 29.3006 + 0, 40.8161 + 384.5]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Sabanci_tuzla.src}
                height={313*fatorMultSecond}
                width={211*fatorMultSecond}
              />
            </svg>
          </Marker>
          <Marker
            key="marker9"
            coordinates={[ 138.6000 - 35, -34.9275 + 4 ]}
          > 
            <svg xmlns="/#pattern">
             <image
                href={Sul_australia_adelaide.src}
                height={206*fatorMultSecond}
                width={267*fatorMultSecond}
              />
            </svg>
          </Marker>
        </StyledComposableMap>
      </DivMap>
    </>
  )
}




