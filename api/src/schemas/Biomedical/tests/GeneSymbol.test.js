import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('GeneSymbol', async t => {
  t.plan(1);
  const query = gql`
    query {
      GeneSymbol(first: 10, filter: {
        synonymsLengthOmitted_not: null
      }) {
        sid
        status
        taxid
        synonyms {
          synonymOf(first: 3) {
            source
            GeneSymbol {
              sid
            }
          }
          synonym(first: 3) {
            source
            GeneSymbol {
              sid
            }
          }
        }
        synonymsSpecialCharOmitted(first: 3) {
          source
          synonymOf {
            sid
            status
            taxid
          }
        }
        synonymsLengthOmitted(first: 3) {
          source
          synonymOf {
            sid
            status
            taxid
          }
        }
        synonymsWordOmitted(first: 3) {
          source
          synonymOf {
            sid
            status
            taxid
          }
        }
      }
    }
`;
  const expected = {
    "data": {
      "GeneSymbol": [
        {
          "sid": "CDSN",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "PSS1",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "PSS",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "HTSS",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "S",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "FUT1",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "HH",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "HSC",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "H",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "H",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "OCA2",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "BEY",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "PED",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "D15S12",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "P",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "BEY",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitWord"
              },
              "__typename": "_GeneSymbolSynonymsWordOmitted"
            },
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "BOCA",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitWord"
              },
              "__typename": "_GeneSymbolSynonymsWordOmitted"
            }
          ],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "PPIB",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "CYP-S1",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "CYPB",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "SCYLP",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "B",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "PSMB5",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "MB1",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "X",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "LMPX",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "X",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "PSMB6",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "DELTA",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "LMPY",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "Y",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "Y",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "DELTA",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitWord"
              },
              "__typename": "_GeneSymbolSynonymsWordOmitted"
            }
          ],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "PSMB7",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "Z",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "Z",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "TBXT",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "TFT",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "SAVA",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "T",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "T",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [],
          "__typename": "GeneSymbol"
        },
        {
          "sid": "B3GALNT1",
          "status": null,
          "taxid": "9606",
          "synonyms": {
            "synonymOf": [
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "B3GALT3",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "beta3Gal-T3",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              },
              {
                "source": "ncbigene",
                "GeneSymbol": {
                  "sid": "P1",
                  "__typename": "GeneSymbol"
                },
                "__typename": "_GeneSymbolSynonyms"
              }
            ],
            "synonym": [],
            "__typename": "_GeneSymbolSynonymsDirections"
          },
          "synonymsSpecialCharOmitted": [],
          "synonymsLengthOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "P",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitLength"
              },
              "__typename": "_GeneSymbolSynonymsLengthOmitted"
            }
          ],
          "synonymsWordOmitted": [
            {
              "source": "ncbigene",
              "synonymOf": {
                "sid": "GLOB",
                "status": "synonym",
                "taxid": "9606",
                "__typename": "OmitWord"
              },
              "__typename": "_GeneSymbolSynonymsWordOmitted"
            }
          ],
          "__typename": "GeneSymbol"
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
