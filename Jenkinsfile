pipeline {

  agent any

  tools {nodejs "Node.js 18.15.0"}

  stages {
    stage("Clean Up") {
      steps {
        deleteDir()
      }
    }
    stage("Clone") {
      steps {
        sh "git clone https://github.com/alaneicker1975/alaneicker.com.git"
      }
    }
    stage("Install Dependencies"){
      steps {
        dir("alaneicker.com") {
          sh "npm install --legacy-peer-deps"
        }
      }
    }
    // stage("Test"){
    //   steps {
    //     dir("alaneicker.com") {
    //       sh "npm test"
    //     }
    //   }
    // }
    stage("Build") {
      steps {
        dir("alaneicker.com") {
          sh "npm run build"
        }
      }
    }
    stage("Deploy"){
      steps {
        dir("alaneicker.com") {
          sh "npm run gh-pages"
        }
      }
    }
  }
}