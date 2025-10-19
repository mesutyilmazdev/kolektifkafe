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

export default function Dessert() {
    return <>
    <TabsContent value="dessert">
        <div className="w-full relative flex items-center justify-center h-auto">
            <div className="grid grid-cols-2 gap-5 mx-4">
                {/* <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">COOKIE <span className="font-thin text-slate-500">(Çikolatalı)</span></h4>
                        <h6 className="font-bold text-xl">100 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">COOKIE <span className="font-thin text-slate-500">(Antep fıstıklı)</span></h4>
                        <h6 className="font-bold text-xl">180 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">BROWNIE</h4>
                        <h6 className="font-bold text-xl">250 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">CHEESECAKE <span className="font-thin text-slate-500">(Meyveli)</span></h4>
                        <h6 className="font-bold text-xl">180 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">MAGNOLIA <span className="font-thin text-slate-500">(Muzlu)</span></h4>
                        <h6 className="font-bold text-xl">120 ₺</h6>
                    </CardHeader>
                </Card>  

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">MAGNOLIA <span className="font-thin text-slate-500">(Çilekli)</span></h4>
                        <h6 className="font-bold text-xl">120 ₺</h6>
                    </CardHeader>
                </Card>                */}


            </div>
        </div>
                <div className="warnArea text-center">
                    <div className="warnTexts mt-4">
                        <p className="text-slate-900 text-xl font-bold">TATLILARIMIZ GÜNLÜKTÜR</p>
                        <p className="text-slate-600 text-lg font-light">Lütfen garsondan bilgi alınız.</p>
                    </div>
                    <div className="warnImg mt-10">
                        <Image src="/tatlilar-kolektif-illustration.svg" className="mx-auto" width={350} height={350} priority alt="Kolektif Kafe - Tatlılar" />
                    </div>
                </div>
    </TabsContent>
    </>
}