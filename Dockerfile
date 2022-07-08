FROM python:3.10

RUN apt-get update
RUN apt-get install -y default-jre default-jdk

RUN echo 'JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/' > /etc/environment

WORKDIR /app

RUN pip install pipenv

COPY Pipfile /app/Pipfile
COPY . /app/

RUN pipenv lock
RUN pipenv requirements > requirements.txt
RUN pip install -r requirements.txt

CMD ["bash"]
