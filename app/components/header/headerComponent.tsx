import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Layout, Space, Button, Col, Row } from 'antd';
import { 
    DivHeader,
    StyledMenu,
    StyledDrawer,
} from '../../antd_styled';
const { Header } = Layout;
import headerIcon from '../../ico/pt/LOGO_TOPO_BRANCA.png';
import Icon, { GithubOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import ptIcon from "../../ico/icon_pt.png";
import enIcon from "../../ico/icon_en.png";

export default function HeaderComponent(props: any){
    const [openMenu, setOpenMenu] = useState<boolean>(false);
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

    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                background: "transparent",
                width: "100%",
                height: 120,
                padding: 0,
                position: "absolute",
                zIndex: 999,
            }}
        >
            <DivHeader>
                <Image
                    src={headerIcon}
                    width={159}
                    height={80}
                    style={{ marginRight: 0 }}
                    alt="Logo header"
                />
                <Space size={"middle"}>
                {
                    props.windows[0] > 1358 ? (
                    <>
                        <StyledMenu mode={"horizontal"} items={items} />
                            <Button
                                style={{ background: "#0A74A638", border: 0 }}
                                icon={<GithubOutlined style={{ color: "#fff" }} />}
                            />
                            <Button
                                style={{
                                    width: 32,
                                    height: 32,
                                    background: "#0A74A638",
                                    border: 0,
                                }}
                                icon={
                                    <Image
                                        src={ptIcon}
                                        style={{ margin: "auto" }}
                                        width={20}
                                        height={16}
                                        alt="Logo header"
                                    />
                                }
                            />
                            <Button
                                style={{
                                    background: "#0A74A6",
                                    textTransform: "uppercase",
                                    color: "#fff",
                                    border: 0,
                                    paddingLeft: 30,
                                    paddingRight: 30,
                                    fontSize: 13,
                                }}
                            >
                                Ir para o atlas
                            </Button>
                        </>
                    ) : (
                        <></>
                    )
                }
                {
                    props.windows[0] < 1359 ? (
                    <>
                        <Button
                            icon={<MenuOutlined style={{ color: "#fff" }} />}
                            style={{ background: "transparent" }}
                            onClick={() => setOpenMenu(true)}
                        />
                        <StyledDrawer
                            width={500}
                            onClose={() => setOpenMenu(false)}
                            open={openMenu}
                            headerStyle={{ backgroundColor: "#0d3559" }}
                            closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
                            extra={
                                <Space size="middle">
                                    <Button
                                        style={{ background: "#0A74A638", border: 0 }}
                                        icon={<GithubOutlined style={{ color: "#fff" }} />}
                                    />
                                    <Button
                                        style={{
                                            width: 32,
                                            height: 32,
                                            background: "#0A74A638",
                                            border: 0,
                                        }}
                                        icon={
                                            <Image
                                                src={ptIcon}
                                                style={{ margin: "auto" }}
                                                width={20}
                                                height={16}
                                                alt="Logo header"
                                            />
                                        }
                                    />
                                    <Button
                                        style={{
                                        background: "#0A74A6",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        border: 0,
                                        paddingLeft: 30,
                                        paddingRight: 30,
                                        fontSize: 13,
                                        }}
                                    >
                                        Ir para o atlas
                                    </Button>
                                </Space>
                            }
                        >
                            <StyledMenu mode={"vertical"} items={items} />
                        </StyledDrawer>
                    </>
                    ) : (
                    <></>
                    )
                }                    
                </Space>
            </DivHeader>
        </Header>
    );
}