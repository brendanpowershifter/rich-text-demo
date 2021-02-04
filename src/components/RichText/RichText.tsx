import React from 'react'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { Document, BLOCKS, Block, Inline } from '@contentful/rich-text-types'
import EmbeddedEntry, { EMBEDDED_ENTRIES } from '@components/EmbeddedEntriesFactory/EmbeddedEntriesFactory'

export interface RichTextProps {
  content: Document
  externalProps?: {
    [key in keyof typeof EMBEDDED_ENTRIES]?: Record<string, any>
  }
}

const RichText: React.FC<RichTextProps> = ({ content, externalProps }) => {
  const getEntryType = (node: Block | Inline): EMBEDDED_ENTRIES => node.data.target.sys.contentType.sys.id

  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const {
          data: {
            target: { sys, ...rest },
          },
        } = node
        const nodeType: EMBEDDED_ENTRIES = getEntryType(node)
        const { getEmbeddedEntry } = EmbeddedEntry()
        const { component: Component } = getEmbeddedEntry(nodeType)
        if (Component !== null) {
          const extraProps = (externalProps && externalProps[nodeType]) ?? {}
          return <Component {...rest} {...extraProps} />
        }
        return null
      },
    },
  }
  const components = documentToReactComponents(content, options)
  return <>{components}</>
}

export default RichText
