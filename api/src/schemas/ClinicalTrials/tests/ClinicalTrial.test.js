import test from 'ava';
import gql from 'graphql-tag';
import { client } from '../../client';

test('ClinicalTrial', async t => {
  t.plan(1);
  const query = gql`
    query {
      ClinicalTrial(first: 20) {
        NCTId
        data_source
        url
        refersTo(first: 3) {
          name
        }
        refersToUrl(first: 3) {
          url
        }
        useReferenceAs(first: 3) {
          name
        }
        conductedAt(first: 3) {
          name
          city {
            name
          }
        }
        investigates(first: 3) {
          name
          description
          type
        }
        type(first: 3) {
          type
        }
        isSponsoredBy(first: 3) {
          name
        }
        isSupportedBy {
          name
        }
        isFdaRegulatedDevice(first: 3) {
          YN
        }
        isUnapprovedDevice(first: 3) {
          YN
          expandedAccess(first: 3) {
            NCTId
          }
        }
        isFdaRegulatedDrug(first: 3) {
          YN
          expandedAccess(first: 3) {
            NCTId
          }
        }
        expandedAccess(first: 3) {
          YN
        }
        isStudying(first: 3) {
          disease
          keywords(first: 3) {
            word
            conditions(first: 3) {
              disease
            }
          }
        }
        isPhase(first: 3) {
          phase
        }
        purpose(first: 3) {
          name
        }
        identifications(first: 3) {
          studyId
          acronym
          title {
            briefTitle
            officialTitle
          }
        }
        status(first: 3) {
          status
          stopReason {
            reason
            trials(first: 1) {
              NCTId
            }
          }
        }
        stopped(first: 3) {
          reason
          status {
            status
            stopReason {
              reason
            }
          }
        }
        completed(first: 3) {
          completionDate
          primaryCompletionDate
        }
        conductedBy(first: 3) {
          name
          affiliation
          responsibilities(first: 3) {
            type
            investigator(first: 3) {
              name
            }
          }
        }
        description(first: 3) {
          detailed
          summary
        }
        studyDesign(first: 3) {
          model
          name
          description
          arms(first: 3) {
            name
          }
        }
        observationPeriod(first: 3) {
          time
        }
        primaryOutcome(first: 3) {
          name
          description
          time
          type
        }
        secondaryOutcome(first: 3) {
          name
          description
          time
          type
        }
        otherOutcome(first: 3) {
          name
          description
          time
          type
        }
        studyPopulation(first: 3) {
          name
          sampling
          genders {
            name
            description
          }
        }
        inclusionCriteria(first: 3) {
          criteria
        }
        exclusionCriteria(first: 3) {
          criteria
        }
        contactPerson(first: 3) {
          email
          name
        }
        retainedBioSamples(first: 3) {
          retension
          description
        }
        studyArms(first: 3) {
          name
          description
          model(first: 3) {
            model
            name
            description
          }
        }
      }
    }
  `;
  
  const expected = {
    "data": {
      "ClinicalTrial": [
        {
          "NCTId": "NCT04412265",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04412265",
          "refersTo": [
            {
              "name": "Johnstone J, Parsons R, Botelho F, Millar J, McNeil S, Fulop T, McElhaney J, Andrew MK, Walter SD, Devereaux PJ, Malekesmaeili M, Brinkman RR, Mahony J, Bramson J, Loeb M. Immune biomarkers predictive of respiratory viral infection in elderly nursing home residents. PLoS One. 2014 Oct 2;9(9):e108481. doi: 10.1371/journal.pone.0108481. eCollection 2014.",
              "__typename": "Citation"
            },
            {
              "name": "Clegg A, Young J, Iliffe S, Rikkert MO, Rockwood K. Frailty in elderly people. Lancet. 2013 Mar 2;381(9868):752-62. doi: 10.1016/S0140-6736(12)62167-9. Epub 2013 Feb 8. Review. Erratum in: Lancet. 2013 Oct 19;382(9901):1328.",
              "__typename": "Citation"
            },
            {
              "name": "Wu C, Chen X, Cai Y, Xia J, Zhou X, Xu S, Huang H, Zhang L, Zhou X, Du C, Zhang Y, Song J, Wang S, Chao Y, Yang Z, Xu J, Zhou X, Chen D, Xiong W, Xu L, Zhou F, Jiang J, Bai C, Zheng J, Song Y. Risk Factors Associated With Acute Respiratory Distress Syndrome and Death in Patients With Coronavirus Disease 2019 Pneumonia in Wuhan, China. JAMA Intern Med. 2020 Mar 13. doi: 10.1001/jamainternmed.2020.0994. [Epub ahead of print]",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "ASST Monza-Ospedale San Gerardo",
              "city": {
                "name": "Monza",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "Covid19",
              "keywords": [
                {
                  "word": "Covid-19 treatment",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV Infection",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-Associated Coronavirus",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Interleukin 6",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "High-flow nasal cannula",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "FRA-COVID",
              "acronym": "FRA-COVID",
              "title": [
                {
                  "briefTitle": "Frailty in Elderly Patients With COVID-19",
                  "officialTitle": "Relationship Between Frailty and Clinical Outcomes in Elderly Patients With COVID-19",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "BACKGROUND:\n\nAssessment of frailty is today the best way to evaluate the biological age of the elderly person. Fragility can be defined as a syndrome selected by the reduction of organized reserves and by the decreased resistance to \"stressors\", resulting from the cumulative decline of multiple physiological systems that cause vulnerabilities and adverse consequences.\n\nThe impact of fragility on clinical outcomes has been investigated in numerous studies conducted on elderly patients in various care setting, proving in all of them a significant and more reliable predictor of variables such as age, comorbidity and individual pathologies, short and long-term mortality, length of stay and the onset of complications.\n\nPrevious studies have already shown that frail older adults have a greater susceptibility to viral infections (including non-COVID-19 coronavirus) due to a malfunction of their immune system.\n\nThe identification of fragility could therefore be particularly useful for identifying subjects at risk of negative outcomes (worsening of respiratory parameters, need for intubation, mortality) even in a ward with COVID + patients. In other words, the imperceptible clinical heterogeneity behind the age parameter could be better represented by a multidimensional parameter capable of measuring the accumulation of age-related deficits.\n\nSAMPLE SIZE (n. patients):\n\nThe study plans to recruit 30 subjects per week on average; for an expected total of about 300 subjects.\n\nSTUDY DESIGN:\n\nThe patient will be enrolled in the study when obtaining consent. In this phase the following data will be collected:\n\ndate of birth\ngender\ndemographic data\ncomorbidity\nBrescia_COVID respiratory scale\nmodified Early Warning Score\ndelirium\ndata relating to functional autonomy\nblood chemistry data at the entrance.\n\nUsing the variables that are part of the Comprehensive Geriatric Assessment, it will be possible to calculate the Frailty Index (FI), according to the Rockwood deficit accumulation model. A series of variables will then be collected relating to treatment procedures, therapies, the team's choice to maximize the care ceiling for the individual patient and the patient's clinical outcome.\n\nPatients will be treated as per Normal Clinical Practice; no blood chemistry tests will be required in addition to the panel of tests provided by the hospital's health management for all patients with COVID-19.\n\nGiven the difficulty in systematically obtaining written informed consent and given the great public interest of the project, the research will be conducted in the context of the authorizations guaranteed by Article 89 of the GDPR EU Regulation 2016/679, which guarantees the treatment for purposes of public interest, scientific or historical research or statistical purposes of health data.\n\nSTATISTICAL ANALYSIS:\n\nThe FI will be built according to the Rockwood deficit accumulation model, taking into account a minimum number of variables that are part of the Comprehensive Geriatric Assessment. The FI will be obtained from the ratio between the number of pathological conditions present and the total number of indicators evaluated. Data from patients older than 60 years of age will be compared.",
              "summary": "This is a monocentric retro-prospective observational study that wants to evaluate the relation between frailty and clinical outcomes in elderly patients with COVID-19.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Development of a tool to measure frailty",
              "description": "The aim of the project is to evaluate whether a tool built to measure frailty in elderly patients admitted to the COVID + hospital wards of San Gerardo hospital is more accurate in predicting clinical states than a clinical evaluation developed on age and comorbidity.",
              "time": "Until patient discharge from the hospital (approximately 1 year).",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "A \"proxy\" variable of the fragility index can be built on the basis of regional administrative databases only.",
              "description": "Assess whether a \"proxy\" variable of the fragility index can be built on the basis of regional administrative databases only, which is able to predict the clinical outcomes of COVID + patients better than age and comorbidities alone.",
              "time": "Until patient discharge from the hospital (approximately 1 year).",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Give elements to focus the screening policies for COVID19.",
              "description": "Relate different levels of chronicity with the susceptibility of the elderly subject to infection to give elements to focus the screening policies for COVID19.",
              "time": "Until patient discharge from the hospital (approximately 1 year).",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Give the prevention of contagion at the elderly population level.",
              "description": "Relate different levels of chronicity with the susceptibility of the elderly subject to infection to prevent the contagion at the elderly population level.",
              "time": "Until patient discharge from the hospital (approximately 1 year).",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "The study will be conducted on all patients hospitalized in COVID+ departments of the S.Gerardo Hospital of Monza (Geriatrics Unit, First Aid Unit and Emergency Medicine, Gastroenterology Unit, Infectious Diseases Unit).",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Giuseppe Bellelli",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04427345",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04427345",
          "refersTo": [
            {
              "name": "Wang D, Hu B, Hu C, Zhu F, Liu X, Zhang J, Wang B, Xiang H, Cheng Z, Xiong Y, Zhao Y, Li Y, Wang X, Peng Z. Clinical Characteristics of 138 Hospitalized Patients With 2019 Novel Coronavirus-Infected Pneumonia in Wuhan, China. JAMA. 2020 Feb 7. doi: 10.1001/jama.2020.1585. [Epub ahead of print]",
              "__typename": "Citation"
            },
            {
              "name": "Rosenbaum L. Facing Covid-19 in Italy - Ethics, Logistics, and Therapeutics on the Epidemic's Front Line. N Engl J Med. 2020 May 14;382(20):1873-1875. doi: 10.1056/NEJMp2005492. Epub 2020 Mar 18.",
              "__typename": "Citation"
            },
            {
              "name": "Guan WJ, Ni ZY, Hu Y, Liang WH, Ou CQ, He JX, Liu L, Shan H, Lei CL, Hui DSC, Du B, Li LJ, Zeng G, Yuen KY, Chen RC, Tang CL, Wang T, Chen PY, Xiang J, Li SY, Wang JL, Liang ZJ, Peng YX, Wei L, Liu Y, Hu YH, Peng P, Wang JM, Liu JY, Chen Z, Li G, Zheng ZJ, Qiu SQ, Luo J, Ye CJ, Zhu SY, Zhong NS; China Medical Treatment Expert Group for Covid-19. Clinical Characteristics of Coronavirus Disease 2019 in China. N Engl J Med. 2020 Apr 30;382(18):1708-1720. doi: 10.1056/NEJMoa2002032. Epub 2020 Feb 28.",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "ASST Monza-Ospedale San Gerardo",
              "city": {
                "name": "Monza",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "covid19",
              "keywords": [
                {
                  "word": "Coronavirus",
                  "conditions": [
                    {
                      "disease": "Moderate to Severe Acute Respiratory Distress Syndrome Associated With COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Respiratory Disease",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Neurokinin 1 Receptor, Substance P, Respiratory Illness, Inflammation, Covid-19, Coronavirus",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "sars-covid-2",
                  "conditions": [
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "coronavirus infection",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Severe Acute Respiratory Syndrome",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "MI-COVID",
              "acronym": "MI-COVID",
              "title": [
                {
                  "briefTitle": "Predictive Factors COVID-19 Patients",
                  "officialTitle": "Predictive Clinical Response Factors in COVID-19 Patients",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "BACKGROUND:\n\nThe Severe Acute Respiratory Syndrome-Coronavirus-2 (SARS-CoV-2) pandemic is severely testing the health systems of the most advanced countries. Clinicians are faced with a new pathology of an emerging virus. There is therefore an urgent need to collect real-time clinical data that informs about outcome predictive variables. Furthermore, there are currently no antiviral drugs approved for the treatment of SARS-CoV-2 infection, off-label therapies are being used with drugs already in use for other pathologies that have shown some efficacy in vitro, and some treatments obtained for compassionate use with other drugs that are being tested.\n\nIt is more than ever necessary to collect clinical practice data both retrospectively on the work done so far, and in a longitudinal perspective, and analyze them quickly to optimize current treatments and define protocols for the future. Having a good clinical data base also offers the possibility of collaborating with numerous international networks on translational research, which aims to correlate clinical data with virological and immunological data, aimed at the rapid identification of possible specific viral virulence factors, or particular immune structures of the guests who once again define the final clinical outcome.\n\nSTUDY DESIGN:\n\nAll COVID19 positive patients admitted to San Gerardo Hospital will be enrolled in the study.\n\nAfter patient signs the informed consent, the following data will be collected:\n\nbirth data\nsex\ndemographic data\ncomorbidity\nblood chemistry data at the entrance\n\nA series of variables will then be collected relating to the treatment procedure, the therapies, the team's choice to maximize the care ceiling in the individual patient and the entire clinical study of the patient.\n\nSTATISTICAL ANALISYS:\n\nCentral tendency and dispersion measurements will be used for descriptive analysis of continuous variables while absolute and relative frequencies will be used to describe categorical variables.",
              "summary": "This is a monocentric retro-prospective observational study that will be conducted on all COVID19 positive patients hospitalized at the S. Gerardo Hospital in Monza.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Identify risk factors to build a prognostic score.",
              "description": "Identify the risk factors to build a prognostic score through which it is possible to define a stratification that immediately guides the therapeutic choices.",
              "time": "Until patient discharge from the hospital (approximately 1 year)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Identify risk factors for intra-hospital mortality.",
              "description": "Identify risk factors for intra-hospital mortality in patients admitted to the COVID + hospital wards of San Gerardo hospital.",
              "time": "Until patient discharge from the hospital (approximately 1 year)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Identify risk factors to build a prognostic score.",
              "description": "Identify the risk factors to build a prognostic score through which it is possible to define a stratification that immediately directs towards the right intensity of care.",
              "time": "Until patient discharge from the hospital (approximately 1 year)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Predictive factors for clinical status patients based on \"Ordinal Scale for Clinical Improvement\"",
              "description": "Description of the predictive factors for the clinical status of patients based on \"Ordinal Scale for Clinical Improvement\" defined by OMS (",
              "time": "Until patient discharge from the hospital (approximately 1 year)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Describe the anti-viral therapies used commonly used in this emergency in terms of safety",
              "description": "Description of safety of the anti-viral therapies used today without particular restrictions, but on which solid clinical functioning tests are lacking.",
              "time": "Until patient discharge from the hospital (approximately 1 year).",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Predictive factors for the hospitalization duration.",
              "description": "Description of the predictive factors for the hospitalization duration.",
              "time": "Until patient discharge from the hospital (approximately 1 year)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "The study involves patients admitted to San Gerardo Hospital from March 1, 2020 to May 31, 2020. The minimum expected follow-up will be one year for all patients.\n\nGiven the nature of the study, no formal calculation of the sample size was made, nor was a sample size predefined. However, given the recruiting potential of the center which in March saw on average 30-60 hospitalizations due to SARS-CoV-2 per day, even considering a progressive decrease in access, it is assumed that the proportion of patients who will be included in the study will exceed 1000 units.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Paolo Bonfanti",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04395482",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04395482",
          "refersTo": [
            {
              "name": "Ki M; Task Force for 2019-nCoV. Epidemiologic characteristics of early cases with 2019 novel coronavirus (2019-nCoV) disease in Korea. Epidemiol Health. 2020;42:e2020007. doi: 10.4178/epih.e2020007. Epub 2020 Feb 9.",
              "__typename": "Citation"
            },
            {
              "name": "Guo L, Wei D, Zhang X, Wu Y, Li Q, Zhou M, Qu J. Clinical Features Predicting Mortality Risk in Patients With Viral Pneumonia: The MuLBSTA Score. Front Microbiol. 2019 Dec 3;10:2752. doi: 10.3389/fmicb.2019.02752. eCollection 2019. Erratum in: Front Microbiol. 2020 Jun 09;11:1304.",
              "__typename": "Citation"
            },
            {
              "name": "Dong E, Du H, Gardner L. An interactive web-based dashboard to track COVID-19 in real time. Lancet Infect Dis. 2020 May;20(5):533-534. doi: 10.1016/S1473-3099(20)30120-1. Epub 2020 Feb 19. Erratum in: Lancet Infect Dis. 2020 Jun 12;:.",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [
            {
              "url": "http://coronavirus.jhu.edu/map.html",
              "__typename": "Link"
            },
            {
              "url": "http://www.whitehouse.gov/presidential-actions/proclamation-declaring-national-emergency-concerning-novel-coronavirus-disease-covid-19-outbreak.",
              "__typename": "Link"
            },
            {
              "url": "http://www.cnr.it/it/nota-stampa/n-9281/analisi-numerica-dei-dati-relativi-alla-diffusione-del-covid-19-in-italia-e-nel-mondo",
              "__typename": "Link"
            }
          ],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "ASST di Lecco Ospedale Alessandro Manzoni",
              "city": {
                "name": "Lecco",
                "__typename": "City"
              },
              "__typename": "Facility"
            },
            {
              "name": "Azienda Ospedaliero-Universitaria di Ferrara",
              "city": {
                "name": "Ferrara",
                "__typename": "City"
              },
              "__typename": "Facility"
            },
            {
              "name": "Istituto per la Sicurezza Sociale-Ospedale della Repubblica di San Marino",
              "city": {
                "name": "San Marino",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "covid19",
              "keywords": [
                {
                  "word": "Coronavirus",
                  "conditions": [
                    {
                      "disease": "Moderate to Severe Acute Respiratory Distress Syndrome Associated With COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Respiratory Disease",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Neurokinin 1 Receptor, Substance P, Respiratory Illness, Inflammation, Covid-19, Coronavirus",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "sars-covid-2",
                  "conditions": [
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "coronavirus infection",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Severe Acute Respiratory Syndrome",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "TAC-COVID19",
              "acronym": "TAC-COVID19",
              "title": [
                {
                  "briefTitle": "Lung CT Scan Analysis of SARS-CoV2 Induced Lung Injury",
                  "officialTitle": "Lung CT Scan Analysis of SARS-CoV2 Induced Lung Injury by Machine Learning: a Multicenter Retrospective Cohort Study.",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "BACKGROUND:\n\nIn February, the first case of SARS-CoV2 positive patient was recorded in Lombardy (Italy), a virus capable of causing a severe form of acute respiratory failure called Coronavirus Disease 2019 (COVID-19).\n\nQualitative assessments of lung morphology have been identified to describe macroscopic characteristics of this infection upon admission and during the hospitalization of patients.\n\nAt the moment, there are no studies that have exhaustively described the parenchymal lung damage induced by SARS-CoV2 by quantitative analysis.\n\nThe hypothesis of this study is that specific morphological and quantitative alterations of the lung parenchyma assessed by means of CT scan in patients suffering from severe respiratory insufficiency induced by SARS-CoV2 may have an impact on the severity of the degree of alteration of the respiratory exchanges (oxygenation and clearance of the CO2) and have an impact on patient outcome.\n\nThe presence of characteristic lung morphological patterns assessed by CT scan could allow the recognition of specific patient clusters who can benefit from intensive treatment differently, making a significant contribution to stratifying the severity of patients and their risk of mortality.\n\nThis is an exploratory clinical descriptive study of lung CT images in a completely new patient population who are nucleic acid amplification test confirmed SARS-CoV2 positive.\n\nSAMPLE SIZE (n. patients):\n\nThe study will collect all patients with the inclusion criteria; a total of 500 patients are expected to be collected.\n\nAbout 80 patients will be enrolled for each local experimental center.\n\nThe following patient data will be analyzed:\n\nblood gas analytical data assigned to the CT scan, checks performed upon entering the hospital, at the time of performing the CT scan, admission to intensive care and 7 days after entry\npatient characteristics such as age, gender and body mass index (BMI)\ncomorbidity\npresence of organ dysfunction with the Sequential Organ Failure Assessment (SOFA)\nlaboratory data relating to hospital admission and symptoms prior to hospitalization.\nventilator and hemodynamic parameters upon entering the hospital, at the time of carrying out the CT scan, upon admission to intensive care and 7 days after entry.\n\nThe machine learning approach of lung CT scan analysis will aim at evaluating:\n\nQuantitative and qualitative lung alterations;\nThe stratification of such morphological characteristics in specific morphological lung clusters identified by the means of artificial intelligence using deep learning algorithms.\n\nETHICAL ASPECTS:\n\nThe lung CT scan images will be collected and anonymized. Images will be subsequently sent by University of Milano-Bicocca Institutional google drive account to the University of Pennsylvania, Department of Anesthesiology and Critical Care and the Department of Radiology in a deidentified format for advanced quantitative analysis taking advantage of artificial intelligence using deep learning algorithms.\n\nThe data will be collected in a pseudo-anonymous way through paper Case Report Form (CRF) and analyzed by the scientific coordinator of the project.\n\nGiven the retrospective nature of the study and in the presence of technical difficult in obtaining an informed consent of patients in this period of pandemic emergency, informed consent will be waived.\n\nSTATISTICAL ANALYSIS:\n\nContinuous data will be expressed as mean ± standard deviation or median and interquartile range, according to data distribution that will be evaluated by the Shapiro-Wilk test. Categorical variables will be expressed as proportions (frequency).\n\nThe deep learning segmentation algorithm will segment the lung parenchyma from the entire CT lung. Lung volume, lung weight and opacity intensity distribution analysis will be applied. Second, clustering analysis to stratify the patients will be performed. Both an intensity and a spatial clustering algorithm will be tested. Third, a model will be trained to predict the injury progression using the images and all other patient data. Statistical significance will be considered in the presence of a p<0.05 (two-tailed).",
              "summary": "This is a multicenter observational retrospective cohort study that aims to study the morphological characteristics of the lung parenchyma of SARS-CoV2 positive patients identifiable in patterns through artificial intelligence techniques and their impact on patient outcome.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "A qualitative analysis of parenchymal lung damage induced by COVID-19",
              "description": "Describe the parenchymal lung damage induced by COVID-19 through a qualitative analysis with chest CT through artificial intelligence techniques.",
              "time": "Until patient discharge from the hospital (approximately 6 months)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "A quantitative analysis of parenchymal lung damage induced by COVID-19",
              "description": "Describe the parenchymal lung damage induced by COVID-19 through a quantitative analysis with chest CT through artificial intelligence techniques.",
              "time": "Until patient discharge from the hospital (approximately 6 months)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "The potential impact of parenchymal morphological CT scans in patients with severe moderate respiratory failure.",
              "description": "The potential impact of parenchymal morphological CT scans in patients with severe moderate respiratory failure assessed as days free from mechanical ventilation.",
              "time": "Until patient discharge from the hospital (approximately 6 months)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "The ability within which the analysis of artificial intelligence that uses deep learning models can be used to predict clinical outcomes",
              "description": "Determine the capacity within which the artificial intelligence analysis that uses deep learning models can be used to predict clinical outcomes from the analysis of the characteristics of the chest CT obtained within 7 days of hospital admission; combining quantitative CT data with clinical data.",
              "time": "Until patient discharge from the hospital (approximately 6 months)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "The potential impact of parenchymal morphological CT scans in patients with severe moderate respiratory failure.",
              "description": "The potential impact of parenchymal morphological CT scans in patients with severe moderate respiratory failure assessed as intensive care mortality.",
              "time": "Until patient discharge from the hospital (approximately 6 months)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "The goal is to collect as many lung CT scan images as possible in patients with COVID-19; according to the preliminary evaluation estimate, a total of 500 patients are expected to be collected.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Giacomo Bellani",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Emanuele Rezoagli",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04378452",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04378452",
          "refersTo": [],
          "refersToUrl": [
            {
              "url": "https://smatb.typeform.com/to/RlMXLE",
              "__typename": "Link"
            },
            {
              "url": "https://comcovid.wixsite.com/com-covid?lang=en",
              "__typename": "Link"
            },
            {
              "url": "https://smatb.typeform.com/to/Y3dn1S",
              "__typename": "Link"
            }
          ],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Fundació Institut Germans Trias i Pujol",
              "city": {
                "name": "Badalona",
                "__typename": "City"
              },
              "__typename": "Facility"
            },
            {
              "name": "Fundació Lluita contra la Sida (FLS, Fight AIDS Foundation)",
              "city": {
                "name": "Badalona",
                "__typename": "City"
              },
              "__typename": "Facility"
            },
            {
              "name": "Anaxomics biotech",
              "city": {
                "name": "Barcelona",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "Quality of Life",
              "keywords": [
                {
                  "word": "quality of life",
                  "conditions": [
                    {
                      "disease": "Parkinson Disease",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Parkinson Disease 10",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Multiple Sclerosis",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "psycho-social impact",
                  "conditions": [
                    {
                      "disease": "Quality of Life",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Mental Health Wellness 1",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Turkish Society",
                  "conditions": [
                    {
                      "disease": "Quality of Life",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Social Isolation",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid 19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            },
            {
              "disease": "COVID-19",
              "keywords": [
                {
                  "word": "eculizumab",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Lung Injury/Acute Respiratory Distress Syndrome (ARDS)",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Pneumonia, Viral",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "severe acute respiratory syndrome coronavirus 2",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Lung Injury/Acute Respiratory Distress Syndrome (ARDS)",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Pneumonia, Viral",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Soliris",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Coronavirus",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Lung Injury/Acute Respiratory Distress Syndrome (ARDS)",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            },
            {
              "disease": "Social Distance",
              "keywords": [
                {
                  "word": "SARS-CoV-2",
                  "conditions": [
                    {
                      "disease": "Coronavirus Disease 2019",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Immunocompromised",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Enzyme Inhibitors",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "infectious diseases",
                  "conditions": [
                    {
                      "disease": "Psychological",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "psycho-social impact",
                  "conditions": [
                    {
                      "disease": "Quality of Life",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Mental Health Wellness 1",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "COM-COVID",
              "acronym": "COM-COVID",
              "title": [
                {
                  "briefTitle": "Assessment of the Psycho-social Impact of COVID-19 Outbreak",
                  "officialTitle": "Assessment of the Psycho-social Impact of COVID-19 Outbreak (COM-COVID)",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "In March 30, 2020, 78797 confirmed cases of SARS-CoV-2, 6528 deaths and 14709 recovered were reported in Spain[1]; 16157 cases and 1410 deaths recorded in Catalonia[2]. Case fatality (8%) is calculated on the registered cases, even if the actual mortality rate is uncertain as the total number of cases (including those undiagnosed and with mild symptoms) is unknown [3]. It is already a fact that there is local transmission of SARS-CoV-2 in the community. Everyone with a compatible respiratory condition is considered likely to be a case of SARS-CoV-2[4], despite that the etiological diagnosis cannot be made in this context of health emergency for all cases suspected, because of the lack of kits, personnel and saturation of the health system.\n\nOther major outbreaks of infectious diseases as Ebola have demonstrated that there is an important impact on the individuals and the communities. Psychological effects of the disease itself as well as the traumatic experience on the beloved ones are seen at individual level. At community level, health services, social system and economic productivity are severely affected[5].\n\nAfter 2 months weeks of first case reported in Spain and 2,5 weeks of the quarantine and self-isolation of the region of Catalonia, the emotional burden of the general community has increased. In previous studies in other countries in which the SARS-CoV-2 epidemics have precede ours, a non despicable impact on mental health and emotional burden has been reported as well as has been demonstrated in mass quarantines which have been implemented in other epidemics context [6-8]. Moreover, a certain level of anxiety has been reported as necessary to adopt recommended precautionary measures against infection outbreaks[9], and therefore to successfully implement public health interventions understanding the attitudes and measuring psychological impact on people should be mandatory.\n\nOn the other hand, in our setting by last report at 30th March 2020, 2600 of the confirmed cases in Catalonia are healthcare workers, representing the 16%. Besides their obvious increased risk of being infected, the healthcare workers facing the SARS-CoV-2 epidemics at frontline (emergency rooms, ICUs and other dept.) are put under a lot of stress and levels of anxiety. This is worse as the tension to the Health Systems increase, they needing to face important ethical dilemmas including triage of patients. Moreover, SARS epidemic proved not only that frontline healthcare workers suffered from chronic stress, but that this lasted at least for one year after the epidemics wave was over [10].\n\nThe aim of the present study is to assess the psychological and socio-economic impact of the COVID-19 epidemics, and we intend to do this on both the general population and the healthcare workers.\n\nAn anonymous online survey is been shared through social media networks (including telegram, whatsapp, twitter) in order to get as many responses as possible from individuals of >16 years old. For the healthcare workers subpopulation the questionnaire will be also be distributed via email, posters, institutional websites and other means deemed appropriate (in hospital or other healthcare settings). The anonymous online survey will include questions on sociodemographic data, physical symptoms in the past 14 days, socio-economic impact of the COVID-19 outbreak, psychological impact of the COVID-19 outbreak and mental health status (through questions related to depression, anxiety, stress and PSTD, which have been used in other studies). We will share the survey through social media using the snowball sampling. We will continuously share the survey in order to collect responses 6 months after the outbreak, to learn how much the impact of it can last.\n\nThe results obtained will allow us to:\n\nUnderstand more accurately the impact of the COVID-19 outbreak on general population wellbeing.\nMeasuring the impact on the health-care workers subpopulation which is critical to cope outbreaks is important to design interventions for stress management and enchance infection-control measures and patient care.\n\nThe COM-COVID project is led by Dr. Cris Vilaplana (Institute for Health Science Research Germans Trias i Pujol (IGTP)). Dr. Vilaplana's team, mainly dedicated to the study of tuberculosis (https://unitatdetuberculosiexperimental.wordpress.com/), has been following a research line for the last 4 years measuring the quality of life of people in the context of infectious diseases so that they can study people suffering from them in a more holistic and humanistic way[11,12]. The project is an initiative of the SMA-TB consortium (https://www.smatb.eu/) (IGTP and Anaxomics) to fight against COVID-19. The Fundació Lluita contra la SIDA (https://www.flsida.org/en) is also collaborating in the project.",
              "summary": "It has been shown in previous important outbreaks of infectious diseases that they have a huge impact on individuals and communities. The psychological effects of the illness itself and the traumatic experiences of loved ones are experienced by individuals and complete health systems. Added to this, the social ecosystem and family finances are also severely affected. After several months of the outbreak start and several weeks of quarantine and self-isolation, the emotional burden on the community has increased. Added to this, many of the confirmed cases are healthcare workers. In addition to the risk of infection, these front-line staff are exposed to high levels of stress and anxiety. This gets worse as the pressure on the health system increases, forcing them to deal with significant ethical issues.\n\nTo respond to all these issues, the research group led by Dr. Cris Vilaplana at the Germans Trias i Pujol Research Institute (IGTP), have launched a questionnaire to ask the public, including health professionals, how are they being affected by the pandemic, not only in relation to their health but in terms of their emotional wellbeing and their family finances. The project is an initiative of the SMA-TB consortium (IGTP and Anaxomics) to fight against COVID-19. The Fundació Lluita contra la SIDA is also collaborating in the project. The survey is based on questions related to depression, anxiety, stress, and post-traumatic stress disorder, which have already been used in other epidemic outbreaks and in disaster situations, but it also includes questions adapted to the current situation.\n\nThe survey (now available in 4 languages) has been designed to be shared using a snowball strategy, making possible for everybody to participate and collaborate. The results obtained will initially help us to better understand the impact of the outbreak of COVID-19 on the general wellbeing of the population and health workers so that we can go on to develop strategies in coordination those in charge of administrations in order to adapt policies to people's real needs. The results of the study will be published in a scientific article and will be publicly available.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Psychological impact of the outbreak, total score",
              "description": "Psychological impact of the outbreak, total score will be measured by the sum of the depression questions score, the anxiety questions score, the stress questions score and the PSTD questions score. The results will be given according to being part of general population and according to being part of the healthcare workers subpopulation. Responses will also be reported minimum per gender, age, country and postal code.Results will be represented by week of survey completion, and reported related to relevant dates (weeks of confinement, major announcements to the whole population by their Governments, etc.)",
              "time": "Through study completion, an average of 1 year.",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Descriptive statistics for the non-psychological questions",
              "description": "Percentages of response will be calculated according to the number of respondents per each response out of the total number of responses of each question. All results will be given according to the respondents being part of the whole cohort of respondents, according to being part of general population and according to being part of the healthcare workers subpopulation. Responses will also be reported per gender, age, country and postal code.",
              "time": "Through study completion, an average of 1 year.",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Psychological impact of the outbreak: anxiety questions score",
              "description": "The score will be calculated as the result of the sum of the points received per question, each question can be answered in a range of 1-4. The results will be given according to being part of general population and according to being part of the healthcare workers subpopulation. Responses will also be reported minimum per gender, age, country and postal code.Results will be represented by week of survey completion, and reported related to relevant dates (weeks of confinement, major announcements to the whole population by their Governments, etc.)",
              "time": "Through study completion, an average of 1 year.",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "All people >16 years old willing to participate in the COM-COVID survey study during the COVID-19 outbreak (period March 2020-September 2020).",
              "sampling": "Non-Probability Sample",
              "genders": [
                {
                  "name": "All",
                  "description": "The respondents to the survey can choose one of the following responses to the question: \"Which gender do you identify with?\": male, female, non binary, I prefer not to say",
                  "__typename": "Gender"
                }
              ],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Lilibeth Arias, PhD",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Cris Vilaplana, MD, PhD",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04377685",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04377685",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Chu Saint-Etienne",
              "city": {
                "name": "Saint Etienne",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "COVID 19",
              "keywords": [
                {
                  "word": "25-hydroxyvitamin D3",
                  "conditions": [
                    {
                      "disease": "COVID 19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "pre-exposure prophylaxis",
                  "conditions": [
                    {
                      "disease": "COVID 19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "SARS-CoV2",
                  "conditions": [
                    {
                      "disease": "Coronavirus Infection",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "ARDS, Human",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID 19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "20CH109",
              "acronym": "COVID-CTPRED",
              "title": [
                {
                  "briefTitle": "Prediction of Clinical Course in COVID19 Patients",
                  "officialTitle": "Prediction of Clinical Course in COVID19 Patients Using Unsupervised Classification Approaches of Clinical, Biological and the Multiparametric Signature of the Chest CT Scan Performed at Admission",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "In image processing, computational medical imaging has demonstrated its ability to predict a therapeutic response or a particular evolution after extracting relevant anatomical, functional or even non-visually perceptible information from the volume of images, making it possible to construct a powerful radiomic signature or to use robust anatomical/functional measurements to provide estimates of ventilation or vascular state. By combining these data extracted from the scanner with the standard clinical-biological data produced at admission during triage, our ambition is to build a predictive model using unsupervised classification approaches capable of helping predict clinical evolution with the aim of optimizing the management of the resource.",
              "summary": "In the context of the COVID19 pandemic and containment, chest CT is currently frequently performed on admission, looking for suggestive signs and basic abnormalities of COVID19 compatible viral pneumonitis pending confirmation of identification of viral RNA by reverse-transcription polymerase chain reaction(PCR), with a reported sensitivity of 56-88% in the first few days, slightly higher than PCR (60%) (1). Nevertheless, currently established radiological abnormalities are not specific for COVID19 and the specificity of the chest CT is ~25% when PCR is used as a reference (1). Deconfinement and its consequences will complicate the triage of COVID patients and the role of the scanner, with the expected impact of a decrease in the prevalence of infection in the emergency department and an increase in the number of \"all-round\" patients, including patients with non-COVID viral infiltrates or pneumopathies.\n\nIn addition, there are currently no imaging criteria to complement the clinical and biological data that can predict the progression of lung disease from the initial data.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "diagnostic of COVID disease composite",
              "description": "The diagnostoc of COVID disease is composite of:\n\nCT features wich will include presence/location/laterality of morphological CT abonormal densities (ground glass opacities, consolidations, reticulations),\npulmonary vessels size,\ndistribution and abnormalities,\nlocal / global CT-ventilation index (CT-VI) severity,\nradiomic features (shape features, 1st-order and 2nd order statistics)\n\nAnalysis of CT-Scan results.",
              "time": "On admission to the hospital",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "patient admitted to the emergency room of COVID-19 confirmed by RT-PCR",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Pierre CROISILLE, PhD",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Béatrice DEYGAS",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04416061",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04416061",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Hong Kong Sanatorium & Hospital",
              "city": {
                "name": "Hong Kong",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [
            {
              "name": "Hong Kong Sanatorium & Hospital",
              "__typename": "Sponsor"
            }
          ],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "RC-2020-08",
              "acronym": "COVID-19",
              "title": [
                {
                  "briefTitle": "The Role of a Private Hospital in Hong Kong Amid COVID-19 Pandemic",
                  "officialTitle": "The Role of a Private Hospital in Hong Kong Amid COVID-19 Pandemic: A Descriptive Study of Patients With SARS-CoV-2 RT-PCR Performed",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Active, not recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [
            {
              "name": "Dr. Jonpaul ST Zee",
              "affiliation": "Hong Kong Sanatorium & Hospital",
              "responsibilities": [
                {
                  "type": "Principal Investigator",
                  "investigator": [
                    {
                      "name": "Marc Klapholz, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Thomas Pitts, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Marco Alessandro Minetto",
                      "__typename": "Investigator"
                    }
                  ],
                  "__typename": "Responsible"
                }
              ],
              "__typename": "Investigator"
            }
          ],
          "description": [],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Proportion of asymptomatic subjects",
              "description": "Proportion of asymptomatic subjects (%) who underwent COVID 19 test",
              "time": "1 Feb 2020 until the 14th consecutive day without any local infection in Hong Kong",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Proportion of subjects with recent contact history",
              "description": "Proportion of subjects (%) with recent contact history",
              "time": "1 Feb 2020 until the 14th consecutive day without any local infection in Hong Kong",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Proportion of subjects with recent travel history",
              "description": "Proportion of subjects (%) with recent travel history",
              "time": "1 Feb 2020 until the 14th consecutive day without any local infection in Hong Kong",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "Subjects who underwent COVID-19 test in HKSH during the study period",
              "sampling": "Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04363099",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04363099",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Msp de Creil",
              "city": {
                "name": "Creil",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [
            {
              "name": "Maison de Sante Pluridisciplinaire de Creil",
              "__typename": "Sponsor"
            }
          ],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "2020-A01059-30",
              "acronym": "COVID AMBU 60",
              "title": [
                {
                  "briefTitle": "Multicentre Observational Study on Management COVID 19 Positive Outpatients in a French Cluster.",
                  "officialTitle": "Multicentre Observational Study on Management COVID 19 Positive Outpatients in a French Cluster.",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [
            {
              "name": "DIMI Svetlane",
              "affiliation": "Maison de Sante Pluridisciplinaire de Creil",
              "responsibilities": [
                {
                  "type": "Principal Investigator",
                  "investigator": [
                    {
                      "name": "Marc Klapholz, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Thomas Pitts, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Marco Alessandro Minetto",
                      "__typename": "Investigator"
                    }
                  ],
                  "__typename": "Responsible"
                }
              ],
              "__typename": "Investigator"
            }
          ],
          "description": [],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "clinical description of covid 19 ambulatory cases.",
              "description": null,
              "time": "3 months",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Prevalence of positive cases (PCR and/or serological positive)",
              "description": null,
              "time": "3 months",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Biological and radiological description of ambulatory cases",
              "description": null,
              "time": "3 months",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "ambulatory patients",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Svetlane DIMI, M.D",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04376398",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04376398",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Cliniques Universitaires Saint Luc",
              "city": {
                "name": "Brussels",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "COVID-ANESTHESIO",
              "acronym": "COVID",
              "title": [
                {
                  "briefTitle": "Survey: COVID-19 Patients Managed in the Operating Theatre of Belgian Hospitals",
                  "officialTitle": "Survey on Patients With Suspected or Confirmed COVID-19 Requiring Anesthesia Care for Their Intervention",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Global evaluation of the implication of the Belgian anesthesiologists during COVID-19 pandemic",
              "description": "To evaluate whether Belgian anesthesiologists have followed or could follow the recommendations regarding the management of COVID-19 patients and what were the characteristics of these patients and how they have been managed and what were their outcomes",
              "time": "30 days",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "If any compare our results with other countries",
              "description": "To compare the descriptives and the outcome data of our patients with other countries",
              "time": "4 weeks",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "All pediatric and adult patients who are tested positive for COVID-19 or who are suspected to be infected and who require anesthesia care for their intervention",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Vincent Bonhomme, MD, PhD",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Mona Momeni, MD, PhD",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04395924",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04395924",
          "refersTo": [
            {
              "name": "Dong L, Tian J, He S, Zhu C, Wang J, Liu C, Yang J. Possible Vertical Transmission of SARS-CoV-2 From an Infected Mother to Her Newborn. JAMA. 2020 Mar 26. doi: 10.1001/jama.2020.4621. [Epub ahead of print]",
              "__typename": "Citation"
            },
            {
              "name": "Woo PC, Lau SK, Wong BH, Tsoi HW, Fung AM, Chan KH, Tam VK, Peiris JS, Yuen KY. Detection of specific antibodies to severe acute respiratory syndrome (SARS) coronavirus nucleocapsid protein for serodiagnosis of SARS coronavirus pneumonia. J Clin Microbiol. 2004 May;42(5):2306-9.",
              "__typename": "Citation"
            },
            {
              "name": "Sutton D, Fuchs K, D'Alton M, Goffman D. Universal Screening for SARS-CoV-2 in Women Admitted for Delivery. N Engl J Med. 2020 May 28;382(22):2163-2164. doi: 10.1056/NEJMc2009316. Epub 2020 Apr 13.",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "CHR Orléans",
              "city": {
                "name": "Orléans",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [
            {
              "name": "Diagnosis of SARS-Cov2 by RT-PCR and : IgG, Ig M serologies in the amniotoc fluid, the blood cord and the placenta",
              "description": "During labor and delivery\n\nSample of amniotic fluid\n2 samples of blood cord after the birth of the new born\n2 samples of placenta\n\nThese samples will be tested with A RT-PCR COVID-19 test and / or serology's A sample of blood cord and placenta will be frozen at -80 degree C and studied for PCR and viral proteome, cytokines , D-dimers and others inflammatory markers in the PRIMMO Laboratory (Prof. TOUMI and LESPESSAILLES) and after in the Centre of molecular biophysics of CNRS of Orleans (Prof. PICHON)",
              "type": "Diagnostic Test",
              "__typename": "Intervention"
            }
          ],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "COVID-19",
              "keywords": [
                {
                  "word": "eculizumab",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Lung Injury/Acute Respiratory Distress Syndrome (ARDS)",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Pneumonia, Viral",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "severe acute respiratory syndrome coronavirus 2",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Lung Injury/Acute Respiratory Distress Syndrome (ARDS)",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Pneumonia, Viral",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Soliris",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Coronavirus",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Lung Injury/Acute Respiratory Distress Syndrome (ARDS)",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            },
            {
              "disease": "Maternal Fetal Infection Transmission",
              "keywords": [
                {
                  "word": "SARS-CoV 2 serologies",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Maternal Fetal Infection Transmission",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Amniotic fluid",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Maternal Fetal Infection Transmission",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Placenta",
                  "conditions": [
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Maternal Fetal Infection Transmission",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            },
            {
              "disease": "SARS-CoV 2",
              "keywords": [
                {
                  "word": "convalescent plasma transfusion",
                  "conditions": [
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV Infection",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "SARS Virus, SARS-CoV-2, COVID-19, Health Personnel",
                  "conditions": [
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Healthcare Workers",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "baricitinib",
                  "conditions": [
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS Pneumonia",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "CHRO-2020-10",
              "acronym": "TMF-COVID-19",
              "title": [
                {
                  "briefTitle": "Maternal-foetal Transmission of SARS-Cov-2",
                  "officialTitle": "Maternal-Foetal Transmission of COVID-19",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "Pregnant women SARS cov-2 positives during pregnancy or during labor tested by a RT-PCR SARS-Cov-2 on nasopharyngeal swabs and/or by serologies.\n\nAfter informed consent the ivestigators will proceed during labor to:\n\nA vaginal swab of amniotic fluid during the rupture of the water pocket during labor.\n\na blood sample from the umbilical cord after delivery of the newborn and clamping and sectioning of the cord. PCR Covid-19 and serologies (Ig M and Ig G) as well as investigating viral proteome and cytokines.\n\nThese are additional samples in addition to the routine samples which have no impact and without risk for the mother the newborn since they are taken after delivery from the side of the placenta after clamping and sectioning of the cord.\n\nSamples of 2 fragments of placenta after delivery of the placenta for COVID-19 research, which usually goes to waste or to pathology depending on the clinical context or for infectious tests. In all cases, samples of 3 to 4 cm3 will be taken which will in no way interfere with current analyzes carried out on the placenta which weighs one third of the fetal weight on average. A viral search by COVID-19 PCR will be carried out on the placenta fragment and another part will be frozen for analysis by electron microscopy and study of the viral proteome, cytokines and immune mechanisms. Placenta samples will be frozen at -80 degrees.",
              "summary": "One case of maternal-fetal transmission of SARS Cov-2 was published (1). Ig M and Ig G were found at two hours after birth of a new born from a mother COVID-19. Another study on few newborns COVID-19 reported that the SARS-Cov-2 was not transmitted in utero but only after birth.\n\nAlthough there are few data on COVID-19 during pregnancy, according to our national data collections, it appears to be responsible for miscarriages and fetal deaths. There are also intrauterine growth restrictions and an increase of the rate of cesarean sections for maternal indications. Therefore, it is essential to know if there is a maternal viremia which infects the fetus because the consequences in terms of management would be completely different.\n\nIn fact, the potential intrauterine infection will lead to antenatal monitoring of these patients with an antenatal diagnosis and may be a treatment.\n\nTherefore, it seems essential to explore the mode of transmission to the newborn since many newborns have COVID-19 infection The investigators will propose to all pregnant women SARS- Cov-2 positive to perform PCR SARS-Cov-2 tests and /or serology's (IgM and Ig G) on the amniotic fluid, the blood cord and the placenta.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [
            {
              "model": "Cohort",
              "name": null,
              "description": null,
              "arms": [
                {
                  "name": "Patient with Covid-19 confirmed (severe form)",
                  "__typename": "Arm"
                },
                {
                  "name": "COVID- PCR",
                  "__typename": "Arm"
                },
                {
                  "name": "Non-exposed to Methylprednisolone",
                  "__typename": "Arm"
                }
              ],
              "__typename": "Design"
            }
          ],
          "observationPeriod": [
            {
              "time": "Prospective",
              "__typename": "ObservationPeriod"
            }
          ],
          "primaryOutcome": [
            {
              "name": "COVID-19 by positive PCR in cord blood and / or positive serologies",
              "description": "COVID-19 by positive PCR in cord blood and / or positive serologies",
              "time": "Day 0",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "COVID-19 by positive PCR in amniotic fluid and placenta",
              "description": "COVID-19 by positive PCR in amniotic fluid and placenta",
              "time": "Day 0",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "New born infected by COVID-19",
              "description": "Newborn baby infected with COVID-19 on gastric tubing, rectal sample, nasopharyngeal samples by COVID-19 PCR and blood samples by serology",
              "time": "Day 0",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "Pregnant women COVID-19 positive or with suspected infection or presented a positive SARS Cov-2 PCR or serologies at any moment of the pregnancy. Symptomatic and asymptomatic pregnant women with SARS-Cov-2 will be included.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Elodie POUGOUE TOUKO",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Aurélie DESPUJOLS",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [
            {
              "retension": "Samples Without DNA",
              "description": "Amniotic fluid, blood cord and placenta.",
              "__typename": "BioSpecimen"
            }
          ],
          "studyArms": [
            {
              "name": "Pregnant women COVID-19 positive by RT-PCR",
              "description": "Pregnant women COVID-19 positive by RT-PCR on nasopharyngeal swabs and/or by serology or with previous history of SARS-Cov-2 positive during the pregnancy coming to the maternity to deliver",
              "model": [
                {
                  "model": "Cohort",
                  "name": null,
                  "description": null,
                  "__typename": "Design"
                }
              ],
              "__typename": "Arm"
            }
          ],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04367805",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04367805",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "CHU Amiens",
              "city": {
                "name": "Amiens",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "PI2020_843_0042",
              "acronym": "COVID19-CHIEF",
              "title": [
                {
                  "briefTitle": "COVID-19 Infection in Patients With Hepatocellular Carcinoma",
                  "officialTitle": "Impact of COVID-19 Infection in Patients With Hepatocellular Carcinoma: An Ambispective Study Nestled in the CHIEF Cohort",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Incidence of COVID-19 infection in patients with hepatocellular carcinoma in France",
              "description": "Incidence of COVID-19 infection in patients with hepatocellular carcinoma in France",
              "time": "6 months",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "hepatocellular carcinoma population, both hospital and ambulatory",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Eric NGUYEN KHAC, Pr",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Olivier GANRY, Pr",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04344912",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04344912",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Unité de Soins Intensifs de Cardiologie, Pitié Salpêtrière Hospital, AP-HP",
              "city": {
                "name": "Paris",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "Heart Failure",
              "keywords": [
                {
                  "word": "chronic conditions",
                  "conditions": [
                    {
                      "disease": "Copd",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Heart Failure",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "End Stage Renal Disease",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "food service",
                  "conditions": [
                    {
                      "disease": "End Stage Renal Disease",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Copd",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "medically tailored meals",
                  "conditions": [
                    {
                      "disease": "Cancer",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Heart Failure",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            },
            {
              "disease": "COVID",
              "keywords": [
                {
                  "word": "acute lung injury",
                  "conditions": [
                    {
                      "disease": "ARDS, Human",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Ards",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Sars-CoV2",
                  "conditions": [
                    {
                      "disease": "COVID",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Ivermectin",
                  "conditions": [
                    {
                      "disease": "COVID",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Coronavirus Infection",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            },
            {
              "disease": "Acute Coronary Syndrome",
              "keywords": [
                {
                  "word": "Videoconferencing",
                  "conditions": [
                    {
                      "disease": "Unstable Angina",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Coronary Syndrome",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "NSTEMI - Non-ST Segment Elevation MI",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "e-Health",
                  "conditions": [
                    {
                      "disease": "Hypertension",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Coronary Syndrome",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid-19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Depression",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Acute Coronary Syndrome",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Depression and Quality of Life Related to the Coronavirus Pandemic",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "APHP200524",
              "acronym": "CCU-COVID19",
              "title": [
                {
                  "briefTitle": "Impact of COVID19 Outbreak in Cardiac Acute Care",
                  "officialTitle": "Impact of COVID19 Outbreak in Cardiac Patients Admitted in Intensive Care Unit : the CCU-COVID19 Study",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "Registry on Characteristics and outcomes of Cardiac patients (COVID- and COVID+) hospitalized in the Intensive Care Unit of the Pitie-Salpetriere Hospital in Paris, France",
              "summary": "This registry will evaluate the impact of the COVID19 outbreak on Cardiac patients admitted in the Intensive Care Unit of the Pitie-Salpetriere Hospital in Paris, France",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Incidence of recurrent Major Cardiovascular Events (MACE) and urgent rehospitalization",
              "description": null,
              "time": "From admission to one year follow up",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "All patients treated in the CCU at Cardiology Institute of the Pitié-Salpêtrière Hospital, from Friday, March 20, 2020",
              "sampling": "Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Johanne SILVAIN, MD PhD",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04379284",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04379284",
          "refersTo": [],
          "refersToUrl": [
            {
              "url": "https://www.mayo.edu/research/clinical-trials",
              "__typename": "Link"
            }
          ],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Mayo Clinic Rochester",
              "city": {
                "name": "Rochester",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [
            {
              "name": "Biospecimen collection",
              "description": "Maternal blood, vaginal swab, and anorectal swab will be obtained at the time of enrollment prior to delivery. A sample of breastmilk before hospital discharge and again at six weeks postpartum will be obtained if the mother is lactating.\n\nNeonatal specimens collected following delivery will include placental tissue, fetal membrane roll, umbilical cord tissue, umbilical cord blood, and an anorectal swab.",
              "type": "Other",
              "__typename": "Intervention"
            }
          ],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [
            {
              "name": "Mayo Clinic",
              "__typename": "Sponsor"
            }
          ],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "COVID19",
              "keywords": [
                {
                  "word": "Vascepa",
                  "conditions": [
                    {
                      "disease": "COVID19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "IFN type1",
                  "conditions": [
                    {
                      "disease": "COVID19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "early phase treatment",
                  "conditions": [
                    {
                      "disease": "COVID19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Hydroxychloroquine",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Treatment",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [
            {
              "name": "Regan N. Theiler",
              "affiliation": "Mayo Clinic",
              "responsibilities": [
                {
                  "type": "Principal Investigator",
                  "investigator": [
                    {
                      "name": "Marc Klapholz, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Thomas Pitts, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Marco Alessandro Minetto",
                      "__typename": "Investigator"
                    }
                  ],
                  "__typename": "Responsible"
                }
              ],
              "__typename": "Investigator"
            }
          ],
          "description": [
            {
              "detailed": "The objectives are to understand the prevalence of maternal fetal transmission, risk factors and outcomes of a COVID19 positive pregnancy, and how the virus can be passed from mother to infant in the pregnant population at Mayo Clinic Rochester MN. Assessments will include the viral detection and viral load in maternal and fetal specimens collected from COVID19 positive mother-baby dyads, presence of maternal and fetal inflammatory markers in blood and tissues, anti-COVID IgG and IgM in maternal and neonatal blood, viral load and viral antigens in maternal and fetal specimens. placental gross and histopathologic changes in COVID19 infected mothers, stratified by gestational age and disease severity, compared to control samples.\n\n.",
              "summary": "It is unclear how COVID19 can be passed from mother to infant. The study investigators aim to collect maternal and neonatal samples from COVID19-infected pregnant women and compare them to pregnant women who have clinical indications for COVID 19 testing at the time of hospital admission but end up being COVID19 negative. Pregnant women who are either COVID19 positive or COVID19 negative with respiratory symptoms will be enrolled and followed during this study.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [
            {
              "model": "Case-Only",
              "name": null,
              "description": null,
              "arms": [
                {
                  "name": "Pregnant women - negative or unknown COVID19 test",
                  "__typename": "Arm"
                },
                {
                  "name": "Study group",
                  "__typename": "Arm"
                },
                {
                  "name": "Convalescent survivors of COVID-19",
                  "__typename": "Arm"
                }
              ],
              "__typename": "Design"
            }
          ],
          "observationPeriod": [
            {
              "time": "Prospective",
              "__typename": "ObservationPeriod"
            }
          ],
          "primaryOutcome": [
            {
              "name": "Determine the prevalence of maternal fetal transmission of COVID19",
              "description": "Standardized testing of maternal, placental, and neonatal specimens will be used to determine presence of current infection with SARS-CoV2. Clinical RT-PCR assays will be used to determine the presence of viral RNA in all specimens.",
              "time": "12 months",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Understand the placental impact of COVID19 in pregnancy at various gestational ages",
              "description": "In addition to maternal and fetal infection, disease states related to placental dysfunction may be related to COVID19 infection in pregnancy. We will examine placenta and markers of placental function to assess for discernable consequences of maternal infection.",
              "time": "12 months",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Describe the outcomes of COVID19 positive pregnancies",
              "description": "Clinical data from prenatal, intrapartum, and postpartum care will be abstracted from maternal records and correlated with neonatal outcomes. Any complications will be characterized, with comparison to the non-COVID19 control group of patients. Statistical analysis will reveal characteristics and clinical outcomes that may be linked to COVID19 infection in pregnancy.",
              "time": "12 months",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "Pregnant women testing positive for COVID19 at any time during their pregnancy after 8 weeks gestation, with or without physical symptoms. Pregnant women with respiratory or other physical symptoms of COVID19 and uncertain or negative COVID19 test results at the onset of labor.\n\nInfants of these women will be followed for outcomes.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Ann L VanOosten",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Maureen A Lemens, BSN",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [
            {
              "retension": "Samples Without DNA",
              "description": "Maternal specimens obtained at time of enrollment prior to delivery: blood, vaginal swab, anorectal swab. Breastmilk obtained before hospital discharge and again at six weeks postpartum if the mother is lactating.\n\nNeonatal specimens: placental tissue, fetal membrane roll, umbilical cord tissue, umbilical cord blood, and an anorectal swab.",
              "__typename": "BioSpecimen"
            }
          ],
          "studyArms": [
            {
              "name": "Pregnant women - negative or unknown COVID19 test",
              "description": "Pregnant women experiencing any respiratory or other physical symptoms of COVID19 at onset of labor, with negative or uncertain COVID19 test results",
              "model": [
                {
                  "model": "Case-Only",
                  "name": null,
                  "description": null,
                  "__typename": "Design"
                }
              ],
              "__typename": "Arm"
            },
            {
              "name": "Pregnant women - positive COVID19 test",
              "description": "Pregnant women of any gestational age 8 weeks through delivery with a positive COVID19 test, with or without physical symptoms",
              "model": [
                {
                  "model": "Case-Only",
                  "name": null,
                  "description": null,
                  "__typename": "Design"
                }
              ],
              "__typename": "Arm"
            }
          ],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04365959",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04365959",
          "refersTo": [
            {
              "name": "Guérin C, Reignier J, Richard JC, Beuret P, Gacouin A, Boulain T, Mercier E, Badet M, Mercat A, Baudin O, Clavel M, Chatellier D, Jaber S, Rosselli S, Mancebo J, Sirodot M, Hilbert G, Bengler C, Richecoeur J, Gainnier M, Bayle F, Bourdin G, Leray V, Girard R, Baboi L, Ayzac L; PROSEVA Study Group. Prone positioning in severe acute respiratory distress syndrome. N Engl J Med. 2013 Jun 6;368(23):2159-68. doi: 10.1056/NEJMoa1214103. Epub 2013 May 20.",
              "__typename": "Citation"
            },
            {
              "name": "Yang X, Yu Y, Xu J, Shu H, Xia J, Liu H, Wu Y, Zhang L, Yu Z, Fang M, Yu T, Wang Y, Pan S, Zou X, Yuan S, Shang Y. Clinical course and outcomes of critically ill patients with SARS-CoV-2 pneumonia in Wuhan, China: a single-centered, retrospective, observational study. Lancet Respir Med. 2020 May;8(5):475-481. doi: 10.1016/S2213-2600(20)30079-5. Epub 2020 Feb 24. Erratum in: Lancet Respir Med. 2020 Apr;8(4):e26.",
              "__typename": "Citation"
            },
            {
              "name": "Coppo A, Bellani G, Winterton D, Di Pierro M, Soria A, Faverio P, Cairo M, Mori S, Messinesi G, Contro E, Bonfanti P, Benini A, Valsecchi MG, Antolini L, Foti G. Feasibility and physiological effects of prone positioning in non-intubated patients with acute respiratory failure due to COVID-19 (PRON-COVID): a prospective cohort study. Lancet Respir Med. 2020 Jun 19. pii: S2213-2600(20)30268-X. doi: 10.1016/S2213-2600(20)30268-X. [Epub ahead of print]",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            },
            {
              "name": "derived",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "ASST Monza",
              "city": {
                "name": "Monza",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "Sars-CoV2",
              "keywords": [
                {
                  "word": "Randomized controlled",
                  "conditions": [
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID-19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Black Seed",
                  "conditions": [
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Coronavirus Infection",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Linac",
                  "conditions": [
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Pneumonia",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "PRON-COVID",
              "acronym": "PRON-COVID",
              "title": [
                {
                  "briefTitle": "The Prone Position in Covid-19 Affected Patients",
                  "officialTitle": "Study of the Feasibility and Usefulness of the Prone Position in Patients With Respiratory Distress From Covid-19 Not Intubated, in Spontaneous Breath in Oxygen Therapy or Cpap",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Active, not recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "BACKGROUND:\n\nIt has been shown that the prone position (PP) during mechanical ventilation (VM) in patients with Acute Respiratory Distress Syndrome (ARDS) is able to improve oxygenation and thus reduce mortality.\n\nThe reduced mortality, however, is not only caused by an increase in oxygen, but also by the ability of the PP to reduce the damage associated with mechanical ventilation (VILI).\n\nStudies show that the benefits of PP are also present in non-intubated patients; the PP prevents the need for intubation and the consequent risk deriving from the procedure itself and from the predisposition to develop superinfections (VAP).\n\nMoreover, a reduction in the need for intubation and therefore hospitalization in the ICU would be particularly useful in a context of great health emergency with limited resources.\n\nThe objective of the study is to value the ability of the prone position to increase the oxygenation of the patient with SARS-cov-2 pneumonia as a lung recruitment index.\n\nSTUDY DESIGN:\n\nThis is a monocentric study that will be conducted on all patients admitted to the Infectious Diseases and UTIR units of the S. Gerardo Hospital in Monza with the diagnosis of related COVID pneumonia requiring oxygen support or CPAP.\n\nSample size (n. Patients): 56\n\nThe duration of enrollment is estimated in 1 month. Patients will be monitored until discharged from the hospital. The overall duration of the study is estimated to be 1 year (including enrollment, follow up and data analysis).\n\nThe patient will be enrolled in the study when consent is obtained. The following data will be collected:\n\nPatient registration\nDemographic and anthropometric data\nComorbidity and lifestyle habits\nHospitalization data\nBlood chemistry tests\nVentilation parameters\n\nAfter 10 minutes and at the end of pronation, the feasibility of pronation and ventilation parameters will also be assessed.\n\nSTATISTICAL ANALYSIS:\n\nClinical data relating to enrolled patients will be analysed by means of descriptive statistics on continuous quantitative variables using indicators chosen on the basis of the distributional form. Categorical variables will be described in percentages. Hypotheses on PaO2 / FiO2 performance will be verified through the T test for paired data if the distributional form allows it or alternatively the Wilcoxon test will be used. In this case we will proceed with a recalculation of the power study.",
              "summary": "The prone position during mechanical ventilation in patients with Acute Respiratory Distress Syndrome (ARDS) is able to improve oxygenation and thus reduce mortality. The objective of the study is to evaluate the ability of the prone position to increase the oxygenation of the patient with SARS-cov-2 pneumonia.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Number of patients in whom the prone position caused an increase in oxygenation",
              "description": "Measure the ability of the prone position to increase the oxygenation of the patient with SARS-cov-2 pneumonia as a lung recruitment index.",
              "time": "Until patient discharge from the hospital (approximately 1 month after enrollment)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "The feasibility of prone position",
              "description": "Measure the feasibility of the prone position in terms of patient comfort and health resources in a context of a national health emergency.",
              "time": "Until patient discharge from the hospital (approximately 1 month after enrollment)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "The study will be conducted on all patients admitted to the Infectious Diseases and UTIR units of the S. Gerardo Hospital in Monza with the diagnosis of related COVID pneumonia requiring oxygen or CPAP support.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04393402",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04393402",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "CHU de Nice",
              "city": {
                "name": "Nice",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "20reamedcovid03",
              "acronym": "LUS-COVID19",
              "title": [
                {
                  "briefTitle": "Lung Ultrasound Score in Covid 19 Infectious Disease in Critical Care (LUS-COVID19)",
                  "officialTitle": "Lung Ultrasound Score in Covid 19 Infectious Disease in Critical Care",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "LUS applicability with COVID 19",
              "description": "In dorsal position, or in prone position, the two hemithorax will be subdivided in 6 parts, and a score will be attributed with the following criteria : A-Lines (0 point), > 3 B-lines (1 point), B-Lines coalscent (2 points), and pulmonary consolidation (3 points). For the echography we can use a convexe sonde, or a \"cardiac\" sonde.",
              "time": "10 months",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Prediction of Prone position response",
              "description": "comparison of LUS score depending of the position used for performing LUS",
              "time": "10 months",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Radiographic correlation (chest Xray and tomodensitometry)",
              "description": "Comparison between Xray / CT scan exam and LUS",
              "time": "10 months",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "LUS Mortality prediction",
              "description": "according to LUS score, ventilatory mode and parameters, medical history and bood analysis results",
              "time": "10 months",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "Patient with diagnose of Covid 19 by usully method, and admitted in critical care unit for oxygen-therapy or ventilatory support.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Romain LOMBARDI",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Jean DELLAMONICA, MD, PhD",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04382235",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04382235",
          "refersTo": [
            {
              "name": "Huang C, Wang Y, Li X, Ren L, Zhao J, Hu Y, Zhang L, Fan G, Xu J, Gu X, Cheng Z, Yu T, Xia J, Wei Y, Wu W, Xie X, Yin W, Li H, Liu M, Xiao Y, Gao H, Guo L, Xie J, Wang G, Jiang R, Gao Z, Jin Q, Wang J, Cao B. Clinical features of patients infected with 2019 novel coronavirus in Wuhan, China. Lancet. 2020 Feb 15;395(10223):497-506. doi: 10.1016/S0140-6736(20)30183-5. Epub 2020 Jan 24. Erratum in: Lancet. 2020 Jan 30;:.",
              "__typename": "Citation"
            },
            {
              "name": "Wu Z, McGoogan JM. Characteristics of and Important Lessons From the Coronavirus Disease 2019 (COVID-19) Outbreak in China: Summary of a Report of 72 314 Cases From the Chinese Center for Disease Control and Prevention. JAMA. 2020 Feb 24. doi: 10.1001/jama.2020.2648. [Epub ahead of print]",
              "__typename": "Citation"
            },
            {
              "name": "Zhu N, Zhang D, Wang W, Li X, Yang B, Song J, Zhao X, Huang B, Shi W, Lu R, Niu P, Zhan F, Ma X, Wang D, Xu W, Wu G, Gao GF, Tan W; China Novel Coronavirus Investigating and Research Team. A Novel Coronavirus from Patients with Pneumonia in China, 2019. N Engl J Med. 2020 Feb 20;382(8):727-733. doi: 10.1056/NEJMoa2001017. Epub 2020 Jan 24.",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "ASST Fatebenefratelli - Sacco",
              "city": {
                "name": "Milano",
                "__typename": "City"
              },
              "__typename": "Facility"
            },
            {
              "name": "ASST Garda - Presidio di Desenzano del Garda",
              "city": {
                "name": "Desenzano Del Garda",
                "__typename": "City"
              },
              "__typename": "Facility"
            },
            {
              "name": "ASST Monza - Desio",
              "city": {
                "name": "Desio",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "Covid-19",
              "keywords": [
                {
                  "word": "health disparity",
                  "conditions": [
                    {
                      "disease": "Covid-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Health Care Utilization",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Attitude of Health Personnel",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Quality of Life",
                  "conditions": [
                    {
                      "disease": "Covid-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Post ICU Syndrome",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Chronic Pain",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "SARS-CoV2",
                  "conditions": [
                    {
                      "disease": "Coronavirus Infection",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "ARDS, Human",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "COVID 19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "WARd-COVID",
              "acronym": "WARd-COVID",
              "title": [
                {
                  "briefTitle": "Non-invasive Ventilatory Support of Patients Affected by COVID-19",
                  "officialTitle": "Management Through Non-invasive Ventilatory Support of Patients Showing an Acute Respiratory Failure Related to COVID-19 in Non-intensive Wards",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Active, not recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "In February 2020, the first case of transmission of the syndrome, indicated as COVID-19, was reported in Italy. Unfortunately, during March 2020, the syndrome spread rapidly throughout the country, affecting tens of thousands of patients, including several thousands have requested hospitalization and some hospitalization in intensive care, putting a strain on the entire regional health system.\n\nPatients that present intermediate severity of the infection are often treated with non-invasive ventilatory support which includes high-flow nasal cannulas (HFNC), non-invasive ventilation (NIV), continuous positive airway pressure (CPAP) through face mask or helmet (helmet).\n\nThe exponential growth in the number of patients has made the massive use of these devices necessary even outside the intensive or semi-intensive wards where they are traditionally used.\n\nEpidemiological knowledge regarding the type of patients treated with this strategy and the outcome of these patients are limited, but very important in a context of emergency.\n\nThus, the objective of this prospective multicenter study is to evaluate the number of patients with COVID-19 related pneumonia, treated with non-invasive ventilatory support outside the intensive care unit and to evaluate the clinical characteristics and hospital outcomes of these patients.\n\nSAMPLE SIZE (n. Patients):\n\nThe study will collect all patients with the inclusion criteria, so the study size being by definition equal to the maximum size.\n\nSTUDY DESIGN:\n\nPatients will be enrolled on a single day (March 26, 2020 or March 31, 2020 chosen by the participating centres).\n\nTotal duration of the Study: 5 months (enrollment, collection and analysis of data).\n\nEnrollment Start: March 26, 2020. Enrollment Closure: March 31, 2020. End of the Study (indicative date, last visit, last patient): May 2020.\n\nThe patient will be enrolled in the study when informed consent is obtained.\n\nIn this phase, the following data are collected:\n\nPatient registration;\nDemographic and anthropometric data;\nComorbidity\nHospitalization data;\nVentilation / Hemodynamics data;\nBlood chemistry tests.\n\nUpon discharge other data will be collected such as the necessary intubation or intubation date.\n\nSTATISTICAL ANALYSIS:\n\nThe enrolled cases will be counted and the percentages of the three types of non-invasive ventilatory supports will be specifically described by centre. The heterogeneity of these percentages will be assessed through a model with mixed effects.\n\nThe anamnestic and clinical data of the enrolled patients will be analysed through descriptive statistics on continuous quantitative variables.\n\nThe impact of the type of ventilation and of the blood chemistry parameters and aspects of comorbidity will be assessed with reference to the probability of developing a transition to the death and to hospitalization in intensive care through a multinomial model.\n\nThese factors will also be included in a logistic model with outcome defined by patient survival.",
              "summary": "Prospective, observational, multicenter study aiming to evaluate the number of COVID-19 pneumonia related patients treated with non-invasive ventilatory support outside the intensive care unit.\n\nIn addition, the study aims to obtain information related to the clinical characteristics and hospital results of these patients.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "The number of patients treated with non-invasive ventilation devices.",
              "description": "The first purpose of the study is to evaluate the number of COVID-19 related pneumonia patients treated with devices for non-invasive ventilation outside intensive care units.",
              "time": "Until patient discharge from the hospital (approximately 5 months)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Clinical outcome at hospital discharge",
              "description": "Measure the hospital outcomes of patients treated with devices for non-invasive ventilation using the following endpoint: clinical outcome at hospital discharge.",
              "time": "Until patient discharge from the hospital (approximately 5 months)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Incidence of organ failure",
              "description": "Assess the clinical characteristics of patients treated with devices for non-invasive ventilation using the following endpoint: incidence of organ failure.",
              "time": "Until patient discharge from the hospital (approximately 5 months)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Incidence of patients requiring mechanical ventilation",
              "description": "Assess the clinical characteristics of patients treated with devices for non-invasive ventilation using the following endpoint: incidence of patients requiring mechanical ventilation.",
              "time": "Until patient discharge from the hospital (approximately 5 months)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "The study will be conducted on all patients diagnosed with COVID-related pneumonia in need of non-invasive ventilatory support. Patients will be enrolled on single day (March 26, 2020 or March 31, 2020 chosen by the participating centers).",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04416373",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04416373",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Nova Medical School - UNL",
              "city": {
                "name": "Lisbon",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "COVID&PREG",
              "acronym": "COVID&PREG",
              "title": [
                {
                  "briefTitle": "COVID-19 and Pregnancy Outcomes",
                  "officialTitle": "COVID-19 and Pregnancy Outcomes: a Portuguese Collaboration Study",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "This is a cohort study of pregnant women confirmed positive for SARS-CoV-2 infection. Data will be collected in Portuguese maternities that agreed to collaborate in this study.\n\nPregnant women are tested during hospital admission by using nasopharyngeal/oral swabs for SARS-CoV-2 RT PCR as part of a universal testing policy. Maternal demographic data (age, comorbidities, parity, smoking habits), COVID-19 related data (symptoms, diagnostic tests, therapy used and ICU admission), gestational age at SARS-CoV-2 confirmed infection, pregnancy outcomes (gestational complications, gestational age at birth, mode of delivery) and neonatal outcome (birthweight and Apgar score, RT PCR neonate results) and breastfeeding strategies will be evaluated.",
              "summary": "This is a multicenter prospective study that aims to investigate the clinical impact of SARS-CoV-2 infection in pregnant women, pregnancy outcomes and perinatal transmission.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "SARS-CoV-2 Neonatal Infection",
              "description": "Positive Sars-Cov-2 RT PCR in nasopharyngeal/oral swab tests or presence of IgM in blood samples",
              "time": "7 days",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "ICU maternal admission",
              "description": "maternal ICU admission due to COVID-19",
              "time": "35 weeks",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Preterm labour",
              "description": "Delivery between 24 and 36 weeks",
              "time": "35 weeks",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "PPROM",
              "description": "Preterm premature rupture of the membranes between 24 and 36 weeks",
              "time": "35 weeks",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "Pregnant women infected with Sars-Cov-2 from 6 to 41 weeks.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Nadia Charepe, MD,MSc",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Alexandra Queirós, MD",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04416256",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04416256",
          "refersTo": [
            {
              "name": "Levin A, Tonelli M, Bonventre J, Coresh J, Donner JA, Fogo AB, Fox CS, Gansevoort RT, Heerspink HJL, Jardine M, Kasiske B, Köttgen A, Kretzler M, Levey AS, Luyckx VA, Mehta R, Moe O, Obrador G, Pannu N, Parikh CR, Perkovic V, Pollock C, Stenvinkel P, Tuttle KR, Wheeler DC, Eckardt KU; ISN Global Kidney Health Summit participants. Global kidney health 2017 and beyond: a roadmap for closing gaps in care, research, and policy. Lancet. 2017 Oct 21;390(10105):1888-1917. doi: 10.1016/S0140-6736(17)30788-2. Epub 2017 Apr 20. Review.",
              "__typename": "Citation"
            },
            {
              "name": "Omer SB, Malani P, Del Rio C. The COVID-19 Pandemic in the US: A Clinical Update. JAMA. 2020 Apr 6. doi: 10.1001/jama.2020.5788. [Epub ahead of print]",
              "__typename": "Citation"
            },
            {
              "name": "Livingston E, Bucher K. Coronavirus Disease 2019 (COVID-19) in Italy. JAMA. 2020 Mar 17. doi: 10.1001/jama.2020.4344. [Epub ahead of print]",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [],
          "useReferenceAs": [
            {
              "name": "result",
              "__typename": "ReferenceType"
            },
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "Paris Transplant Group",
              "city": {
                "name": "Paris",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "COVID/W.W.",
              "acronym": "COVID",
              "title": [
                {
                  "briefTitle": "COVID-19 Pandemic and Worldwide Organ Procurement",
                  "officialTitle": "Consequences of the COVID-19 Pandemic on Worldwide Organ Procurement and Transplantation",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Organ transplantation activity during COVID-19 pandemic",
              "description": "Overall deceased donor transplantation performed during the COVID-19 pandemic. Stratified analysis by deceased donor type (Kidney, lung, Liver, heart), and combined transplantations during the COVID-19 pandemic.",
              "time": "Two years since COVID-19 outbreak.",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Further analysis on organ transplantation with stratification",
              "description": "Geographic disparities related to organ transplantation rates and association with COVID-19 clusters Living donor transplantation performed during the COVID-19 pandemic. Quality of transplanted organs (kidney) before and after the COVID-19 pandemic. Change in relationship between living donors and their recipients before and after the COVID-19 pandemic.",
              "time": "Two years since COVID-19 outbreak.",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "Solid organ transplants performed during the study period (kidney, lung, heart, liver and combined organs in Europe (France, Spain, Portugal, Germany, Italy, Croatia, Belgium, Netherlands, Austria), North America (US and Canada), Central and South America (Mexico, Brazil, Uruguay, Argentina and Chile) and Oceania (Australia)",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Alexandre Loupy",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04407494",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04407494",
          "refersTo": [],
          "refersToUrl": [],
          "useReferenceAs": [],
          "conductedAt": [
            {
              "name": "Uhmontpellier",
              "city": {
                "name": "Montpellier",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [
            {
              "name": "Reporting of anosmia, ageusia and other clinical symptoms",
              "description": "Reporting of anosmia, ageusia and other clinical symptoms related to COVID-19 - CODA test - SARS-CoV2 RT-PCR and ELISA",
              "type": "Biological",
              "__typename": "Intervention"
            }
          ],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "RECHMPL20_0176",
              "acronym": "COVID-OLFA",
              "title": [
                {
                  "briefTitle": "Diagnostic Value of Patient - Reported and Clinically Verified Olfactory Disorders (COVID-19)",
                  "officialTitle": "Diagnostic Value of Patient - Reported and Clinically Verified Olfactory Disorders in a Population Tested for COVID-19",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Completed",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [],
          "studyDesign": [
            {
              "model": "Cohort",
              "name": null,
              "description": null,
              "arms": [
                {
                  "name": "Patient with Covid-19 confirmed (severe form)",
                  "__typename": "Arm"
                },
                {
                  "name": "COVID- PCR",
                  "__typename": "Arm"
                },
                {
                  "name": "Non-exposed to Methylprednisolone",
                  "__typename": "Arm"
                }
              ],
              "__typename": "Design"
            }
          ],
          "observationPeriod": [
            {
              "time": "Prospective",
              "__typename": "ObservationPeriod"
            }
          ],
          "primaryOutcome": [
            {
              "name": "Diagnostic values of anosmia and ageusia for COVID-19",
              "description": "Diagnostic values of anosmia and ageusia for COVID-19 with questionnaire",
              "time": "at inclusion",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Diagnostic values of CODA",
              "description": "Diagnostic values of CODA (Clinical Olfactory dysfunction Assessment) score for COVID-19 : Simple, fast, semi-objective olfactory test developed for epidemic context",
              "time": "at inclusion",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "Healthcare workers and adult outpatients attending the COVID-19 screening center of the University Hospital of Montpellier, France.",
              "sampling": "Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [],
          "retainedBioSamples": [
            {
              "retension": "None Retained",
              "description": "NC",
              "__typename": "BioSpecimen"
            }
          ],
          "studyArms": [
            {
              "name": "COVID-19",
              "description": "Healthcare workers and adult outpatients attending the COVID-19 screening center of the University Hospital of Montpellier, France.",
              "model": [
                {
                  "model": "Cohort",
                  "name": null,
                  "description": null,
                  "__typename": "Design"
                }
              ],
              "__typename": "Arm"
            }
          ],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04441502",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04441502",
          "refersTo": [
            {
              "name": "Xu J, Zhao S, Teng T, Abdalla AE, Zhu W, Xie L, Wang Y, Guo X. Systematic Comparison of Two Animal-to-Human Transmitted Human Coronaviruses: SARS-CoV-2 and SARS-CoV. Viruses. 2020 Feb 22;12(2). pii: E244. doi: 10.3390/v12020244.",
              "__typename": "Citation"
            },
            {
              "name": "Keidar S, Kaplan M, Gamliel-Lazarovich A. ACE2 of the heart: From angiotensin I to angiotensin (1-7). Cardiovasc Res. 2007 Feb 1;73(3):463-9. Epub 2006 Sep 19. Review.",
              "__typename": "Citation"
            },
            {
              "name": "Beermann J, Piccoli MT, Viereck J, Thum T. Non-coding RNAs in Development and Disease: Background, Mechanisms, and Therapeutic Approaches. Physiol Rev. 2016 Oct;96(4):1297-325. doi: 10.1152/physrev.00041.2015. Review.",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [
            {
              "url": "https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200121-sitrep-1-2019-ncov.pdf?sfvrsn=20a99c10_4",
              "__typename": "Link"
            }
          ],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "IRCCS Policlinico San Donato",
              "city": {
                "name": "San Donato",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [
            {
              "name": "IRCCS Policlinico S. Donato",
              "__typename": "Sponsor"
            }
          ],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "Interstitial Pneumonia",
              "keywords": [
                {
                  "word": "thrombin generation",
                  "conditions": [
                    {
                      "disease": "Interstitial Pneumonia",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "fibrinolysis",
                  "conditions": [
                    {
                      "disease": "Interstitial Pneumonia",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Chest CT",
                  "conditions": [
                    {
                      "disease": "Interstitial Pneumonia",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "2019-nCoV (COVID-19)",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV 2",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            },
            {
              "disease": "Covid19",
              "keywords": [
                {
                  "word": "Covid-19 treatment",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-CoV Infection",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "SARS-Associated Coronavirus",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "Interleukin 6",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "High-flow nasal cannula",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "COVID19_OMICS",
              "acronym": "COVID_OMICS",
              "title": [
                {
                  "briefTitle": "Identification of Predictors for the Evolution of COVID-19 Related Pneumonia by Transcriptomic and Seroproteomic",
                  "officialTitle": "Identification of Predictors for the Evolution of COVID-19 Related Interstitial Pneumonia by Transcriptomic and Seroproteomic Techniques",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [
            {
              "name": "Marco Ranucci",
              "affiliation": "IRCCS Policlinico S. Donato",
              "responsibilities": [
                {
                  "type": "Principal Investigator",
                  "investigator": [
                    {
                      "name": "Marc Klapholz, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Thomas Pitts, M.D.",
                      "__typename": "Investigator"
                    },
                    {
                      "name": "Marco Alessandro Minetto",
                      "__typename": "Investigator"
                    }
                  ],
                  "__typename": "Responsible"
                }
              ],
              "__typename": "Investigator"
            }
          ],
          "description": [
            {
              "detailed": "Study design This observational, prospective, monocentric study will make use of the recruitment of consecutive patients with COVID-19. Enrollment will last 6 months or, considering the desirable drop in infections in the next few weeks, until exhaustion of enrolled patients. Enrollment will be followed by 18 months dedicated to transcriptomics and seroproteomics investigations, for a total duration of the study of 24 months.\n\nAll patients will receive optimal medical therapy, and will undergo laboratory or instrumental examinations (chest x-ray, CT, echocardiography) as needed.\n\nBlood samples will be taken at the entrance and then twice a week for the duration of the hospitalization (generally 2-3 weeks).\n\nAnamnesis will be noted for all patients. In addition, at all times, patients will undergo clinical evaluation and the following laboratory tests, which include:\n\nblood count\nbiochemistry\nstandard coagulation and thrombin generation, fibrin generation and fibrinolysis (INR, PTT, D-dimer, Tissue Plasminogen Activator TPA, Plasminogen Activator Inhibitor PAI-2, Plasmin-AntiPlasmin complex PAP, Thrombin activated Fibrinolysis Inhibitor TAFI, Thrombin-AntiThrombin complex TAT, Prothrombin Fragment PF 1+2, Fibrinopeptide A)\ninflammation/infection (IL-6, procalcitonin, ferritin, PCR, sCD14, TLR3 and 4, RANTES, CCR3 and 4\nother (troponin I, NT-pro-BNP, Hb1Ac).",
              "summary": "The investigating group aims at performing an observational, prospective study that involves the evaluation of circulating biomarkers predictive of clinical evolution in patients suffering from COVID-19 disease.\n\nIn particular, the aim will be to verify whether there are transcripts or cytokines / chemokines in peripheral blood, modulated differently in patients with COVID-19, distinguished on the basis of the evolution towards more severe clinical pictures that require patient intubation or that show signs of cardiovascular damage.\n\nThe study will be based on the transcriptional analysis of the entire genome and serum protein to evaluate the expression of a broad spectrum of cytokines and chemokines. Genome analysis will allow the genotype to be correlated to the identified gene expression profiles.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [
            {
              "model": "Cohort",
              "name": null,
              "description": null,
              "arms": [
                {
                  "name": "Patient with Covid-19 confirmed (severe form)",
                  "__typename": "Arm"
                },
                {
                  "name": "COVID- PCR",
                  "__typename": "Arm"
                },
                {
                  "name": "Non-exposed to Methylprednisolone",
                  "__typename": "Arm"
                }
              ],
              "__typename": "Design"
            }
          ],
          "observationPeriod": [
            {
              "time": "Prospective",
              "__typename": "ObservationPeriod"
            }
          ],
          "primaryOutcome": [
            {
              "name": "Circulating markers for COVID-19 signature",
              "description": "Identify circulating transcripts (coding and non-coding for proteins) or cytokines and chemokines which, alone or in combination (COVID19_signature), are predictive of adverse events (death, endotracheal intubation) and the prognostic capacity of COVID19_signature in the prediction of adverse events in additional to the use of standard clinical parameters",
              "time": "From ICU/ward admission for 8 weeks follow/up",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "COVID-19 related coagulation pattern",
              "description": "Evaluate, in a subset of 20 patients, the characteristics of the coagulation pattern with specific tests for thrombin generation and fibrinolysis.",
              "time": "From ICU/ward admission for 8 weeks follow/up",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "COVID-19 signature and adverse cardiovascular events",
              "description": "Evaluate the association of COVID19_signature with adverse cardiovascular events. Adverse cardiovascular events are defined: death from cardiovascular causes, acute coronary syndrome, troponin T levels greater than the ninety-ninth percentile of the upper reference limit, stroke, cardiac arrhythmias, development of heart failure, venous thromboembolism",
              "time": "From ICU/ward admission for 8 weeks follow/up",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "240 patients with COVID-19 will be recruited, including up to 60 patients from the intensive care and 180 from the specialized COVID19 departments of the IRCCS Policlinico San Donato. The sample size is estimated based on the average length of hospitalization of the patients and the maximum capacity of the clinical and laboratory units involved in the study.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Rosanna Cardani, PhD",
              "__typename": "Contact"
            },
            {
              "email": "",
              "name": "Ekaterina Baryshnikova, PhD",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [
            {
              "retension": "Samples With DNA",
              "description": "Serum, plasma, whole blood, PBMC samples",
              "__typename": "BioSpecimen"
            }
          ],
          "studyArms": [],
          "__typename": "ClinicalTrial"
        },
        {
          "NCTId": "NCT04427332",
          "data_source": "clinicaltrials.gov",
          "url": "https://clinicaltrials.gov/ct2/show/NCT04427332",
          "refersTo": [
            {
              "name": "Li YC, Bai WZ, Hashikawa T. The neuroinvasive potential of SARS-CoV2 may play a role in the respiratory failure of COVID-19 patients. J Med Virol. 2020 Jun;92(6):552-555. doi: 10.1002/jmv.25728. Epub 2020 Mar 11. Review.",
              "__typename": "Citation"
            },
            {
              "name": "Klopfenstein T, Kadiane-Oussou NJ, Toko L, Royer PY, Lepiller Q, Gendrin V, Zayet S. Features of anosmia in COVID-19. Med Mal Infect. 2020 Apr 17. pii: S0399-077X(20)30110-4. doi: 10.1016/j.medmal.2020.04.006. [Epub ahead of print]",
              "__typename": "Citation"
            },
            {
              "name": "Hummel T, Whitcroft KL, Andrews P, Altundag A, Cinghi C, Costanzo RM, Damm M, Frasnelli J, Gudziol H, Gupta N, Haehne A, Holbrook E, Hong SC, Hornung D, Hüttenbrink KB, Kamel R, Kobayashi M, Konstantinidis I, Landis BN, Leopold DA, Macchi A, Miwa T, Moesges R, Mullol J, Mueller CA, Ottaviano G, Passali GC, Philpott C, Pinto JM, Ramakrishnan VJ, Rombaux P, Roth Y, Schlosser RA, Shu B, Soler G, Stjärne P, Stuck BA, Vodicka J, Welge-Luessen A. Position paper on olfactory dysfunction. Rhinol Suppl. 2017 Mar;54(26):1-30. doi: 10.4193/Rhino16.248. Review.",
              "__typename": "Citation"
            }
          ],
          "refersToUrl": [],
          "useReferenceAs": [
            {
              "name": "background",
              "__typename": "ReferenceType"
            }
          ],
          "conductedAt": [
            {
              "name": "ASST Monza-Ospedale San Gerardo",
              "city": {
                "name": "Monza",
                "__typename": "City"
              },
              "__typename": "Facility"
            }
          ],
          "investigates": [],
          "type": [
            {
              "type": "Observational",
              "__typename": "StudyType"
            }
          ],
          "isSponsoredBy": [],
          "isSupportedBy": [],
          "isFdaRegulatedDevice": [],
          "isUnapprovedDevice": [],
          "isFdaRegulatedDrug": [],
          "expandedAccess": [],
          "isStudying": [
            {
              "disease": "covid19",
              "keywords": [
                {
                  "word": "Coronavirus",
                  "conditions": [
                    {
                      "disease": "Moderate to Severe Acute Respiratory Distress Syndrome Associated With COVID-19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Respiratory Disease",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Neurokinin 1 Receptor, Substance P, Respiratory Illness, Inflammation, Covid-19, Coronavirus",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "sars-covid-2",
                  "conditions": [
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                },
                {
                  "word": "coronavirus infection",
                  "conditions": [
                    {
                      "disease": "Covid19",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Severe Acute Respiratory Syndrome",
                      "__typename": "Condition"
                    },
                    {
                      "disease": "Sars-CoV2",
                      "__typename": "Condition"
                    }
                  ],
                  "__typename": "Keyword"
                }
              ],
              "__typename": "Condition"
            }
          ],
          "isPhase": [],
          "purpose": [],
          "identifications": [
            {
              "studyId": "COVID-19 ORL",
              "acronym": "COVID-19 ORL",
              "title": [
                {
                  "briefTitle": "Smell and Taste Disorders in COVID-19 Patients",
                  "officialTitle": "Smell and Taste Disorders in COVID-19 Patients: Prospective Observational Study",
                  "__typename": "Title"
                }
              ],
              "__typename": "StudyIdentification"
            }
          ],
          "status": [
            {
              "status": "Recruiting",
              "stopReason": [],
              "__typename": "Status"
            }
          ],
          "stopped": [],
          "completed": [],
          "conductedBy": [],
          "description": [
            {
              "detailed": "BACKGROUND:\n\nPreliminary observational data collected by Otorhinolaryngologist at the San Gerardo Hospital in Monza and by literature evidenced that numerous patients suffering from Sars-CoV-2 infection had smell and taste disorders. The are many data in the literature but few validated studies are available. Furthermore, it is not yet known in these patients what factors are related to the presence of olfactory and gustatory symptoms.\n\nThe aim of the study is to identify the demographic and clinical factors related to the smell and taste disorders in patients with Sars-CoV-2 infection, to evaluate the evolution of symptoms with a follow-up and to evaluate which factors influence the improvement of that symptoms.\n\nSTUDY DESIGN:\n\nThe study will include patients diagnosed with Sars-CoV-2 infection who have been hospitalized in the COVID wards of the San Gerardo Hospital in Monza and non-hospitalized patients but that get access to the \"nasopharyngeal swabs\" service of the hospital for the detection of the Sars-CoV-2 virus.\n\nThe study includes 3 timepoints. After acquiring informed consent, patient will be contacted on the phone and he will be asked to answer a multiple or short-answer questionnaire (T0) aimed at collecting demographic and clinical data, in particular relating to the smell and taste disorders, which will take place approximately 24 hours after running the swab. Follow-up period will follow, which will require patients to be contacted and invited by the Investigator to repeat the telephone questionnaire respectively 1 month (T1) and 3 months (T2) from the first compilation (T0).\n\nThe following information will be collected and recorded on a paper CRF:\n\nregistry collection (date of birth, gender at birth)\norigin of the subjects: hospitalized, not hospitalized\npathological, pharmacological history, allergies, smoking, flu vaccination\ndate of onset of COVID19 symptoms\nsmell and taste symptoms and temporal correlation with systemic symptoms (fever, dyspnoea, headache, rhinitis, gastrointestinal symptoms, arthralgias, skin manifestations)\ndate of regression of the smell and taste symptoms\n\nSTATISCAL ANALYSIS:\n\nA logistic regression model is used to identify what the clinical and demographic factors associated with the onset of the disease of interest are.\n\nThe composite endpoint consisting of the presence of smell and / or taste disorders vs the absence of both pathologies will be used as a variable. The secondary analyzes will concern only the subjects who have declared that they have had the disease in the study and, through a logistic or ordinal regression model, we will try to identify which factors are associated with the positive evolution of the disease at T3 compared to T0.",
              "summary": "This is a prospective monocentric observational study with the aim of investigating the demographic and clinical factors related to the smell and taste disorders in patients with Severe Acute Respiratory Syndrome - Coronavirus - 2 (Sars-Cov-2) infection.",
              "__typename": "Description"
            }
          ],
          "studyDesign": [],
          "observationPeriod": [],
          "primaryOutcome": [
            {
              "name": "Identification of demographic and clinical factors in covid19 patients.",
              "description": "Identify the demographic and clinical factors related to the sense of smell and taste in patients with Sars-CoV-2 infection included in the study.",
              "time": "Until patient discharge from the hospital (approximately four months)",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "secondaryOutcome": [
            {
              "name": "Description of the disturbances of smell and taste",
              "description": "Description in patients with Sars-CoV-2 infection the evolution of the symptoms (disturbances of smell and taste) understood as partial or total regression by 1-month and 3-month follow-up",
              "time": "Until patient discharge from the hospital (approximately four months)",
              "type": "",
              "__typename": "Outcome"
            },
            {
              "name": "Description of factors that influence smell and taste",
              "description": "Define which factors (demographic and clinical) influence the improvement of the sense of smell and taste",
              "time": "Until patient discharge from the hospital (approximately four months).",
              "type": "",
              "__typename": "Outcome"
            }
          ],
          "otherOutcome": [],
          "studyPopulation": [
            {
              "name": "All subjects belonging to the nasopharyngeal swabs service for the detection of the Sars-CoV-2 virus, both discharged from the hospital and not hospitalized, who will meet the inclusion / exclusion criteria, from mid-May until the end of June 2020 will be consecutively enrolled. It is assumed to recruit about 500 subjects.",
              "sampling": "Non-Probability Sample",
              "genders": [],
              "__typename": "StudyPopulation"
            }
          ],
          "inclusionCriteria": [],
          "exclusionCriteria": [],
          "contactPerson": [
            {
              "email": "",
              "name": "Dante Jean Garavello Werner Jean, Prof.",
              "__typename": "Contact"
            }
          ],
          "retainedBioSamples": [],
          "studyArms": [],
          "__typename": "ClinicalTrial"
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
