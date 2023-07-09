pipeline {

  agent any

  tools {nodejs "Node.js 20.4.0"}

  stages {
    stage("Clean Up") {
      steps {
        deleteDir()
      }
    }
    stage("Install Dependencies"){
      steps {
        dir("alaneicker.com") {
          sh "ls -l"
          // sh "npm install"
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
    // stage("Build") {
    //   steps {
    //     dir("alaneicker.com") {
    //       sh "npm build"
    //     }
    //   }
    // }
    // stage("Deploy"){
    //   steps {
    //     dir("alaneicker.com") {
    //       sh "npm gh-pages"
    //     }
    //   }
    // }
  }
}