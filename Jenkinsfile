pipeline 
{
  agent any
  stages 
  {
    stage('list file') 
    {
      steps 
      {
        sh "ls -la"
      }
    }  
    stage('clean build') 
    {
      steps 
      {
        echo "build ready to compile"
        //sh "ng serve --host=0.0.0.0 --disable-host-check"
      } 
    }
  }
}