import React from 'react';
import HomeHero from '../../components/Heroes/HomeHero';
import Aside from '../../components/Aside/Aside';
import img1 from '../../assets/images/img-6.jpg';
import img2 from '../../assets/images/img-7.jpg';

function HomePage() {
    return (
        <div className='home'>
            <HomeHero />
            <div className='home-body'>
                <Aside />
                <div className='main-container'>
                    <h1 className='main-title'>About Us</h1>
                    <p className='main-body-text'>Welcome to the realm of the RNR Running League, where endurance knows no bounds and perseverance is celebrated like never before. This league stands as the epitome of human determination, pushing the limits of physical and mental strength to 
                    conquer distances that would seem unfathomable to most. In this league, athletes embark on journeys that span hundreds, if not thousands, of miles across diverse terrains, from rugged mountain trails to scorching desert plains, testing their mettle against the elements and themselves.</p>
                    <div className="img-big-container">
                        <div className="img-container">
                            <img src={img1} alt="img-1" />
                        </div>
                    </div>
                    <p className='main-body-text'>Participation in this ultra long distance running league requires a unique breed of athlete, one who thrives on the challenge of pushing beyond conventional limits. These runners train meticulously for months, even years, honing their bodies and minds to endure 
                    the grueling demands of ultra-distance races. The league comprises a series of events, each more daunting than the last, where competitors face not only the physical strain of the distance but also the psychological battle of solitude and self-doubt. Yet, it is amidst these trials that the 
                    true spirit of the league emerges, fostering camaraderie among runners as they share in the triumphs and tribulations of the journey. With each step forward, these athletes redefine the boundaries of human capability, inspiring awe and admiration in all who witness their incredible feats of endurance.</p>
                    <div className="img-big-container">
                        <div className="img-container">
                            <img src={img2} alt="img-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;