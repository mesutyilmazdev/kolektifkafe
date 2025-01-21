import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import Image from "next/image"

export default function Coctail() {
    return <>
    <TabsContent value="coctail">
        <div className="w-full relative flex items-center justify-center h-auto">
            <div className="grid grid-cols-2 gap-5 mx-4">
                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">NÖRDLİNGEN</h4>
                        <p className="text-xs text-slate-600">Turunç, Ananas, Sprite, Buz.</p>
                        <h6 className="font-bold text-xl">200 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">CRYSTAL NOIR</h4>
                        <p className="text-xs text-slate-600">Orman meyveleri, Limonata, Buz.</p>
                        <h6 className="font-bold text-xl">200 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">KAMİKAZE</h4>
                        <p className="text-xs text-slate-600">Yeşil elma, Kivi, Sprite, Buz</p>
                        <h6 className="font-bold text-xl">200 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">COOL LIME</h4>
                        <p className="text-xs text-slate-600">Lime şurubu, Limon, Su, Buz.</p>
                        <h6 className="font-bold text-xl">200 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">MOJITO</h4>
                        <p className="text-xs text-slate-600">Nane, Esmer şeker, Soda, Buz.</p>
                        <h6 className="font-bold text-xl">200 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">SONIC</h4>
                        <p className="text-xs text-slate-600">Karpuz, Çilek, Sprite, Buz.</p>
                        <h6 className="font-bold text-xl">200 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">CHAMP</h4>
                        <p className="text-xs text-slate-600">Turunç, Çilek, Ananas, Sprite, Buz.</p>
                        <h6 className="font-bold text-xl">250 ₺</h6>
                    </CardHeader>
                </Card>

            </div>
        </div>
    </TabsContent>
    </>
}