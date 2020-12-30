import axios from "axios"
import { useEffect, useState } from "react"

export const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  })
  if (!opts.url) {
    return
  }
  const [trigger, setTrigger] = useState(0)
  const refetch = () => {
    setState({ ...state, loading: true })
    setTrigger(Date.now())
  }
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({ ...state, loading: false, data })
      })
      .catch((e) => {
        setState({ ...state, loading: false, e })
      })
  }, [trigger])

  return { ...state, refetch }
}
