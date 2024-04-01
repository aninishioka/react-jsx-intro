function Tweet({username, name, date, msg}) {
    return (
        <div className="tweet">
            <p>{username}</p>
            <p>{name}</p>
            <p>{date}</p>
            <p>{msg}</p>
        </div>
    )
}