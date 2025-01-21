import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Coffee, Instagram} from "lucide-react"

export default function Contentmain() {
    return <>
    <div className="menubtn flex flex-col items-center justify-center mt-6">
    <Button asChild size="lg" className="shadow-lg hover:shadow-none">
        <Link href="/menu" className="text-lg"><Coffee size={32} /> Menü</Link>
      </Button>
        <Image src="/badem-kolektif-illustration.svg" className="mt-6" width={350} height={350} priority alt="Kolektif Kafe - Badem" />
        <Link href="https://www.instagram.com/kolektifkafe">
            <Button className="font-thin text-sm mt-6"><Instagram/> Takip et!</Button>
        </Link>
    </div>
    </>
}
