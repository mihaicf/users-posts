import React from 'react';
import './UserAddForm.css';

const emailRegex = RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);

const formValid = ({ formErrors, name, email }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(name, email).forEach(value => {
        value === null && (valid = false);
    });

    return valid;
};

class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false,
            formErrors: {
                name: '',
                email: ''
            }
        }
    }

    // handleNameChange(event) {
    //     console.log(event.target.value);
    //     const value = event.target.value;
    //     this.setState({
    //         name: value
    //       });
    // }

    // handleEmailChange(event) {
    //     console.log(event.target.value);
    //     const value = event.target.value;
    //     this.setState({
    //         email: value
    //       });
    // }

    handleIsGoldClientChange(event) {
        console.log(event.target.checked);
        const value = event.target.checked;
        this.setState({
            isGoldClient: value
          });
    }

    handleFormSubmit = event => {
        event.preventDefault();
    
        if (formValid(this.state)) {
          this.props.addUser(this.state.name, this.state.email, this.state.isGoldClient);
        } else {
          console.error("FORM INVALID");
        }
      };

    handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
        case "name":
        formErrors.name =
            value.length < 3 ? "Minimum 3 characters required" : "";
        break;
        case "email":
        formErrors.email = emailRegex.test(value)
            ? ""
            : "Invalid email address";
        break;
        default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };

    render() {
        const { formErrors } = this.state;

        return(
            <div className="user-add-form">
                <form onSubmit={(event) => this.handleFormSubmit(event)} noValidate>
                <h2>User Add Form</h2>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        name="name"
                        id="name" 
                        value={this.state.name} 
                        onChange={(event) => this.handleChange(event)}
                        noValidate
                    />
                    {formErrors.name.length > 0 && (
                        <span className="errorMessage">{formErrors.name}</span>
                    )}
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email" 
                        name="email"
                        id="email" 
                        value={this.state.email} 
                        onChange={(event) => this.handleChange(event)}
                        noValidate
                    />
                    {formErrors.email.length > 0 && (
                        <span className="errorMessage">{formErrors.email}</span>
                    )}
                    <label htmlFor="gold">GOLD Client:</label>
                    <input 
                        type="checkbox" 
                        id="gold" 
                        value={this.state.isGoldClient} 
                        onChange={(event) => this.handleIsGoldClientChange(event)}
                    />
                    <input type="submit" value="Add User"/>
                </form>
            </div>
        );
    }
}

export default UserAddForm;