function LeftMenuIcon({text, icon}) {
    return (
        <li className="list-group-item d-flex  align-items-center">
            <i className={`bi bi-${icon} fs-3`}></i>
            <span className="w-100 m-1 ms-3">{text}</span>
        </li>
    );
}
export default LeftMenuIcon;