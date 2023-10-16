"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
    MenuSelected,
    changePage,
    menuSelector,
} from "@/app/features/menuSlice";
import { LocaleLang, langSelector } from "@/app/features/localeSlice";
import {
    DivTelaInicial,
    DivTelaInicialCenter,
    DivMap,
    StyledRow,
    StyledCol,
    StyledComposableMap,
    DivTelaSplit,
    StyledDivTwoColors,
    StyledDivPublicacoes,
    StyledDivImg,
} from "@/app/antd_styled";
import bg_perfil_dados from "@/public/ico/header_perfil_dados.png";
import bg_perfil_dados_sem_foto from "@/public/ico/header_perfil_dados_sem_foto.png";
import bg_fundo_dimensoes from "@/public/ico/fundo_dimensoes.png";
import bg_demografico from "@/public/ico/fundo_demografico.png";
import useWindowDimensions from "@/app/helper/useWindowDimension";

function PerfilDados() {
    const { width, height } = useWindowDimensions();
    const [localeSel, setLocaleSel] = useState<LocaleLang>();
    const dispatch = useAppDispatch();
    const [menuS, setMenuS] = useState<MenuSelected>();
    const menuSel = useAppSelector(menuSelector);
    const selectedLocale = useAppSelector(langSelector);

    useLayoutEffect(() => {
        setLocaleSel(selectedLocale);
    }, [selectedLocale]);

    useEffect(() => {
        const m: MenuSelected = {
            idMenu: 3,
            keyName: "perfil_dados",
        };
        dispatch(changePage(m));
    }, []);

    const RetornaConteudoInicial = () => {
        if (width! > 1386) {
            return (
                <StyledRow gutter={[64, 16]}>
                    <StyledCol
                        flex="50%"
                        style={{
                            marginRight: 0,
                        }}
                    >
                        <h1 style={{color: '#1DC0A9', marginBottom: 20 }}>{localeSel?.languageJson.page_3_title_1}</h1>
                        <h2
                            style={{
                                textAlign: "justify",
                                lineHeight: 1.5,
                                fontSize: 18,
                                marginBottom: 20 
                            }}
                        >
                            {localeSel?.languageJson.page_3_t1_content_1}
                        </h2>
                        <h2
                            style={{
                                textAlign: "justify",
                                lineHeight: 1.5,
                                fontSize: 18,
                                marginBottom: 10
                            }}
                        >
                            {localeSel?.languageJson.page_3_t1_content_2}
                        </h2>
                    </StyledCol>
                    <StyledCol
                        flex="50%"
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "row-reverse",
                        }}
                    >
                        <></>
                    </StyledCol>
                </StyledRow>
            );
        } else {
            return (
                <StyledRow>
                    <StyledCol
                        flex="100%"
                        style={{
                            marginRight: 0,
                        }}
                    >
                        <h1 style={{color: '#1DC0A9', marginBottom: 20 }}>{localeSel?.languageJson.page_3_title_1}</h1>
                        <h2
                            style={{
                                textAlign: "justify",
                                lineHeight: 1.5,
                                fontSize: 18,
                                marginBottom: 20 
                            }}
                        >
                            {localeSel?.languageJson.page_3_t1_content_1}
                        </h2>
                        <h2
                            style={{
                                textAlign: "justify",
                                lineHeight: 1.5,
                                fontSize: 18,
                                marginBottom: 10
                            }}
                        >
                            {localeSel?.languageJson.page_3_t1_content_2}
                        </h2>
                    </StyledCol>
                </StyledRow>
            );
        }
    };

    // const RetornaSaibaMais = () => {
    //     if (width! > 1030) {
    //         return (
    //             <DivTelaInicialCenter style={{ marginBottom: 0 }}>
    //                 <StyledRow style={{ paddingTop: 20, paddingBottom: 20 }}>
    //                     <StyledCol
    //                         flex="50%"
    //                         style={{
    //                             paddingRight: '65px',
    //                         }}
    //                     >
    //                         <h1
    //                             style={{ color: '#1DC0A9', marginBottom: 80 }}
    //                         >
    //                             {localeSel?.languageJson.menu_3}
    //                         </h1>
    //                         <h2
    //                             style={{
    //                                 textAlign: 'justify',
    //                                 color: '#fff',
    //                                 lineHeight: 1.50,
    //                             }}
    //                         >
    //                             {localeSel?.languageJson.page_1_perfil_title_1}
    //                         </h2>
    //                         <Button
    //                             style={{
    //                                 textTransform: 'uppercase',
    //                                 marginTop: 80,
    //                                 color: '#0A74A6',
    //                                 borderColor: '#0A74A6',
    //                                 fontSize: 14,
    //                                 fontWeight: 500,
    //                             }}
    //                             type="primary" ghost
    //                         >
    //                             {localeSel?.languageJson.btn_saiba_mais}
    //                         </Button>
    //                     </StyledCol>
    //                     <StyledCol
    //                         flex="50%"
    //                         style={{
    //                             height: '100%',
    //                             paddingLeft: 0,
    //                             paddingRight: 0
    //                         }}
    //                     >
    //                         <StyledDivImg>
    //                             {/* <img
    //                   src={(localeSel?.language === 'en'? ColaboradoresEn.src : ColaboradoresPt.src)}
    //                   style={{ 
    //                     width: '100%', 
    //                     maxWidth: 637, 
    //                     height: 'auto',
    //                   }}
    //                 /> */}
    //                             <Image
    //                                 src={(localeSel?.language === 'en' ? ColaboradoresEn.src : ColaboradoresPt.src)}
    //                                 width={0}
    //                                 height={0}
    //                                 sizes="100vw"
    //                                 style={{ width: '100%', maxWidth: 637, height: 'auto', marginRight: 0 }}
    //                                 alt="Logo atlas oportunidades"
    //                             />
    //                         </StyledDivImg>


    //                     </StyledCol>
    //                 </StyledRow>
    //             </DivTelaInicialCenter>
    //         );

    //     } else {
    //         return (
    //             <DivTelaInicialCenter style={{ marginBottom: 0 }}>
    //                 <StyledRow
    //                     style={{ backgroundColor: '#01273C' }}
    //                 >
    //                     <StyledCol
    //                         flex="100%"
    //                         style={{
    //                             marginTop: '10%',
    //                             marginBottom: '10%',
    //                         }}
    //                     >
    //                         <h1 style={{ color: '#1DC0A9' }}>
    //                             {localeSel?.languageJson.menu_3}
    //                         </h1>
    //                         <h2
    //                             style={{
    //                                 textAlign: 'justify',
    //                                 color: '#fff',
    //                                 lineHeight: 1.50
    //                             }}
    //                         >
    //                             {localeSel?.languageJson.page_1_perfil_title_1}
    //                         </h2>
    //                         <Button
    //                             style={{
    //                                 textTransform: 'uppercase',
    //                                 marginTop: 10,
    //                                 color: '#0A74A6',
    //                                 fontSize: 14,
    //                                 fontWeight: 500,
    //                             }}
    //                             type="primary" ghost
    //                         >
    //                             {localeSel?.languageJson.btn_saiba_mais}
    //                         </Button>
    //                     </StyledCol>
    //                 </StyledRow>
    //             </DivTelaInicialCenter>

    //         );
    //     }
    // }

    return (
        <>
            <DivTelaInicial
                style={{
                    backgroundColor: "#001228",
                    backgroundImage: width! > 1386? `url(${bg_perfil_dados.src})` : `url(${bg_perfil_dados_sem_foto.src})`,
                    backgroundSize: "1440px 862px",
                    backgroundPosition: "center right",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <DivTelaInicialCenter>{RetornaConteudoInicial()}</DivTelaInicialCenter>
            </DivTelaInicial>
            <DivTelaInicial
                style={{
                    backgroundImage: `url(${bg_fundo_dimensoes.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    height: 100,
                    padding: 0
                }}                
            >
                <DivTelaInicialCenter
                    style={{ verticalAlign: 'center', paddingTop: 40 }}
                >
                    <h1 
                        style={{ 
                            fontWeight: 700,
                            textAlign: 'center',
                        }}
                    >
                        {localeSel?.languageJson.page_3_title_2}
                    </h1>
                </DivTelaInicialCenter>
            </DivTelaInicial>
            <div>
                <StyledRow gutter={[64, 16]}>
                    <StyledCol flex="50%">
                        <h2>{localeSel?.languageJson.page_3_demo_content}</h2>
                    </StyledCol>
                    <StyledCol flex="50%">
                        <Image
                            src={bg_demografico.src}
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', maxWidth: 637, height: 'auto', marginRight: 0 }} 
                            alt="Logo atlas oportunidades"
                        />
                    </StyledCol>
                </StyledRow>
            </div>
        </>
    );
}

export default PerfilDados;
