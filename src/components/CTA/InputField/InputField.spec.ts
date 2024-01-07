import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import InputField from './InputField.vue'
import { INPUTFIELD_STATE } from './InputField.model'

describe('InputField.vue', () => {
  it('renders the component and applies correct classes', () => {
    const wrapper = mount(InputField, {
      props: { modelValue: '' }
    })
    const div = wrapper.find('[data-test="InputField"]')
    expect(div.exists()).toBe(true)
    expect(div.classes()).toEqual(
      expect.arrayContaining(['flex', 'flex-col', 'w-[375px]', 'items-start', 'gap-2'])
    )
  })

  it('renders input field correctly', async () => {
    const wrapper = mount(InputField, {
      props: {
        size: 'default',
        modelValue: ''
      }
    })

    expect(wrapper.find('[data-test="InputField"]')).toBeTruthy()
    expect(wrapper.find('[data-test="InputText"]').html()).toContain(
      'bg-basic-white text-primary-moonstone'
    )
  })

  it('renders date picker input', async () => {
    const wrapper = mount(InputField, {
      props: {
        size: 'default',
        modelValue: '',
        isDateInput: true
      }
    })
    expect(wrapper.find('[data-test="InputDate"]')).toBeTruthy()
  })

  it('renders input error with icon', async () => {
    const wrapper = mount(InputField, {
      props: {
        size: 'default',
        modelValue: '',
        hasIcon: true,
        state: 'error',
        hint: 'Error here'
      }
    })
    expect(wrapper.find('[data-test="Hint"]')).toBeTruthy()
    expect(wrapper.find('[data-test="IconInput"]')).toBeTruthy()
    expect(wrapper.find('[data-test="InputText"]')).toBeTruthy()
  })

  it('renders text area', async () => {
    const wrapper = mount(InputField, {
      props: {
        size: 'big',
        modelValue: '',
        hasIcon: true,
        state: 'error',
        hint: 'Error here'
      }
    })
    expect(wrapper.find('[data-test="TextArea"]')).toBeTruthy()
    expect(wrapper.find('[data-test="TextArea"]').classes()).toContain('text-primary-moonstone')
  })

  it('applies the correct class based on state:error prop', async () => {
    const wrapper = mount(InputField, {
      props: { modelValue: '', state: 'error', size: 'default', hint: 'Error here' }
    })

    expect(wrapper.find('[data-test="InputText"]').classes()).toContain('border-error')
    await wrapper.setProps({ state: 'default' })
    expect(wrapper.find('[data-test="InputText"]').classes()).toContain('border-basic-grey')
  })

  it('emits update:modelValue event when input changes', async () => {
    let wrapper = mount(InputField, {
      props: { modelValue: '', isDateInput: false, size: 'default' }
    })
    await wrapper.find('[data-test="InputText"]').setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])

    wrapper = mount(InputField, {
      props: { modelValue: '', isDateInput: true, size: 'default' }
    })
    await wrapper.find('[data-test="InputDate"]').setValue('2022-01-01')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2022-01-01'])

    wrapper = mount(InputField, {
      props: { modelValue: '', size: 'big' }
    })
    await wrapper.find('[data-test="TextArea"]').setValue('new value')
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['new value'])
  })

  function testDisabledInput(isDateInput: boolean, size: 'default' | 'big', selector: string) {
    it(`does not emit update:modelValue event when ${selector} is disabled`, async () => {
      const wrapper = mount(InputField, {
        props: { modelValue: '', isDateInput, size, state: 'disabled' }
      })

      await wrapper.find(`[data-test="${selector}"]`).setValue('new value')

      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })
  }

  describe('InputField.vue', () => {
    testDisabledInput(true, 'default', 'InputDate')
    testDisabledInput(false, 'default', 'InputText')
    testDisabledInput(false, 'big', 'TextArea')
  })

  it('should be disabled', async () => {
    const wrapper = mount(InputField, {
      props: {
        size: 'default',
        modelValue: '',
        state: 'disabled'
      }
    })
    expect((wrapper.find('[data-test="InputText"]').element as HTMLInputElement).disabled).toBe(
      true
    )
  })

  it('changes class when state prop changes', async () => {
    const wrapper = mount(InputField, {
      props: { modelValue: '', state: INPUTFIELD_STATE.error, size: 'default' }
    })

    let input = wrapper.find('[data-test="InputText"]')
    expect(input.classes()).toContain('border-error')

    await wrapper.setProps({ state: INPUTFIELD_STATE.default })
    expect(input.classes()).toContain('border-basic-grey')
  })
})
