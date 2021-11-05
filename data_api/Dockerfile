FROM python:3.8-slim
RUN mkdir /data_api
WORKDIR /data_api
COPY requirements.txt /
RUN pip3 install -r /requirements.txt
ADD . /data_api

RUN chmod 774 gunicorn.sh
ENTRYPOINT ["./gunicorn.sh"]

