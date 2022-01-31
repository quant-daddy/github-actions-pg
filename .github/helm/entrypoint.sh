#!/bin/sh -l
set -e

echo `pwd`
echo $KUBECONFIGBASE64
echo $KUBECONFIGBASE64 | base64 -d > kubeconfig.yaml
cat kubeconfig.yaml

helm version
kubectl version