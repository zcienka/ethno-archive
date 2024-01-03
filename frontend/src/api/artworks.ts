import axios from "axios"
import { API_URL } from "../config"
import { useMutation } from "react-query"

export const getArtworks = async () => {
    const response = await axios.get(`${API_URL}v1/artworks`)
    return response.data
}

export const getArtwork = async (id: string) => {
    return await axios.get(`${API_URL}v1/artworks/${id}`)
        .then(res => res.data)
}

export const getAdvancedSearchResult = async (queryParameters: string) => {
    return await axios.get(`${API_URL}v1${queryParameters}`)
        .then(res => res.data)
}


export const getArtworksByCategory = async (collection: string, page: number, pageSize: number, searchparams: string) => {
    return await axios.get(`${API_URL}v1/collection/${collection}/artworks${searchparams}`, {
        params: {
            page: page,
            pageSize: pageSize,
        },
    })
        .then(res => res.data)
}

export const uploadArtworks = async (fileContents: any) => {
    return await axios.post(`${API_URL}v1/upload`, {fileContents})
    .then(res => res.data)
}

export const getArtworksForExport = async (artworksQuery: string) => {
    return  await axios.get(`${API_URL}v1/upload?${artworksQuery}`)
    .then(res => res.data)
}

export const createArtwork = async () => {
    return await axios
        .post(`${API_URL}v1/artworks`, {})
        .then(res => res.data)
}

export const updateArtwork = async ({ id, artwork, jwtToken }: {
    id: string
    artwork: any
    jwtToken: string
}) => {
    const response = await axios.put(`${API_URL}v1/artworks/${id}`, artwork, { headers: { "Authorization": `Bearer ${jwtToken}` } })
    return response.data
}

export const useBatchDeleteArtworkMutation = () => {
    return useMutation(async (artworks: string[]) => {
        const artworkIds = artworks.join(",")
        const url = `${API_URL}v1/artworks/${artworkIds}`

        const res = await axios.delete(url)
        return res.data
    })
}

export const deleteArtwork = async (artworkId: string, jwtToken: string) => {
    const response = await axios.delete(`${API_URL}v1/artworks/${artworkId}`, { headers: { "Authorization": `Bearer ${jwtToken}` } })
    return response.data
}