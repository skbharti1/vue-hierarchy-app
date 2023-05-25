import { shallowMount } from '@vue/test-utils';
import DetailView from './DetailView.vue';

describe("DetailView.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(DetailView, {
      props: { node: { name: 'Hello world' } }
    });
  });
  afterEach(() => wrapper.unmount());

  it("is a vue instance", () => {
    expect(!!wrapper.vm).toBeTruthy();
  });

  it("should emit close event on clicking close button", () => {
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted()).toHaveProperty('close')
  })
})