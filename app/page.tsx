'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Button, Card, Row, Col, Space } from 'antd';
import Icon, { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { 
  DivTelaInicial,
  DivTelaInicialCenter,
  DivMap,
  StyledRow,
  StyledCol,
  StyledComposableMap,
  DivTelaSplit,
  StyledDivTwoColors,
  StyledDivPublicacoes
} from './antd_styled';
import bg from './ico/IMAGEM-BANNER-INICIAL.png';
import logoFinal from './ico/pt/LOGO_logo_final.png';
import Colaboradores from "./ico/pt/COLABORADORES.png";
import Video from "./ico/pt/VIDEO.png";
import Apoio from "./ico/pt/apoio.png";
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

const fatorMultPrinc: number = 0.40;
const fatorMultSecond: number = 0.35;

function Home() {
  const [windowSize, setWindowSize] = useState([ window!.innerWidth!, window!.innerHeight! ])
  const mapRef = React.useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
  const [heightMap, setHeightMap] = useState<number>(0);
  const [widthMap, setWidthMap] = useState<number>(0);

  useEffect(() => {
    if(mapRef.current !== undefined ){
      setHeightMap(mapRef.current.clientHeight!);
      setWidthMap(mapRef.current.clientWidth!);
    }
  }, [windowSize]);

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
                borderColor: '#0A74A6',
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
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <Image
              src={logoFinal}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', maxWidth: 489, height: 'auto', marginRight: 0 }} 
              alt="Logo atlas oportunidades"
            />
          </StyledCol>
        </StyledRow>
      );

    } else {
      return (
        <StyledRow>
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
                borderColor: '#0A74A6',
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

  const RetornaSaibaMais = () => {
    if(windowSize[0] > 1030){
      return (  
        <DivTelaInicialCenter style={{ marginBottom: 0}}>
          <StyledRow>
            <StyledCol 
              flex="50%"
              style={{
                paddingRight: '5%',
              }}
            >
              <h1
                style={{ color: '#1DC0A9', marginBottom: 80 }}
              >
                Perfil de dados
              </h1>
              <h2
                style={{
                  textAlign: 'justify',
                  color: '#fff'
                }}
              >
                O Atlas de Oportunidades integra uma vasta 
                gama de dados provenientes de diversas fontes 
                de pesquisa, como o IBGE, o REGIC, o Banco Central do Brasil, 
                dentre outras. Analisamos, processamos e entregamos informações 
                de qualidade em diferentes níveis geográficos, abrangendo estados, 
                cidades e até mesmo dados censitários. Mas não paramos por aí. 
                Para facilitar ainda mais a sua jornada de descoberta, utilizamos 
                como base a classificação de Smart Cities do Urban Systems (2018). 
                Essa classificação nos permite organizar as diversas variáveis 
                disponíveis em nossa plataforma, proporcionando uma visualização 
                aprimorada e facilitando a consulta por dados de seu interesse 
                específico.
              </h2>
              <Button 
                style={{
                  textTransform: 'uppercase',
                  marginTop: 80,
                  color: '#0A74A6',
                  borderColor: '#0A74A6',
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
                height: '100%',
                paddingLeft: 0,
                paddingRight: 0
              }}
            >
              <Image
                src={Colaboradores}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', maxWidth: 489, height: 'auto', marginRight: 0 }} 
                alt="Logo atlas oportunidades"
              />
            </StyledCol>
          </StyledRow>
        </DivTelaInicialCenter>        
      );

    } else {
      return (
        <DivTelaInicialCenter style={{ marginBottom: 0}}>
          <StyledRow 
            style={{ backgroundColor: '#01273C' }}
          >
            <StyledCol 
              flex="100%"
              style={{
                marginTop: '10%',
                marginBottom: '10%',
              }}
            >
              <h1 style={{ color: '#1DC0A9' }}>
                Perfil de dados
              </h1>
              <h2
                style={{
                  textAlign: 'justify',
                  color: '#fff'
                }}
              >
                O Atlas de Oportunidades integra uma vasta 
                gama de dados provenientes de diversas fontes 
                de pesquisa, como o IBGE, o REGIC, o Banco Central do Brasil, 
                dentre outras. Analisamos, processamos e entregamos informações 
                de qualidade em diferentes níveis geográficos, abrangendo estados, 
                cidades e até mesmo dados censitários. Mas não paramos por aí. 
                Para facilitar ainda mais a sua jornada de descoberta, utilizamos 
                como base a classificação de Smart Cities do Urban Systems (2018). 
                Essa classificação nos permite organizar as diversas variáveis 
                disponíveis em nossa plataforma, proporcionando uma visualização 
                aprimorada e facilitando a consulta por dados de seu interesse 
                específico.
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
        </DivTelaInicialCenter>
        
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

  const RetornaCardsPublicacoes = () => {
    var quant = 3;
    var flexSize = "33.33%";
    if(widthMap >= 1250){
      quant = 3;
      flexSize = "33.33%";
    } else if (widthMap >= 830 && widthMap <= 1249){
      quant = 2;
      flexSize = "50%";
    } else {
      quant = 1;
      flexSize = "100%";
    }

    var listCards = [
      <Col flex={flexSize} key={"card1"}>
        <Card style={{ width: '100%', height: 260 }}>
          <p>Disaggregating Sales Prediction: A Gravitational Approach.</p>
          <span>EXPERT SYSTEMS WITH APPLICATIONS, v. 217, p. 119565, 2023.</span>
          <Button
            style={{
              background: '#0A74A6',
              textTransform: 'uppercase',
              color: '#fff',
              border: 0,
              fontSize: 13,
              marginTop: 20,
              marginBottom: 'auto',
              position: 'absolute',
              left: 24,
              bottom: 24
            }}
          >
            Saiba mais
          </Button>
        </Card>
      </Col>,
      <Col flex={flexSize} key={"card2"}>
        <Card style={{ width: '100%', height: 260 }}>
          <p>Choice deferral: The interaction effects of visual boundaries and consumer knowledge</p>
          <span>JOURNAL OF RETAILING AND CONSUMER SERVICES, v. 68, p. 103058, 2022</span>
          <Button
            style={{
              background: '#0A74A6',
              textTransform: 'uppercase',
              color: '#fff',
              border: 0,
              fontSize: 13,
              marginTop: 20,
              marginBottom: 'auto',
              position: 'absolute',
              left: 24,
              bottom: 24
            }}
          >
            Saiba mais
          </Button>
        </Card>
      </Col>,
      <Col flex={flexSize} key={"card3"}>
        <Card style={{ width: '100%', height: 260 }}>
          <p>When repetitive consumption leads to predictions of faster adaptation</p>
          <span>Journal of Consumer Behaviour, v. 19, p. 450-462, 2020</span>
          <Button
            style={{
              background: '#0A74A6',
              textTransform: 'uppercase',
              color: '#fff',
              border: 0,
              fontSize: 13,
              marginTop: 20,
              marginBottom: 'auto',
              position: 'absolute',
              left: 24,
              bottom: 24
            }}
          >
            Saiba mais
          </Button>
        </Card>
      </Col>
    ];

    return listCards.slice(0, quant);
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
      <DivMap
        ref={mapRef}
      >
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
              marginBottom: '2%'    
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
          style={{ backgroundColor: "#00406e", width: '100%' }}
          projection="geoMercator"
          projectionConfig={{
            scale: 140,
            center: [5, 25],
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
      <DivTelaSplit style={{ marginBottom: 0 }}>
        {RetornaSaibaMais()}
      </DivTelaSplit>
      <StyledDivTwoColors>
        <DivTelaInicialCenter style={{ marginBottom: 0 }}>
          <Image
            src={Video}
            width={0}
            height={0}
            sizes="100vw"
            style={{ 
              width: '100%', 
              height: 'auto', 
              marginTop: 30,
              marginBottom: 30
            }} 
            alt="Logo atlas oportunidades"
          />
        </DivTelaInicialCenter>        
      </StyledDivTwoColors>
      <div style={{ background: '#fff', paddingBottom: 20 }}>
        <StyledDivPublicacoes>
            <h1>
              Publicações
            </h1>
            <Row gutter={24}>
              {RetornaCardsPublicacoes()}
            </Row>
            <Row gutter={[16, 16]}>
              <Col flex="80%">
                <Button 
                  style={{
                    marginTop: 30,
                    textTransform: 'uppercase',                  
                    color: '#0A74A6',
                    borderColor: '#0A74A6',
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                  type="primary" ghost
                >
                  Ver todos
                </Button>
              </Col>
              <Col flex="20%"
                style={{ marginTop: 30 }}
              >
                <Space 
                  style={{
                    position: 'absolute',
                    right: 8,
                    bottom: 0
                  }}
                >
                  <Button 
                    style={{ 
                      background: '#fff', 
                      borderColor: '#0A74A6', 
                      padding: 6 
                    }}
                    icon={
                      <LeftOutlined 
                        style={{ color: '#0A74A6' }}
                      />
                    }
                  />
                  <Button 
                    style={{ 
                      background: '#fff', 
                      borderColor: '#0A74A6', 
                      padding: 6 
                    }}
                    icon={
                      <RightOutlined
                        style={{ color: '#0A74A6' }}
                      />
                    }
                  />
                </Space>
              </Col>
            </Row>
        </StyledDivPublicacoes>
      </div>      
    </>
  )
}

export default Home;