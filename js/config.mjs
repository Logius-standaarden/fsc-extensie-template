import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  maxTocLevel: 3,
  license: "cc-by",
  specStatus: "WV",
  specType: "PR",
  pubDomain: "fsc",
  shortName: "fsc-extensie-template",
  publishDate: "2025-07-22",
  publishVersion: "0.9",
  latestVersion: "https://logius-standaarden.github.io/fsc-extensie-template/",
  prevVersion: [],

  editors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Stas Mironov",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
    ],
  authors:
    [
      {
        name: "Nil Barua",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
      {
        name: "Stas Mironov",
        company: "Logius",
        companyURL: "https://logius.nl",
      },
    ],
  github: "https://github.com/Logius-standaarden/fsc-extensie-template",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
});
