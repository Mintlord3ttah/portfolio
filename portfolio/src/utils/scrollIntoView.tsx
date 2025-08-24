import { useEffect } from 'react'

export type element = HTMLDivElement | HTMLTableSectionElement
type ScrollProps = {
    element: element
    trigger: boolean | string
}

export default function useScrollIntoView({element, trigger}: ScrollProps) {
    const checkEl = element as element
    useEffect(()=>{
        if(!checkEl) return
        checkEl.scrollIntoView({behavior: "smooth"})
    },[trigger])
  return null
}
