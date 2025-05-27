# SimpleTarot

# Project Spec

## Project Overview

SimpleTarot is a tarot card reading app that is a rebuild of an [existing application](https://github.com/avacollins/tarot-ix) in order to expand content capabilities with a more robust backend.

##  Software System

### System Context

#### System Users

- **👩🏻 Customer** — Users ask the tarot cards a question on their minds and get a reading, save readings and take notes

- **Admin System** — Admins manage and gain insights into usage and performance of the Simple Tarot application

#### External Systems

- **Cloud Services** - Firebase, Graph DB, LLM, Lambda

#### System Context Diagram

![System Context Diagram](./assets/system_context.jpg)

### System Containers

- **Customer Mobile App** — React Native for iOS and Android

- **Admin Web App** - Next, Storybook UI, Docker

- **Core API** — Graph DB (undecided implementation), Bedrock LLM, Lambda functions


#### Container Diagram

##### Mobile App

![Mobile App Diagram](./assets/mobile_container.jpg)

##### Admin App

![Admin App Diagram](./assets/admin_container.jpg)

## Simple Tarot Mobile and Web Application

### UI Designs

- Will be leveraging existing application layouts for readings and profile

- History and notes screens need to be redsigned

- Storybook UI will leveraged as component documentation and CMS to create and update graph models in tandem with UI


### Functional Requirements

- Mobile first design, universal render for web

#### Authentication

- Users can create an account using email, phone number, or anonymously
- Users can authenticate using their created account credentials
- Authenticated users can update their profile information
- Authenticated users can reset their passwords if forgotten

#### Readings

- Users can get one new reading a day

- Users can save their readings and add notes

#### History

- Users can revisit past readings and notes


### Architectural Requirements

👉🏽 Check out the [requirements doc](./docs/requirements.md).