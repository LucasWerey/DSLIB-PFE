import { mount } from '@vue/test-utils'
import Loader from './Loader.vue'
import { it, describe, expect } from 'vitest'

describe('Loader.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Loader)
    expect(wrapper.html()).toContain('class="loader"')
  })
})
