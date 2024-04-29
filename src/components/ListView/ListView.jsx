import React, { useState, useEffect } from 'react';
import TeamsTable from '../DataTable/DataTable';
import AlertList from '../AlertList/AlertList';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function ListView({ viewModel, model }) {
    const [data, updateData] = useState(null);

    const [sortCol, setSortCol] = useState(model.options.sortCol);
    // const [sortCol, setSortCol] = useState(model.sortCol);
    const [sortDir, setSortDir] = useState(model.options.sortDir);

    const [isReset, setIsReset] = useState(false);
    const [alertList, setAlertList] = useState([]);

    const [filterText, setFilterText] = useState('');
    const [filterStr, setFilterStr] = useState(model.options.filterStr);

    const [teamDelete, setTeamDelete] = useState(false);

    const handleDelete = (removeId) => {
        model.delete(removeId);
        setTeamDelete(!teamDelete);
    };

    const handleEdit = () => {};

    const handleSort = (clickedSortCol) => {

        if (model.options.sortCol === clickedSortCol) {
            if (sortDir === 'asc') {
                setSortDir('desc');
            } else if (sortDir === 'desc') {
                setSortDir('asc');
            }
        } else {
            setSortCol(clickedSortCol)
            setSortDir('asc')
        }

        model.options.sortCol = sortCol;
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
        model.options.sortCol = sortCol;
        model.options.sortDir = sortDir;
        model.options.filterStr = filterStr;

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
                    sortCol={model.options.sortCol}
                    sortDir={model.options.sortDir}
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