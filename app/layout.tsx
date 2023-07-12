'use client'
import type { Metadata } from 'next'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import { Layout, Space, Button } from 'antd';
import Icon, { GithubOutlined, MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { 
  DivHeader,
  StyledMenu,
  StyledDrawer,
  GlobalStyle
} from './antd_styled';
import headerIcon from './ico/LOGO_TOPO_BRANCA.png';
import ptIcon from './ico/icon_pt.png';
import enIcon from './ico/icon_en.png';

const { Header, Content, Footer } = Layout;

const mont = Montserrat({ subsets: ['latin'] });

const items: MenuProps['items'] = [
  {
    label: 'O projeto',
    key: 'projeto'
  },
  {
    label: 'Colaboradores',
    key: 'colaboradores'
  },
  {
    label: 'Perfil de dados',
    key: 'perfil'
  },
  {
    label: 'Tutorial',
    key: 'tutorial'
  },
  {
    label: 'Grupo de pesquisa',
    key: 'grupo_pesquisa'
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [ openMenu, setOpenMenu ] = useState<boolean>(false);

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

  return (
    <html lang="pt">
      <Head>
        <title>Atlas de oportunidades</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" 
          rel="stylesheet"/>
      </Head>
      <body 
        className={mont.className}
        style={{ margin: 0 }}
      >
        <GlobalStyle />
        <Layout className="layout">
          <Header 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              background: 'transparent',
              width: '100%',
              height: 120,
              padding: 0,
              position: 'absolute',
              zIndex: 999
            }
          }>
            <DivHeader>
              <Image
                src={headerIcon}
                width={159}
                height={80}
                style={{ marginRight: 0 }}
                alt="Logo header"
              />
              <Space 
                size={'middle'}
              >         
                {
                  windowSize[0] > 1358?
                  <StyledMenu
                    mode={ "horizontal" }
                    items={items}
                  />
                  :
                  <></>
                }
                <Button
                  style={{ background: '#0A74A638', border: 0 }}
                  icon={
                    <GithubOutlined
                      style={{ color: '#fff' }} 
                    />
                  }
                />
                <Button
                  style={{ 
                    width: 32,
                    height: 32,
                    background: '#0A74A638', 
                    border: 0,
                  }}
                  icon={
                    <Image
                      src={ptIcon}
                      style={{ margin: 'auto' }}
                      width={20}
                      height={16}
                      alt="Logo header"
                    />
                  }
                />
                <Button
                  style={{
                    background: '#0A74A6',
                    textTransform: 'uppercase',
                    color: '#fff',
                    border: 0,
                    paddingLeft: 30,
                    paddingRight: 30,
                    fontSize: 13 
                  }}
                >
                  Ir para o atlas
                </Button>
                {
                  windowSize[0] < 1359?
                  <>
                    <Button 
                      icon={
                        <MenuOutlined 
                          style={{ color: '#fff' }}
                        />
                      } 
                      style={{ background: 'transparent' }}
                      onClick={() => setOpenMenu(true)}
                    />
                    <StyledDrawer
                      width={500}
                      onClose={() => setOpenMenu(false)}
                      open={openMenu}
                    >
                      <StyledMenu
                          mode={ "vertical" }
                          items={items}
                        />
                    </StyledDrawer>
                  </>
                  :
                  <></>
                }
                
              </Space>
            </DivHeader>
          </Header>
          <Content style={{ width: '100%', height: '100%' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </body>
    </html>
  )
}

