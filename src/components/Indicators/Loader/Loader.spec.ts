import { mount } from '@vue/test-utils'
import Loader from './Loader.vue'

describe('Loader.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Loader)
    expect(wrapper.html()).toContain('span class="loader"')
  })
})
