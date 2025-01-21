import Head from "next/head";
import Footer from "@/components/main/footer";
import Headermenu from "@/components/menu/headermenu";
import { TabsDemo } from "@/components/menu/categories";
import {motion} from "framer-motion"


export default function Menu() {
    return <>
    <Head>
      <title>Menü | Kolektif Kafe Adıyaman</title>
      <meta property="og:title" content="Menü | Kolektif Kafe Adıyaman" key="title" />
    </Head>

    <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} >
      <main className="flex flex-col min-h-screen justify-between bg-slate-100">
        <Headermenu/>
        <TabsDemo/>
        <Footer/>
      </main>
    </motion.div>
    </>
}