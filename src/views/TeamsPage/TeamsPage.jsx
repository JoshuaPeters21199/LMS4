import React from 'react';
import TeamsPageHero from '../../components/Heroes/TeamsPageHero';
import ListView from '../../components/ListView/ListView';

function TeamsPage({ viewModel, api }) {
    return (
        <>
            <TeamsPageHero />
            <div className="team-body">
                <ListView viewModel={viewModel} model={api} />
            </div>
        </>
    )
}

export default TeamsPage;
