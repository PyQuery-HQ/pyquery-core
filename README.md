<div align="center">

# ⚡ PyQuery Core: The Engine ⚙️

### _Pure Logic. Zero Fluff. The Backend of the Data OS._

<p>
  <a href="#"><img src="https://img.shields.io/badge/Execution-Lazy_Execution_Enabled-6A0DAD?style=for-the-badge" alt="Execution"></a>
  <a href="#"><img src="https://img.shields.io/badge/Speed-Rust_Powered_🦀-black?style=for-the-badge" alt="Speed"></a>
  <a href="#"><img src="https://img.shields.io/badge/Type_System-Strict_Pydantic-2E8B57?style=for-the-badge" alt="Privacy"></a>
  <a href="#"><img src="https://img.shields.io/badge/Role-Backend_Library-blue?style=for-the-badge" alt="Stack"></a>
</p>

<p>
  <a href="https://pypi.org/project/pyquery-core/"><img src="https://img.shields.io/pypi/v/pyquery-core.svg?color=4CAF50&logo=python&logoColor=white" alt="PyPI Version"></a>
  <a href="https://pypi.org/project/pyquery-core/"><img src="https://img.shields.io/pypi/pyversions/pyquery-core.svg?color=blue" alt="Python Versions"></a>
  <a href="LICENSE"><img src="https://img.shields.io/github/license/tks18/pyquery-core.svg?color=orange" alt="License"></a>
</p>

![Core Engine](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Z5a3Z5a3Z5a3Z5a3Z5a3Z5a3Z5/Queb1i2y2.gif)

## 🧠 The Brain Behind the Operation

**PyQuery Core** is the headless, high-performance ETL and Analytics engine that powers the PyQuery ecosystem. 

Previously hidden inside a generic monorepo, it has now been extracted into its own pure-python library. It handles the heavy lifting: **File I/O, Data Transformation, Statistical Analytics, and Machine Learning**.

It has **no UI**. It has **no CLI**. It is just raw, unadulterated **Polars** power wrapped in a strict, type-safe architecture.

</div>

---

## ⚡ Key Features

- **🚀 Lazy-First Architecture**: Built on Polars LazyFrames. Nothing executes until you say so.
- **🛡️ Strict Type Safety**: Every transform, every parameter, and every I/O operation is validated with **Pydantic** models. No more stringly-typed chaos.
- **🔌 Universal I/O**: 
  - Readers: CSV, Parquet, Excel, JSON, IPC.
  - Healers: Auto-detects encoding issues and "heals" broken CSVs on the fly.
- **🧪 Analytics Module**:
  - Built-in `scikit-learn` integration for Clustering and Regression.
  - Automatic "What-If" simulation engines.
- **🔧 Transform Registry**: A modular plugin system for registering data transformation steps.

---

## 📦 Installation

```bash
pip install pyquery-core
```

---

## 💻 Usage (The SDK)

This is a library for builders. Use it to construct your own data pipelines.

### 1. The Engine
The `PyQueryEngine` is the orchestrator.

```python
from pyquery_core.core import PyQueryEngine
from pyquery_core.io.files import FileLoader

# Initialize
engine = PyQueryEngine()

# Load Data (Lazy)
df = FileLoader.read_csv("massive_data.csv")

# Register a Pipeline
pipeline = [
    {"type": "filter", "params": {"column": "revenue", "operator": ">", "value": 1000}},
    {"type": "group_by", "params": {"by": "region", "agg": {"revenue": "sum"}}}
]

# Execute
result = engine.run(df, pipeline)
print(result.collect())
```

### 2. Analytics & ML
Run complex statistical analysis without the boilerplate.

```python
from pyquery_core.analytics.ml import ClusterEngine

# Auto-Clustering
model = ClusterEngine(data=df, n_clusters=3)
segments = model.fit_predict()
print(segments)
```

---

## 📂 Architecture

The library is structured for modularity:

| Module | Description |
| :--- | :--- |
| `pyquery_core.io` | **Input/Output.** Smart loaders for Excel, CSV, Parquet, and SQL. |
| `pyquery_core.transforms` | **Logic.** Atomic data manipulation steps (Filter, Sort, Mutate). |
| `pyquery_core.analytics` | **Intelligence.** Statistical tests, ML models, and forecasting. |
| `pyquery_core.recipes` | **Orchestration.** JSON-serializable pipeline definitions. |
| `pyquery_core.jobs` | **Async Workers.** Background task management for long-running ops. |

---

## 🤝 Contributing

This is the **Core**. Code quality here is paramount.

1.  **Fork it.**
2.  **Branch it** (`git checkout -b feature/fancy-algo`).
3.  **Test it.** (If it breaks the engine, we break your PR).
4.  **Push it.**

---

## 📜 License

**GPL-3.0**. Open source forever. 💖

---

<div align="center">

_Made with ☕, 🦀 (Rust), and 💖 by [Sudharshan TK](https://github.com/tks18)_

</div>
