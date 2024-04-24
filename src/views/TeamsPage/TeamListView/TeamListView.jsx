import React, { useState, useEffect } from 'react';
import TeamsTable from './TeamsTable/TeamsTable';
import AlertList from './AlertList';
import Button from 'react-bootstrap/Button';

function TeamListView({ viewModel, model }) {
    const [data, updateData] = useState(null);

    const [sortCol, setSortCol] = useState(model.sortCol);
    const [sortDir, setSortDir] = useState(model.sortDir);

    const [isReset, setIsReset] = useState(false);
    const [alertList, setAlertList] = useState([]);

    const [filterText, setFilterText] = useState('');
    const [filterStr, setFilterStr] = useState(model.filterStr);

    const [teamDelete, setTeamDelete] = useState(false);

    const handleDelete = (removeId) => {
        model.delete(removeId);
        setTeamDelete(!teamDelete);
    };
    const handleEdit = () => {};
    const handleSort = (sortCol) => {
        if (model.sortCol === sortCol) {
            setSortDir(!sortDir)
        } else {
            setSortDir('asc')
        }

        setSortCol(sortCol);
        model.sortCol = sortCol;
    };
    const handleReset = () => {
        model.reset();
    };

    useEffect(() => {
        model.sortCol = sortCol;
        model.sortDir = sortDir;
        model.filterStr = filterStr;

        model.list().then((teams) => updateData(teams));
    }, [isReset, sortCol, sortDir, filterStr, alertList, teamDelete, model]);
    
    return(
        data && (
            <div className='col-12'>
                <AlertList alertList={alertList} />

                <TeamsTable
                    teams={data}
                    sortCol={model.sortCol}
                    sortDir={model.sortDir}
                    viewModel={viewModel}
                    onHandleDelete={handleDelete}
                    onHandleSort={handleSort}
                    onHandleEdit={handleEdit}
                />

                <Button
                    variant='primary'
                    onClick={() => {
                        handleReset();
                        setIsReset(!isReset);
                    }}
                >Clear</Button>
            </div>
        )
    );
}

export default TeamListView;