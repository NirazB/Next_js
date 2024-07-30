import type { ImagesResults } from "@/models/Gallery";
import { ImagesSchemaWithPhotos } from "@/models/Gallery";
import env from "./env"

export default async function fetchImages(url: string): 
Promise<ImagesResults | undefined >{
    try{
        const res= await fetch(url,{
            headers: {
                Authorization: env.PEXELS_API_KEY
            }
        })

        if(!res.ok) throw new Error("Fetch Images error!\n")

        const imagesResults: ImagesResults = await res.json()

        //console.log(imagesResults)
        const parsedData = ImagesSchemaWithPhotos.parse(imagesResults)
        //
        if(parsedData == null) return undefined
        return parsedData
    }catch(e){
        if(e instanceof Error) console.log(e.stack)
    }
}
