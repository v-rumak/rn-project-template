import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 5%;
`;

export const Buttons = styled.View`
  background: #f9da2e;
  border-radius: 18px;
  letter-spacing: 0;
  width: 110px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #4b6c8d;
  padding: 0 10px;
`;

export const LocaleButton = styled.TouchableOpacity`
  padding: 10px 10px;
  color: #2c3e50;
  align-items: center;
  justify-content: center;
`;

export const LocaleButtonText = styled.Text<{ isActive: boolean }>`
  font-size: 24px;
  font-weight: ${({ isActive }) => (isActive ? '700' : '500')};
  color: ${({ isActive }) => (isActive ? '#2c3e50' : '#4b6c8d')};
`;

export const Middle = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Centered = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Bottom = styled.View`
  display: flex;
  align-items: center;
`;

export const ContinueButton = styled.TouchableOpacity`
  background: #f9da2e;
  border-radius: 8px;
  padding: 10px 20px;
  color: #2c3e50;
  min-width: 70%;
  align-items: center;
  justify-content: center;
`;

export const ContinueText = styled.Text`
  font-size: 26px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;
