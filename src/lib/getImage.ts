import type { ImageMetadata } from 'astro'

const assetsSrc = '/src/assets/images/'

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{png,jpg,jpeg,webp,avif}'
)

export default async function getImage(imgName: string): Promise<ImageMetadata> {
  const path = `${assetsSrc}${imgName}`
  const imageImport = images[path]
  if (!imageImport) {
    throw new Error(`Imagen "${imgName}" no encontrada en ${assetsSrc}`)
  }
  const module = await imageImport()
  return module.default
}
