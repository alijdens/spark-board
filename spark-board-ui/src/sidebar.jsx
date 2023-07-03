import { useCollapse } from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@mui/material/Tooltip';
import SparkBoardLogo from '../logo.png';


import "./sidebar.css";


function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    return (
        <div className="sidebar__collapsible" hidden={props.hidden} >
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
                    Condition: { transformationNode.data.metadata.condition }
                    <p/>
                    Join Type: { transformationNode.data.metadata.join_type }
                </div>)
        case "Filter":
            return (<div>
                    Condition: { transformationNode.data.metadata.condition }
                </div>)

        case "Project":
            return (<div className="multiline" >
                    Schema String:<p/>{ transformationNode.data.metadata.schema_string }
                </div>)
        case "DataSource":
            return (<div className="multiline">
                    Schema String:<p/>{ transformationNode.data.metadata.schema_string }
                </div>)
        case "Window":
            return (<div className="multiline">
                    Schema String:<p/>{ transformationNode.data.metadata.schema_string }
                </div>)            

        case "Transform":
            return (<div>
                    Generator: { transformationNode.data.metadata.generator }
                </div>)

        case "Group":
            return (<div>
                    Aggregate Expressions: <ul>{
                        transformationNode.data.metadata.aggregate_expressions.map((exp) => (
                            <li>{ exp }</li>
                        ))
                    }</ul>
                    Grouping Expressions: <ul>{
                        transformationNode.data.metadata.grouping_expressions.map((exp) => (
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

function SideBar({ width, node, nodesById, onSelectedColumnChange, selectedColumn }) {
    const logoStyle = { width: "100%" };
    if (!node) {
        // if no node is selected, do not render the sidebar
        return <div className="sidebar__preferences" style={{width: width, minWidth: width}}>
            <img src={ SparkBoardLogo } style={logoStyle} />
            <h3 style={{textAlign: "center"}}>Just select one node!</h3>
        </div>
    }
    return (
        <div className="sidebar__preferences" style={{width: width, minWidth: width}}>
            <img src={ SparkBoardLogo } style={logoStyle} />
            <h3 style={{textAlign: "center"}}>{node.data.type}</h3>
            <Section title="Output Columns" defaultExpanded="true">
                {
                    node.data.columns.map((columnNodeId) => {
                        let col = nodesById.get(columnNodeId);
                        return (
                            <div key={col.id}>
                                <Tooltip title=
                                {
                                    <div className="multiline columntooltip">
                                            {col.data.tree_string}
                                    </div>
                                } placement={"right"} >
                                    <button style={{textAlign: "left"}} onClick={(event) => onSelectedColumnChange(col)}>
                                        {col.data.name} ({col.data.id}) - ({col.data.type})
                                    </button>
                                </Tooltip>
                            </div>
                        )
                    }
                )}
                <br/><br/>
            </Section>
            <Section title="Transformation data">
                { transformationData(node) }
            </Section>
            <Section title="Column Tree" hidden={node == null || selectedColumn == null} defaultExpanded>
                <div className="multiline" style={{fontFamily: "monospace"}}>
                    {selectedColumn != null ? selectedColumn.data.tree_string : "This text shouldn't be shown!"}
                </div>
            </Section>
       </div>
    )
}

export default SideBar;
