const operations = [
  {
    id: "reactor",
    name: "Reactor design",
    icon: "R",
    type: "REACTION ENGINEERING",
    description: "Establish the reaction, feed basis, and operating envelope before selecting a reactor configuration or sizing its volume.",
    groups: [
      {
        title: "Feed & flow basis",
        symbol: "→",
        items: [
          ["feed-flow", "Feed flow rate", "Normal, minimum, and maximum flow; mass or molar basis and design throughput.", true],
          ["feed-composition", "Feed composition", "All reactants, inerts, solvents, impurities, and trace components; identify the composition basis.", true],
          ["phase-state", "Feed phase and condition", "Phase, temperature, pressure, density, and whether the feed is saturated, subcooled, or superheated.", true],
          ["feed-variability", "Feed variability", "Expected variation in rate, composition, and quality during startup and normal operation.", false]
        ]
      },
      {
        title: "Reaction & product definition",
        symbol: "Rx",
        items: [
          ["reaction-network", "Reaction scheme and stoichiometry", "Balanced desired and side reactions, reaction order, reversibility, and known intermediates.", true],
          ["kinetics", "Kinetic data", "Rate expressions and validated parameters over the intended temperature, pressure, and composition range.", true],
          ["targets", "Conversion, yield, and selectivity targets", "Required conversion and product yield/selectivity, including acceptable by-product limits.", true],
          ["outflow", "Product / effluent specification", "Outlet composition, phase, temperature, pressure, flow, and downstream acceptance limits.", true]
        ]
      },
      {
        title: "Properties & operating conditions",
        symbol: "T,P",
        items: [
          ["thermo", "Thermodynamic and physical properties", "Heat capacity, density, viscosity, thermal conductivity, vapor pressure, and phase-equilibrium data.", true],
          ["equilibrium", "Equilibrium limits", "Equilibrium conversion or product distribution as a function of operating conditions.", true],
          ["heat-effects", "Heat of reaction and heat effects", "Reaction enthalpy, heat of mixing, phase-change loads, and heat-capacity changes.", true],
          ["operating-window", "Operating window", "Normal and allowable temperature / pressure ranges, including constraints from catalyst or materials.", true]
        ]
      },
      {
        title: "Equipment, control & safety",
        symbol: "◇",
        items: [
          ["reactor-type", "Candidate reactor and mode", "Batch, semi-batch, CSTR, PFR, packed bed, or other configuration; continuous or campaign operation.", true],
          ["catalyst", "Catalyst or biological system", "Activity, loading, particle size, lifetime, deactivation, regeneration, and handling requirements, if applicable.", false],
          ["heat-removal", "Heat management and utilities", "Heating/cooling medium, available utility conditions, heat-transfer limits, and temperature-control strategy.", true],
          ["pressure-drop", "Hydraulics and pressure-drop allowance", "Allowable pressure drop, flow regime, internals, fouling potential, and downstream pressure requirements.", false],
          ["materials", "Materials of construction", "Corrosion, erosion, compatibility, temperature/pressure rating, and materials constraints.", true],
          ["hazards", "Hazards, safeguards, and relief basis", "Reaction hazards, runaway / decomposition potential, relief scenarios, inerting, detection, and safeguarding basis.", true],
          ["codes", "Design codes and project constraints", "Applicable codes, jurisdiction, design life, plot-space limits, turndown, and maintainability requirements.", false]
        ]
      }
    ]
  },
  {
    id: "distillation", name: "Distillation column", icon: "D", type: "SEPARATION", description: "Define the mixture, separation target, and vapor–liquid behavior to establish the column's theoretical and hydraulic design basis.",
    groups: [
      { title: "Feed & separation target", symbol: "→", items: [
        ["feed", "Feed flow, composition, and condition", "Flow rate, full component composition, temperature, pressure, and thermal condition (q-value).", true],
        ["products", "Distillate and bottoms specifications", "Purity, recovery, component limits, product phase, and required product rates.", true],
        ["key-components", "Key components and separation", "Light/heavy keys, non-key components, and required split or separation factor.", true],
        ["throughput", "Capacity and turndown", "Normal, maximum, minimum, and future design throughput.", false]
      ] },
      { title: "Thermodynamics & operating basis", symbol: "T,P", items: [
        ["vle", "Vapor–liquid equilibrium data", "Validated K-values or activity-coefficient / equation-of-state model across the operating range.", true],
        ["properties", "Physical properties", "Density, viscosity, surface tension, heat capacity, latent heat, and thermal conductivity.", true],
        ["azeotrope", "Azeotropes and non-ideal behavior", "Azeotropes, immiscibility, association, and any need for extractive or azeotropic separation.", true],
        ["pressure", "Operating pressure and constraints", "Pressure selection basis, vacuum needs, temperature limits, and condenser/reboiler utility levels.", true]
      ] },
      { title: "Column design & operability", symbol: "◇", items: [
        ["reflux", "Reflux and energy basis", "Reflux ratio, boilup, condenser/reboiler duties, and available utility conditions.", true],
        ["internals", "Internals and hydraulic limits", "Tray or packing selection, capacity, flooding margin, pressure drop, foaming, and fouling tendency.", true],
        ["materials", "Materials and corrosion", "Corrosive/erosive components, materials compatibility, and design temperature/pressure.", true],
        ["control", "Control, startup, and safety", "Control strategy, relief/vacuum protection, startup/shutdown requirements, and hazardous inventory.", true]
      ] }
    ]
  },
  {
    id: "heat-exchanger", name: "Heat exchanger", icon: "HX", type: "HEAT TRANSFER", description: "Specify both process streams and their thermal/hydraulic limits before selecting exchanger type and surface area.",
    groups: [
      { title: "Process stream basis", symbol: "→", items: [
        ["hot-stream", "Hot-side flow and inlet/outlet targets", "Mass flow, composition, phase, inlet temperature, target outlet temperature, and pressure.", true],
        ["cold-stream", "Cold-side flow and inlet/outlet targets", "Mass flow, composition, phase, inlet temperature, target outlet temperature, and pressure.", true],
        ["properties", "Thermophysical properties", "Heat capacity, viscosity, density, thermal conductivity, latent heat, and phase behavior vs. temperature.", true],
        ["phase-change", "Phase change or reaction effects", "Condensation, boiling, flashing, crystallization, or reaction on either side.", true]
      ] },
      { title: "Thermal & hydraulic design", symbol: "T,P", items: [
        ["duty", "Heat duty and temperature approach", "Required duty, design temperature difference, pinch limits, and allowable terminal approach.", true],
        ["fouling", "Fouling and cleaning basis", "Fouling factors, deposit type, cleaning method, and run length between cleanings.", true],
        ["pressure-drop", "Allowable pressure drop", "Pressure-drop limits on both sides and available pump/compressor head.", true],
        ["operation", "Operating cases", "Normal, startup, turndown, maximum load, and off-design cases.", false]
      ] },
      { title: "Mechanical & utility basis", symbol: "◇", items: [
        ["utilities", "Utility conditions", "Cooling/heating utility type, supply/return temperatures, pressure, and availability.", true],
        ["type", "Exchanger configuration", "Shell-and-tube, plate, air-cooled, double-pipe, or other; flow arrangement and pass constraints.", false],
        ["materials", "Materials and design conditions", "Corrosion compatibility, design pressure/temperature, thermal expansion, and applicable code.", true],
        ["safety", "Safeguards and failure scenarios", "Cross-contamination consequences, tube rupture, thermal relief, isolation, and leak detection.", true]
      ] }
    ]
  },
  {
    id: "pump", name: "Pump selection", icon: "P", type: "FLUID HANDLING", description: "Characterize the liquid and complete system curve to define the required pump duty, materials, and operating range.",
    groups: [
      { title: "Liquid & suction conditions", symbol: "→", items: [
        ["fluid", "Fluid identity and properties", "Composition, density, viscosity, vapor pressure, solids, corrosivity, and temperature range.", true],
        ["flow", "Required flow range", "Normal, minimum continuous, maximum, startup, and any batch transfer rates.", true],
        ["suction", "Suction source and conditions", "Vessel pressure/level, suction line losses, static head, temperature, and minimum source level.", true],
        ["npsh", "NPSH available", "Calculate available NPSH at worst case and compare against pump requirements with margin.", true]
      ] },
      { title: "System & duty", symbol: "T,P", items: [
        ["head", "System head / pressure requirement", "Static elevation, destination pressure, friction losses, control valve losses, and equipment pressure drops.", true],
        ["curve", "System curve and operating cases", "System resistance vs. flow, parallel/series cases, and expected operating point.", true],
        ["discharge", "Discharge constraints", "Maximum allowable pressure, downstream operating range, and minimum flow requirements.", true],
        ["control", "Flow-control strategy", "Speed control, throttling, bypass, or on/off operation; required turndown.", false]
      ] },
      { title: "Selection & protection", symbol: "◇", items: [
        ["pump-type", "Pump type and materials", "Centrifugal or positive displacement selection, wetted materials, seals, and elastomers.", true],
        ["driver", "Driver and power basis", "Efficiency, motor rating, hazardous-area classification, supply, and service factor.", false],
        ["protection", "Protection and relief", "Deadhead protection, minimum-flow recycle, thermal relief, check/isolation valves, and containment.", true],
        ["installation", "Installation constraints", "Available footprint, alignment, vibration, maintenance access, and applicable standards.", false]
      ] }
    ]
  },
  {
    id: "absorption", name: "Gas absorption", icon: "A", type: "MASS TRANSFER", description: "Define the gas contaminant, solvent system, and removal target to establish the absorber and solvent-regeneration basis.",
    groups: [
      { title: "Gas feed & removal objective", symbol: "→", items: [
        ["gas-flow", "Gas flow and composition", "Normal/design flow, full composition, contaminant concentration, inerts, and particulate/aerosol content.", true],
        ["gas-conditions", "Gas temperature, pressure, and phase", "Inlet conditions, variability, dew point, and pressure available for the operation.", true],
        ["target", "Treated-gas specification", "Outlet contaminant limit, removal efficiency, emissions target, or recovery specification.", true],
        ["contaminants", "Co-absorbed or reactive species", "Species that consume solvent, react, precipitate, foam, or affect product quality.", false]
      ] },
      { title: "Solvent & equilibrium basis", symbol: "T,P", items: [
        ["solvent", "Solvent identity and availability", "Solvent composition, supply rate, purity, makeup, and operating concentration range.", true],
        ["equilibrium", "Gas–liquid equilibrium", "Solubility / equilibrium data over temperature, pressure, and solvent-loading range.", true],
        ["kinetics", "Mass-transfer or reaction kinetics", "Rate data, enhancement factors, and reaction kinetics if absorption is reactive.", true],
        ["properties", "Physical properties", "Density, viscosity, surface tension, heat capacity, diffusivity, and foaming tendency.", true]
      ] },
      { title: "Equipment, regeneration & safety", symbol: "◇", items: [
        ["packing", "Contactor and internals", "Packed or trayed absorber, capacity, pressure drop, wetting, fouling, and turndown.", true],
        ["solvent-loop", "Solvent regeneration and recycle", "Regeneration method, required lean loading, reboiler/stripper duties, purge, and waste streams.", true],
        ["heat", "Heat effects and temperature control", "Heat of absorption/reaction, temperature bulge, cooling needs, and utility conditions.", true],
        ["materials-safety", "Materials, emissions, and safeguards", "Corrosion/toxicity, solvent losses, degradation products, relief basis, and exposure controls.", true]
      ] }
    ]
  },
  {
    id: "filtration", name: "Filtration", icon: "F", type: "SOLID–LIQUID SEPARATION", description: "Characterize the slurry and required filtrate/cake quality before choosing a filter technology and sizing cycle capacity.",
    groups: [
      { title: "Slurry feed & separation target", symbol: "→", items: [
        ["slurry", "Slurry flow and composition", "Liquid flow, solids concentration, particle-size distribution, and batch or continuous basis.", true],
        ["particles", "Particle and cake properties", "Particle shape, compressibility, abrasiveness, permeability, and settling behavior.", true],
        ["filtrate", "Filtrate quality and recovery", "Suspended-solids limit, clarity, liquid recovery, and acceptable dissolved material.", true],
        ["cake", "Cake specification", "Target moisture, purity, wash requirement, discharge method, and downstream handling.", true]
      ] },
      { title: "Process & operating conditions", symbol: "T,P", items: [
        ["liquid", "Liquid properties", "Viscosity, density, temperature, corrosivity, volatility, and solvent compatibility.", true],
        ["driving-force", "Available pressure or vacuum", "Maximum feed pressure, vacuum capability, pressure limits, and filtration driving force.", true],
        ["cycle", "Cycle time and throughput", "Required capacity, operating hours, batch cycle, peak loading, and turndown.", true],
        ["wash", "Cake washing and drying", "Wash ratio, displacement efficiency, wash-fluid compatibility, and drying needs.", false]
      ] },
      { title: "Equipment & handling", symbol: "◇", items: [
        ["technology", "Filter technology and mode", "Pressure, vacuum, centrifuge, membrane, or other; batch/continuous and cloth/media selection.", false],
        ["fouling", "Blinding, scaling, and cleaning", "Media blinding tendency, scale formation, clean-in-place needs, and solids disposal.", true],
        ["materials", "Materials and containment", "Corrosion compatibility, dust/exposure controls, hazardous-area needs, and containment.", true],
        ["utilities", "Utilities and waste routes", "Wash fluid, compressed air, vacuum, power, filtrate disposal/recycle, and cake destination.", true]
      ] }
    ]
  },
  {
    id: "mixing", name: "Mixing vessel", icon: "M", type: "PROCESS EQUIPMENT", description: "Set the blending or process objective and characterize the phases, rheology, and vessel constraints before choosing an agitator.",
    groups: [
      { title: "Process objective & materials", symbol: "→", items: [
        ["objective", "Mixing objective", "Blending, suspension, dispersion, gas induction, heat transfer, or reaction; define a measurable endpoint.", true],
        ["materials", "Components and proportions", "Component flow or charge quantities, phase, composition, and addition sequence.", true],
        ["properties", "Rheology and physical properties", "Density, viscosity vs. shear/temperature, yield stress, surface tension, and solids loading.", true],
        ["solids-gas", "Solids or gas characteristics", "Particle size/density/settling behavior or gas rate, bubble requirements, and sparger constraints.", false]
      ] },
      { title: "Vessel & operating basis", symbol: "T,P", items: [
        ["volume", "Working volume and vessel geometry", "Normal/minimum/maximum fill, diameter, height, bottom shape, baffles, and internals.", true],
        ["conditions", "Temperature and pressure", "Operating/design range, heat generation or absorption, and vapor handling.", true],
        ["performance", "Mixing performance criterion", "Blend time, uniformity, suspension quality, dispersion size, or mass-transfer target.", true],
        ["batch", "Batch cycle or continuous throughput", "Charge, reaction, hold, discharge timing or continuous residence-time requirement.", false]
      ] },
      { title: "Agitation, utilities & safety", symbol: "◇", items: [
        ["agitator", "Agitator configuration", "Impeller type, diameter, number, location, speed range, and power input.", true],
        ["heat-transfer", "Heat-transfer and utility needs", "Jacket/coil area, duty, utility temperatures, and fouling constraints.", false],
        ["drive", "Drive and mechanical basis", "Power, torque, seals, shaft loads, vibration, and materials of construction.", true],
        ["hazards", "Safety and containment", "Flammability, dust, pressure/vacuum, guarding, venting, and hazardous-area classification.", true]
      ] }
    ]
  },
  {
    id: "piping", name: "Piping & line sizing", icon: "L", type: "FLUID HANDLING", description: "Establish the fluid, flow cases, pressure budget, and design conditions before selecting line size, schedule, and components.",
    groups: [
      { title: "Fluid & flow basis", symbol: "→", items: [
        ["fluid", "Fluid composition and phase", "Full composition, phase, vapor pressure, solids, corrosivity, and toxicity.", true],
        ["flow", "Flow range and design cases", "Normal/minimum/maximum flow, startup, shutdown, relief, and future cases.", true],
        ["properties", "Fluid properties", "Density, viscosity, compressibility, temperature, and properties over the operating range.", true],
        ["flow-regime", "Flow regime and special limits", "Erosion, slugging, flashing, noise, vibration, and minimum transport velocity constraints.", false]
      ] },
      { title: "Hydraulic & design conditions", symbol: "T,P", items: [
        ["pressure-budget", "Available pressure drop", "Source/destination pressures, elevation changes, equipment losses, and control-valve requirements.", true],
        ["velocity", "Velocity and pressure-drop criteria", "Acceptable velocity range, pressure gradient, and criteria appropriate to the service.", true],
        ["conditions", "Operating and design conditions", "Normal and design pressure/temperature, vacuum conditions, and transient cases.", true],
        ["route", "Line route and fittings", "Length, elevation profile, fittings, branches, instruments, and tie-in constraints.", true]
      ] },
      { title: "Materials, components & safeguards", symbol: "◇", items: [
        ["materials", "Materials and corrosion allowance", "Compatibility, corrosion/erosion allowance, insulation, lining, and design life.", true],
        ["components", "Pipe class and components", "Schedule, flanges, valves, gaskets, branch connections, and pressure class.", true],
        ["thermal", "Thermal expansion and support", "Expansion loops, anchors, supports, vibration, and external loading.", false],
        ["safety", "Isolation, relief, and code basis", "Block-in scenarios, thermal relief, hazardous release control, and applicable piping codes.", true]
      ] }
    ]
  }
];

