import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import TeamsPage from '../TeamsPage/TeamsPage';
import Layout from '../../components/Layout/Layout';
import NoMatch from '../../components/Router/NoMatch';
import { TeamsContext } from "../../services/TeamsContext";
import { useContext } from 'react';
import EditTeam from '../../components/EditTeam/EditTeam';
import './App.css';

function App() {
  let teamsContext = useContext(TeamsContext);
  // console.log(teamsContext.api.model.sortCol)
  // console.log(teamsContext.viewModel);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout logo={"RNR"} />}>
          <Route index element={<HomePage />} />
          <Route path='teams' element={<TeamsPage viewModel={teamsContext.viewModel} api={teamsContext.api} />} />
          <Route path='add-team' element={<EditTeam isCreate={true} api={teamsContext.api} />} />
          <Route path='edit-team/:id' element={<EditTeam isCreate={false} api={teamsContext.api} />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
