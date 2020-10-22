import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('Compound', async t => {
  t.plan(1);
  const query = gql`
    query {
      Compound(first: 20) {
        description
        type
        name
        source
        company
        ttd_id
        chebi_id
        chemspider_id
        drugbank_id
        kegg_drug_id
        kegg_id
        pubchem_id
        unii
        inchi
        inchikey
        cas_number
        accession_numbers
        compound_class
        groups
        categories
        atc_codes
        source_url
        drug_formula
        drug_smiles
        drug_type
        highest_stat
        indication
        mechanism
        synonyms
        targets {
          activity
          moa
          reference
        }
        isInhibitor {
          activity
          moa
          reference
        }
        isAntagonist {
          activity
          moa
          reference
        }
        isAgonist {
          activity
          moa
          reference
        }
        isActivator {
          activity
          moa
          reference
        }
        isBinder {
          activity
          moa
          reference
        }
      }
    }
  `;
  
  const expected = {
    "data": {
      "Compound": [
        {
          "description": null,
          "type": "small molecule",
          "name": "Cilomilast",
          "source": "DrugBank, TTD",
          "company": "GlaxoSmithKline",
          "ttd_id": "D02EMR",
          "chebi_id": null,
          "chemspider_id": 133238,
          "drugbank_id": "DB03849",
          "kegg_drug_id": "D01704",
          "kegg_id": null,
          "pubchem_id": "151170",
          "unii": "8ATB1C1R6X",
          "inchi": "1S/C20H25NO4/c1-24-17-7-6-15(12-18(17)25-16-4-2-3-5-16)20(13-21)10-8-14(9-11-20)19(22)23/h6-7,12,14,16H,2-5,8-11H2,1H3,(H,22,23)/t14-,20+",
          "inchikey": "CFBUZOUXXHZCFB-LDTOLXSISA-N",
          "cas_number": "153259-65-5",
          "accession_numbers": "EXPT00920",
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB03849, http://db.idrblab.net/ttd/data/drug/details/D02EMR",
          "drug_formula": "C20H25NO4",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Discontinued in Phase 3",
          "indication": null,
          "mechanism": null,
          "synonyms": "Ariflo | cis-4-cyano-4-(3-(cyclopentyloxy)-4-methoxyphenyl)cyclohexanecarboxylic acid",
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/16634702",
              "__typename": "_CompoundIsInhibitor"
            },
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/19046132",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Linagliptin is a DPP-4 inhibitor developed by Boehringer Ingelheim for the treatment of type II diabetes [Wikipedia]. Two pharmacological characteristics that sets linagliptin apart from other DPP-4 inhibitors is that it has a non-linear pharmacokinetic profile and is not primarily eliminated by the renal system. FDA approved on May 2, 2011. ",
          "type": "small molecule",
          "name": "Linagliptin",
          "source": "DrugBank, TTD",
          "company": "Boehringer Ingelheim",
          "ttd_id": "D02EYG",
          "chebi_id": "68610",
          "chemspider_id": null,
          "drugbank_id": "DB08882",
          "kegg_drug_id": "D09566",
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "3X29ZEJ4R2",
          "inchi": "1S/C25H28N8O2/c1-4-5-13-32-21-22(29-24(32)31-12-8-9-17(26)14-31)30(3)25(35)33(23(21)34)15-20-27-16(2)18-10-6-7-11-19(18)28-20/h6-7,10-11,17H,8-9,12-15,26H2,1-3H3/t17-/m1/s1",
          "inchikey": "LTXREWYXXSTFRX-QGZVFWFLSA-N",
          "cas_number": "668270-12-0",
          "accession_numbers": null,
          "compound_class": null,
          "groups": "approved",
          "categories": "Dipeptidyl-Peptidase IV Inhibitors|Antidiabetic Agents",
          "atc_codes": "A10BH05",
          "source_url": "https://www.drugbank.ca/drugs/DB08882, http://db.idrblab.net/ttd/data/drug/details/D02EYG",
          "drug_formula": "C25H28N8O2",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": "Linagliptin is used for the management of type 2 diabetes mellitus. ",
          "mechanism": "Linagliptin is a competitive and reversible dipeptidyl peptidase (DPP)-4 enzyme inhibitor that slows the breakdown of insulinotropic hormone glucagon-like peptide (GLP)-1 for better glycemic control in diabetes patients. GLP and glucose-dependent insulinotropic polypeptide (GIP) are incretin hormones that increase the production and release of insulin from pancreatic beta cells and decrease the release of glucagon from pancreatic alpha cells. This results in a overall decrease in glucose production in the liver and increase an of insulin in a glucose-dependent manner.",
          "synonyms": "(R)-8-(3-aminopiperidin-1-yl)-7-but-2-ynyl-3-methyl-1-(4-methylquinazolin-2-ylmethyl)-3,7-dihydro-purine-2,6-dione | Linagliptin | Linagliptina",
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.boehringer-ingelheim.com/corporate/research/pipeline.asp; http://www.ncbi.nlm.nih.gov/pubmed/19149538",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Fendiline is a coronary vasodilator which inhibits calcium function in muscle cells in excitation-contraction coupling. It has been proposed as an antiarrhythmic and antianginal agent. Fendiline is non-selective. ",
          "type": "small molecule",
          "name": "Fendiline",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D02FEA",
          "chebi_id": null,
          "chemspider_id": null,
          "drugbank_id": "DB08980",
          "kegg_drug_id": "D07185",
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "S253D559A8",
          "inchi": "1/C23H25N/c1-19(20-11-5-2-6-12-20)24-18-17-23(21-13-7-3-8-14-21)22-15-9-4-10-16-22/h2-16,19,23-24H,17-18H2,1H3",
          "inchikey": "NMKSAYKQLCHXDK-UHFFFAOYNA-N",
          "cas_number": "13042-18-7",
          "accession_numbers": null,
          "compound_class": null,
          "groups": "withdrawn",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB08980, http://db.idrblab.net/ttd/data/drug/details/D02FEA",
          "drug_formula": "C23H25N",
          "drug_smiles": "CC(C1=CC=CC=C1)NCCC(C2=CC=CC=C2)C3=CC=CC=C3",
          "drug_type": "Small molecular drug",
          "highest_stat": "Withdrawn from market",
          "indication": null,
          "mechanism": null,
          "synonyms": null,
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/20958049",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Sodium bicarbonate is a white, crystalline powder that is commonly used as a pH buffering agent, an electrolyte replenisher, systemic alkalizer and in topical cleansing solutions.",
          "type": "small molecule",
          "name": "Sodium bicarbonate",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D02FLB",
          "chebi_id": "32139",
          "chemspider_id": 8609,
          "drugbank_id": "DB01390",
          "kegg_drug_id": "D01203",
          "kegg_id": "C12603",
          "pubchem_id": "516892",
          "unii": "8MDF5V39QO",
          "inchi": "1S/CH2O3.Na/c2-1(3)4;/h(H2,2,3,4);/q;+1/p-1",
          "inchikey": "UIIMBOGNXHQVGW-UHFFFAOYSA-M",
          "cas_number": "144-55-8",
          "accession_numbers": null,
          "compound_class": null,
          "groups": "approved",
          "categories": null,
          "atc_codes": "B05XA02|B05CB04",
          "source_url": "https://www.drugbank.ca/drugs/DB01390, http://db.idrblab.net/ttd/data/drug/details/D02FLB",
          "drug_formula": "CHNaO3",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": "Sodium bicarbonate is used for the treatment of metabolic acidosis which may occur in severe renal disease, uncontrolled diabetes, circulatory insufficiency due to shock or severe dehydration, extracorporeal circulation of blood, cardiac arrest and severe primary lactic acidosis. Also is indicated in severe diarrhea which is often accompanied by a significant loss of bicarbonate. Further indicated in the treatment of certain drug intoxications, including barbiturates (where dissociation of the barbiturateprotein complex is desired), in poisoning by salicylates or methyl alcohol and in hemolytic reactions requiring alkalinization of the urine to diminish nephrotoxicity of blood pigments.",
          "mechanism": "Sodium bicarbonate is a systemic alkalizer, which increases plasma bicarbonate, buffers excess hydrogen ion concentration, and raises blood pH, thereby reversing the clinical manifestations of acidosis. It is also a urinary alkalizer, increasing the excretion of free bicarbonate ions in the urine, thus effectively raising the urinary pH. By maintaining an alkaline urine, the actual dissolution of uric acid stones may be accomplished. Sodium bicarbonate acts as an antacid and reacts chemically to neutralize or buffer existing quantities of stomach acid but has no direct effect on its output. This action results in increased pH value of stomach contents, thus providing relief of hyperacidity symptoms. [PharmGKB]",
          "synonyms": "Baking soda | Bicarbonate of soda | Carbonic acid monosodium salt | E 500 | E-500 | E500 | NaHCO3 | Natriumhydrogenkarbonat | Sodio bicarbonato | Sodium acid carbonate | Sodium hydrogen carbonate | Sodium hydrogencarbonate",
          "targets": [
            {
              "activity": ".",
              "moa": "Blocker",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/19445797",
              "__typename": "_CompoundTargets"
            },
            {
              "activity": ".",
              "moa": "Blocker",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/18815938",
              "__typename": "_CompoundTargets"
            }
          ],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Neurotoxin produced by fermentation of clostridium botulinum type B. The protein exists in noncovalent association with hemagglutinin and nonhemagglutinin proteins as a neurotoxin complex. The neurotoxin complex is recovered from the fermentation process and purified through a series of precipitation and chromatography steps.",
          "type": "biotech",
          "name": "Botulinum Toxin Type B",
          "source": "DrugBank, TTD",
          "company": "Allergan Inc",
          "ttd_id": "D02FXK",
          "chebi_id": null,
          "chemspider_id": null,
          "drugbank_id": "DB00042",
          "kegg_drug_id": "D02735",
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "0Y70779M1F",
          "inchi": null,
          "inchikey": null,
          "cas_number": "93384-44-2",
          "accession_numbers": "BIOD00070 | BTD00070",
          "compound_class": null,
          "groups": "approved",
          "categories": "Antidystonic Agents",
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB00042, http://db.idrblab.net/ttd/data/drug/details/D02FXK",
          "drug_formula": null,
          "drug_smiles": null,
          "drug_type": null,
          "highest_stat": "Approved",
          "indication": "For the treatment of patients with cervical dystonia to reduce the severity of abnormal head position and neck pain associated with cervical dystonia.",
          "mechanism": "Botulinum Toxin Type B binds to and cleaves the synaptic Vesicle Associated Membrane Protein (VAMP, also known as synaptobrevin) which is a component of the protein complex responsible for docking and fusion of the synaptic vesicle to the presynaptic membrane, a necessary step to neurotransmitter release.",
          "synonyms": "Botulin B | Botulinum B toxin | Botulinum neurotoxin type B precursor | BTX-B | RimabotulinumtoxinB | Toxina botulínica B",
          "targets": [],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [
            {
              "activity": ".",
              "moa": "Binder",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/19401804; http://www.ncbi.nlm.nih.gov/pubmed/19242630",
              "__typename": "_CompoundIsBinder"
            }
          ],
          "__typename": "Compound"
        },
        {
          "description": "A recombinant humanized monoclonal IgG1 antibody that binds to and inhibits the biologic activity of human vascular endothelial growth factor (VEGF). Bevacizumab contains human framework regions and the complementarity-determining regions of a murine antibody that binds to VEGF. Bevacizumab is produced in a Chinese Hamster Ovary mammalian cell expression system in a nutrient medium containing the antibiotic gentamicin and has a molecular weight of approximately 149 kilodaltons.",
          "type": "biotech",
          "name": "Bevacizumab",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D02FZD",
          "chebi_id": null,
          "chemspider_id": null,
          "drugbank_id": "DB00112",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "2S9ZZM9Q9V",
          "inchi": "1S/C16H21NO3/c1-19-14-7-6-11(12-9-16(18)17-10-12)8-15(14)20-13-4-2-3-5-13/h6-8,12-13H,2-5,9-10H2,1H3,(H,17,18)/t12-/m1/s1",
          "inchikey": "HJORMJIFDVBMOB-GFCCVEGCSA-N",
          "cas_number": "216974-75-3",
          "accession_numbers": "BIOD00087 | BTD00087",
          "compound_class": null,
          "groups": "approved|investigational",
          "categories": "Angiogenesis Inhibitors",
          "atc_codes": "L01XC07",
          "source_url": "https://www.drugbank.ca/drugs/DB00112, http://db.idrblab.net/ttd/data/drug/details/D02FZD",
          "drug_formula": "C16H21NO3",
          "drug_smiles": "COC1=C(C=C(C=C1)C2CC(=O)NC2)OC3CCCC3",
          "drug_type": "Small molecular drug",
          "highest_stat": "Investigative",
          "indication": "As part of combination therapy for metastatic colorectal cancer and HER2-negative metastatic breast cancer.",
          "mechanism": "Bevacizumab contains human framework regions with antigen binding regions of a humanised murine antibody that binds to VEGF. Bevacizumab is produced by recombinant DNA technology in a Chinese hamster ovary mammalian cell expression system in a nutrient medium containing the antibiotic gentamicin and is purified by a process that includes specific viral inactivation and removal steps. Bevacizumab binds VEGF and prevents the interaction of VEGF to its receptors (Flt-1 and KDR) on the surface of endothelial cells. This prevents blood vessel proliferation and in response retardation of metastatic tumor growth occurs. ",
          "synonyms": "Anti-VEGF Humanized Monoclonal Antibody | Anti-VEGF monoclonal antibody | Bevacizumab | bevacizumab-awwb | rhuMAb-VEGF",
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/19304913",
              "__typename": "_CompoundIsInhibitor"
            },
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/19304913",
              "__typename": "_CompoundIsInhibitor"
            },
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/19304913; http://www.ncbi.nlm.nih.gov/pubmed/12782945",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Clomocycline is a tetracycline antibiotic.",
          "type": "small molecule",
          "name": "Clomocycline",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D02GAC",
          "chebi_id": "59589",
          "chemspider_id": 4576619,
          "drugbank_id": "DB00453",
          "kegg_drug_id": "D06885",
          "kegg_id": null,
          "pubchem_id": "5464321",
          "unii": "YP0241BU76",
          "inchi": "1S/C23H25ClN2O9/c1-22(34)8-6-9-16(26(2)3)18(30)14(21(33)25-7-27)20(32)23(9,35)19(31)12(8)17(29)13-11(28)5-4-10(24)15(13)22/h4-5,8-9,16,27-28,30-31,34-35H,6-7H2,1-3H3,(H,25,33)/t8-,9-,16-,22-,23-/m0/s1",
          "inchikey": "GJGDLRSSCNAKGL-KMVLDZISSA-N",
          "cas_number": "1181-54-0",
          "accession_numbers": "APRD00343",
          "compound_class": null,
          "groups": "approved",
          "categories": "Tetracyclines",
          "atc_codes": "J01AA11",
          "source_url": "https://www.drugbank.ca/drugs/DB00453, http://db.idrblab.net/ttd/data/drug/details/D02GAC",
          "drug_formula": "C23H25ClN2O9",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": "For the treatment and management of Brucellosis, mycoplasma infection, acne vulgaris, chlamydial infection;Chronic bronchitis",
          "mechanism": "Clomocycline inhibits cell growth by inhibiting translation. It binds to the 30S ribosomal subunit and prevents the amino-acyl tRNA from binding to the A site of the ribosome. The binding is reversible in nature. Clomocycline is lipophilic and can easily pass through the cell membrane or passively diffuses through porin channels in the bacterial membrane.",
          "synonyms": "Chlormethylenecycline | Clomociclina | Clomocyclina | Clomocycline | Clomocyclinum",
          "targets": [],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [
            {
              "activity": ".",
              "moa": "Binder",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/18219717",
              "__typename": "_CompoundIsBinder"
            }
          ],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": "small molecule",
          "name": "Hexadecanal",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06PXR",
          "chebi_id": "17600",
          "chemspider_id": null,
          "drugbank_id": "DB03381",
          "kegg_drug_id": null,
          "kegg_id": "C00517",
          "pubchem_id": "984",
          "unii": "WQD27655QE",
          "inchi": "1S/C16H32O/c1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17/h16H,2-15H2,1H3",
          "inchikey": "NIOYUNMRJMEDGI-UHFFFAOYSA-N",
          "cas_number": "629-80-1",
          "accession_numbers": "EXPT02611",
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB03381, http://db.idrblab.net/ttd/data/drug/details/D06PXR",
          "drug_formula": "C16H32O",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Investigative",
          "indication": null,
          "mechanism": null,
          "synonyms": "1-hexadecanal | 16-hexadecanal | Hexadecanal | n-hexadecanal | Palmitaldehyde",
          "targets": [],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": "small molecule",
          "name": "(10R)-10-methyl-3-(6-methylpyridin-3-yl)-9,10,11,12-tetrahydro-8H-[1,4]diazepino[5',6':4,5]thieno[3,2-f]quinolin-8-one",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06QBJ",
          "chebi_id": null,
          "chemspider_id": null,
          "drugbank_id": "DB07430",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": "44631903",
          "unii": null,
          "inchi": "1S/C21H18N4OS/c1-11-3-4-13(10-22-11)15-6-5-14-16(25-15)7-8-17-18(14)19-20(27-17)21(26)24-12(2)9-23-19/h3-8,10,12,23H,9H2,1-2H3,(H,24,26)/t12-/m1/s1",
          "inchikey": "CMWRPDHVGMHLSZ-GFCCVEGCSA-N",
          "cas_number": null,
          "accession_numbers": null,
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB07430, http://db.idrblab.net/ttd/data/drug/details/D06QBJ",
          "drug_formula": "C21H18N4OS",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Investigative",
          "indication": null,
          "mechanism": null,
          "synonyms": null,
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/20237073",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Cefmenoxime is a third-generation cephalosporin antibiotic. [Wikipedia]",
          "type": "small molecule",
          "name": "Cefmenoxime",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06QCC",
          "chebi_id": "55490",
          "chemspider_id": null,
          "drugbank_id": "DB00267",
          "kegg_drug_id": "D01739",
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "KBZ4844CXN",
          "inchi": "1S/C16H17N9O5S3/c1-24-16(20-22-23-24)33-4-6-3-31-13-9(12(27)25(13)10(6)14(28)29)19-11(26)8(21-30-2)7-5-32-15(17)18-7/h5,9,13H,3-4H2,1-2H3,(H2,17,18)(H,19,26)(H,28,29)/b21-8-/t9-,13-/m1/s1",
          "inchikey": "HJJDBAOLQAWBMH-YCRCPZNHSA-N",
          "cas_number": "65085-01-0",
          "accession_numbers": "APRD00851",
          "compound_class": null,
          "groups": "approved",
          "categories": "Anti-Bacterial Agents|Cephalosporins",
          "atc_codes": "J01DD05",
          "source_url": "https://www.drugbank.ca/drugs/DB00267, http://db.idrblab.net/ttd/data/drug/details/D06QCC",
          "drug_formula": "C16H17N9O5S3",
          "drug_smiles": "CN1C(=NN=N1)SCC2=C(N3C(C(C3=O)NC(=O)C(=NOC)C4=CSC(=N4)N<br />)SC2)C(=O)O",
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": "Used to treat female gynecologic and obstetric infections caused by susceptible aerobic (including the gonococcus) and anaerobic bacteria.",
          "mechanism": "The bactericidal activity of cefmenoxime results from the inhibition of cell wall synthesis via affinity for penicillin-binding proteins (PBPs). Cefmenoxime is stable in the presence of a variety of b-lactamases, including penicillinases and some cephalosporinases.",
          "synonyms": "(6R,7R)-7-((Z)-2-(2-Amino-4-thiazolyl)-2-methoxyiminoacetamido)-3-((1-methyl-1H-5-tetraazolylthio)methyl)-8-oxo-5-thia-1-azabicyclo(4.2.0)oct-2-en-2-carbonsaeure | (6R,7R)-7-[[(2E)-2-(2-amino-1,3-thiazol-4-yl)-2-methoxyiminoacetyl]amino]-3-[(1-methyltetrazol-5-yl)sulfanylmethyl]-8-oxo-5-thia-1-azabicyclo[4.2.0]oct-2-ene-2-carboxylic acid | Cefmenoxima | Cefmenoxime | Cefmenoximum | CMX",
          "targets": [],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [
            {
              "activity": ".",
              "moa": "Binder",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/3134847",
              "__typename": "_CompoundIsBinder"
            }
          ],
          "__typename": "Compound"
        },
        {
          "description": "A component of phosphatidylcholines (lecithins), in which the two hydroxy groups of glycerol are esterified with fatty acids. (From Stedman, 26th ed) It counteracts the effects of urea on enzymes and other macromolecules. [PubChem]",
          "type": "small molecule",
          "name": "Choline alfoscerate",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06QDR",
          "chebi_id": "16870",
          "chemspider_id": null,
          "drugbank_id": "DB04660",
          "kegg_drug_id": null,
          "kegg_id": "C00670",
          "pubchem_id": "439285",
          "unii": "60M22SGW66",
          "inchi": "1S/C8H20NO6P/c1-9(2,3)4-5-14-16(12,13)15-7-8(11)6-10/h8,10-11H,4-7H2,1-3H3/p+1/t8-/m1/s1",
          "inchikey": "SUHOQUVVVLNYQR-MRVPVSSYSA-O",
          "cas_number": "28319-77-9",
          "accession_numbers": null,
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB04660, http://db.idrblab.net/ttd/data/drug/details/D06QDR",
          "drug_formula": "C8H21NO6P+",
          "drug_smiles": "C[N+](C)(C)CCOP(=O)(O)OCC(CO)O",
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": null,
          "mechanism": null,
          "synonyms": "(2R)-2,3-dihydroxypropyl 2-(trimethylammonio)ethyl phosphate | alpha-Glycerophosphorylcholine | Choline alphoscerate | Choline glycerophosphate | Cholini glycerophosphas | Glicerofosfato de colina | Glycerol phosphorylcholine | Glycerol-3-phosphatidylcholine | glycerol-3-phosphocholine | Glycerophosphate de choline | Glycerophosphocholine | Glycerophosphorylcholine | GPCho | L-alpha-Glycerophosphocholine | L-alpha-Glycerophosphorylcholine | sn-3-GPC | sn-Glycero-3-phosphocholine",
          "targets": [
            {
              "activity": ".",
              "moa": "Modulator",
              "reference": "http://www.guidetopharmacology.org/GRAC/ObjectDisplayForward?objectId=467",
              "__typename": "_CompoundTargets"
            }
          ],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": "small molecule",
          "name": "(5-(PYRIDIN-3-YL)FURAN-2-YL)METHANAMINE",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06QFO",
          "chebi_id": "41804",
          "chemspider_id": 9507709,
          "drugbank_id": "DB07621",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": "11332763",
          "unii": null,
          "inchi": "1S/C10H10N2O/c11-6-9-3-4-10(13-9)8-2-1-5-12-7-8/h1-5,7H,6,11H2",
          "inchikey": "LENAVORGWBTPJR-UHFFFAOYSA-N",
          "cas_number": null,
          "accession_numbers": null,
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB07621, http://db.idrblab.net/ttd/data/drug/details/D06QFO",
          "drug_formula": "C10H10N2O",
          "drug_smiles": "C1=CC(=CN=C1)C2=CC=C(O2)CN",
          "drug_type": "Small molecular drug",
          "highest_stat": "Investigative",
          "indication": null,
          "mechanism": null,
          "synonyms": null,
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/17125252",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": null,
          "name": "Brodimoprim",
          "source": "DrugBank, TTD",
          "company": "Helsinn Group",
          "ttd_id": "D06QKV",
          "chebi_id": null,
          "chemspider_id": null,
          "drugbank_id": "DB13795",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "V1YC7T6LLI",
          "inchi": null,
          "inchikey": null,
          "cas_number": "56518-41-3",
          "accession_numbers": null,
          "compound_class": null,
          "groups": null,
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB13795, http://db.idrblab.net/ttd/data/drug/details/D06QKV",
          "drug_formula": "C13H15BrN4O2",
          "drug_smiles": "n1c(c(Cc2cc(c(c(c2)OC)Br)OC)cnc1N)N",
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": null,
          "mechanism": null,
          "synonyms": "2,4-diamino-5-(4-bromo-3,5-dimethoxybenzyl)pyrimidine | Brodimoprim | Brodimoprima | Brodimoprime | Brodimoprimum",
          "targets": [],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": "small molecule",
          "name": "FR230513",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06QTC",
          "chebi_id": null,
          "chemspider_id": 394471,
          "drugbank_id": "DB03572",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": "447341",
          "unii": null,
          "inchi": "1S/C18H19N3O2/c19-18(23)17-10-21(12-20-17)15(11-22)9-8-14-6-3-5-13-4-1-2-7-16(13)14/h1-7,10,12,15,22H,8-9,11H2,(H2,19,23)/t15-/m1/s1",
          "inchikey": "URGFTPMACWKJKU-OAHLLOKOSA-N",
          "cas_number": null,
          "accession_numbers": "EXPT01484",
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB03572, http://db.idrblab.net/ttd/data/drug/details/D06QTC",
          "drug_formula": "C18H19N3O2",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Investigative",
          "indication": null,
          "mechanism": null,
          "synonyms": null,
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/10592235",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": "small molecule",
          "name": "3-(3-methoxybenzyl)-1H-pyrrolo[2,3-b]pyridine",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06QUJ",
          "chebi_id": null,
          "chemspider_id": 22376728,
          "drugbank_id": "DB07525",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": "24180722",
          "unii": null,
          "inchi": "1S/C15H14N2O/c1-18-13-5-2-4-11(9-13)8-12-10-17-15-14(12)6-3-7-16-15/h2-7,9-10H,8H2,1H3,(H,16,17)",
          "inchikey": "GHQCCHWTDLTMJT-UHFFFAOYSA-N",
          "cas_number": null,
          "accession_numbers": null,
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB07525, http://db.idrblab.net/ttd/data/drug/details/D06QUJ",
          "drug_formula": "C15H14N2O",
          "drug_smiles": null,
          "drug_type": "Small molecular drug",
          "highest_stat": "Investigative",
          "indication": null,
          "mechanism": null,
          "synonyms": null,
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/10592235",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "An anthelmintic used primarily as the citrate in the treatment of filariasis, particularly infestations with Wucheria bancrofti or Loa loa. [PubChem]",
          "type": "small molecule",
          "name": "Diethylcarbamazine",
          "source": "DrugBank, TTD",
          "company": "Lederle Laboratories Div American Cyanamid Co",
          "ttd_id": "D06RCB",
          "chebi_id": null,
          "chemspider_id": 2944,
          "drugbank_id": "DB00711",
          "kegg_drug_id": "D00803",
          "kegg_id": "C07968",
          "pubchem_id": "3052",
          "unii": "V867Q8X3ZD",
          "inchi": "1S/C10H21N3O/c1-4-12(5-2)10(14)13-8-6-11(3)7-9-13/h4-9H2,1-3H3",
          "inchikey": "RCKMWOKWVGPNJF-UHFFFAOYSA-N",
          "cas_number": "90-89-1",
          "accession_numbers": "APRD00918",
          "compound_class": null,
          "groups": "approved",
          "categories": "Lipoxygenase Inhibitors|Filaricides",
          "atc_codes": "P02CB02",
          "source_url": "https://www.drugbank.ca/drugs/DB00711, http://db.idrblab.net/ttd/data/drug/details/D06RCB",
          "drug_formula": "C10H21N3O",
          "drug_smiles": "CCN(CC)C(=O)N1CCN(CC1)C",
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": "Used for the treatment of individual patients with certain filarial diseases including tropical pulmonary eosinophilia, loiasis, and lymphatic filariasis caused by infection with <i>Wuchereria bancrofti</i>, <i>Brugia malayi</i>, or <i>Brugia timori</i>.",
          "mechanism": "The mechanism of action of diethylcarbamazine is thought to involve sensitizing the microfilariae to phagocytosis. One study showed that diethylcarbamazine's activity against <i>Brugia malayi</i> microfilariae is dependent on inducible nitric-oxide synthase and the cyclooxygenase pathway. It confirmed the important role of the arachidonic acid metabolic pathway in diethylcarbamazine's mechanism of action <i>in vivo</i> and showes that in addition to its effects on the 5-lipoxygenase pathway, it targets the cyclooxygenase pathway and COX-1.",
          "synonyms": "Diethylcarbamazin | Diéthylcarbamazine | Diethylcarbamazine | Diethylcarbamazinum | Dietilcarbamazina",
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/10518442",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Bitolterol mesylate is a beta-2-adrenergic receptor agonist used for the relief of bronchospasm in conditions such as asthma and COPD. Bitolterol was withdrawn from the market by Elan Pharmaceuticals in 2001. [Wikipedia]",
          "type": "small molecule",
          "name": "Bitolterol",
          "source": "DrugBank, TTD",
          "company": "Sanofi Aventis Us Llc",
          "ttd_id": "D06RUL",
          "chebi_id": "3133",
          "chemspider_id": 32525,
          "drugbank_id": "DB00901",
          "kegg_drug_id": "D00684",
          "kegg_id": "C06853",
          "pubchem_id": "35330",
          "unii": "9KY0QXD6LI",
          "inchi": "1S/C28H31NO5/c1-18-6-10-20(11-7-18)26(31)33-24-15-14-22(23(30)17-29-28(3,4)5)16-25(24)34-27(32)21-12-8-19(2)9-13-21/h6-16,23,29-30H,17H2,1-5H3",
          "inchikey": "FZGVEKPRDOIXJY-UHFFFAOYSA-N",
          "cas_number": "30392-40-6",
          "accession_numbers": "APRD00827",
          "compound_class": null,
          "groups": "withdrawn",
          "categories": "Adrenergic beta-2 Receptor Agonists|Bronchodilator Agents",
          "atc_codes": "R03AC17",
          "source_url": "https://www.drugbank.ca/drugs/DB00901, http://db.idrblab.net/ttd/data/drug/details/D06RUL",
          "drug_formula": "C28H31NO5",
          "drug_smiles": "Cc1ccc(cc1)C(=O)Oc2ccc(cc2OC(=O)c3ccc(C)cc3)C(O)CNC(C)(<br />C)C",
          "drug_type": "Small molecular drug",
          "highest_stat": "Approved",
          "indication": "Used to dilate air passages in the lungs that have become narrowed as a result of disease or inflammation. It is used in the treatment of asthma and chronic obstructive pulmonary disease (COPD).",
          "mechanism": "Bitolterol is an adrenergic beta-2 agonist. Asthma results from a narrowing of the bronchial tubes. This narrowing is caused by muscle spasm and inflammation within the bronchial tubes. Agonism of the beta-2 adrenergic receptors by bitolterol leads to a relaxation of the smooth muscles surrounding these airway tubes which then increases the diameter and ease of air flow through the tubes.",
          "synonyms": "4-(2-(tert-butylamino)-1-hydroxyethyl)-o-phenylene di-p-toluate | 4-[2-(tert-butylamino)-1-hydroxyethyl]-o-phenylene di-p-toluate | bis(4-methylbenzoic acid) 4-[2-(tert-butylamino)-1-hydroxyethyl]-1,2-phenylene ester | Bitolterol | Bitoltérol | Bitolterolum",
          "targets": [
            {
              "activity": ".",
              "moa": "Modulator",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/3895171; https://www.accessdata.fda.gov/scripts/cder/drugsatfda/",
              "__typename": "_CompoundTargets"
            }
          ],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": null,
          "name": "Xenon",
          "source": "DrugBank, TTD",
          "company": "Mallinckrodt St. Louis, MO NeuroproteXeon Orchard Park, NY",
          "ttd_id": "D06RVQ",
          "chebi_id": " CHEBI:49957; CHEBI:49956; CHEMBL1236802",
          "chemspider_id": null,
          "drugbank_id": "DB13453",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "3H3U766W84",
          "inchi": null,
          "inchikey": "FHNFHKCVQCLJFQ-UHFFFAOYSA-N",
          "cas_number": "7440-63-3",
          "accession_numbers": null,
          "compound_class": null,
          "groups": null,
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB13453, http://db.idrblab.net/ttd/data/drug/details/D06RVQ",
          "drug_formula": "Xe",
          "drug_smiles": null,
          "drug_type": null,
          "highest_stat": "Phase 3",
          "indication": null,
          "mechanism": null,
          "synonyms": null,
          "targets": [],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": null,
          "type": "small molecule",
          "name": "N-[4-(benzyloxy)phenyl]glycinamide",
          "source": "DrugBank, TTD",
          "company": null,
          "ttd_id": "D06RWH",
          "chebi_id": null,
          "chemspider_id": 20510894,
          "drugbank_id": "DB07099",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": "22690393",
          "unii": null,
          "inchi": "1S/C15H16N2O2/c16-10-15(18)17-13-6-8-14(9-7-13)19-11-12-4-2-1-3-5-12/h1-9H,10-11,16H2,(H,17,18)",
          "inchikey": "YJPUATSIKWOSST-UHFFFAOYSA-N",
          "cas_number": null,
          "accession_numbers": null,
          "compound_class": null,
          "groups": "experimental",
          "categories": null,
          "atc_codes": null,
          "source_url": "https://www.drugbank.ca/drugs/DB07099, http://db.idrblab.net/ttd/data/drug/details/D06RWH",
          "drug_formula": "C15H16N2O2",
          "drug_smiles": "C1=CC=C(C=C1)COC2=CC=C(C=C2)NC(=O)CN",
          "drug_type": "Small molecular drug",
          "highest_stat": "Investigative",
          "indication": null,
          "mechanism": null,
          "synonyms": null,
          "targets": [],
          "isInhibitor": [
            {
              "activity": ".",
              "moa": "Inhibitor",
              "reference": "http://www.ncbi.nlm.nih.gov/pubmed/10592235; http://www.ncbi.nlm.nih.gov/pubmed/18394906",
              "__typename": "_CompoundIsInhibitor"
            }
          ],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
        },
        {
          "description": "Humanized IgG1 Mab that binds to the human interleukin-2 receptor (anti-Tac or anti-CD25). Daclizumab is a composite of human (90%) and murine (10%) antibody sequences. The human sequences were derived from the constant domains of human IgG1 and the variable framework regions of the Eu myeloma antibody. The murine sequences were derived from the complementarity-determining regions of a murine anti-Tac antibody.",
          "type": "biotech",
          "name": "Daclizumab",
          "source": "DrugBank, TTD",
          "company": "Norvatis Phamaceuticals Corporation",
          "ttd_id": "D06SBB",
          "chebi_id": null,
          "chemspider_id": null,
          "drugbank_id": "DB00111",
          "kegg_drug_id": null,
          "kegg_id": null,
          "pubchem_id": null,
          "unii": "CUJ2MVI71Y",
          "inchi": null,
          "inchikey": null,
          "cas_number": "152923-56-3",
          "accession_numbers": "BIOD00007 | BTD00007",
          "compound_class": null,
          "groups": "approved|investigational",
          "categories": "Immunosuppressive Agents",
          "atc_codes": "L04AC01",
          "source_url": "https://www.drugbank.ca/drugs/DB00111, http://db.idrblab.net/ttd/data/drug/details/D06SBB",
          "drug_formula": "C6378H9844N1698O1997S48",
          "drug_smiles": null,
          "drug_type": "Monoclonal antibody",
          "highest_stat": "Approved",
          "indication": "Zenapax is a humanized monoclonal antibody used for prevention of renal transplant rejection",
          "mechanism": "Zenepax binds with high-affinity to the Tac subunit of the high-affinity IL-2 receptor complex and inhibits IL-2 binding. The IL-2 receptor (Tac) subunit is expressed on activated but not resting lymphocytes.",
          "synonyms": "Dacliximab | Daclizumab beta",
          "targets": [
            {
              "activity": ".",
              "moa": "Modulator",
              "reference": "https://www.fda.gov/",
              "__typename": "_CompoundTargets"
            }
          ],
          "isInhibitor": [],
          "isAntagonist": [],
          "isAgonist": [],
          "isActivator": [],
          "isBinder": [],
          "__typename": "Compound"
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
