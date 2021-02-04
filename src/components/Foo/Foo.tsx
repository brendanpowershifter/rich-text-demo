import React from 'react'

export interface FooProps {
  header: string
  list: string[]
}

const Foo: React.FC<FooProps> = ({ header, list }) => {
  return (
    <>
      <h1>{header}</h1>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default Foo
