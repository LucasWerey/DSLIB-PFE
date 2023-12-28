import { mount } from '@vue/test-utils'
import CheckBox from './CheckBox.vue'
import { CHECKBOX_SIZES, CHECKBOX_FORMS, CHECKBOX_STATES } from './CheckBox.model'
import { it, describe, expect } from 'vitest'

describe('CheckBox.vue', () => {
  it('toggles isChecked value when clicked', async () => {
    const wrapper = mount(CheckBox, {
      props: {
        size: CHECKBOX_SIZES[1],
        form: CHECKBOX_FORMS[1],
        state: CHECKBOX_STATES[1],
        disabled: false
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:state')
  })
  it('should be disabled', async () => {
    const wrapper = mount(CheckBox, {
      props: {
        size: CHECKBOX_SIZES[1],
        form: CHECKBOX_FORMS[1],
        state: CHECKBOX_STATES[1],
        disabled: true
      }
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).not.toHaveProperty('update:state')
  })
  it('should be rounded', async () => {
    const wrapper = mount(CheckBox, {
      props: {
        size: CHECKBOX_SIZES[1],
        form: CHECKBOX_FORMS[0],
        state: CHECKBOX_STATES[1],
        disabled: false
      }
    })
    expect(wrapper.find('.rounded-full')).toBeTruthy()
  })
  it('should be hidden', async () => {
    const wrapper = mount(CheckBox, {
      props: {
        size: CHECKBOX_SIZES[1],
        form: CHECKBOX_FORMS[0],
        state: CHECKBOX_STATES[1],
        disabled: false,
        hidden: true
      }
    })
    expect(wrapper.find('.hidden')).toBeTruthy()
  })
})
