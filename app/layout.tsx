'use client'
import type { Metadata } from 'next'
import Head from 'next/head'
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google'
import { Layout, Space, Button } from 'antd';
import Icon, { GithubOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { 
  DivHeader,
  StyledMenu
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
  return (
    <html lang="pt">
      <Head>
        <title>Atlas de oportunidades</title>
      </Head>
      <body 
        className={mont.className}
        style={{ height: '100%', width: '100%', margin: 0 }}
      >
        <Layout className="layout">
          <Header 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              background: '#000',
              width: '100%',
              height: '20%'
            }
          }>
            <DivHeader>
              <Image
                src={headerIcon}
                width={159}
                height={80}
                style={{ marginRight: 60 }}
                alt="Logo header"
              />
              <Space size={'middle'}>
                <StyledMenu
                  mode="horizontal"
                  items={items}
                />
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
                    paddingLeft: 15,
                    paddingRight: 15
                  }}
                >
                  Ir para o atlas
                </Button>
              </Space>              

            </DivHeader>
          </Header>
          <Content style={{ padding: 20, width: '100%', height: '100%' }}>
            {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </body>
    </html>
  )
}
