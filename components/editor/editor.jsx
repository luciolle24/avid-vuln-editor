import { CardItem, Input, Label, Li, RoundedImages } from "../cards/cards.jsx";

function Editor(props) {
  const { data, id } = props;
  if (data === undefined) {
    return <CardItem>loading</CardItem>;
  }
  let actualData = data[Number(id) - 1];
  return (
    <form>
      <CardItem>
        <RoundedImages
          src="https://avidml.org/uploads/avid-logo.png"
          alt="AVID Logo"
        ></RoundedImages>
        <Label for="Title">Title :</Label>
        <Input
          type="text"
          name="Title"
          id="Title"
          value={actualData.description.value}
          contenteditable="true"
        />
        <CardItem>
          <Label for="Data Type">Data Type :</Label>
          <Input
            type="text"
            name="Data Type"
            id="Data Type"
            placeholder={actualData.data_type}
          />
          <br />
          <Label for="Data Version">Data Version :</Label>
          <Input
            type="text"
            name="Data Version"
            id="Data Version"
            placeholder={actualData.data_version}
          />
          <br />
          <Label for=":etaData">Metadata :</Label>
          <Input
            type="text"
            name="MetaData"
            id="MetaData"
            placeholder={actualData.metadata}
            contentEditable
          />
          <br />
        </CardItem>

        <Label>DEV:</Label>
        <CardItem>
          {actualData.affects.developer &&
            actualData.affects.developer.map((devname, index) => (
              <CardItem>
                <Input
                  type="text"
                  name={devname}
                  id="Dev"
                  placeholder={devname}
                />
              </CardItem>
            ))}
        </CardItem>

        <Label>DEPLOYER:</Label>
        <CardItem>
          {actualData.affects.deployer &&
            actualData.affects.deployer.map((devname) => (
              <>
                <Input
                  type="text"
                  name={devname}
                  id="Deployer"
                  placeholder={devname}
                />
              </>
            ))}
        </CardItem>
        {actualData.artifacts &&
          actualData.artifacts.map((artifacts) => (
            <>
              <Label>Type :</Label>
              <br />
              <Input
                type="text"
                name={artifacts.type}
                id={artifacts.type}
                placeholder={artifacts.type}
              />
              <br />
              <Label>Name :</Label>
              <br />
              <Input
                type="text"
                name={artifacts.name}
                id={artifacts.name}
                placeholder={artifacts.name}
              />
              <br />
            </>
          ))}

        <Label>Problem Type</Label>
        <Label>Class Of :</Label>
        <CardItem>
          <Input
            type="text"
            name={actualData.problemtype.classof}
            id="ClassOf"
            placeholder={actualData.problemtype.classof}
          />
        </CardItem>
        <Label>Type :</Label>
        <CardItem>
          <Input
            type="text"
            name={actualData.problemtype.type}
            idd="Type"
            placeholder={actualData.problemtype.type}
          />
        </CardItem>
        <Label>
          Description in
          <Input
            type="text"
            name={actualData.problemtype.description.lang}
            id="lang"
            placeholder={actualData.problemtype.description.lang}
          />
          :
        </Label>
        <Label>
          <Input
            type="text"
            name={actualData.problemtype.description.value}
            id="value"
            placeholder={actualData.problemtype.description.value}
          />
        </Label>
        <CardItem>
          <Label>Metrics</Label>
          <Label>Name :</Label>
          <Label>Detection Method :</Label>
          <Input
            type="text"
            name={actualData.metrics[0].detection_method.type}
            id="metric.detection_method.type"
            placeholder={actualData.metrics[0].detection_method.type}
          />
          <Input
            type="text"
            name={actualData.metrics[0].detection_method.name}
            id="metric.detection_method.name"
            placeholder={actualData.metrics[0].detection_method.name}
          />

          <Label>Results :</Label>
        </CardItem>
        <CardItem>
          {actualData.metrics[0].results.harm_category.map((harm) => (
            <>
              <Input type="text" name={harm} id={harm} placeholder={harm} />
            </>
          ))}
        </CardItem>
        <CardItem>
          <Label>Stat :</Label>
          {actualData.metrics[0].results.stat.map((stat) => (
            <>
              <Input type="text" name={stat} id={stat} placeholder={stat} />
              <br />
            </>
          ))}
          <Label>PValue :</Label>
          {actualData.metrics[0].results.pvalue.map((pvalue) => (
            <>
              <Input
                type="text"
                name={pvalue}
                id={pvalue}
                placeholder={pvalue}
              />
              <br />
            </>
          ))}
          <Label>References :</Label>
          {actualData.references.map((reference) => (
            <>
              <Input
                type="text"
                name={reference}
                id={reference}
                placeholder={reference}
              />
              <br />
            </>
          ))}
          <Label>Impact</Label>
          <br />
          <Label>Risk Domain :</Label>
          <br />
          {actualData.impact.avid.risk_domain.map((risk) => (
            <>
              <Input type="text" name={risk} id={risk} placeholder={risk} />
              <br />
            </>
          ))}
          <Label>SEP View :</Label>
          <br />
          {actualData.impact.avid.sep_view.map((sep) => (
            <>
              <Input type="text" name={sep} id={sep} placeholder={sep} />
            </>
          ))}
          <Label>Lifecycle View :</Label>
          <br />
          {actualData.impact.avid.lifecycle_view.map((lifecycle) => (
            <>
              <Input
                type="text"
                name={lifecycle}
                id={lifecycle}
                placeholder={lifecycle}
              />
              <br />
            </>
          ))}
          <Label>Taxonomy Version :</Label>
          <br />
          <Input
            type="text"
            name={actualData.impact.avid.taxonomy_version}
            id="impact.avid.taxonomy_version"
            placeholder={actualData.impact.avid.taxonomy_version}
          />

          <br />
          <Label>Credit :</Label>
          <br />
          <Input
            type="text"
            name={actualData.credit}
            id="credit"
            placeholder={actualData.credit}
          />

          <br />
          <Label>Reported Date :</Label>
          <br />
          <Input
            type="text"
            name={actualData.reported_date}
            id="reported_date"
            placeholder={actualData.reported_date}
          />
          <br />
        </CardItem>
      </CardItem>
    </form>
  );
}
export default Editor;
