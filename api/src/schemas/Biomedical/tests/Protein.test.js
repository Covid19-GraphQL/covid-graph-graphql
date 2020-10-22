import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('Protein', async t => {
  t.plan(1);
  const query = gql`
    query {
      Protein(first: 10, filter: {
        associations_not: null
      }) {
        sid
        category
        desc
        length
        name
        source
        status
        taxid
        version
        associations(first: 3, filter: {
          qualifier_not: null
        }) {
          evidence
          qualifier
          term {
            sid
            name
            namespace
            obsolete
            subsets
            is {
              term(first: 3) {
                source
              }
            }
          }
        }
      }
    }
  `;
  const expected = {
    "data": {
      "Protein": [
        {
          "sid": "P31946",
          "category": "primary",
          "desc": "RecName: Full=14-3-3 protein beta/alpha; AltName: Full=Protein 1054; AltName: Full=Protein kinase C inhibitor protein 1; Short=KCIP-1; Contains: RecName: Full=14-3-3 protein beta/alpha, N-terminally processed;",
          "length": null,
          "name": "14-3-3 protein beta/alpha",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
        },
        {
          "sid": "P62258",
          "category": "primary",
          "desc": "RecName: Full=14-3-3 protein epsilon; Short=14-3-3E;",
          "length": null,
          "name": "14-3-3 protein epsilon",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [
            {
              "evidence": "IDA",
              "qualifier": "colocalizes_with",
              "term": {
                "sid": "GO:0005886",
                "name": "plasma membrane",
                "namespace": "cellular_component",
                "obsolete": false,
                "subsets": [
                  "goslim_drosophila",
                  "goslim_chembl",
                  "goslim_agr",
                  "goslim_candida",
                  "goslim_mouse",
                  "goslim_aspergillus",
                  "goslim_generic",
                  "goslim_plant",
                  "goslim_metagenomics",
                  "goslim_yeast"
                ],
                "is": {
                  "term": [
                    {
                      "source": "go",
                      "__typename": "_GOTermIs"
                    }
                  ],
                  "__typename": "_GOTermIsDirections"
                },
                "__typename": "GOTerm"
              },
              "__typename": "_ProteinAssociations"
            }
          ],
          "__typename": "Protein"
        },
        {
          "sid": "Q04917",
          "category": "primary",
          "desc": "RecName: Full=14-3-3 protein eta; AltName: Full=Protein AS1;",
          "length": null,
          "name": "14-3-3 protein eta",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
        },
        {
          "sid": "P61981",
          "category": "primary",
          "desc": "RecName: Full=14-3-3 protein gamma; AltName: Full=Protein kinase C inhibitor protein 1; Short=KCIP-1; Contains: RecName: Full=14-3-3 protein gamma, N-terminally processed;",
          "length": null,
          "name": "14-3-3 protein gamma",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
        },
        {
          "sid": "P31947",
          "category": "primary",
          "desc": "RecName: Full=14-3-3 protein sigma; AltName: Full=Epithelial cell marker protein 1; AltName: Full=Stratifin;",
          "length": null,
          "name": "14-3-3 protein sigma",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
        },
        {
          "sid": "P27348",
          "category": "primary",
          "desc": "RecName: Full=14-3-3 protein theta; AltName: Full=14-3-3 protein T-cell; AltName: Full=14-3-3 protein tau; AltName: Full=Protein HS1;",
          "length": null,
          "name": "14-3-3 protein theta",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
        },
        {
          "sid": "P63104",
          "category": "primary",
          "desc": "RecName: Full=14-3-3 protein zeta/delta; AltName: Full=Protein kinase C inhibitor protein 1; Short=KCIP-1;",
          "length": null,
          "name": "14-3-3 protein zeta/delta",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
        },
        {
          "sid": "Q96QU6",
          "category": "primary",
          "desc": "RecName: Full=1-aminocyclopropane-1-carboxylate synthase-like protein 1; Short=ACC synthase-like protein 1;",
          "length": null,
          "name": "1-aminocyclopropane-1-carboxylate synthase-like protein 1",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [
            {
              "evidence": "IDA",
              "qualifier": "NOT",
              "term": {
                "sid": "GO:0016847",
                "name": "1-aminocyclopropane-1-carboxylate synthase activity",
                "namespace": "molecular_function",
                "obsolete": false,
                "subsets": [],
                "is": {
                  "term": [
                    {
                      "source": "go",
                      "__typename": "_GOTermIs"
                    }
                  ],
                  "__typename": "_GOTermIsDirections"
                },
                "__typename": "GOTerm"
              },
              "__typename": "_ProteinAssociations"
            }
          ],
          "__typename": "Protein"
        },
        {
          "sid": "Q4AC99",
          "category": "primary",
          "desc": "RecName: Full=Probable inactive 1-aminocyclopropane-1-carboxylate synthase-like protein 2; Short=ACC synthase-like protein 2;",
          "length": null,
          "name": "Probable inactive 1-aminocyclopropane-1-carboxylate synthase-like protein 2",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
        },
        {
          "sid": "Q15172",
          "category": "primary",
          "desc": "RecName: Full=Serine/threonine-protein phosphatase 2A 56 kDa regulatory subunit alpha isoform; AltName: Full=PP2A B subunit isoform B'-alpha; AltName: Full=PP2A B subunit isoform B56-alpha; AltName: Full=PP2A B subunit isoform PR61-alpha; Short=PR61alpha; AltName: Full=PP2A B subunit isoform R5-alpha;",
          "length": null,
          "name": "Serine/threonine-protein phosphatase 2A 56 kDa regulatory subunit alpha isoform",
          "source": "Uniprot",
          "status": null,
          "taxid": "9606",
          "version": null,
          "associations": [],
          "__typename": "Protein"
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
