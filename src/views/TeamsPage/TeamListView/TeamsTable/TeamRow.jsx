import React from 'react';
import DeleteButton from '../../../../components/Delete/DeleteButton';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TeamRow({ team, id, onHandleDelete}) {
    let deletePrompt = `Are you sure you want to delete team: ${team.name}`;
    const popover = (
      <Popover id="popover-basic">
        <Popover.Header as="h3">{team.name}</Popover.Header>
        <Popover.Body>
          <strong>Team Name:</strong> {team.name}<br></br>
          <strong>Coach Name:</strong> {team.coachName}<br></br>
          <strong>Coach Phone:</strong> {team.coachPhone}<br></br>
          <strong>Coach Email:</strong> {team.coachEmail}<br></br>
          <strong>Team Motto:</strong> {team.motto}<br></br>
        </Popover.Body>
      </Popover>
    );
  
    return (
      <OverlayTrigger
        trigger={["hover","focus"]}
        // trigger='click'
        placement="auto"
        overlay={popover}
        delay={{ show: 300, hide: 200 }}
      >
        <tr key={id}>
          <td>{team.name}</td>
          <td>{team.coachName}</td>
          <td>{team.coachPhone}</td>
          <td>{team.coachEmail}</td>
          <td>
            <DeleteButton bodyText={deletePrompt} title='Delete Confirmation' noText='Cancel' confirmText='Delete' iconClass='delete-btn' itemKey={id} callback={onHandleDelete} />{' '}
            <Link to={`/edit-team/${id}`}>
              <Button className='m-2' variant='primary'>
                <FaEdit className='edit-icon' />
              </Button>
            </Link>
          </td>
        </tr>
      </OverlayTrigger>
    );
}
  
export default TeamRow;
