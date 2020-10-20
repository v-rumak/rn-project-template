// #region Global Imports
import * as React from 'react';
import { IHeading } from '@Interfaces/Components/Heading';

import { TitleText, FrontText, BackText } from './styled';

const Heading: React.FunctionComponent<IHeading.IProps> = (props) => {
  const { text } = props;

  return (
    <TitleText>
      <FrontText>{text}</FrontText>
      <BackText>{text}</BackText>
    </TitleText>
  );
};

export { Heading };
