"use client";
import React from "react";

import * as S from "./styles";
import Image from "next/image";
import ParticlesBackgound from "@/app/components/particles/particles";
import ProjectsContainer from "@/app/components/projects_container/projects";
import MouseFollower from "@/app/components/mouse_position/mouse_position";

//svgs
const iconInstagram = "/assets/icons/icon_instagram.svg";
const iconLinkedin  = "/assets/icons/icon_linkedin.svg";
const iconGithub = "/assets/icons/icon_github.svg";
const iconWhatsapp = "/assets/icons/icon_whatsapp.svg";
function Home() {
  return (
    <div>
      <ParticlesBackgound />
      
      <S.Container>
        <S.Container_banner>
          <S.Section>
            <S.Image>
              <Image
                src="/assets/images/profile_my_image.png"
                alt="Foto de Harrison"
                width={208}
                height={208}
                object-fit="contain"
              />
            </S.Image>
            <S.Title>Olá, Eu sou o Harrison</S.Title>
            <S.Text>
              Sou um desenvolvedor web especializado na experiência do usuário,
              com ampla experiência e habilidade para resolver problemas no mundo
              digital. Sinta-se à vontade para me conhecer e descobrir mais sobre
              os meus projetos.
            </S.Text>
            <S.Cta>
              <S.Button href="/">Descubra mais sobre mim</S.Button>
              <S.ButtonSecudary href="/">Contato</S.ButtonSecudary>
            </S.Cta>
          </S.Section>
          <S.NavSocialMidia>
            <Image 
              src={iconGithub}
              alt="Icone para acessar github"
              width={36}
              height={36}
            />
            <Image 
              src={iconLinkedin}
              alt="Icone para acessar Linkedin"
              width={36}
              height={36}
            />
            <Image 
              src={iconInstagram}
              alt="Icone para acessar instagram"
              width={36}
              height={36}
            />
            <Image 
              src={iconWhatsapp}
              alt="Icone para acessar whatsapp"
              width={36}
              height={36}
            />
          </S.NavSocialMidia>

        </S.Container_banner>
        <ProjectsContainer
          title={"Site para engenheiros"}
          description={
            "Projeto realizado para uma engenheira mulher, com o objetivo de transmitir uma imagem elegante e feminina para sua empresa. destacando suas habilidades excepcionais e personalidade única."
          }
          urlLink={"/"}
          urlImage={"/"}
          backgroundColorContainer="#000AFF"
        />
        <ProjectsContainer
          backgroundColorContainer="#F2994A"
          title={"HmmFood"}
          description={
            "Projeto cardapio digital para lanchonetes."
          }
          urlLink={"/"}
          urlImage={"/"}
        />
        <ProjectsContainer
          backgroundColorContainer="#51197D"
          title={"Link-Bio"}
          description={
            "Projeto link-bio, um site repositorio para agrupar links em um só lugar.."
          }
          urlLink={"/"}
          urlImage={"/"}
        />
      </S.Container>
      <MouseFollower />
    </div>
  );
}

export default Home;
