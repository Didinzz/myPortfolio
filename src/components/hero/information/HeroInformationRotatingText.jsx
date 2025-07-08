import React from 'react'
import RotatingText from '../../Animate/RotatingText '; 

const HeroInformationRotatingText = () => {
    return (
        <div className="flex items-center space-x-4 mb-8">
            <div className="h-px bg-black w-12"></div>
            <div className=" bg-black text-white px-4 py-2 rounded-sm text-sm font-medium">
                <RotatingText
                    texts={['Web Developer', 'Gorontalo State University', 'Keep Learning!', 'Gorontalo, Indonesia']}
                    mainClassName="bg-black text-white px-4 py-2 rounded-sm text-sm font-medium"
                    staggerFrom={"first"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3000}
                />
            </div>
        </div>
    )
}

export default HeroInformationRotatingText