import React from 'react';
import TeamHeaderCol from './TeamHeaderCol';

function TeamHeaderRow({ label, colName, sortCol, sortDir, onHandleSort }) {
    return(
        <>
            <tr>
                <TeamHeaderCol label={label.columns[0].label} colName={colName.columns[0].name} sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
                <TeamHeaderCol label={label.columns[1].label} colName={colName.columns[1].name} sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
                <TeamHeaderCol label={label.columns[2].label} colName={colName.columns[2].name} sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
                <TeamHeaderCol label={label.columns[3].label} colName={colName.columns[3].name} sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
                <th>Actions</th>
            </tr>
        </>
    );
}

export default TeamHeaderRow;