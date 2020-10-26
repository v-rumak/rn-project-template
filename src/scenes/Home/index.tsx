import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@apollo/react-hooks';
import { API_URL } from '@env';
import { Apollo } from '@Services';

import { Heading } from '@Components';
import { IHomePage } from '@Interfaces';
import {
  Continents,
  ContinentsVariables,
} from '@Services/Apollo/queries/types/Continents';
import { Logos } from '@Assets/Img';
import {
  Container,
  Buttons,
  LocaleButton,
  LocaleButtonText,
  Middle,
  Centered,
  Bottom,
  ContinueButton,
  ContinueText,
} from './styled';

const styles = StyleSheet.create({
  stretch: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    resizeMode: 'contain',
  },
});

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
  const { t, i18n } = useTranslation();
  const { data, loading } = useQuery<Continents, ContinentsVariables>(
    Apollo.queries.continents
  );

  console.log('[API] URL', API_URL);
  console.log('[API] Loading:', loading);
  console.log('[API] Continents:', data?.continents);

  const renderLocaleButtons = (activeLanguage: string) =>
    ['en', 'ua'].map((lang) => (
      <LocaleButton key={lang} onPress={() => i18n.changeLanguage(lang)}>
        <LocaleButtonText isActive={activeLanguage === lang}>
          {lang}
        </LocaleButtonText>
      </LocaleButton>
    ));

  const handleContinue = () => {
    //@todo do something
  };

  return (
    <Container>
      <Buttons>{renderLocaleButtons(i18n.language)}</Buttons>
      <Middle>
        <Centered>
          <Logos.Valor style={styles.stretch} />
          <Heading text={t('home:Hello')} />
        </Centered>
        <Bottom>
          <ContinueButton onPress={() => handleContinue()}>
            <ContinueText>{t('home:Continue')}</ContinueText>
          </ContinueButton>
        </Bottom>
      </Middle>
    </Container>
  );
};

export default Home;
