FROM gitpod/workspace-full:latest

USER gitpod
RUN npm install -g ionic @angular/cli firebase-tools

USER root
