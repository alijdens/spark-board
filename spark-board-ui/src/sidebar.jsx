import { useCollapse } from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import "./sidebar.css";


function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    return (
        <div className="sidebar__collapsible">
            <div className="header" {...getToggleProps()}>
                <div className="title">{props.title}</div>
                <FontAwesomeIcon icon={isExpanded ? faCircleChevronUp : faCircleChevronDown} />
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

function transformationData(transformationNode) {
    switch (transformationNode.data.type) {
        case "Join":
            return (<div>
                    Condition: { transformationNode.data.condition }
                    <p/>
                    Join Type: { transformationNode.data.join_type }
                </div>)
        case "Filter":
            return (<div>
                    Condition: { transformationNode.data.condition }
                </div>)

        case "Project":
            return (<div class="multiline" >
                    Schema String:<p/>{ transformationNode.data.schema_string }
                </div>)
        case "Table":
            return (<div class="multiline">
                    Schema String:<p/>{ transformationNode.data.schema_string }
                </div>)
        case "Window":
            return (<div class="multiline">
                    Schema String:<p/>{ transformationNode.data.schema_string }
                </div>)            

        case "Transform":
            return (<div>
                    Generator: { transformationNode.data.generator }
                </div>)

        case "Group":
            return (<div>
                    Aggregate Expressions: <ul>{
                        transformationNode.data.aggregate_expressions.map((exp) => (
                            <li>{ exp }</li>
                        ))
                    }</ul>
                    Grouping Expressions: <ul>{
                        transformationNode.data.grouping_expressions.map((exp) => (
                            <li>{ exp }</li>
                        ))
                    }</ul>
                </div>)

        case "Sort":
            return (<div>
                Order Criteria: <ul>{
                        transformationNode.data.order.map((criteria) => (
                            <li>{ criteria }</li>
                        ))
                    }</ul>
                </div>)

    }
}

function SideBar({ width, node, onSelectedColumnChange }) {
    if (!node) {
        // if no node is selected, do not render the sidebar
        return <div></div>
    }
    return (
        <div className="sidebar__preferences" style={{width: width, minWidth: width}}>
            <h3 style={{textAlign: "center"}}>{node.data.type}</h3>
            <Section title="Output Columns" defaultExpanded="true">
                {
                    node.data.columns.map((col) => {
                        return (
                            <div key={col.id}>
                                <button onClick={(event) => onSelectedColumnChange(col)}>
                                    {col.data.name} ({col.data.id}) - ({col.data.type})
                                </button>
                            </div>
                        )
                    }
                )}
                <br/><br/>
            </Section>
            <Section title="Transformation data">
                { transformationData(node) }
            </Section>
       </div>
    )
}

export default SideBar;
