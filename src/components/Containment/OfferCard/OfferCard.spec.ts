import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import OfferCard from './OfferCard.vue'

describe('OfferCard.vue', () => {
  it('renders correctly when type is empty', () => {
    const wrapper = mount(OfferCard, {
      props: {
        type: 'empty',
        title: '',
        location: '',
        nCandidates: 0,
        contractType: '',
        contractDuration: '',
        id: '',
        studentNames: [],
        desktopColor: 'transparent'
      }
    })
    expect(wrapper.find('.h-60').exists()).toBe(true)
    expect(wrapper.find('[data-test="create-offer"]').exists()).toBe(true)
  })

  it('renders correctly when type is fill', () => {
    const wrapper = mount(OfferCard, {
      props: {
        type: 'fill',
        title: 'Test Title',
        location: 'Test Location',
        nCandidates: 5,
        contractType: 'Test Contract Type',
        contractDuration: 'Test Contract Duration',
        id: '1',
        studentNames: ['John', 'Doe'],
        desktopColor: 'error'
      }
    })
    expect(wrapper.find('.h-60').exists()).toBe(true)
    expect(wrapper.find('h4').text()).toBe('Test Title')
    expect(wrapper.find('p').text()).toBe('Test Location')
    expect(wrapper.findAll('[data-test="avatar"]').length).toBe(2)
  })

  it('emits seeOffer event', async () => {
    const wrapper = mount(OfferCard, {
      props: {
        type: 'fill',
        title: 'Test Title',
        location: 'Test Location',
        nCandidates: 5,
        contractType: 'Test Contract Type',
        contractDuration: 'Test Contract Duration',
        id: '1',
        studentNames: ['John', 'Doe'],
        desktopColor: 'error'
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('seeOffer')
    expect(wrapper.emitted().seeOffer[0]).toEqual(['1'])
  })

  it('emits createOffer event', async () => {
    const wrapper = mount(OfferCard, {
      props: {
        type: 'empty',
        title: '',
        location: '',
        nCandidates: 0,
        contractType: '',
        contractDuration: '',
        id: '',
        studentNames: [],
        desktopColor: 'error'
      }
    })
    await wrapper.find('[data-test="create-offer"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('createOffer')
  })
})
