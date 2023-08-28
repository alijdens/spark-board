/**
 * Very simple component that renders a link to the source code of the Spark
 * data frame (if defined).
 */
export default function SourceCodeLink({ link }) {
    if (!link) {
        return <></>;
    }

    return (
        <a href={link} target="_blank">Dataframe source code</a>
    )
}
