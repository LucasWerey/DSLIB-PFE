import { mount } from '@vue/test-utils'
import BulletPoint from './bulletPoints.vue'
import { it, describe, expect } from 'vitest'

describe('BulletPoint', () => {
  it('renders label when type is circle', () => {
    const wrapper = mount(BulletPoint, {
      props: {
        type: 'circle',
        label: 'Test Label'
      }
    })
    expect(wrapper.text()).toMatch('Test Label')
  })
})