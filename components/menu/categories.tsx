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

import Tea from "../products/tea"
import Coffees from "../products/coffees"
import Wcoffee from "../products/wcoffee"
import Hot from "../products/hot"
import Soft from "../products/soft"
import Coctail from "../products/coctail"
import Fresh from "../products/fresh"
import Dessert from "../products/dessert"

export function TabsDemo() {
  return <div className="flex justify-center">

  <Tabs defaultValue="tea" className="w-[400px]">
  <div className="no-scrollbar overflow-y-auto">
    <TabsList className="py-8 px-4 mb-4">
      <TabsTrigger value="tea" className="text-lg">ÇAYLAR</TabsTrigger>
      <TabsTrigger value="coffee" className="text-lg">KAHVELER</TabsTrigger>
      <TabsTrigger value="wcoffee" className="text-lg">DÜNYA KAHVELERİ</TabsTrigger>
      <TabsTrigger value="hot" className="text-lg">SICAK İÇECEKLER</TabsTrigger>
      <TabsTrigger value="soft" className="text-lg">SOFT İÇECEKLER</TabsTrigger>
      <TabsTrigger value="coctail" className="text-lg">KOKTEYLLER</TabsTrigger>
      <TabsTrigger value="fresh" className="text-lg">FRESH İÇECEKLER</TabsTrigger>
      <TabsTrigger value="dessert" className="text-lg">TATLILAR</TabsTrigger>
    </TabsList>
  </div>

<Tea/>
<Coffees/>
<Wcoffee/>
<Hot/>
<Soft/>
<Coctail/>
<Fresh/>
<Dessert/>

    </Tabs>

  </div>
}
