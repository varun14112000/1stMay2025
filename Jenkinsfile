pipeline {
    agent {label 'slave'}

    environment {
        // Still keeping this in case we need it later, but not using in push
        DOCKER_HUB_CREDENTIALS = credentials('dockerhub-credentials')
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/discover-devops/1stMay2025.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    app = docker.build("discoverdevops/micro_service")
                }
            }
        }

        stage('Push Docker Image to Docker Hub (without auth)') {
            steps {
                script {
                    // Just push the image directly (assuming docker login already done)
                    app.push('latest')
                }
            }
        }
    }
}
