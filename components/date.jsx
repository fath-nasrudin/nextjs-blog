import {parseISO, format} from 'date-fns'

export default function Date({dateString}) {
  const date = parseISO(dateString)

  return (
    <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
  )
}

// 1 3 bumn firma cv koperasi
// 1 1

