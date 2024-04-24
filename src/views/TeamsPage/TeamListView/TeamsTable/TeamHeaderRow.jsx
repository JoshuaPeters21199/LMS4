import React from 'react';
import TeamHeaderCol from './TeamHeaderCol';

// function TeamHeaderRow({ label, colName, sortCol, sortDir, onHandleSort }) {
function TeamHeaderRow({ columnArr, sortCol, sortDir, onHandleSort }) {
    return(
        <>
            <tr>
                {columnArr.map((i) => (
                    <TeamHeaderCol label={i.label} colName={i.name} sortCol={sortCol} sortDir={sortDir} onHandleSort={onHandleSort} />
                ))}

                <th>Actions</th>
            </tr>
        </>
    );
}

export default TeamHeaderRow;