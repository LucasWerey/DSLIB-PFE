// StepIndicator.spec.ts
import { mount } from '@vue/test-utils'
import StepIndicator from './StepIndicator.vue'
import { STEP_NUMBER } from './StepIndicator.model'
import { it, describe, expect } from 'vitest'

describe('StepIndicator.vue', () => {
  it('renders the correct number of steps', () => {
    const wrapper = mount(StepIndicator, {
      props: {
        number: STEP_NUMBER.three,
        currentStep: STEP_NUMBER.one
      }
    })
    expect(wrapper.findAll('#step')).toHaveLength(STEP_NUMBER.three)
  })

  it('renders the correct number of active steps', () => {
    const wrapper = mount(StepIndicator, {
      props: {
        number: STEP_NUMBER.four,
        currentStep: STEP_NUMBER.three
      }
    })
    expect(wrapper.findAll('.bg-primary-moonstone')).toHaveLength(STEP_NUMBER.three)
    expect(wrapper.findAll('.bg-basic-lightgrey')).toHaveLength(
      STEP_NUMBER.four - STEP_NUMBER.three
    )
  })
})
