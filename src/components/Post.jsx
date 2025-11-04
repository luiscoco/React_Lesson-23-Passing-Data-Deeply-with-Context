import React from 'react'
import Section from './Section'
import Heading from './Heading'
import ThemedBox from './ThemedBox'

export default function Post({ title, content }) {
  return (
    <Section>
      <Heading>{title}</Heading>
      <ThemedBox>{content}</ThemedBox>
    </Section>
  )
}
