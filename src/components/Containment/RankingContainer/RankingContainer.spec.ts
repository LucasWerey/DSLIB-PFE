import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import RankingContainer from '.'

describe('RankingContainer', () => {
  it('renders the correct title', () => {
    const wrapper = mount(RankingContainer, {
      props: {
        title: 'Test Title',
        labels: [],
        topRank: false,
        isDraggable: false
      }
    })

    const titleElement = wrapper.find('[data-test="title"]')
    expect(titleElement.text()).toBe('Test Title')
  })

  it('renders the correct labels', () => {
    const wrapper = mount(RankingContainer, {
      props: {
        title: 'Test Title',
        labels: ['Label 1', 'Label 2'],
        topRank: false,
        isDraggable: false
      }
    })

    const labelsElements = wrapper.findAll('[data-test="label"]')
    expect(labelsElements[0].text()).toBe('Label 1')
    expect(labelsElements[1].text()).toBe('Label 2')
  })

  it('applies the top rank class when topRank is true', () => {
    const wrapper = mount(RankingContainer, {
      props: {
        title: 'Test Title',
        labels: [],
        topRank: true,
        isDraggable: false
      }
    })

    const containerElement = wrapper.find('[data-test="container"]')
    expect(containerElement.classes()).toContain('border-primary-moonstone')
  })

  it('applies the draggable class when draggable is true', () => {
    const wrapper = mount(RankingContainer, {
      props: {
        title: 'Test Title',
        labels: [],
        topRank: false,
        isDraggable: true
      }
    })

    const draggableIconElement = wrapper.find('[data-test="draggableIcon"]')
    expect(draggableIconElement.classes()).toContain('cursor-move')
  })
  it('handles mouse down, move, and up events', async () => {
    const wrapper = mount(RankingContainer, {
      props: {
        title: 'Test Title',
        labels: [
          'eazez',
          'eazez',
          'eazeza',
          'eazezaeza',
          'zaezaezaezaezae',
          'eazezaezaezae',
          'ezaezaezaezae',
          'ezaezaezaezae',
          'eazezaezaezae',
          'ezaezaezae',
          'ezaezaezaea',
          'eazezaeza'
        ],
        topRank: false,
        isDraggable: true
      }
    })

    const scrollContainer = wrapper.find('[data-test="scrollContainer"]')

    await scrollContainer.trigger('mousedown', {
      clientX: 100,
      clientY: 100
    })

    await scrollContainer.trigger('mousemove', {
      clientX: 200,
      clientY: 200
    })
    await scrollContainer.trigger('mouseup')
  })
})
