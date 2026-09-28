pipeline {
    agent any
    tools {
        // El nombre "node18" debe coincidir con el que configuraste en el Paso 2
        nodejs 'NodeJS26' 
    }
    stages {
        stage('Instalación de dependencias') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Instalar Navegadores') {
            steps {
                sh 'npx playwright install chromium'
            }
        }
        stage('Ejecutar Pruebas') {
            steps {
                sh 'npx playwright test "storePom.spec.ts" --project=chromium'
            }
        }
    }
    post {
        always {
            // Usa el plugin HTML Publisher para guardar tu evidencia
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: true, 
                keepAll: true, 
                reportDir: 'playwright-report', 
                reportFiles: 'index.html', 
                reportName: 'Reporte Playwright'
            ])
        }
    }
}