import Link from 'next/link';
import react from 'react';
import { useState, useEffect } from 'react';
import { Button, Container, Divider, Form, Loader} from 'semantic-ui-react';
import { useRouter } from 'next/router';
import { createContext } from 'react/cjs/react.production.min';
//used to route to different pages built inside nextjs

const NewPost = () => {
    const [form, setForm] = useState({title: '', description: ''})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if(isSubmitting) {
            if(Object.keys(errors).length === 0){
                // createPost();
                alert('Success')
            }
            else{
                setIsSubmitting(false);
            }
        }
    }, [errors])

    const handleSubmit = (e) => {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);

    };
    const handleChange = (e) => { 
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const validate = () => {
        let err = {};

        if(!form.title) {
            err.title = 'Title is required';
        }
        if(!form.description){
            err.description = 'Description is required';
        }

        return err;
    }

    return (
        <div className="form-container">
            <h1>Create Post</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline='centered' /> : 
                    <Form onSubmit={handleSubmit}>
                        <Form.Input 
                            fluid
                            label='Title'
                            placeholder='Title'
                            name='title'
                            onChange={handleChange}
                        />
                        <Form.TextArea 
                            fluid
                            label='Description'
                            placeholder='Description'
                            name='description'
                            onChange={handleChange}
                        />
                        <Button type='submit'>Create</Button>

                    </Form>
                }
            </div>

        </div>
    )
}

export default NewPost;