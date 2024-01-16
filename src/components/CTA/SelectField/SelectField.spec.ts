import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'

import SelectField from './SelectField.vue'
import { nextTick } from 'vue'

describe('SelectField.vue', () => {
  it('renders title prop', async () => {
    const wrapper = mount(SelectField, {
      props: {
        title: 'Test Title',
        options: [{ label: 'Option 1', value: 'option1' }],
        default: 'option1'
      }
    })

    await nextTick()

    expect(wrapper.find('h1').text()).toBe('Test Title')
  })

  it('emits update:modelValue event when an option is clicked', async () => {
    const wrapper = mount(SelectField, {
      props: {
        title: 'Test Title',
        options: [{ label: 'Option 1', value: 'option1' }],
        default: 'option1'
      }
    })

    await nextTick()

    await wrapper.find('.items div').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['option1'])
  })
})
