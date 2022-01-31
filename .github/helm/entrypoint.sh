#!/bin/sh -l
set -e

echo $KUBECONFIGBASE64 | base64 -d > /kubeconfig.yaml

export KUBECONFIG=/kubeconfig.yaml

ls -al

helm template test