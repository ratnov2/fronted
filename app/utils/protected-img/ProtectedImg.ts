import { instanceImg } from "@/api/api"

export async function displayProtectedImage(
  imageId: string,
  imageUrl: string,
  authToken: string
) {
  // Fetch the image.
  const response = await fetchWithAuthentication(imageUrl, authToken)

  // Create an object URL from the data.
  const blob = await response.blob()
  const objectUrl = URL.createObjectURL(blob)
 return objectUrl
  // Update the source of the image.
  //@ts-ignore
  // const imageElement = getElementById(imageId)
  // imageElement.src = objectUrl
  // //@ts-ignore
  // imageElement.onload = () => URL.revokeObjectUrl(objectUrl)
}
async function fetchWithAuthentication(url: string, authToken: string) {
  const img = await instanceImg.get(url)
  return img.data
}
