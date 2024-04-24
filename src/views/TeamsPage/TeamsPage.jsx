import React from 'react';
import TeamsPageHero from '../../components/Heroes/TeamsPageHero';
import TeamListView from './TeamListView/TeamListView';
// import AppViewModel from '../../services/appViewModel.meta';

function TeamsPage({ viewModel, api }) {
    // let localStorage = AppViewModel.getApi('teams')
    // console.log(api)

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
