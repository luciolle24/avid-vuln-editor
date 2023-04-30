export default function handler(req, res) {
  if (req.method === "POST") {
    const formData = req.body;

    // Convert the form data to JSON
    const jsonData = {
      data_type: formData["Data Type"],
      data_version: formData["Data Version"],
      metadata: formData.MetaData,
      affects: {
        developer: formData["Dev"],
        deployer: formData["Deployer"],
      },
      artifacts: [
        {
          type: formData["Art Types"],
          name: formData["Art Names"],
        },
      ],
      problemtype: {
        classof: formData["ClassOf"],
        type: formData["Type"],
        description: {
          lang: formData["lang"],
          value: formData["value"],
        },
      },
      metrics: [
        {
          name: formData["Metric Name"],
          detection_method: {
            type: formData["Detection Method Type"],
            name: formData["Detection Method Name"],
          },
          results: {
            harm_category: [],
            stat: [formData["Stat"]],
            pvalue: [formData["P-Value"]],
          },
        },
      ],
      references: [
        {
          label: formData["Ref Label"],
          url: formData["Ref URL"],
        },
      ],
      description: {
        lang: formData["Desc Lang"],
        value: formData["Desc Value"],
      },
      impact: {
        avid: {
          risk_domain: [formData["Risk Domain"]],
          sep_view: [formData["SEP View"]],
          lifecycle_view: [formData["Lifecycle View"]],
          taxonomy_version: formData["Taxonomy Version"],
        },
      },
      credit: formData["Credit"],
      reported_date: formData["Reported Date"],
    };
  }
}
