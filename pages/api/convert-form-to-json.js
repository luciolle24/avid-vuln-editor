import formidable from "formidable";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import fs from "fs";

async function saveFormData(fields, files) {
    const jsonData = JSON.stringify(fields, null, 2);
    const uuid = uuidv4();

    try {
        await fs.promises.writeFile(filePath, jsonData);
        console.log("JSON file created successfully");
    } catch (error) {
        console.error(error);
    }
    const filePath = path.join("./vulns/", "${uuid}.json");
}

async function handlePostFormReq(req, res) {
    const form = formidable({ multiples: true });

    // create a promise that resolves after a specified timeout
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("timeout");
        }, 5000); // set the timeout to 5 seconds
    });

    // create a promise that resolves when form.parse() finishes
    const formPromise = new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error(err);
                reject("form error");
                return;
            }

            try {
                await saveFormData(fields, files);
                resolve("submitted");
            } catch (e) {
                console.error(e);
                reject("save error");
            }
        });
    });

    // wait for the first promise to resolve, either the formPromise or the timeoutPromise
    const result = await Promise.race([formPromise, timeoutPromise]);

    // check which promise resolved and respond accordingly
    if (result === "submitted") {
        res.status(200).send({ status: "submitted" });
    } else if (result === "form error") {
        res.status(500).send({ status: "something went wrong with the form" });
    } else {
        res.status(500).send({ status: "timeout" });
    }
}

export default async function handler(req, res) {
    if (req.method === "POST") {
        console.log("POST");
        await handlePostFormReq(req, res);
    } else {
        console.log("GET");
        res.status(404).send("method not found");
    }
}

export const config = { api: { bodyParser: false } };
