import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = ({ id, title, isComplete, onUpdate, onDelete }) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  const setComplete = () => {
    const updatedTask = {
      id,
      title,
      isComplete: !isComplete,
    };
    onUpdate(updatedTask);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={setComplete}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={() => onDelete(id)}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
