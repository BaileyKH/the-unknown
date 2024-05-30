const apiKey = import.meta.env.VITE_NPS_API_KEY
// const baseUrl = `https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=${apiKey}`

// # base url: developer.nps.gov/api/v1

export async function test(state) {
    const res = await fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=${state}&limit=10&api_key=${apiKey}`, {
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