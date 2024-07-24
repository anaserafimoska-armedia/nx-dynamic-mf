# Module Federation Integration with NX Monorepo in Angular

This project demonstrates the integration of Module Federation in an NX monorepo setup using Angular. The setup includes
a Shell App and a Micro Frontend App, with the latter providing features that are dynamically loaded into the Shell App.

## Project Structure

apps/shell: The Shell App that serves as the container for micro frontend applications.

apps/mfe1: The Micro Frontend App that expose the Booking Module for consuming.

## Setup

### Prerequisites

Node.js (version >= 14.x)

Nx CLI (installed globally via npm install -g nx)

## Installation

Clone the repository:

``git clone <repository-url> ``

``cd <repository-folder>``

## Build application

- Build Micro Frontend App
  - nx build mfe1
- Build the Shell App
  - nx build shell

## Start application

- Run Micro Frontend App
  - nx serve mfe1
- Run the Shell App
  - nx serve shell

Use the Booking tab in the shell application to load the Booking module from the Micro frontend app.
![](../../Desktop/Screenshot_1.png)

