'use client'
import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import { Montserrat } from 'next/font/google'
import { Layout } from 'antd';
import HeaderComponent from './components/header/headerComponent';
import FooterComponent from './components/footer/footerComponent';
import { 
  GlobalStyle,
} from './antd_styled';
import { Providers } from './redux/provider';

const { Content } = Layout;

const mont = Montserrat({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [windowSize, setWindowSize] = useState([ window!.innerWidth!, window!.innerHeight! ]);

  useEffect(() => {    
    const handleWindowResize = () => {
      if (typeof window !== "undefined") {
        setWindowSize([window.innerWidth, window.innerHeight]);
      }      
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
      </Head>
      <body 
        className={mont.className}
        style={{ margin: 0 }}
      >
        <Providers>
          <GlobalStyle />
          <Layout className="layout">
            <HeaderComponent windows={windowSize} />
            <Content style={{ width: '100%', height: '100%' }}>
              {children}
            </Content>
            <FooterComponent windows={windowSize} />
          </Layout>
        </Providers>        
      </body>
    </html>
  )
}