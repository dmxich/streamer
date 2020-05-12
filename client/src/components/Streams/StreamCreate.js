import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
//import streams from '../../apis/streams';
class StreamCreate extends React.Component{
    

    renderError({touched, error}){
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
        
    };


    /* conventional way
    renderInput(formProps){
        return (
            <div>
                <input onChange={formProps.input.onChange} value = {formProps.input.value}/>
            </div> 
        );
       
    };
    */
    //new syntax
    renderInput = (formProps) =>{
        //if we want to highlight the whole input form
        //let errorClass = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`

        return (
            <div className="field">
                <label>{formProps.label}</label><br />
                <input {...formProps.input} autoComplete="off"/>
                {this.renderError(formProps.meta)}
            </div> 
        );
       
    };

    onSubmit = (formValues) => {
        console.log(formValues);
        //event.preventDefault();
        this.props.createStream(formValues);
    };

    render(){
        return ( 
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui error">
                    
                    <Field name="title" component={this.renderInput} label="Enter the title"/>
                    <br />
                    <Field name="description" component ={this.renderInput} label="Enter the description" />
                    <br />
                    <button className="ui button primary" >Submit</button>
                </form>
            </div>
        );
    }
    
    
};


let validate = (formValues) =>{
    //en empty object to hold errors
    const  errors = {};
    if(!formValues.title){

        errors.title = 'You have to enter a valid title !!!';
     
    }
    if(! formValues.description){
        errors.description = 'You forgot to provide a description!!!';
    }

    return errors;
}




let formWpapped =  reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, {createStream})(formWpapped);