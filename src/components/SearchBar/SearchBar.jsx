import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchBar({ onSearchHandler, filterText, clearSearch }) {
    return(
        <Form className='search-container'>
            {/* <Form.Group className='mb-2' controlId='searchInput'>
                <Form.Control type='text' placeholder='Search...' value={filterText} onChange={(e) => onSearchHandler(e.target.value)} />
            </Form.Group>
            <Button variant='primary' onClick={() => clearSearch()}>Clear Search</Button> */}
        </Form>
    )
}

export default SearchBar;