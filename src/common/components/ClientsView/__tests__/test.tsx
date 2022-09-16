import React from "react";
import renderer from "react-test-renderer";
import ClientsView from "../index";
// import { getEmail } from '../../../../utils/localStorageUtils';
import { Provider } from 'react-redux';
import { I18nProvider, I18n } from '@lingui/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nFuncContextProvider } from '../../../../hooks/useI18n';
import configureStore from 'redux-mock-store';

function createTestProps(props: any = {}) {
  return {
    // allow to override common props
    ...props,
  }
}

describe("Unit Test for ClientsView Component", () => {
  const mockStore = configureStore();

  const component = (props: any) => {
    const store = mockStore({ ...props });
    const comp =renderer.create(
      <Provider store={store}>
        <I18nProvider language={'en'} >
          <I18n>
            {({ i18n }) => (
              <I18nFuncContextProvider value={i18n}>
                <BrowserRouter>
                  <ClientsView />
                </BrowserRouter>
              </I18nFuncContextProvider>
            )}
          </I18n>
        </I18nProvider>
      </Provider>);
      return comp;
  };
  
  const props = createTestProps();
  let tree = component(props).toJSON();

  
  test("Is Component rendered", () => {  
    expect(tree).toMatchSnapshot();
  });
  
  /* test("check for Email-address to be called during component renders", () => {
  });

  test("check for Email-address before component renders", () => {
    expect(getEmail()).toBeCalled();
    expect(getEmail()).toBeTruthy;
  }); */

});