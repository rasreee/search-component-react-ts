import { Data } from '../types'

export function formatToDataList(jsons: Array<any>): Data[] {
    return jsons.map((obj, index) => ({
        rank: index,
        artist: {
            id: obj.id,
            name: obj.name,
        },
    }))
}
