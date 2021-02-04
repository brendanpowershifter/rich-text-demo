import Foo from '@components/Foo'

export enum EMBEDDED_ENTRIES {
  foo = 'foo', // TODO: Add another content type into the enum
}

const EmbeddedEntryFactory = () => {
  const EmbeddedEntries = {
    [EMBEDDED_ENTRIES.foo]: { component: Foo }, // TODO: Add the key from the enum along with the component you want to render in the format on this line
  }

  const getEmbeddedEntry = (type: EMBEDDED_ENTRIES) => {
    return EmbeddedEntries[type] ?? { component: null }
  }

  return {
    getEmbeddedEntry,
  }
}

export default EmbeddedEntryFactory
