import { createContext } from 'react';

import AppViewModel from "./appViewModel.meta";

export function TeamsContext(entity) {
    let api = AppViewModel.getApi(entity);
    let viewModel = AppViewModel.entities[entity];
    // return createContext({api:api, viewModel:viewModel});
    return createContext({viewModel:viewModel, api:api});

}

// let api = AppViewModel.getApi("teams");
// let viewModel=AppViewModel.entities["teams"];

// export const TeamsContext = createContext({api:api,viewModel:viewModel});