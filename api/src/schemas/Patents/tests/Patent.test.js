import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('Patent', async t => {
  t.plan(1);
  const query = gql`
    query {
      Patent(first: 3, filter: {
        number: {
          citations_not: null
        }
        descriptions_not: null
      }) {
        filing_key
        filing_date
        jurisdiction
        lens_id
        lens_url
        pub_date
        pub_key
        type
        lensId(first: 3) {
          id
          familys(first: 3) {
            family_id
            size
            type
          }
        }
        number(first: 3) {
          pub_key
          citations(first: 3) {
            _hash_id
            lens_id
            pub_key
            citations {
              id
            }
          }
        }
        classifications(first: 3) {
          id
          cooperativePatentClassification(first: 3) {
            position
            classification {
              classification_cpc
            }
          }
          internationalPatentClassification(first: 3) {
            position
            classification {
              classification_ipc
            }
          }
          usPatentClassification(first: 3) {
            position
            classification {
              classification_us
            }
          }
        }
        citations {
          id
          patentLiteratureCitations(first: 3) {
            position
            citation {
              _hash_id
            }
          }
          nonPatentLiteratureCitations(first: 3) {
            position
            citation {
              _hash_id
            }
          }
        }
        abstracts(first: 3) {
          position
          abstract {
            _hash_id
            lang
            text
            fragments(first: 3) {
              kind
              sequence
              kind
              next {
                kind
              }
              geneSymbols(first: 3) {
                score
                symbol {
                  sid
                }
              }
            }
          }
        }
        inventors(first: 3) {
          position
          entity {
            name
            patentsInventor(first: 3) {
              filing_key
            }
          }
        }
        applicants(first: 3) {
          position
          entity {
            name
            patentsInventor(first: 3) {
              filing_key
            }
            patentsApplicant(first: 3) {
              filing_key
            }
            patentsOwner(first: 3) {
              filing_key
            }
          }
        }
        titles(first: 3) {
          position
          title {
            _hash_id
            text
            fragments(first: 3) {
              kind
              text
              next {
                kind
              }
              geneSymbols(first: 3) {
                score
                symbol {
                  sid
                }
              }
            }
          }
        }
        descriptions(first: 3) {
          position
          description {
            _hash_id
            fragments(first: 3) {
              kind
              next {
                kind
              }
              geneSymbols(first: 3) {
                score
                symbol {
                  sid
                }
              }
            }
          }
        }
        claims(first: 3) {
          position
          claim {
            _hash_id
            fragments(first: 3) {
              kind
              next {
                kind
              }          
              geneSymbols(first: 3) {
                score
                symbol {
                  sid
                }
              }
            }
          }
        }
        owner(first: 3) {
          position
          entity {
            name
          }
        }
      }
    }
  `;
  const expected = {
    "data": {
      "Patent": [
        {
          "filing_key": "US_201415023629_A_20140919",
          "filing_date": "2014-09-19",
          "jurisdiction": "US",
          "lens_id": "124-751-515-975-629",
          "lens_url": "https://lens.org/124-751-515-975-629",
          "pub_date": "2016-07-21",
          "pub_key": "US_2016_0206729_A1",
          "type": "Patent Application",
          "lensId": [
            {
              "id": "124-751-515-975-629",
              "familys": [
                {
                  "family_id": 39764678,
                  "size": 18,
                  "type": "simple",
                  "__typename": "PatentFamily"
                },
                {
                  "family_id": 2918813,
                  "size": 18,
                  "type": "extended",
                  "__typename": "PatentFamily"
                }
              ],
              "__typename": "LensID"
            }
          ],
          "number": [
            {
              "pub_key": "US_2016_0206729_A1",
              "citations": [
                {
                  "_hash_id": "baccb74332191f826c2b843a717a12a4",
                  "lens_id": "124-751-515-975-629",
                  "pub_key": "US_2016_0206729_A1",
                  "citations": [
                    {
                      "id": "bad3df8a2f1f373aedeca3502dd21f02",
                      "__typename": "PatentCitationCollection"
                    },
                    {
                      "id": "027aa60679512fdfb2f371f597f2759f",
                      "__typename": "PatentCitationCollection"
                    }
                  ],
                  "__typename": "PatentLiteratureCitation"
                }
              ],
              "__typename": "PatentNumber"
            }
          ],
          "classifications": [
            {
              "id": "a47da276353ff3d5a5e607191c11da21",
              "cooperativePatentClassification": [],
              "internationalPatentClassification": [
                {
                  "position": 3,
                  "classification": {
                    "classification_ipc": "C07K16/10",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                },
                {
                  "position": 4,
                  "classification": {
                    "classification_ipc": "C12N7/00",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                },
                {
                  "position": 1,
                  "classification": {
                    "classification_ipc": "A61K39/42",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                }
              ],
              "usPatentClassification": [],
              "__typename": "PatentClassificationCollection"
            }
          ],
          "citations": [
            {
              "id": "78109b6bb760fcad98c246d8ab421cd5",
              "patentLiteratureCitations": [],
              "nonPatentLiteratureCitations": [
                {
                  "position": 2,
                  "citation": {
                    "_hash_id": "81a5115abd2e837383cd1c0ce926a525",
                    "__typename": "NonPatentLiteratureCitation"
                  },
                  "__typename": "_PatentCitationCollectionNonPatentLiteratureCitations"
                },
                {
                  "position": 5,
                  "citation": {
                    "_hash_id": "55d794109f27bab21686f8bf87f10e5f",
                    "__typename": "NonPatentLiteratureCitation"
                  },
                  "__typename": "_PatentCitationCollectionNonPatentLiteratureCitations"
                },
                {
                  "position": 0,
                  "citation": {
                    "_hash_id": "8bb9e304b3c928b14da238f66277584d",
                    "__typename": "NonPatentLiteratureCitation"
                  },
                  "__typename": "_PatentCitationCollectionNonPatentLiteratureCitations"
                }
              ],
              "__typename": "PatentCitationCollection"
            }
          ],
          "abstracts": [
            {
              "position": 0,
              "abstract": {
                "_hash_id": "a9e05e14549fcad3401a3b946b0fca57",
                "lang": "en",
                "text": "Disclosed herein are nanoparticles containing MERS virus proteins in polymer structures, and compositions containing the nanoparticles formulated for administration as immunogenic compositions. Also provided herein are vector constructs encoding the proteins, and host cells containing the vector constructs. The disclosure also includes methods of making the nanoparticles and administering them to vertebrates, including methods of inducing immune responses to MERS that reduce or prevent infection by the virus.",
                "fragments": [
                  {
                    "kind": "PatentAbstract",
                    "sequence": 1,
                    "next": {
                      "kind": "PatentAbstract",
                      "__typename": "FromPatentAbstract"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentAbstract"
                  },
                  {
                    "kind": "PatentAbstract",
                    "sequence": 2,
                    "next": null,
                    "geneSymbols": [],
                    "__typename": "FromPatentAbstract"
                  },
                  {
                    "kind": "PatentAbstract",
                    "sequence": 0,
                    "next": {
                      "kind": "PatentAbstract",
                      "__typename": "FromPatentAbstract"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentAbstract"
                  }
                ],
                "__typename": "PatentAbstract"
              },
              "__typename": "_PatentAbstracts"
            }
          ],
          "inventors": [
            {
              "position": 1,
              "entity": {
                "name": "LIU YE",
                "patentsInventor": [
                  {
                    "filing_key": "HK_16113985_A_20161208",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "SG_10201802194W_A_20140919",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_2014_0056517_W_20140919",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            },
            {
              "position": 0,
              "entity": {
                "name": "SMITH GALE",
                "patentsInventor": [
                  {
                    "filing_key": "US_201514628513_A_20150223",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201815928385_A_20180322",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201615287433_A_20161006",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            },
            {
              "position": 2,
              "entity": {
                "name": "MASSARE MICHAEL",
                "patentsInventor": [
                  {
                    "filing_key": "US_201514628513_A_20150223",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201514628513_A_20150223",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201113280043_A_20111024",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            }
          ],
          "applicants": [
            {
              "position": 0,
              "entity": {
                "name": "NOVAVAX INC",
                "patentsInventor": [],
                "patentsApplicant": [
                  {
                    "filing_key": "US_9603706_W_19960319",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_9506236_W_19950518",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_2009_0067257_W_20091209",
                    "__typename": "Patent"
                  }
                ],
                "patentsOwner": [
                  {
                    "filing_key": "US_59365196_A_19960129",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201815928385_A_20180322",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201815928385_A_20180322",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentApplicants"
            }
          ],
          "titles": [
            {
              "position": 0,
              "title": {
                "_hash_id": "195c4f82de46aaf08c20bae70fbfaa6e",
                "text": "IMMUNOGENIC MIDDLE EAST RESPIRATORY SYNDROME CORONAVIRUS (MERS-CoV) COMPOSITIONS AND METHODS",
                "fragments": [
                  {
                    "kind": "PatentTitle",
                    "text": "IMMUNOGENIC MIDDLE EAST RESPIRATORY SYNDROME CORONAVIRUS (MERS-CoV) COMPOSITIONS AND METHODS",
                    "next": null,
                    "geneSymbols": [],
                    "__typename": "FromPatentTitle"
                  }
                ],
                "__typename": "PatentTitle"
              },
              "__typename": "_PatentTitles"
            }
          ],
          "descriptions": [
            {
              "position": 0,
              "description": {
                "_hash_id": "adce5e91037d1a9d070d5b129a46f0fa",
                "fragments": [
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentDescription"
                  },
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [
                      {
                        "score": 2.5021891593933105,
                        "symbol": {
                          "sid": "ISA",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromPatentDescriptionGeneSymbols"
                      }
                    ],
                    "__typename": "FromPatentDescription"
                  },
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentDescription"
                  }
                ],
                "__typename": "PatentDescription"
              },
              "__typename": "_PatentDescriptions"
            }
          ],
          "claims": [
            {
              "position": 0,
              "claim": {
                "_hash_id": "e0a3e41065492f39b576fc2a08a78d94",
                "fragments": [
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  },
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  },
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  }
                ],
                "__typename": "PatentClaim"
              },
              "__typename": "_PatentClaims"
            }
          ],
          "owner": [
            {
              "position": 0,
              "entity": {
                "name": "NOVAVAX INC",
                "__typename": "Entity"
              },
              "__typename": "_PatentOwner"
            }
          ],
          "__typename": "Patent"
        },
        {
          "filing_key": "US_201415030165_A_20141016",
          "filing_date": "2014-10-16",
          "jurisdiction": "US",
          "lens_id": "179-979-259-103-78X",
          "lens_url": "https://lens.org/179-979-259-103-78X",
          "pub_date": "2016-09-15",
          "pub_key": "US_2016_0264647_A1",
          "type": "Patent Application",
          "lensId": [
            {
              "id": "179-979-259-103-78X",
              "familys": [
                {
                  "family_id": 38153439,
                  "size": 3,
                  "type": "extended",
                  "__typename": "PatentFamily"
                },
                {
                  "family_id": 29800585,
                  "size": 3,
                  "type": "simple",
                  "__typename": "PatentFamily"
                }
              ],
              "__typename": "LensID"
            }
          ],
          "number": [
            {
              "pub_key": "US_2016_0264647_A1",
              "citations": [
                {
                  "_hash_id": "4ba215d1d06c225f44761925e484494d",
                  "lens_id": "179-979-259-103-78X",
                  "pub_key": "US_2016_0264647_A1",
                  "citations": [
                    {
                      "id": "14881cb0d5a2086affd9513856f97bef",
                      "__typename": "PatentCitationCollection"
                    },
                    {
                      "id": "7b43ac67c0eceb1a4adce1593122d2d1",
                      "__typename": "PatentCitationCollection"
                    },
                    {
                      "id": "7f7650226d3fc89e166471491ee81e3e",
                      "__typename": "PatentCitationCollection"
                    }
                  ],
                  "__typename": "PatentLiteratureCitation"
                }
              ],
              "__typename": "PatentNumber"
            }
          ],
          "classifications": [
            {
              "id": "d8ac3c6aa40b10e1db3a4e943f739294",
              "cooperativePatentClassification": [],
              "internationalPatentClassification": [
                {
                  "position": 4,
                  "classification": {
                    "classification_ipc": "C12N7/00",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                },
                {
                  "position": 2,
                  "classification": {
                    "classification_ipc": "A61K45/06",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                },
                {
                  "position": 1,
                  "classification": {
                    "classification_ipc": "A61K39/42",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                }
              ],
              "usPatentClassification": [],
              "__typename": "PatentClassificationCollection"
            }
          ],
          "citations": [],
          "abstracts": [
            {
              "position": 0,
              "abstract": {
                "_hash_id": "6496ee09669b6dabaa8d0ca37c2ee398",
                "lang": "en",
                "text": "The invention provides polypeptides (e.g., antibodies) and fusion proteins that target a epitope in the receptor binding domain (RBD) of the spike (S) glycoprotein of the Middle East Respiratory Syndrome Coronavirus (MERS-CoV). The polypeptides and fusion proteins can be used to treat and prevent MERS-CoV infection in mammals.",
                "fragments": [
                  {
                    "kind": "PatentAbstract",
                    "sequence": 1,
                    "next": null,
                    "geneSymbols": [],
                    "__typename": "FromPatentAbstract"
                  },
                  {
                    "kind": "PatentAbstract",
                    "sequence": 0,
                    "next": {
                      "kind": "PatentAbstract",
                      "__typename": "FromPatentAbstract"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentAbstract"
                  }
                ],
                "__typename": "PatentAbstract"
              },
              "__typename": "_PatentAbstracts"
            }
          ],
          "inventors": [
            {
              "position": 0,
              "entity": {
                "name": "DIMITROV DIMITER S",
                "patentsInventor": [
                  {
                    "filing_key": "US_0314292_W_20030506",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "AU_2009_200792_A_20090227",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "AU_2009_200792_A_20090227",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            },
            {
              "position": 1,
              "entity": {
                "name": "YING TIANLEI",
                "patentsInventor": [
                  {
                    "filing_key": "US_201415030165_A_20141016",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "CN_201510525915_A_20150825",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_2014_0060863_W_20141016",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            },
            {
              "position": 3,
              "entity": {
                "name": "YUEN KWOK YUNG",
                "patentsInventor": [
                  {
                    "filing_key": "US_2018_0056138_W_20181016",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201615745411_A_20160715",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_80780704_A_20040324",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            }
          ],
          "applicants": [
            {
              "position": 0,
              "entity": {
                "name": "US HEALTH",
                "patentsInventor": [],
                "patentsApplicant": [
                  {
                    "filing_key": "US_9615823_W_19961002",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_9407560_W_19940706",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_95916477_A_19950421",
                    "__typename": "Patent"
                  }
                ],
                "patentsOwner": [],
                "__typename": "Entity"
              },
              "__typename": "_PatentApplicants"
            },
            {
              "position": 1,
              "entity": {
                "name": "UNIV HONG KONG",
                "patentsInventor": [],
                "patentsApplicant": [
                  {
                    "filing_key": "CN_2004000246_W_20040324",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_80780704_A_20040324",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_45226706_A_20060614",
                    "__typename": "Patent"
                  }
                ],
                "patentsOwner": [],
                "__typename": "Entity"
              },
              "__typename": "_PatentApplicants"
            }
          ],
          "titles": [
            {
              "position": 0,
              "title": {
                "_hash_id": "d31a58fbaa9f3c1eeea54f417570f4c7",
                "text": "HUMAN MONOCLONAL ANTIBODIES AGAINST THE MIDDLE EAST RESPIRATORY SYNDROME CORONAVIRUS (MERS-COV) AND ENGINEERED BISPECIFIC FUSIONS WITH INHIBITORY PEPTIDES",
                "fragments": [
                  {
                    "kind": "PatentTitle",
                    "text": "HUMAN MONOCLONAL ANTIBODIES AGAINST THE MIDDLE EAST RESPIRATORY SYNDROME CORONAVIRUS (MERS-COV) AND ENGINEERED BISPECIFIC FUSIONS WITH INHIBITORY PEPTIDES",
                    "next": null,
                    "geneSymbols": [],
                    "__typename": "FromPatentTitle"
                  }
                ],
                "__typename": "PatentTitle"
              },
              "__typename": "_PatentTitles"
            }
          ],
          "descriptions": [
            {
              "position": 0,
              "description": {
                "_hash_id": "8631eecb49c41011b60b7d700f8067fc",
                "fragments": [
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentDescription"
                  },
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentDescription"
                  },
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentDescription"
                  }
                ],
                "__typename": "PatentDescription"
              },
              "__typename": "_PatentDescriptions"
            }
          ],
          "claims": [
            {
              "position": 0,
              "claim": {
                "_hash_id": "1083baf023c64aeddc7ff9a6e98f9916",
                "fragments": [
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  },
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  },
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  }
                ],
                "__typename": "PatentClaim"
              },
              "__typename": "_PatentClaims"
            }
          ],
          "owner": [
            {
              "position": 5,
              "entity": {
                "name": "VERSITECH LIMITED",
                "__typename": "Entity"
              },
              "__typename": "_PatentOwner"
            },
            {
              "position": 3,
              "entity": {
                "name": "THE UNITED STATES OF AMERICA AS REPRESENTED BY THE SECRETARY DEPARTMENT OF HEALTH AND HUMAN SERVICES",
                "__typename": "Entity"
              },
              "__typename": "_PatentOwner"
            },
            {
              "position": 4,
              "entity": {
                "name": "THE UNIVERSITY OF HONG KONG",
                "__typename": "Entity"
              },
              "__typename": "_PatentOwner"
            }
          ],
          "__typename": "Patent"
        },
        {
          "filing_key": "US_201414375083_A_20140228",
          "filing_date": "2014-02-28",
          "jurisdiction": "US",
          "lens_id": "098-012-700-548-362",
          "lens_url": "https://lens.org/098-012-700-548-362",
          "pub_date": "2016-10-13",
          "pub_key": "US_2016_0296617_A1",
          "type": "Patent Application",
          "lensId": [
            {
              "id": "098-012-700-548-362",
              "familys": [
                {
                  "family_id": 51377169,
                  "size": 6,
                  "type": "simple",
                  "__typename": "PatentFamily"
                },
                {
                  "family_id": 5012061,
                  "size": 6,
                  "type": "extended",
                  "__typename": "PatentFamily"
                }
              ],
              "__typename": "LensID"
            }
          ],
          "number": [
            {
              "pub_key": "US_2016_0296617_A1",
              "citations": [
                {
                  "_hash_id": "70c06eafd1665f3598769c32c7951f3d",
                  "lens_id": "098-012-700-548-362",
                  "pub_key": "US_2016_0296617_A1",
                  "citations": [
                    {
                      "id": "14881cb0d5a2086affd9513856f97bef",
                      "__typename": "PatentCitationCollection"
                    },
                    {
                      "id": "027aa60679512fdfb2f371f597f2759f",
                      "__typename": "PatentCitationCollection"
                    },
                    {
                      "id": "7f7650226d3fc89e166471491ee81e3e",
                      "__typename": "PatentCitationCollection"
                    },
                    {
                      "id": "7b43ac67c0eceb1a4adce1593122d2d1",
                      "__typename": "PatentCitationCollection"
                    }
                  ],
                  "__typename": "PatentLiteratureCitation"
                }
              ],
              "__typename": "PatentNumber"
            }
          ],
          "classifications": [
            {
              "id": "113deec35d80d3be57ee906b5149923a",
              "cooperativePatentClassification": [],
              "internationalPatentClassification": [
                {
                  "position": 2,
                  "classification": {
                    "classification_ipc": "C12N7/00",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                },
                {
                  "position": 1,
                  "classification": {
                    "classification_ipc": "C07K14/005",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                },
                {
                  "position": 0,
                  "classification": {
                    "classification_ipc": "A61K39/215",
                    "__typename": "InternationalPatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionInternationalPatentClassification"
                }
              ],
              "usPatentClassification": [],
              "__typename": "PatentClassificationCollection"
            },
            {
              "id": "71f45c6b633e35a808a16f052cc023bf",
              "cooperativePatentClassification": [
                {
                  "position": 5,
                  "classification": {
                    "classification_cpc": "C07K14/005",
                    "__typename": "CooperativePatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionCooperativePatentClassification"
                },
                {
                  "position": 9,
                  "classification": {
                    "classification_cpc": "C12N7/00",
                    "__typename": "CooperativePatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionCooperativePatentClassification"
                },
                {
                  "position": 11,
                  "classification": {
                    "classification_cpc": "C12N2770/20022",
                    "__typename": "CooperativePatentClassification"
                  },
                  "__typename": "_PatentClassificationCollectionCooperativePatentClassification"
                }
              ],
              "internationalPatentClassification": [],
              "usPatentClassification": [],
              "__typename": "PatentClassificationCollection"
            }
          ],
          "citations": [
            {
              "id": "f19a0153706bad4a07c81d9b43f2f7f7",
              "patentLiteratureCitations": [],
              "nonPatentLiteratureCitations": [
                {
                  "position": 0,
                  "citation": {
                    "_hash_id": "b78be94fae3b916088b659fa6c6f7b92",
                    "__typename": "NonPatentLiteratureCitation"
                  },
                  "__typename": "_PatentCitationCollectionNonPatentLiteratureCitations"
                }
              ],
              "__typename": "PatentCitationCollection"
            }
          ],
          "abstracts": [
            {
              "position": 0,
              "abstract": {
                "_hash_id": "6b92a25dce998eca51ccb90b36abbbaa",
                "lang": "en",
                "text": "Described herein are immunogenic compositions for preventing infection with Middle East respiratory syndrome coronavirus (MERS-CoV) wherein the immunogenic compositions comprise at least a portion of the MERS-CoV S protein and an immunopotentiator.",
                "fragments": [
                  {
                    "kind": "PatentAbstract",
                    "sequence": 0,
                    "next": null,
                    "geneSymbols": [],
                    "__typename": "FromPatentAbstract"
                  }
                ],
                "__typename": "PatentAbstract"
              },
              "__typename": "_PatentAbstracts"
            }
          ],
          "inventors": [
            {
              "position": 0,
              "entity": {
                "name": "JIANG SHIBO",
                "patentsInventor": [
                  {
                    "filing_key": "CN_2014074045_W_20140325",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "CN_2019100060_W_20190809",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_10151641_A_20060208",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            },
            {
              "position": 2,
              "entity": {
                "name": "ZHOU YUSEN",
                "patentsInventor": [
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201716462125_A_20171117",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_2017_0062354_W_20171117",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            },
            {
              "position": 3,
              "entity": {
                "name": "ZHAO GUANGYU",
                "patentsInventor": [
                  {
                    "filing_key": "US_2014_0019402_W_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201414375083_A_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentInventors"
            }
          ],
          "applicants": [
            {
              "position": 0,
              "entity": {
                "name": "ZHOU YUSEN",
                "patentsInventor": [
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201716462125_A_20171117",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_2017_0062354_W_20171117",
                    "__typename": "Patent"
                  }
                ],
                "patentsApplicant": [
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_2014_0019402_W_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  }
                ],
                "patentsOwner": [],
                "__typename": "Entity"
              },
              "__typename": "_PatentApplicants"
            },
            {
              "position": 1,
              "entity": {
                "name": "ZHAO GUANGYU",
                "patentsInventor": [
                  {
                    "filing_key": "US_2014_0019402_W_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_201414375083_A_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  }
                ],
                "patentsApplicant": [
                  {
                    "filing_key": "US_2014_0019402_W_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_14757347_A_20140228",
                    "__typename": "Patent"
                  }
                ],
                "patentsOwner": [],
                "__typename": "Entity"
              },
              "__typename": "_PatentApplicants"
            },
            {
              "position": 2,
              "entity": {
                "name": "NEW YORK BLOOD CENTER INC",
                "patentsInventor": [],
                "patentsApplicant": [
                  {
                    "filing_key": "AU_2006_213775_A_20060208",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_2017_0062354_W_20171117",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "EP_17872582_A_20171117",
                    "__typename": "Patent"
                  }
                ],
                "patentsOwner": [
                  {
                    "filing_key": "US_40939909_A_20090323",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_70809510_A_20100218",
                    "__typename": "Patent"
                  },
                  {
                    "filing_key": "US_40939909_A_20090323",
                    "__typename": "Patent"
                  }
                ],
                "__typename": "Entity"
              },
              "__typename": "_PatentApplicants"
            }
          ],
          "titles": [
            {
              "position": 0,
              "title": {
                "_hash_id": "54f45dca661a579fb60b97d9137535ce",
                "text": "Immunogenic Composition for MERS Coronavirus Infection",
                "fragments": [
                  {
                    "kind": "PatentTitle",
                    "text": "Immunogenic Composition for MERS Coronavirus Infection",
                    "next": null,
                    "geneSymbols": [],
                    "__typename": "FromPatentTitle"
                  }
                ],
                "__typename": "PatentTitle"
              },
              "__typename": "_PatentTitles"
            }
          ],
          "descriptions": [
            {
              "position": 0,
              "description": {
                "_hash_id": "f002654fe0859686b374e3e508e0e658",
                "fragments": [
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentDescription"
                  },
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentDescription"
                  },
                  {
                    "kind": "PatentDescription",
                    "next": {
                      "kind": "PatentDescription",
                      "__typename": "FromPatentDescription"
                    },
                    "geneSymbols": [
                      {
                        "score": 2.6796329021453857,
                        "symbol": {
                          "sid": "IgA",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromPatentDescriptionGeneSymbols"
                      },
                      {
                        "score": 2.9251294136047363,
                        "symbol": {
                          "sid": "8B",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromPatentDescriptionGeneSymbols"
                      },
                      {
                        "score": 2.6796329021453857,
                        "symbol": {
                          "sid": "IGA",
                          "__typename": "GeneSymbol"
                        },
                        "__typename": "_FromPatentDescriptionGeneSymbols"
                      }
                    ],
                    "__typename": "FromPatentDescription"
                  }
                ],
                "__typename": "PatentDescription"
              },
              "__typename": "_PatentDescriptions"
            }
          ],
          "claims": [
            {
              "position": 0,
              "claim": {
                "_hash_id": "aba1db1adfa1774d653838f82809938e",
                "fragments": [
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  },
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  },
                  {
                    "kind": "PatentClaim",
                    "next": {
                      "kind": "PatentClaim",
                      "__typename": "FromPatentClaim"
                    },
                    "geneSymbols": [],
                    "__typename": "FromPatentClaim"
                  }
                ],
                "__typename": "PatentClaim"
              },
              "__typename": "_PatentClaims"
            }
          ],
          "owner": [
            {
              "position": 3,
              "entity": {
                "name": "NEW YORK BLOOD CENTER INC",
                "__typename": "Entity"
              },
              "__typename": "_PatentOwner"
            }
          ],
          "__typename": "Patent"
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
