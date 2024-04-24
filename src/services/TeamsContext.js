import { createContext } from 'react';

import AppViewModel from "./appViewModel.meta"

let api = AppViewModel.getApi("teams");
let viewModel=AppViewModel.entities["teams"];

export const TeamsContext = createContext({api:api,viewModel:viewModel});