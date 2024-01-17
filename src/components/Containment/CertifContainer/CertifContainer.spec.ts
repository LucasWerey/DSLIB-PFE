import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import CertifContainer from './CertifContainer.vue'

describe('CertifContainer', () => {
  it('renders the title correctly', () => {
    const wrapper = mount(CertifContainer, {
      props: {
        title: 'Test Title'
      }
    })
    expect(wrapper.text()).toContain('Test Title')
  })
  it('renders a maximum of 4 labels', () => {
    const wrapper = mount(CertifContainer, {
      props: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5']
      }
    })
    expect(wrapper.findAllComponents({ name: 'ChipContainer' })).toHaveLength(4)
  })
  it('emits update:state event when the icon is clicked', async () => {
    const wrapper = mount(CertifContainer)
    await wrapper.find('.cursor-pointer').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('update:state')
  })
  
})
