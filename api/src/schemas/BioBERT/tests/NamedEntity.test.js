import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('NamedEntity path: (NamedEntity)<-[MENTIONS]-(Abstract)-[HAS_FRAGMENT]->(FromAbstract:Fragment)-[MENTIONS]->(GeneSymbol)', async t => {
  t.plan(1);
  const query = gql`
    query {
      NamedEntity(first: 3) {
        id
        external_ids
        type
        value
        mentionedInAbstracts(first: 3) {
          count
          abstract {
            _hash_id
            fragments(first: 3) {
              text
              sequence
              kind
              next {
                kind
              }
              mentionsGeneSymbols(first: 3) {
                score
                geneSymbol {
                  sid
                  taxid
                }
              }
            }
          }
        }
      }
    }
  `;
  const expected = {
    "data": {
      "NamedEntity": [
        {
          "id": "55b3e4310f0c317e396beb0bb69cf00e",
          "external_ids": null,
          "type": "gene",
          "value": "herpes simplex virus type 1 (HSV1)",
          "mentionedInAbstracts": [
            {
              "count": 1,
              "abstract": {
                "_hash_id": "5390ca71c4cd71a4f2dcbeff2ba3ed01",
                "fragments": [
                  {
                    "text": "The addition of O-linked oligosaccharides did not occur in cells treated with the ionophore monensin or in a ricin-resistant cell line defective in the processing of N-linked oligosaccharides",
                    "sequence": 3,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Fatty acid acylation (principally of gE) could be detected just prior to the shifts, whereas conversion of high-mannose-type N-linked oligosaccharides to the complex type occurred coincident with the shifts",
                    "sequence": 2,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Other posttranslational modifications of HSV1 glycoproteins (designated gB, gC, gD and gE) were related temporally to the discrete shifts in electrophoretic mobilities that signal acquisition of the O-linked oligosaccharides",
                    "sequence": 1,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [
                      {
                        "score": 2.1439621448516846,
                        "geneSymbol": {
                          "sid": "GD",
                          "taxid": "9606",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromAbstractMentionsGeneSymbols"
                      }
                    ],
                    "__typename": "FromAbstract"
                  }
                ],
                "__typename": "Abstract"
              },
              "__typename": "_NamedEntityMentionedInAbstracts"
            },
            {
              "count": 1,
              "abstract": {
                "_hash_id": "4e20cf2e010efba39f5904ec87588e7f",
                "fragments": [
                  {
                    "text": "The addition of O-linked oligosaccharides did not occur in cells treated with the ionophore monensin or in a ricinresistant cell line defective in the processing of N-linked oligosaccharides",
                    "sequence": 3,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Abstract The O-linked oligosaccharides on mature forms of herpes simplex virus type 1 (HSV1) glycoproteins were characterized, and were found to account largely for the lower electrophoretic mobilities of these forms relative to the mobilities of immature forms",
                    "sequence": 0,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Other posttranslational modifications of HSV1 glycoproteins (designated gB, gC, gD and gE) were related temporally to the discrete shifts in electrophoretic mobilities that signal acquisition of the O-linked oligosaccharides",
                    "sequence": 1,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [
                      {
                        "score": 2.1439621448516846,
                        "geneSymbol": {
                          "sid": "GD",
                          "taxid": "9606",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromAbstractMentionsGeneSymbols"
                      }
                    ],
                    "__typename": "FromAbstract"
                  }
                ],
                "__typename": "Abstract"
              },
              "__typename": "_NamedEntityMentionedInAbstracts"
            }
          ],
          "__typename": "NamedEntity"
        },
        {
          "id": "1c10fef8cd88ab6db4f9592f00722d08",
          "external_ids": null,
          "type": "gene",
          "value": "HSV1 glycoproteins",
          "mentionedInAbstracts": [
            {
              "count": 2,
              "abstract": {
                "_hash_id": "4e20cf2e010efba39f5904ec87588e7f",
                "fragments": [
                  {
                    "text": "The addition of O-linked oligosaccharides did not occur in cells treated with the ionophore monensin or in a ricinresistant cell line defective in the processing of N-linked oligosaccharides",
                    "sequence": 3,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Abstract The O-linked oligosaccharides on mature forms of herpes simplex virus type 1 (HSV1) glycoproteins were characterized, and were found to account largely for the lower electrophoretic mobilities of these forms relative to the mobilities of immature forms",
                    "sequence": 0,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Other posttranslational modifications of HSV1 glycoproteins (designated gB, gC, gD and gE) were related temporally to the discrete shifts in electrophoretic mobilities that signal acquisition of the O-linked oligosaccharides",
                    "sequence": 1,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [
                      {
                        "score": 2.1439621448516846,
                        "geneSymbol": {
                          "sid": "GD",
                          "taxid": "9606",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromAbstractMentionsGeneSymbols"
                      }
                    ],
                    "__typename": "FromAbstract"
                  }
                ],
                "__typename": "Abstract"
              },
              "__typename": "_NamedEntityMentionedInAbstracts"
            },
            {
              "count": 2,
              "abstract": {
                "_hash_id": "5390ca71c4cd71a4f2dcbeff2ba3ed01",
                "fragments": [
                  {
                    "text": "The addition of O-linked oligosaccharides did not occur in cells treated with the ionophore monensin or in a ricin-resistant cell line defective in the processing of N-linked oligosaccharides",
                    "sequence": 3,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Fatty acid acylation (principally of gE) could be detected just prior to the shifts, whereas conversion of high-mannose-type N-linked oligosaccharides to the complex type occurred coincident with the shifts",
                    "sequence": 2,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Other posttranslational modifications of HSV1 glycoproteins (designated gB, gC, gD and gE) were related temporally to the discrete shifts in electrophoretic mobilities that signal acquisition of the O-linked oligosaccharides",
                    "sequence": 1,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [
                      {
                        "score": 2.1439621448516846,
                        "geneSymbol": {
                          "sid": "GD",
                          "taxid": "9606",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromAbstractMentionsGeneSymbols"
                      }
                    ],
                    "__typename": "FromAbstract"
                  }
                ],
                "__typename": "Abstract"
              },
              "__typename": "_NamedEntityMentionedInAbstracts"
            }
          ],
          "__typename": "NamedEntity"
        },
        {
          "id": "255821001",
          "external_ids": [
            "MESH:D010020"
          ],
          "type": "disease",
          "value": "ON",
          "mentionedInAbstracts": [
            {
              "count": 4,
              "abstract": {
                "_hash_id": "9db570902eb8e42e6fc051e758d73789",
                "fragments": [
                  {
                    "text": "There were significant correlations between the ABCB1 rs1045642 mutant and SONFH in the prednisone-use and methylprednisolone/prednisone-use populations",
                    "sequence": 5,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [
                      {
                        "score": 3.8224406242370605,
                        "geneSymbol": {
                          "sid": "ABCB1",
                          "taxid": "9606",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromAbstractMentionsGeneSymbols"
                      }
                    ],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "We explored the relationship between polymorphisms and steroid-induced osteonecrosis of the femoral head (SONFH) incidence with variables",
                    "sequence": 2,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Steroid treatment has become recognized as an important risk factor for avascular osteonecrosis of the femoral head",
                    "sequence": 0,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  }
                ],
                "__typename": "Abstract"
              },
              "__typename": "_NamedEntityMentionedInAbstracts"
            },
            {
              "count": 2,
              "abstract": {
                "_hash_id": "ed103594f11e091208581033a88fba26",
                "fragments": [
                  {
                    "text": "Furthermore, the reversible nature of the weak host–guest cross-links enables infiltration and migration of external cells into Ci-I gelatin hydrogels, thereby promoting the participation of endogenous cells in the healing process",
                    "sequence": 4,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "However, most conventional hydrogels cannot be injected after gelation and do not support the infiltration of cells because of the static nature of their network structure",
                    "sequence": 1,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Our findings show that Ci-I hydrogels can mediate sustained delivery of small hydrophobic molecular drugs (e.g., icaritin) to boost differentiation of stem cells while avoiding the adverse effects (e.g., in treatment of bone necrosis) associated with high drug dosage",
                    "sequence": 5,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  }
                ],
                "__typename": "Abstract"
              },
              "__typename": "_NamedEntityMentionedInAbstracts"
            },
            {
              "count": 2,
              "abstract": {
                "_hash_id": "4c138a6ded0fd43a4de04b08e3ac7127",
                "fragments": [
                  {
                    "text": "In fact, if the articular surface subsides more than 2 mm, total hip arthroplasty is preferable",
                    "sequence": 8,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "CONCLUSIONS: The pericollapse stage with distinct clinical and imaging characteristics provides a last good opportunity for the use of joint-preserving techniques",
                    "sequence": 9,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  },
                  {
                    "text": "Accumulating evidence has indicated that these findings may be secondary to the changes after subchondral fractures",
                    "sequence": 5,
                    "kind": "Abstract",
                    "next": {
                      "kind": "Abstract",
                      "__typename": "FromAbstract"
                    },
                    "mentionsGeneSymbols": [],
                    "__typename": "FromAbstract"
                  }
                ],
                "__typename": "Abstract"
              },
              "__typename": "_NamedEntityMentionedInAbstracts"
            }
          ],
          "__typename": "NamedEntity"
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
