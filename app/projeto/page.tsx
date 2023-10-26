'use client'
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { 
    DivTelaInicialColaboradores,
    DivTelaInicialProjeto,
    StyledCol,
    StyledRow,
    DivTelaInicialCenter
} from "@/app/antd_styled";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { MenuSelected, changePage, menuSelector } from '@/app/features/menuSlice';
import { LocaleLang, langSelector } from "@/app/features/localeSlice";
import RetornaFoto from '../helper/returnFotoById';
import { Button, Space } from 'antd';
import bg_fundo_projeto from '@/public/ico/fundo_projeto.png';
import useWindowDimensions from "@/app/helper/useWindowDimension";

export default function Projeto(){
    const { width, height } = useWindowDimensions();
    const [localeSel, setLocaleSel] = useState<LocaleLang>();    
    const selectedLocale = useAppSelector(langSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const m: MenuSelected = {
            idMenu: 1,
            keyName: 'projeto'
        };
        dispatch(changePage(m));
    }, [])

    useLayoutEffect(() => {
        setLocaleSel(selectedLocale);
    }, [selectedLocale]);

    return (
        <>
            <DivTelaInicialColaboradores />
            <DivTelaInicialProjeto
                key={"main"}
                style={{
                    height: 700,
                    background: width! > 1386? `no-repeat 80% center / contain url(${bg_fundo_projeto.src}), linear-gradient(90deg, #fff 80%, #53bfaf 20%)` : `no-repeat 90% center / contain url(${bg_fundo_projeto.src}), linear-gradient(90deg, #fff 90%, #54bcb4 10%)`,
                }}
            >
                <DivTelaInicialCenter>
                    <StyledRow 
                        gutter={[64, 16]}                        
                    >
                        <StyledCol
                            flex="60%"
                            style={{
                                marginRight: 0,
                            }}
                        >
                            <h1 key={"h1Main"} style={{color: '#0A74A6', marginBottom: 20 }}>{localeSel?.languageJson.page_4_title_1}</h1>
                            <h2
                                key={"h2Main"} 
                                style={{
                                    color: '#4E4E4E',
                                    textAlign: "justify",
                                    lineHeight: 1.5,
                                    fontSize: 18,
                                    marginBottom: 20 
                                }}
                            >
                                {localeSel?.languageJson.page_4_t1_content_1}
                            </h2>
                            <h2
                                key={"h22Main"} 
                                style={{
                                    color: '#4E4E4E',
                                    textAlign: "justify",
                                    lineHeight: 1.5,
                                    fontSize: 18,
                                    marginBottom: 10
                                }}
                            >
                                {localeSel?.languageJson.page_4_t1_content_2_pt1}
                                <Link href="https://opportunity.mit.edu/" rel="noopener noreferrer" target="_blank">
                                    <span>{localeSel?.languageJson.page_4_t1_content_2_label_1}</span>
                                </Link>
                                {localeSel?.languageJson.page_4_t1_content_2_pt2}
                                <Link href="https://mtb.mit.edu/explore/rochester#map=9.6/43.1556/-77.685" rel="noopener noreferrer" target="_blank">
                                    <span>{localeSel?.languageJson.page_4_t1_content_2_label_2}</span>
                                </Link>
                                {localeSel?.languageJson.page_4_t1_content_2_pt3}
                                <Link href="https://github.com/gpmc-lab-ufrgs/atlas-of-opportunity" rel="noopener noreferrer" target="_blank">
                                    <span>{localeSel?.languageJson.page_4_t1_content_2_label_3}</span>
                                </Link>
                                {localeSel?.languageJson.page_4_t1_content_2_pt4}                       
                            </h2>
                            <h2
                                key={"h22Main"} 
                                style={{
                                    color: '#4E4E4E',
                                    textAlign: "justify",
                                    lineHeight: 1.5,
                                    fontSize: 18,
                                    marginBottom: 10
                                }}
                            >
                                {localeSel?.languageJson.page_4_t1_content_3}
                            </h2>
                        </StyledCol>
                        <StyledCol
                            key={"ColMain2"}
                            flex="40%"
                        >
                            <></>
                        </StyledCol>
                    </StyledRow>
                </DivTelaInicialCenter>
            </DivTelaInicialProjeto>
            
        </>
    );

}