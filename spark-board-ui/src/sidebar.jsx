import { useCallback } from 'react';
import { useCollapse } from 'react-collapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import Tooltip from '@mui/material/Tooltip';
import SparkBoardLogo from '../logo.png';


import "./sidebar.css";


function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || true,
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

function TransformationDataSection({ node }) {
    let metadata = node.data.metadata;

    switch (node.data.type) {
        case "Join":
            return <>
                <Section title="Join Condition">
                    <Mono>{ metadata.condition.sql_str }</Mono>
                </Section>
                <Section title="Join Type">
                    { metadata.join_type }
                </Section>
            </>
        case "Filter":
            return <Section title="Condition">
                <Mono>{ metadata.condition }</Mono>
            </Section>

        case "DataSource":
            return <ObjectSections object={ metadata }></ObjectSections>

        case "Project":
        case "Window":
            return <Section title="Schema String">
                <Mono>{ metadata.schema_string }</Mono>
            </Section>

        case "Transform":
            return <Section title="Generator">
                <Mono>{ metadata.generator }</Mono>
            </Section>

        case "Group":
            return <>
                <Section title="Aggregate Expressions">
                    <ul>{
                        metadata.aggregate_expressions.map((exp) => (
                            <li><Mono>{ exp }</Mono></li>
                        ))
                    }</ul>
                </Section>
                <Section title="Expressions">
                    <ul>{
                        metadata.grouping_expressions.map((exp) => (
                            <li><Mono>{ exp }</Mono></li>
                        ))
                    }</ul>
                </Section>
            </>

        case "Sort":
            return <Section title="Order Criteria">
                {
                    metadata.order.SQLs.map((criteria) => (
                        <p><Mono>{ criteria }</Mono></p>
                    ))
                }
            </Section>

        case "Limit":
            return <Section title="Limit"><Mono>{ metadata.limit_expr }</Mono></Section>

        case "Alias":
            return <Section title="Name"><Mono>{ metadata.alias }</Mono></Section>

        default:
            return <ObjectSections object={ metadata }></ObjectSections>
    }
}

function SideBar({ width, node, nodesById, onSelectedColumnChange, selectedColumn }) {
    const logoStyle = { width: "100%" };
    if (!node) {
        // if no node is selected, do not render the sidebar
        return <div className="sidebar__preferences" style={{width: width, minWidth: width}}>
            <a href="https://pypi.org/project/spark-board/" target="_blank"><img src={ SparkBoardLogo } style={logoStyle} /></a>
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
            <TransformationDataSection node={node}></TransformationDataSection>
            <Section title="Column Tree" hidden={node == null || selectedColumn == null} defaultExpanded>
                <div className="multiline" style={{fontFamily: "monospace"}}>
                    {selectedColumn != null ? selectedColumn.data.tree_string : "This text shouldn't be shown!"}
                </div>
            </Section>
       </div>
    )
}

/**
 * Monospaced text with horizontal scrollbar.
 */
function Mono({ children }) {
    return <div className="monospaced">{ children }</div>
}

/**
 * Shows each key/value pair in the object as a <Section> with the key as
 * title and the value as <Mono>
 */
function ObjectSections({ object }) {
    const asTitle = useCallback((str) => {
        let capitalized = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return capitalized.replace("_", " ");
    })
    return <>{
        Object.keys(object).map((key) => {
            return <Section title={asTitle(key)}><Mono>{object[key]}</Mono></Section>
        })
    }</>
}


export default SideBar;
