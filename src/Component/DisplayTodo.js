export function DisplayTodo(props) {
    return (
        <div>
            <div>----List todo----</div>
            {
                props.listTodo.map((item, index) => {
                    return (
                        <div id={item.id} key={item.id} onClick={() => props.handleDeleteTodo(item.id)}>
                            {item.name}
                        </div>
                    )
                })
            }
        </div>

    )
}