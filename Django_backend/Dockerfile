# Base Image
FROM python:3.9-slim-bookworm

# Send all output from Docker to Local Terminal
ENV PYTHONUNBUFFERED=1

# Create Directory of file
WORKDIR /url_shortner

# Copy requirements.txt and install it
COPY ./requirements.txt /url_shortner/
RUN pip install -r requirements.txt

# Copy over the scripts
COPY . .

# Start server
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]