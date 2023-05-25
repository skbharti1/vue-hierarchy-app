import { getData } from './treeDataServices';
import httpClient from '../common/index.js';

jest.mock('../common/index.js', () => ({
  get: jest.fn()
}));

describe("In shows service, ", () => {
  it("getData api should call", async () => {
      const mockedData = [{ name: 'A' }, { name: 'B' }, { name: 'C' }];
      httpClient.get.mockResolvedValue({ data: mockedData });
      const result = await getData().catch(err => console.log(err));
      expect(result).toEqual(mockedData);
    });

    it("getData api should throw error when any error encountered", async () => {
      const error = new Error("Service error");
      httpClient.get.mockRejectedValue(error);
      await getData().catch(err => {
        expect(err).toEqual(error);
      });
    });
});