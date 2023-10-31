'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

type TSetSearchParam = {
  key: string
  value: string
}

export function useSearch() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const location = searchParams.get('location')
  const adults = searchParams.get('adults')
  const children = searchParams.get('children')
  const date = searchParams.get('date')
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setSearchParam = ({ key, value }: TSetSearchParam) => {
    router.push(pathname + '?' + createQueryString(key, value))
  }

  console.log(location, adults, children, date)
  return {
    setSearchParam,
    location,
  }
}
