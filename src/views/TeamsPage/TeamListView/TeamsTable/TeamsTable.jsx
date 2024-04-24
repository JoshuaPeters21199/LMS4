import React from 'react';
import TeamHeaderRow from './TeamHeaderRow';
import Table from 'react-bootstrap/Table';
import TeamRow from './TeamRow';


function TeamsTable({ teams, sortCol, sortDir, viewModel, onHandleDelete, onHandleSort, onHandleEdit }) {
    // console.log(teams)
    let columns = viewModel.list.columns;
    // console.log(columns);
    return(
        <>
            <div className="table-responsive">
                <Table striped hover variant='dark'>
                    <thead>
                        <TeamHeaderRow 
                            columnArr={columns}
                            // label={viewModel.list}
                            // colName={viewModel.list}
                            sortCol={sortCol}
                            sortDir={sortDir}
                            onHandleSort={onHandleSort}
                        />
                    </thead>
                    <tbody>
                        {teams.map((i) => (
                            <TeamRow team={{name: i.name, coachName: i.coachName, coachPhone: i.coachPhone, coachEmail: i.coachEmail, motto: i.motto, logo: i.logo_path}} id={i.id} onHandleDelete={onHandleDelete} key={i.id} />
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default TeamsTable;