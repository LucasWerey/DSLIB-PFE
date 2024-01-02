import { mount } from '@vue/test-utils'
import { it, describe, expect } from 'vitest'
import Avatar from './Avatar.vue'
import { AVATAR_SIZE, AVATAR_TYPE } from './Avatar.model'

describe('Avatar.vue', () => {
  it('should compute the avatar correctly', async () => {
    const wrapper = mount(Avatar, {
      props: {
        size: AVATAR_SIZE.xlarge,
        type: AVATAR_TYPE.initial
      }
    })

    expect(wrapper.find('[data-test="Avatar"]')).toBeTruthy
  })

  it('should throw an error when src and alt are not provided', async () => {
    expect(() => {
      mount(Avatar, {
        props: {
          size: AVATAR_SIZE.xlarge,
          type: AVATAR_TYPE.photo
        }
      })
    }).toThrow()
  })

  it('should render an image when type is photo', async () => {
    const wrapper = mount(Avatar, {
      props: {
        size: AVATAR_SIZE.xlarge,
        type: AVATAR_TYPE.photo,
        src: 'https://via.placeholder.com/150',
        alt: 'test'
      }
    })

    expect(wrapper.find('img')).toBeTruthy
  })
})
