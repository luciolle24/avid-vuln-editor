import { CardItem, Li, RoundedImages } from "../cards/cards.jsx";

function Editor(props) {
  const { data, id } = props;
  if (data === undefined) {
    return <div>loading</div>;
  }
  let actualData = data[Number(id) - 1];
  return (
    <CardItem>
      <RoundedImages
        src="https://avidml.org/uploads/avid-logo.png"
        alt="AVID Logo"
      ></RoundedImages>
      <h1>TITLE : </h1>
      <h2>{actualData.description.value}</h2>
      <div>
        Data Type :{actualData.data_type}
        <br />
        Data Version :{actualData.data_version} <br />
        Metadata :{actualData.metadata} <br />
      </div>

      <h2>DEV:</h2>
      <div>
        {actualData.affects.developer &&
          actualData.affects.developer.map((devname) => (
            <div>
              <Li key={devname}>{devname}</Li>
            </div>
          ))}
      </div>

      <h2>DEPLOYER:</h2>
      <div>
        {actualData.affects.deployer &&
          actualData.affects.deployer.map((devname) => (
            <div>
              <Li key={devname}>{devname}</Li>
            </div>
          ))}
      </div>
      {actualData.artifacts &&
        actualData.artifacts.map((artifacts) => (
          <>
            <h2>Type :</h2>
            <br />
            <Li key={artifacts.type}>{artifacts.type}</Li>
            <br />
            <h2>Name :</h2>
            <br />
            <Li key={artifacts.name}>{artifacts.name}</Li>
            <br />
          </>
        ))}

      <h1>Problem Type</h1>
      <h2>Class Of :</h2>
      <div>{actualData.problemtype.classof}</div>
      <h2>Type :</h2>
      <div>{actualData.problemtype.type}</div>
      <h2>Description in {actualData.problemtype.description.lang} :</h2>
      <div>{actualData.problemtype.description.value}</div>
      <div>
        <h1>Metrics</h1>
        <h2>Name :</h2>
        <h2>Detection Method :</h2>
        {actualData.metrics[0].detection_method.type}
        {actualData.metrics[0].detection_method.name}
        <h2>Results :</h2>
      </div>
      <div>
        {actualData.metrics[0].results.harm_category.map((harm) => (
          <>
            <Li key={harm}>{harm}</Li> <br />
          </>
        ))}
      </div>
      <div>
        <h2>Stat :</h2>
        {actualData.metrics[0].results.stat.map((stat) => (
          <>
            <Li key={stat}>{stat}</Li>
            <br />
          </>
        ))}
        <h2>Pvalue :</h2>
        {actualData.metrics[0].results.pvalue.map((pvalue) => (
          <>
            <Li key={pvalue}>{pvalue}</Li>
            <br />
          </>
        ))}
        <h2>References :</h2>
        {actualData.references.map((reference) => (
          <>
            <Li key={reference.label}>
              {reference.label} : {reference.url}
              <br />
            </Li>
          </>
        ))}
        <h2>Impact</h2>
        <br />
        <h2>Risk Domain :</h2>
        <br />
        {actualData.impact.avid.risk_domain.map((risk) => (
          <>
            <Li key={risk}>{risk}</Li>
            <br />
          </>
        ))}
        <h2>SEP View :</h2>
        <br />
        {actualData.impact.avid.sep_view.map((sep) => (
          <>
            <Li key={sep}>{sep}</Li> <br />
          </>
        ))}
        <h2>Lifecycle View :</h2>
        <br />
        {actualData.impact.avid.lifecycle_view.map((lifecycle) => (
          <>
            <Li key={lifecycle}>{lifecycle}</Li>
            <br />
          </>
        ))}
        <h2>Taxonomy Version :</h2>
        <br />
        {actualData.impact.avid.taxonomy_version}
        <br />
        <h2>Credit :</h2>
        <br />
        {actualData.credit}
        <br />
        <h2>Reported Date :</h2>
        <br />
        {actualData.reported_date}
        <br />
      </div>
    </CardItem>
  );
}
export default Editor;
