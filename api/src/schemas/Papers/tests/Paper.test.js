import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('Paper', async t => {
  t.plan(1);
  const query = gql`
    query {
      Paper(first: 3) {
        _hash_id
        cord_uid
        journal
        publish_time
        source
        title
        url
        authorCollection(first: 3) {
          id
          authors(first: 3) {
            position
            author {
              _hash_id
              email
              __typename
            }
            __typename
          }
          __typename
        }
        abstractCollection(first: 3) {
          id
          abstracts(first: 3) {
            position
            abstract {
              _hash_id
              section
              fragments {
                text
                sequence
                kind
                next {
                  kind
                  __typename
                }
                mentionsGeneSymbols(first: 3) {
                  score
                  geneSymbol {
                    sid
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        referenceCollection(first: 3) {
          id
          references(first: 3) {
            position
            reference {
              _hash_id
              name
              __typename
            }
            __typename
          }
          __typename
        }
        bodyTextCollection(first: 3) {
          id
          bodyTexts(first: 3) {
            position
            bodyText {
              _hash_id
              section
              fragments {
                text
                sequence
                kind
                next {
                  kind
                  __typename
                }
                mentionsGeneSymbols(first: 3) {
                  score
                  geneSymbol {
                    sid
                    __typename
                  }
                  __typename
                }
                __typename
              }
              __typename
            }
            __typename
          }
          __typename
        }
        paperId(first: 3) {
          position
          id {
            id
            type
            __typename
          }
          __typename
        }
        __typename
      }
    }
  `;
  const expected = {
    "data": {
      "Paper": [
        {
          "_hash_id": "84b069ab23fb0ecebe6925af9c2b18ae",
          "cord_uid": "ocp6yodg",
          "journal": "BMC Infect Dis",
          "publish_time": "2011-12-28",
          "source": "PMC",
          "title": "Timeliness of contact tracing among flight passengers for influenza A/H1N1 2009",
          "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3265549/",
          "authorCollection": [
            {
              "id": "5c7ca2368972834265ab652305e2cba4",
              "authors": [
                {
                  "position": 1,
                  "author": {
                    "_hash_id": "d9dd38fabf963cf2d01ad168cee5c1ac",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 3,
                  "author": {
                    "_hash_id": "6db646159bcf9275e510eb2375cc7342",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 2,
                  "author": {
                    "_hash_id": "75ab0e3bebdfdaa895331b24eac15fe0",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                }
              ],
              "__typename": "AuthorCollection"
            },
            {
              "id": "774b16de62379f2eb9cd2e5f948069f1",
              "authors": [
                {
                  "position": 2,
                  "author": {
                    "_hash_id": "c3ccd184ad3c4c8a88a20ae86ed00d18",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 1,
                  "author": {
                    "_hash_id": "b60990dfc94b8b78b3b924f8e59fe2fd",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 0,
                  "author": {
                    "_hash_id": "e60ce2b1c10f62e09a4120ef2f9e8260",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                }
              ],
              "__typename": "AuthorCollection"
            }
          ],
          "abstractCollection": [
            {
              "id": "f1200e665e72a67c2bc7a0e88d995ee6",
              "abstracts": [
                {
                  "position": 0,
                  "abstract": {
                    "_hash_id": "16a7fd8202b55889224747731cd2b718",
                    "section": null,
                    "fragments": [
                      {
                        "text": "In a retrospective study, dates of flight arrival, onset of illness, laboratory diagnosis, CT request and identification of contacts details through passenger lists, following CT requests to the RIVM for flights landed at Schiphol Airport were collected and analyzed",
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
                        "text": "Three of these were declined as over 4 days had elapsed since flight arrival",
                        "sequence": 6,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "BACKGROUND: During the initial containment phase of influenza A/H1N1 2009, close contacts of cases were traced to provide antiviral prophylaxis within 48 h after exposure and to alert them on signs of disease for early diagnosis and treatment",
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
                        "text": "CT had little additional value for alerting passengers for disease symptoms, as this information already was provided during and after the flight",
                        "sequence": 14,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "CI involving Dutch airlines was faster than non-Dutch airlines (P < 0,05)",
                        "sequence": 10,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 2.5029473304748535,
                            "geneSymbol": {
                              "sid": "CI",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "In 17 out of 21 requests, contact details were obtained within 7 days after arrival (81%)",
                        "sequence": 7,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "Passenger locator cards did not improve timeliness of CI",
                        "sequence": 11,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 3.0035369396209717,
                            "geneSymbol": {
                              "sid": "CI",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "In four flights (19%), contacts were not identified or only after > 7 days",
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
                        "text": "METHODS: Elapsed days between date of flight arrival and the date passenger lists became available (contact details identified - CI) was used as proxy for timeliness of CT",
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
                        "text": "Public health authorities should take into account patient delays in seeking medical advise and laboratory confirmation in relation to maximum time to provide postexposure prophylaxis when deciding to install contact tracing measures",
                        "sequence": 15,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "The average delay between arrival and CI was 3,9 days (range 2-7), mainly caused by delay in diagnosis of the index patient after arrival (2,6 days)",
                        "sequence": 8,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 1.752063274383545,
                            "geneSymbol": {
                              "sid": "CI",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "This study evaluates the timeliness of flight-contact tracing (CT) as performed following national and international CT requests addressed to the Center of Infectious Disease Control (CIb/RIVM), and implemented by the Municipal Health Services of Schiphol Airport",
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
                        "text": "Passengers seated on the same row, two rows in front or behind a patient infectious for influenza, during a flight of ≥ 4 h were considered close contacts",
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
                        "text": "RESULTS: 24 requests for CT were identified",
                        "sequence": 5,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "International standardization of CT guidelines is recommended.",
                        "sequence": 16,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "CONCLUSION: CT for influenza A/H1N1 2009 among flight passengers was not successful for timely provision of prophylaxis",
                        "sequence": 13,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "In only three flights contact details were identified within 2 days after arrival",
                        "sequence": 12,
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
                  "__typename": "_AbstractCollectionAbstracts"
                }
              ],
              "__typename": "AbstractCollection"
            },
            {
              "id": "f0aa7742531e76aa0e9b8bb728524206",
              "abstracts": [
                {
                  "position": 1,
                  "abstract": {
                    "_hash_id": "1cfafd171e7bf9f345e8478f33e9c807",
                    "section": "Abstract",
                    "fragments": [
                      {
                        "text": "In four flights (19%), contacts were not identified or only after > 7 days",
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
                        "text": "The average delay between arrival and CI was 3,9 days (range 2-7), mainly caused by delay in diagnosis of the index patient after arrival (2,6 days)",
                        "sequence": 3,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 1.752063274383545,
                            "geneSymbol": {
                              "sid": "CI",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "Passenger locator cards did not improve timeliness of CI",
                        "sequence": 6,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 3.0035369396209717,
                            "geneSymbol": {
                              "sid": "CI",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "In 17 out of 21 requests, contact details were obtained within 7 days after arrival (81%)",
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
                        "text": "CT had little additional value for alerting passengers for disease symptoms, as this information already was provided during and after the flight",
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
                        "text": "International standardization of CT guidelines is recommended.",
                        "sequence": 11,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "Conclusion: CT for influenza A/H1N1 2009 among flight passengers was not successful for timely provision of prophylaxis",
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
                        "text": "Public health authorities should take into account patient delays in seeking medical advise and laboratory confirmation in relation to maximum time to provide postexposure prophylaxis when deciding to install contact tracing measures",
                        "sequence": 10,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "Three of these were declined as over 4 days had elapsed since flight arrival",
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
                        "text": "In only three flights contact details were identified within 2 days after arrival",
                        "sequence": 7,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "CI involving Dutch airlines was faster than non-Dutch airlines (P < 0,05)",
                        "sequence": 5,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 2.5029473304748535,
                            "geneSymbol": {
                              "sid": "CI",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "Results: 24 requests for CT were identified",
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
                  "__typename": "_AbstractCollectionAbstracts"
                },
                {
                  "position": 0,
                  "abstract": {
                    "_hash_id": "bb226cc2962db10fb71684cc40988d6d",
                    "section": "Abstract",
                    "fragments": [
                      {
                        "text": "Background: During the initial containment phase of influenza A/H1N1 2009, close contacts of cases were traced to provide antiviral prophylaxis within 48 h after exposure and to alert them on signs of disease for early diagnosis and treatment",
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
                        "text": "Passengers seated on the same row, two rows in front or behind a patient infectious for influenza, during a flight of ≥ 4 h were considered close contacts",
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
                        "text": "In a retrospective study, dates of flight arrival, onset of illness, laboratory diagnosis, CT request and identification of contacts details through passenger lists, following CT requests to the RIVM for flights landed at Schiphol Airport were collected and analyzed.",
                        "sequence": 4,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "Methods: Elapsed days between date of flight arrival and the date passenger lists became available (contact details identified -CI) was used as proxy for timeliness of CT",
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
                        "text": "This study evaluates the timeliness of flight-contact tracing (CT) as performed following national and international CT requests addressed to the Center of Infectious Disease Control (CIb/RIVM), and implemented by the Municipal Health Services of Schiphol Airport",
                        "sequence": 2,
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
                  "__typename": "_AbstractCollectionAbstracts"
                }
              ],
              "__typename": "AbstractCollection"
            }
          ],
          "referenceCollection": [
            {
              "id": "b8de1a8e1246a4aade056512c0d769f1",
              "references": [
                {
                  "position": 152,
                  "reference": {
                    "_hash_id": "9a63b1fe6b882f11642aed14b561c1c7",
                    "name": "BIBREF16",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                },
                {
                  "position": 215,
                  "reference": {
                    "_hash_id": "7fa711fed949684e56ede918a87b1e4f",
                    "name": "BIBREF24",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                },
                {
                  "position": 89,
                  "reference": {
                    "_hash_id": "fad88c0e30ae45af1ab823a7200cbfa1",
                    "name": "BIBREF9",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                }
              ],
              "__typename": "ReferenceCollection"
            }
          ],
          "bodyTextCollection": [
            {
              "id": "5843eb33c8cc4f832de30d8410c6df13",
              "bodyTexts": [
                {
                  "position": 3,
                  "bodyText": {
                    "_hash_id": "c045adbdc523642132dbf7e5c8b8ba31",
                    "section": "Background",
                    "fragments": [
                      {
                        "text": "Its Municipal Health Services (MHS, GGD Kennemerland) and the Center for Infectious disease Control (CIb-RIVM) frequently experienced that, despite all efforts, the time period elapsing from exposure to administration of the first oseltamivir dose exceeded the required 48 h",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Acquiring contact details from airlines was time consuming, and contact details on passenger lists were often minimal, so that contacts were difficult to trace",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Schiphol Airport is the only airport in the Netherlands where trans-Atlantic flights arrive",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "In this study, we assess the time delay in contact tracing of flight passengers for influenza A/H1N1 2009 as performed in the Netherlands during the initial phase of the pandemic",
                        "sequence": 3,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Our data show that despite all efforts the effectiveness of this control measure in daily practice is minimal.",
                        "sequence": 4,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                },
                {
                  "position": 18,
                  "bodyText": {
                    "_hash_id": "220b5f09b01e4205d800208215dc7190",
                    "section": "Discussion and Conclusions",
                    "fragments": [
                      {
                        "text": "Dutch companies were easier to convince by Dutch health authorities to hand over passenger details",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Collecting passenger details from foreign airlines also caused considerable delay because of differences in time zones and the need to convince the concerned airline companies about the urgency to collect and hand-over passenger lists with contact details",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Our data show that contact details that were identified too late or not at all, indeed more often originated from non-Dutch than from Dutch airline companies",
                        "sequence": 3,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "An internationally standardized contact tracing protocol, communicated with the International Civil Aviation Organization (ICAO) and International Air Transport Association (IATA), would facilitate the timeliness, and therefore effectiveness of contact tracing.",
                        "sequence": 4,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Sometimes official request letters were necessary for legal reasons to release personal contact details",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                },
                {
                  "position": 14,
                  "bodyText": {
                    "_hash_id": "ace75cc7bf82e95b45b2a449244c9bb7",
                    "section": "Discussion and Conclusions",
                    "fragments": [
                      {
                        "text": "Posters with this information were placed in passenger halls, to inform passengers arriving indirectly from Mexico via transit through other airports, or arriving from non-endemic areas with higher transmission (e.g",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Regarding the awareness of ILI symptoms, Schiphol Airport handed all passengers on flights arriving from Mexico information leaflets on influenza A/H1N1 2009 with information on early symptoms and requesting them to seek medical advice in case of fever and respiratory symptoms such as coughing",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "As contact details were identified on average 3.9 days after exposure, however not contacted yet, we conclude that CT did not have additional value for timely achievement of increased awareness.",
                        "sequence": 3,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "USA)",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                }
              ],
              "__typename": "BodyTextCollection"
            }
          ],
          "paperId": [
            {
              "position": 0,
              "id": {
                "id": "10.1186/1471-2334-11-355",
                "type": "DOI",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            },
            {
              "position": 1,
              "id": {
                "id": "PMC3265549",
                "type": "Pmcid",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            },
            {
              "position": 2,
              "id": {
                "id": "22204494",
                "type": "pubmed_id",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            }
          ],
          "__typename": "Paper"
        },
        {
          "_hash_id": "4d7fa57fae375ed4ceb4b2c6568d8db7",
          "cord_uid": "ruba65p5",
          "journal": "The Journal of Infectious Diseases",
          "publish_time": "2011-12-23",
          "source": "PMC",
          "title": "Validation of Self-swab for Virologic Confirmation of Influenza Virus Infections in a Community Setting",
          "url": "https://academic.oup.com/jid/article-pdf/205/4/631/18066972/jir803.pdf",
          "authorCollection": [
            {
              "id": "813f711e3ac5f5dd4464b00b20da553c",
              "authors": [
                {
                  "position": 0,
                  "author": {
                    "_hash_id": "a7ba15182340931b199c60363d577e86",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 6,
                  "author": {
                    "_hash_id": "0d72f82845a1a5456a0459c5ba5b2a66",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 5,
                  "author": {
                    "_hash_id": "c35fbfb0d0e0763d6d667082892e5b1d",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                }
              ],
              "__typename": "AuthorCollection"
            },
            {
              "id": "24504f11506c158e52a8115ae56043c3",
              "authors": [
                {
                  "position": 4,
                  "author": {
                    "_hash_id": "ce5d1bde1338af01f79195f6f353cd5d",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 6,
                  "author": {
                    "_hash_id": "db50c3f09938f827681f7c8a26f8f7a4",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 3,
                  "author": {
                    "_hash_id": "b952a1ce8de27c90ade2d8ab7d998997",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                }
              ],
              "__typename": "AuthorCollection"
            }
          ],
          "abstractCollection": [
            {
              "id": "21ff0ce5ba755b34f2cb3e80e22a5d2b",
              "abstracts": [
                {
                  "position": 0,
                  "abstract": {
                    "_hash_id": "fe088b3ea202814ab97d46c82f28d95d",
                    "section": null,
                    "fragments": [
                      {
                        "text": "We followed outpatients with confirmed influenza with sequential measurement of viral loads and applied log-linear regression models to the viral shedding patterns",
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
                        "text": "Few studies have investigated the validity of self-collected nose and throat swabs for influenza confirmation in community settings",
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
                        "text": "Among 176 outpatients with confirmed influenza, the detection of virus and quantitative viral loads obtained from self-swabs was consistent with statistical predictions based on earlier and later measurements, suggesting that self-collected nose and throat swabs can be a valid alternative for virologic confirmation of influenza A or B infection in a community setting.",
                        "sequence": 2,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      }
                    ],
                    "__typename": "Abstract"
                  },
                  "__typename": "_AbstractCollectionAbstracts"
                }
              ],
              "__typename": "AbstractCollection"
            },
            {
              "id": "0bae905bcb5aa5d7a59ad5c42d022a14",
              "abstracts": [
                {
                  "position": 3,
                  "abstract": {
                    "_hash_id": "ba9fe6e30733f06f516c41f53b6b6fea",
                    "section": "Abstract",
                    "fragments": [
                      {
                        "text": "In both studies, outpatients with recent-onset acute respiratory illness who presented within 48 hours of symptom onset were recruited; of individuals who provided informed consent, those with a positive result on a QuickVue Influenza A1B rapid diagnostic test (Quidel Corp) were invited to continue with follow-up",
                        "sequence": 1,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 2.458728790283203,
                            "geneSymbol": {
                              "sid": "A1B",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "In a separate household transmission study (HTS), eligible patients were recruited between 9 January 2008 and 29 September 2008 and followed up as part of a study investigating the effectiveness of nonpharmacological interventions [1].",
                        "sequence": 3,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "We conducted 2 separate community-based studies of influenza virus infection in Hong Kong with broadly similar protocols for recruitment and follow-up",
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
                        "text": "In one prospective, multicenter study (Influenza Resistance Information Study [IRIS]), patients recruited between 20 January 2010 and 24 November 2010 were followed up to examine natural prevalence and/or emergence of resistance to antivirals among circulating influenza virus strains",
                        "sequence": 2,
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
                  "__typename": "_AbstractCollectionAbstracts"
                },
                {
                  "position": 4,
                  "abstract": {
                    "_hash_id": "8d9303144d88e3db18de168b6ac5b8d1",
                    "section": "Abstract",
                    "fragments": [
                      {
                        "text": "During the clinic visits, the nasal swab was collected by inserting and rotating a separate flocked sterile swab (Copan) through each nostril into the posterior nares, and throat swabs were collected by swabbing a sterile flocked swab on both the tonsillar fossae and posterior pharynx",
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
                        "text": "In the IRIS, NTSs were collected by a trained HCP on days 1 and 6 after recruitment in the outpatient clinic and self-collected by subjects at home on day 3 after receiving detailed instruction on swab technique from the HCP at baseline",
                        "sequence": 0,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 3.067747116088867,
                            "geneSymbol": {
                              "sid": "HCP",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromAbstractMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "The flocked end of the 2 nasal swabs and the throat swab were then transferred to a vial containing Copan Universal Transport Medium by breaking the prescored breaking point of the plastic swab shaft",
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
                        "text": "Specimens collected in the clinic on day 1 and day 6 were stored directly in a clinic refrigerator at 4°C-8°C after collection.",
                        "sequence": 3,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      }
                    ],
                    "__typename": "Abstract"
                  },
                  "__typename": "_AbstractCollectionAbstracts"
                },
                {
                  "position": 1,
                  "abstract": {
                    "_hash_id": "341212480cc0c54af134e6bffdb30012",
                    "section": "Abstract",
                    "fragments": [
                      {
                        "text": "Based on 2 similarly designed community-based studies, we modeled the viral shedding patterns from illness onset, adjusting for delays between clinical symptom onset and specimen collection, and compared the quantitative viral load measurements in self-swabs with model-based predictions.",
                        "sequence": 3,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "In community-based studies of acute respiratory illnesses, clinical specimens from the upper respiratory tract may be collected from patients at different stages of disease for virological testing",
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
                        "text": "We investigated whether self-collected nose and throat swabs (NTSs) from patients in a community setting could provide a valid alternative for virologic confirmation of influenza A or B virus infection",
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
                        "text": "Although those clinical specimens are typically collected by trained healthcare professionals (HCPs) in a clinic setting, selfcollection by the patient at home may be a more acceptable, economical, and logistically feasible alternative",
                        "sequence": 1,
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
                  "__typename": "_AbstractCollectionAbstracts"
                }
              ],
              "__typename": "AbstractCollection"
            }
          ],
          "referenceCollection": [
            {
              "id": "82bbe7a8bc2b91021cdeb6c37c4ebbc8",
              "references": [
                {
                  "position": 89,
                  "reference": {
                    "_hash_id": "4dcdab7a98b1c925be00ef42a6f3e573",
                    "name": "BIBREF9",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                },
                {
                  "position": 71,
                  "reference": {
                    "_hash_id": "ea929a1ff45f647bb28052081f9dd0a8",
                    "name": "BIBREF7",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                },
                {
                  "position": 26,
                  "reference": {
                    "_hash_id": "3b78a905b5604f640b6623546d70ebc1",
                    "name": "BIBREF2",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                }
              ],
              "__typename": "ReferenceCollection"
            }
          ],
          "bodyTextCollection": [
            {
              "id": "dc9e84f6bb709bf443a12587c5853f4a",
              "bodyTexts": [
                {
                  "position": 1,
                  "bodyText": {
                    "_hash_id": "341212480cc0c54af134e6bffdb30012",
                    "section": "",
                    "fragments": [
                      {
                        "text": "Based on 2 similarly designed community-based studies, we modeled the viral shedding patterns from illness onset, adjusting for delays between clinical symptom onset and specimen collection, and compared the quantitative viral load measurements in self-swabs with model-based predictions.",
                        "sequence": 3,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "In community-based studies of acute respiratory illnesses, clinical specimens from the upper respiratory tract may be collected from patients at different stages of disease for virological testing",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Although those clinical specimens are typically collected by trained healthcare professionals (HCPs) in a clinic setting, selfcollection by the patient at home may be a more acceptable, economical, and logistically feasible alternative",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "We investigated whether self-collected nose and throat swabs (NTSs) from patients in a community setting could provide a valid alternative for virologic confirmation of influenza A or B virus infection",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                },
                {
                  "position": 8,
                  "bodyText": {
                    "_hash_id": "36a122e01aefe9df160967275f3202f5",
                    "section": "Statistical Analysis",
                    "fragments": [
                      {
                        "text": "Interaction terms with time were included to allow the slope of the regression line to vary by age and oseltamivir treatment",
                        "sequence": 3,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "We fitted separate models for each study and for influenza A and B and adjusted for age and oseltamivir treatment",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "This random-effects regression model constructed using the first and third measurement was used to predict viral loads expected on the second measurement (typically 3 days after recruitment), which were then compared with the observed viral loads on the second swabs, which were collected by the patients in IRIS and by an HCP in the HTS",
                        "sequence": 5,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 1.698778748512268,
                            "geneSymbol": {
                              "sid": "HTS",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromBodyTextMentionsGeneSymbols"
                          },
                          {
                            "score": 1.8076874017715454,
                            "geneSymbol": {
                              "sid": "HCP",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromBodyTextMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Previous studies have suggested that following influenza virus infection, viral load rises to a peak around the time of illness onset and then, for influenza A, declines approximately log-linearly over the subsequent 5210 days to undetectable levels and, for influenza B, plateaus with a more gradual decline [6, 7] ",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "We specified multivariable linear regression models for the log viral load on the first and third measurement (typically 0 and 7 days, respectively, after recruitment), with the same slope but separate intercepts for each individual to allow for between-person variability in peak viral loads",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Viral loads for specimens with measured load below the lower limit of quantification (LLOQ) were imputed as half the LLOQ",
                        "sequence": 4,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "We calculated mean differences with 95% confidence intervals (CIs) based on the t distribution.",
                        "sequence": 6,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                },
                {
                  "position": 0,
                  "bodyText": {
                    "_hash_id": "d2923acc7f3f93ad284bcfa4afed1aaa",
                    "section": "",
                    "fragments": [
                      {
                        "text": "Few studies have investigated the validity of self-collected nose and throat swabs for influenza confirmation in community settings",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "We followed outpatients with confirmed influenza with sequential measurement of viral loads and applied loglinear regression models to the viral shedding patterns",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Among 176 outpatients with confirmed influenza, the detection of virus and quantitative viral loads obtained from self-swabs was consistent with statistical predictions based on earlier and later measurements, suggesting that selfcollected nose and throat swabs can be a valid alternative for virologic confirmation of influenza A or B infection in a community setting.",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                }
              ],
              "__typename": "BodyTextCollection"
            }
          ],
          "paperId": [
            {
              "position": 1,
              "id": {
                "id": "PMC3266138",
                "type": "Pmcid",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            },
            {
              "position": 2,
              "id": {
                "id": "22198963",
                "type": "pubmed_id",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            },
            {
              "position": 0,
              "id": {
                "id": "10.1093/infdis/jir803",
                "type": "DOI",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            }
          ],
          "__typename": "Paper"
        },
        {
          "_hash_id": "e9eed06b4e4a82c2d10fb7d555ded0dc",
          "cord_uid": "735b7rpv",
          "journal": "Clin Rev Allergy Immunol",
          "publish_time": "2011-11-19",
          "source": "PMC",
          "title": "Molecular Mimicry as a Mechanism of Autoimmune Disease",
          "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3266166/",
          "authorCollection": [
            {
              "id": "907ffd8db15dfb4ac3bd61600232d2fc",
              "authors": [
                {
                  "position": 0,
                  "author": {
                    "_hash_id": "0ea27e4c5a457a77aa1be6f892c2d933",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 2,
                  "author": {
                    "_hash_id": "9faed0a867b851c14ba66dc2b53311e3",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 1,
                  "author": {
                    "_hash_id": "da21f138243a5b25f546521175709a50",
                    "email": null,
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                }
              ],
              "__typename": "AuthorCollection"
            },
            {
              "id": "8cf4af7196a592b0f4ca264e3d1134ce",
              "authors": [
                {
                  "position": 2,
                  "author": {
                    "_hash_id": "ace890f4d7361b98dad8a13e6d8082ea",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 0,
                  "author": {
                    "_hash_id": "3cd8c9a4f5c77193af34618f4d5b484f",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                },
                {
                  "position": 1,
                  "author": {
                    "_hash_id": "0877fb53f7357bbd5de8b24526e35476",
                    "email": "",
                    "__typename": "Author"
                  },
                  "__typename": "_AuthorCollectionAuthors"
                }
              ],
              "__typename": "AuthorCollection"
            }
          ],
          "abstractCollection": [
            {
              "id": "030333fab4ab4e7bfe9b3cbaca1b5906",
              "abstracts": [
                {
                  "position": 0,
                  "abstract": {
                    "_hash_id": "53c000ec659f6e5f9189b4e01e1deb94",
                    "section": null,
                    "fragments": [
                      {
                        "text": "However, structural relatedness between pathogen and self does not account for T cell activation in a number of autoimmune diseases",
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
                        "text": "Finally, we discuss three mechanisms, including molecular mimicry, dual TCRs, and chimeric TCRs, by which dual reactivity of the T cell may play a role in autoimmune diseases.",
                        "sequence": 7,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "These T cells have dual reactivity to both foreign and self-antigens leaving the host vulnerable to foreign insults capable of triggering an autoimmune response",
                        "sequence": 5,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "A proposed mechanism that could have been misinterpreted for molecular mimicry is the expression of dual T cell receptors (TCR) on a single T cell",
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
                        "text": "In this review, we briefly discuss what is known about molecular mimicry followed by a discussion of the current understanding of dual TCRs",
                        "sequence": 6,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "Molecular mimicry has typically been characterized on an antibody or T cell level",
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
                        "text": "One mechanism is molecular mimicry, where a foreign antigen shares sequence or structural similarities with self-antigens",
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
                        "text": "A variety of mechanisms have been suggested as the means by which infections can initiate and/or exacerbate autoimmune diseases",
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
                  "__typename": "_AbstractCollectionAbstracts"
                }
              ],
              "__typename": "AbstractCollection"
            },
            {
              "id": "4f96ce437a0a4c87d81f60127e99a62d",
              "abstracts": [
                {
                  "position": 0,
                  "abstract": {
                    "_hash_id": "e154e55e5970a2b611f0a4b9c0e279ea",
                    "section": "Abstract",
                    "fragments": [
                      {
                        "text": "One mechanism is molecular mimicry, where a foreign antigen shares sequence or structural similarities with self-antigens",
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
                        "text": "A variety of mechanisms have been suggested as the means by which infections can initiate and/or exacerbate autoimmune diseases",
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
                        "text": "Finally, we discuss three mechanisms, including molecular mimicry, dual TCRs, and chimeric TCRs, by which dual reactivity of the T cell may play a role in autoimmune diseases.",
                        "sequence": 7,
                        "kind": "Abstract",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "In this review, we briefly discuss what is known about molecular mimicry followed by a discussion of the current understanding of dual TCRs",
                        "sequence": 6,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "A proposed mechanism that could have been misinterpreted for molecular mimicry is the expression of dual T cell receptors (TCR) on a single T cell",
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
                        "text": "Molecular mimicry has typically been characterized on an antibody or T cell level",
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
                        "text": "These T cells have dual reactivity to both foreign and selfantigens leaving the host vulnerable to foreign insults capable of triggering an autoimmune response",
                        "sequence": 5,
                        "kind": "Abstract",
                        "next": {
                          "kind": "Abstract",
                          "__typename": "FromAbstract"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromAbstract"
                      },
                      {
                        "text": "However, structural relatedness between pathogen and self does not account for T cell activation in a number of autoimmune diseases",
                        "sequence": 3,
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
                  "__typename": "_AbstractCollectionAbstracts"
                }
              ],
              "__typename": "AbstractCollection"
            }
          ],
          "referenceCollection": [
            {
              "id": "b769d8aaa925da9a817105748c00e0f9",
              "references": [
                {
                  "position": 485,
                  "reference": {
                    "_hash_id": "a8136561326adf2123c138ecd351c706",
                    "name": "BIBREF53",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                },
                {
                  "position": 566,
                  "reference": {
                    "_hash_id": "11c13c2767284cc2d165efff8c1a66a7",
                    "name": "BIBREF62",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                },
                {
                  "position": 575,
                  "reference": {
                    "_hash_id": "d275ba82f9d122de3fed98b9eb000d58",
                    "name": "BIBREF63",
                    "__typename": "Reference"
                  },
                  "__typename": "_ReferenceCollectionReferences"
                }
              ],
              "__typename": "ReferenceCollection"
            }
          ],
          "bodyTextCollection": [
            {
              "id": "8cd332e85af93810a31a32865919269c",
              "bodyTexts": [
                {
                  "position": 8,
                  "bodyText": {
                    "_hash_id": "4b960bf04aba17c2fd226ad175eba886",
                    "section": "Dual TCR and How This Impacts Our Interpretation of Molecular Mimicry",
                    "fragments": [
                      {
                        "text": "The use of TCR-tg mice has led to the identification of a potential role for dual TCRs in a variety of conditions including graft-versus-host disease, human immunodeficiency virus infection, inflammatory bowel disease, T cell leukemia, T cell lymphoma, and MS [55-61].",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Due to the heterogeneity of TCRs normally expressed in the periphery of humans and mice, TCR-tg mice have been used to track and determine the fate of T cells expressing dual TCRs",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                },
                {
                  "position": 4,
                  "bodyText": {
                    "_hash_id": "3b87f8c9258d80b1ab6b93ff92203cdf",
                    "section": "Brief History of Molecular Mimicry",
                    "fragments": [
                      {
                        "text": "Further, rabbits sensitized with the HBVP peptide developed central nervous system (CNS) pathology similar to rabbits sensitized with whole MBP protein or the MBP peptide [16] ",
                        "sequence": 6,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 3.275160551071167,
                            "geneSymbol": {
                              "sid": "MBP",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromBodyTextMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Further work by Fujinami and Oldstone used myelin basic protein (MBP), a nerve sheath protein containing an encephalitogenic T cell epitope in rabbits",
                        "sequence": 4,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Initial work by Fujinami, Oldstone, and colleagues identified mouse antibodies to measles virus and herpes simplex virus (HSV-1) obtained from antibody-secreting B cell clones [18] ",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "The hepatitis B virus polymerase (HBVP) protein was found through computer analysis to share six consecutive amino acids with the encephalitogenic MBP epitope [16] , and when rabbits were sensitized with either MBP or HBV peptides, the rabbit's tissue serum reacted against MBP",
                        "sequence": 5,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 2.865168809890747,
                            "geneSymbol": {
                              "sid": "MBP",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromBodyTextMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Importantly, the rabbits sensitized with HBVP did not contract hepatitis but still developed encephalomyelitis and presented with a similar pathology as MBPsensitized mice",
                        "sequence": 7,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "These antibodies were reactive to both intermediate filaments of normal cells and the proteins of measles virus and HSV-1, [114, 115] , reviewed in [116] thereby demonstrating a relatedness between host and viral antigens [18] ",
                        "sequence": 3,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Currently, molecular mimicry is the prevailing hypothesis as to how viral antigens initiate and maintain autoimmune responses which lead to specific tissue damage [18] ",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "Over 30 years ago, molecular mimicry by either a virus [18] or bacteria [23] was hypothesized to initiate and exacerbate an autoimmune response through sequence or structural similarities with self-antigens",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "These experiments were the first experimental demonstration of molecular mimicry, whereby a microbial peptide with similar amino acid sequences to the self-peptide was able to activate autoreactive T cells and subsequently cause specific tissue damage.",
                        "sequence": 8,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                },
                {
                  "position": 6,
                  "bodyText": {
                    "_hash_id": "1ee0a8620d585f861dfda8495df02891",
                    "section": "Relationship Between Molecular Mimicry and Autoimmune Diseases",
                    "fragments": [
                      {
                        "text": "The use of transgenic (tg) mice expressing virus proteins as transgenes in specific organs has been an important model for providing evidence for molecular mimicry",
                        "sequence": 0,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "These results demonstrated that \"self\"-reactive T cells are present in the periphery and the immune cells appear to remain quiescent until an appropriate signal (viral infection) triggers the T cells to respond.",
                        "sequence": 2,
                        "kind": "BodyText",
                        "next": null,
                        "mentionsGeneSymbols": [],
                        "__typename": "FromBodyText"
                      },
                      {
                        "text": "The expression of lymphocytic choriomeningitis virus (LCMV) viral antigens in pancreatic islet cells and the subsequent cross of this tg mouse with a TCR-tg mouse specific for LCMV glycoprotein resulted in an animal that only developed autoimmune disease if virally infected [40, 41] ",
                        "sequence": 1,
                        "kind": "BodyText",
                        "next": {
                          "kind": "BodyText",
                          "__typename": "FromBodyText"
                        },
                        "mentionsGeneSymbols": [
                          {
                            "score": 1.858376383781433,
                            "geneSymbol": {
                              "sid": "TG",
                              "__typename": "GeneSymbol"
                            },
                            "__typename": "_FromBodyTextMentionsGeneSymbols"
                          }
                        ],
                        "__typename": "FromBodyText"
                      }
                    ],
                    "__typename": "BodyText"
                  },
                  "__typename": "_BodyTextCollectionBodyTexts"
                }
              ],
              "__typename": "BodyTextCollection"
            }
          ],
          "paperId": [
            {
              "position": 1,
              "id": {
                "id": "PMC3266166",
                "type": "Pmcid",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            },
            {
              "position": 2,
              "id": {
                "id": "22095454",
                "type": "PMID",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            },
            {
              "position": 0,
              "id": {
                "id": "10.1007/s12016-011-8294-7",
                "type": "DOI",
                "__typename": "PaperID"
              },
              "__typename": "_PaperPaperId"
            }
          ],
          "__typename": "Paper"
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
