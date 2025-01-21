import Contentmain from "@/components/main/contentmain";
import Footer from "@/components/main/footer";
import Headermain from "@/components/main/headermain";
import Head from "next/head";
import {motion} from "framer-motion"

export default function Home() {
  return (
   <>
    <Head>
      <title>Kolektif Kafe | Adıyaman</title>
      <meta property="og:title" content="Kolektif Kafe | Adıyaman" key="title" />
    </Head>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} >
        <main className="flex flex-col min-h-screen justify-between items-center bg-slate-100">
          <Headermain/>
          <Contentmain/>
          <Footer/>
        </main>
      </motion.div>
   </>
  );
}
