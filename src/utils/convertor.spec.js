import { convert } from "./convertor";

describe("Testing convertor", () => {
  it("should convert correctly", () => {
    const data = [{ name: 'B', parent: 'A' }, { name: 'A', parent: '' }, { name: 'C', parent: 'A'}];
    const convertedData = convert(data);
    expect(convertedData).toEqual([{ name: 'A', parent: '', children: [{ name: 'B', parent: 'A', children: [] }, { name: 'C', parent: 'A', children: [] }] }]);
  });
});