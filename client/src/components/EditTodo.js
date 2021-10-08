import React, { useState } from 'react';

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  // Edit desc function
  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      );

      window.location = '/';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-warning'
        data-toggle='modal'
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div
        onClick={() => setDescription(todo.description)}
        className='modal'
        id={`id${todo.todo_id}`}
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Edit todo</h4>
              <button
                type='button'
                onClick={() => setDescription(todo.description)}
                className='close'
                data-dismiss='modal'
              >
                &times;
              </button>
            </div>

            <div className='modal-body'>
              <input
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                className='form-control'
                value={description}
              />
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                data-dismiss='modal'
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type='button'
                className='btn btn-danger'
                data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTodo;
