import Tag from "./Tag";

function TagsBar() {
    return (
        <div id="tag" className="row d-flex flex-wrap">
            <Tag text="All"></Tag>
            <Tag text="News"></Tag>
            <Tag text="Politics"></Tag>
            <Tag text="Sports"></Tag>
            <Tag text="Live"></Tag>
            <Tag text="Music"></Tag>
            <Tag text="Games"></Tag>
        </div>
    );
}

export default TagsBar;