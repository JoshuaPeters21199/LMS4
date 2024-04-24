import React from "react";
import AsideItem from "./AsideItem";

function Aside() {
    return(
        <div className='aside'>
            <h1 className="aside-header">Races</h1>
            <div className="aside-item">
                <AsideItem title='Crow Pass Crossing' date='07/20/2024' urlPath='https://crowpasscrossing.com/' />
            </div>
            <div className="aside-item">
                <AsideItem title='QMT 50' date='07/05/2024' urlPath='https://ultratrailcanada.com/en/ultra-trail-races/qmt-50/' />
            </div>
            <div className="aside-item">
                <AsideItem title='Laugavegur Marathon' date='07/13/2024' urlPath='https://www.laugavegshlaup.is/en' />
            </div>
        </div>
    )
}

export default Aside;