import { mount } from '@vue/test-utils'
import SnackBar from './SnackBar.vue'
import { SNACKBAR_TYPE, SNACKBAR_CLOSE, SNACKBAR_SIZE } from './SnackBar.model'
import { it, describe, expect } from 'vitest'

describe('SnackBar.vue', () => {
  it('should compute the snackbar correctly', async () => {
    const wrapper = mount(SnackBar, {
      props: {
        type: SNACKBAR_TYPE.info,
        size: SNACKBAR_SIZE.small,
        close: SNACKBAR_CLOSE.yes
      }
    })

    expect(wrapper.find('[data-test="SnackBar"]')).toBeTruthy
  })

  it('should compute props correctly', async () => {
    const wrapper = mount(SnackBar, {
      props: {
        type: SNACKBAR_TYPE.info,
        size: SNACKBAR_SIZE.small,
        close: SNACKBAR_CLOSE.yes
      }
    })

    expect(wrapper.props().type).toBe(SNACKBAR_TYPE.info)
    expect(wrapper.props().size).toBe(SNACKBAR_SIZE.small)
    expect(wrapper.props().close).toBe(SNACKBAR_CLOSE.yes)
  })

  it('should add close icon with props close set to yes', () => {
    const wrapper = mount(SnackBar, {
      props: {
        type: SNACKBAR_TYPE.info,
        size: SNACKBAR_SIZE.small,
        close: SNACKBAR_CLOSE.yes
      }
    })

    expect(wrapper.findComponent({ name: 'IconsBase' })).toBeTruthy
  })

  it('should not add close icon with props close set to yes', () => {
    const wrapper = mount(SnackBar, {
      props: {
        type: SNACKBAR_TYPE.info,
        size: SNACKBAR_SIZE.small,
        close: SNACKBAR_CLOSE.no
      }
    })

    expect(wrapper.findComponent({ name: 'IconsBase' })).toBeFalsy
  })

  it('should emit close event when close icon is clicked', async () => {
    const wrapper = mount(SnackBar, {
      props: {
        type: SNACKBAR_TYPE.info,
        size: SNACKBAR_SIZE.small,
        close: SNACKBAR_CLOSE.yes
      }
    })

    await wrapper.findComponent({ name: 'IconsBase' }).trigger('click')

    expect(wrapper.emitted('close')).toBeTruthy
  })
})
