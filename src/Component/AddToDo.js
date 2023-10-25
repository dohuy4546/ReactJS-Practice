export function AddToDo(props) {
    const { todo, setTodo, handleSubmit } = props
    return (
        <div>
            <label>Todo: </label>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="button" onClick={handleSubmit}>Submit</button>
            <br /> <br />
        </div>
    )
}