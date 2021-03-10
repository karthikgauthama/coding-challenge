import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import React from 'react';
import { selectLanguage } from './languageSlice';
import en from '../../i18n/en';
import pl from '../../i18n/pl';

type Messages = {
  [language: string]: any;
};
const messages: Messages = { en, pl };

type Props = {
  children: React.ReactNode;
};
export const LanguageProvider: React.FC<Props> = (props) => {
  const usersLocale = useSelector(selectLanguage);
  const translationsForUsersLocale = messages[usersLocale] || messages.en;

  return (
    <IntlProvider locale={usersLocale} messages={translationsForUsersLocale}>
      {props.children}
    </IntlProvider>
  );
};
