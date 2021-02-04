import { createClient } from 'contentful'
import { NextApiRequest, NextApiResponse } from 'next'
import { Foo } from 'contentfulTypes'
import traverseFields from '@utils/contentful/traverseFields'

export const getContent = async (value: string): Promise<Foo> => {
  // set these environment variables first
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })
  // Change this to a type matching
  const entries = await client.getEntries<Foo>({
    'field.header': value,
    content_type: 'foo', // TODO: Change with the content type you want to query
    include: 3, // this is the nested content type resolution depth
  })
  const entry = entries.items.find((item) => item.fields.header === value) // TODO: Change this to an identifier field in the content type
  return traverseFields(entry)
}

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const entries = await getContent(req.query.value as string)
    res.status(200).json(entries)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
