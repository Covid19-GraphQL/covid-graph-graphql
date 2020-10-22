import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('Gene', async t => {
  t.plan(1);
  const query = gql`
    query {
      Gene(first: 10) {
        sid
        Feature_type
        Full_name_from_nomenclature_authority
        GeneID
        LocusTag
        Modification_date
        Nomenclature_status
        Other_designations
        Symbol
        Symbol_from_nomenclature_authority
        Synonyms
        chromosome
        dbXrefs
        description
        map_location
        name
        source
        tax_id
        type_of_gene
        transcripts(first: 3) {
          source
          taxid
          __typename
        }
        expressedTissues(first: 3) {
          val
          valToString
          value
          __typename
        }
        pathways(first: 3) {
          evidence
          source
          __typename
        }
        mapsGenes {
          mappedBy(first: 3) {
            source
            Gene {
              sid
              __typename
            }
            __typename
          }
          gene(first: 3) {
            source
            Gene {
              sid
              __typename
            }
            __typename
          }
          __typename
        }
        mapsGeneSymbols(first: 3) {
          source
          symbol {
            sid
            __typename
          }
          __typename
        }
        mapsGeneSymbolsWithOmitSpecialChar(first: 3) {
          source
          symbol {
            sid
            __typename
          }
          __typename
        }
        mapsGeneSymbolsWithOmitLength(first: 3) {
          source
          symbol {
            sid
            __typename
          }
          __typename
        }
        mapsGeneSymbolsWithOmitWord(first: 3) {
          source
          symbol {
            sid
            __typename
          }
          __typename
        }
        diseases(first: 3) {
          high_confidence
          locus
          primary
          status
          disease {
            doid
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
      "Gene": [
        {
          "sid": "1230",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "C-C motif chemokine receptor 1",
          "GeneID": "1230",
          "LocusTag": "-",
          "Modification_date": "20200705",
          "Nomenclature_status": "O",
          "Other_designations": "C-C chemokine receptor type 1|C-C CKR-1|CC-CKR-1|CCR-1|LD78 receptor|MIP-1alpha-R|RANTES receptor|RANTES-R|chemokine (C-C motif) receptor 1|macrophage inflammatory protein 1-alpha receptor",
          "Symbol": "CCR1",
          "Symbol_from_nomenclature_authority": "CCR1",
          "Synonyms": "CD191|CKR-1|CKR1|CMKBR1|HM145|MIP1aR|SCYAR1",
          "chromosome": "3",
          "dbXrefs": "MIM:601159|HGNC:HGNC:1602|Ensembl:ENSG00000163823",
          "description": "C-C motif chemokine receptor 1",
          "map_location": "3p21.31",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000163823",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CKR-1",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "HM145",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "SCYAR1",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [
            {
              "high_confidence": 1,
              "locus": 6,
              "primary": 0,
              "status": "HC-S",
              "disease": {
                "doid": "DOID:10608",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            },
            {
              "high_confidence": 1,
              "locus": 2,
              "primary": 1,
              "status": "HC-P",
              "disease": {
                "doid": "DOID:13241",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            }
          ],
          "__typename": "Gene"
        },
        {
          "sid": "1232",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "C-C motif chemokine receptor 3",
          "GeneID": "1232",
          "LocusTag": "-",
          "Modification_date": "20200604",
          "Nomenclature_status": "O",
          "Other_designations": "C-C chemokine receptor type 3|C-C CKR-3|CC chemokine receptor 3|CCR-3|b-chemokine receptor|chemokine (C-C motif) receptor 3|eosinophil CC chemokine receptor 3|eosinophil eotaxin receptor",
          "Symbol": "CCR3",
          "Symbol_from_nomenclature_authority": "CCR3",
          "Synonyms": "C C CKR3|CC-CKR-3|CD193|CKR 3|CKR3|CMKBR3",
          "chromosome": "3",
          "dbXrefs": "MIM:601268|HGNC:HGNC:1604|Ensembl:ENSG00000183625",
          "description": "C-C motif chemokine receptor 3",
          "map_location": "3p21.31",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000183625",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CCR3",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CKR 3",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CC-CKR-3",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CKR 3",
                "__typename": "OmitSpecialChar"
              },
              "__typename": "_GeneMapsGeneSymbolsWithOmitSpecialChar"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "C C CKR3",
                "__typename": "OmitSpecialChar"
              },
              "__typename": "_GeneMapsGeneSymbolsWithOmitSpecialChar"
            }
          ],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [
            {
              "high_confidence": 1,
              "locus": 6,
              "primary": 1,
              "status": "HC-P",
              "disease": {
                "doid": "DOID:10608",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            },
            {
              "high_confidence": 1,
              "locus": 2,
              "primary": 0,
              "status": "HC-S",
              "disease": {
                "doid": "DOID:13241",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            }
          ],
          "__typename": "Gene"
        },
        {
          "sid": "1233",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "C-C motif chemokine receptor 4",
          "GeneID": "1233",
          "LocusTag": "-",
          "Modification_date": "20200705",
          "Nomenclature_status": "O",
          "Other_designations": "C-C chemokine receptor type 4|C-C CKR-4|CCR-4|chemokine (C-C motif) receptor 4|chemokine (C-C) receptor 4",
          "Symbol": "CCR4",
          "Symbol_from_nomenclature_authority": "CCR4",
          "Synonyms": "CC-CKR-4|CD194|CKR4|CMKBR4|ChemR13|HGCN:14099|K5-5",
          "chromosome": "3",
          "dbXrefs": "MIM:604836|HGNC:HGNC:1605|Ensembl:ENSG00000183813",
          "description": "C-C motif chemokine receptor 4",
          "map_location": "3p22.3",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000183813",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "ChemR13",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CKR4",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CC-CKR-4",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "HGCN:14099",
                "__typename": "OmitSpecialChar"
              },
              "__typename": "_GeneMapsGeneSymbolsWithOmitSpecialChar"
            }
          ],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [
            {
              "high_confidence": 1,
              "locus": 40,
              "primary": 1,
              "status": "HC-P",
              "disease": {
                "doid": "DOID:10608",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            },
            {
              "high_confidence": 0,
              "locus": 4,
              "primary": 0,
              "status": "LC-S",
              "disease": {
                "doid": "DOID:3571",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            }
          ],
          "__typename": "Gene"
        },
        {
          "sid": "1234",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "C-C motif chemokine receptor 5",
          "GeneID": "1234",
          "LocusTag": "-",
          "Modification_date": "20200719",
          "Nomenclature_status": "O",
          "Other_designations": "C-C chemokine receptor type 5|C-C motif chemokine receptor 5 A159A|HIV-1 fusion coreceptor|chemokine (C-C motif) receptor 5|chemokine receptor CCR5|chemokine recptor CCR5 Delta32|chemr13",
          "Symbol": "CCR5",
          "Symbol_from_nomenclature_authority": "CCR5",
          "Synonyms": "CC-CKR-5|CCCKR5|CCR-5|CD195|CKR-5|CKR5|CMKBR5|IDDM22",
          "chromosome": "3",
          "dbXrefs": "MIM:601373|HGNC:HGNC:1606|Ensembl:ENSG00000160791",
          "description": "C-C motif chemokine receptor 5",
          "map_location": "3p21.31",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000160791",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CMKBR5",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CD195",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CKR-5",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [
            {
              "high_confidence": 1,
              "locus": 6,
              "primary": 0,
              "status": "HC-S",
              "disease": {
                "doid": "DOID:10608",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            }
          ],
          "__typename": "Gene"
        },
        {
          "sid": "1235",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "C-C motif chemokine receptor 6",
          "GeneID": "1235",
          "LocusTag": "-",
          "Modification_date": "20200604",
          "Nomenclature_status": "O",
          "Other_designations": "C-C chemokine receptor type 6|G protein-coupled receptor 29|LARC receptor|chemokine (C-C motif) receptor 6|chemokine (C-C) receptor 6|chemokine receptor-like 3|seven-transmembrane receptor, lymphocyte, 22",
          "Symbol": "CCR6",
          "Symbol_from_nomenclature_authority": "CCR6",
          "Synonyms": "BN-1|C-C CKR-6|CC-CKR-6|CCR-6|CD196|CKR-L3|CKRL3|CMKBR6|DCR2|DRY6|GPR29|GPRCY4|STRL22",
          "chromosome": "6",
          "dbXrefs": "MIM:601835|HGNC:HGNC:1607|Ensembl:ENSG00000112486",
          "description": "C-C motif chemokine receptor 6",
          "map_location": "6q27",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000112486",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CCR6",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "GPR29",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "GPRCY4",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "C-C CKR-6",
                "__typename": "OmitSpecialChar"
              },
              "__typename": "_GeneMapsGeneSymbolsWithOmitSpecialChar"
            }
          ],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [
            {
              "high_confidence": 1,
              "locus": 23,
              "primary": 0,
              "status": "HC-S",
              "disease": {
                "doid": "DOID:12306",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            },
            {
              "high_confidence": 1,
              "locus": 16,
              "primary": 1,
              "status": "HC-P",
              "disease": {
                "doid": "DOID:8778",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            },
            {
              "high_confidence": 1,
              "locus": 21,
              "primary": 1,
              "status": "HC-P",
              "disease": {
                "doid": "DOID:7148",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            }
          ],
          "__typename": "Gene"
        },
        {
          "sid": "1236",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "C-C motif chemokine receptor 7",
          "GeneID": "1236",
          "LocusTag": "-",
          "Modification_date": "20200719",
          "Nomenclature_status": "O",
          "Other_designations": "C-C chemokine receptor type 7|Bukitt's lymphoma receptor 2|CC chemokine receptor 7|EBV-induced G protein-coupled receptor 1|Epstein-Barr virus induced gene 1|Epstein-Barr virus-induced G-protein coupled receptor 1|MIP-3 beta receptor|chemokine (C-C motif) receptor 7|lymphocyte-specific G protein-coupled peptide receptor",
          "Symbol": "CCR7",
          "Symbol_from_nomenclature_authority": "CCR7",
          "Synonyms": "BLR2|CC-CKR-7|CCR-7|CD197|CDw197|CMKBR7|EBI1",
          "chromosome": "17",
          "dbXrefs": "MIM:600242|HGNC:HGNC:1608|Ensembl:ENSG00000126353",
          "description": "C-C motif chemokine receptor 7",
          "map_location": "17q21.2",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000126353",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CMKBR7",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "EBI1",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CD197",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [
            {
              "high_confidence": 1,
              "locus": 36,
              "primary": 0,
              "status": "HC-S",
              "disease": {
                "doid": "DOID:9744",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            }
          ],
          "__typename": "Gene"
        },
        {
          "sid": "1237",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "C-C motif chemokine receptor 8",
          "GeneID": "1237",
          "LocusTag": "-",
          "Modification_date": "20200604",
          "Nomenclature_status": "O",
          "Other_designations": "C-C chemokine receptor type 8|CC chemokine receptor 8|CC chemokine receptor CHEMR1|CC-chemokine receptor chemr1|chemokine (C-C motif) receptor 8|chemokine (C-C) receptor 8|chemokine (C-C) receptor-like 2|chemokine receptor-like 1",
          "Symbol": "CCR8",
          "Symbol_from_nomenclature_authority": "CCR8",
          "Synonyms": "CC-CKR-8|CCR-8|CDw198|CKRL1|CMKBR8|CMKBRL2|CY6|GPRCY6|TER1",
          "chromosome": "3",
          "dbXrefs": "MIM:601834|HGNC:HGNC:1609|Ensembl:ENSG00000179934",
          "description": "C-C motif chemokine receptor 8",
          "map_location": "3p22.1",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000179934",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CY6",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "TER1",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CMKBR8",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [],
          "__typename": "Gene"
        },
        {
          "sid": "1238",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "atypical chemokine receptor 2",
          "GeneID": "1238",
          "LocusTag": "-",
          "Modification_date": "20200607",
          "Nomenclature_status": "O",
          "Other_designations": "atypical chemokine receptor 2|C-C chemokine receptor D6|CC-chemokine-binding receptor JAB61|chemokine (C-C motif) receptor 9|chemokine (C-C) receptor 9|chemokine receptor CCR-10|chemokine receptor CCR-9|chemokine receptor D6|chemokine-binding protein 2|chemokine-binding protein D6",
          "Symbol": "ACKR2",
          "Symbol_from_nomenclature_authority": "ACKR2",
          "Synonyms": "CCBP2|CCR10|CCR9|CMKBR9|D6|hD6",
          "chromosome": "3",
          "dbXrefs": "MIM:602648|HGNC:HGNC:1565|Ensembl:ENSG00000144648",
          "description": "atypical chemokine receptor 2",
          "map_location": "3p22.1",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000144648",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CCR10",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "ACKR2",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "hD6",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [],
          "__typename": "Gene"
        },
        {
          "sid": "1240",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "chemerin chemokine-like receptor 1",
          "GeneID": "1240",
          "LocusTag": "-",
          "Modification_date": "20200719",
          "Nomenclature_status": "O",
          "Other_designations": "chemokine-like receptor 1|G-protein coupled receptor ChemR23|G-protein coupled receptor DEZ|chemerin receptor|chemokine receptor-like 1|orphan G-protein coupled receptor, Dez|resolvin E1 receptor",
          "Symbol": "CMKLR1",
          "Symbol_from_nomenclature_authority": "CMKLR1",
          "Synonyms": "CHEMERINR|ChemR23|DEZ|RVER1",
          "chromosome": "12",
          "dbXrefs": "MIM:602351|HGNC:HGNC:2121|Ensembl:ENSG00000174600",
          "description": "chemerin chemokine-like receptor 1",
          "map_location": "12q23.3",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000174600",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "DEZ",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "ChemR23",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CHEMERINR",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [
            {
              "high_confidence": 0,
              "locus": 7,
              "primary": 1,
              "status": "LC-P",
              "disease": {
                "doid": "DOID:10283",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            },
            {
              "high_confidence": 0,
              "locus": 41,
              "primary": 1,
              "status": "LC-P",
              "disease": {
                "doid": "DOID:1324",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            },
            {
              "high_confidence": 0,
              "locus": 156,
              "primary": 1,
              "status": "LC-P",
              "disease": {
                "doid": "DOID:3312",
                "__typename": "Disease"
              },
              "__typename": "_GeneDiseases"
            }
          ],
          "__typename": "Gene"
        },
        {
          "sid": "1241",
          "Feature_type": "-",
          "Full_name_from_nomenclature_authority": "leukotriene B4 receptor",
          "GeneID": "1241",
          "LocusTag": "-",
          "Modification_date": "20200604",
          "Nomenclature_status": "O",
          "Other_designations": "leukotriene B4 receptor 1|G protein-coupled receptor 16|LTB4-R 1|LTB4-R1|P2Y purinoceptor 7|chemoattractant receptor-like 1|chemokine receptor-like 1|purinergic receptor P2Y, G-protein coupled, 7",
          "Symbol": "LTB4R",
          "Symbol_from_nomenclature_authority": "LTB4R",
          "Synonyms": "BLT1|BLTR|CMKRL1|GPR16|LTB4R1|LTBR1|P2RY7|P2Y7",
          "chromosome": "14",
          "dbXrefs": "MIM:601531|HGNC:HGNC:6713|Ensembl:ENSG00000213903",
          "description": "leukotriene B4 receptor",
          "map_location": "14q12",
          "name": null,
          "source": "ncbigene",
          "tax_id": "9606",
          "type_of_gene": "protein-coding",
          "transcripts": [
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            },
            {
              "source": "Refseq",
              "taxid": "9606",
              "__typename": "_GeneTranscripts"
            }
          ],
          "expressedTissues": [],
          "pathways": [
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            },
            {
              "evidence": "TAS",
              "source": "reactome",
              "__typename": "_GenePathways"
            }
          ],
          "mapsGenes": {
            "mappedBy": [
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000285456",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              },
              {
                "source": "Ensembl",
                "Gene": {
                  "sid": "ENSG00000213903",
                  "__typename": "Gene"
                },
                "__typename": "_GeneMapsGenes"
              }
            ],
            "gene": [],
            "__typename": "_GeneMapsGenesDirections"
          },
          "mapsGeneSymbols": [
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "LTBR1",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "CMKRL1",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            },
            {
              "source": "ncbigene",
              "symbol": {
                "sid": "P2Y7",
                "__typename": "GeneSymbol"
              },
              "__typename": "_GeneMapsGeneSymbols"
            }
          ],
          "mapsGeneSymbolsWithOmitSpecialChar": [],
          "mapsGeneSymbolsWithOmitLength": [],
          "mapsGeneSymbolsWithOmitWord": [],
          "diseases": [],
          "__typename": "Gene"
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
