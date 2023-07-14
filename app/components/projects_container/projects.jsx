import React, { useEffect, useState } from "react";

import * as S from "./styles";
import Image from "next/image";
function ProjectsContainer({
  title,
  description,
  urlLink,
  urlImage,
  backgroundColorContainer,
}) {
  

  return (
    <S.Container style={{ backgroundColor: backgroundColorContainer }}>
      <S.Content>
        <S.Section>
          <S.TextContainer>
            <S.Subtitle>Projetos</S.Subtitle>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Link href={urlLink}>Vizualizar projeto</S.Link>
          </S.TextContainer>
        </S.Section>
      </S.Content>
      <S.BgImage>
        <Image className="image-1" src='/assets/images/smartfone-house-3d.png' width={600} height={600} objectFit="cover"></Image>
        <Image className="image-2" src='/assets/images/nuvem1.png' width={600} height={600} objectFit="cover"></Image>
        <Image className="image-3" src='/assets/images/nuvem2.png' width={600} height={600} objectFit="cover"></Image>
      </S.BgImage>
    </S.Container>
  );
}

export default ProjectsContainer;
