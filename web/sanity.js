import { createClient, createImageUrlBuilder } from "next-sanity"

const config = {
  dataset: "production",
  projectId: 'n65ed0r6',
  useCdn: true,
  apiVersion: '2020-05-20'
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
}
/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)