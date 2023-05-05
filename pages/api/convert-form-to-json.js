import formidable from "formidable";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

let formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    image: yup.mixed().required(),
});

async function saveFormData(fields, files) {
    const jsonData = JSON.stringify(fields, null, 2);
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.-]/g, "");
    const uuid = uuidv4();
    const filePath = path.join("../../vulns/", { uuid }, ".json");
    try {
        await fs.promises.writeFile(filePath, jsonData);
        console.log("JSON file created successfully");
    } catch (error) {
        console.error(error);
    }
}

async function validateFromData(fields, files) {
    try {
        await formSchema.validate({ ...fields, ...files });
        return true;
    } catch (e) {
        return false;
    }
}

async function handlePostFormReq(req, res) {
    const form = formidable({ multiples: true });

    const formData = new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                reject("error");
            }
            resolve({ fields, files });
        });
    });

    try {
        const { fields, files } = await formData;
        const isValid = await validateFromData(fields, files);
        if (!isValid) throw Error("invalid form schema");

        try {
            await saveFormData(fields, files);
            res.status(200).send({ status: "submitted" });
            return;
        } catch (e) {
            res.status(500).send({ status: "something went wrong" });
            return;
        }
    } catch (e) {
        res.status(400).send({ status: "invalid submission" });
        return;
    }
}

export default async function handler(req, res) {
    if (req.method == "POST") {
        await handlePostFormReq(req, res);
    } else {
        res.status(404).send("method not found");
    }
}

export const config = {
    api: {
        bodyParser: false,
    },
};
