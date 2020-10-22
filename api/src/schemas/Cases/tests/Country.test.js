import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('Country path: (Country)<-[LOCATED_IN]-(City)<-[LOCATED_IN]-(Facility)', async t => {
  t.plan(1);
  const query = gql`
    query {
      Country(first: 3) {
        name
        un_id
        cities(first: 3) {
          name
          facilities(first: 3) {
            name
          }
        }    
      }
    }
  `;
  const expected = {
    "data": {
      "Country": [
        {
          "name": "US",
          "un_id": null,
          "cities": [],
          "__typename": "Country"
        },
        {
          "name": "Canada",
          "un_id": "124",
          "cities": [
            {
              "name": "Saskatoon",
              "facilities": [
                {
                  "name": "Royal University Hospital",
                  "__typename": "Facility"
                }
              ],
              "__typename": "City"
            },
            {
              "name": "Brampton",
              "facilities": [
                {
                  "name": "William Osler Health System - Brampton Civic Hospital",
                  "__typename": "Facility"
                },
                {
                  "name": "William Osler Health System",
                  "__typename": "Facility"
                }
              ],
              "__typename": "City"
            },
            {
              "name": "Kitchener",
              "facilities": [
                {
                  "name": "Grand River Hospital",
                  "__typename": "Facility"
                }
              ],
              "__typename": "City"
            }
          ],
          "__typename": "Country"
        },
        {
          "name": "China",
          "un_id": "156",
          "cities": [
            {
              "name": "Ezhou",
              "facilities": [
                {
                  "name": "Ezhou Hospital of Traditional Chinese Medicine",
                  "__typename": "Facility"
                }
              ],
              "__typename": "City"
            },
            {
              "name": "Jinhua",
              "facilities": [
                {
                  "name": "Jinhua Central Hospital /ID# 215628",
                  "__typename": "Facility"
                },
                {
                  "name": "Tetrandrine Tablets",
                  "__typename": "Facility"
                }
              ],
              "__typename": "City"
            },
            {
              "name": "Hangzhou",
              "facilities": [
                {
                  "name": "First Affiliated Hospital of Zhejiang Chinese Medical University",
                  "__typename": "Facility"
                },
                {
                  "name": "The First Affiliated Hospital of Zhejiang University School of Medicine",
                  "__typename": "Facility"
                },
                {
                  "name": "Yanhui Liao",
                  "__typename": "Facility"
                }
              ],
              "__typename": "City"
            }
          ],
          "__typename": "Country"
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

test('Country path: (Country)<-[PART_OF]-(Province)-[REPORTED]->(DailyReport)', async t => {
  t.plan(1);
  const query = gql`
    query {
      Country(first: 3) {
        name
        un_id
        provinces(first: 3) {
          source
          province {
            name
            latitude
            longitude
            reports(first: 3) {
              source
              report {
                uuid
                confirmed
                death
                recovered
                date {
                  year
                  month
                  day
                  formatted
                  __typename
                }
                __typename
              }
              __typename
            }
            latestReports(first: 3) {
              source
              report {
                uuid
                confirmed
                death
                recovered
                date {
                  year
                  month
                  day
                  formatted
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
    }
  `;
  const expected = {
    "data": {
      "Country": [
        {
          "name": "US",
          "un_id": null,
          "provinces": [
            {
              "source": "jhu",
              "province": {
                "name": "Shasta County, CA",
                "latitude": "40.7909",
                "longitude": "-121.8474",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USShasta County, CA2020-03-09 03:43:03",
                      "confirmed": 1,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 3,
                        "day": 9,
                        "formatted": "2020-03-09T03:43:03",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USShasta County, CA2020-03-09 03:43:03",
                      "confirmed": 1,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 3,
                        "day": 9,
                        "formatted": "2020-03-09T03:43:03",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            },
            {
              "source": "jhu",
              "province": {
                "name": "Jefferson Parish, LA",
                "latitude": "29.6499",
                "longitude": "-90.1121",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USJefferson Parish, LA2020-03-09 18:53:13",
                      "confirmed": 1,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 3,
                        "day": 9,
                        "formatted": "2020-03-09T18:53:13",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USJefferson Parish, LA2020-03-09 18:53:13",
                      "confirmed": 1,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 3,
                        "day": 9,
                        "formatted": "2020-03-09T18:53:13",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            },
            {
              "source": "jhu",
              "province": {
                "name": "Carver County, MN",
                "latitude": "44.8254",
                "longitude": "-93.7842",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USCarver County, MN2020-03-09 08:43:02",
                      "confirmed": 1,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 3,
                        "day": 9,
                        "formatted": "2020-03-09T08:43:02",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USCarver County, MN2020-03-09 08:43:02",
                      "confirmed": 1,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 3,
                        "day": 9,
                        "formatted": "2020-03-09T08:43:02",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            }
          ],
          "__typename": "Country"
        },
        {
          "name": "Canada",
          "un_id": "124",
          "provinces": [
            {
              "source": "jhu",
              "province": {
                "name": "Diamond Princess",
                "latitude": "35.4498",
                "longitude": "139.6649",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaDiamond Princess2020-05-18 02:32:21",
                      "confirmed": 1,
                      "death": "1",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USDiamond Princess2020-05-18 02:32:21",
                      "confirmed": 49,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaDiamond Princess2020-06-26 04:33:43",
                      "confirmed": 0,
                      "death": "1",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 6,
                        "day": 26,
                        "formatted": "2020-06-26T04:33:43",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaDiamond Princess2020-07-22 04:34:42",
                      "confirmed": 0,
                      "death": "1",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 22,
                        "formatted": "2020-07-22T04:34:42",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USDiamond Princess2020-07-22 04:34:42",
                      "confirmed": 49,
                      "death": "0",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 22,
                        "formatted": "2020-07-22T04:34:42",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            },
            {
              "source": "jhu",
              "province": {
                "name": "Saskatchewan",
                "latitude": "52.9399",
                "longitude": "-106.4509",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaSaskatchewan2020-05-18 02:32:21",
                      "confirmed": 592,
                      "death": "7",
                      "recovered": "444",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaSaskatchewan2020-06-26 04:33:43",
                      "confirmed": 759,
                      "death": "13",
                      "recovered": "648",
                      "date": {
                        "year": 2020,
                        "month": 6,
                        "day": 26,
                        "formatted": "2020-06-26T04:33:43",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaSaskatchewan2020-07-01 04:33:52",
                      "confirmed": 785,
                      "death": "13",
                      "recovered": "684",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 1,
                        "formatted": "2020-07-01T04:33:52",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaSaskatchewan2020-07-22 04:34:42",
                      "confirmed": 970,
                      "death": "15",
                      "recovered": "813",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 22,
                        "formatted": "2020-07-22T04:34:42",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            },
            {
              "source": "jhu",
              "province": {
                "name": "Grand Princess",
                "latitude": "37.6489",
                "longitude": "-122.6655",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USGrand Princess2020-05-18 02:32:21",
                      "confirmed": 103,
                      "death": "3",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "CanadaGrand Princess2020-05-18 02:32:21",
                      "confirmed": 13,
                      "death": "0",
                      "recovered": "13",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USGrand Princess2020-06-26 04:33:43",
                      "confirmed": 103,
                      "death": "3",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 6,
                        "day": 26,
                        "formatted": "2020-06-26T04:33:43",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "USGrand Princess2020-07-22 04:34:42",
                      "confirmed": 103,
                      "death": "3",
                      "recovered": "0",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 22,
                        "formatted": "2020-07-22T04:34:42",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            }
          ],
          "__typename": "Country"
        },
        {
          "name": "China",
          "un_id": "156",
          "provinces": [
            {
              "source": "jhu",
              "province": {
                "name": "Jiangsu",
                "latitude": "32.9711",
                "longitude": "119.455",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaJiangsu2020-05-18 02:32:21",
                      "confirmed": 653,
                      "death": "0",
                      "recovered": "653",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaJiangsu2020-06-26 04:33:43",
                      "confirmed": 654,
                      "death": "0",
                      "recovered": "653",
                      "date": {
                        "year": 2020,
                        "month": 6,
                        "day": 26,
                        "formatted": "2020-06-26T04:33:43",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaJiangsu2020-07-01 04:33:52",
                      "confirmed": 654,
                      "death": "0",
                      "recovered": "654",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 1,
                        "formatted": "2020-07-01T04:33:52",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaJiangsu2020-07-22 04:34:42",
                      "confirmed": 654,
                      "death": "0",
                      "recovered": "654",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 22,
                        "formatted": "2020-07-22T04:34:42",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            },
            {
              "source": "jhu",
              "province": {
                "name": "Inner Mongolia",
                "latitude": "44.0935",
                "longitude": "113.9448",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaInner Mongolia2020-05-18 02:32:21",
                      "confirmed": 213,
                      "death": "1",
                      "recovered": "196",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaInner Mongolia2020-06-26 04:33:43",
                      "confirmed": 238,
                      "death": "1",
                      "recovered": "236",
                      "date": {
                        "year": 2020,
                        "month": 6,
                        "day": 26,
                        "formatted": "2020-06-26T04:33:43",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaInner Mongolia2020-07-01 04:33:52",
                      "confirmed": 238,
                      "death": "1",
                      "recovered": "237",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 1,
                        "formatted": "2020-07-01T04:33:52",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaInner Mongolia2020-07-22 04:34:42",
                      "confirmed": 249,
                      "death": "1",
                      "recovered": "237",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 22,
                        "formatted": "2020-07-22T04:34:42",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            },
            {
              "source": "jhu",
              "province": {
                "name": "Beijing",
                "latitude": "40.1824",
                "longitude": "116.4142",
                "reports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaBeijing2020-05-18 02:32:21",
                      "confirmed": 593,
                      "death": "9",
                      "recovered": "578",
                      "date": {
                        "year": 2020,
                        "month": 5,
                        "day": 18,
                        "formatted": "2020-05-18T02:32:21",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaBeijing2020-06-26 04:33:43",
                      "confirmed": 874,
                      "death": "9",
                      "recovered": "585",
                      "date": {
                        "year": 2020,
                        "month": 6,
                        "day": 26,
                        "formatted": "2020-06-26T04:33:43",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  },
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaBeijing2020-03-15 01:13:10",
                      "confirmed": 442,
                      "death": "8",
                      "recovered": "353",
                      "date": {
                        "year": 2020,
                        "month": 3,
                        "day": 15,
                        "formatted": "2020-03-15T01:13:10",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "DailyReport"
                    },
                    "__typename": "_ProvinceReports"
                  }
                ],
                "latestReports": [
                  {
                    "source": "jhu",
                    "report": {
                      "uuid": "ChinaBeijing2020-07-22 04:34:42",
                      "confirmed": 929,
                      "death": "9",
                      "recovered": "752",
                      "date": {
                        "year": 2020,
                        "month": 7,
                        "day": 22,
                        "formatted": "2020-07-22T04:34:42",
                        "__typename": "_Neo4jLocalDateTime"
                      },
                      "__typename": "Latest"
                    },
                    "__typename": "_ProvinceLatestReports"
                  }
                ],
                "__typename": "Province"
              },
              "__typename": "_CountryProvinces"
            }
          ],
          "__typename": "Country"
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

test('Country to AgeGroups', async t => {
  t.plan(1);
  const query = gql`
    query {
      Country(first: 3) {
        name
        un_id
        total(first: 3) {
          count
          ageGroup {
            group
            span
            start
          }
        }
        female(first: 3) {
          count
          ageGroup {
            group
            span
            start
          }
        }
        male(first: 3) {
          count
          ageGroup {
            group
            span
            start
          }
        }
      }
    }
  `;
  const expected = {
    "data": {
      "Country": [
        {
          "name": "US",
          "un_id": null,
          "total": [],
          "female": [],
          "male": [],
          "__typename": "Country"
        },
        {
          "name": "Canada",
          "un_id": "124",
          "total": [
            {
              "count": 2096920,
              "ageGroup": {
                "group": "65-69",
                "span": "5",
                "start": 65,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryTotal"
            },
            {
              "count": 8106,
              "ageGroup": {
                "group": "100+",
                "span": "-1",
                "start": 100,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryTotal"
            },
            {
              "count": 2006071,
              "ageGroup": {
                "group": "15-19",
                "span": "5",
                "start": 15,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryTotal"
            }
          ],
          "female": [
            {
              "count": 307866,
              "ageGroup": {
                "group": "85-89",
                "span": "5",
                "start": 85,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryFemale"
            },
            {
              "count": 56067,
              "ageGroup": {
                "group": "95-99",
                "span": "5",
                "start": 95,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryFemale"
            },
            {
              "count": 1076000,
              "ageGroup": {
                "group": "65-69",
                "span": "5",
                "start": 65,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryFemale"
            }
          ],
          "male": [
            {
              "count": 1296540,
              "ageGroup": {
                "group": "30-34",
                "span": "5",
                "start": 30,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryMale"
            },
            {
              "count": 1006817,
              "ageGroup": {
                "group": "10-14",
                "span": "5",
                "start": 10,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryMale"
            },
            {
              "count": 201199,
              "ageGroup": {
                "group": "85-89",
                "span": "5",
                "start": 85,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryMale"
            }
          ],
          "__typename": "Country"
        },
        {
          "name": "China",
          "un_id": "156",
          "total": [
            {
              "count": 15906123,
              "ageGroup": {
                "group": "80-84",
                "span": "5",
                "start": 80,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryTotal"
            },
            {
              "count": 99921677,
              "ageGroup": {
                "group": "40-44",
                "span": "5",
                "start": 40,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryTotal"
            },
            {
              "count": 76975116,
              "ageGroup": {
                "group": "60-64",
                "span": "5",
                "start": 60,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryTotal"
            }
          ],
          "female": [
            {
              "count": 59710325,
              "ageGroup": {
                "group": "50-54",
                "span": "5",
                "start": 50,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryFemale"
            },
            {
              "count": 40225712,
              "ageGroup": {
                "group": "5-9",
                "span": "5",
                "start": 5,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryFemale"
            },
            {
              "count": 38648113,
              "ageGroup": {
                "group": "10-14",
                "span": "5",
                "start": 10,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryFemale"
            }
          ],
          "male": [
            {
              "count": 35185041,
              "ageGroup": {
                "group": "65-69",
                "span": "5",
                "start": 65,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryMale"
            },
            {
              "count": 2787103,
              "ageGroup": {
                "group": "85-89",
                "span": "5",
                "start": 85,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryMale"
            },
            {
              "count": 44286173,
              "ageGroup": {
                "group": "15-19",
                "span": "5",
                "start": 15,
                "__typename": "AgeGroup"
              },
              "__typename": "_CountryMale"
            }
          ],
          "__typename": "Country"
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
