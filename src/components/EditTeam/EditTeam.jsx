import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

function EditTeam({ isCreate, api}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const teamId = !isCreate?id:"";

    const title = !isCreate ? "Edit Team" : "Add Team";

    const [formData, setFormData] = useState({
        id: 0,
        name: '',
        coachName: '',
        motto: '',
        notes: ''
    });
    const [coachOptions, setCoachOptions] = useState([]);
    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            if (isCreate) {
                const newId = getRandomInt(4,9999);
                const newTeam = { ...formData, id: newId };
                api.create(newTeam);
                // api.create(formData)
            } else {
                api.update(formData)
            }

            setValidated(true);
            navigate('/teams');
        }
    }

    useEffect(() => {
        api.getLookup('coaches').then((coachLookup) => {
            setCoachOptions(coachLookup.map((coach) => coach));
            if (isCreate) {
                setFormData({
                    id: 0,
                    name: '',
                    coachName: '',
                    motto: '',
                    notes: ''
                });
            } else {
                api.read(parseInt(teamId)).then((team) => setFormData(team));
            }
        });
    }, []);

    return formData && (
        <Container className='form-container'>
            <h1>{title}</h1>
             <Form
                 className='mb-2'
                 noValidate
                 validated={validated}
                 onSubmit={handleSubmit}
             >
                 <Form.Group className="mb-3 form-entry" controlId="formInput">
                     <Form.Label>Team name</Form.Label>
                     <Form.Control required type="text" placeholder='New team name' name='name' value={formData.name} onChange={handleChange} isInvalid={!formData.name} />
                     <Form.Control.Feedback type="invalid">
                        Please provide a team name.
                     </Form.Control.Feedback>
                 </Form.Group>

                 <Form.Group className="mb-3 form-entry" controlId="formInput02">
                     <Form.Label>Team coach</Form.Label>
                     <Form.Select required type='text' name='coachName' value={formData.coachName} onChange={handleChange} isInvalid={!formData.coachName}>
                        <option value=''>Select coach...</option>
                         {coachOptions.map((coach) => (
                             <option key={coach.value}>{coach.label}</option>
                         ))}
                     </Form.Select>
                     <Form.Control.Feedback type="invalid">
                        Please select a coach.
                     </Form.Control.Feedback>
                 </Form.Group>

                 <Form.Group className="mb-3 form-entry" controlId="formInput03">
                     <Form.Label>Team motto</Form.Label>
                     <Form.Control type="text" placeholder='Motto' name='motto' value={formData.motto} onChange={handleChange} />
                 </Form.Group>

                 <Form.Group className="mb-3 form-entry" controlId="formInput04">
                     <Form.Label>Team notes</Form.Label>
                     <Form.Control type="text" placeholder='Notes' name='notes' value={formData.notes} onChange={handleChange} />
                 </Form.Group>

                 <Button variant="primary" type="submit">
                    Submit
                 </Button>
             </Form>
        </Container>
    )
}

export default EditTeam;