"use client";
import React from "react";

import * as S from "./styles";
import Image from "next/image";
import ParticlesBackgound from "@/app/components/particles";

function Home() {
  return (
    <div>
      <ParticlesBackgound />
      <S.Container>
        <S.Container_banner>
          <S.Image></S.Image>
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
        </S.Container_banner>

        <div style={{ width: "100%", height: "100vh" }}></div>
      </S.Container>
    </div>
  );
}

export default Home;
