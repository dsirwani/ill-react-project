import * as uploadActions from '../actionCreator'

describe("Upload actions", () => {

  describe("Upload functionality actions", () => {
    it("Should test initUpload", () => {
      const result = uploadActions.initUpload('test');
      expect(result).toEqual({ type: 'UPLOAD_DATA_INITIATE', payload: 'test' });
    });

    it("Should test uploadSuccess", () => {
      const result = uploadActions.uploadSuccess({});
      expect(result).toEqual({ type: 'UPLOAD_DATA_SUCCESS', payload: {} });
    });

    it("Should test uploadError", () => {
      const result = uploadActions.uploadError('Internal Server Error');
      expect(result).toEqual({ type: 'UPLOAD_DATA_ERROR', payload: 'Internal Server Error' });
    });

    it("Should test resetUpload", () => {
      const result = uploadActions.resetUpload();
      expect(result).toEqual({ type: 'RESET_UPLOAD_DATA' });
    });
  })
})