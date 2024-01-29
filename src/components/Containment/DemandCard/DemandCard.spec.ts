import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import DemandCard from './DemandCard.vue'

describe('DemandCard.vue', () => {
  it('renders correctly when type is empty', () => {
    const wrapper = mount(DemandCard, {
      props: {
        type: 'empty',
        title: '',
        location: '',
        nCandidates: 0,
        contractType: '',
        contractDuration: '',
        id: '',
        studentNames: [],
        desktopColor: 'transparent',
        notification: 0,
        nMatchs: 0
      }
    })
    expect(wrapper.find('[data-test="create-demand"]').exists()).toBe(true)
    expect(wrapper.find('h5').text()).toBe('ajouter une demande')
  })

  it('renders correctly when type is fill', () => {
    const wrapper = mount(DemandCard, {
      props: {
        type: 'fill',
        title: 'Test Title',
        location: 'Test Location',
        nCandidates: 5,
        contractType: 'Test Contract Type',
        contractDuration: 'Test Contract Duration',
        id: '1',
        studentNames: ['John', 'Doe'],
        desktopColor: 'error',
        notification: 3,
        nMatchs: 2
      }
    })
    expect(wrapper.find('h4').text()).toBe('Test Title')
    expect(wrapper.find('p').text()).toBe('Test Location')
    expect(wrapper.find('.flex.w-full.items-center.gap-3.text-basic-black').exists()).toBe(true)
    expect(wrapper.find('.flex.w-full.flex-col.gap-2').exists()).toBe(true)
    expect(
      wrapper
        .find(
          '.absolute.right-0.flex.h-4.w-16.items-center.justify-end.rounded-l-md.bg-error.px-2.drop-shadow-md'
        )
        .exists()
    ).toBe(true)
  })

  it('emits seeDemand event', async () => {
    const wrapper = mount(DemandCard, {
      props: {
        type: 'fill',
        title: 'Test Title',
        location: 'Test Location',
        nCandidates: 5,
        contractType: 'Test Contract Type',
        contractDuration: 'Test Contract Duration',
        id: '1',
        studentNames: ['John', 'Doe'],
        desktopColor: 'error',
        notification: 3,
        nMatchs: 2
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('seeDemand')
    expect(wrapper.emitted().seeDemand[0]).toEqual(['1']) // Check if the correct id is emitted
  })

  it('emits createDemand event', async () => {
    const wrapper = mount(DemandCard, {
      props: {
        type: 'empty',
        title: '',
        location: '',
        nCandidates: 0,
        contractType: '',
        contractDuration: '',
        id: '',
        studentNames: [],
        desktopColor: 'transparent',
        notification: 0,
        nMatchs: 0
      }
    })
    await wrapper.find('[data-test="create-demand"]').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('createDemand')
  })
})
