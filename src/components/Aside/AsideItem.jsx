import React from 'react';

function AsideItem({ title, date, urlPath, imgPath } ) {
    return (
        <a className='aside-link' href={urlPath}>
            <div className='aside-item-container'>
                <h3 className='aside-item-title'>{title}</h3>
                <h4 className='aside-item-date'>{date}</h4>
            </div>
        </a>
    );
}

export default AsideItem;