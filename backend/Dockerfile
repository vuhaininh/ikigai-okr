# Use an official Python runtime as a parent image
FROM python:3.6

#Docker won’t buffer the output from your application; instead, you will get to see your output in your console the way you’re used to.
ENV PYTHONUNBUFFERED 1 

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app/backend

# Install Python dependencies
COPY requirements.txt /app/backend
RUN pip3 install --upgrade pip -r requirements.txt

# Add the rest of the code
COPY . /app/backend

# Make port 8000 available for the app
EXPOSE 8000

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD python3 manage.py runserver 0.0.0.0:8000


#docker build -t backend:latest backend
#docker run -v $PWD/backend:/app/backend backend:latest django-admin startproject hello_world .
#docker run -v $PWD/backend:/app/backend -p 8000:8000 backend:latest