# React Quiz App

An interactive, responsive, and state-driven web application that allows users to test their knowledge through a structured quiz interface. The application features a smooth, single-page workflow that handles layout transitions from an initial landing state to live question tracking and terminal performance results.

## Live


## Features

* **Dynamic Multi-Screen Workflow:** Seamlessly alternates viewports between the entry dashboard, the core quiz engine, and the final results breakdown without external routing overhead.
* **Selection Lock-in Mechanism:** Safeguards data integrity by instantly freezing user selection inputs once an option is chosen, preventing duplicate click processing or accidental scoring anomalies.
* **Real-time Progress Indicator:** Syncs an interactive tracking component with the internal quiz state, displaying live progress parameters relative to the overall volume of content.
* **Session Memory Lifecycle Control:** Incorporates a total session garbage-cleanup routine that re-initializes all scoring metrics, array pointers, and user selections instantly upon requesting a restart.

## Architecture & Component Hierarchy

The application utilizes a clean, unidirectional data flow originating from a centralized state hub, distributing structural handlers down to decoupled, semantic interface layers.

* **Application Core Hub (`App`):** Functions as the primary structural coordinator. It tracks the currently visible layout, calculates accumulating correctness scores, manages index arrays, and orchestrates interface transitions.
* **Onboarding Interface (`StartScreen`):** Manages the initial welcome panel, reads available content volume metrics, and initiates the session lifecycle tracker.
* **Progress Engine (`ProgressBar`):** A presentation indicator mapping layout progress parameters relative to maximum question thresholds.
* **Interactive Interaction Container (`QuestionCard`):** Renders targeted questions along with multiple-choice variables. It intercepts selection inputs, controls button validation states, and emits step events to progress forward.
* **Performance Analysis Dashboard (`ResultScreen`):** Aggregates total performance percentages, displays the localized final score breakdown, and links back to the re-initialization hook.

