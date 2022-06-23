import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

const NewTaskForm = ({ addTaskCallback }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const updateFormData = (e) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const addTask = (e) => {
    e.preventDefault();
    addTaskCallback(formData);
    setFormData({
      title: '',
      description: '',
    });
  };

  return (
    <form onSubmit={addTask}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={updateFormData}
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={updateFormData}
      />
      <button id="button" type="submit">
        Add Task
      </button>
    </form>
  );
};

NewTaskForm.propTypes = {
  addTaskCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;
