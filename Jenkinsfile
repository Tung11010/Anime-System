// pipeline {
//     agent any

//     environment {
//         DOCKER_IMAGE = 'react-build'
//         REGISTRY = 'localhost:5000/react-build'
//     }

//     stages {
//         stage('Checkout') {
//             steps {
//                 git branch: 'main', url: 'https://github.com/ninhvi/test-fe-aws.git'
//             }
//         }
//         stage('Build') {
//             steps {
//                 script {
//                     sh 'git fetch'
//                     sh 'sudo yarn install'
//                     sh 'sudo yarn build'
//                 }
//             }
//         }

//         stage('Build Docker') {
//             steps {
//                 script {
//                     sh 'sudo docker build -t ${DOCKER_IMAGE} .'
//                 }
//             }
//         }

//         stage('Push Docker') {
//             steps {
//                 script {
//                     sh 'sudo docker tag ${DOCKER_IMAGE} ${REGISTRY}'
//                     sh 'sudo docker push ${REGISTRY}'
//                 }
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 script {
//                     sh '''
//                 sudo docker-compose -f docker-compose.yml down --volumes --remove-orphans
//                 sudo docker volume prune -f
//                 sudo docker network prune -f

//                 sudo docker-compose -f docker-compose.yml up -d --build
//             '''
//                 }
//             }
//         }
//     }

//     post {
//         success {
//             echo 'Build and deploy successful!'
//         }
//         failure {
//             echo 'Build or deploy failed!'
//         }
//     }
// }
pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE_FRONTEND = 'localhost:5000/decode-fe-app:latest'
    }
    stages {
        stage('Build Docker Image') {
            steps {
                git branch: 'main', url: 'https://github.com/de-code-team/Frontend.git', credentialsId: 'token_decode'
                sh 'sudo docker build -t ${DOCKER_IMAGE_FRONTEND} -f Dockerfile .'
                sh 'sudo docker push ${DOCKER_IMAGE_FRONTEND}'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                        if [ $(sudo docker ps -q --filter "name=decode-fe-app") ]; then
                            sudo docker stop decode-fe-app
                            sudo docker rm decode-fe-app
                        fi
                        sudo docker-compose -f /home/deploy/docker-compose.yml pull frontend
                        sudo docker-compose -f /home/deploy/docker-compose.yml up -d frontend
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deploy successful!'
        }
        failure {
            echo 'Build or deploy failed!'
        }
    }
}

