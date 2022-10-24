import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navbar from "@/components/React/global-components/navbar";
import Banner from "@/components/React/section-components/banner";
import Service from "@/components/React/section-components/service";
import Explore from "@/components/React/section-components/explore";
import FeaturedProperties from "@/components/React/section-components/featured-properties";
import Ads from "@/components/React/section-components/ads";
import PropertiesByCities from "@/components/React/section-components/properties-by-cities";
import RecentProperties from "@/components/React/recent-properties";
import OurPartner from "@/components/React/section-components/our-partner";
import Footer from "@/components/React/global-components/footer";
import FeaturedProject from "@/components/React/section-components/featured-project";
import WhyChooseUs from "@/components/React/section-components/why-choose-us";



export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div>
                <Navbar />
                <Banner />
                {/*<Service />*/}
                {/*<Explore />*/}
                {/*<FeaturedProperties />*/}
                {/*<Ads />*/}
                {/*<PropertiesByCities />*/}
                {/*<RecentProperties />*/}
                <FeaturedProject />
                <WhyChooseUs />
                {/*<OurPartner />*/}
                <Footer />
            </div>
        </>
    )
}
