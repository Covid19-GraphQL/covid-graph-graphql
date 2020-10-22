import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('Disease', async t => {
  t.plan(1);
  const query = gql`
    query {
      Disease(first: 10, filter: {
        associatatesDaG_not: null
      }) {
        _id
        definition
        doid
        license
        link
        name
        source
        isA {
          isDisease(first: 3) {
            position
            Disease {
              _id
              name
            }
          }
          disease(first: 3) {
            position
            Disease {
              _id
              name
            }
          }
        }
        associatatesDaG(first: 3) {
          high_confidence
          locus
          primary
          status
          gene {
            sid
          }
        }
        localizesDla(first: 3) {
          cooccurrence
          expected
          p_fisher
        }
      }
    }
  `;
  const expected = {
    "data": {
      "Disease": [
        {
          "_id": "3655483",
          "definition": "\"A pulmonary fibrosis that is characterized by scarring of the lung.\" [url:https\\://www.pulmonaryfibrosis.org/life-with-pf/about-ipf]",
          "doid": "DOID:0050156",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:0050156",
          "name": "idiopathic pulmonary fibrosis",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655482",
                  "name": "pulmonary fibrosis",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 1,
              "locus": 0,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "727897",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 0,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "54472",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 1,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "4586",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 47,
              "expected": 3.4643784297304063,
              "p_fisher": 1.4391579774764943e-36,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 17,
              "expected": 2.9439241950725794,
              "p_fisher": 1.535202300077748e-8,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 1210,
              "expected": 51.732311482674035,
              "p_fisher": 0,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3655562",
          "definition": null,
          "doid": "DOID:9835",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:9835",
          "name": "refractive error",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655563",
                  "name": "aniseikonia",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3661142",
                  "name": "myopia",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3661118",
                  "name": "astigmatism",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655531",
                  "name": "eye disease",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 0,
              "locus": 74,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "84955",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 136,
              "primary": 1,
              "status": "LC-P",
              "gene": {
                "sid": "414899",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 126,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "9760",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 882,
              "expected": 95.53457212811995,
              "p_fisher": 0,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 48,
              "expected": 13.761158330128096,
              "p_fisher": 4.425428028670513e-13,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 1111,
              "expected": 12.366755243520437,
              "p_fisher": 0,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3655566",
          "definition": "\"A thyroid gland disease which involves an underproduction of thyroid hormone.\" [url:http\\://www.ncbi.nlm.nih.gov/pubmedhealth/PMH0001393/]",
          "doid": "DOID:1459",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:1459",
          "name": "hypothyroidism",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655567",
                  "name": "congenital hypothyroidism",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3656616",
                  "name": "Bamforth-Lazarus syndrome",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3661064",
                  "name": "myxedema",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3661267",
                  "name": "thyroid gland disease",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 1,
              "locus": 6,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "26191",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 2,
              "primary": 1,
              "status": "LC-P",
              "gene": {
                "sid": "114904",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 6,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "54665",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 27,
              "expected": 7.867950209428882,
              "p_fisher": 6.984082199353374e-8,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 309,
              "expected": 156.75192279358828,
              "p_fisher": 9.452429848135512e-28,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 558,
              "expected": 34.63213069899587,
              "p_fisher": 0,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3655594",
          "definition": "\"A central nervous system disease characterized by throbbing, pulling creeping or other unpleasant sensations in the legs and the irresistible urge to move them.\" [url:http\\://en.wikipedia.org/wiki/Restless_legs_syndrome, url:http\\://www.ninds.nih.gov/disorders/restless_legs/detail_restless_legs.htm]",
          "doid": "DOID:0050425",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:0050425",
          "name": "restless legs syndrome",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655528",
                  "name": "central nervous system disease",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 1,
              "locus": 1,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "4211",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 5,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "390598",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 2,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "114781",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 8,
              "expected": 0.4696646324905396,
              "p_fisher": 3.6560968813278594e-8,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 12,
              "expected": 1.592264151941844,
              "p_fisher": 1.1557047305954614e-7,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 34,
              "expected": 0.8890822088083512,
              "p_fisher": 8.063382945166716e-42,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3655826",
          "definition": "\"A female reproductive organ cancer that is located_in the ovary.\" [url:http\\://www.cancer.gov/dictionary?CdrID=445074]",
          "doid": "DOID:2394",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:2394",
          "name": "ovarian cancer",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655827",
                  "name": "ovarian melanoma",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3662398",
                  "name": "malignant ovarian cyst",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3662407",
                  "name": "ovarian germ cell cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3656040",
                  "name": "ovarian disease",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 1,
                "Disease": {
                  "_id": "3661171",
                  "name": "female reproductive organ cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 1,
              "locus": 0,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "25976",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 1,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "387640",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 1,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "10529",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 712,
              "expected": 81.37823087114559,
              "p_fisher": 0,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 122,
              "expected": 8.660938554438001,
              "p_fisher": 2.2898202063397284e-94,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 178,
              "expected": 68.15512498471652,
              "p_fisher": 6.676922829217425e-29,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3655828",
          "definition": "\"A cell type cancer that has_material_basis_in abnormally proliferating cells derives_from melanocytes which are found in skin, the bowel and the eye.\" [url:http\\://en.wikipedia.org/wiki/Melanoma, url:https\\://www.ncbi.nlm.nih.gov/pubmed/22123420]",
          "doid": "DOID:1909",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:1909",
          "name": "melanoma",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655829",
                  "name": "mucosal melanoma",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3661601",
                  "name": "scrotum melanoma",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 1,
                "Disease": {
                  "_id": "3661951",
                  "name": "malignant anus melanoma",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3656655",
                  "name": "cell type cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 1,
              "locus": 7,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "8398",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 3,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "4600",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 5,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "4507",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 108,
              "expected": 48.540129325363,
              "p_fisher": 1.0761291660160194e-13,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 33,
              "expected": 5.436831130331077,
              "p_fisher": 8.050688606633621e-16,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 22,
              "expected": 11.567994409659546,
              "p_fisher": 0.0039402663157106525,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3655975",
          "definition": "\"An organ system cancer located in the hematological system that is characterized by uncontrolled cellular proliferation in blood, bone marrow and lymph nodes.\" [url:http\\://en.wikipedia.org/wiki/Blood_cancer, url:http\\://www.cancer.gov/dictionary/?CdrID=45708]",
          "doid": "DOID:2531",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:2531",
          "name": "hematologic cancer",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 1,
                "Disease": {
                  "_id": "3655976",
                  "name": "lymphoma",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3660534",
                  "name": "leukemia",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3662832",
                  "name": "dendritic cell thymoma",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 1,
                "Disease": {
                  "_id": "3658115",
                  "name": "hematopoietic system disease",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3656006",
                  "name": "organ system cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 0,
              "locus": 106,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "4482",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 68,
              "primary": 1,
              "status": "LC-P",
              "gene": {
                "sid": "3891",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 13,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "64864",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 15,
              "expected": 5.490270239708964,
              "p_fisher": 0.0005736312185168441,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 103,
              "expected": 28.146188851125437,
              "p_fisher": 3.912850137212181e-28,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 13,
              "expected": 3.1103927916024574,
              "p_fisher": 0.00002266483662293453,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3655995",
          "definition": "\"A thoracic cancer that originates in the mammary gland.\" [url:http\\://en.wikipedia.org/wiki/Breast_cancer, url:http\\://en.wikipedia.org/wiki/Mammary, url:http\\://www.cancer.gov/cancertopics/types/breast, url:http\\://www.nlm.nih.gov/medlineplus/breastcancer.html]",
          "doid": "DOID:1612",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:1612",
          "name": "breast cancer",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3656000",
                  "name": "Her2-receptor positive breast cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3656002",
                  "name": "triple-receptor negative breast cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3655997",
                  "name": "estrogen-receptor negative breast cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3656004",
                  "name": "breast disease",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 1,
                "Disease": {
                  "_id": "3658130",
                  "name": "thoracic cancer",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 0,
              "locus": 7,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "50937",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 115,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "9201",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 35,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "23768",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 281,
              "expected": 197.11487408783063,
              "p_fisher": 8.267927674306065e-9,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 99,
              "expected": 32.18501041225976,
              "p_fisher": 1.2105894954159093e-21,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 219,
              "expected": 122.9159711002348,
              "p_fisher": 2.134218019764953e-15,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3656084",
          "definition": "\"An autoimmune hypersensitivity disease resulting in the loss of hair on the scalp and elsewhere on the body initially causing bald spots.\" [url:http\\://en.wikipedia.org/wiki/Alopecia_areata]",
          "doid": "DOID:986",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:986",
          "name": "alopecia areata",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3656085",
                  "name": "diffuse alopecia areata",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3655396",
                  "name": "autoimmune disease of skin and connective tissue",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 1,
              "locus": 3,
              "primary": 1,
              "status": "HC-P",
              "gene": {
                "sid": "64375",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 1,
              "locus": 6,
              "primary": 0,
              "status": "HC-S",
              "gene": {
                "sid": "79465",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 0,
              "primary": 1,
              "status": "LC-P",
              "gene": {
                "sid": "55014",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 33,
              "expected": 0.2723661661856259,
              "p_fisher": 6.954564413984838e-57,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 113,
              "expected": 22.772276345300998,
              "p_fisher": 1.313036286591407e-43,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 3,
              "expected": 0.2403230878108464,
              "p_fisher": 0.0019235627232603387,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        },
        {
          "_id": "3656095",
          "definition": "\"A mood disorder that involves alternating periods of mania and depression.\" [url:http\\://en.wikipedia.org/wiki/Mood_disorder]",
          "doid": "DOID:3312",
          "license": "CC0 1.0",
          "link": "http://www.disease-ontology.org/?id=DOID:3312",
          "name": "bipolar disorder",
          "source": "http://www.disease-ontology.org",
          "isA": {
            "isDisease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3656096",
                  "name": "bipolar ll disorder",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3657812",
                  "name": "bipolar I disorder",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              },
              {
                "position": 0,
                "Disease": {
                  "_id": "3664973",
                  "name": "cyclothymic disorder",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "disease": [
              {
                "position": 0,
                "Disease": {
                  "_id": "3661241",
                  "name": "mood disorder",
                  "__typename": "Disease"
                },
                "__typename": "_DiseaseIsA"
              }
            ],
            "__typename": "_DiseaseIsADirections"
          },
          "associatatesDaG": [
            {
              "high_confidence": 0,
              "locus": 31,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "5091",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 225,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "10190",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            },
            {
              "high_confidence": 0,
              "locus": 31,
              "primary": 0,
              "status": "LC-S",
              "gene": {
                "sid": "55231",
                "__typename": "Gene"
              },
              "__typename": "_DiseaseAssociatatesDaG"
            }
          ],
          "localizesDla": [
            {
              "cooccurrence": 7,
              "expected": 1.0610130291807862,
              "p_fisher": 0.00011733780457794275,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 12,
              "expected": 0.497060420072085,
              "p_fisher": 2.6029675022479764e-13,
              "__typename": "_DiseaseLocalizesDla"
            },
            {
              "cooccurrence": 4,
              "expected": 0.5824765999188409,
              "p_fisher": 0.002997511547410811,
              "__typename": "_DiseaseLocalizesDla"
            }
          ],
          "__typename": "Disease"
        }
      ]
    }
  };
  await client
    .query({ query })
    .then(data => {
      t.deepEqual(data.data, expected.data);
    })
    .catch(error => {
      t.fail(error.message);
    });
});
