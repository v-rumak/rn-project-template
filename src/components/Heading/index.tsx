import * as React from 'react';
import * as S from './styled';
import { IHeading } from '@Types/Components/Heading';

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
