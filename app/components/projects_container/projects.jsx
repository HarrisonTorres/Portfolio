import React from 'react';

import * as S from './styles';

function ProjectsContainer({title, description, urlLink, urlImage, backgroundColorContainer}) {
  return (
    <S.Container style={{backgroundColor: backgroundColorContainer}}>
      <S.Content>
        <S.Section>
          <S.TextContainer>
            <S.Subtitle>Projetos</S.Subtitle>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Link>Vizualizar projeto</S.Link>
          </S.TextContainer>
        </S.Section>
      </S.Content>
    </S.Container>
    )
}

export default ProjectsContainer;