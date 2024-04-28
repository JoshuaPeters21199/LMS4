import React from 'react';
import TeamsPageHero from '../../components/Heroes/TeamsPageHero';
import TeamListView from './TeamListView/TeamListView';

function TeamsPage({ viewModel, api }) {
    return (
        <>
            <TeamsPageHero />
            <div className="team-body">
                <TeamListView viewModel={viewModel} model={api} />
            </div>
        </>
    )
}

export default TeamsPage;
