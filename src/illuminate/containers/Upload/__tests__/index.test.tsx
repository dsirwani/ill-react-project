import React from 'react';
import { render, fireEvent, queryByAttribute  } from "@testing-library/react";

import Upload from '../index';
import '@testing-library/jest-dom/extend-expect';

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

describe("Upload tests", () => {
  const mockStore = configureStore();
  let initialProps = {};
  let enCatalog: any;

  beforeAll(async() => {
    const locale = "en";
    enCatalog = await import(
      /* webpackMode: "lazy", webpackChunkName: "i18n-[index]" */
      `@lingui/loader!../../../../src/assets/locales/${locale}/messages`
    );
  });

  beforeEach(() => {
    initialProps = {
      uploadData: {
        loading: false,
        error: '',
        errorMessage: '',
        data: null
      },
      clientData: {
        loading: false,
        error: false,
        errorMessage: '',
        data: null,
        nextPageUrl: null,
        selectedClient: null,
        isAccountSelected: false,
        isClientSelected: false
      }
    }
  });

  const setup = (props: any) => {
    // Renders the component in memory
    const store = mockStore({ ...initialProps, ...props });
    const component = render(
      <Provider store={store}>
        <I18nProvider language={'en'} catalogs = {{'en': enCatalog}}>
          <I18n>
            {({ i18n }) => (
              <I18nFuncContextProvider value={i18n}>
                <BrowserRouter>
                  <Upload {...props} />
                </BrowserRouter>
              </I18nFuncContextProvider>
            )}
          </I18n>
        </I18nProvider>
      </Provider>
    );
    return component
  }

  /* test("Should render upload component", () => {
    const props = createTestProps()
    const tree = setup(props);
    expect(tree).toMatchSnapshot();
  }); */

  test("Should have default value for workbook drop-down", async () => {
    const props = createTestProps()
    const tree = setup(props);
    const inputDropdown = await tree.findByText('Client Workbook')
    expect(inputDropdown).not.toBe(null);
  });

  test("Should have choose file label for file input", async () => {
    const props = createTestProps()
    const tree = setup(props);
    const fileInput = await tree.findByText('Choose File')
    expect(fileInput).not.toBe(null);
  });

  test("Should have upload button for file input", async () => {
    const props = createTestProps()
    const tree = setup(props);
    const uploadButton = await tree.findByText('Btn.Upload')
    expect(uploadButton).not.toBe(null);
  });

  // test("Should test file upload with file input", async () => {
  //   const props = createTestProps()
  //   const tree = setup(props);
  //   console.log('tree: ', tree.)
  //   // const { spyOnFileChange } = jest.spyOn(tree, 'onFileChange');
  //   const getById = queryByAttribute.bind(null, 'type');
  //   const fileInput: any = getById(tree.container, 'file');
  //   // console.log('file: ', fileInput)
  //   const file = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })
  //   fireEvent.click(fileInput, { target: { files: [file] } })
  // });

});
