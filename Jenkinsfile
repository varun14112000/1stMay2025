pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('dockerhub-credentials')  // This should match the ID in Jenkins
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
                    // This must match the image name you want to push
                    docker.build("discoverdevops/micro_service")
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_CREDENTIALS) {
                        def app = docker.build("discoverdevops/myprodapp")
                        app.push('latest')
                    }
                }
            }
        }
    }
}
