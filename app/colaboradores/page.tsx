'use client'
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import { 
    DivTelaInicialColaboradores,
    DivColaboradoresCenter,
    DivColaborador
} from "@/app/antd_styled";
import Image, { StaticImageData } from 'next/image';
import Icon, { LinkedinFilled } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { MenuSelected, changePage, menuSelector } from '@/app/features/menuSlice';
import { LocaleLang, langSelector } from "@/app/features/localeSlice";
import RetornaFoto from '../helper/returnFotoById';

interface Colaboradores {
    id: string;
    nome_col: string;
    funcao_col: string;
    instituicao_col: string;
    link_linkedin: string;
    cv_col: string;
    email_col: string;
    posicao: string;
    foto_src: string;
}

import ListaColaboradores from "@/public/colaboradores.json";

function Colaboradores(){
    const [localeSel, setLocaleSel] = useState<LocaleLang>();
    const selectedLocale = useAppSelector(langSelector);
    const dispatch = useAppDispatch();
    const [menuS, setMenuS] = useState<MenuSelected>();
    const menuSel = useAppSelector(menuSelector);

    const lstColaboradoresAtuais = () => {
        var l: Colaboradores[] = ListaColaboradores as Colaboradores[];
        l = l.filter((obj) => {
            return (obj.posicao === "atual" && obj.foto_src !== "");
        });
        return l;
    }

    const lstColaboradoresEx = () => {
        var l: Colaboradores[] = ListaColaboradores as Colaboradores[];
        l = l.filter((obj) => {
            return (obj.posicao === "ex" && obj.foto_src !== "");
        });
        return l;
    }
    
    useEffect(() => {
        const m: MenuSelected = {
            idMenu: 2,
            keyName: 'colaboradores'
        };
        dispatch(changePage(m));
    }, [])

    useLayoutEffect(() => {
        setLocaleSel(selectedLocale);
    }, [selectedLocale]);

    return (
      <>
        <DivTelaInicialColaboradores />
        <div style={{ background: '#fff', paddingBottom: 25 }}>
            <DivColaboradoresCenter>
                <div>
                    <div 
                        className="mx-auto"
                        style={{ paddingTop: 25 }}
                    >
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            {localeSel?.languageJson.page_2_title_1}
                        </h1>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            lstColaboradoresAtuais().map((colaborador: Colaboradores) => (
                                <DivColaborador key={`M${colaborador.id}`}>
                                    <div key={colaborador.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75"
                                            style={{ 
                                                height: 340,
                                                borderTopRightRadius: 6,
                                                borderTopLeftRadius: 6,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 0
                                            }}
                                        >
                                            <Image
                                                src={RetornaFoto(colaborador.id)!.src}
                                                alt={`Foto ${colaborador.nome_col}`}
                                                width={0}
                                                height={0}
                                                className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div style={{ height: 94 }}>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    paddingTop: 18,
                                                    paddingLeft: 15
                                                }}
                                            >
                                                <h2>
                                                    {colaborador.nome_col}
                                                </h2>
                                                <span>
                                                    {colaborador.funcao_col}
                                                </span>
                                                <span>
                                                    {colaborador.instituicao_col}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </DivColaborador>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </DivColaboradoresCenter>
            <DivColaboradoresCenter>
                <div>
                    <div 
                        className="mx-auto"
                        style={{ paddingTop: 25 }}
                    >
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                            {localeSel?.languageJson.page_2_title_2}
                        </h1>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {
                            lstColaboradoresEx().map((colaborador: Colaboradores) => (
                                <DivColaborador key={`M${colaborador.id}`}>
                                    <div key={colaborador.id} className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75"
                                            style={{ 
                                                height: 340,
                                                borderTopRightRadius: 6,
                                                borderTopLeftRadius: 6,
                                                borderBottomRightRadius: 0,
                                                borderBottomLeftRadius: 0
                                            }}
                                        >
                                            <Image
                                                src={RetornaFoto(colaborador.id)!.src}
                                                alt={`Foto ${colaborador.nome_col}`}
                                                width={0}
                                                height={0}
                                                className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div style={{ height: 94 }}>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    paddingTop: 18,
                                                    paddingLeft: 15
                                                }}
                                            >
                                                <h2>
                                                    {colaborador.nome_col}
                                                </h2>
                                                <span>
                                                    {colaborador.funcao_col}
                                                </span>
                                                <span>
                                                    {colaborador.instituicao_col}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </DivColaborador>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </DivColaboradoresCenter>
        </div>        
        
      </>
    );
}

export default Colaboradores;