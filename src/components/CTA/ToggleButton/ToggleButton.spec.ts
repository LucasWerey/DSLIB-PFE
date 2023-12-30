import { mount } from '@vue/test-utils'
import ToggleButton from './ToggleButton.vue'
import { it, describe, expect } from 'vitest'

describe('ToggleButton', () => {
  it('renders the button in inactive state', async () => {
    const wrapper = mount(ToggleButton, {
      props: {
        state: 'inactive'
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('bg-basic-grey')
    expect(wrapper.html()).toContain('cursor-pointer')
  })

  it('renders the button in active state', async () => {
    const wrapper = mount(ToggleButton, {
      props: {
        state: 'active'
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('bg-primary-moonstone')
    expect(wrapper.html()).toContain('cursor-pointer')
    expect(wrapper.html()).toContain('translateX(100%)')
  })

  it('renders the button in disabled state', async () => {
    const wrapper = mount(ToggleButton, {
      props: {
        state: 'disabled'
      }
    })

    await wrapper.vm.$nextTick()

    expect(wrapper.html()).toContain('cursor-not-allowed')
    expect(wrapper.html()).toContain('opacity-50')
  })

  it('toggles the button from inactive to active state', async () => {
    const wrapper = mount(ToggleButton, {
      props: {
        state: 'inactive'
      }
    })

    await wrapper.vm.$nextTick()

    await wrapper.trigger('click')

    expect(wrapper.html()).toContain('bg-primary-moonstone')
    expect(wrapper.html()).toContain('translateX(100%)')
  })

  it('reacts to props.state change to active', async () => {
    const wrapper = mount(ToggleButton, {
      props: {
        state: 'inactive'
      }
    })

    await wrapper.setProps({ state: 'active' })

    expect(wrapper.html()).toContain('bg-primary-moonstone')
    expect(wrapper.html()).toContain('translateX(100%)')
  })

  it('reacts to props.state change to inactive', async () => {
    const wrapper = mount(ToggleButton, {
      props: {
        state: 'active'
      }
    })

    await wrapper.setProps({ state: 'inactive' })

    expect(wrapper.html()).toContain('bg-basic-grey')
    expect(wrapper.html()).toContain('translateX(0%)')
  })
})
