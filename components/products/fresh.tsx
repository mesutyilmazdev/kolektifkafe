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

export default function Fresh() {
    return <>
    <TabsContent value="fresh">
        <div className="w-full relative flex items-center justify-center h-auto">
            <div className="grid grid-cols-2 gap-5 mx-4">
                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">SMOOTHIE</h4>
                        <h6 className="font-bold text-xl">140 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">CHURCHILL</h4>
                        <h6 className="font-bold text-xl">80 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">LİMONATA</h4>
                        <h6 className="font-bold text-xl">110 ₺</h6>
                    </CardHeader>
                </Card>

                <Card className="rounded-xl bg-white shadow-lg shadow-gray-300 overflow-hidden">
                    <Image src="/photo-loading-kolektif.png" width={180} height={180} alt="Kolektif Kafe Product" />
                    <CardHeader>
                        <h4 className="text-base font-bold">PORTAKAL SUYU</h4>
                        <h6 className="font-bold text-xl">130 ₺</h6>
                    </CardHeader>
                </Card>

            </div>
        </div>
    </TabsContent>
    </>
}