const checklistState = {};
const balanceState = {};
const listElement = document.querySelector("#operation-list");
const groupsElement = document.querySelector("#checklist-groups");
let selectedOperation = operations[0];
let searchQuery = "";

function getSavedChecks(operationId) {
  try {
    const parsed = JSON.parse(localStorage.getItem(`processbasis:${operationId}`) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveChecks() {
  try {
    localStorage.setItem(`processbasis:${selectedOperation.id}`, JSON.stringify(checklistState[selectedOperation.id]));
  } catch {
    // The checklist remains usable when browser storage is unavailable.
  }
}

function renderNavigation() {
  document.querySelector("#operation-count").textContent = String(operations.length).padStart(2, "0");
  listElement.innerHTML = operations.map(operation => `
    <button class="operation-button" type="button" data-operation="${operation.id}" aria-current="${operation.id === selectedOperation.id ? "page" : "false"}">
      <span class="operation-icon" aria-hidden="true">${operation.icon}</span><span>${operation.name}</span>
    </button>`).join("");
}

function renderChecklist() {
  const state = checklistState[selectedOperation.id];
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleGroups = selectedOperation.groups.map(group => ({
    ...group,
    items: group.items.filter(([, title, description]) =>
      !normalizedQuery || `${group.title} ${title} ${description}`.toLowerCase().includes(normalizedQuery))
  })).filter(group => group.items.length > 0);
  const itemCount = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);
  document.querySelector("#page-title").textContent = selectedOperation.name;
  document.querySelector("#breadcrumb-operation").textContent = selectedOperation.name;
  document.querySelector("#page-description").textContent = selectedOperation.description;
  document.querySelector("#operation-type").textContent = selectedOperation.type;
  document.querySelector("#item-total").textContent = `${itemCount} ITEMS`;
  groupsElement.innerHTML = visibleGroups.length ? visibleGroups.map(group => `
    <article class="group-card">
      <div class="group-heading">
        <span class="group-symbol" aria-hidden="true">${group.symbol}</span>
        <h3>${group.title}</h3>
        <span class="group-count">${String(group.items.length).padStart(2, "0")} ITEMS</span>
      </div>
      <div class="checklist-items">
        ${group.items.map(([id, title, description, required]) => `
          <label class="checklist-item">
            <input class="check-input" type="checkbox" data-check="${id}" aria-label="Mark ${title} reviewed" ${state[id] ? "checked" : ""}>
            <span class="item-copy">
              <span class="item-title-line"><span class="item-title">${title}</span><span class="requirement-badge ${required ? "" : "recommended"}">${required ? "CORE INPUT" : "AS NEEDED"}</span></span>
              <span class="item-description">${description}</span>
            </span>
          </label>`).join("")}
      </div>
    </article>`).join("") : `<div class="empty-state">No prerequisites match “${escapeHtml(searchQuery.trim())}”. Try another term.</div>`;
  updateProgress();
}

function updateProgress() {
  const allItemIds = selectedOperation.groups.flatMap(group => group.items.map(([id]) => id));
  const checked = allItemIds.filter(id => checklistState[selectedOperation.id][id]).length;
  const total = allItemIds.length;
  const percentage = total ? Math.round(checked / total * 100) : 0;
  document.querySelector("#checked-count").textContent = checked;
  document.querySelector("#total-count").textContent = total;
  document.querySelector("#progress-percent").textContent = `${percentage}%`;
  document.querySelector("#progress-fill").style.width = `${percentage}%`;
  const progressbar = document.querySelector("#progress-bar");
  progressbar.setAttribute("aria-valuenow", percentage);
  document.querySelector(".progress-footer span:first-child").textContent = percentage === 100 ? "BASIS REVIEWED" : percentage > 0 ? "IN PROGRESS" : "NOT STARTED";
  document.querySelector("#progress-message").textContent = percentage === 100
    ? "All listed prerequisites have been reviewed for this operation."
    : percentage > 0
      ? "Keep reviewing inputs to complete the design basis."
      : "Review the prerequisites to establish a solid design basis.";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function newComponent() {
  return { name: "", molecularWeight: "", inletFlow: "", outletFlow: "", heatCapacity: "", formationEnthalpy: "" };
}

function getSavedBalance(operationId) {
  try {
    const saved = JSON.parse(localStorage.getItem(`processbasis:balance:${operationId}`) || "null");
    if (!saved || !Array.isArray(saved.components)) return { components: [newComponent()], inletTemperature: "25", outletTemperature: "25", referenceTemperature: "25", heatSupplied: "0" };
    return {
      components: saved.components.map(component => ({
        ...newComponent(),
        ...component
      })),
      inletTemperature: saved.inletTemperature ?? "25",
      outletTemperature: saved.outletTemperature ?? "25",
      referenceTemperature: saved.referenceTemperature ?? "25",
      heatSupplied: saved.heatSupplied ?? "0"
    };
  } catch {
    return { components: [newComponent()], inletTemperature: "25", outletTemperature: "25", referenceTemperature: "25", heatSupplied: "0" };
  }
}

function saveBalance() {
  try {
    localStorage.setItem(`processbasis:balance:${selectedOperation.id}`, JSON.stringify(balanceState[selectedOperation.id]));
  } catch {
    document.querySelector("#balance-message").textContent = "Browser storage is unavailable; entered values will not persist after closing this page.";
  }
}

function renderBalanceInputs() {
  const state = balanceState[selectedOperation.id];
  document.querySelector("#balance-operation").textContent = selectedOperation.name.toUpperCase();
  document.querySelector("#component-rows").innerHTML = state.components.map((component, index) => `
    <tr data-row-index="${index}">
      <td><input class="component-input component-name" data-field="name" type="text" maxlength="50" value="${escapeHtml(String(component.name))}" placeholder="e.g. A or ethanol" aria-label="Component ${index + 1} name"></td>
      <td><input class="component-input numeric-input" data-field="molecularWeight" type="number" min="0" step="any" value="${escapeHtml(String(component.molecularWeight))}" placeholder="—" aria-label="Component ${index + 1} molecular weight in kilograms per kilomole"></td>
      <td><input class="component-input numeric-input" data-field="inletFlow" type="number" min="0" step="any" value="${escapeHtml(String(component.inletFlow))}" placeholder="0" aria-label="Component ${index + 1} inlet flow in kilomoles per hour"></td>
      <td><input class="component-input numeric-input" data-field="outletFlow" type="number" min="0" step="any" value="${escapeHtml(String(component.outletFlow))}" placeholder="0" aria-label="Component ${index + 1} outlet flow in kilomoles per hour"></td>
      <td><input class="component-input numeric-input" data-field="heatCapacity" type="number" min="0" step="any" value="${escapeHtml(String(component.heatCapacity))}" placeholder="—" aria-label="Component ${index + 1} heat capacity in kilojoules per kilomole kelvin"></td>
      <td><input class="component-input numeric-input" data-field="formationEnthalpy" type="number" step="any" value="${escapeHtml(String(component.formationEnthalpy))}" placeholder="—" aria-label="Component ${index + 1} formation enthalpy in kilojoules per kilomole"></td>
      <td class="component-mass-change" data-mass-change="${index}">—</td>
      <td><button class="remove-component" type="button" data-remove-row="${index}" aria-label="Remove component ${index + 1}">×</button></td>
    </tr>`).join("");
  for (const field of ["inletTemperature", "outletTemperature", "referenceTemperature", "heatSupplied"]) {
    document.querySelector(`#${field.replace(/[A-Z]/g, character => `-${character.toLowerCase()}`)}`).value = state[field];
  }
  calculateBalance();
}

function numberOrNull(value) {
  if (value === "" || value === null || value === undefined) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function formatNumber(value) {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 3 }).format(value);
}

function calculateBalance() {
  const state = balanceState[selectedOperation.id];
  const components = state.components.map(component => ({
    ...component,
    molecularWeightValue: numberOrNull(component.molecularWeight),
    inletFlowValue: numberOrNull(component.inletFlow) ?? 0,
    outletFlowValue: numberOrNull(component.outletFlow) ?? 0,
    heatCapacityValue: numberOrNull(component.heatCapacity),
    formationEnthalpyValue: numberOrNull(component.formationEnthalpy)
  }));
  const active = components.filter(component => component.inletFlowValue > 0 || component.outletFlowValue > 0);
  const invalidFlow = components.some(component =>
    component.inletFlowValue < 0 || component.outletFlowValue < 0 ||
    (component.inletFlowValue > 0 || component.outletFlowValue > 0) && !component.name.trim());
  const missingMolecularWeight = active.some(component =>
    component.molecularWeightValue === null || component.molecularWeightValue <= 0);

  for (let index = 0; index < state.components.length; index++) {
    const component = components[index];
    const cell = document.querySelector(`[data-mass-change="${index}"]`);
    if (!cell) continue;
    const canCalculate = component.molecularWeightValue > 0 && !invalidFlow;
    cell.textContent = canCalculate ? formatNumber((component.outletFlowValue - component.inletFlowValue) * component.molecularWeightValue) : "—";
  }

  const validMass = active.length > 0 && !invalidFlow && !missingMolecularWeight;
  const totalMassIn = validMass ? active.reduce((sum, component) => sum + component.inletFlowValue * component.molecularWeightValue, 0) : null;
  const totalMassOut = validMass ? active.reduce((sum, component) => sum + component.outletFlowValue * component.molecularWeightValue, 0) : null;
  const massDifference = validMass ? totalMassOut - totalMassIn : null;
  document.querySelector("#mass-in-result").textContent = totalMassIn === null ? "—" : formatNumber(totalMassIn);
  document.querySelector("#mass-out-result").textContent = totalMassOut === null ? "—" : formatNumber(totalMassOut);
  document.querySelector("#mass-difference-result").textContent = massDifference === null ? "—" : formatNumber(massDifference);
  document.querySelector("#mass-percent-result").textContent = massDifference === null || totalMassIn === 0
    ? "" : `(${formatNumber(massDifference / totalMassIn * 100)}%)`;

  const inletTemperature = numberOrNull(state.inletTemperature);
  const outletTemperature = numberOrNull(state.outletTemperature);
  const referenceTemperature = numberOrNull(state.referenceTemperature);
  const heatSupplied = numberOrNull(state.heatSupplied);
  const missingThermo = active.some(component =>
    component.heatCapacityValue === null || component.heatCapacityValue < 0 || component.formationEnthalpyValue === null);
  const validEnergy = active.length > 0 && !invalidFlow && !missingThermo &&
    inletTemperature !== null && outletTemperature !== null && referenceTemperature !== null && heatSupplied !== null;

  let heatRequired = null;
  let energyResidual = null;
  if (validEnergy) {
    const inletEnthalpy = active.reduce((sum, component) => sum +
      component.inletFlowValue * (component.formationEnthalpyValue + component.heatCapacityValue * (inletTemperature - referenceTemperature)), 0);
    const outletEnthalpy = active.reduce((sum, component) => sum +
      component.outletFlowValue * (component.formationEnthalpyValue + component.heatCapacityValue * (outletTemperature - referenceTemperature)), 0);
    heatRequired = outletEnthalpy - inletEnthalpy;
    energyResidual = inletEnthalpy + heatSupplied - outletEnthalpy;
  }
  document.querySelector("#heat-required-result").textContent = heatRequired === null
    ? "—" : `${formatNumber(heatRequired)} kJ/h (${formatNumber(heatRequired / 3600)} kW)`;
  document.querySelector("#heat-entered-result").textContent = heatSupplied === null
    ? "—" : `${formatNumber(heatSupplied)} kJ/h`;
  document.querySelector("#energy-residual-result").textContent = energyResidual === null
    ? "—" : `${formatNumber(energyResidual)} kJ/h`;

  let status = "BALANCE CALCULATED";
  let message = "Review the component-wise mass changes and energy duty against the process basis.";
  if (active.length === 0) {
    status = "AWAITING INPUT";
    message = "Enter at least one non-zero inlet or outlet component flow.";
  } else if (invalidFlow) {
    status = "CHECK COMPONENT FLOWS";
    message = "Use non-negative flow rates and enter a component name for every non-zero flow.";
  } else if (missingMolecularWeight) {
    status = "ADD MOLECULAR WEIGHTS";
    message = "Enter a positive molecular weight for each component to calculate mass flow.";
  } else if (!validEnergy) {
    status = "ADD THERMO DATA";
    message = "Mass balance is available. Enter Cp and Hf° for each flowing component, plus all temperatures and heat supplied, to calculate energy.";
  } else if (Math.abs(massDifference) > Math.max(totalMassIn * 0.001, 1e-6)) {
    status = "MASS MISMATCH";
    message = `Overall mass difference exceeds 0.1% of inlet mass flow (${formatNumber(massDifference)} kg/h). Check omitted species, reaction products, units, or entered flow rates.`;
  }
  document.querySelector("#balance-status").textContent = status;
  document.querySelector("#balance-message").textContent = message;
}

function setActiveView(view) {
  const isBalance = view === "balance";
  document.querySelector("#checklist-view").hidden = isBalance;
  document.querySelector("#balance-view").hidden = !isBalance;
  document.querySelector("#checklist-tab").setAttribute("aria-selected", String(!isBalance));
  document.querySelector("#balance-tab").setAttribute("aria-selected", String(isBalance));
}

listElement.addEventListener("click", event => {
  const button = event.target.closest("[data-operation]");
  if (!button) return;
  selectedOperation = operations.find(operation => operation.id === button.dataset.operation);
  if (!checklistState[selectedOperation.id]) checklistState[selectedOperation.id] = getSavedChecks(selectedOperation.id);
  document.querySelector("#prerequisite-search").value = "";
  searchQuery = "";
  renderNavigation();
  renderChecklist();
  renderBalanceInputs();
});

document.querySelector("#prerequisite-search").addEventListener("input", event => {
  searchQuery = event.target.value;
  renderChecklist();
});

groupsElement.addEventListener("change", event => {
  if (!event.target.matches(".check-input")) return;
  checklistState[selectedOperation.id][event.target.dataset.check] = event.target.checked;
  saveChecks();
  updateProgress();
});

document.querySelector("#reset-checklist").addEventListener("click", () => {
  checklistState[selectedOperation.id] = {};
  saveChecks();
  renderChecklist();
});

document.querySelector("#checklist-tab").addEventListener("click", () => setActiveView("checklist"));
document.querySelector("#balance-tab").addEventListener("click", () => setActiveView("balance"));
document.querySelector("#add-component").addEventListener("click", () => {
  balanceState[selectedOperation.id].components.push(newComponent());
  saveBalance();
  renderBalanceInputs();
  document.querySelector("#component-rows tr:last-child input").focus();
});
document.querySelector("#component-rows").addEventListener("input", event => {
  const input = event.target.closest("[data-field]");
  if (!input) return;
  const row = input.closest("[data-row-index]");
  balanceState[selectedOperation.id].components[Number(row.dataset.rowIndex)][input.dataset.field] = input.value;
  saveBalance();
  calculateBalance();
});
document.querySelector("#component-rows").addEventListener("click", event => {
  const button = event.target.closest("[data-remove-row]");
  if (!button) return;
  const components = balanceState[selectedOperation.id].components;
  components.splice(Number(button.dataset.removeRow), 1);
  if (!components.length) components.push(newComponent());
  saveBalance();
  renderBalanceInputs();
});
document.querySelector(".condition-fields").addEventListener("input", event => {
  if (!event.target.id) return;
  const field = event.target.id.replace(/-([a-z])/g, (_, character) => character.toUpperCase());
  balanceState[selectedOperation.id][field] = event.target.value;
  saveBalance();
  calculateBalance();
});

for (const operation of operations) {
  checklistState[operation.id] = getSavedChecks(operation.id);
  balanceState[operation.id] = getSavedBalance(operation.id);
}
renderNavigation();
renderChecklist();
renderBalanceInputs();
