export const publications = [
  {
    title:
      "Multi-Objective Reinforcement Learning for Index Selection in Hybrid Transactional/Analytical Workloads",
    venue: "ICDE",
    year: "2027",
    status: "Under review",
    note: "Extends single-objective index tuning to jointly optimize latency, storage, and transition cost.",
  },
  {
    title:
      "Database Tuning via Distributional Reinforcement Learning for Hybrid Transactional/Analytical Processing Workloads",
    venue: "DaWaK",
    year: "2026",
    status: "Accepted",
    note: "We presented IQN-CVaR, a distributional reinforcement learning approach to physical database design tuning under noisy feedback. The method learns the full return distribution for each candidate configuration change and selects actions using Conditional Value at Risk on a confidence level that adapts to the current workload phase. The method models the full return distribution instead of its mean, so the tuner reasons about tail-risk on HTAP workloads.",
  },
  {
    title:
      "Adaptive Online Index Selection with a Noisy Dueling Deep Q-Network",
    venue: "WISE",
    year: "2025",
    status: "published",
    doi: "https://doi.org/10.1007/978-981-95-7394-3_22",
    note: "Our paper proposes a Dueling NoisyNet framework that leverages deep Q-networks for adaptive online index selection. Our approach integrates a dueling architecture to separately estimate state values and action advantages, enhancing learning stability, while NoisyNet-based exploration enables adaptive, state-dependent indexing decisions. Our state-dependent exploration via noisy linear layers replaces hand-tuned \u03b5-greedy schedules and reduces query runtimes by up to 30% compared to the next best method.",
  },
  {
    title:
      "A Bayesian Reinforcement Learning Framework for Online Index Tuning",
    venue: "DaWaK",
    year: "2025",
    status: "published",
    doi: "https://doi.org/10.1007/978-3-032-02215-8_21",
    note: "In this paper, we propose a Bayesian Reinforcement Learning framework that adaptively tunes index configurations based solely on the observed workload history, without requiring prior knowledge of the workload. Our framework leverages Q-learning with Thompson Sampling, a posterior distribution sampling method, to adaptively maintain and refine index configurations over time. Our usages of Gaussian posteriors over index utility plus Thompson sampling usages 21\u00D7 less transition cost than bandit and RL baselines.",
  },
  {
    title:
      "Scalable Optimization of Graph Pattern Queries Using Summary Graphs",
    venue: "WISE",
    year: "2024",
    status: "published",
    doi: "https://doi.org/10.1007/978-981-96-0567-5_29",
    note: "In this work, we focus on evaluating graph pattern queries involving direct (edge-to-edge matching) and reachability (edge-to-path matching) relationships under homomorphisms on data graphs.  We propose a compact way of materializing the views that losslessly summarizes all the homomorphic matches of the query without explicitly storing all the query results. We design an algorithm for optimizing pattern queries in the presence of materialized views. Our compact summary views prune the search space for graph pattern matching \u2014 2.7\u00D7 faster with 60% less storage.",
  },
  {
    title:
      "LiteSelect: A Lightweight Adaptive Learning Algorithm for Online Index Selection",
    venue: "DaWaK",
    year: "2024",
    status: "published",
    doi: "https://doi.org/10.1007/978-3-031-68323-7_1",
    note: "In this paper, we address the Online Index Selection problem. We designed a lightweight adaptive learning algorithm called LiteSelect which uses an exponential smoothing method to estimate index benefits for future queries with unknown distribution. It is a non-RL method with 20% faster workloads execution time and under 50MB of memory overhead.",
  },
  {
    title:
      "Performance of Successive Interference Cancellation Technique in IEEE 802.11 Based WLANs",
    venue: "ICIEV",
    year: "2013",
    status: "published",
    doi: "https://ieeexplore.ieee.org/document/6572685",
    note: "In this paper, we study the performance of successive interference cancellation (SIC) technique for random access based wireless local area networks (WLANs).",
  },
];
