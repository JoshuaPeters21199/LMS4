import {FaSortUp} from 'react-icons/fa'
import {FaSortDown} from 'react-icons/fa'
import {FaSort} from 'react-icons/fa'

function TeamHeaderCol({ label, colName, sortCol, sortDir, onHandleSort }) {

    const localHanlder = () => onHandleSort(sortCol)

    let sortIcon;

    if (sortDir === 'desc') {
        sortIcon = <FaSortDown />
    } else if (sortDir === 'asc') {
        sortIcon = <FaSortUp />
    } else {
        sortIcon = <FaSort />
    }


    return(
        <>
            {/* DO NOT ENTER sortCol & sortDir AS PARAMETERS TO onHandleSort INSIDE THE <th> ELEMENT */}
            <th className={colName} onClick={localHanlder}>
                {label}
                { sortIcon }
            </th>
        </>
    );
}

export default TeamHeaderCol;