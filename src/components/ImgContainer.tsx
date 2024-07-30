import type { Photo } from "@/models/Gallery";
import Image from "next/image"

type Props = {
    photo: Photo
}

export default function ImgContainer({photo}:Props){
    return (
        <div key={photo.id} className="h-64 bg-gray-200 rounded-xl relative overflow-hidden">
            <Image
                src={photo.src.large}
                alt={photo.alt}
                width={512}
                height={250}
                className="object-cover cursor-pointer hover:opacity-60"
            />
        </div>
    )
}