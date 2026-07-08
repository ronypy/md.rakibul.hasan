export const experience = [
  {
    type: 'research',
    title: 'PhD Researcher \u2014 Reinforcement Learning & Systems',
    org: 'NJIT, Newark, NJ',
    period: 'Sep 2021 \u2014 Present',
    roles: ['applied-scientist', 'academic', 'mle'],
    bullets: [
      'Built a Dueling NoisyNet-DQN tuner for adaptive index selection \u2014 30% query time reduction over learning-based baselines on dynamic workloads.',
      'Designed a Bayesian Q-learning framework with Thompson sampling over Gaussian utility posteriors \u2014 21\u00D7 less index-transition cost than bandit and RL advisors.',
      'Extended the line of work with distributional RL for HTAP workloads and a summary-graph materialized-view framework \u2014 2.7\u00D7 faster graph-pattern query evaluation, 60% less storage.',
    ],
  },
  {
    type: 'teaching',
    title: 'Instructor of Record & Teaching Assistant',
    org: 'NJIT, Newark, NJ',
    period: 'Sep 2021 \u2014 Present',
    roles: ['academic'],
    bullets: [
      'Instructor of record for CS 280 (Programming Language Concepts, C++) across three semesters \u2014 designed the full curriculum and guided 70 students through a capstone compiler project.',
      'TA for CS 631 (Database Systems Design) and CS 610 (Data Structures & Algorithms) \u2014 60+ students per section, weekly office hours and an active online forum.',
      'Automated grading for programming assignments with Python scripts, cutting grading time 40%.',
    ],
  },
  {
    type: 'industry',
    title: 'Manager, Market Strategy & Planning (ML & DS)',
    org: 'Robi Axiata \u2014 53M+ subscribers, Bangladesh',
    period: 'Oct 2020 \u2014 Aug 2021',
    roles: ['data-scientist', 'mle'],
    bullets: [
      'Led a team of 4 building segmentation models across geographic, demographic, revenue, and cost dimensions \u2014 16% lift in regional campaign efficiency.',
      'Combined CDP and network-traffic signals for churn analysis, delivering an 11% regional revenue boost.',
      'Built time-series revenue forecasts at 95% accuracy and a personalized ML campaign for the Binge OTT platform \u2014 21% lift in new-user acquisition.',
    ],
  },
  {
    type: 'industry',
    title: 'Specialist, ML \u2014 Network Planning',
    org: 'Robi Axiata Limited, Bangladesh',
    period: 'Sep 2016 \u2014 Sep 2020',
    roles: ['data-scientist', 'mle'],
    bullets: [
      'Forecast pandemic-driven user mobility with Markov/HMM models, preventing up to 12% daily traffic loss during COVID-19.',
      'Trained clustering models to prioritize 7,000 high-potential LTE sites across 64 districts for 4.5G rollout.',
      'Directed 23 engineers integrating 4,500 sites during the Robi\u2013Airtel merger \u2014 the largest telecom merger in Bangladesh \u2014 cutting customer complaints 29% within three days.',
      'Modeled RNC/BSC processor load with a neural network to drive site rehoming, cutting controller utilization 15%; led virtualization of 11 MSCs and 6 SGSNs.',
    ],
  },
  {
    type: 'research',
    title: 'Research Intern, ML & Data Science',
    org: 'Fujitsu Research Institute, Tokyo, Japan',
    period: 'Sep 2019 \u2014 Dec 2019',
    roles: ['mle', 'applied-scientist'],
    bullets: [
      'Modeled time-series vehicle-sensor data with LSTM, reducing false-positive braking events in simulation.',
      'Forecast automotive monthly demand at 95% confidence using LSTM, SARIMA, and Prophet on sales and macroeconomic data.',
      'Mined POS data with Gradient Boosting, Eclat, and Apriori \u2014 2.1% lift in daily convenience-store sales.',
    ],
  },
  {
    type: 'industry',
    title: 'RF Optimization Engineer',
    org: 'Huawei Technologies, Bangladesh',
    period: 'Jan 2014 \u2014 Aug 2016',
    roles: ['data-scientist'],
    bullets: [
      'Built MapReduce pipelines and a Markov user-mobility model on Hadoop for real-time KPI/KQI analytics across 3,800+ network nodes.',
      'Trained scalable ML classifiers to automate promotional targeting across millions of subscribers, replacing manual campaign selection.',
    ],
  },
]

export const typeLabels = {
  research: 'Research',
  teaching: 'Teaching',
  industry: 'Industry',
}
