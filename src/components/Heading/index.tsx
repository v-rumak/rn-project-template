// #region Global Imports
import * as React from 'react';
import * as S from './styled';
import { IHeading } from '@Interfaces/Components/Heading';

const Heading: React.FunctionComponent<IHeading.IProps> = (props) => {
  const { text } = props;

  return (
    <S.TitleText>
      <S.FrontText>{text}</S.FrontText>
      <S.BackText>{text}</S.BackText>
    </S.TitleText>
  );
};

export { Heading };
