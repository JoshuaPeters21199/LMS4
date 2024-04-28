import React, { useState, useEffect } from 'react';
import TeamsTable from '../DataTable/DataTable';
import AlertList from '../AlertList/AlertList';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function ListView({ viewModel, model }) {
    const [data, updateData] = useState(null);

    const [sortCol, setSortCol] = useState(viewModel.list.options.sortCol);
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

    const handleSort = (clickedSortCol) => {

        if (model.sortCol === clickedSortCol) {
            if (sortDir === 'asc') {
                setSortDir('dsc');
            } else if (sortDir === 'dsc') {
                setSortDir('asc');
            }
        } else {
            setSortCol(clickedSortCol)
            setSortDir('asc')
        }

        model.sortCol = sortCol;
        model.sort(sortCol, sortDir)
    };

    const handleReset = () => {
        model.reset();
    };

    const onSearchHandler = (text) => {
        if (text.length > 2) {
            setFilterStr(text);
        } else {
            setFilterStr('');
        }
        setFilterText(text);
    }

    useEffect(() => {
        model.sortCol = sortCol;
        model.sortDir = sortDir;
        model.filterStr = filterStr;

        model.list().then((teams) => updateData(teams));
    }, [isReset, sortCol, sortDir, filterStr, alertList, teamDelete, model]);

    const clearSearch = () => {
        setFilterText('');
        setFilterStr('')
    }

    return(
        data && (
            <div className='col-12'>
                <AlertList alertList={alertList} />

                <SearchBar
                    onSearchHandler={onSearchHandler}
                    filterText={filterText}
                    clearSearch={clearSearch}
                />

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
                >Clear</Button>{' '}

                <Link to='/add-team'>
                    <Button
                        variant='primary'
                    >New</Button>
                </Link>
            </div>
        )
    );
}

export default ListView;