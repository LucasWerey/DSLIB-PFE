import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import ChipContainer from './ChipContainer.vue'
import {
  CHIP_CONTAINER_ICON_POSITION_DEFAULT,
  CHIP_CONTAINER_ICON_POSITION,
  CHIP_CONTAINER_HAS_ICON_DEFAULT
} from './ChipContainer.model'

describe('ChipContainer', () => {
  it('renders the label correctly', () => {
    const wrapper = mount(ChipContainer, {
      props: {
        label: 'Test label',
        iconPosition: CHIP_CONTAINER_ICON_POSITION_DEFAULT,
        hasIcon: CHIP_CONTAINER_HAS_ICON_DEFAULT
      }
    })
    expect(wrapper.text()).toContain('Test label')
  })

  it('renders the icon when hasIcon is true', () => {
    const wrapper = mount(ChipContainer, {
      props: {
        label: 'Test label',
        iconPosition: CHIP_CONTAINER_ICON_POSITION_DEFAULT,
        hasIcon: true
      }
    })
    expect(wrapper.findComponent({ name: 'IconsBase' }).exists()).toBe(true)
  })

  it('does not render the icon when hasIcon is false', () => {
    const wrapper = mount(ChipContainer, {
      props: {
        label: 'Test label',
        iconPosition: CHIP_CONTAINER_ICON_POSITION_DEFAULT,
        hasIcon: false
      }
    })
    expect(wrapper.findComponent({ name: 'IconsBase' }).exists()).toBe(false)
  })

  it('sets the correct icon position', () => {
    const wrapper = mount(ChipContainer, {
      props: {
        label: 'Test label',
        iconPosition: 'leading',
        hasIcon: true
      }
    }) as any
    expect(wrapper.classes()).toContain('flex-row-reverse')
  })
})
