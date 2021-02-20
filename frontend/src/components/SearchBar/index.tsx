import { observer } from 'mobx-react'
import React, { useState } from 'react'
import Store from '../../Store'
import { Button, Icon, Input } from '../atoms'
import List from '../molecules/List'

import { Container, InputRow } from './styles'

interface ISearchBar {
  /**
   * Callback triggered on clicking the button or pressing enter.
   */
  onSubmit: (value: string) => void

  /**
   * MobX state store to observe & re-render
  */
  store: Store
}

const SearchBar: React.FC<ISearchBar> = observer(({ onSubmit, store }) => {
  const [value, setValue] = useState('')

  const handleChange = (val: string) => {
    console.log(val)
    setValue(val)
  }

  return (
    <Container>
      <InputRow>
        <Input
          value={value}
          onChange={handleChange}
          onEnterKeyDown={() => onSubmit(value)}
        />
        <Button onClick={() => onSubmit(value)}>
          <Icon src="/search.svg" />
        </Button>
      </InputRow>
      <List>
        {store.results.map(item => (<List.Item key={item.rank}>{JSON.stringify(item)}</List.Item>))}
      </List>
    </Container>
  )
})

export default SearchBar
