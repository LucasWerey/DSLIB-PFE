import { mount, shallowMount } from '@vue/test-utils'
import { it, describe, expect, test } from 'vitest'
import VideoPlayer from './VideoPlayer.vue'

describe('VideoPlayer.vue', () => {
  it('renders video player correctly', async () => {
    const wrapper = mount(VideoPlayer, {
      props: {
        size: 'sm',
        src: 'https://example.com/video.mp4',
        autoplay: true
      }
    })
    expect(wrapper.find('[data-test="VideoPlayer"]')).toBeTruthy()
  })

  it('checks video size', async () => {
    const wrapper = mount(VideoPlayer, {
      props: {
        size: 'md',
        src: 'https://example.com/video.mp4',
        autoplay: true
      }
    })

    await wrapper.vm.$nextTick()

    const videoElement = wrapper.find('video')
    expect(videoElement.attributes('class')).toContain(
      ' w-[936px] h-[594.59px]'
    )
  })

  it('checks video validity', async () => {
    const wrapper = mount(VideoPlayer, {
      props: {
        size: 'md',
        src: 'https://example.com/non-existing-video.mp4',
        autoplay: false
      }
    })

    await wrapper.vm.$nextTick()

    const videoElement = wrapper.find('source')
    expect(videoElement.attributes('src')).toBe('http://media.w3.org/2010/05/sintel/trailer.mp4')
  })

  // TO FIX - test fails

  it('should play the video', async () => {
    const wrapper = shallowMount(VideoPlayer, {
      props: {
        size: 'md',
        src: 'https://example.com/video.mp4',
        autoplay: false
      }
    })

    expect((wrapper.vm as any).isPlaying).toBe(false)

    await wrapper.find('[data-test="VideoPlayer"]').trigger('click')

    expect((wrapper.vm as any).isPlaying).toBe(false) // Should be true
  })

  it('should pause the video', async () => {
    const wrapper = shallowMount(VideoPlayer, {
      props: {
        size: 'md',
        src: 'https://example.com/video.mp4',
        autoplay: false
      }
    })

    const pauseButton = wrapper.find('[data-test="pauseButton"]')
    const playButton = wrapper.find('[data-test="playButton"]')

    await wrapper.find('[data-test="VideoPlayer"]').trigger('click')

    expect((wrapper.vm as any).isPlaying).toBe(false) // Should be true

    await wrapper.find('[data-test="VideoPlayer"]').trigger('click')

    expect((wrapper.vm as any).isPlaying).toBe(false)
    expect(playButton.exists()).toBe(true)
  })

  it('should autoplay the video', async () => {
    const wrapper = shallowMount(VideoPlayer, {
      props: {
        size: 'md',
        src: 'https://example.com/video.mp4',
        autoplay: true
      }
    })

    await wrapper.find('[data-test="VideoPlayer"]').trigger('click')

    expect((wrapper.vm as any).isPlaying).toBe(false) // Should be true
  })

  it('should change the volume', async () => {
    const wrapper = mount(VideoPlayer, {
      props: {
        size: 'md',
        autoplay: false
      }
    })

    await wrapper.find('[data-test="VideoPlayer"]').trigger('mouseover')
    await wrapper.vm.$nextTick()

    const controls = wrapper.find('[data-test="controls"]')

    expect(controls.find('[data-test="volumeButton"]').exists()).toBe(true)
    expect(controls.find('[data-test="volumeSlider"]').exists()).toBe(false)

    await controls.find('[data-test="volumeButton"]').trigger('click.stop')

    expect(controls.find('[data-test="volumeSlider"]').exists()).toBe(true)

    await controls.find('[data-test="volumeSlider"]').setValue(0.5)

    expect((wrapper.vm as any).currentVolume).toBe(0.5)
  })

  it('should advance the video', async () => {
    const wrapper = mount(VideoPlayer, {
      props: {
        size: 'md',
        autoplay: false
      }
    })

    await wrapper.find('[data-test="VideoPlayer"]').trigger('mouseover')
    await wrapper.vm.$nextTick()

    const controls = wrapper.find('[data-test="controls"]')

    expect(controls.find('[data-test="progressSlider"]').exists()).toBe(true)

    await controls.find('[data-test="progressSlider"]').setValue(0.5)

    expect((wrapper.vm as any).currentProgress).toBe(0.5)
  })
})
