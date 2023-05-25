import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import { getData } from '@/services/treeDataServices/treeDataServices.js';

jest.mock('@/services/treeDataServices/treeDataServices.js', () => ({
  getData: jest.fn()
}))

describe("App.vue", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowMount(App);
  });
  afterAll(() => {
    wrapper.unmount();
    jest.restoreAllMocks();
  })

  it("Should load App.vue", () => {
    expect(!!wrapper.vm).toBeTruthy();
    expect(getData).toHaveBeenCalledTimes(1);
  });

  it("should toggle value of selectedNode when nodeClicked is called with node data", () => {
    const node = { name: 'A' };
    expect(wrapper.vm.selectedNode).toEqual({});
    wrapper.vm.nodeClicked('event', node);
    expect(wrapper.vm.selectedNode).toEqual(node)
    wrapper.vm.nodeClicked('event', node);
    expect(wrapper.vm.selectedNode).toEqual({});
  })

  it("should set value of selectedNode when selectNode is called with node data", () => {
    const node = { name: 'A' };
    expect(wrapper.vm.selectedNode).toEqual({});
    wrapper.vm.selectNode(node);
    expect(wrapper.vm.selectedNode).toEqual(node);
  });

  it("should reset value selectedNode when deselectNode is called", () => {
    const node = { name: 'A'};
    expect(wrapper.vm.selectedNode).toEqual(node);
    wrapper.vm.deselectNode();
    expect(wrapper.vm.selectedNode).toEqual({});
  });

  it("should return class for nodes based on selection", () => {
    const node = { name: 'A' };
    expect(wrapper.vm.labelClassName(node)).toBe('node');
    wrapper.vm.selectNode(node);
    expect(wrapper.vm.labelClassName(node)).toBe('node selected-node');
  })

  it("should call getData service and return data", async () => {
    const mockedData = [];
    getData.mockResolvedValue({ data: mockedData });
    await wrapper.vm.getTreeData();
    expect(getData).toHaveBeenCalledTimes(2);
    expect(wrapper.vm.treeData).toEqual(mockedData);
  });

  it("should throw error when any error encountered", async () => {
    const error = new Error("Service error");
    getData.mockRejectedValue(error);
    await wrapper.vm.getTreeData();
    expect(getData).toHaveBeenCalledTimes(3);
    expect(wrapper.vm.error).toBe(error);
  });
});