import React from 'react';
import { I18nProvider, I18n } from '@lingui/react';
// import { RootState } from '../../../utils/injectReducer';
// import { useSelector } from 'react-redux';
import { I18nFuncContextProvider } from '../../../hooks/useI18n';

const I18nContextProvider: React.FC = (props) => {
  const [catalogs, setCatalogs] = React.useState<{ [key: string]: any }>({});

  // const locale = useSelector(
  //   (state: RootState): string => state?.dashboard?.locale
  // );

  const getLanguage = () => {
    return localStorage.getItem('settings')
      ? JSON.parse(localStorage.getItem('settings') || '{}').language
      : 'en';
  }

  const locale = getLanguage();

  //const locale = 'ja';
  React.useEffect(() => {
    const loadCatalog = async (locale: string) => {
      const catalog = await import(
        /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
        `@lingui/loader!../../../assets/locales/${locale}/messages.po`
      );
      setCatalogs({
        ...catalogs,
        [locale]: catalog,
      });
    };

    loadCatalog(locale);
  }, [locale]);

  if (!catalogs[locale]) return <div />;
  /* return (
    <I18nProvider language={locale} catalogs={catalogs}>
      {props.children}
    </I18nProvider>
  ); */
  return (
    <I18nProvider language={locale} catalogs={catalogs}>
      <I18n>
        {({ i18n }) => (
          <I18nFuncContextProvider value={i18n}>
            {props.children}
          </I18nFuncContextProvider>
        )}
      </I18n>
    </I18nProvider>
  );
};

export default I18nContextProvider;
