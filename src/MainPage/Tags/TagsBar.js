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
            <Tag text="Mixes"></Tag>
            <Tag text="Podcasts"></Tag>
            <Tag text="Comedy clubs"></Tag>
            <Tag text="Recently uploaded"></Tag>
            <Tag text="Watched"></Tag>
            <Tag text="New to you"></Tag>
        </div>
    );
}

export default TagsBar;