/* Course catalogue. Topic maps follow the published specifications. */
window.GR = {courses: [], lessons: {}};
window.fr = (a, b) => `<span class="fr"><span>${a}</span><span>${b}</span></span>`;
{
const u = (y, name, list) => ({y, name, topics: list.split('|')});
const add = c => window.GR.courses.push(c);

/* ---------- Physics ---------- */
add({id: 'aqa-physics', subj: 'Physics', board: 'AQA', code: '7408', papers: 'Paper 1 covers sections 1 to 5 and periodic motion, Paper 2 covers sections 6.2 to 8, Paper 3 covers practical skills and the Astrophysics option.'});
add({id: 'ocr-physics', subj: 'Physics', board: 'OCR A', code: 'H556', papers: 'Modelling physics, Exploring physics and Unified physics papers.', units: [
  u(12, 'Module 1: Development of practical skills', 'Planning experiments|Measurements and uncertainties|Analysing data and graphs|Evaluating experiments|Practical endorsement techniques'),
  u(12, 'Module 2: Foundations of physics', 'Physical quantities and SI units|Estimating physical quantities|Measurements and uncertainties|Scalars and vectors|Resolving vectors'),
  u(12, 'Module 3: Forces and motion', 'Kinematics and graphs|SUVAT equations|Projectile motion|Dynamics and Newton’s laws|Drag and terminal velocity|Moments, couples and equilibrium|Density and pressure|Work, energy and power|Efficiency|Springs and Hooke’s law|Stress, strain and the Young modulus|Newton’s laws and momentum|Collisions and impulse'),
  u(12, 'Module 4: Electrons, waves and photons', 'Charge and current|Kirchhoff’s first law|Mean drift velocity|Potential difference and emf|Resistance and resistivity|I–V characteristics|Thermistors and LDRs|Power|Series and parallel circuits|Internal resistance|Potential dividers|Wave motion|Electromagnetic waves|Polarisation|Superposition and interference|Stationary waves|The photoelectric effect|Wave–particle duality'),
  u(13, 'Module 5: Newtonian world and astrophysics', 'Temperature and thermal equilibrium|Specific heat capacity and latent heat|Ideal gases and kinetic theory|Circular motion|Simple harmonic motion|Damping and resonance|Gravitational fields|Orbits and Kepler’s laws|Stars and their life cycles|Hertzsprung–Russell diagram|Electron energy levels and spectra|Wien’s law and Stefan’s law|Hubble’s law and the Big Bang'),
  u(13, 'Module 6: Particles and medical physics', 'Capacitors and capacitance|Charging and discharging capacitors|Electric fields|Coulomb’s law|Electric potential and energy|Magnetic fields|Motion of charged particles|Electromagnetic induction|Transformers|The nuclear atom|Fundamental particles and quarks|Radioactive decay|Nuclear fission and fusion|Binding energy|X-rays and CAT scans|Medical tracers and PET|Ultrasound and acoustic impedance')]});
add({id: 'edexcel-physics', subj: 'Physics', board: 'Edexcel', code: '9PH0', papers: 'Advanced Physics I, Advanced Physics II and General and Practical Principles in Physics.', units: [
  u(12, 'Topic 1: Working as a physicist', 'SI units and prefixes|Estimation|Uncertainties and practical skills'),
  u(12, 'Topic 2: Mechanics', 'Equations of motion|Motion graphs|Scalars and vectors|Resolving forces|Free-body diagrams|Newton’s laws|Momentum|Moments|Work, energy and power|Efficiency'),
  u(12, 'Topic 3: Electric circuits', 'Current and charge|Potential difference|Resistance and resistivity|Series and parallel circuits|Potential dividers|EMF and internal resistance|I–V graphs|Power in circuits'),
  u(12, 'Topic 4: Materials', 'Density|Upthrust|Viscosity and Stokes’ law|Hooke’s law|Stress, strain and the Young modulus|Stress–strain graphs|Elastic strain energy'),
  u(12, 'Topic 5: Waves and particle nature of light', 'Wave properties|Speed of sound and transverse waves|Superposition and stationary waves|Diffraction and interference|Refraction and total internal reflection|Lenses and power|Polarisation|Pulse-echo techniques|The photoelectric effect|Atomic energy levels and spectra|Wave–particle duality'),
  u(13, 'Topic 6: Further mechanics', 'Impulse and momentum|Collisions in two dimensions|Circular motion and centripetal force'),
  u(13, 'Topic 7: Electric and magnetic fields', 'Electric fields|Coulomb’s law|Capacitors|Capacitor discharge|Magnetic flux|Force on a conductor|Force on a moving charge|Faraday’s and Lenz’s laws|Alternating current'),
  u(13, 'Topic 8: Nuclear and particle physics', 'Alpha scattering and the nucleus|Particle accelerators|Particle detectors|The standard model|Conservation laws in particle reactions'),
  u(13, 'Topic 9: Thermodynamics', 'Specific heat capacity|Specific latent heat|Internal energy|Ideal gas laws|Kinetic theory|Black body radiation'),
  u(13, 'Topic 10: Space', 'Stellar luminosity and intensity|Hertzsprung–Russell diagram|Standard candles and distances|Doppler shift and Hubble’s law|The age and fate of the universe'),
  u(13, 'Topic 11: Nuclear radiation', 'Nuclear binding energy|Fission and fusion|Background radiation|Alpha, beta and gamma|Half-life and exponential decay'),
  u(13, 'Topic 12: Gravitational fields', 'Newton’s law of gravitation|Gravitational field strength|Gravitational potential|Orbits'),
  u(13, 'Topic 13: Oscillations', 'Simple harmonic motion|SHM graphs and energy|Damping|Forced oscillations and resonance')]});

/* ---------- Maths ---------- */
add({id: 'edexcel-maths', subj: 'Maths', board: 'Edexcel', code: '9MA0', papers: 'Papers 1 and 2 are Pure Mathematics, Paper 3 is Statistics and Mechanics.'});
const pure1 = 'Proof by deduction and exhaustion|Indices and surds|Quadratics and the discriminant|Simultaneous equations|Inequalities|Polynomials and the factor theorem|Graphs and transformations|Straight lines|Circles|Binomial expansion|Trigonometric ratios and graphs|Trigonometric identities and equations|Vectors in 2D|Differentiation from first principles|Tangents, normals and stationary points|Integration and areas|Exponentials and logarithms|Modelling with logs';
const pure2 = 'Proof by contradiction|Partial fractions|Functions, composite and inverse|Modulus graphs|Sequences and series|General binomial expansion|Radians, arc length and sector area|Small angle approximations|Reciprocal and inverse trig functions|Compound and double angle formulae|R sin(x + a) form|Parametric equations|Chain, product and quotient rules|Implicit differentiation|Connected rates of change|Numerical methods and Newton–Raphson|Integration by substitution and parts|Differential equations|Vectors in 3D';
add({id: 'aqa-maths', subj: 'Maths', board: 'AQA', code: '7357', papers: 'Paper 1 Pure, Paper 2 Pure and Mechanics, Paper 3 Pure and Statistics.', units: [
  u(12, 'Pure: Year 12', pure1),
  u(12, 'Statistics: Year 12', 'Sampling methods|Data presentation and interpretation|Measures of location and spread|Correlation and regression|Probability|Binomial distribution|Hypothesis testing with the binomial'),
  u(12, 'Mechanics: Year 12', 'Units and modelling|Kinematics with constant acceleration|Variable acceleration|Forces and Newton’s laws|Connected particles and pulleys'),
  u(13, 'Pure: Year 13', pure2),
  u(13, 'Statistics: Year 13', 'Conditional probability|Normal distribution|Normal hypothesis testing|Correlation coefficient tests'),
  u(13, 'Mechanics: Year 13', 'Moments|Projectiles|Friction and inclined planes|Forces in equilibrium|Vectors in kinematics')]});
add({id: 'ocr-maths', subj: 'Maths', board: 'OCR A', code: 'H240', papers: 'Pure Mathematics and Mechanics, Pure Mathematics and Statistics, and Pure Mathematics and Comprehension.', units: [
  u(12, 'Pure: Year 12', pure1),
  u(12, 'Statistics: Year 12', 'Sampling and the large data set|Data presentation|Probability|Binomial distribution|Statistical hypothesis testing'),
  u(12, 'Mechanics: Year 12', 'Kinematics|Forces and Newton’s laws|Variable acceleration'),
  u(13, 'Pure: Year 13', pure2),
  u(13, 'Statistics: Year 13', 'Conditional probability|Normal distribution|Hypothesis tests with the normal|Bivariate data and correlation tests'),
  u(13, 'Mechanics: Year 13', 'Projectiles|Moments|Friction|Further kinematics with vectors')]});

/* ---------- Further Maths ---------- */
add({id: 'edexcel-further-maths', subj: 'Further Maths', board: 'Edexcel', code: '9FM0', papers: 'Core Pure Mathematics 1 and 2, plus two option papers.', units: [
  u(12, 'Core Pure 1', 'Complex numbers|Argand diagrams|Series and summation|Roots of polynomials|Volumes of revolution|Matrices|Linear transformations|Proof by induction|Vectors: lines and planes'),
  u(13, 'Core Pure 2', 'Complex numbers: exponential form and de Moivre|Series and the method of differences|Methods in calculus and improper integrals|Further volumes of revolution|Polar coordinates|Hyperbolic functions|First-order differential equations|Second-order differential equations|Simple harmonic motion modelling'),
  u(13, 'Option: Further Pure 1', 'Vectors and the vector product|Conic sections|Inequalities|t-formulae|Taylor series|Numerical methods for differential equations|Reducible differential equations'),
  u(13, 'Option: Further Statistics 1', 'Discrete random variables|Poisson distribution|Geometric and negative binomial|Hypothesis testing|Central limit theorem|Chi-squared tests|Probability generating functions|Quality of tests'),
  u(13, 'Option: Further Mechanics 1', 'Momentum and impulse|Work, energy and power|Elastic strings and springs|Elastic collisions in one dimension|Elastic collisions in two dimensions'),
  u(13, 'Option: Decision Mathematics 1', 'Algorithms|Graphs and networks|Minimum spanning trees|Dijkstra’s algorithm|Route inspection|Travelling salesman problem|Critical path analysis|Linear programming')]});
add({id: 'aqa-further-maths', subj: 'Further Maths', board: 'AQA', code: '7367', papers: 'Papers 1 and 2 are compulsory content, Paper 3 covers two optional areas.', units: [
  u(12, 'Compulsory: Year 12', 'Complex numbers|Matrices|Further algebra and functions|Polar coordinates|Hyperbolic functions|Further calculus|Further vectors|Proof by induction'),
  u(13, 'Compulsory: Year 13', 'De Moivre’s theorem|Roots of unity|Matrices and invariant lines|Maclaurin series|Method of differences|Improper integrals|Differential equations|Coupled differential equations'),
  u(13, 'Options', 'Mechanics: dimensional analysis|Mechanics: momentum and collisions|Mechanics: circular motion|Mechanics: centres of mass|Statistics: discrete and continuous random variables|Statistics: Poisson and exponential|Statistics: chi-squared and t-tests|Discrete: graphs, networks and game theory')]});

/* ---------- Chemistry ---------- */
add({id: 'aqa-chemistry', subj: 'Chemistry', board: 'AQA', code: '7405', papers: 'Paper 1 physical and inorganic, Paper 2 physical and organic, Paper 3 any content and practical skills.', units: [
  u(12, 'Physical chemistry: Year 12', 'Atomic structure|Amount of substance|Bonding|Energetics|Kinetics|Chemical equilibria and Kc|Oxidation, reduction and redox equations'),
  u(12, 'Inorganic chemistry: Year 12', 'Periodicity|Group 2, the alkaline earth metals|Group 7, the halogens'),
  u(12, 'Organic chemistry: Year 12', 'Introduction to organic chemistry|Alkanes|Halogenoalkanes|Alkenes|Alcohols|Organic analysis'),
  u(13, 'Physical chemistry: Year 13', 'Thermodynamics and Born–Haber cycles|Rate equations|Equilibrium constant Kp|Electrode potentials and cells|Acids, bases and pH|Buffers'),
  u(13, 'Inorganic chemistry: Year 13', 'Properties of Period 3 elements and oxides|Transition metals|Reactions of ions in aqueous solution'),
  u(13, 'Organic chemistry: Year 13', 'Optical isomerism|Aldehydes and ketones|Carboxylic acids and derivatives|Aromatic chemistry|Amines|Polymers|Amino acids, proteins and DNA|Organic synthesis|NMR spectroscopy|Chromatography')]});
add({id: 'ocr-chemistry', subj: 'Chemistry', board: 'OCR A', code: 'H432', papers: 'Periodic table, elements and physical chemistry; Synthesis and analytical techniques; Unified chemistry.', units: [
  u(12, 'Module 1: Development of practical skills', 'Planning|Implementing|Analysis|Evaluation'),
  u(12, 'Module 2: Foundations in chemistry', 'Atoms and isotopes|Compounds, formulae and equations|Amount of substance|Acids|Redox|Electron structure|Bonding and structure'),
  u(12, 'Module 3: Periodic table and energy', 'Periodicity|Group 2|The halogens|Qualitative analysis|Enthalpy changes|Reaction rates|Chemical equilibrium'),
  u(12, 'Module 4: Core organic chemistry', 'Basic concepts|Alkanes|Alkenes|Alcohols|Haloalkanes|Organic synthesis|Infrared spectroscopy and mass spectrometry'),
  u(13, 'Module 5: Physical chemistry and transition elements', 'Rates and rate equations|Equilibrium and Kp|Acids, bases and buffers|Lattice enthalpy|Entropy and free energy|Redox and electrode potentials|Transition elements'),
  u(13, 'Module 6: Organic chemistry and analysis', 'Aromatic compounds|Carbonyl compounds|Carboxylic acids and esters|Amines|Amino acids and chirality|Polyesters and polyamides|Carbon–carbon bond formation|Chromatography|NMR spectroscopy|Combined techniques')]});
add({id: 'edexcel-chemistry', subj: 'Chemistry', board: 'Edexcel', code: '9CH0', papers: 'Advanced Inorganic and Physical, Advanced Organic and Physical, and General and Practical Principles.', units: [
  u(12, 'Year 12 topics', 'Topic 1: Atomic structure and the periodic table|Topic 2: Bonding and structure|Topic 3: Redox I|Topic 4: Inorganic chemistry and the periodic table|Topic 5: Formulae, equations and amounts|Topic 6: Organic chemistry I|Topic 7: Modern analytical techniques I|Topic 8: Energetics I|Topic 9: Kinetics I|Topic 10: Equilibrium I'),
  u(13, 'Year 13 topics', 'Topic 11: Equilibrium II|Topic 12: Acid–base equilibria|Topic 13: Energetics II|Topic 14: Redox II|Topic 15: Transition metals|Topic 16: Kinetics II|Topic 17: Organic chemistry II|Topic 18: Organic chemistry III|Topic 19: Modern analytical techniques II')]});

/* ---------- Biology ---------- */
add({id: 'aqa-biology', subj: 'Biology', board: 'AQA', code: '7402', papers: 'Paper 1 topics 1 to 4, Paper 2 topics 5 to 8, Paper 3 any content plus an essay.', units: [
  u(12, 'Topic 1: Biological molecules', 'Monomers and polymers|Carbohydrates|Lipids|Proteins|Enzymes|Nucleic acids|DNA replication|ATP|Water and inorganic ions'),
  u(12, 'Topic 2: Cells', 'Eukaryotic and prokaryotic cells|Microscopy|Cell division and mitosis|Cell membranes|Transport across membranes|The immune system and antibodies|HIV and vaccines'),
  u(12, 'Topic 3: Exchange with the environment', 'Surface area to volume ratio|Gas exchange|Digestion and absorption|Haemoglobin and oxygen transport|The circulatory system|Tissue fluid|Xylem and phloem'),
  u(12, 'Topic 4: Genetic information and variation', 'DNA, genes and chromosomes|Protein synthesis|Mutations and meiosis|Genetic diversity and natural selection|Species and taxonomy|Biodiversity'),
  u(13, 'Topic 5: Energy transfers', 'Photosynthesis|Respiration|Energy and ecosystems|Nutrient cycles'),
  u(13, 'Topic 6: Responding to change', 'Stimuli and responses|Nervous coordination and synapses|Skeletal muscle|Homeostasis|Control of blood glucose|Control of blood water potential'),
  u(13, 'Topic 7: Genetics, populations and ecosystems', 'Inheritance|Populations and Hardy–Weinberg|Evolution and speciation|Populations in ecosystems'),
  u(13, 'Topic 8: Control of gene expression', 'Gene mutations|Stem cells|Regulation of transcription and translation|Epigenetics|Gene expression and cancer|Genome projects|Recombinant DNA technology|Genetic fingerprinting')]});
add({id: 'ocr-biology', subj: 'Biology', board: 'OCR A', code: 'H420', papers: 'Biological processes, Biological diversity and Unified biology.', units: [
  u(12, 'Module 1: Development of practical skills', 'Planning|Implementing|Analysis|Evaluation'),
  u(12, 'Module 2: Foundations in biology', 'Cell structure|Biological molecules|Nucleotides and nucleic acids|Enzymes|Biological membranes|Cell division and diversity'),
  u(12, 'Module 3: Exchange and transport', 'Exchange surfaces|Transport in animals|Transport in plants'),
  u(12, 'Module 4: Biodiversity, evolution and disease', 'Communicable diseases and immunity|Biodiversity|Classification and evolution'),
  u(13, 'Module 5: Communication, homeostasis and energy', 'Communication and homeostasis|Excretion|Neuronal communication|Hormonal communication|Plant and animal responses|Photosynthesis|Respiration'),
  u(13, 'Module 6: Genetics, evolution and ecosystems', 'Cellular control|Patterns of inheritance|Manipulating genomes|Cloning and biotechnology|Ecosystems|Populations and sustainability')]});
add({id: 'edexcel-biology', subj: 'Biology', board: 'Edexcel', code: '9BN0', papers: 'Biology A (Salters-Nuffield). Advanced Biochemistry, Microbiology and Genetics; Advanced Physiology, Evolution and Ecology; General and Practical Principles.', units: [
  u(12, 'Year 12 topics', 'Topic 1: Lifestyle, health and risk|Topic 2: Genes and health|Topic 3: Voice of the genome|Topic 4: Biodiversity and natural resources'),
  u(13, 'Year 13 topics', 'Topic 5: On the wild side|Topic 6: Immunity, infection and forensics|Topic 7: Run for your life|Topic 8: Grey matter')]});

/* ---------- Computer Science ---------- */
add({id: 'aqa-computer-science', subj: 'Computer Science', board: 'AQA', code: '7517', papers: 'Paper 1 on-screen programming, Paper 2 written theory, plus the non-exam assessment project.', units: [
  u(12, 'Year 12', 'Programming fundamentals|Data types and structures|Procedural decomposition|Problem solving and theory of computation|Number systems and binary|Representing data and images|Computer systems and logic gates|Computer organisation and architecture'),
  u(13, 'Year 13', 'Object-oriented programming|Queues, stacks, graphs and trees|Hash tables and dictionaries|Searching and sorting algorithms|Graph traversal and Dijkstra|Regular expressions and finite state machines|Turing machines and Big-O|Networking and the internet|Databases and SQL|Big data|Functional programming|Consequences of computing|Non-exam assessment project')]});
add({id: 'ocr-computer-science', subj: 'Computer Science', board: 'OCR', code: 'H446', papers: 'Computer systems, Algorithms and programming, plus the programming project.', units: [
  u(12, 'Computer systems', 'Processor structure and the fetch-execute cycle|Types of processor|Input, output and storage|Systems software and operating systems|Software development methodologies|Types of programming language|Compression and encryption|Databases|Networks|Web technologies|Data types and binary arithmetic|Boolean algebra'),
  u(13, 'Algorithms and programming', 'Legal, moral and ethical issues|Thinking abstractly and ahead|Thinking procedurally and logically|Programming techniques|Computational methods|Data structures|Standard algorithms and complexity|Programming project')]});
}
