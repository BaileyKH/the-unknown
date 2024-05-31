const apiKey = import.meta.env.VITE_NPS_API_KEY
// const baseUrl = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${apiKey}`

// # base url: developer.nps.gov/api/v1

export async function getCampgrounds(state) {
    const res = await fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}&limit=20&api_key=${apiKey}`, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data.data
}

export async function getCampground(id) {
    const res = await fetch(`https://developer.nps.gov/api/v1/campgrounds?id=${id}&api_key=${apiKey}`, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    if(!res.ok) {
        throw Error("There was an issue getting this campsite")
    }

    const data = await res.json()
    return data.data

}