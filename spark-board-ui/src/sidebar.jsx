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


function SideBar({ width, node }) {
    return (
        <div className="sidebar__preferences" style={{width: width, minWidth: width}}>
            <h3 style={{textAlign: "center"}}>{node.data.type}</h3>
            <Section title="Output Columns" defaultExpanded="true">
                {node.data.columns.map((col) => {
                    return <div key={col.id}>{col.name} ({col.id}) - ({col.type})</div>
                })}
                <br/><br/>
            </Section>
            <Section title="<Transformation data>">
                <p>TODO</p>
                <br/><br/><br/><br/>
            </Section>
       </div>
    )
}


export default SideBar;
