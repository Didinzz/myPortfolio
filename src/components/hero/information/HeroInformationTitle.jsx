import React from 'react'
import DecryptedText from '../../Animate/DecryptedText';
import SplitText from '../../Animate/SplitText';
const HeroInformationTitle = () => (
    <div className="mb-4">
        <span className="inline-block py-1 px-3 bg-black text-white text-xs tracking-wider uppercase rounded-full mb-4">Welcome to My Portfolio</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight break-words animated-border">
            I'm  <br /><span className="gradient-text">
                <SplitText
                    text="Didin Zakaria"
                    className="font-semibold text-center text-black text-5xl sm:text-6xl md:text-7xl"
                    delay={150}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center" />

            </span>
        </h1>

    </div>
)

export default HeroInformationTitle