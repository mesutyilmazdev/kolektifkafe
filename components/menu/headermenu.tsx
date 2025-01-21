import Image from "next/image"
import Link from "next/link"
import {Button} from "@/components/ui/button"
import {Instagram, ChefHat, ChevronLeft} from "lucide-react"

export default function Headermenu() {
    return <>
        <Link href="/" className="mt-2 ml-2">
            <Button variant="outline" size="sm" className="shadow-lg"><ChevronLeft />Geri</Button>
        </Link> 

    <Link href="/" className="flex justify-center mt-2 mb-2">
        <Image src="/LogoKolektif.png" width={150} height={150} priority alt="Kolektif Kafe" />
    </Link>
    <Link href="https://www.instagram.com/kolektifkafe" className="flex justify-center">
        <Button className="font-thin text-sm"><Instagram/>Takip et!</Button>
    </Link>
        
        <div className="flex flex-col justify-center items-center my-8 ">
            <ChefHat size={36} className="animate-bounce"/>
        <h2 className="font-thin text-4xl">Menü</h2>
        </div>

    </>
}