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

export default function Coffees() {
    return <>
    <TabsContent value="coffee">
        <div className="w-full relative flex items-center justify-center h-auto">
            <div className="grid grid-cols-2 gap-5 mx-4">
                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">TÜRK <br /> KAHVESİ</h4>
                        <h6 className="font-bold text-xl">85 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">TÜRK <br /> KAHVESİ <span className="font-thin text-slate-500">(sütlü)</span></h4>
                        <h6 className="font-bold text-xl">90 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold font-manrope">MENENGİÇ KAHVESİ</h4>
                        <h6 className="font-bold text-xl">90 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold font-manrope">DİBEK <br /> KAHVESİ</h4>
                        <h6 className="font-bold text-xl">90 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold font-manrope">TÜRK <br /> KAHVESİ <span className="font-thin text-slate-500">(süvari)</span></h4>
                        <h6 className="font-bold text-xl">115 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold font-manrope">MENENGİÇ <br /> KAHVESİ <span className="font-thin text-slate-500">(süvari)</span></h4>
                        <h6 className="font-bold text-xl">110 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold font-manrope">DİBEK <br /> KAHVESİ <span className="font-thin text-slate-500">(süvari)</span></h4>
                        <h6 className="font-bold text-xl">110 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold font-manrope">NESCAFE</h4>
                        <h6 className="font-bold text-xl">70 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold font-manrope">NESCAFE <span className="font-thin text-slate-500">(sütlü)</span></h4>
                        <h6 className="font-bold text-xl">80 ₺</h6>
                    </CardHeader>
                </Card>

            </div>
        </div>
    </TabsContent>
    </>
}