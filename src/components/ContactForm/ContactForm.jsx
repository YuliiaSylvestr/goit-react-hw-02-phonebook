import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleContact = (name, value) => {
    this.setState({ [name]: value });
  };

  handleReset = () => this.setState({ name: '', number: '' });

  handleSubmit = e => {
    e.preventDefault();
    const { onAddContact } = this.props;
    const { name, number } = this.state;
    onAddContact({ name: name.trim(), number: number.trim() });
    this.handleReset();
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            required
            value={name}
            onChange={e => this.handleContact(e.target.name, e.target.value)}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            required
            value={number}
            onChange={e => this.handleContact(e.target.name, e.target.value)}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
