import { useCallback, useMemo, useState } from 'react'
import './App.css'
import Item from './components/Item'

function App() {
  const [items, setItems] = useState<string[]>([])
  const [, setWishlist] = useState<typeof items>([])
  const [newItem, setNewItem] = useState('')

  function addItemToList() {
    setItems([...items, `Item ${items.length}`])
  }

  const addToWishlist = useCallback(
    (item: string) => setWishlist((state) => [...state, item]),
    []
  )

  const countItemsWithOne = useMemo(() => {
    console.log('Calculated')
    return items.filter((item) => item.includes('1')).length
  }, [items])

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={({ target: { value } }) => setNewItem(value)}
      />
      <button onClick={addItemToList}>Add</button>

      <ul>
        {items.map((item) => (
          <Item key={item} title={item} onAddToWishlist={addToWishlist} />
        ))}
      </ul>

      <p>Contagem: {countItemsWithOne}</p>
    </div>
  )
}

export default App
