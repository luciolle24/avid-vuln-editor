import fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    const formData = JSON.parse(req.body);
    const jsonData = transformFormDataToJson(formData);

    fs.writeFile("form-data.json", jsonData, (err) => {
      if (err) throw err;
      console.log("Form data saved to file");
    });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

function transformFormDataToJson(formData) {
  const json = {};

  formData.forEach((field) => {
    const fieldName = field.name;
    const fieldValue = field.value;

    json[fieldName] = fieldValue;
  });

  return JSON.stringify(json);
}
