import { convert } from "./convertor";

describe("Testing convertor", () => {
  it("should convert correctly", () => {
    const data = [{ name: 'A', parent: '' }, { name: 'B', parent: 'A' }];
    const convertedData = convert(data);
    expect(convertedData).toEqual([{ name: 'A', parent: '', children: [{ name: 'B', parent: 'A', children: [] }] }]);
  });
});