pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('dockerhub-credentials')
    }

    stages {

        stage('Checkout Code') {
            steps {
                // Check out the code from GitHub main branch
                git branch: 'main', url: 'https://github.com/discover-devops/1stMay2025.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image with the same name you'll push later
                    docker.build("discoverdevops/micro_service")
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_CREDENTIALS) {
                        // Push the same image you built earlier
                        def app = docker.build("discoverdevops/micro_service")
                        app.push('latest')
                    }
                }
            }
        }
    }
}
