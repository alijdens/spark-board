FROM python:3.10

RUN apt-get update
RUN apt-get install -y default-jre default-jdk

RUN echo 'JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/' > /etc/environment

RUN pip install pipenv
RUN pip install pyspark

CMD ["bash"]
