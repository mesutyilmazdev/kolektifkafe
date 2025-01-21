import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return <div className="flex flex-col justify-center items-center mt-8">
        <div className="copy">
            <p className="text-xs font-thin">© 2025 | Kolektif Kafe Adıyaman</p>
        </div>
        <div className="nemroot mb-2">
        <Link href="https://www.nemroot.net">
            <Image src="/nemrootLogo.svg" width={70} height={70} priority className="mt-3" alt="Nemroot Digital Works" />
        </Link>
        </div>
    </div>
}