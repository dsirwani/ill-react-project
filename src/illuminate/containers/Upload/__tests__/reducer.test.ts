import { uploadReducer } from '../reducer'
import { UploadState } from '../type';

const initialState: UploadState = {
  loading: false,
  error: '',
  errorMessage: '',
  data: null
}

describe('Upload Reducers', () => {

  it("Should handle UPLOAD_DATA_INITIATE(initiateCall)", () => {
    const action = {
      type: "UPLOAD_DATA_INITIATE"
    }
    const newState = uploadReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      loading: true,
      error: false,
      errorMessage: '',
      data: null
    });
  });

  it("Should handle UPLOAD_DATA_SUCCESS(dataReceived)", () => {
    const action = {
      type: "UPLOAD_DATA_SUCCESS",
      payload: {}
    }
    const newState = uploadReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: false,
      errorMessage: '',
      data: action?.payload
    });
  });

  it("Should handle UPLOAD_DATA_ERROR(errorReceived)", () => {
    const action = {
      type: "UPLOAD_DATA_ERROR",
      payload: 'Exception occured'
    }
    const newState = uploadReducer(initialState, action);
    expect(newState).toEqual({
      ...initialState,
      loading: false,
      error: true,
      errorMessage: action?.payload,
      data: null
    })
  });

  it("Should handle RESET_UPLOAD_DATA(resetData)", () => {
    const action = {
      type: "RESET_UPLOAD_DATA",
    }
    const newState = uploadReducer(initialState, action);
    expect(newState).toEqual({
      loading: false,
      error: '',
      errorMessage: '',
      data: null
    })
  });
})