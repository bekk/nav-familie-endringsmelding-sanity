import { defineConfig, definePlugin } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from './structure'

const sharedConfig = definePlugin({
  name: 'shareConfig',
  plugins: [deskTool({ structure }), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

export default defineConfig([
  {
    projectId: 'd8ycstqz',
    name: 'production',
    title: 'Produksjon',
    dataset: 'production',
    basePath: '/production',
    plugins: [sharedConfig()],
  },
  {
    projectId: 'd8ycstqz',
    name: 'test',
    title: 'Test',
    dataset: 'test',
    basePath: '/test',
    plugins: [sharedConfig()],
  },
])
