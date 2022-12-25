// sanity.config.js
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'



export default defineConfig({
  name: 'SanityProject',
  title: 'Sanity Project 1',
  projectId: 'j4qhoozr',
  dataset: 'production',
  plugins: [
    deskTool(),
  ],
  schema: {
    types: schemas,
  },
})