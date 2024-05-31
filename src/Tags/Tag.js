function Tag({text, id=""}) {
    return (
        <>
            <span id={id} className="tag">{text}</span>
        </>
    );
}

export default Tag;