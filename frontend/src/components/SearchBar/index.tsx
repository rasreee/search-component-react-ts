import React, { useState } from 'react'
import { Button, Icon, Input } from '../atoms'

import { Container, InputRow } from './styles'

interface ISearchBar {
  /**
   * Callback triggered on clicking the button or pressing enter.
   */
  onSubmit: (value: string) => void
}

const SearchBar: React.FC<ISearchBar> = ({ onSubmit }) => {
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
    </Container>
  )
}

export default SearchBar
