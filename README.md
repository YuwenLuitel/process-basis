# Process Basis

Process Basis is a lightweight, browser-based chemical engineering reference for process-design prerequisites and preliminary material/energy balance calculations.

## Features

- Prerequisite checklists for reactors, distillation columns, heat exchangers, pumps, gas absorption, filtration, mixing vessels, and piping.
- Searchable checklist items with per-operation progress saved in browser storage.
- Component-based steady-state mass balance using inlet/outlet molar flow and molecular weight.
- Preliminary energy balance using heat capacities, formation enthalpies, stream temperatures, and entered heat duty.
- Responsive layout; no package installation or build step required.

## Run locally

Open `index.html` in a browser, or serve the folder over HTTP:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Balance calculator inputs

Enter one row per chemical species. Use consistent flow units (the default labels use kmol/h), and supply a molecular weight in kg/kmol. Enter actual outlet component flows after reaction or separation; include all products, reactants, inerts, and other relevant species.

For the energy calculation, enter each flowing component's constant heat capacity (kJ/kmol·K) and standard formation enthalpy (kJ/kmol), plus inlet, outlet, and reference temperatures (°C). Enter heat supplied as positive when added to the process and negative when removed. The calculator reports the implied heat duty, the entered-duty energy residual, and overall mass closure.

The calculation is a screening aid. It assumes steady state, common inlet/outlet temperatures for all components, and no shaft work or kinetic/potential energy changes. Heat capacities are treated as constant. It does not model phase changes, pressure effects, detailed thermodynamics, reaction kinetics, equipment sizing, or process safety. Verify assumptions, units, data, and results with a qualified engineer before design or operation.
