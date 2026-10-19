// The Scientific Sessions page. One <Card> per session.
// render.mjs builds this to dist/scientific-sessions.html.
//
// Edit the SESSIONS array below. Each session: number, schedule (or null),
// speakers (one or more {name, affiliation, photo, role?}), and abstract
// (one or more paragraphs). photo is a filename under
// _assets/scientific-session-speakers/ or null for a blank placeholder.
// role is optional (e.g., "Speaker", "Session Organizer", "Moderator") and
// shown as a small label above the speaker's name. affiliation may be empty
// (e.g., for a "To Be Announced" placeholder), in which case the line is
// omitted.

import React from "react";
import { Page } from "./page.jsx";
import { Card } from "./card.jsx";

export const meta = {
  page: "scientific-sessions",
  title: "DSDSS2026 Scientific Sessions",
};

const SESSIONS = [
  {
    number: 1,
    title: "The Architecture of Causal Evidence: Translating Targeted Learning into Real-World Data Reality",
    schedule: "Thursday, October 22, 2026, 9:50 am - 11:30 am",
    speakers: [
      {
        name: "Dr. Susan Gruber",
        affiliation: "Targeted ML Solutions",
        photo: "susan-gruber.jpg",
        role: "Speaker",
        talk: "Targeted Learning for generating real-world evidence",
        abstract: "Practical challenges make it difficult to generate reliable evidence from real-world data (RWD). Enrollment difficulties, smaller than expected effect sizes, lack of baseline randomization, treatment non-compliance, and informative loss to follow-up can bias causal effect estimates. Targeted Learning provides a rigorous framework for addressing these challenges. The key methodology for data analysis is targeted maximum likelihood estimation (TMLE) combined with super learning (SL), a powerful machine learning approach. The Targeted Learning Causal Estimation Roadmap guides the journey from scientific question to study finding and interpretation.\n\nTMLE is a maximally efficient double robust estimator that relies on fewer assumptions than propensity score-based methods that are often used to analyze health care data. Unlike most machine learning approaches used in isolation, TMLE+SL provides accurate control of the Type-I error rate, and good confidence interval coverage. A case study illustrates performance when analyzing data from a pragmatic trial with an unexpected 25% loss to follow-up.",
      },
      {
        name: "Dr. Miguel Hernán",
        affiliation: "Kolokotrones Professor of Biostatistics and Epidemiology, Harvard T.H. Chan School of Public Health",
        photo: "miguel-hernan.png",
        role: "Speaker",
        talk: "Target trial emulation: making causal inference less casual",
        abstract: "When randomized trials are not available, causal effects are often estimated using observational healthcare databases. Therefore, causal inference from observational data can be viewed as an attempt to emulate a hypothetical randomized trial—the target trial—that would quantify the causal effect of interest. Contrary to what is generally believed, many well-known failures of observational studies were not the result of lack of randomization but of not adequately emulating the design of a target trial. This talk discusses how the target trial framework helps articulate precise causal questions, increases transparency in the procedures used to generate the answers, and prevents design biases when using observational data.",
      },
      {
        name: "Dr. Xiang Zhang",
        affiliation: "CSL Behring",
        photo: "xiang-zhang.jpg",
        role: "Speaker",
        talk: "Real World Application",
      },
      {
        name: "Dr. Ying Li",
        affiliation: "Director, Real World Evidence, Regeneron",
        photo: "ying-li.jpg",
        role: "Speaker",
        talk: "Unlocking the Power of Machine Learning and Real-World Data for Clinical Development",
      },
      {
        name: "Dr. Jane Zhang",
        affiliation: "Head of Immunology Statistics, AbbVie",
        photo: "jane-zhang.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "As the volume of Real-World Data (RWD) expands, the pharmaceutical industry faces a critical bottleneck: transforming unstructured data into rigorous, actionable clinical evidence.",
      "This session explores the end-to-end architecture required to achieve this, bridging cutting-edge causal inference methodology with modern data infrastructure and pharmaceutical execution.",
      "Attendees will gain a comprehensive understanding of how advanced statistical frameworks - specifically Targeted Learning and Target Trial Emulation - are moving beyond academic theory to directly impact clinical differentiation and improve the Probability of Success (PoS) in drug development.",
      "The session also shows how machine learning turns real-world data into actionable evidence through patient-level risk prediction, subgroup discovery of disease subphenotypes, and causal inference into which patients benefit most from a given therapy, with case studies drawn from oncology and rare diseases.",
    ],
  },
  {
    number: 2,
    title: "High-Dimensional Statistical Learning for Biomedical Data",
    schedule: "Thursday, October 22, 2026, 1:00 pm - 2:40 pm",
    speakers: [
      {
        name: "Dr. Ye Tian",
        affiliation: "Assistant Professor of Statistics, Pennsylvania State University",
        photo: "ye-tian.jpg",
        role: "Speaker",
        talk: "Understanding Cross-Population PRS Prediction: Transfer Learning with Sparse and Correlated Structures",
        abstract: "Cross-population polygenic risk score (PRS) prediction has recently received substantial attention for their potential to improve prediction across diverse populations, particularly when leveraging a large population dataset to improve prediction in a smaller population. Many new cross-population PRS methods are proposed each year, yet the theoretical understanding of this problem and these methods remains very limited. In this paper, we study this problem through a high-dimensional sparse linear regression framework, in which each population has both population-specific independent signals and shared signals that are correlated through genetic correlation. Our theory characterizes how optimal estimation and prediction performance is governed by genetic correlation, sample sizes, signal variances, and noise variances. We show that the Bayes posterior mean with plugged-in prior estimates and hierarchical Bayes estimators achieve the optimal performance up to logarithmic factors under certain conditions, whereas some transfer learning methods based on global penalization generally do not.",
      },
      {
        name: "Dr. Mengyan Li",
        affiliation: "Assistant Professor of Mathematical Sciences, Bentley University",
        photo: "mengyan-li.jpg",
        role: "Speaker",
        talk: "Semi-supervised Clustering Through Representation Learning of High-dimensional Count Data",
        abstract: "High-dimensional count data arise in many modern applications, such as electronic health records (EHR) and RNA sequencing, with sparse, heterogeneous observations driven by complex latent structure. These characteristics make modeling and prediction challenging, especially when labels are limited. We propose SCORE, a semi-supervised representation learning framework for clustering and embedding construction from high-dimensional count features. SCORE is built on a Poisson-adapted latent factor mixture model that supports incorporating external pre-trained feature embeddings when available, enabling efficient extraction of latent cluster membership and low-dimensional representations. To scale inference and learning to large datasets, SCORE uses a hybrid algorithm that combines expectation-maximization with a Gaussian variational approximation, leveraging a small labeled subset to refine estimation on a large pool of unlabeled samples. We establish convergence guarantees for this hybrid procedure, quantify approximation errors introduced by the Gaussian variational approximation, and derive error rates under increasing embedding dimensions. Our theory and experiments show that incorporating unlabeled data improves accuracy and reduces sensitivity to label scarcity, yielding strong finite-sample performance relative to existing approaches. We demonstrate SCORE for predicting disability status in multiple sclerosis using EHR data, where it learns informative patient embeddings with strong predictive performance, highlighting its practical value.",
      },
      {
        name: "Dr. Yuan Huang",
        affiliation: "Assistant Professor of Biostatistics, Yale School of Public Health",
        photo: "yuan-huang.jpg",
        role: "Speaker",
        talk: "Mediation Analysis for Sparse and Irregularly Spaced Longitudinal Outcomes with Application to the MrOS Sleep Study",
        abstract: "Mediation analysis is widely used to identify the pathways through which an exposure influences an outcome via intermediate mediators. However, limited research has addressed settings involving high-dimensional mediators and outcomes observed as sparse, irregularly spaced longitudinal measurements. To address these challenges, we propose a mediation analysis framework for scalar exposures, high-dimensional mediators, and sparse longitudinal outcomes. The proposed method identifies significant mediators by addressing two key challenges: (i) modeling time-varying mediation effects using time-varying coefficient models for sparse and irregular longitudinal outcomes, and (ii) performing valid inference with a high-dimensional set of candidate mediators through proposed multiple testing procedures. We apply the proposed method to the MrOS Sleep Study to investigate lipid pathways that may mediate the association between rest-activity rhythms and longitudinal cognitive decline in older men, providing insight into potential biological mechanisms linking rest-activity rhythms to cognitive decline.",
      },
      {
        name: "Dr. Yong Chen",
        affiliation: "Professor of Biostatistics and Informatics, University of Pennsylvania",
        photo: "yong-chen.jpg",
        role: "Speaker",
        talk: "MOSAiC: a unified framework for lossless, one-shot, federated learning algorithms",
        abstract: "Multi-site studies are now central to biomedical research, but inference across sites remains challenging due to regulatory limits on sharing individual-level data, heterogeneous data distributions, sparse events in small centers, and the logistical burden of multi-round communication. In this talk, I introduce MOSAiC (Multi-site One-Shot Aggregation of Compressed Risk Functions), a unified framework for modern distributed research networks. Notably, MOSAiC reframes distributed learning as a mathematical problem of compressing and aggregating risk functions, leveraging recent advances in tensor networks—state-of-the-art tools for high-dimensional function approximation in scientific computing. Our MOSAiC enjoys four desirable properties that have never been achieved by any of the existing federated algorithms (except linear regressions): one-shot communication, lossless recovery of pooled-data estimates, inclusiveness of all sites irrespective of size or event rarity, and analytic submodel exploitability without re-querying partners. I will illustrate MOSAiC’s validity and efficiency through applications in drug relabeling, drug repurposing, and post-market safety surveillance. The talk will highlight our forthcoming discussion paper in the Journal of the American Statistical Association (Applications and Case Studies) (https://www.tandfonline.com/doi/full/10.1080/01621459.2026.2698025), along with several ongoing extensions and applications.",
      },
      {
        name: "Dr. Runze Li",
        affiliation: "Eberly Family Chair in Statistics, Pennsylvania State University",
        photo: "runze-li.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This session presents new theory and methodology for high-dimensional statistical learning in modern biomedical applications, from cross-population genetic prediction to representation learning from electronic health records.",
      "Dr. Ye Tian studies cross-population polygenic risk score (PRS) prediction, which leverages large datasets to improve prediction in smaller populations. Using a high-dimensional sparse linear regression framework with population-specific and genetically correlated shared signals, the work characterizes how optimal estimation depends on genetic correlation, sample sizes, and signal and noise variances, and shows that Bayesian estimators can achieve near-optimal performance where some global-penalization transfer learning methods do not.",
      "Dr. Mengyan Li introduces SCORE, a semi-supervised representation learning framework for clustering and embedding high-dimensional count data such as EHR and RNA sequencing. Built on a Poisson-adapted latent factor mixture model with a hybrid EM and Gaussian variational algorithm, SCORE uses a small labeled subset to refine estimation on large unlabeled data, with convergence guarantees and error rates. It is demonstrated on predicting disability status in multiple sclerosis from EHR data.",
    ],
  },
  {
    number: 3,
    title: "From Genome to Patient: An End-to-End View of Immunology in Drug Development",
    schedule: "Thursday, October 22, 2026, 2:50 pm - 4:30 pm",
    speakers: [
      {
        name: "Yihua Gu",
        affiliation: "Vice President of Biostatistics, AbbVie",
        photo: "yihua-gu.jpg",
        role: "Speaker",
      },
      {
        name: "Michael Kessler",
        affiliation: "Director of Statistical Genetics, Regeneron",
        photo: "michael-kessler.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Wei Keat Lim",
        affiliation: "Genomic Data Scientist, Regeneron",
        photo: "wei-keat-lim.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Sara Hamon",
        affiliation: "Executive Director, Precision Medicine, Regeneron",
        photo: "sara-hamon.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This session traces the end-to-end arc of immunology-driven drug development—from population-scale genetics that nominate causal targets, through translational biomarker discovery and patient stratification, to late-phase clinical trials that convert hypotheses into actionable evidence.",
      "The program highlights how statistical genetics, computational biology, and clinical biostatistics intersect to advance therapies for immune-mediated diseases.",
      "The audience will leave with a cohesive, practical view of the genome-to-patient pipeline and concrete insights for cross-functional collaboration.",
    ],
  },
  {
    number: 4,
    title: "Real-World Impact of Artificial Intelligence in Medicine",
    schedule: "Thursday, October 22, 2026, 4:40 pm - 5:40 pm",
    speakers: [
      {
        name: "Dr. Rolando J. Acosta",
        affiliation: "Manager, Biostatistics, Regeneron",
        photo: "rolando-acosta.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Erick Scott",
        affiliation: "VP, Clinical Data Science, Keiji AI",
        photo: "erick-scott.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Yi-Lin Chiu",
        affiliation: "Director and Department Head, Discovery and Exploratory Statistics (DIVES), Biometrics, AbbVie",
        photo: "yi-lin-chiu.jpg",
        role: "Speaker",
      },
      {
        name: "Dr. Haoda Fu",
        affiliation: "Head of Exploratory Biostatistics, Amgen",
        photo: "haoda-fu.webp",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This showcase bridges the gap between academic research and pharmaceutical industry application by bringing together leading experts to highlight the real-world impact of artificial intelligence.",
      "Moving past theoretical hype, the session features a curated selection of high-impact, concrete case studies demonstrating how AI is actively transforming medicine.",
      "Featured presentations will explore verified success stories across accelerated drug discovery, clinical trial optimization, and translational research.",
      "By focusing on evidence-based examples, this event provides a practical blueprint for cross-disciplinary collaboration and offers a clear view of how data-driven innovation is driving the next generation of biomedical solutions.",
    ],
  },
  {
    number: 5,
    title: "Digital Health Technologies and Wearable Sensors in Clinical Research",
    schedule: "Friday, October 23, 2026, 9:00 am - 10:30 am",
    speakers: [
      {
        name: "Dr. Junrui Di",
        affiliation: "Director, Data Science & Digital Health, Neuroscience, Johnson & Johnson",
        photo: "junrui-di.jpg",
        role: "Speaker",
        talk: "From Wearables to Evidence: The Critical Role of Statistical Science in Digital Health",
        abstract: "Digital health technologies can continuously capture patient behavior, function, and physiology in everyday life, creating new opportunities to understand disease progression and treatment effects. Yet the greatest challenge is often not collecting the data, but determining what the data truly mean. Without rigorous statistical methods, digital measures risk reflecting device artifacts, behavioral variability, or operational biases rather than meaningful clinical change.\n\nThis presentation will highlight how statistical expertise enables the responsible development and deployment of digital health technologies in clinical research. We will discuss practical challenges including missing data, endpoint derivation and validation, and longitudinal modeling. Through real-world examples, attendees will see how statistical methods help make digital measures clinically interpretable, scientifically credible, and useful for decision-making.",
      },
      {
        name: "Dr. Jacek K. Urbanek",
        affiliation: "Director, Biostatistics, Regeneron",
        photo: "jacek-urbanek.jpg",
        role: "Speaker and Session Organizer",
        talk: "Modelling Prodromal Progression of Parkinson's Disease Using Multiday, Free-Living Wearable Accelerometry Data in UK Biobank",
        abstract: "Large observational studies such as UK Biobank have collected extensive free-living accelerometry data that, when linked to electronic health records, enable retrospective identification of patients years before clinical diagnosis. This creates opportunities to characterize prodromal disease signatures using passively collected digital measures.\n\nWrist-worn accelerometry data from 439 UK Biobank participants with Parkinson's disease were analyzed. Linkage to longitudinal diagnosis codes identified 369 prodromal patients (accelerometry collected up to 9 years prior to diagnosis) and 70 post-diagnosis patients (up to 5 years after). Digital measures characterizing the distribution of activity intensities and total physical activity were derived and compared against demographically matched controls. Prodromal patients exhibited detectable differences in activity patterns, with effect sizes increasing closer to diagnosis. Trends in these measures as a function of time to and since diagnosis will be presented, along with assessment of face validity and discriminative ability between clinical groups. These findings advance our understanding of preclinical functional decline in Parkinson's disease and highlight the potential of wearable accelerometry to support earlier detection, ultimately informing the development of scalable, non-invasive tools for identifying at-risk individuals before irreversible neurodegeneration occurs.",
      },
      {
        name: "Dr. Yishu Gong",
        affiliation: "Takeda",
        photo: "yishu-gong.jpg",
        role: "Speaker",
        talk: "Longitudinal Assessment of Digital Health Measures in WatchPD study",
        abstract: "Digital health technologies provide objective measures of Parkinson's disease (PD). This 12-month multicenter study assessed 82 individuals with early, untreated PD and 50 controls using a smartwatch, smartphone, and sensors. Participants completed clinic-based assessments and at-home tasks, including wearing a smartwatch for seven days and bi-weekly motor, speech, and cognitive tasks. Baseline measures, including arm swing, tremor, speech, and finger tapping, differed significantly between groups. Longitudinal analyses showed declines in gait, increased tremor, and modest speech changes. Arm swing decreased from 25.9° to 19.9° (P = 0.004), and tremor time increased from 19.3% to 25.6% (P < 0.001). Changes in individual digital measures often exceeded changes in clinical scale items but not the overall scale. Findings from 44 participants in the WatchPD extension at month 36 is also presented, demonstrating the potential of digital measures to track progression and assess therapeutics, despite challenges in data capture and study design.",
      },
      {
        name: "Dr. Jaroslaw Harezlak",
        affiliation:
          "Chair, Department of Epidemiology and Biostatistics, Indiana University School of Public Health-Bloomington",
        photo: "jaroslaw-harezlak.jpg",
        role: "Moderator",
      },
    ],
    abstract: [
      "Emerging digital technologies—such as wearable sensors and at-home self-assessments—capture physiological, functional, and behavioral data remotely in patients' everyday environments. By enabling frequent, unbiased measurement across the full functional spectrum, these tools reveal clinical insights that traditional point-in-time visits often miss.",
      "Realizing their potential requires new strategies for study design, quantitative methods, and data and computing infrastructure so that digital biomarkers and outcome measures meet high standards of clinical research and development.",
      "In this session, three digital health industry veterans will share practical guidance for statistically rigorous methods supporting strategy, experimental design, instrument operationalization, and synthesis of results. They will illustrate approaches to monitoring disease progression and to developing and validating measures, with examples from narcolepsy and Parkinson's disease.",
      "Opening remarks will be delivered by Dr. Jaroslaw Harezlak—an academic pioneer in wearable devices and Chair of the Department of Epidemiology and Biostatistics at Indiana University School of Public Health-Bloomington. He will also moderate the panel discussion and Q&A session.",
    ],
  },
  {
    number: 6,
    title: "Bridging AI and Statistical Inference: Methods and Applications",
    schedule: "Friday, October 23, 2026, 10:45 am - 12:15 pm",
    speakers: [
      {
        name: "Dr. Jacob Bien",
        affiliation:
          "Professor of Data Sciences and Operations, USC Marshall School of Business",
        photo: "jacob-bien.jpg",
        role: "Speaker",
        talk: "Hierarchical Clustering With Confidence",
        abstract: "Hierarchical clustering is one of the most widely used approaches for exploring data. However, its greedy nature makes it highly sensitive to small perturbations, blurring the lines between genuine structure and spurious patterns. In this work, we show how randomizing hierarchical clustering can be useful not just for assessing clustering stability but also for designing valid hypothesis testing procedures based on clustering results. In particular, we propose a method for constructing a valid p-value at each node of the hierarchical clustering dendrogram that quantifies evidence against performing the greedy merge. Furthermore, we show how our p-values can be used to estimate the number of clusters, with a probabilistic guarantee on overestimation of the number of clusters. This is joint work with Di Wu and Snigdha Panigrahi.",
      },
      {
        name: "Dr. Rong Ma",
        affiliation: "Assistant Professor of Biostatistics, Harvard T.H. Chan School of Public Health",
        photo: "rong-ma.jpg",
        role: "Speaker",
        talk: "Geometric Inference for Single-Cell and Spatial Omics",
        abstract: "Modern single-cell and spatial omics technologies measure biological systems at increasingly high resolution, producing high-dimensional datasets that are rich in structure but challenging to interpret. A recurring theme is that these data often concentrate around low-dimensional geometric structures—manifolds, trajectories, and spatially organized tissue coordinates—that encode biological processes including cell differentiation, tissue organization, and regulatory dynamics. At the same time, many biological questions are themselves geometric: When can a low-dimensional map be trusted to represent cellular relationships? What coordinate system best captures tissue morphology? How do cells move through developmental state space? And how can these geometric structures reveal biological mechanisms? In this talk, I will discuss our recent work in statistical machine learning for single-cell and spatial omics, centered on the interaction between geometry and biology. I will first describe how a map-continuity perspective can diagnose and improve the reliability of nonlinear embeddings such as t-SNE and UMAP. I will then discuss how morphologically informed geometric coordinates can improve the detection of spatially variable genes in tissue. Finally, I will present a geometry-preserving framework for embedding RNA velocity and analyzing cellular dynamics as vector fields on low-dimensional cell-state manifolds. Together, these examples illustrate how manifold learning and geometric inference can provide both rigorous statistical tools and new biological insights.",
      },
      {
        name: "Dr. Ying Jin",
        affiliation: "Assistant Professor, Statistics and Data Science, The Wharton School, University of Pennsylvania",
        photo: "ying-jin.jpg",
        role: "Speaker",
        talk: "AI agents for automated validation and generation of scientific hypotheses",
        abstract: "AI agents powered by Large Language Models (LLMs) can now automate data analysis and propose scientific hypotheses from data. However, a key challenge is to determine whether the generated hypotheses are worth costly follow-up validation, since the sheer volume of hypotheses LLMs can generate makes manual validation impractical.\n\nWe argue the role of statistical evidence for AI-in-the-loop scientific discovery. In this talk, we present recent efforts on developing agentic frameworks that enable automated validation and generation of hypotheses with valid statistical evidence. We design high-level statistical principles for the exploration of AI agent to guarantee error control while allowing flexibility and diversity. First, we present POPPER, an agentic framework for rigorous automated validation of free-form, abstract, and high-level hypotheses. Guided by Karl Popper's principle of falsification, Popper validates a hypothesis using LLM agents that design and execute falsification experiments targeting its measurable implications. A sequential testing framework ensures strict Type-I error control while actively gathering evidence from diverse observations. We demonstrate that Popper delivers robust error control, high power, and scalability in a curated functional genomics dataset. Compared to human scientists, Popper achieved comparable performance in validating complex biological hypotheses while reducing time by 10 folds. Second, we present ongoing work on agentic frameworks to orchestrate hypotheses generation and validation to produce candidate scientific hypotheses with Type-I error control.",
      },
      {
        name: "Dr. Haiyan Huang",
        affiliation: "Professor of Statistics, University of California, Berkeley",
        photo: "haiyan-huang.jpg",
        role: "Speaker",
        talk: "Ranking hierarchical multi-label classification results with mLPRs",
        abstract: "Hierarchical multi-label classification (HMC) arises when each object may belong to multiple related classes organized in a tree or directed acyclic graph. Such structures are common in biomedical applications, including disease ontologies, functional gene annotation, and phenotype classification, where predictions must respect known relationships among categories.\n\nA common HMC strategy first trains separate classifiers for individual classes and then combines their scores to produce a unified set of hierarchy-consistent predictions. We focus on this second-stage problem. A key challenge is that classifier scores may have different statistical properties across classes and therefore are not directly comparable, while naive ranking can violate the known hierarchy. We introduce a new objective function, CATCH, and a multidimensional Local Precision Rate (mLPR), which measures the probability that an object belongs to a class based jointly on its classifier scores and the class hierarchy. Under suitable conditions, ranking object–class pairs using mLPRs produces hierarchy-consistent decisions that optimize CATCH. In practice, we propose an algorithm, HierRank, that ranks estimated mLPRs under the hierarchical constraint, yielding a ranking that maximizes an empirical version of CATCH. Simulations and two real-data applications demonstrate improved classification accuracy compared with existing approaches.\n\nThe framework is particularly relevant to modern genomic and biomedical applications in which machine-learning or deep-learning models generate predictions for large numbers of related biological labels. In this setting, mLPR and HierRank provide a principled second-stage approach for integrating classifier outputs while respecting known biological hierarchies, with potential applications to gene and protein functional annotation, disease and phenotype classification, and hierarchical cell-type annotation.",
      },
      {
        name: "Dr. Nancy Zhang",
        affiliation: "Ge Li and Ning Zhao Professor of Statistics, The Wharton School, University of Pennsylvania",
        photo: "nancy-zhang.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This session will highlight emerging methods at the intersection of rigorous statistical inference and modern machine learning for analyzing high-dimensional genomic data.",
    ],
  },
  {
    number: 7,
    title: "Explainable Artificial Intelligence (XAI) for Interpretable Models",
    schedule: "Friday, October 23, 2026, 1:15 pm - 2:45 pm",
    speakers: [
      {
        name: "Dr. Fahimeh Mamashli",
        affiliation: "Associate Director, Data Science, Data and Statistical Science AI/ML, Daiichi Sankyo",
        photo: "fahimeh-mamashli.jpg",
        role: "Speaker",
        talk: "Understanding Explainable AI Through Real-World Healthcare Examples",
        abstract: "Explainable Artificial Intelligence (XAI) encompasses a set of methods and processes that enable humans to better understand, interpret, and trust the decisions made by artificial intelligence (AI) and machine learning (ML) models. As AI systems become increasingly complex, many function are “black boxes,” making it difficult to determine how specific outputs are generated. XAI addresses this challenge by improving transparency, interpretability, fairness, and accountability while helping identify potential biases and supporting regulatory compliance. It plays a critical role in high-stakes domains such as healthcare, where understanding AI-driven decisions is essential for building trust and enabling informed decision-making.\n\nThis presentation will introduce the fundamental concepts of XAI and highlight its importance in the development and deployment of trustworthy AI systems. Two real-world healthcare use cases will be presented: (A) the application of explainable AI for anomaly detection in centralized statistical monitoring, and (B) a machine learning approach that leverages explainability to explore population heterogeneity in real-world oncology data. These examples demonstrate how XAI can provide meaningful insights into model behavior, help users assess model behavior and reliability, and support the responsible adoption of AI in clinical research and healthcare.",
      },
      {
        name: "Dr. Alex Sverdlov",
        affiliation: "Executive Director, Biostatistics, Alnylam Pharmaceuticals",
        photo: "alex-sverdlov.jpg",
        role: "Speaker",
        talk: "Interpretable Degradation Models for Causal Reasoning and Validation in Neurodegenerative Disease",
        abstract: "Explainable AI is often treated as a set of post-hoc tools layered onto predictive models. In this talk, we present an alternative approach: statistical models that are interpretable by construction, using Wiener process degradation models for longitudinal decline in amyotrophic lateral sclerosis (ALS) as a case study. These models decompose disease progression into a drift term (average rate of decline) and a diffusion term (within-subject volatility), yielding directly interpretable parameters in place of an aggregate feature-importance score. We discuss how first-difference and mixed-effects estimation strategies embody a causal inference tradeoff familiar from the XAI literature: the former removes confounding but discards between-subject information, while the latter recovers covariate and individual-trajectory effects at the cost of stronger assumptions. We present Monte Carlo simulation evidence to validate estimator stability and parameter recovery under realistic clinical follow-up patterns and apply the approach to ALSFRS-R trajectories from the PRO-ACT database, where degradation model estimates track expected patterns of ALS decline. We also outline an extension of this framework to a joint multistate model linking the latent degradation process to clinically meaningful disease-state transitions. Together, this work argues that interpretability, causal structure, and validation can be built into a model rather than retrofitted onto it.",
      },
      {
        name: "Dilip Raghunathan",
        affiliation: "Business Solutions Partner, Regeneron",
        photo: "dilip-raghunathan.jpg",
        role: "Speaker",
        talk: "Explainability Begins Before the Model: Connecting Scientific Intent to Analytical Evidence",
        abstract: "As artificial intelligence becomes increasingly embedded in clinical research, explainability is often focused on understanding how models arrive at their predictions. But an equally important question deserves attention: Can we trace an analytical result all the way back to the scientific question it was intended to answer?\n\nToday, clinical trial objectives, endpoints, data collection specifications, transformations, and statistical analyses are often documented across disconnected systems and artifacts. While established processes provide traceability, much of this information remains document-centric, requiring manual interpretation and reconciliation to establish the complete lineage of an analytical result.\n\nDigital Data Flow (DDF) offers an opportunity to rethink this approach. By leveraging structured, machine-readable study definitions through frameworks such as the Unified Study Definitions Model (USDM), we can establish a foundation for connecting protocol objectives to downstream data and analytical workflows.\n\nThis presentation explores two fundamental dimensions of analytical explainability: traceability of an analysis to its original scientific intent, and transparency of the data elements and transformations that underpin its execution. We will contrast traditional document-driven approaches with an emerging USDM-enabled model, examining how standardized study definitions, complemented by data lineage and analytical metadata, can support greater transparency, reproducibility, and interpretability.\n\nAs AI increasingly participates in generating code, transforming data, and supporting clinical decisions, understanding not only how a model works, but also why an analysis exists and how its inputs were derived, becomes essential.\n\nExplainability should not begin at the model. It should begin with the scientific question.",
      },
      {
        name: "Mercedeh Ghadessi",
        affiliation: "Director, Principal Statistician, Bayer",
        photo: "mercedeh-ghadessi.jpg",
        role: "Session Organizer",
      },
    ],
    abstract: [
      "This session covers Explainable Artificial Intelligence (XAI), which refers to a set of methods and techniques in artificial intelligence (AI) that aim to make the decision-making processes of AI systems understandable to human users.",
      'The primary goal of XAI is to provide transparency, accountability, and interpretability in AI models, particularly those that are complex and often considered "black boxes," such as deep learning models.',
      'This session will be followed by a panel.',
    ],
  },
  {
    number: 8,
    title: "Recent Advancement on Bayesian Methodology in Clinical Trials for Drugs and Biologics",
    schedule: "Friday, October 23, 2026, 3:00 pm - 4:30 pm",
    speakers: [
      {
        name: "Yuhua Zhang",
        affiliation: "University of Florida",
        photo: "yuhua-zhang.jpg",
        role: "Speaker",
        talk: "Flexible evaluation of trial-level surrogates using a combination of randomized and observational subgroups",
        abstract: "Multiple works have now proposed the use of nonparametric Bayesian methods for the evaluation of trial-level surrogates with increasing complexity of the methods allowing for increasing modeling flexibility. All these methods are restricted to randomized clinical trial settings and thus require either a large number of trials with the same outcome and surrogate within similar contexts or a large trial with multiple natural subgroups. This reduces the usefulness of the methods, as such datasets are rare and difficult to access due to the expense of the trials involved. There are now numerous papers on augmenting clinical trial data with observational data to improve estimation. With this in mind, we propose the Enriched Dirichlet Process Common Atoms Model (EDP-CAM) for surrogate evaluation to allow for the use of a mixture of randomized trials and observational individual-level data, flexibly capturing the complex joint distribution of clinical outcomes, surrogate endpoints, and measured confounders. To rigorously validate surrogate predictions, we employ Leave-One-Out Cross-Validation (LOOCV), which is efficiently approximated via importance sampling from a single Markov chain Monte Carlo (MCMC) run to circumvent the computational burden of repeated model fitting. We demonstrate the validity and scalability of our methodology through a simulation-enhanced real data application.",
      },
      {
        name: "Dr. Chenguang Wang",
        affiliation: "Executive Director, Head of Quantitative Innovation and Statistical Strategy, Regeneron",
        photo: "chenguang-wang.jpg",
        role: "Speaker",
        talk: "Bridging Bayesian Trial Design from FDA Guidance to Practice",
      },
      {
        name: "Dr. Ming-Hui Chen",
        affiliation: "Board of Trustees Distinguished Professor of Statistics, University of Connecticut",
        photo: "ming-hui-chen.jpg",
        role: "Speaker",
        talk: "Bayesian Methods and Strategies for Borrowing Information in Pediatric Randomized Clinical Trials",
        abstract: "Pediatric clinical trials often have small sample sizes and face ethical and logistical constraints, which motivates the use of statistical methods that borrow information from external sources to support inference for the pediatric population. This comparative review summarizes the information borrowing methods that can be used in the design and analysis of pediatric trials, with an emphasis on the rationale for the different borrowing strategies and the practical considerations for implementation. Using an illustrative case study, we evaluate the performance of selected approaches, focusing on the trade-offs between power gain and potential Type I error inflation, as well as their robustness in the presence of prior-data conflicts. We also discuss the usefulness of these approaches, their acceptance by regulatory agencies, and relevant software implementations. This article aims to assist statisticians and trial designers in selecting appropriate borrowing methods that balance methodological rigor with the practical need to accelerate pediatric drug development. This is a joint work with Yanyan Zhu, Yuanye (Vickie) Zhang, Foteini Strimenopoulou, Satyajit Ghosh, and Jingjing Ye.",
      },
      {
        name: "Dr. Lei Nie",
        affiliation: "Division of Biometrics IV, Office of Biostatistics, OTS, CDER, FDA",
        photo: "lei-nie.jpg",
        role: "Discussant",
      },
      {
        name: "Dr. Wanxue Zou",
        affiliation: "Senior Manager, Biostatistics, Regeneron",
        photo: "wanxue-zou.png",
        role: "Session Chair",
      },
    ],
    abstract: [
      "Session Organizers: Dr. Ming-Hui Chen and Dr. Chenguang Wang.",
      "This is going to be a Bayesian session.",
      'This session mainly focuses on recent advancement or reactions in responding to a recent FDA landmark draft guidance, "Use of Bayesian Methodology in Clinical Trials of Drug and Biological Products," jointly released by the Center for Drug Evaluation and Research (CDER) and the Center for Biologics Evaluation and Research (CBER).',
    ],
  },
];

// A stable id per speaker slot, used to pair each "View abstract" button with
// its <dialog>. Session number + index keeps it unique across the page.
const abstractId = (sessionNumber, speakerIndex) =>
  `abstract-s${sessionNumber}-${speakerIndex}`;

// Opens/closes the abstract dialogs. Inlined as a plain <script> because the
// built pages are static HTML with no runtime React. Uses the native <dialog>
// element, so Esc-to-close and the backdrop come for free; clicking outside the
// dialog body closes it too.
const ABSTRACT_SCRIPT = `
document.addEventListener("click", function (e) {
  var open = e.target.closest("[data-abstract-for]");
  if (open) {
    var dlg = document.getElementById(open.getAttribute("data-abstract-for"));
    if (dlg && typeof dlg.showModal === "function") dlg.showModal();
    else if (dlg) dlg.setAttribute("open", "");
    return;
  }
  if (e.target.closest(".abstract-close")) {
    var d = e.target.closest("dialog");
    if (d) d.close();
    return;
  }
  // Click on the backdrop (the dialog element itself, outside its inner box).
  if (e.target.matches("dialog.abstract-dialog")) e.target.close();
});
`;

export function ScientificSessions() {
  const photoDir = "_assets/scientific-session-speakers/";
  return (
    <Page
      page={meta.page}
      title={meta.title}
      scripts={<script dangerouslySetInnerHTML={{ __html: ABSTRACT_SCRIPT }} />}
    >
      <article className="content-prose">
        <h1>Scientific Sessions</h1>

        {SESSIONS.map((s) => (
          <Card key={s.number} id={`session${s.number}`} className="session">
            <div className="session-body">
              <h3>{s.title ? `Session ${s.number}: ${s.title}` : `Session ${s.number}`}</h3>
              <p>
                <strong>Schedule:</strong> {s.schedule || "TBD"}
              </p>
              {s.abstract.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="session-speakers">
              {s.speakers.map((sp, i) => (
                <div key={i} className="session-speaker-row">
                  {sp.photo ? (
                    <img className="session-speaker-photo" src={photoDir + sp.photo} alt={sp.name} />
                  ) : (
                    <div className="session-speaker-photo speaker-photo-blank" aria-hidden="true" />
                  )}
                  <div className="session-speaker-info">
                    {sp.role && <p className="session-speaker-role">{sp.role}</p>}
                    <p className="session-speaker-name">{sp.name}</p>
                    {sp.affiliation && <p className="session-speaker-affiliation">{sp.affiliation}</p>}
                    {sp.talk && <p className="session-speaker-talk">{sp.talk}</p>}
                    {sp.abstract && (
                      <>
                        <button
                          type="button"
                          className="abstract-toggle"
                          data-abstract-for={abstractId(s.number, i)}
                        >
                          View abstract
                        </button>
                        <dialog className="abstract-dialog" id={abstractId(s.number, i)}>
                          <div className="abstract-dialog-inner">
                            <h4 className="abstract-dialog-speaker">{sp.name}</h4>
                            <p className="abstract-dialog-talk">{sp.talk}</p>
                            {sp.abstract.split("\n\n").map((para, j) => (
                              <p key={j}>{para}</p>
                            ))}
                            <button type="button" className="abstract-close">
                              Close
                            </button>
                          </div>
                        </dialog>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </article>
    </Page>
  );
}
