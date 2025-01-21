import Image from "next/image"
import Link from "next/link"

export default function Headermain() {
    return <>
    <Link href="/" className="flex justify-center mt-10">
        <Image src="/LogoKolektif.png" width={150} height={150} priority className="shadow-lg" alt="Kolektif Kafe" />
    </Link>
        <h1 className="font-bold text-center text-4xl animate-pulse">HOŞ GELDİNİZ</h1>
</>
}