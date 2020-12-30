export const useFullScreen = () => {
  const element = useRef()
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen()
    }
  }
  const exitFull = () => {
    document.exitFullscreen()
  }

  return { element, triggerFull, exitFull }
}
