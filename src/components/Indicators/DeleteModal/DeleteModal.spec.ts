import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import DeleteModal from '.'

describe('DeleteModal', () => {
  it('renders the title and description correctly', () => {
    const wrapper = mount(DeleteModal, {
      props: {
        title: 'Test Title',
        description: 'Test Description'
      }
    })
    expect(wrapper.text()).toContain('Test Title')
    expect(wrapper.text()).toContain('Test Description')
  })

  it('emits FirstButtonClicked when the first button is clicked', async () => {
    const wrapper = mount(DeleteModal)
    await wrapper.findAllComponents({ name: 'Button' })[0].trigger('click')
    expect(wrapper.emitted()).toHaveProperty('FirstButtonClicked')
  })

  it('emits SecondButtonClicked when the second button is clicked', async () => {
    const wrapper = mount(DeleteModal)
    await wrapper.findAllComponents({ name: 'Button' })[1].trigger('click')
    expect(wrapper.emitted()).toHaveProperty('SecondButtonClicked')
  })
})
