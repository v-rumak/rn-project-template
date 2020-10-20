import styled from 'styled-components/native';

export const TitleText = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
`;

export const FrontText = styled.Text`
  color: white;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1px;
  position: absolute;
  top: -2px;
  left: -2px;
`;

export const BackText = styled.Text`
  color: grey;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 1px;
  z-index: -1;
`;
