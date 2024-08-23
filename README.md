# Harry Potter Mischief Managed App

This is a React application built with TypeScript and Vite that uses the Harry Potter API to display a list of characters and spells. The app allows users to view all characters, students, and staff, navigate between views, favorite characters, and set their preferred house.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Docker](#docker)
- [Project Structure](#project-structure)
- [License](#license)

## Features

- Display a list of all characters, students, and staff
- Navigate between different views
- View details of a selected character
- Favorite characters
- Set preferred house (Gryffindor, Slytherin, Hufflepuff, Ravenclaw)

## Requirements

- Node.js (version 18 or higher)
- Yarn package manager

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/brefosco/hp-test.git
    cd hp-test
    ```

2. Install dependencies:
    ```sh
    yarn install
    ```

## Usage

1. Start the development server:
    ```sh
    yarn dev
    ```

2. Open your browser and navigate to `http://localhost:8080`.

## Scripts

- `dev`: Start the development server using Vite.
- `build`: Build the project using TypeScript and Vite.
- `lint`: Run ESLint to lint the codebase.
- `preview`: Preview the built project using Vite.

## Docker

To run the project using Docker:

1. Build the Docker image:
    ```sh
    docker build -t hp-test:v1.0 .
    ```

2. Run the Docker container:
    ```sh
    docker run -p 3000:3000 hp-test:v1.0
    ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

### 
This project can be run with `docker run -p 3000:3000 hp-test:v1.0`
