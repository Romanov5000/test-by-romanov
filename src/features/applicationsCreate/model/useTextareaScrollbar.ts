import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type InputEvent,
  type Ref,
  type UIEvent,
} from 'react'

const TRACK_INSET_Y = 12
const THUMB_MIN_HEIGHT = 24

type ThumbState = {
  visible: boolean
  height: number
  top: number
}

export const useTextareaScrollbar = (
  contentLength: number,
  fieldRef?: Ref<HTMLTextAreaElement>,
) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [thumb, setThumb] = useState<ThumbState>({ visible: false, height: 0, top: 0 })

  const updateThumb = useCallback(() => {
    const el = textareaRef.current
    if (!el) return

    const { scrollTop, scrollHeight, clientHeight } = el
    const maxScroll = scrollHeight - clientHeight

    if (maxScroll <= 0) {
      setThumb({ visible: false, height: 0, top: 0 })
      return
    }

    const trackHeight = clientHeight - TRACK_INSET_Y * 2
    const height = Math.max((clientHeight / scrollHeight) * trackHeight, THUMB_MIN_HEIGHT)
    const top = TRACK_INSET_Y + (scrollTop / maxScroll) * (trackHeight - height)

    setThumb({ visible: true, height, top })
  }, [])

  useEffect(() => {
    updateThumb()
  }, [contentLength, updateThumb])

  const assignRef = useCallback(
    (node: HTMLTextAreaElement | null) => {
      textareaRef.current = node

      if (typeof fieldRef === 'function') {
        fieldRef(node)
      } else if (fieldRef && typeof fieldRef === 'object' && 'current' in fieldRef) {
        fieldRef.current = node
      }
    },
    [fieldRef],
  )

  const handleScroll = useCallback(
    (e: UIEvent<HTMLTextAreaElement>, onScroll?: (e: UIEvent<HTMLTextAreaElement>) => void) => {
      updateThumb()
      onScroll?.(e)
    },
    [updateThumb],
  )

  const handleInput = useCallback(
    (e: InputEvent<HTMLTextAreaElement>, onInput?: (e: InputEvent<HTMLTextAreaElement>) => void) => {
      updateThumb()
      onInput?.(e)
    },
    [updateThumb],
  )

  return { assignRef, thumb, handleScroll, handleInput }
}
