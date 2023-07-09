pipeline {

  agent any

  tools {nodejs "Node.js"}

  stages {
    stage("Clean Up") {
      // echo "************** Running Clean Up **************"
      steps {
        deleteDir()
      }
    }
    // stage("Clone Repo") {
    //   steps {
    //     echo "************** Cloning Repo **************"
    //     sh "git clone https://github.com/alaneicker1975/alaneicker.com.git"
    //   }
    // }
    stage("Install Dependencies"){
      steps {
        // echo "************** Installing Dependencies **************"
        dir("alaneicker.com") {
          sh "rm -rf package-lock.json"
          sh "npm run install"
        }
      }
    }
    stage("Test"){
      steps {
        // echo "************** Running Tests **************"
        dir("alaneicker.com") {
          sh "npm test"
        }
      }
    }
    stage("Build") {
      steps {
        // echo "************** Running Build **************"
        dir("alaneicker.com") {
          sh "npm build"
        }
      }
    }
    stage("Deploy"){
      steps {
        // echo "************** Deploying **************"
        dir("alaneicker.com") {
          sh "npm gh-pages"
        }
      }
    }
  }
}