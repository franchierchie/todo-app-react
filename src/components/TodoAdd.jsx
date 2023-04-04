import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { task, onInputChange, onResetForm } = useForm({
        task: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        if ( task.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            task,
            completed: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <header>
            <form onSubmit={ onFormSubmit }>
                <label htmlFor="add-todo" className="add-task">
                    <input
                        type="text"
                        id="add-todo"
                        placeholder="Add item"
                        name="task"
                        value={ task }
                        onChange={ onInputChange }
                    />
                    <button type="submit" className="btn">+</button>
                </label>
            </form>
        </header>
    )
}
