import { memo } from 'react'

type ItemProps = {
  title: string
  onAddToWishlist: (item: string) => void
}
function Item({ title, onAddToWishlist }: ItemProps) {
  return (
    <li>
      {title}
      <button onClick={() => onAddToWishlist(title)}>+</button>
    </li>
  )
}

export default memo(Item)
