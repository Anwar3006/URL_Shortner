# URL Shortener Project

Welcome to the URL Shortener project! This project provides a simple way to shorten long URLs into concise and manageable links. It consists of two main components: the frontend and the backend.

## Project Structure

- [Frontend](./Frontend/): This folder contains the frontend application for the URL shortener. The frontend is responsible for user interface and interaction. It allows users to input long URLs and receive shortened links.

- [Django_backend](./Django_backend/): This folder contains the backend application for the URL shortener. The backend handles the logic of generating and resolving shortened URLs. It communicates with the database and serves as the API for the frontend. It is written in Python using the [Django_rest_framework](https://pypi.org/project/djangorestframework/)

## Getting Started 1

To run the URL Shortener project locally, follow these steps:

1. **Frontend Setup**:

   - Navigate to the [Frontend](./Frontend/) directory.
   - Install the required dependencies using `npm install`.
   - Start the frontend application with `npm start`.

2. **Python Backend Setup**:

   - Navigate to the [Django_backend](./Django_backend/) directory.
   - Install the required dependencies using `pip install -r requirements.text`.
   - Configure the database connection in a [urlshortner/settings.py](./Django_backend/urlshortner/settings.py) file (if needed).
   - Start the backend server with `python manage.py runserver`.

3. **Accessing the Application**:
   - Once both the frontend and backend are running, you can access the URL shortener application in your web browser.
   - The frontend typically runs on `http://localhost:3000`.
   - The backend API may run on a different port (e.g., `http://localhost:5000`).

## Getting Started 2

You can either use the above method to setup or use the Dockerfile in each folder to build an image and spin up containers as needed. Ofcourse you need to have Docker installed and the Daemon running.

- Navigate to the [Frontend](./Frontend/) directory.
- Navigate to the [Django_backend](./Django_backend/) directory.
- While inside each directory, run this: `docker build -t <any_name_for_image>`
- After it builds, run `docker run -p -d 8000:8000 <name_you_used_for_backend_image>` inside the Django_backend directory
- After it builds, run `docker run -p -d 3000:80 <name_you_used_for_frontend_image>` inside the Frontend directory
- The `-d` flag runs the docker containers in detach mode, which means you'll have access to your terminal/cmd/powershell to run the commands

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Me, obviously
- freeCodeCamp, for the Tutorials
- You, for seeing this
