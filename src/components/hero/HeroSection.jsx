import React from 'react'
import HeroInformation from './information/HeroInformation';
import HeroImage from './profile/HeroImage';



const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16 bg-white hero-pattern">
            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Information Column - Full width on mobile, 7 cols on lg+ */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                        <HeroInformation />
                    </div>

                    {/* Image Column - Full width on mobile, 5 cols on lg+ */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                        <HeroImage />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection