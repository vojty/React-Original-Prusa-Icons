import React from 'react'
import styled from 'styled-components'

const TagContainer = styled.div`
  background-color: transparent;
  border: 1px solid black;
  padding: 0;
  font-size: 0.8em;
  display: inline-block;
  height: 22px;
  margin: 4px;
  text-transform: uppercase;

  span {
      padding-bottom: 2px;
      padding-left: 3px;
      padding-right: 3px;
      display: inline-block;
  }
`

interface IProps {
    title: string
}

const Tag: React.FC<IProps> = (props) => {
    return (
        <TagContainer className="tag">
            <span>{props.title}</span>
        </TagContainer>
    )
}

export default Tag