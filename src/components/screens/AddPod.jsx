import React, { Component } from 'react';
import { api } from '../../services/ApiConfig';
import PodForm from '../shared/PodForm';
import '../../styles/AddPod.css'


class AddPod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            type: '',
            intensity: '',
            caffeine: '',
            imageurl:'',
            errorMsg: ''
        }

        }
    handleAddPod = (e) => {
        e.preventDefault()
        const { name, type, intensity, caffeine, imgurl} = this.state
        const data = {
            name, 
            type,
            intensity,
            caffeine,
            imgurl
        }
        api
        .post('/NespressoPodList', data)
        .then(response =>
            response.status === 201 ? this.props.history.push('./NespressoPodList') : null 
            )
            .catch(() => this.setState({ errorMsg: 'Error'}))
        }

    handleChange = e => { 
        this.setState({ [e.target.name]: e.target.value})
        
    }
    

render() {
    const { name, type, intensity, caffeine, imgurl} = this.state
    return (
        
            <div className='addpodform'>
                <PodForm 
                formData={{ name, type, intensity, caffeine, imgurl }}
                onChange={this.handleChange}
                onSubmit={this.handleAddPod}
                />
            </div>
    )   
}
}
export default AddPod