FROM dtzar/helm-kubectl:3.6.3

ENV KUBECONFIGBASE64=NOT_FOUND

COPY entrypoint.sh ./entrypoint.sh

RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]


