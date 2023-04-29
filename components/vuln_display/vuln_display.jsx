import { CardItem, Label, RoundedImages } from "../cards/cards.jsx";

function VulnListDipsplay(props) {
  const { data, id } = props;
  if (data === undefined) {
    return <CardItem>loading</CardItem>;
  }
  let actualData = data[Number(id) - 1];
  return (
    <>
      <CardItem>
        <RoundedImages
          src="https://avidml.org/uploads/avid-logo.png"
          alt="AVID Logo"
        ></RoundedImages>
        <CardItem>
          <Label for="Title">Title :</Label>
          <Label name="Title" id="Title">
            {actualData.description.value + "\n"}
          </Label>

          <Label for="Data Type">Data Type :</Label>
          <Label type="text" name="Data Type" id="Data Type">
            {actualData.data_type}
          </Label>
          <br />
          <Label for="Data Version">Data Version :</Label>
          <Label type="text" name="Data Version" id="Data Version">
            {actualData.data_version}
          </Label>
          <br />
          <Label for="MetaData">Metadata :</Label>
          <Label type="text" name="MetaData" id="MetaData">
            {actualData.metadata}
          </Label>
          <br />
        </CardItem>
        <CardItem>
          <Label>DEV:</Label>
          {actualData.affects.developer &&
            actualData.affects.developer.map((devname) => (
              <CardItem>
                <Label type="text" name={devname} id="Dev">
                  {devname}
                </Label>
              </CardItem>
            ))}
        </CardItem>
        <CardItem>
          <Label>DEPLOYER:</Label>
          {actualData.affects.deployer &&
            actualData.affects.deployer.map((devname) => (
              <>
                <Label for="Deployer">{devname}</Label>
                <Label type="text" name={devname} id="Deployer">
                  {devname}
                </Label>
              </>
            ))}
        </CardItem>
        {actualData.artifacts &&
          actualData.artifacts.map((artifacts) => (
            <>
              <Label>Type :</Label>
              <br />
              <Label for={artifacts.type}>{artifacts.type}</Label>
              <Label type="text" name={artifacts.type} id={artifacts.type}>
                {artifacts.type}
              </Label>
              <br />
              <Label>Name :</Label>
              <br />
              <Label for={artifacts.name}>{artifacts.name}</Label>
              <Label type="text" name={artifacts.name} id={artifacts.name}>
                {artifacts.name}
              </Label>
              <br />
            </>
          ))}
        <CardItem>
          <Label>Problem Type</Label>
          <Label>Class Of :</Label>
          <Label type="text" name={actualData.problemtype.classof} id="ClassOf">
            {actualData.problemtype.classof}
          </Label>
        </CardItem>
        <CardItem>
          <Label>Type :</Label>
          <Label type="text" name={actualData.problemtype.type} idd="Type">
            {actualData.problemtype.type}
          </Label>
        </CardItem>
        <CardItem>
          <Label>Description in</Label>
          {actualData.problemtype.description.lang}
          <Label
            type="text"
            name={actualData.problemtype.description.lang}
            id="lang"
          >
            {actualData.problemtype.description.lang}
          </Label>
          :
          <Label>
            <Label
              type="text"
              name={actualData.problemtype.description.value}
              id="value"
            >
              {actualData.problemtype.description.value}
            </Label>
          </Label>
        </CardItem>
        <CardItem>
          <Label>Metrics</Label>
          <Label>Name :</Label>
          <Label>Detection Method :</Label>
          <Label
            type="text"
            name={actualData.metrics[0].detection_method.type}
            id="metric.detection_method.type"
          >
            {actualData.metrics[0].detection_method.type}
          </Label>
          <Label
            type="text"
            name={actualData.metrics[0].detection_method.name}
            id="metric.detection_method.name"
          >
            {actualData.metrics[0].detection_method.name}
          </Label>
        </CardItem>
        <CardItem>
          <Label>Results :</Label>
          {actualData.metrics[0].results.harm_category.map((harm) => (
            <>
              <Label type="text" name={harm} id={harm}>
                {harm}
              </Label>
            </>
          ))}
        </CardItem>
        <CardItem>
          <Label>Stat :</Label>
          {actualData.metrics[0].results.stat.map((stat) => (
            <>
              <Label type="text" name={stat} id={stat}>
                {stat}
              </Label>
            </>
          ))}
          <Label>PValue :</Label>
          {actualData.metrics[0].results.pvalue.map((pvalue) => (
            <>
              <Label type="text" name={pvalue} id={pvalue}>
                {pvalue}
              </Label>
              <br />
            </>
          ))}
          <Label>References :</Label>
          {actualData.references.map((reference) => (
            <>
              <Label type="text" name={reference} id={reference}>
                {reference}
              </Label>
              <br />
            </>
          ))}
          <Label>Impact</Label>
          <br />
          <Label>Risk Domain :</Label>
          <br />
          {actualData.impact.avid.risk_domain.map((risk) => (
            <>
              <Label type="text" name={risk} id={risk}>
                {risk}
              </Label>
              <br />
            </>
          ))}
          <Label>SEP View :</Label>
          <br />
          {actualData.impact.avid.sep_view.map((sep) => (
            <>
              <Label type="text" name={sep} id={sep}>
                {sep}
              </Label>
            </>
          ))}
          <Label>Lifecycle View :</Label>
          <br />
          {actualData.impact.avid.lifecycle_view.map((lifecycle) => (
            <>
              <Label type="text" name={lifecycle} id={lifecycle}>
                {lifecycle}
              </Label>
              <br />
            </>
          ))}
          <Label>Taxonomy Version :</Label>
          <br />
          <Label
            type="text"
            name={actualData.impact.avid.taxonomy_version}
            id="impact"
          >
            {actualData.impact.avid.taxonomy_version}
          </Label>

          <br />
          <Label>Credit :</Label>
          <br />
          <Label type="text" name={actualData.credit} id="credit">
            {actualData.credit}
          </Label>

          <br />
          <Label>Reported Date :</Label>
          <br />
          <Label type="text" name={actualData.reported_date} id="reported_date">
            {actualData.reported_date}
          </Label>
          <br />
          <button type="submit">Submit</button>
        </CardItem>
      </CardItem>
    </>
  );
}
export default VulnListDipsplay;
