import { shallowMount } from '@vue/test-utils';
import TreeView from './TreeView.vue';

describe("TreeView.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TreeView, {
      props: {
        data: { name: 'Hello world' },
        labelClassName: 'class'
      }
    });
  });
  afterEach(() => wrapper.unmount());

  it("is a vue instance", () => {
    expect(!!wrapper.vm).toBeTruthy();
  });

  it("should emit close event on clicking close button", () => {
    wrapper.vm.nodeClick('event', 'node');
    expect(wrapper.emitted()).toHaveProperty('node-click', 'event', 'node');
  })
})