import {
  CardItem,
  Textarea,
  Label,
  RoundedImages,
  Button,
} from "../cards/cards.jsx";

function Editor(props) {
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
        <form action="/api/json_parser" method="post">
          <CardItem>
            <Label for="Title">Title :</Label>
            <Textarea name="Title" id="Title">
              {actualData.description.value + "\n"}
            </Textarea>

            <Label for="Data Type">Data Type :</Label>
            <Textarea type="text" name="Data Type" id="Data Type">
              {actualData.data_type}
            </Textarea>
            <br />
            <Label for="Data Version">Data Version :</Label>
            <Textarea type="text" name="Data Version" id="Data Version">
              {actualData.data_version}
            </Textarea>
            <br />
            <Label for="MetaData">Metadata :</Label>
            <Textarea type="text" name="MetaData" id="MetaData">
              {actualData.metadata}
            </Textarea>
            <br />
          </CardItem>
          <CardItem>
            <Label>DEV:</Label>
            {actualData.affects.developer &&
              actualData.affects.developer.map((devname) => (
                <CardItem>
                  <Textarea type="text" name={devname} id="Dev">
                    {devname}
                  </Textarea>
                </CardItem>
              ))}
          </CardItem>
          <CardItem>
            <Label>DEPLOYER:</Label>
            {actualData.affects.deployer &&
              actualData.affects.deployer.map((devname) => (
                <>
                  <Label for="Deployer">{devname}</Label>
                  <Textarea type="text" name={devname} id="Deployer">
                    {devname}
                  </Textarea>
                </>
              ))}
          </CardItem>
          {actualData.artifacts &&
            actualData.artifacts.map((artifacts) => (
              <>
                <Label>Type :</Label>
                <br />
                <Label for={artifacts.type}>{artifacts.type}</Label>
                <Textarea type="text" name={artifacts.type} id={artifacts.type}>
                  {artifacts.type}
                </Textarea>
                <br />
                <Label>Name :</Label>
                <br />
                <Label for={artifacts.name}>{artifacts.name}</Label>
                <Textarea type="text" name={artifacts.name} id={artifacts.name}>
                  {artifacts.name}
                </Textarea>
                <br />
              </>
            ))}
          <CardItem>
            <Label>Problem Type</Label>
            <Label>Class Of :</Label>
            <Textarea
              type="text"
              name={actualData.problemtype.classof}
              id="ClassOf"
            >
              {actualData.problemtype.classof}
            </Textarea>
          </CardItem>
          <CardItem>
            <Label>Type :</Label>
            <Textarea type="text" name={actualData.problemtype.type} idd="Type">
              {actualData.problemtype.type}
            </Textarea>
          </CardItem>
          <CardItem>
            <Label>Description in</Label>
            {actualData.problemtype.description.lang}
            <Textarea
              type="text"
              name={actualData.problemtype.description.lang}
              id="lang"
            >
              {actualData.problemtype.description.lang}
            </Textarea>
            :
            <Label>
              <Textarea
                type="text"
                name={actualData.problemtype.description.value}
                id="value"
              >
                {actualData.problemtype.description.value}
              </Textarea>
            </Label>
          </CardItem>
          <CardItem>
            <Label>Metrics</Label>
            <Label>Name :</Label>
            <Label>Detection Method :</Label>
            <Textarea
              type="text"
              name={actualData.metrics[0].detection_method.type}
              id="metric.detection_method.type"
            >
              {actualData.metrics[0].detection_method.type}
            </Textarea>
            <Textarea
              type="text"
              name={actualData.metrics[0].detection_method.name}
              id="metric.detection_method.name"
            >
              {actualData.metrics[0].detection_method.name}
            </Textarea>
          </CardItem>
          <CardItem>
            <Label>Results :</Label>
            {actualData.metrics[0].results.harm_category.map((harm) => (
              <>
                <Textarea type="text" name={harm} id={harm}>
                  {harm}
                </Textarea>
              </>
            ))}
          </CardItem>
          <CardItem>
            <Label>Stat :</Label>
            {actualData.metrics[0].results.stat.map((stat) => (
              <>
                <Textarea type="text" name={stat} id={stat}>
                  {stat}
                </Textarea>
              </>
            ))}
            <Label>PValue :</Label>
            {actualData.metrics[0].results.pvalue.map((pvalue) => (
              <>
                <Textarea type="text" name={pvalue} id={pvalue}>
                  {pvalue}
                </Textarea>
                <br />
              </>
            ))}
            <Label>References :</Label>
            {actualData.references.map((reference) => (
              <>
                <Textarea type="text" name={reference} id={reference}>
                  {reference}
                </Textarea>
                <br />
              </>
            ))}
            <Label>Impact</Label>
            <br />
            <Label>Risk Domain :</Label>
            <br />
            {actualData.impact.avid.risk_domain.map((risk) => (
              <>
                <Textarea type="text" name={risk} id={risk}>
                  {risk}
                </Textarea>
                <br />
              </>
            ))}
            <Label>SEP View :</Label>
            <br />
            {actualData.impact.avid.sep_view.map((sep) => (
              <>
                <Textarea type="text" name={sep} id={sep}>
                  {sep}
                </Textarea>
              </>
            ))}
            <Label>Lifecycle View :</Label>
            <br />
            {actualData.impact.avid.lifecycle_view.map((lifecycle) => (
              <>
                <Textarea type="text" name={lifecycle} id={lifecycle}>
                  {lifecycle}
                </Textarea>
                <br />
              </>
            ))}
            <Label>Taxonomy Version :</Label>
            <br />
            <Textarea
              type="text"
              name={actualData.impact.avid.taxonomy_version}
              id="impact"
            >
              {actualData.impact.avid.taxonomy_version}
            </Textarea>

            <br />
            <Label>Credit :</Label>
            <br />
            <Textarea type="text" name={actualData.credit} id="credit">
              {actualData.credit}
            </Textarea>

            <br />
            <Label>Reported Date :</Label>
            <br />
            <Textarea
              type="text"
              name={actualData.reported_date}
              id="reported_date"
            >
              {actualData.reported_date}
            </Textarea>
            <Button>Submit</Button>
          </CardItem>
        </form>
      </CardItem>
    </>
  );
}
export default Editor;
