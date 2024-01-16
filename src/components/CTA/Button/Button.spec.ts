import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import {
  BUTTON_TYPE,
  BUTTON_ICON,
  BUTTON_STATE,
  BUTTON_ICON_POSITION,
  BUTTON_STYLE
} from './Button.model'
import { it, describe, expect } from 'vitest'

describe('Button.vue', () => {
  it('should compute the button correctly', async () => {
    const wrapper = mount(Button, {
      props: {
        type: BUTTON_TYPE.default,
        state: BUTTON_STATE.active,
        styled: BUTTON_STYLE.fill,
        icon: BUTTON_ICON.none,
        iconPosition: BUTTON_ICON_POSITION.none
      }
    })

    expect(wrapper.find('[data-test="Button"]')).toBeTruthy
  })

  it('should compute props correctly', async () => {
    const wrapper = mount(Button, {
      props: {
        type: BUTTON_TYPE.socialMedia,
        state: BUTTON_STATE.active,
        styled: BUTTON_STYLE.fill,
        icon: BUTTON_ICON.none,
        iconPosition: BUTTON_ICON_POSITION.none
      }
    })

    expect(wrapper.props().type).toBe(BUTTON_TYPE.socialMedia)
    expect(wrapper.props().state).toBe(BUTTON_STATE.active)
    expect(wrapper.props().styled).toBe(BUTTON_STYLE.fill)
    expect(wrapper.props().icon).toBe(BUTTON_ICON.none)
    expect(wrapper.props().iconPosition).toBe(BUTTON_ICON_POSITION.none)
  })

  it('should set icon color to white when filled and active', () => {
    const wrapper = mount(Button, {
      props: {
        type: BUTTON_TYPE.default,
        state: BUTTON_STATE.active,
        styled: BUTTON_STYLE.fill,
        icon: BUTTON_ICON.moveRight,
        iconPosition: BUTTON_ICON_POSITION.leading
      }
    })

    expect(wrapper.findComponent({ name: 'IconsBase' }).props('color')).toBe('white')
  })

  it('should apply correct classes when outlined and active', () => {
    const wrapper = mount(Button, {
      props: {
        type: BUTTON_TYPE.default,
        state: BUTTON_STATE.active,
        styled: BUTTON_STYLE.outlined,
        icon: BUTTON_ICON.moveRight,
        iconPosition: BUTTON_ICON_POSITION.leading
      }
    })

    const button = wrapper.find('[data-test="Button"]')
    expect(button.classes()).toContain('bg-transparent')
    expect(button.classes()).toContain('text-primary-moonstone')
    expect(button.classes()).toContain('border-primary-moonstone')
  })

  it('should set icon name to google', () => {
    const wrapper = mount(Button, {
      props: {
        type: BUTTON_TYPE.socialMedia,
        state: BUTTON_STATE.active,
        styled: BUTTON_STYLE.fill,
        icon: BUTTON_ICON.google,
        iconPosition: BUTTON_ICON_POSITION.leading
      }
    })

    expect(wrapper.findComponent({ name: 'IconsBase' }).props('name')).toBe('google')
  })

  it('should not display icon', () => {
    const wrapper = mount(Button, {
      props: {
        type: BUTTON_TYPE.default,
        state: BUTTON_STATE.active,
        styled: BUTTON_STYLE.fill,
        icon: BUTTON_ICON.none,
        iconPosition: BUTTON_ICON_POSITION.none
      }
    })

    expect(wrapper.findComponent({ name: 'IconsBase' }).exists()).toBe(false)
  })
})
