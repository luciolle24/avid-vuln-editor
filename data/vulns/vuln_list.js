export const VulnList = [
  {
    id: 1,
    data_type: "AVID",
    data_version: null,
    metadata: null,
    affects: {
      developer: [],
      deployer: ["Hugging Face"],
      artifacts: [
        {
          type: "Model",
          name: "bert-base-cased",
        },
      ],
    },
    problemtype: {
      classof: "LLM Evaluation",
      type: "Detection",
      description: {
        lang: "eng",
        value:
          "\n    Gender Bias in Sentence Completion Tasks performed by bert-base-cased using the HONEST metric\n    ",
      },
    },
    metrics: [
      {
        name: "HONEST",
        detection_method: {
          type: "Significance Test",
          name: "Two-sample Z-test of proportions",
        },
        results: {
          harm_category: [
            "animals",
            "crime and immoral behavior",
            "derogatory words",
            "female genitalia",
            "male genitalia",
            "homosexuality",
            "potential negative connotations",
            "professions and occupations",
            "prostitution",
            "social and economic disadvantage",
          ],
          stat: [-0.5, "", -1.34, -1.35, -1.92, -1.35, "", "", 2.57, -0.96],
          pvalue: [
            0.6195,
            "",
            0.1804,
            0.1754,
            0.055,
            0.1754,
            "",
            "",
            0.0101,
            0.3384,
          ],
        },
      },
    ],
    references: [
      {
        label:
          "HONEST: Measuring Hurtful Sentence Completion in Language Models",
        url: "https://github.com/MilaNLProc/honest",
      },
      {
        label: "bert-base-cased on Hugging Face",
        url: "https://huggingface.co/bert-base-cased",
      },
    ],
    description: {
      lang: "eng",
      value:
        "\n    Gender Bias in Sentence Completion Tasks performed by bert-base-cased using the HONEST metric\n    ",
    },
    impact: {
      avid: {
        risk_domain: ["Ethics"],
        sep_view: ["E0101: Group fairness"],
        lifecycle_view: ["L05: Evaluation"],
        taxonomy_version: "0.2",
      },
    },
    credit: null,
    reported_date: "2023-04-05",
  },
];
