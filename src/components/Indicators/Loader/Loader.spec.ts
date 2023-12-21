import { mount } from '@vue/test-utils'
import Loader from './Loader.vue'
import { it, describe, expect } from 'vitest'

describe('Loader.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Loader)
    expect(wrapper.html()).toContain('class="loader"')
  })

  it('computes primary correctly', () => {
    const wrapper = mount(Loader, {
      props: {
        color: 'primary'
      }
    })
    expect(wrapper.vm.color).toBe('primary')
  })

  it('computes secondary correctly', () => {
    const wrapper = mount(Loader, {
      props: {
        color: 'secondary'
      }
    })
    expect(wrapper.vm.color).toBe('secondary')
  })

  it('computes loaderSize correctly', () => {
    const wrapper = mount(Loader, {
      props: {
        size: 'small'
      }
    })
    expect(wrapper.vm.size).toBe('small')
  })
})
