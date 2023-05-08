import {
    CardItem,
    Textarea,
    Label,
    RoundedImages,
    Button,
} from "../cards/cards.jsx";
import { notification } from "antd";

async function submitForm(data) {
    data.preventDefault();
    console.log(data);
    const f = new FormData();
    f.append("title", data.title);
    console.log(data.title);

    const res = await fetch("http://localhost:3000/api/convert-form-to-json", {
        method: "POST",
        body: f,
    });

    const resBody = await res.json();

    if (res.status == 200) {
        notification.success({
            duration: 3,
            message: "Submission Status",
            description: resBody.status,
            //onClose: () => router.reload(window.location.pathname),
        });
    } else {
        notification.error({
            duration: 2,
            message: "Submission Status",
            description: resBody.status,
        });
    }
}

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
                <form onSubmit={submitForm}>
                    <CardItem>
                        <Label htmlFor="Title">Title :</Label>
                        <Textarea
                            type="text"
                            name="title"
                            id="title"
                            defaultValue={actualData.description.value}
                        />

                        <Label htmlFor="Data Type">Data Type :</Label>
                        <Textarea
                            name="Data Type"
                            id="Data Type"
                            defaultValue={actualData.data_type}
                        />
                        <br />
                        <Label htmlFor="Data Version">Data Version :</Label>
                        <Textarea
                            type="text"
                            name="Data Version"
                            id="Data Version"
                            defaultValue={actualData.data_version}
                        />
                        <br />
                        <Label htmlFor="MetaData">Metadata :</Label>
                        <Textarea
                            type="text"
                            name="MetaData"
                            id="MetaData"
                            defaultValue={actualData.metadata}
                        />
                        <br />
                    </CardItem>
                    <CardItem>
                        <Label>DEV:</Label>
                        {actualData.affects.developer &&
                            actualData.affects.developer.map((devname) => (
                                <CardItem>
                                    <Textarea
                                        type="text"
                                        name="Dev"
                                        id="Dev"
                                        defaultValue={devname}
                                        key={devname}
                                    />
                                </CardItem>
                            ))}
                    </CardItem>
                    <CardItem>
                        <Label>DEPLOYER:</Label>
                        {actualData.affects.deployer &&
                            actualData.affects.deployer.map((devname) => (
                                <>
                                    <Textarea
                                        type="text"
                                        name="Deployer"
                                        id="Deployer"
                                        defaultValue={devname}
                                        key={devname}
                                    />
                                </>
                            ))}
                    </CardItem>
                    {actualData.artifacts &&
                        actualData.artifacts.map((artifacts) => (
                            <>
                                <Label>Type :</Label>
                                <br />
                                <Label htmlFor={artifacts.type}>
                                    {artifacts.type}
                                </Label>
                                <Textarea
                                    type="text"
                                    name="Art Types"
                                    id={artifacts.type}
                                    defaultValue={artifacts.type}
                                    key={artifacts.type}
                                />
                                <br />
                                <Label>Name :</Label>
                                <br />
                                <Label htmlFor={artifacts.name}>
                                    {artifacts.name}
                                </Label>
                                <Textarea
                                    type="text"
                                    name="Art Names"
                                    id={artifacts.name}
                                    defaultValue={artifacts.name}
                                    key={artifacts.name}
                                />
                                <br />
                            </>
                        ))}
                    <CardItem>
                        <Label>Problem Type</Label>
                        <Label>Class Of :</Label>
                        <Textarea
                            type="text"
                            name="ClassOf"
                            id="ClassOf"
                            defaultValue={actualData.problemtype.classof}
                        />
                    </CardItem>
                    <CardItem>
                        <Label>Type :</Label>
                        <Textarea
                            type="text"
                            name="Type"
                            idd="Type"
                            defaultValue={actualData.problemtype.type}
                        />
                    </CardItem>
                    <CardItem>
                        <Label>Description in</Label>
                        <Textarea
                            type="text"
                            name="lang"
                            id="lang"
                            defaultValue={
                                actualData.problemtype.description.lang
                            }
                        />
                        :
                        <Label>
                            <Textarea
                                type="text"
                                name={actualData.problemtype.description.value}
                                id="value"
                                defaultValue={
                                    actualData.problemtype.description.value
                                }
                            />
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
                            defaultValue={
                                actualData.metrics[0].detection_method.type
                            }
                        />
                        <Textarea
                            type="text"
                            name={actualData.metrics[0].detection_method.name}
                            id="metric.detection_method.name"
                            defaultValue={
                                actualData.metrics[0].detection_method.name
                            }
                        />
                    </CardItem>
                    <CardItem>
                        <Label>Results :</Label>
                        {actualData.metrics[0].results.harm_category.map(
                            (harm) => (
                                <>
                                    <Textarea
                                        type="text"
                                        name={harm}
                                        id={harm}
                                        defaultValue={harm}
                                        key={harm}
                                    />
                                </>
                            )
                        )}
                    </CardItem>
                    <CardItem>
                        <Label>Stat :</Label>
                        {actualData.metrics[0].results.stat.map((stat) => (
                            <>
                                <Textarea
                                    type="text"
                                    name={stat}
                                    id={stat}
                                    defaultValue={stat}
                                    key={stat}
                                />
                            </>
                        ))}
                        <Label>PValue :</Label>
                        {actualData.metrics[0].results.pvalue.map((pvalue) => (
                            <>
                                <Textarea
                                    type="text"
                                    name={pvalue}
                                    id={pvalue}
                                    defaultValue={pvalue}
                                    key={pvalue}
                                />

                                <br />
                            </>
                        ))}
                        <Label>References :</Label>
                        {actualData.references.map((reference) => (
                            <>
                                <Textarea
                                    type="text"
                                    name={reference}
                                    id={reference}
                                    defaultValue={reference}
                                    key={reference}
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
                                <Textarea
                                    type="text"
                                    name={risk}
                                    id={risk}
                                    defaultValue={risk}
                                    key={risk}
                                />

                                <br />
                            </>
                        ))}
                        <Label>SEP View :</Label>
                        <br />
                        {actualData.impact.avid.sep_view.map((sep) => (
                            <>
                                <Textarea
                                    type="text"
                                    name={sep}
                                    id={sep}
                                    defaultValue={sep}
                                    key={sep}
                                />
                            </>
                        ))}
                        <Label>Lifecycle View :</Label>
                        <br />
                        {actualData.impact.avid.lifecycle_view.map(
                            (lifecycle) => (
                                <>
                                    <Textarea
                                        type="text"
                                        name={lifecycle}
                                        id={lifecycle}
                                        defaultValue={lifecycle}
                                        key={lifecycle}
                                    />

                                    <br />
                                </>
                            )
                        )}
                        <Label>Taxonomy Version :</Label>
                        <br />
                        <Textarea
                            type="text"
                            name={actualData.impact.avid.taxonomy_version}
                            id="impact"
                            defaultValue={
                                actualData.impact.avid.taxonomy_version
                            }
                        />

                        <br />
                        <Label>Credit :</Label>
                        <br />
                        <Textarea
                            type="text"
                            name={actualData.credit}
                            id="credit"
                            defaultValue={actualData.credit}
                        />

                        <br />
                        <Label>Reported Date :</Label>
                        <br />
                        <Textarea
                            type="text"
                            name={actualData.reported_date}
                            id="reported_date"
                            defaultdefaultValue={actualData.reported_date}
                        />

                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </CardItem>
                </form>
            </CardItem>
        </>
    );
}
export default Editor;
